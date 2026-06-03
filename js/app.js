// English Lab — 英语学习系统
// 单词库 → 句型库 → 听力库 → 口语库 → 每日打卡 → 周复盘

const App = {
  currentPage: 'vocab',
  vocabulary: [],
  settings: {},
  stats: {},

  session: {
    queue: [], queueIndex: 0,
    newWordsToday: 0, reviewsToday: 0,
    dailyNewLimit: 20,
  },

  // === 初始化 ===
  init() {
    Voice.init();
    this.vocabulary = Storage.getVocabulary();
    this.settings = Storage.getSettings();
    this.stats = Storage.getStats();
    this.session.dailyNewLimit = this.settings.dailyNewWords;

    this.bindNavigation();
    this.bindSettings();
    this.switchPage('vocab');
    this.updateNavBadges();
    this.updateVoiceLabel();
  },

  // === 导航 ===
  bindNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const page = item.dataset.page;
        if (page) this.switchPage(page);
      });
    });
  },

  switchPage(page) {
    this.currentPage = page;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`)?.classList.add('active');

    switch (page) {
      case 'vocab': this.renderVocab(); break;
      case 'pattern': this.renderPattern(); break;
      case 'listen': this.renderListen(); break;
      case 'speak': this.renderSpeak(); break;
      case 'checkin': this.renderCheckin(); break;
      case 'review': this.renderReview(); break;
    }
  },

  updateNavBadges() {
    const due = SM2.getDueCards(this.vocabulary).length;
    const badge = document.getElementById('badge-review');
    if (badge) { badge.textContent = due; badge.style.display = due > 0 ? 'inline' : 'none'; }

    const streakEl = document.getElementById('badge-streak');
    if (streakEl) { streakEl.textContent = this.stats.streakDays; streakEl.style.display = this.stats.streakDays > 0 ? 'inline' : 'none'; }
  },

  updateVoiceLabel() {
    const el = document.getElementById('voice-name');
    if (el) el.textContent = Voice.getVoiceName();
  },

  // 刷新语音下拉框（引擎切换时重新填充）
  _refreshVoiceSelect() {
    const voiceEl = document.getElementById('setting-voice');
    if (!voiceEl) return;
    const voices = Voice.getAvailableVoices();
    voiceEl.innerHTML = voices.map(v =>
      `<option value="${v.id}">${v.label}</option>`
    ).join('');
    const voiceKey = `ttsVoice_${this.settings.ttsEngine || 'edge'}`;
    voiceEl.value = this.settings[voiceKey] || voices[0]?.id || '';
  },

  // 显示/隐藏 API Key 输入区
  _refreshApiKeySection() {
    const section = document.getElementById('api-keys-section');
    if (!section) return;
    const engine = this.settings.ttsEngine || 'edge';
    section.style.display = engine === 'edge' ? 'none' : 'block';
  },

  // ================================================================
  // 听力库
  // ================================================================
  renderListen() {
    const c = document.getElementById('listen-container');
    c.innerHTML = `
      <div class="page-header">
        <h2>🎧 第1层：听力输入</h2>
        <p>先听清楚，再模仿。每天15分钟。</p>
      </div>
      <div style="display:flex; gap:10px; margin-bottom:24px;">
        <button class="btn active" id="lbtn-dict">听写模式</button>
        <button class="btn" id="lbtn-shadow">跟读模式</button>
      </div>
      <div id="listen-mode-area"></div>
    `;

    this._listenTab = 'dict';
    this._renderListenMode('dict');

    document.getElementById('lbtn-dict').addEventListener('click', () => {
      this._listenTab = 'dict';
      document.getElementById('lbtn-dict').classList.add('active');
      document.getElementById('lbtn-shadow').classList.remove('active');
      this._renderListenMode('dict');
    });
    document.getElementById('lbtn-shadow').addEventListener('click', () => {
      this._listenTab = 'shadow';
      document.getElementById('lbtn-shadow').classList.add('active');
      document.getElementById('lbtn-dict').classList.remove('active');
      this._renderListenMode('shadow');
    });
  },

  _renderListenMode(mode) {
    const area = document.getElementById('listen-mode-area');
    // 选词：优先从已学或常用词中选
    const pool = this.vocabulary.filter(v => v.totalReviews > 0);
    const word = (pool.length > 5 ? pool : this.vocabulary)[Math.floor(Math.random() * this.vocabulary.length)];

    if (mode === 'dict') {
      area.innerHTML = `
        <div class="listen-section">
          <div class="listen-speed">
            <button class="speed-btn" data-sp="0.5">0.5x</button>
            <button class="speed-btn active" data-sp="0.75">0.75x</button>
            <button class="speed-btn" data-sp="1.0">1x</button>
          </div>
          <div style="text-align:center; margin:20px 0;">
            <p style="color:var(--text-muted);">听单词，输入拼写</p>
            <button class="listen-btn primary" id="l-play" style="margin-top:12px;">🔊 播放单词</button>
          </div>
          <div class="listen-input-area">
            <input class="listen-input" id="l-input" placeholder="输入你听到的单词..." autocomplete="off">
            <button class="listen-btn primary" id="l-check">检查</button>
          </div>
          <p class="hint-link" id="l-hint" style="text-align:center; margin-top:8px; color:var(--text-muted); cursor:pointer;">💡 给个提示</p>
          <div id="l-result" style="margin-top:14px;"></div>
          <div id="l-hint-text" style="color:var(--text-muted); font-size:0.85rem; text-align:center; margin-top:6px;"></div>
        </div>
        <button class="btn" id="l-next" style="width:100%; margin-top:16px;">→ 下一个词</button>`;

      let speed = 0.75;
      area.querySelectorAll('.speed-btn').forEach(b => {
        b.addEventListener('click', () => {
          speed = parseFloat(b.dataset.sp);
          area.querySelectorAll('.speed-btn').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
        });
      });
      document.getElementById('l-play').addEventListener('click', () => Voice.speakWord(word.word));
      document.getElementById('l-check').addEventListener('click', () => {
        const inp = document.getElementById('l-input').value.trim().toLowerCase();
        const correct = word.word.toLowerCase();
        const el = document.getElementById('l-input');
        const res = document.getElementById('l-result');
        el.className = 'listen-input ' + (inp === correct ? 'correct' : 'wrong');
        res.innerHTML = inp === correct
          ? `<div class="listen-result correct"><strong>✅ 正确！</strong> ${word.word} — ${word.meaning}</div>`
          : `<div class="listen-result wrong"><strong>❌ 不对</strong>，你写的是 "${inp}"<br>正确答案：<b>${word.word}</b> — ${word.meaning}<br><i>${word.example || ''}</i></div>`;
      });
      document.getElementById('l-hint').addEventListener('click', () => {
        document.getElementById('l-hint-text').textContent = `提示：${word.phonetic || ''}「${word.meaning}」，${word.word.length} 个字母`;
      });
      document.getElementById('l-next').addEventListener('click', () => this._renderListenMode('dict'));
    } else {
      // 跟读模式
      area.innerHTML = `
        <div class="listen-section">
          <div class="listen-speed">
            <button class="speed-btn" data-sp="0.75">0.75x</button>
            <button class="speed-btn active" data-sp="0.9">0.9x</button>
            <button class="speed-btn" data-sp="1.0">1x</button>
          </div>
          <p style="font-size:2rem; font-family:var(--font-en); text-align:center; margin:28px 0;">${word.word}</p>
          <p style="color:var(--text-muted); text-align:center;">${word.phonetic || ''} — ${word.meaning}</p>
          <div style="display:flex; gap:10px; justify-content:center; margin:20px 0;">
            <button class="listen-btn primary" id="s-play">🔊 听发音</button>
            <button class="listen-btn" id="s-speak">🎤 跟读</button>
          </div>
          <div id="s-result"></div>
        </div>
        <button class="btn" id="s-next" style="width:100%; margin-top:16px;">→ 换一个词</button>`;

      let speed = 0.9;
      area.querySelectorAll('.speed-btn').forEach(b => {
        b.addEventListener('click', () => {
          speed = parseFloat(b.dataset.sp);
          area.querySelectorAll('.speed-btn').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
        });
      });
      document.getElementById('s-play').addEventListener('click', () => Voice.speak(word.word, { rate: speed }));
      document.getElementById('s-speak').addEventListener('click', async () => {
        const r = document.getElementById('s-result');
        r.innerHTML = '<p style="color:var(--text-muted);">正在听你读...</p>';
        if (!Voice.checkRecognition()) {
          r.innerHTML = '<div class="listen-result wrong">需要 Chrome 浏览器才能使用语音识别。</div>';
          return;
        }
        try {
          const spoken = await Voice.startRecognition({ lang: 'en-US' });
          const cmp = Voice.comparePronunciation(word.word, spoken);
          r.innerHTML = cmp.match
            ? `<div class="listen-result correct"><strong>👍 不错！</strong> 识别: "${spoken}" (${cmp.score}%)</div>`
            : `<div class="listen-result wrong"><strong>🔄 再试试</strong> 识别: "${spoken}" (${cmp.score}%)<br>目标: <b>${word.word}</b></div>`;
        } catch (err) {
          r.innerHTML = `<div class="listen-result wrong">${err.message}</div>`;
        }
      });
      document.getElementById('s-next').addEventListener('click', () => this._renderListenMode('shadow'));
    }
  },

  // ================================================================
  // 第2层：词汇 (Vocabulary) — 3级词库 + SM-2闪卡
  // ================================================================
  renderVocab() {
    const c = document.getElementById('vocab-container');
    const tier = this._vocabTier || 'core';
    const mode = this._vocabMode || 'browse';

    const tierLabel = { core: '🔴 核心300', high: '🟡 高频2000', biz: '🟢 行业500' };

    c.innerHTML = `
      <div class="page-header">
        <h2>📇 第2层：词汇积累</h2>
        <p>核心300 → 高频2000 → 行业500，逐级攻克</p>
      </div>
      <div style="display:flex; gap:8px; margin-bottom:12px; flex-wrap:wrap; align-items:center; justify-content:space-between;">
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          ${['core','high','biz'].map(t =>
            `<button class="btn small ${tier===t?'accent':''}" id="vt-${t}">${tierLabel[t]}</button>`
          ).join('')}
        </div>
        <div class="vocab-mode-toggle">
          <button class="${mode==='browse'?'active':''}" id="vm-browse">📋 浏览</button>
          <button class="${mode==='flashcard'?'active':''}" id="vm-flashcard">🃏 闪卡</button>
        </div>
      </div>
      <div style="margin-bottom:12px; display:flex; gap:16px; font-size:0.85rem; color:var(--text-muted);">
        <span id="vt-progress"></span>
      </div>
      <div id="vocab-card-area"></div>
    `;

    ['core','high','biz'].forEach(t => {
      document.getElementById(`vt-${t}`).addEventListener('click', () => {
        this._vocabTier = t;
        this.renderVocab();
      });
    });

    document.getElementById('vm-browse').addEventListener('click', () => {
      this._vocabMode = 'browse';
      this.renderVocab();
    });
    document.getElementById('vm-flashcard').addEventListener('click', () => {
      this._vocabMode = 'flashcard';
      this.renderVocab();
    });

    if (mode === 'browse') {
      this._renderVocabBrowse(tier);
    } else {
      this._renderVocabCard(tier);
    }
  },

  _renderVocabBrowse(tier) {
    const displayPool = this.vocabulary.filter(v => v.tier === tier);
    const area = document.getElementById('vocab-card-area');
    const progressEl = document.getElementById('vt-progress');
    const totalKnown = displayPool.filter(v => v.browseKnown).length;

    if (progressEl) {
      progressEl.innerHTML = `已学 <b style="color:var(--accent);">${totalKnown}</b>/${displayPool.length} · 点击 🔊 听发音 · 点 ✓ 标记已认识`;
    }

    if (displayPool.length === 0) {
      area.innerHTML = `<div class="empty-state"><div class="icon">📭</div><h3>该级别暂无词汇</h3></div>`;
      return;
    }

    const rows = displayPool.map((v, i) => {
      const known = v.browseKnown;
      return `
        <div class="vocab-word-row${known ? ' known' : ''}" data-id="${v.id}">
          <span class="vocab-word-num">${i + 1}</span>
          <span class="vocab-word-en">${v.word}</span>
          <span class="vocab-word-cn">${v.meaning}</span>
          <span class="vocab-word-cat">${v.category||''}</span>
          <button class="vocab-word-play" data-word="${v.word}">🔊</button>
          <button class="vocab-word-mark" data-id="${v.id}">${known ? '✓ 已学' : '✓ 认识'}</button>
          <button class="vocab-word-undo" data-id="${v.id}">↩ 撤销</button>
        </div>
      `;
    }).join('');

    area.innerHTML = `<div class="vocab-word-grid">${rows}</div>`;

    // 绑定发音按钮
    area.querySelectorAll('.vocab-word-play').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.dataset.word;
        if (word) Voice.speakWord(word);
      });
    });

    // 绑定"认识"按钮 — 原地更新，不重新渲染
    area.querySelectorAll('.vocab-word-mark').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        this._markWordKnown(id, true);
        // 原地更新 DOM
        const row = btn.closest('.vocab-word-row');
        row.classList.add('known');
        btn.textContent = '✓ 已学';
        btn.style.opacity = '0.4';
        btn.style.pointerEvents = 'none';
        const undoBtn = row.querySelector('.vocab-word-undo');
        undoBtn.style.display = 'inline-block';
        this._updateBrowseProgress(tier);
      });
    });

    // 绑定"撤销"按钮 — 原地更新，不重新渲染
    area.querySelectorAll('.vocab-word-undo').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        this._markWordKnown(id, false);
        // 原地更新 DOM
        const row = btn.closest('.vocab-word-row');
        row.classList.remove('known');
        const markBtn = row.querySelector('.vocab-word-mark');
        markBtn.textContent = '✓ 认识';
        markBtn.style.opacity = '';
        markBtn.style.pointerEvents = '';
        btn.style.display = 'none';
        this._updateBrowseProgress(tier);
      });
    });

    // 点击整行也发音
    area.querySelectorAll('.vocab-word-row').forEach(row => {
      row.addEventListener('click', () => {
        const word = row.querySelector('.vocab-word-en')?.textContent;
        if (word) Voice.speakWord(word);
      });
    });
  },

  _markWordKnown(wordId, known) {
    const vi = this.vocabulary.findIndex(v => v.id === wordId);
    if (vi < 0) return;
    this.vocabulary[vi].browseKnown = known;
    Storage.saveVocabulary(this.vocabulary);
  },

  _updateBrowseProgress(tier) {
    const displayPool = this.vocabulary.filter(v => v.tier === tier);
    const totalKnown = displayPool.filter(v => v.browseKnown).length;
    const el = document.getElementById('vt-progress');
    if (el) {
      el.innerHTML = `已学 <b style="color:var(--accent);">${totalKnown}</b>/${displayPool.length} · 点击 🔊 听发音 · 点 ✓ 标记已认识`;
    }
  },

  _renderVocabCard(tier) {
    // 按 tier 字段筛选词汇
    const displayPool = this.vocabulary.filter(v => v.tier === tier);

    // 准备复习队列
    const due = SM2.getDueCards(displayPool);
    const newCards = SM2.getNewCards(displayPool, this.session.dailyNewLimit);
    const hot = SM2.getHotCards(displayPool).filter(c => SM2.isDue(c));
    const queue = [...hot, ...due, ...newCards];

    const el = document.getElementById('vocab-card-area');
    const progressEl = document.getElementById('vt-progress');
    const totalStudied = displayPool.filter(v => v.totalReviews > 0).length;

    if (progressEl) {
      progressEl.innerHTML = `已学 <b style="color:var(--accent);">${totalStudied}</b>/${displayPool.length} · 今日待复习 <b style="color:var(--blue);">${due.length}</b>`;
    }

    if (queue.length === 0) {
      el.innerHTML = `<div class="empty-state"><div class="icon">🎉</div><h3>这个级别的词今天学完了</h3><p>换个级别，或去练句型</p></div>`;
      return;
    }

    const card = queue[0];
    this._sessionQueue = queue;
    this._sessionIdx = 0;
    this._renderSingleCard(card, queue.length);
  },

  _renderSingleCard(card, total) {
    const area = document.getElementById('vocab-card-area');
    const idx = this._sessionIdx;
    const isReview = card.totalReviews > 0;

    area.innerHTML = `
      <div class="flashcard-wrapper">
        <div style="display:flex; justify-content:space-between; width:100%; max-width:500px; margin-bottom:4px;">
          <span style="color:var(--text-muted); font-size:0.8rem;">${isReview?'复习':'新词'} · ${idx+1}/${total} · ${card.category||''}</span>
          <span style="color:var(--text-muted); font-size:0.8rem;">连对${card.streak||0}次</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${idx/total*100}%"></div></div>
        <div class="flashcard" id="fc" data-flipped="false">
          <div class="flashcard-front">
            <div class="flashcard-word">${card.word}</div>
            <div class="flashcard-phonetic">${card.phonetic||''}</div>
            <button class="flashcard-play" id="fc-play">🔊</button>
          </div>
          <div class="flashcard-back">
            <div class="flashcard-word" style="font-size:1.2rem; color:var(--accent);">${card.word}</div>
            <div class="flashcard-meaning">${card.meaning}</div>
            <div class="flashcard-example">"${card.example||''}"</div>
            <div class="flashcard-example-cn">${card.exampleCn||''}</div>
            <button class="flashcard-play" id="fc-play2">🔊</button>
          </div>
          <div class="flashcard-hint">点击翻转</div>
        </div>
        <div class="rating-buttons" id="fc-ratings" style="display:none;">
          <button class="rating-btn again" data-q="0">不认识<div class="rating-label">明天再来</div></button>
          <button class="rating-btn hard" data-q="3">模糊<div class="rating-label">有点印象</div></button>
          <button class="rating-btn good" data-q="5">认识<div class="rating-label">轻松想起</div></button>
        </div>
      </div>`;

    const fc = document.getElementById('fc');
    fc.addEventListener('click', () => {
      fc.dataset.flipped = 'true';
      fc.classList.add('flipped');
      document.getElementById('fc-ratings').style.display = 'flex';
      if (this.settings.autoPlay !== false) Voice.speakWord(card.word);
    });

    const bindPlay = (id) => {
      document.getElementById(id)?.addEventListener('click', (e) => { e.stopPropagation(); Voice.speakWord(card.word); });
    };
    bindPlay('fc-play');
    bindPlay('fc-play2');

    document.querySelectorAll('#fc-ratings .rating-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const q = parseInt(btn.dataset.q);
        const vi = this.vocabulary.findIndex(v => v.id === card.id);
        if (vi >= 0) {
          this.vocabulary[vi] = SM2.calculate(card, q);
          Storage.saveVocabulary(this.vocabulary);
        }
        this.session.reviewsToday++;
        Storage.recordStudy(card.totalReviews===0?1:0, 1);
        Storage.checkinToday();

        this._sessionIdx++;
        this.updateNavBadges();

        if (this._sessionIdx >= this._sessionQueue.length) {
          document.getElementById('vocab-card-area').innerHTML =
            `<div class="empty-state"><div class="icon">🎉</div><h3>本轮完成！</h3><p>去第3层练句型吧</p></div>`;
          return;
        }
        this._renderSingleCard(this._sessionQueue[this._sessionIdx], this._sessionQueue.length);
      });
    });
  },

  // ================================================================
  // 第3层：句型 (Patterns) — 100句型 + 替换练习
  // ================================================================
  renderPattern() {
    const c = document.getElementById('pattern-container');
    const functions = [...new Set(SENTENCE_PATTERNS.map(p => p.function))];
    const activeFunc = this._patFunc || functions[0];

    c.innerHTML = `
      <div class="page-header">
        <h2>🔤 第3层：句型训练</h2>
        <p>100个万能句型，每个学会替换5种说法</p>
      </div>
      <div style="display:flex; gap:6px; margin-bottom:20px; flex-wrap:wrap;" id="pat-funcs">
        ${functions.map(f => `<button class="btn small ${f===activeFunc?'accent':''}" data-f="${f}">${f}</button>`).join('')}
      </div>
      <div id="pat-list"></div>
    `;

    document.querySelectorAll('#pat-funcs .btn').forEach(b => {
      b.addEventListener('click', () => {
        this._patFunc = b.dataset.f;
        this.renderPattern();
      });
    });

    this._renderPatternList(activeFunc);
  },

  _renderPatternList(func) {
    const list = document.getElementById('pat-list');
    const patterns = SENTENCE_PATTERNS.filter(p => p.function === func);

    list.innerHTML = patterns.map((p, i) => `
      <div class="pattern-card" id="pat-${i}">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <p style="font-family:var(--font-en); font-size:1.1rem; margin-bottom:2px;">
              <b>${p.pattern.replace(/____/g, '<span class="pat-blank">______</span>')}</b>
            </p>
            <p style="color:var(--text-muted); font-size:0.85rem;">${p.cn}</p>
          </div>
          <button class="listen-btn small pat-play-btn" data-pat="${i}">🔊</button>
        </div>
        <div class="pat-examples" style="display:none; margin-top:12px;">
          ${p.examples.map((ex, j) => `
            <div class="pat-ex" data-ex="${j}" style="padding:8px 0; border-bottom:1px solid var(--border); cursor:pointer;">
              <span style="font-family:var(--font-en);">${ex}</span>
              ${p.examplesCn && p.examplesCn[j] ? `<span style="color:var(--text-muted); font-size:0.8rem; display:block; margin-top:2px;">${p.examplesCn[j]}</span>` : ''}
              <button class="listen-btn small pat-ex-play" style="margin-left:8px;" data-text="${ex.replace(/"/g, '&quot;')}">🔊</button>
            </div>
          `).join('')}
        </div>
        <p style="color:var(--text-muted); font-size:0.75rem; margin-top:6px; cursor:pointer;" class="pat-toggle" data-pat="${i}">展开 ${p.examples.length} 个例句 ▼</p>
      </div>
    `).join('');

    // 展开/折叠
    list.querySelectorAll('.pat-toggle').forEach(t => {
      t.addEventListener('click', () => {
        const i = t.dataset.pat;
        const exDiv = document.getElementById(`pat-${i}`).querySelector('.pat-examples');
        const isOpen = exDiv.style.display !== 'none';
        exDiv.style.display = isOpen ? 'none' : 'block';
        t.textContent = isOpen ? `展开 ${patterns[i].examples.length} 个例句 ▼` : '收起 ▲';
      });
    });

    // 播放句型
    list.querySelectorAll('.pat-play-btn').forEach(b => {
      b.addEventListener('click', () => {
        const p = patterns[parseInt(b.dataset.pat)];
        Voice.speakSentence(p.pattern.replace('____', 'something'));
      });
    });

    // 播放例句
    list.querySelectorAll('.pat-ex-play').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        Voice.speakSentence(b.dataset.text);
      });
    });
  },

  // ================================================================
  // 第4层：输出 (Speaking) — 自由表达 + 录音自检
  // ================================================================
  renderSpeak() {
    const c = document.getElementById('speak-container');
    c.innerHTML = `
      <div class="page-header">
        <h2>🎤 第4层：输出练习</h2>
        <p>把你今天学的说出来，哪怕只有一句</p>
      </div>

      <!-- 今日输出任务 -->
      <div class="listen-section" style="margin-bottom:20px;">
        <h4 style="margin-bottom:8px;">📋 今日输出任务</h4>
        <p id="speak-task" style="font-size:1.1rem; margin:12px 0; color:var(--accent);"></p>
        <button class="btn small" id="speak-new-task">🔄 换一个话题</button>
      </div>

      <!-- 录音区 -->
      <div class="listen-section" style="margin-bottom:20px;">
        <h4 style="margin-bottom:12px;">🎙️ 你的回答</h4>
        <textarea id="speak-text" placeholder="写下你想说的英语..." style="width:100%; min-height:100px; padding:12px; border-radius:8px; border:1px solid var(--border); background:var(--bg); color:var(--text); font-family:var(--font-en); font-size:0.95rem; resize:vertical;"></textarea>
        <div style="display:flex; gap:8px; margin-top:10px;">
          <button class="listen-btn primary" id="speak-listen">🔊 听自己的回答</button>
          <button class="listen-btn" id="speak-record">🎤 语音输入</button>
        </div>
        <div id="speak-result" style="margin-top:12px;"></div>
      </div>

      <!-- 自我检查 -->
      <div class="listen-section">
        <h4 style="margin-bottom:12px;">✅ 自我检查清单</h4>
        <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
          <input type="checkbox" id="sc-grammar"> 主谓宾完整吗？
        </label>
        <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
          <input type="checkbox" id="sc-tense"> 时态对吗？
        </label>
        <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
          <input type="checkbox" id="sc-word"> 词用对了吗？
        </label>
        <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
          <input type="checkbox" id="sc-natural"> 听起来自然吗？
        </label>
        <button class="btn small accent" id="speak-save" style="margin-top:12px;">✅ 保存到航海日志</button>
      </div>
    `;

    // 随机话题
    const topics = [
      "Introduce yourself. Who are you and what do you do?",
      "What did you do yesterday? Tell me 3 things.",
      "Describe your product. Why should someone buy it?",
      "What are you learning today? Why is it important?",
      "Explain your job to a 10-year-old.",
      "What's your plan for tomorrow?",
      "Describe your favorite food and why you like it.",
      "Tell me about your city. What's special about it?",
      "What's a problem you solved recently?",
      "What do you want to achieve this year?",
    ];
    const taskEl = document.getElementById('speak-task');
    const setTopic = () => {
      const t = topics[Math.floor(Math.random() * topics.length)];
      taskEl.textContent = t;
    };
    setTopic();
    document.getElementById('speak-new-task').addEventListener('click', setTopic);

    // 朗读
    document.getElementById('speak-listen').addEventListener('click', () => {
      const text = document.getElementById('speak-text').value.trim();
      if (!text) { this.toast('请先写点什么'); return; }
      Voice.speakSentence(text);
    });

    // 语音输入
    document.getElementById('speak-record').addEventListener('click', async () => {
      const res = document.getElementById('speak-result');
      if (!Voice.checkRecognition()) {
        res.innerHTML = '<p style="color:var(--red);">需要 Chrome 浏览器</p>';
        return;
      }
      res.innerHTML = '<p style="color:var(--text-muted);">正在听...</p>';
      try {
        const spoken = await Voice.startRecognition({ lang: 'en-US' });
        document.getElementById('speak-text').value = spoken;
        res.innerHTML = `<p style="color:var(--green);">已识别: "${spoken}"</p>`;
      } catch (err) {
        res.innerHTML = `<p style="color:var(--red);">${err.message}</p>`;
      }
    });

    // 保存
    document.getElementById('speak-save').addEventListener('click', () => {
      const text = document.getElementById('speak-text').value.trim();
      if (!text) { this.toast('请先写点什么'); return; }
      const checks = {
        grammar: document.getElementById('sc-grammar').checked,
        tense: document.getElementById('sc-tense').checked,
        word: document.getElementById('sc-word').checked,
        natural: document.getElementById('sc-natural').checked,
      };
      const journals = this._getJournals();
      journals.unshift({
        date: new Date().toISOString(),
        type: 'speaking',
        content: text,
        topic: taskEl.textContent,
        checks,
      });
      localStorage.setItem('elab_journals', JSON.stringify(journals));
      this.toast('✅ 已保存到航海日志');
      document.getElementById('speak-text').value = '';
      setTopic();
      document.querySelectorAll('#page-speak input[type=checkbox]').forEach(cb => cb.checked = false);
    });
  },

  // ================================================================
  // 每日打卡
  // ================================================================
  _getJournals() {
    try { return JSON.parse(localStorage.getItem('elab_journals') || '[]'); } catch { return []; }
  },

  renderCheckin() {
    const c = document.getElementById('checkin-container');
    const progress = Storage.getStudyProgress();
    const today = new Date().toISOString().split('T')[0];
    const checked = Storage.getCheckins().includes(today);

    // 当前周数据
    const weekData = STUDY_PLAN.find(w => w.week === progress.currentWeek) || STUDY_PLAN[0];
    const dayData = weekData.days.find(d => d.day === progress.currentDay) || weekData.days[0];
    const totalDays = STUDY_PLAN.reduce((s, w) => s + w.days.length, 0);
    const completedDays = progress.completedDays.length;
    const completedToday = progress.completedDays.includes(today);

    // 当前周的第几天（用于导航）
    const currentDayIdx = progress.currentDay - 1;

    // 统计各层词汇
    const coreTotal = this.vocabulary.filter(v => v.tier === 'core').length;
    const highTotal = this.vocabulary.filter(v => v.tier === 'high').length;
    const bizTotal = this.vocabulary.filter(v => v.tier === 'biz').length;
    const studiedTotal = this.vocabulary.filter(v => v.totalReviews > 0).length;

    const dayLabels = ['第1天', '第2天', '第3天', '第4天', '第5天', '第6天', '第7天'];

    c.innerHTML = `
      <div class="page-header">
        <h2>📅 每日学习计划</h2>
        <p>句型优先 + 单词填入 · 第 ${progress.currentWeek}/24 周 · 累计完成 ${completedDays}/${totalDays} 天</p>
      </div>

      <!-- 进度条 -->
      <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius); padding:12px 16px; margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.85rem; color:var(--text-secondary);">学习进度</span>
          <span style="font-size:0.85rem; font-weight:700; color:var(--accent);">${Math.round(completedDays/totalDays*100)}%</span>
        </div>
        <div style="background:var(--border); border-radius:4px; height:6px; overflow:hidden;">
          <div style="background:var(--accent); height:100%; width:${Math.round(completedDays/totalDays*100)}%; border-radius:4px; transition:width 0.3s;"></div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:4px; font-size:0.7rem; color:var(--text-muted);">
          <span>已学 ${studiedTotal} 词 (核心${coreTotal}/高频${highTotal}/行业${bizTotal})</span>
          <span>连续 ${this.stats.streakDays} 天</span>
        </div>
      </div>

      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <!-- 左侧：周导航 + 天导航 -->
        <div style="flex:0 0 240px; display:flex; flex-direction:column; gap:12px;">
          <!-- 周选择 -->
          <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius); padding:12px;">
            <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">选择周</div>
            <div style="display:flex; gap:4px; flex-wrap:wrap;">
              ${STUDY_PLAN.map(w => `
                <button class="week-nav-btn" data-week="${w.week}"
                  style="width:36px; height:30px; border-radius:6px; border:1px solid ${w.week===progress.currentWeek?'var(--accent)':'var(--border)'};
                  background:${w.week===progress.currentWeek?'var(--accent-dim)':'var(--bg-card)'};
                  color:${w.week===progress.currentWeek?'var(--accent)':'var(--text-secondary)'};
                  font-size:0.75rem; cursor:pointer; text-align:center;"
                  title="${w.theme}">${w.week}</button>
              `).join('')}
            </div>
          </div>
          <!-- 天选择 -->
          <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius); padding:12px;">
            <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">本周</div>
            <div style="display:flex; flex-direction:column; gap:4px;">
              ${weekData.days.map((d, i) => `
                <button class="day-nav-btn" data-day="${d.day}"
                  style="width:100%; padding:8px 10px; border-radius:6px; border:1px solid ${d.day===progress.currentDay?'var(--accent)':'var(--border)'};
                  background:${d.day===progress.currentDay?'var(--accent-dim)':'var(--bg-card)'};
                  color:${d.day===progress.currentDay?'var(--accent)':'var(--text)'};
                  font-size:0.85rem; cursor:pointer; text-align:left;"
                  title="${d.title}">
                  ${dayLabels[i]}: ${d.title.length > 10 ? d.title.substring(0,10)+'...' : d.title}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 右侧：今日学习内容 -->
        <div style="flex:1; min-width:320px; display:flex; flex-direction:column; gap:16px;">
          <!-- 今日标题 -->
          <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:var(--radius); padding:20px;">
            <div style="font-size:1.1rem; font-weight:700; color:var(--accent); margin-bottom:4px;">
              第 ${progress.currentWeek} 周 · ${dayLabels[currentDayIdx]}
            </div>
            <div style="font-size:1.3rem; font-weight:700;">${dayData.title}</div>
            <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${weekData.theme}</div>
          </div>

          <!-- 核心句型 -->
          <div class="listen-section" style="padding:16px;">
            <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">🔤 今日句型</div>
            ${dayData.patterns.map(p => `
              <div style="display:flex; align-items:center; gap:12px; padding:10px 12px; margin-bottom:6px; background:var(--bg); border-radius:var(--radius-sm);">
                <code style="font-size:1rem; color:var(--accent); font-weight:600; white-space:nowrap;">${this._esc(p.en)}</code>
                ${p.cn ? `<span style="color:var(--text-secondary); font-size:0.85rem;">${this._esc(p.cn)}</span>` : ''}
              </div>
            `).join('')}
          </div>

          <!-- 今日单词 -->
          <div class="listen-section" style="padding:16px;">
            <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">📝 今日单词 (${dayData.words.length}个)</div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${dayData.words.map(w => `
                <span class="plan-word-chip" data-word="${this._esc(w.en)}"
                  style="display:inline-flex; align-items:center; gap:4px; padding:6px 12px; background:var(--bg); border:1px solid var(--border); border-radius:20px; cursor:pointer; font-size:0.85rem; transition:all 0.15s;"
                  onmouseover="this.style.borderColor='var(--accent)';this.style.background='var(--accent-dim)';"
                  onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--bg)';">
                  <span style="font-weight:600;">${this._esc(w.en)}</span>
                  <span style="color:var(--text-muted); font-size:0.75rem;">${this._esc(w.cn)}</span>
                  <span style="font-size:0.7rem;">🔊</span>
                </span>
              `).join('')}
            </div>
          </div>

          <!-- 三个任务模块 -->
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <div style="flex:1; min-width:200px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius); padding:16px;">
              <div style="font-size:0.9rem; font-weight:700; margin-bottom:8px;">🌅 上午 · 句型精学</div>
              <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6;">${this._esc(dayData.tasks.morning)}</div>
            </div>
            <div style="flex:1; min-width:200px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius); padding:16px;">
              <div style="font-size:0.9rem; font-weight:700; margin-bottom:8px;">☀️ 中午 · AI故事输入</div>
              <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6;">${this._esc(dayData.tasks.noon)}</div>
            </div>
            <div style="flex:1; min-width:200px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius); padding:16px;">
              <div style="font-size:0.9rem; font-weight:700; margin-bottom:8px;">🌆 下午 · 场景实战</div>
              <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6;">${this._esc(dayData.tasks.afternoon)}</div>
            </div>
          </div>

          <!-- 打卡按钮 -->
          <div style="text-align:center; padding:16px 0;">
            ${completedToday ? `
              <div style="display:inline-block; padding:12px 32px; background:var(--green-dim); border:1px solid var(--green); border-radius:var(--radius); color:var(--green); font-size:1rem; font-weight:700;">
                ✅ 今日已完成 · 连续 ${this.stats.streakDays} 天
              </div>
            ` : `
              <button class="btn accent" id="do-checkin" style="font-size:1.1rem; padding:14px 48px;">
                🔥 完成今日学习
              </button>
            `}
          </div>
        </div>
      </div>
    `;

    // 绑定周导航
    c.querySelectorAll('.week-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const w = parseInt(btn.dataset.week);
        if (w !== progress.currentWeek) {
          progress.currentWeek = w;
          progress.currentDay = 1;
          Storage.saveStudyProgress(progress);
          this.renderCheckin();
        }
      });
    });

    // 绑定天导航
    c.querySelectorAll('.day-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const d = parseInt(btn.dataset.day);
        if (d !== progress.currentDay) {
          progress.currentDay = d;
          Storage.saveStudyProgress(progress);
          this.renderCheckin();
        }
      });
    });

    // 绑定单词发音
    c.querySelectorAll('.plan-word-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const word = chip.dataset.word;
        Voice.speak(word);
      });
    });

    // 打卡按钮
    const checkinBtn = document.getElementById('do-checkin');
    if (checkinBtn) {
      checkinBtn.addEventListener('click', () => {
        const newProgress = Storage.markDayComplete(progress.currentWeek, progress.currentDay);
        this.stats = Storage.getStats();
        this.updateNavBadges();
        this.renderCheckin();
        this.toast(`✅ 第 ${progress.currentWeek} 周第 ${progress.currentDay} 天完成！`);
        // 自动推进到第二天
        if (newProgress.currentWeek !== progress.currentWeek || newProgress.currentDay !== progress.currentDay) {
          this.toast(`🚀 已自动进入第 ${newProgress.currentWeek} 周第 ${newProgress.currentDay} 天`);
        }
      });
    }
  },

  _esc(s) {
    if (!s) return '';
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  },

  // ================================================================
  // 周复盘
  // ================================================================
  renderReview() {
    const c = document.getElementById('review-container');
    const today = new Date();
    const journals = this._getJournals();

    // 本周统计
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    const weekStart = monday.toISOString().split('T')[0];
    const weekJournals = journals.filter(j => j.date >= weekStart);

    // 本周每天学习量
    const weekStats = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const ds = d.toISOString().split('T')[0];
      const td = this.stats.dailyHistory[ds] || { newWords: 0, reviews: 0 };
      weekStats.push({ date: ds, newWords: td.newWords, reviews: td.reviews });
    }

    const weekNewWords = weekStats.reduce((s, d) => s + d.newWords, 0);
    const weekReviews = weekStats.reduce((s, d) => s + d.reviews, 0);
    const totalVocab = this.vocabulary.length;
    const studiedVocab = this.vocabulary.filter(v => v.totalReviews > 0).length;
    const coreKnown = this.vocabulary.filter(v => v.tier === 'core' && v.totalReviews > 0).length;
    const coreTotal = this.vocabulary.filter(v => v.tier === 'core').length;
    const checkins = Storage.getCheckins();
    const weekCheckins = weekStats.filter(d => checkins.includes(d.date)).length;

    const weekLabels = ['一', '二', '三', '四', '五', '六', '日'];

    c.innerHTML = `
      <div class="page-header">
        <h2>📊 周复盘</h2>
        <p>${weekStart} 起 · 本周总结</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value" style="color:var(--accent);">${weekCheckins}/7</div>
          <div class="stat-label">本周打卡</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:var(--blue);">${weekNewWords}</div>
          <div class="stat-label">本周新词</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:var(--green);">${weekReviews}</div>
          <div class="stat-label">本周复习</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${this.stats.streakDays}</div>
          <div class="stat-label">连续打卡</div>
        </div>
      </div>

      <!-- 本周学习柱状图 -->
      <div class="listen-section" style="margin-bottom:20px;">
        <h4 style="margin-bottom:12px;">📊 本周每日学习量</h4>
        <div style="display:flex; gap:12px; align-items:flex-end; height:120px;">
          ${weekStats.map((d, i) => {
            const maxH = 100;
            const total = d.newWords + d.reviews;
            const h = total > 0 ? Math.max(8, total / Math.max(...weekStats.map(d => d.newWords + d.reviews), 1) * maxH) : 0;
            const isToday = d.date === today.toISOString().split('T')[0];
            return `
              <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px;">
                <span style="font-size:0.7rem; color:var(--text-muted);">${total}</span>
                <div style="width:100%; max-width:40px; height:${h}px; background:${isToday ? 'var(--accent)' : 'var(--blue)'}; border-radius:4px 4px 0 0; ${total === 0 ? 'opacity:0.3;' : ''}"></div>
                <span style="font-size:0.7rem; color:${isToday ? 'var(--accent)' : 'var(--text-muted)'};">${weekLabels[i]}</span>
              </div>`;
          }).join('')}
        </div>
      </div>

      <!-- 词汇进度 -->
      <div class="listen-section" style="margin-bottom:20px;">
        <h4 style="margin-bottom:12px;">📇 词汇总进度</h4>
        <div class="stat-bar-group">
          <div class="stat-bar-label"><span>核心词</span><span>${coreKnown}/${coreTotal}</span></div>
          <div class="stat-bar"><div class="stat-bar-fill" style="width:${coreTotal > 0 ? coreKnown/coreTotal*100 : 0}%; background:var(--accent);"></div></div>
        </div>
        <div class="stat-bar-group">
          <div class="stat-bar-label"><span>全部词汇</span><span>${studiedVocab}/${totalVocab}</span></div>
          <div class="stat-bar"><div class="stat-bar-fill" style="width:${totalVocab > 0 ? studiedVocab/totalVocab*100 : 0}%; background:var(--blue);"></div></div>
        </div>
      </div>

      <!-- 最近日志 -->
      <div class="listen-section" style="margin-bottom:20px;">
        <h4 style="margin-bottom:12px;">📝 本周记录</h4>
        ${weekJournals.length === 0 ? '<p style="color:var(--text-muted);">本周还没有记录</p>' : weekJournals.slice(0, 10).map(j => {
          const d = j.date.split('T')[0];
          return `
            <div style="padding:8px 0; border-bottom:1px solid var(--border);">
              <span style="color:var(--text-muted); font-size:0.75rem;">${d}</span>
              <span style="font-size:0.7rem; color:var(--blue); margin-left:8px;">${j.type === 'speaking' ? '🎤输出' : '📝日志'}</span>
              <p style="margin-top:2px; font-size:0.85rem;">${j.type === 'speaking' ? j.topic || '' : j.content}</p>
            </div>`;
        }).join('')}
      </div>

      <!-- 导出 -->
      <div style="margin-top:20px;">
        <button class="btn small" id="review-export">📥 导出学习数据</button>
        <button class="btn small danger" id="review-reset" style="margin-left:8px;">🔄 重置进度</button>
      </div>
    `;

    document.getElementById('review-export').addEventListener('click', () => {
      const data = {
        vocabulary: this.vocabulary,
        settings: this.settings,
        stats: this.stats,
        journals: journals,
        exportDate: new Date().toISOString(),
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `english-lab-review-${today.toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.toast('✅ 数据已导出');
    });

    document.getElementById('review-reset').addEventListener('click', () => {
      if (confirm('确定重置所有学习进度？此操作不可恢复！')) {
        localStorage.clear();
        location.reload();
      }
    });
  },
  // === 设置绑定 ===
  bindSettings() {
    const dailyEl = document.getElementById('setting-daily');
    if (dailyEl) {
      dailyEl.value = this.settings.dailyNewWords;
      dailyEl.addEventListener('change', () => {
        const v = Math.max(5, Math.min(50, parseInt(dailyEl.value) || 20));
        this.settings.dailyNewWords = v;
        this.session.dailyNewLimit = v;
        Storage.saveSettings(this.settings);
        dailyEl.value = v;
        this.toast(`每日新词 ${v} 个`);
      });
    }

    const speedEl = document.getElementById('setting-speed');
    if (speedEl) {
      speedEl.value = this.settings.voiceSpeed;
      speedEl.addEventListener('change', () => {
        this.settings.voiceSpeed = parseFloat(speedEl.value);
        Storage.saveSettings(this.settings);
      });
    }

    // TTS 引擎选择
    const engineEl = document.getElementById('setting-engine');
    if (engineEl) {
      engineEl.value = this.settings.ttsEngine || 'edge';
      engineEl.addEventListener('change', () => {
        this.settings.ttsEngine = engineEl.value;
        Storage.saveSettings(this.settings);
        this._refreshVoiceSelect();
        this._refreshApiKeySection();
        this.updateVoiceLabel();
        this.toast(`引擎已切换`);
        // 切换引擎时重新预热
        Voice.init();
      });
    }

    // 语音选择
    const voiceEl = document.getElementById('setting-voice');
    if (voiceEl) {
      this._refreshVoiceSelect();
      voiceEl.addEventListener('change', () => {
        const voiceKey = `ttsVoice_${this.settings.ttsEngine || 'edge'}`;
        this.settings[voiceKey] = voiceEl.value;
        Storage.saveSettings(this.settings);
        this.updateVoiceLabel();
        this.toast('语音已切换');
      });
    }

    // API Key 输入
    const googleKeyEl = document.getElementById('setting-google-key');
    if (googleKeyEl) {
      googleKeyEl.value = this.settings.googleApiKey || '';
      googleKeyEl.addEventListener('change', () => {
        this.settings.googleApiKey = googleKeyEl.value.trim();
        Storage.saveSettings(this.settings);
        this.toast('Google Key 已保存');
      });
    }

    const openaiKeyEl = document.getElementById('setting-openai-key');
    if (openaiKeyEl) {
      openaiKeyEl.value = this.settings.openaiApiKey || '';
      openaiKeyEl.addEventListener('change', () => {
        this.settings.openaiApiKey = openaiKeyEl.value.trim();
        Storage.saveSettings(this.settings);
        this.toast('OpenAI Key 已保存');
      });
    }

    const openaiModelEl = document.getElementById('setting-openai-model');
    if (openaiModelEl) {
      openaiModelEl.value = this.settings.openaiModel || 'tts-1';
      openaiModelEl.addEventListener('change', () => {
        this.settings.openaiModel = openaiModelEl.value;
        Storage.saveSettings(this.settings);
      });
    }

    this._refreshApiKeySection();
  },

  // === 工具 ===
  toast(msg) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity 0.3s'; setTimeout(() => el.remove(), 300); }, 2000);
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
