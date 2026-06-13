// English Lab — 语音引擎
// Edge TTS WebSocket + iOS 兼容播放

const Voice = {
  _ws: null,
  _wsBusy: false,
  _pending: [],        // 等待播放的文本队列
  _currentAudio: null,

  init() {
    // 什么都不用做，首次 speak 时自动建 WebSocket
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
        const timer = setTimeout(() => { if (!ws._open) { ws.close(); reject(new Error('timeout')); } }, 4000);
        ws.onopen = () => { ws._open = true; clearTimeout(timer); this._ws = ws; resolve(ws); };
        ws.onerror = () => { clearTimeout(timer); reject(new Error('连接失败')); };
        ws.onclose = () => { this._ws = null; };
        ws.onmessage = () => {}; // 占位，实际在 _speakOne 里绑定
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

  // 播放音频 chunks（返回 Promise，失败时可降级到浏览器语音）
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
        // 跳过 header 行（直到第一个 0x0a）
        let start = 0;
        for (let i = 0; i < Math.min(data.length, 100); i++) {
          if (data[i] === 0x0a) { start = i + 1; break; }
        }
        if (data.length > start) chunks.push(data.slice(start));
      };

      ws.addEventListener('message', onMsg);

      // 发送 SSML 配置
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
  speak(text) {
    if (!text || !text.trim()) return;

    this._connect().then(ws => {
      return this._speakOne(ws, text);
    }).then(chunks => {
      return this._playChunks(chunks);
    }).catch(() => {
      // Edge TTS 失败 → 兜底：用浏览器语音
      this._speakBrowser(text);
    });
  },

  stop() {
    if (this._currentAudio) {
      this._currentAudio.pause();
      this._currentAudio = null;
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  },

  // === 浏览器语音兜底 ===
  _speakBrowser(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const best = voices.find(v => v.name.includes('Samantha'))
      || voices.find(v => v.name.includes('Google'))
      || voices.find(v => v.lang?.startsWith('en'));
    if (best) u.voice = best;
    window.speechSynthesis.speak(u);
  },
};
