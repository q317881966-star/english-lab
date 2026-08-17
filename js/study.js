// English Lab — 今日工单(回炉 → 学新 → 质检 → 打卡)
// 间隔复习规则:学后第 2、4、7 天回炉,答对晋级,答错明天再见

const Study = {
  // 复习间隔(天),按回炉成功次数递增
  REVIEW_DAYS: [2, 4, 7],

  // ── 日期工具 ──
  _addDays(dateStr, n) {
    const d = new Date(dateStr + 'T00:00:00');
    d.setDate(d.getDate() + n);
    const p = x => String(x).padStart(2, '0');
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  },

  // 句子的唯一 id(用英文原句)
  _keyOf(en) { return en.replace(/\s+/g, ' ').trim(); },

  // ── 复习队列:今天该回炉的句子 ──
  buildReviewQueue(data) {
    const today = Store.today();
    const queue = [];
    Object.keys(data.patterns).forEach(key => {
      const p = data.patterns[key];
      if (p.nextReview && p.nextReview <= today && !p.mastered) {
        queue.push({ key, en: p.en, cn: p.cn });
      }
    });
    // 弱项永远排最前
    queue.sort((a, b) => {
      const aw = data.weakList.includes(a.key) ? 0 : 1;
      const bw = data.weakList.includes(b.key) ? 0 : 1;
      return aw - bw;
    });
    return queue;
  },

  // 回炉结果:记住了 → 按间隔晋级;忘了 → 明天再见 + 进弱项
  reviewResult(data, key, remembered) {
    const p = data.patterns[key];
    if (!p) return;
    if (remembered) {
      const idx = data.weakList.indexOf(key);
      if (idx >= 0) data.weakList.splice(idx, 1);
      const done = (p.reviewCount || 0) + 1;
      p.reviewCount = done;
      if (done >= this.REVIEW_DAYS.length) {
        p.mastered = true;
        p.nextReview = null;
      } else {
        p.nextReview = this._addDays(p.learned, this.REVIEW_DAYS[done]);
      }
    } else {
      p.wrongCount = (p.wrongCount || 0) + 1;
      p.nextReview = this._addDays(Store.today(), 1);
      if (!data.weakList.includes(key)) data.weakList.push(key);
    }
    Store.save(data);
  },

  // 学新:记录核心句型状态,排进复习队列
  learnPattern(data, en, cn) {
    const key = this._keyOf(en);
    if (!data.patterns[key]) {
      const today = Store.today();
      data.patterns[key] = {
        en, cn,
        learned: today,
        nextReview: this._addDays(today, this.REVIEW_DAYS[0]),
        reviewCount: 0,
        wrongCount: 0,
        mastered: false
      };
      Store.save(data);
    }
    return key;
  },

  // ── 质检题生成 ──
  // 新课:当天例句取前 4 条;复习日:从已学例句池抽 5 条(弱项优先)
  buildQuiz(data, dayData, allDays) {
    const pool = [];

    if (dayData.pattern) {
      dayData.pattern.examples.slice(0, 4).forEach(([en, cn]) => {
        pool.push({ en, cn, fromToday: true });
      });
      // 新课第一题改为口语题:听中文,开口说英文
      if (pool.length > 0) pool[0].speech = true;
      return pool.map(item => ({ en: item.en, cn: item.cn, speech: !!item.speech }));
    } else {
      // 复习日:全部已排期课程的例句池
      const learnedBefore = allDays.filter(d => d.day < data.currentDay && d.pattern);
      learnedBefore.forEach(d => {
        d.pattern.examples.forEach(([en, cn]) => pool.push({ en, cn }));
      });
      // 弱项句子优先
      const weak = [];
      const normal = [];
      pool.forEach(item => {
        if (data.weakList.includes(this._keyOf(item.en))) weak.push(item);
        else normal.push(item);
      });
      // 去重
      const seen = new Set();
      const dedup = arr => arr.filter(item => {
        const k = this._keyOf(item.en);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
      const picked = dedup(weak).concat(dedup(normal));
      // 随机打乱后截取(保留弱项在前)
      const shuffled = this._shuffle(picked.slice(0, 18));
      const weakKeep = picked.filter((_, i) => i < Math.min(2, weak.length));
      const result = weakKeep.concat(shuffled).filter((item, i, arr) => {
        const k = this._keyOf(item.en);
        return arr.findIndex(x => this._keyOf(x.en) === k) === i;
      });
      return this._shuffle(result).slice(0, 5).map(item => ({ en: item.en, cn: item.cn }));
    }

    return pool.map(item => ({ en: item.en, cn: item.cn, speech: false }));
  },

  // 质检结果:答对 → 不处理(学新时已排期);答错 → 弱项 + 明天再见
  quizResult(data, en, correct) {
    const key = this._keyOf(en);
    if (!correct) {
      if (data.patterns[key]) {
        data.patterns[key].wrongCount = (data.patterns[key].wrongCount || 0) + 1;
        data.patterns[key].nextReview = this._addDays(Store.today(), 1);
      }
      if (!data.weakList.includes(key)) data.weakList.push(key);
      Store.save(data);
    }
  },

  // ── 打卡:完成当日课程 ──
  completeDay(data, wrongKeys) {
    const today = Store.today();
    if (data.lastCompletedDate !== today) {
      // 连续天数:昨天也学了则 +1,否则重置为 1
      const y = this._addDays(today, -1);
      data.streak = (data.lastCompletedDate === y) ? data.streak + 1 : 1;
      data.lastCompletedDate = today;
      data.daysDone[today] = { day: data.currentDay, wrongIds: wrongKeys || [] };
      data.currentDay = Math.min(30, data.currentDay + 1);
      Store.save(data);
    }
  },

  // ── 工具 ──
  _shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // 句子按单词切块(标点跟随单词)
  chunkSentence(en) {
    return en.trim().split(/\s+/).filter(Boolean);
  }
};

// ─────────────────────────────────────────────
// 今日工单界面渲染
// ─────────────────────────────────────────────
const StudyUI = {
  root: null,
  data: null,
  steps: [
    { key: 'review', name: '回炉', icon: '1' },
    { key: 'learn', name: '学新', icon: '2' },
    { key: 'quiz', name: '质检', icon: '3' },
    { key: 'done', name: '打卡', icon: '4' }
  ],

  init(rootEl) {
    this.root = rootEl;
    // 播放按钮事件委托:页面内所有 .btn-play / .btn-play-lg 点按发音
    this.root.addEventListener('click', e => {
      const btn = e.target.closest('.btn-play, .btn-play-lg');
      if (btn && btn.dataset.text) {
        e.preventDefault();
        e.stopPropagation();
        Voice.speak(btn.dataset.text);
      }
    });
    // 跟读按钮:点击后听您说,判断是否说对
    this.root.addEventListener('click', e => {
      const mic = e.target.closest('.btn-mic');
      if (!mic || mic.dataset.speech === undefined) return;
      e.preventDefault();
      e.stopPropagation();
      const line = mic.closest('.example-line');
      const fb = line.querySelector('.mic-fb');
      const en = line.querySelector('.ex-en').textContent;
      this._handleMic(mic, en, fb);
    });
  },

  // 跟读流程:识别 → 比对 → 反馈
  async _handleMic(btn, en, fb) {
    if (!Speech.supported()) {
      fb.innerHTML = '<span class="fb-no">此浏览器不支持语音识别</span>';
      return;
    }
    btn.disabled = true;
    const old = btn.textContent;
    btn.textContent = '聆听中…';
    try {
      const heard = await Speech.recognize();
      const score = Math.round(Speech.score(heard, en) * 100);
      if (Speech.pass(heard, en)) {
        fb.innerHTML = `<span class="fb-ok">✓ 说得很好(${score}%)</span>`;
      } else {
        fb.innerHTML = `<span class="fb-no">再听一遍标准发音(识别到:${this._esc(heard)})</span>`;
        Voice.speak(en);
      }
    } catch (err) {
      fb.innerHTML = `<span class="fb-no">${this._esc(err.message)}</span>`;
    }
    btn.disabled = false;
    btn.textContent = old;
  },

  // 打开今日工单
  open() {
    this.data = Store.load();
    this.root.innerHTML = this._frame('');
    this._renderReview();
  },

  _esc(s) {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  _frame(innerHtml) {
    return `
      <div class="steps">
        ${this.steps.map((s, i) => `
          <div class="step" data-step="${s.key}">
            <span class="step-dot">${s.icon}</span>
            <span class="step-name">${s.name}</span>
          </div>
        `).join('')}
      </div>
      <div class="workbench-body" id="workbench-body">${innerHtml}</div>
    `;
  },

  _setStep(key) {
    this.root.querySelectorAll('.step').forEach(el => {
      el.classList.toggle('active', el.dataset.step === key);
    });
  },

  // ── 第一步:回炉 ──
  _renderReview() {
    this._setStep('review');
    const queue = Study.buildReviewQueue(this.data);
    const body = document.getElementById('workbench-body');

    if (queue.length === 0) {
      body.innerHTML = `
        <div class="empty-card">
          <div class="empty-title">今天没有要回炉的句子</div>
          <div class="empty-sub">间隔复习会在学完后第 2、4、7 天自动出现</div>
          <button class="btn-primary" data-action="skip-review">去学新句型</button>
        </div>
      `;
      this._bindOnce(body, 'skip-review', () => this._renderLearn());
      return;
    }

    const first = queue[0];
    body.innerHTML = `
      <div class="section-title">回炉 · 第 2/4/7 天复习</div>
      <div class="section-sub">先读英文想中文,再看答案自评</div>
      <div class="review-card">
        <button class="btn-play-lg" data-text="${this._esc(first.en)}">播放</button>
        <div class="review-en">${this._esc(first.en)}</div>
        <div class="review-cn" id="review-cn" hidden>${this._esc(first.cn)}</div>
        <button class="btn-ghost" data-action="show-cn">显示中文</button>
        <div class="review-actions">
          <button class="btn-danger" data-action="forgot">忘了</button>
          <button class="btn-primary" data-action="remember">记住了</button>
        </div>
      </div>
      <div class="queue-hint">还剩 ${queue.length} 句</div>
    `;

    const finish = () => this._renderReview();
    this._bindOnce(body, 'show-cn', () => {
      document.getElementById('review-cn').hidden = false;
    });
    this._bindOnce(body, 'forgot', () => {
      Study.reviewResult(this.data, first.key, false);
      this.data = Store.load();
      finish();
    });
    this._bindOnce(body, 'remember', () => {
      Study.reviewResult(this.data, first.key, true);
      this.data = Store.load();
      finish();
    });
  },

  // ── 第二步:学新 ──
  _renderLearn() {
    this._setStep('learn');
    const day = MONTH1_COURSE.find(d => d.day === this.data.currentDay);
    const body = document.getElementById('workbench-body');

    if (!day || !day.pattern) {
      // 复习日:直接进入质检
      this._renderQuiz();
      return;
    }

    const screw = day.screw ? SCREWS[day.screw] : null;
    const pat = day.pattern;

    body.innerHTML = `
      <div class="section-title">第 ${day.day} 天 · ${this._esc(day.title)}</div>
      <div class="section-sub">${this._esc(day.phase)}</div>
      ${screw ? `
        <div class="screw-card">
          <div class="screw-head">🔩 螺丝包 · ${this._esc(screw.name)}</div>
          <div class="screw-items">
            ${screw.items.map(([w, cn]) => `
              <span class="screw-item">${this._esc(w)}<i>${this._esc(cn)}</i></span>
            `).join('')}
          </div>
          <div class="screw-note">${this._esc(screw.note)}</div>
        </div>
      ` : ''}
      <div class="pattern-hero">
        <div class="hero-en">${this._esc(pat.en)}</div>
        <div class="hero-cn">${this._esc(pat.cn)}</div>
        <button class="btn-play-lg" data-text="${this._esc(pat.en)}">播放句型</button>
      </div>
      <div class="section-title">例句跟读</div>
      ${pat.examples.map(([en, cn]) => `
        <div class="example-line">
          <button class="btn-play" data-text="${this._esc(en)}">▶</button>
          <button class="btn-mic" data-speech="1">🎤</button>
          <div class="example-text">
            <div class="ex-en">${this._esc(en)}</div>
            <div class="ex-cn">${this._esc(cn)}</div>
          </div>
          <div class="mic-fb"></div>
        </div>
      `).join('')}
      <button class="btn-primary btn-block" data-action="learn-done">学完了,去质检</button>
    `;

    this._bindOnce(body, 'learn-done', () => {
      const key = Study.learnPattern(this.data, pat.en, pat.cn);
      this.data = Store.load();
      this._renderQuiz();
    });
  },

  // ── 第三步:质检(拼句) ──
  _renderQuiz() {
    this._setStep('quiz');
    const day = MONTH1_COURSE.find(d => d.day === this.data.currentDay);
    this._quizItems = Study.buildQuiz(this.data, day, MONTH1_COURSE);
    this._quizIdx = 0;
    this._quizWrong = [];
    this._renderQuizItem();
  },

  _renderQuizItem() {
    const body = document.getElementById('workbench-body');
    if (this._quizIdx >= this._quizItems.length) {
      this._renderDone();
      return;
    }
    const item = this._quizItems[this._quizIdx];
    if (item.speech) {
      this._renderSpeechItem(item);
      return;
    }
    const chunks = Study._shuffle(Study.chunkSentence(item.en));

    body.innerHTML = `
      <div class="section-title">质检 · 拼句</div>
      <div class="quiz-progress">第 ${this._quizIdx + 1} / ${this._quizItems.length} 题</div>
      <div class="quiz-card">
        <div class="quiz-cn">${this._esc(item.cn)}</div>
        <button class="btn-play" data-text="${this._esc(item.en)}">听发音</button>
        <div class="quiz-answer" id="quiz-answer"></div>
        <div class="quiz-bank" id="quiz-bank">
          ${chunks.map((c, i) => `<button class="chunk" data-i="${i}">${this._esc(c)}</button>`).join('')}
        </div>
        <button class="btn-primary btn-block" data-action="check-quiz">检查</button>
        <div class="quiz-feedback" id="quiz-feedback"></div>
      </div>
    `;

    this._curQuiz = {
      en: item.en, cn: item.cn,
      chunks: chunks.slice(),
      picked: []
    };
    this._bindQuizEvents(body);
  },

  // 口语题:听中文 → 开口说英文 → 识别比对
  _renderSpeechItem(item) {
    const body = document.getElementById('workbench-body');
    body.innerHTML = `
      <div class="section-title">质检 · 开口说</div>
      <div class="quiz-progress">第 ${this._quizIdx + 1} / ${this._quizItems.length} 题</div>
      <div class="quiz-card speech-quiz">
        <div class="speech-tip">看着中文,用英文说出来</div>
        <div class="quiz-cn">${this._esc(item.cn)}</div>
        <button class="btn-play-lg" data-text="${this._esc(item.en)}">先听标准发音</button>
        <button class="btn-mic-lg" id="speech-mic">🎤 开口说</button>
        <div class="quiz-feedback" id="quiz-feedback"></div>
        <button class="btn-ghost btn-block" data-action="skip-speech">说不好,先跳过</button>
      </div>
    `;

    const micBtn = body.querySelector('#speech-mic');
    const fb = body.querySelector('#quiz-feedback');

    micBtn.addEventListener('click', async () => {
      if (!Speech.supported()) {
        fb.innerHTML = '<span class="fb-no">此浏览器不支持语音识别</span>';
        return;
      }
      micBtn.disabled = true;
      micBtn.textContent = '🎤 聆听中…';
      try {
        const heard = await Speech.recognize();
        if (Speech.pass(heard, item.en)) {
          fb.innerHTML = '<span class="fb-ok">✓ 说得很好!</span>';
          setTimeout(() => { this._quizIdx++; this._renderQuizItem(); }, 900);
        } else {
          fb.innerHTML = `<span class="fb-no">再试一次,先听标准发音(识别到:${this._esc(heard)})</span>`;
          Voice.speak(item.en);
          micBtn.disabled = false;
          micBtn.textContent = '🎤 开口说';
        }
      } catch (err) {
        fb.innerHTML = `<span class="fb-no">${this._esc(err.message)}</span>`;
        micBtn.disabled = false;
        micBtn.textContent = '🎤 开口说';
      }
    });

    this._bindOnce(body, 'skip-speech', () => {
      const key = Study._keyOf(item.en);
      if (!this._quizWrong.includes(key)) this._quizWrong.push(key);
      Study.quizResult(this.data, item.en, false);
      this._quizIdx++;
      this._renderQuizItem();
    });
  },

  _bindQuizEvents(body) {
    const answer = body.querySelector('#quiz-answer');
    const bank = body.querySelector('#quiz-bank');
    const feedback = body.querySelector('#quiz-feedback');

    const renderAnswer = () => {
      answer.innerHTML = this._curQuiz.picked.length
        ? this._curQuiz.picked.map((w, i) => `<button class="chunk picked" data-p="${i}">${this._esc(w)}</button>`).join('')
        : '<span class="answer-hint">点击下面的词块拼出句子</span>';
      bank.querySelectorAll('.chunk').forEach(btn => {
        btn.disabled = this._curQuiz.picked.includes(this._curQuiz.chunks[Number(btn.dataset.i)]);
      });
    };

    bank.addEventListener('click', e => {
      const btn = e.target.closest('.chunk');
      if (!btn || btn.disabled) return;
      this._curQuiz.picked.push(this._curQuiz.chunks[Number(btn.dataset.i)]);
      renderAnswer();
    });

    answer.addEventListener('click', e => {
      const btn = e.target.closest('.chunk.picked');
      if (!btn) return;
      this._curQuiz.picked.splice(Number(btn.dataset.p), 1);
      renderAnswer();
    });

    body.querySelector('[data-action="check-quiz"]').addEventListener('click', () => {
      const made = this._curQuiz.picked.join(' ').replace(/\s+([.,!?])/g, '$1').trim();
      const target = this._curQuiz.en.replace(/\s+([.,!?])/g, '$1').trim();
      const correct = made === target;

      if (correct) {
        feedback.innerHTML = '<div class="fb-ok">✓ 拼对了!</div>';
        this._quizWrong = this._quizWrong.filter(k => k !== Study._keyOf(this._curQuiz.en));
        setTimeout(() => { this._quizIdx++; this._renderQuizItem(); }, 700);
      } else {
        feedback.innerHTML = `<div class="fb-no">✗ 再想想,正确答案:${this._esc(this._curQuiz.en)}</div>`;
        Study.quizResult(this.data, this._curQuiz.en, false);
        const key = Study._keyOf(this._curQuiz.en);
        if (!this._quizWrong.includes(key)) this._quizWrong.push(key);
        setTimeout(() => { this._quizIdx++; this._renderQuizItem(); }, 1400);
      }
    });

    renderAnswer();
  },

  // ── 第四步:打卡 ──
  _renderDone() {
    this._setStep('done');
    const body = document.getElementById('workbench-body');
    const mastered = Object.values(this.data.patterns).filter(p => p.mastered).length;

    Study.completeDay(this.data, this._quizWrong);
    this.data = Store.load();

    body.innerHTML = `
      <div class="done-card">
        <div class="done-check">✓</div>
        <div class="done-title">今日完工!</div>
        <div class="done-stats">
          <div class="stat"><b>${this.data.streak}</b><span>连续天数</span></div>
          <div class="stat"><b>${mastered}</b><span>已掌握句型</span></div>
          <div class="stat"><b>${this._quizWrong.length}</b><span>本次错题</span></div>
        </div>
        <div class="done-sub">错题已进弱项本,明天自动回炉</div>
        <button class="btn-primary btn-block" data-action="tomorrow">看明天学什么</button>
      </div>
    `;
    this._bindOnce(body, 'tomorrow', () => {
      App.switchTab('progress');
    });
  },

  // 事件绑定辅助:按 data-action 绑定一次
  _bindOnce(root, action, fn) {
    const handler = e => {
      const el = e.target.closest('[data-action="' + action + '"]');
      if (el && root.contains(el)) {
        fn(e);
      }
    };
    root.addEventListener('click', handler);
  },

};
