// English Lab — 语音引擎（精简版：仅 Edge TTS）
const Voice = {
  _edgeWS: null,
  _edgeBusy: false,
  _currentAudio: null,
  _cache: {},
  _cacheMaxSize: 200,
  _cacheOrder: [],

  _uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  },

  _getEdgeWSUrl() {
    return 'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4';
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

  _createEdgeWS() {
    if (this._edgeWS) { try { this._edgeWS.close(); } catch(e) {} this._edgeWS = null; }
    return new Promise((resolve, reject) => {
      try {
        const ws = new WebSocket(this._getEdgeWSUrl());
        ws.binaryType = 'arraybuffer';
        let connected = false;
        ws.onopen = () => { connected = true; this._edgeWS = ws; this._edgeBusy = false; resolve(ws); };
        ws.onerror = () => { if (!connected) reject(new Error('连接失败')); };
        ws.onclose = () => { this._edgeWS = null; this._edgeBusy = false; };
        setTimeout(() => { if (!connected) reject(new Error('连接超时')); }, 3000);
      } catch(e) { reject(e); }
    });
  },

  _getEdgeWS() {
    if (this._edgeWS && this._edgeWS.readyState === WebSocket.OPEN && !this._edgeBusy) {
      return Promise.resolve(this._edgeWS);
    }
    return this._createEdgeWS();
  },

  _synthesize(text) {
    const cacheKey = text.toLowerCase().trim();
    if (this._cache[cacheKey]) {
      this._cacheOrder = this._cacheOrder.filter(k => k !== cacheKey);
      this._cacheOrder.push(cacheKey);
      return Promise.resolve(this._cache[cacheKey]);
    }

    return new Promise((resolve, reject) => {
      if (!text || !text.trim()) { reject(new Error('empty')); return; }
      this._getEdgeWS().then(ws => {
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
              // 缓存
              while (this._cacheOrder.length >= this._cacheMaxSize) {
                delete this._cache[this._cacheOrder.shift()];
              }
              this._cache[cacheKey] = chunks;
              this._cacheOrder.push(cacheKey);
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
          context: { synthesis: { audio: { metadataoptions: { sentenceBoundaryEnabled: false, wordBoundaryEnabled: true }, outputFormat: 'audio-24khz-48kbitrate-mono-mp3' } } }
        });
        this._edgeSend(ws, requestId, 'application/json; charset=utf-8', 'speech.config', config);
        const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="en-US"><voice name="en-US-JennyNeural"><prosody rate="0.85" pitch="+0Hz">${escaped}</prosody></voice></speak>`;
        this._edgeSend(ws, requestId, 'application/ssml+xml', 'ssml', ssml);
        timeout = setTimeout(() => {
          ws.removeEventListener('message', onMsg);
          this._edgeBusy = false;
          if (chunks.length > 0) resolve(chunks); else reject(new Error('TTS 超时'));
        }, 5000);
      }).catch(reject);
    });
  },

  _playChunks(chunks) {
    this.stop();
    const blob = new Blob(chunks, { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    this._currentAudio = audio;
    audio.onended = () => { URL.revokeObjectURL(url); this._currentAudio = null; };
    audio.onerror = () => { URL.revokeObjectURL(url); this._currentAudio = null; };
    audio.play().catch(() => { URL.revokeObjectURL(url); this._currentAudio = null; });
  },

  speak(text) {
    this.stop();
    if (!text || !text.trim()) return;
    this._synthesize(text).then(chunks => this._playChunks(chunks)).catch(() => {});
  },

  stop() {
    if (this._currentAudio) { this._currentAudio.pause(); this._currentAudio = null; }
  },

  init() {
    // 预热 WebSocket 连接
    setTimeout(() => {
      this._getEdgeWS().then(() => console.log('Voice: Edge TTS 就绪')).catch(() => {});
    }, 1000);
  },
};
