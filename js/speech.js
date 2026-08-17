// English Lab — 口语识别(方案 A)
// 用浏览器语音识别听您说英文,与目标句比对,判断是否说对

const Speech = {
  // 是否支持语音识别(iOS Safari / Chrome / Edge 均支持)
  supported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  },

  // 开始一次识别,返回 Promise<string>(识别出的英文)
  recognize() {
    return new Promise((resolve, reject) => {
      if (!this.supported()) {
        reject(new Error('此浏览器不支持语音识别'));
        return;
      }
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SR();
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      let final = '';
      let settled = false;

      const done = (fn, arg) => {
        if (settled) return;
        settled = true;
        try { rec.stop(); } catch (e) {}
        fn(arg);
      };

      rec.onresult = e => {
        if (e.results && e.results[0] && e.results[0][0]) {
          final = e.results[0][0].transcript;
        }
      };
      rec.onend = () => {
        done(final && final.trim() ? resolve : reject, final && final.trim() ? final.trim() : new Error('没听清,再试一次'));
      };
      rec.onerror = e => {
        done(reject, new Error(this._errText(e.error)));
      };

      try {
        rec.start();
      } catch (e) {
        done(reject, e);
      }

      // 12 秒超时保护
      setTimeout(() => done(reject, new Error('识别超时')), 12000);
    });
  },

  _errText(code) {
    const map = {
      'not-allowed': '没有麦克风权限',
      'no-speech': '没听到声音',
      'audio-capture': '麦克风不可用',
      'network': '语音服务连不上,请检查网络',
      'aborted': '已取消'
    };
    return map[code] || ('识别失败(' + code + ')');
  },

  // 归一化:小写、去标点、压缩空格
  normalize(s) {
    let text = String(s || '').toLowerCase();
    // 展开常见缩写,让 I'm / I am、don't / do not 等能互相匹配
    const expand = {
      "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are',
      "he's": 'he is', "she's": 'she is', "it's": 'it is', "that's": 'that is',
      "what's": 'what is', "where's": 'where is', "how's": 'how is', "there's": 'there is',
      "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have',
      "i'll": 'i will', "you'll": 'you will', "we'll": 'we will', "they'll": 'they will',
      "i'd": 'i would', "you'd": 'you would', "don't": 'do not', "doesn't": 'does not',
      "didn't": 'did not', "can't": 'cannot', "couldn't": 'could not', "won't": 'will not',
      "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not'
    };
    Object.keys(expand).forEach(k => {
      text = text.replace(new RegExp('\\b' + k + '\\b', 'g'), expand[k]);
    });
    return text
      .replace(/[^a-z0-9\s']/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  // 功能词(比对时忽略,说得再快再含糊也算对)
  STOP: new Set(['the', 'a', 'an', 'i', 'you', 'he', 'she', 'it', 'we', 'they',
    'am', 'is', 'are', 'was', 'were', 'do', 'does', 'did', 'to', 'of', 'in',
    'on', 'at', 'and', 'or', 'but', 'my', 'your', 'his', 'her', 'our', 'their']),

  // 评分 0-1:目标句有多少核心词被识别出来
  score(heard, target) {
    const h = this.normalize(heard).split(' ');
    const t = this.normalize(target).split(' ').filter(w => !this.STOP.has(w));
    if (t.length === 0) return h.length > 0 ? 1 : 0;
    let hit = 0;
    t.forEach(w => {
      if (h.includes(w)) hit++;
    });
    return hit / t.length;
  },

  // 是否算通过(核心词覆盖 60% 以上,对初学者宽容)
  pass(heard, target) {
    return this.score(heard, target) >= 0.6;
  }
};
