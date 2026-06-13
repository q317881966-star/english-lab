// English Lab — 语音引擎
// iOS Safari 兼容：必须在用户手势回调中同步调用 speak()

const Voice = {
  _synth: null,
  _voices: [],

  init() {
    if (!('speechSynthesis' in window)) return;
    this._synth = window.speechSynthesis;
    const load = () => { this._voices = this._synth.getVoices(); };
    load();
    this._synth.onvoiceschanged = load;
  },

  // 找最优语音
  _pickVoice() {
    if (this._voices.length === 0) {
      this._voices = this._synth.getVoices();
    }
    const best = [
      'Samantha (Enhanced)', 'Samantha',
      'Daniel (Enhanced)', 'Daniel',
      'Google US English',
      'Karen (Enhanced)', 'Karen',
    ];
    for (const name of best) {
      const v = this._voices.find(v => v.name === name);
      if (v) return v;
    }
    return this._voices.find(v => v.lang?.startsWith('en')) || null;
  },

  // iOS 解锁：必须在用户手势中调用一次真正的 speak
  // 返回 true 表示已解锁成功
  _unlock() {
    if (!this._synth) return false;
    const u = new SpeechSynthesisUtterance('hello');
    u.volume = 0;
    u.rate = 2;
    this._synth.cancel();
    this._synth.speak(u);
    return true;
  },

  speak(text) {
    if (!text || !text.trim()) return;
    if (!this._synth) return;

    this._synth.cancel();

    const u = new SpeechSynthesisUtterance(text);
    const voice = this._pickVoice();
    if (voice) u.voice = voice;
    u.lang = 'en-US';
    u.rate = 0.85;
    u.pitch = 1.0;
    u.volume = 1;

    this._synth.speak(u);
  },

  stop() {
    if (this._synth) this._synth.cancel();
  },
};
