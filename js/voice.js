// English Lab — 语音引擎
// 支持 3 个 TTS 后端对比：Microsoft Edge（免费）/ Google Cloud / OpenAI

const Voice = {
  _synth: null,
  _recognition: null,
  _isListening: false,
  _bestVoice: null,
  _voicesLoaded: false,
  _edgeWS: null,
  _edgeBusy: false,
  _currentAudio: null,
  _onChunk: null,
  _cache: {},               // 音频缓存 { key: { chunks, timestamp } }
  _cacheMaxSize: 200,       // 最多缓存 200 条
  _cacheOrder: [],          // LRU 顺序

  // ================================================================
  // TTS 后端定义
  // ================================================================

  _BACKENDS: {
    edge: {
      name: 'Microsoft Edge（免费·神经）',
      free: true,
      needsKey: false,
      voices: [
        { id: 'en-US-JennyNeural',    label: 'Jenny（美式·女）' },
        { id: 'en-US-AriaNeural',     label: 'Aria（美式·女）' },
        { id: 'en-US-GuyNeural',      label: 'Guy（美式·男）' },
        { id: 'en-US-DavisNeural',    label: 'Davis（美式·男）' },
        { id: 'en-US-JaneNeural',     label: 'Jane（美式·女）' },
        { id: 'en-US-JasonNeural',    label: 'Jason（美式·男）' },
        { id: 'en-US-SaraNeural',     label: 'Sara（美式·女）' },
        { id: 'en-US-TonyNeural',     label: 'Tony（美式·男）' },
        { id: 'en-US-NancyNeural',    label: 'Nancy（美式·女）' },
        { id: 'en-GB-SoniaNeural',    label: 'Sonia（英式·女）' },
        { id: 'en-GB-RyanNeural',     label: 'Ryan（英式·男）' },
        { id: 'en-GB-LibbyNeural',    label: 'Libby（英式·女）' },
        { id: 'en-AU-NatashaNeural',  label: 'Natasha（澳式·女）' },
        { id: 'en-CA-ClaraNeural',    label: 'Clara（加拿大·女）' },
      ],
      defaultVoice: 'en-US-JennyNeural',
    },

    google: {
      name: 'Google Cloud（需 API Key）',
      free: false,
      needsKey: true,
      keySetting: 'googleApiKey',
      voices: [
        { id: 'en-US-Standard-A', label: 'Standard A（美式·女）' },
        { id: 'en-US-Standard-B', label: 'Standard B（美式·男）' },
        { id: 'en-US-Standard-C', label: 'Standard C（美式·女）' },
        { id: 'en-US-Standard-D', label: 'Standard D（美式·男）' },
        { id: 'en-US-Standard-E', label: 'Standard E（美式·女）' },
        { id: 'en-US-Standard-G', label: 'Standard G（美式·女）' },
        { id: 'en-US-Standard-I', label: 'Standard I（美式·男）' },
        { id: 'en-US-Standard-J', label: 'Standard J（美式·男）' },
        { id: 'en-US-Wavenet-A',  label: 'WaveNet A（美式·女·HQ）' },
        { id: 'en-US-Wavenet-B',  label: 'WaveNet B（美式·男·HQ）' },
        { id: 'en-US-Wavenet-C',  label: 'WaveNet C（美式·女·HQ）' },
        { id: 'en-US-Wavenet-D',  label: 'WaveNet D（美式·男·HQ）' },
        { id: 'en-US-Wavenet-F',  label: 'WaveNet F（美式·女·HQ）' },
        { id: 'en-US-Studio-O',   label: 'Studio O（美式·女·顶级）' },
        { id: 'en-GB-Standard-A', label: 'Standard A（英式·女）' },
        { id: 'en-GB-Standard-B', label: 'Standard B（英式·男）' },
        { id: 'en-GB-Wavenet-A',  label: 'WaveNet A（英式·女·HQ）' },
        { id: 'en-GB-Wavenet-B',  label: 'WaveNet B（英式·男·HQ）' },
        { id: 'en-AU-Standard-A', label: 'Standard A（澳式·女）' },
        { id: 'en-AU-Wavenet-A',  label: 'WaveNet A（澳式·女·HQ）' },
      ],
      defaultVoice: 'en-US-Wavenet-A',
    },

    openai: {
      name: 'OpenAI（需 API Key）',
      free: false,
      needsKey: true,
      keySetting: 'openaiApiKey',
      voices: [
        { id: 'alloy',   label: 'Alloy（中性·自然）' },
        { id: 'ash',     label: 'Ash（男·沉稳）' },
        { id: 'ballad',  label: 'Ballad（男·深情）' },
        { id: 'coral',   label: 'Coral（女·温暖）' },
        { id: 'echo',    label: 'Echo（男·磁性）' },
        { id: 'fable',   label: 'Fable（男·英伦）' },
        { id: 'nova',    label: 'Nova（女·清澈）' },
        { id: 'onyx',    label: 'Onyx（男·深沉）' },
        { id: 'sage',    label: 'Sage（女·知性）' },
        { id: 'shimmer', label: 'Shimmer（女·明亮）' },
        { id: 'verse',   label: 'Verse（男·活力）' },
      ],
      defaultVoice: 'nova',
      modelSetting: 'openaiModel',
      models: [
        { id: 'tts-1', label: 'tts-1（标准）' },
        { id: 'tts-1-hd', label: 'tts-1-hd（高清）' },
      ],
      defaultModel: 'tts-1',
    },
  },

  // ================================================================
  // 后端 & 语音选择
  // ================================================================

  _currentBackend() {
    const settings = Storage.getSettings();
    const engine = settings.ttsEngine || 'edge';
    return this._BACKENDS[engine] || this._BACKENDS.edge;
  },

  _currentVoiceId() {
    const settings = Storage.getSettings();
    const backend = this._currentBackend();
    const voiceKey = `ttsVoice_${settings.ttsEngine || 'edge'}`;
    return settings[voiceKey] || backend.defaultVoice;
  },

  getVoiceName() {
    const settings = Storage.getSettings();
    const backend = this._currentBackend();
    const voiceId = this._currentVoiceId();
    const voice = backend.voices.find(v => v.id === voiceId);
    const voiceLabel = voice ? voice.label : voiceId;
    return `${voiceLabel}（${backend.name.split('（')[0]}）`;
  },

  // 获取所有后端列表（供设置页）
  getBackends() {
    return Object.entries(this._BACKENDS).map(([id, b]) => ({
      id, name: b.name, free: b.free, needsKey: b.needsKey,
    }));
  },

  // 获取当前引擎的语音列表
  getVoicesForEngine(engineId) {
    const backend = this._BACKENDS[engineId];
    return backend ? backend.voices.map(v => ({ ...v })) : [];
  },

  getAvailableVoices() {
    const settings = Storage.getSettings();
    const engine = settings.ttsEngine || 'edge';
    return this.getVoicesForEngine(engine);
  },

  // ================================================================
  // Edge TTS 实现（WebSocket 流式）
  // ================================================================

  _getEdgeWSUrl() {
    return 'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4';
  },

  _uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  },

  _edgeSend(ws, requestId, contentType, path, body) {
    const h = `X-RequestId:${requestId}\r\nContent-Type:${contentType}\r\nPath:${path}\r\n\r\n`;
    const enc = new TextEncoder();
    const hb = enc.encode(h);
    const bb = body ? enc.encode(body) : new Uint8Array(0);
    const msg = new Uint8Array(hb.length + bb.length);
    msg.set(hb, 0);
    if (body) msg.set(bb, hb.length);
    ws.send(msg);
  },

  _getEdgeWS() {
    if (this._edgeWS && this._edgeWS.readyState === WebSocket.OPEN && !this._edgeBusy) {
      return Promise.resolve(this._edgeWS);
    }
    return this._createEdgeWS();
  },

  _createEdgeWS() {
    if (this._edgeWS) {
      try { this._edgeWS.close(); } catch(e) {}
      this._edgeWS = null;
    }
    return new Promise((resolve, reject) => {
      try {
        const ws = new WebSocket(this._getEdgeWSUrl());
        ws.binaryType = 'arraybuffer';
        let connected = false;
        ws.onopen = () => {
          connected = true;
          this._edgeWS = ws;
          this._edgeBusy = false;
          resolve(ws);
        };
        ws.onerror = () => {
          if (!connected) reject(new Error('Edge TTS 连接失败'));
        };
        ws.onclose = () => {
          this._edgeWS = null;
          this._edgeBusy = false;
        };
        setTimeout(() => { if (!connected) reject(new Error('Edge TTS 连接超时')); }, 3000);
      } catch(e) { reject(e); }
    });
  },

  _edgeSynthesize(text, voiceId, rate) {
    return new Promise((resolve, reject) => {
      if (!text || !text.trim()) { reject(new Error('empty')); return; }
      const run = (ws) => {
        this._edgeBusy = true;
        const chunks = [];
        const requestId = this._uuid();
        let timeout;
        const onMsg = (event) => {
          if (typeof event.data === 'string') {
            if (event.data.includes('Path:turn.end')) {
              clearTimeout(timeout);
              ws.removeEventListener('message', onMsg);
              this._edgeBusy = false;
              resolve(chunks);
            }
            return;
          }
          const data = new Uint8Array(event.data);
          const headerEnd = data.indexOf(0x0a);
          const audioData = (headerEnd > 0 && headerEnd < 50) ? data.slice(headerEnd + 1) : data;
          if (audioData.length > 0) chunks.push(audioData);
        };
        ws.addEventListener('message', onMsg);
        const config = JSON.stringify({
          context: {
            synthesis: {
              audio: {
                metadataoptions: { sentenceBoundaryEnabled: false, wordBoundaryEnabled: true },
                outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
              },
            },
          },
        });
        this._edgeSend(ws, requestId, 'application/json; charset=utf-8', 'speech.config', config);
        const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="en-US"><voice name="${voiceId}"><prosody rate="${rate}" pitch="+0Hz">${escaped}</prosody></voice></speak>`;
        this._edgeSend(ws, requestId, 'application/ssml+xml', 'ssml', ssml);
        timeout = setTimeout(() => {
          ws.removeEventListener('message', onMsg);
          this._edgeBusy = false;
          if (chunks.length > 0) resolve(chunks); else reject(new Error('Edge TTS 超时'));
        }, 5000);
      };
      this._getEdgeWS().then(run).catch(reject);
    });
  },

  // ================================================================
  // Google Cloud TTS（REST API）
  // ================================================================

  _googleSynthesize(text, voiceId, rate) {
    const settings = Storage.getSettings();
    const apiKey = settings.googleApiKey;
    if (!apiKey) return Promise.reject(new Error('请先设置 Google API Key'));

    // 语速映射：0.5-1.0 → Google speaking_rate 0.7-1.3
    const speakingRate = 0.6 + (rate || 0.9) * 0.7;

    return fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode: voiceId.split('-').slice(0, 2).join('-'), name: voiceId },
        audioConfig: { audioEncoding: 'MP3', speakingRate },
      }),
    }).then(res => {
      if (!res.ok) return res.json().then(e => { throw new Error(e.error?.message || `Google TTS ${res.status}`); });
      return res.json();
    }).then(data => {
      if (!data.audioContent) throw new Error('Google TTS 返回空音频');
      const binary = atob(data.audioContent);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return [bytes];
    });
  },

  // ================================================================
  // OpenAI TTS（REST API）
  // ================================================================

  _openaiSynthesize(text, voiceId, rate) {
    const settings = Storage.getSettings();
    const apiKey = settings.openaiApiKey;
    if (!apiKey) return Promise.reject(new Error('请先设置 OpenAI API Key'));

    const model = settings.openaiModel || 'tts-1';
    // OpenAI 不支持 rate 参数，忽略

    return fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        input: text,
        voice: voiceId,
        response_format: 'mp3',
      }),
    }).then(res => {
      if (!res.ok) return res.json().then(e => { throw new Error(e.error?.message || `OpenAI TTS ${res.status}`); });
      return res.arrayBuffer();
    }).then(buffer => {
      return [new Uint8Array(buffer)];
    });
  },

  // ================================================================
  // 音频缓存
  // ================================================================

  _cacheKey(text, engine, voiceId, rate) {
    return `${engine}|${voiceId}|${rate.toFixed(2)}|${text.toLowerCase().trim()}`;
  },

  _cacheGet(key) {
    const entry = this._cache[key];
    if (!entry) return null;
    // 将访问的移到 LRU 队尾
    this._cacheOrder = this._cacheOrder.filter(k => k !== key);
    this._cacheOrder.push(key);
    return entry.chunks;
  },

  _cacheSet(key, chunks) {
    // LRU 淘汰
    while (this._cacheOrder.length >= this._cacheMaxSize) {
      const old = this._cacheOrder.shift();
      delete this._cache[old];
    }
    this._cache[key] = { chunks, timestamp: Date.now() };
    this._cacheOrder.push(key);
  },

  _cacheClear() {
    this._cache = {};
    this._cacheOrder = [];
  },

  // ================================================================
  // 统一合成入口
  // ================================================================

  _synthesize(text, options = {}) {
    const settings = Storage.getSettings();
    const engine = options.engine || settings.ttsEngine || 'edge';
    const voiceId = options.voice || this._currentVoiceId();
    const rate = options.rate != null ? options.rate : (0.4 + (settings.voiceSpeed || 0.75) * 0.8);

    // 查缓存
    const key = this._cacheKey(text, engine, voiceId, rate);
    const cached = this._cacheGet(key);
    if (cached) return Promise.resolve(cached);

    let promise;
    switch (engine) {
      case 'edge':   promise = this._edgeSynthesize(text, voiceId, rate); break;
      case 'google': promise = this._googleSynthesize(text, voiceId, rate); break;
      case 'openai': promise = this._openaiSynthesize(text, voiceId, rate); break;
      default:       return Promise.reject(new Error(`未知引擎: ${engine}`));
    }

    return promise.then(chunks => {
      this._cacheSet(key, chunks);
      return chunks;
    });
  },

  // ================================================================
  // 音频播放
  // ================================================================

  _playAudioChunks(chunks) {
    this.stop();
    const blob = new Blob(chunks, { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    this._currentAudio = audio;
    audio.onended = () => { URL.revokeObjectURL(url); this._currentAudio = null; };
    audio.onerror = () => { URL.revokeObjectURL(url); this._currentAudio = null; };
    audio.play().catch(() => { URL.revokeObjectURL(url); this._currentAudio = null; });
  },

  stop() {
    if (this._currentAudio) {
      this._currentAudio.pause();
      this._currentAudio = null;
    }
    if (this.checkTTS()) window.speechSynthesis.cancel();
  },

  // ================================================================
  // 对外接口（智能分流：短词浏览器即时，句子引擎高质量）
  // ================================================================

  isShortText(text) {
    return text.split(/\s+/).length <= 3;
  },

  // 单词：浏览器 TTS 即时响应 + 后台缓存引擎结果
  speakWord(word) {
    this.stop();
    if (!word || !word.trim()) return;

    // 始终先用浏览器 TTS 即时响应
    this._speakBrowser(word);

    // 后台拉取引擎音频做缓存（不阻塞）
    const settings = Storage.getSettings();
    const engine = settings.ttsEngine || 'edge';
    const voiceId = this._currentVoiceId();
    const rate = 0.4 + (settings.voiceSpeed || 0.75) * 0.8;
    const key = this._cacheKey(word, engine, voiceId, rate);
    if (!this._cache[key]) {
      this._synthesize(word).catch(() => {});
    }
  },

  // 句子：引擎 TTS（高质量）
  speakSentence(sentence) {
    this.stop();
    if (!sentence || !sentence.trim()) return;

    this._synthesize(sentence).then(chunks => {
      this._playAudioChunks(chunks);
    }).catch(err => {
      console.warn('引擎失败，回退浏览器:', err.message);
      this._speakBrowser(sentence);
    });
  },

  speak(text) {
    if (!text || !text.trim()) return;
    if (this.isShortText(text)) {
      this.speakWord(text);
    } else {
      this.speakSentence(text);
    }
  },

  // ================================================================
  // 浏览器 TTS（兜底）
  // ================================================================

  checkTTS() { return 'speechSynthesis' in window; },

  _speakBrowser(text) {
    if (!this.checkTTS()) return;
    window.speechSynthesis.cancel();
    const settings = Storage.getSettings();
    const u = new SpeechSynthesisUtterance(text);
    const voice = this._findBrowserVoice();
    if (voice) u.voice = voice;
    u.lang = 'en-US';
    u.rate = settings.voiceSpeed || 0.75;
    u.pitch = 0.95;
    u.volume = 1;
    window.speechSynthesis.speak(u);
  },

  _findBrowserVoice() {
    if (this._bestVoice) return this._bestVoice;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return null;
    const PRIORITY = [
      'Samantha', 'Samantha (Enhanced)', 'Alex', 'Karen', 'Daniel',
      'Google US English', 'Google UK English Female', 'Google UK English Male',
      'Microsoft Zira', 'Microsoft David',
    ];
    for (const name of PRIORITY) {
      const found = voices.find(v => v.name === name);
      if (found) { this._bestVoice = found; return found; }
    }
    return voices.find(v => v.lang.startsWith('en')) || voices[0];
  },

  // ================================================================
  // 语音识别
  // ================================================================

  checkRecognition() {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  },

  startRecognition(options = {}) {
    return new Promise((resolve, reject) => {
      if (!this.checkRecognition()) { reject(new Error('浏览器不支持语音识别')); return; }
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SpeechRecognition();
      this._recognition = rec;
      rec.lang = options.lang || 'en-US';
      rec.interimResults = options.interimResults || false;
      rec.maxAlternatives = options.maxAlternatives || 1;
      rec.continuous = false;
      let result = '';
      rec.onresult = (e) => { result = e.results[0][0].transcript.trim(); };
      rec.onerror = (e) => { this._isListening = false; reject(new Error(`识别错误: ${e.error}`)); };
      rec.onend = () => { this._isListening = false; resolve(result); };
      this._isListening = true;
      rec.start();
      setTimeout(() => {
        if (this._isListening) { rec.stop(); if (!result) reject(new Error('识别超时')); }
      }, 10000);
    });
  },

  stopRecognition() {
    if (this._recognition && this._isListening) {
      this._recognition.stop();
      this._isListening = false;
    }
  },

  get isListening() { return this._isListening; },

  // ================================================================
  // 跟读对比
  // ================================================================

  comparePronunciation(original, spoken) {
    const orig = original.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const spoke = spoken.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    if (!spoke) return { score: 0, match: false, detail: '未识别到语音' };
    const origWords = orig.split(/\s+/);
    const spokeWords = spoke.split(/\s+/);
    let matched = 0;
    const details = [];
    for (const ow of origWords) {
      const found = spokeWords.some(sw =>
        sw === ow || (ow.length > 3 && sw.includes(ow)) || (ow.length > 3 && ow.includes(sw))
      );
      if (found) matched++;
      details.push({ word: ow, matched: found });
    }
    const score = origWords.length > 0 ? Math.round((matched / origWords.length) * 100) : 0;
    return {
      score, match: score >= 60,
      matchedWords: matched, totalWords: origWords.length,
      detail: `${matched}/${origWords.length} 个单词匹配`,
      wordDetails: details,
    };
  },

  // ================================================================
  // 初始化
  // ================================================================

  init() {
    if (this.checkTTS()) {
      const load = () => {
        window.speechSynthesis.getVoices();
        this._bestVoice = null;
        this._voicesLoaded = true;
      };
      load();
      window.speechSynthesis.onvoiceschanged = load;
      setTimeout(() => { if (!this._voicesLoaded) load(); }, 1000);
    }

    // 预热 Edge TTS（如当前引擎为 edge）
    const settings = Storage.getSettings();
    if ((settings.ttsEngine || 'edge') === 'edge') {
      setTimeout(() => {
        this._getEdgeWS().then(() => {
          console.log('English Lab: Edge TTS 连接就绪');
        }).catch(() => {
          console.log('English Lab: Edge TTS 不可用');
        });
      }, 2000);
    }

    console.log('English Lab: 多引擎语音就绪（Edge / Google / OpenAI）');
  },
};
