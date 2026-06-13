// English Lab — 语音引擎
// 优先浏览器原生 TTS（iOS Samantha / Android Google），即时响应无延迟

const Voice = {
  _synth: null,
  _ready: false,
  _bestVoice: null,
  _unlockDone: false,

  // === 初始化 ===
  init() {
    if (!('speechSynthesis' in window)) {
      console.warn('Voice: 浏览器不支持语音合成');
      return;
    }
    this._synth = window.speechSynthesis;

    // 加载语音列表
    const loadVoices = () => {
      const voices = this._synth.getVoices();
      if (voices.length > 0) {
        this._bestVoice = this._pickBestVoice(voices);
        this._ready = true;
      }
    };
    loadVoices();
    this._synth.onvoiceschanged = loadVoices;
    // 有些浏览器不会触发 onvoiceschanged，兜底
    setTimeout(() => { if (!this._ready) loadVoices(); }, 1000);
  },

  // === 选最优语音 ===
  _pickBestVoice(voices) {
    // iOS: Samantha（增强版）是最自然的神经网络语音
    const iOS_PRIORITY = [
      'Samantha (Enhanced)', 'Samantha', 'Daniel (Enhanced)', 'Daniel',
      'Karen (Enhanced)', 'Karen', 'Moira (Enhanced)', 'Moira',
      'Alex', 'Victoria', 'Fred',
    ];
    // Chrome/Android: Google 语音
    const CHROME_PRIORITY = [
      'Google US English', 'Google UK English Female', 'Google UK English Male',
      'Microsoft Zira', 'Microsoft David', 'Microsoft Mark',
    ];

    // 优先 iOS 语音
    for (const name of iOS_PRIORITY) {
      const v = voices.find(v => v.name === name);
      if (v) return v;
    }
    // 其次 Google/Microsoft
    for (const name of CHROME_PRIORITY) {
      const v = voices.find(v => v.name === name);
      if (v) return v;
    }
    // 最后找个 en-US 的
    const enVoice = voices.find(v => v.lang.startsWith('en-US'));
    if (enVoice) return enVoice;
    const anyEn = voices.find(v => v.lang.startsWith('en'));
    if (anyEn) return anyEn;
    return voices[0];
  },

  // === 解锁音频（iOS 需要在用户手势中触发一次） ===
  unlock() {
    if (this._unlockDone || !this._synth) return;
    // 说一个空字符串来激活音频上下文
    const u = new SpeechSynthesisUtterance('');
    u.volume = 0;
    u.rate = 2;
    this._synth.cancel();
    this._synth.speak(u);
    this._unlockDone = true;
  },

  // === 朗读 ===
  speak(text) {
    if (!text || !text.trim()) return;
    if (!this._synth) return;

    // 确保解锁
    if (!this._unlockDone) this.unlock();

    // 停止当前播放
    this._synth.cancel();

    const u = new SpeechSynthesisUtterance(text);

    // 用最优语音
    if (this._bestVoice) u.voice = this._bestVoice;

    u.lang = 'en-US';
    u.rate = 0.85;    // 慢速，适合学习
    u.pitch = 1.0;
    u.volume = 1;

    // iOS Safari 有时需要重新设置 voice
    this._synth.speak(u);

    // iOS 有个 bug：长时间不调用 speak 后第一次可能无声
    // 用 setTimeout 兜底重试
    const retryTimer = setTimeout(() => {
      if (this._synth.speaking === false && this._synth.pending === false) {
        // 可能没播放出来，用当前 voices 再试一次
        const voices = this._synth.getVoices();
        if (voices.length > 0) {
          this._bestVoice = this._pickBestVoice(voices);
          const u2 = new SpeechSynthesisUtterance(text);
          if (this._bestVoice) u2.voice = this._bestVoice;
          u2.lang = 'en-US';
          u2.rate = 0.85;
          u2.pitch = 1.0;
          u2.volume = 1;
          this._synth.speak(u2);
        }
      }
    }, 150);

    u.onstart = () => clearTimeout(retryTimer);
  },

  stop() {
    if (this._synth) this._synth.cancel();
  },
};
