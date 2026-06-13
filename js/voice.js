// English Lab — 语音引擎
// 主力：浏览器原生语音（iOS Samantha / 系统语音，质量足够好且100%可靠）
// 增强：后台尝试 Edge TTS，成功则替换

const Voice = {
  _ws: null,
  _currentAudio: null,
  _bestVoice: null,
  _voiceReady: false,

  init() {
    // 预加载系统语音列表
    if ('speechSynthesis' in window) {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) this._pickBest(voices);
      window.speechSynthesis.onvoiceschanged = () => {
        this._pickBest(window.speechSynthesis.getVoices());
      };
    }
  },

  _pickBest(voices) {
    // iOS: Samantha | Android: Google US | 桌面: 任一 en-US
    this._bestVoice =
      voices.find(v => v.name.includes('Samantha')) ||
      voices.find(v => v.name.includes('Google') && v.lang.startsWith('en')) ||
      voices.find(v => v.lang === 'en-US' && v.localService) ||
      voices.find(v => v.lang.startsWith('en'));
    this._voiceReady = true;
  },

  _uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  },

  _connect() {
    if (this._ws && this._ws.readyState === WebSocket.OPEN) return Promise.resolve(this._ws);
    if (this._ws && this._ws.readyState === WebSocket.CONNECTING) return Promise.resolve(this._ws);

    return new Promise((resolve, reject) => {
      try {
        const ws = new WebSocket(
          'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4'
        );
        ws.binaryType = 'arraybuffer';
        const timer = setTimeout(() => { if (!ws._open) { ws.close(); reject(new Error('timeout')); } }, 3000);
        ws.onopen = () => { ws._open = true; clearTimeout(timer); this._ws = ws; resolve(ws); };
        ws.onerror = () => { clearTimeout(timer); reject(new Error('连接失败')); };
        ws.onclose = () => { this._ws = null; };
        ws.onmessage = () => {};
      } catch(e) { reject(e); }
    });
  },

  _escapeXml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  _send(ws, requestId, contentType, path, body) {
    const h = `X-RequestId:${requestId}\r\nContent-Type:${contentType}\r\nPath:${path}\r\n\r\n`;
    const enc = new TextEncoder();
    const hb = enc.encode(h);
    const bb = body ? enc.encode(body) : new Uint8Array(0);
    const msg = new Uint8Array(hb.length + bb.length);
    msg.set(hb, 0);
    if (body) msg.set(bb, hb.length);
    ws.send(msg);
  },

  _playChunks(chunks) {
    return new Promise((resolve, reject) => {
      const blob = new Blob(chunks, { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      this._currentAudio = audio;
      audio.onended = () => { URL.revokeObjectURL(url); this._currentAudio = null; resolve(); };
      audio.onerror = () => { URL.revokeObjectURL(url); this._currentAudio = null; reject(new Error('播放失败')); };
      audio.play().then(() => {}).catch(() => {
        URL.revokeObjectURL(url);
        this._currentAudio = null;
        reject(new Error('播放被拒'));
      });
    });
  },

  _speakOne(ws, text) {
    return new Promise((resolve, reject) => {
      const chunks = [];
      const requestId = this._uuid();
      let timeout;

      const onMsg = (event) => {
        if (typeof event.data === 'string') {
          if (event.data.includes('Path:turn.end')) {
            clearTimeout(timeout);
            ws.removeEventListener('message', onMsg);
            resolve(chunks);
          }
          return;
        }
        const data = new Uint8Array(event.data);
        let start = 0;
        for (let i = 0; i < Math.min(data.length, 100); i++) {
          if (data[i] === 0x0a) { start = i + 1; break; }
        }
        if (data.length > start) chunks.push(data.slice(start));
      };

      ws.addEventListener('message', onMsg);

      const config = JSON.stringify({
        context: { synthesis: { audio: { metadataoptions: { sentenceBoundaryEnabled: false, wordBoundaryEnabled: true }, outputFormat: 'audio-24khz-48kbitrate-mono-mp3' } } }
      });
      this._send(ws, requestId, 'application/json; charset=utf-8', 'speech.config', config);

      const escaped = this._escapeXml(text);
      const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="en-US"><voice name="en-US-JennyNeural"><prosody rate="-15.00%" pitch="+0Hz">${escaped}</prosody></voice></speak>`;
      this._send(ws, requestId, 'application/ssml+xml', 'ssml', ssml);

      timeout = setTimeout(() => {
        ws.removeEventListener('message', onMsg);
        if (chunks.length > 0) resolve(chunks); else reject(new Error('超时'));
      }, 5000);
    });
  },

  // === 对外接口 ===
  // 策略：立即用浏览器语音播放（在用户手势内）→ 后台拉取 Edge TTS 替换
  speak(text) {
    if (!text || !text.trim()) return;
    const trimmed = text.trim();

    // 1. 立即用浏览器语音播放（100% 可靠，iOS Samantha 质量很好）
    this._speakBrowser(trimmed);

    // 2. 后台尝试拉取 Edge TTS（更高音质），成功则替换
    this._connect().then(ws => this._speakOne(ws, trimmed))
      .then(chunks => {
        this.stop(); // 停掉浏览器语音
        return this._playChunks(chunks);
      })
      .catch(() => {
        // Edge TTS 失败，浏览器语音已经在播了，不用处理
      });
  },

  stop() {
    if (this._currentAudio) {
      this._currentAudio.pause();
      this._currentAudio = null;
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  },

  _speakBrowser(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.8;
    if (this._bestVoice) u.voice = this._bestVoice;
    window.speechSynthesis.speak(u);
  },
};
