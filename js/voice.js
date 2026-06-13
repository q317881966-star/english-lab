// English Lab — 语音引擎
// Edge TTS WebSocket → AudioContext 解码播放（iOS 已解锁 AudioContext）

const Voice = {
  _ws: null,
  _ctx: null,
  _source: null,

  init() {
    this._ctx = new (window.AudioContext || window.webkitAudioContext)();
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

  // 通过已解锁的 AudioContext 播放，绕开 iOS HTML5 Audio 限制
  _playChunks(chunks) {
    if (!this._ctx) return Promise.reject(new Error('no ctx'));

    // 等待 AudioContext 恢复
    const ready = this._ctx.state === 'suspended'
      ? this._ctx.resume()
      : Promise.resolve();

    return ready.then(() => {
      return new Promise((resolve, reject) => {
        const blob = new Blob(chunks, { type: 'audio/mp3' });
        const reader = new FileReader();
        reader.onload = () => {
          this._ctx.decodeAudioData(reader.result, (buf) => {
            this.stop();
            const src = this._ctx.createBufferSource();
            src.buffer = buf;
            src.connect(this._ctx.destination);
            src.start(0);
            this._source = src;
            src.onended = () => { this._source = null; resolve(); };
          }, () => { reject(new Error('decode fail')); });
        };
        reader.onerror = () => { reject(new Error('read fail')); };
        reader.readAsArrayBuffer(blob);
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

  speak(text) {
    if (!text || !text.trim()) return;

    // 1. 立即启动浏览器语音（在用户手势内，iOS 不拦截）
    this._speakBrowser(text);

    // 2. 后台尝试 Edge TTS 高音质，成功则替换
    this._connect().then(ws => this._speakOne(ws, text))
      .then(chunks => {
        this.stop();
        return this._playChunks(chunks);
      })
      .catch(() => {
        // Edge TTS 失败，浏览器语音已在播放
      });
  },

  stop() {
    if (this._source) {
      try { this._source.stop(); } catch(e) {}
      this._source = null;
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  },

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
