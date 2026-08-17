// English Lab — 应用主逻辑
// 三个页签:今日工单 / 图纸库(句型库) / 进度

// 句型分级:S级(前20)/ A级(30)/ B级(其余),与原版保持一致
const TIER = Object.fromEntries(
  SENTENCE_PATTERNS.map((p, i) => [p.id, i < 20 ? 'S' : i < 50 ? 'A' : 'B'])
);

const App = {
  tabs: ['today', 'library', 'progress'],

  init() {
    Voice.init();
    StudyUI.init(document.getElementById('view-today'));
    this._buildTiers();
    this._bindTabs();
    this._bindLibraryEvents();
    this._bindKeys();
    this.switchTab('today');
  },

  // ── 页签切换 ──
  switchTab(tab) {
    if (!this.tabs.includes(tab)) return;
    document.querySelectorAll('.view').forEach(v => { v.hidden = true; });
    document.getElementById('view-' + tab).hidden = false;
    document.querySelectorAll('.tab-item').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
    });
    if (tab === 'today') StudyUI.open();
    if (tab === 'library') this._renderLibrary();
    if (tab === 'progress') this._renderProgress();
  },

  _bindTabs() {
    document.querySelector('.tab-bar').addEventListener('click', e => {
      const btn = e.target.closest('.tab-item');
      if (btn) this.switchTab(btn.dataset.tab);
    });
  },

  // 键盘快捷键:Mac 桌面端 Space=发音,Enter=检查
  _bindKeys() {
    document.addEventListener('keydown', e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        const btn = document.querySelector('.view:not([hidden]) .btn-play-lg, .view:not([hidden]) .btn-play');
        if (btn) { e.preventDefault(); btn.click(); }
      }
      if (e.code === 'Enter') {
        const check = document.querySelector('.view:not([hidden]) [data-action="check-quiz"]');
        if (check) { e.preventDefault(); check.click(); }
      }
    });
  },

  // ══════════════ 图纸库(原句型库保留) ══════════════
  _tiers: {},
  _catOrder: [
    '日常沟通', '询问信息', '表达需求', '表达观点',
    '描述事实', '提出建议', '比较选择', '条件因果'
  ],
  _tierLabel: {
    S: { name: 'S级 · 核心必备', cls: 'tier-s', icon: '⭐' },
    A: { name: 'A级 · 高频常用', cls: 'tier-a', icon: '🔷' },
    B: { name: 'B级 · 进阶拓展', cls: 'tier-b', icon: '🔸' }
  },

  _buildTiers() {
    const result = { S: {}, A: {}, B: {} };
    SENTENCE_PATTERNS.forEach(p => {
      const tier = TIER[p.id] || 'B';
      if (!result[tier][p.function]) result[tier][p.function] = [];
      result[tier][p.function].push(p);
    });
    this._tiers = result;
  },

  _renderLibrary() {
    const main = document.getElementById('view-library');
    let html = '';
    ['S', 'A', 'B'].forEach(tier => {
      const cats = this._tiers[tier];
      const label = this._tierLabel[tier];
      const total = Object.values(cats).reduce((n, arr) => n + arr.length, 0);
      if (total === 0) return;
      html += `<div class="tier-section"><div class="tier-header ${label.cls}">${label.icon} ${label.name} <span class="tier-count">${total}条</span></div>`;
      this._catOrder.forEach(cat => {
        const patterns = cats[cat];
        if (!patterns || patterns.length === 0) return;
        html += `
          <div class="cat-group">
            <div class="cat-label">${cat} <span class="cat-n">${patterns.length}条</span></div>
            ${patterns.map(p => this._renderCard(p)).join('')}
          </div>
        `;
      });
      html += '</div>';
    });
    main.innerHTML = html;
  },

  _renderCard(p) {
    const enHtml = this._esc(p.pattern).replace(/____/g, '<span class="blank">____</span>');
    const tplText = this._esc(p.pattern.replace(/____/g, 'something'));
    return `
      <div class="pattern-card" data-id="${p.id}">
        <div class="pattern-row">
          <div class="pattern-body">
            <div class="pattern-en">${enHtml}</div>
            <div class="pattern-cn">${this._esc(p.cn)}</div>
          </div>
          <button class="pattern-play" data-text="${tplText}">🔊</button>
          <span class="pattern-arrow">▼</span>
        </div>
        <div class="pattern-examples">
          ${p.examples.map((ex, ei) => `
            <div class="example-item">
              <span class="example-num">${ei + 1}</span>
              <div class="example-body">
                <div class="example-en">${this._esc(ex)}</div>
                ${p.examplesCn && p.examplesCn[ei] ? `<div class="example-cn">${this._esc(p.examplesCn[ei])}</div>` : ''}
              </div>
              <button class="example-play" data-text="${this._esc(ex)}">🔊</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  _bindLibraryEvents() {
    const main = document.getElementById('view-library');
    main.addEventListener('click', e => {
      const playBtn = e.target.closest('.pattern-play');
      const exPlayBtn = e.target.closest('.example-play');
      if (playBtn || exPlayBtn) {
        e.preventDefault();
        e.stopPropagation();
        const btn = playBtn || exPlayBtn;
        Voice.speak(btn.dataset.text);
        return;
      }
      const row = e.target.closest('.pattern-row');
      if (row) row.closest('.pattern-card').classList.toggle('expanded');
    });
  },

  // ══════════════ 进度页 ══════════════
  _renderProgress() {
    const main = document.getElementById('view-progress');
    const data = Store.load();
    const mastered = Object.values(data.patterns).filter(p => p.mastered).length;
    const doneDays = Object.keys(data.daysDone).length;
    const today = Store.today();

    let mapHtml = '';
    for (let d = 1; d <= 30; d++) {
      const done = Object.values(data.daysDone).some(v => v.day === d);
      const isToday = data.currentDay === d && data.lastCompletedDate !== today;
      mapHtml += `<span class="map-cell ${done ? 'done' : ''} ${isToday ? 'today' : ''}">${d}</span>`;
    }

    const weakHtml = data.weakList.length
      ? data.weakList.map(key => {
          const p = data.patterns[key];
          return `
            <div class="weak-item">
              <button class="btn-play" data-text="${this._esc(key)}">▶</button>
              <div class="weak-text">
                <div class="weak-en">${this._esc(key)}</div>
                <div class="weak-cn">${p ? this._esc(p.cn) : ''}</div>
              </div>
              <button class="weak-del" data-key="${this._esc(key)}">移除</button>
            </div>
          `;
        }).join('')
      : '<div class="empty-sub">没有弱项,很棒!</div>';

    main.innerHTML = `
      <div class="section-title">学习进度</div>
      <div class="stat-row">
        <div class="stat-card"><b>${data.streak}</b><span>连续天数</span></div>
        <div class="stat-card"><b>${doneDays}</b><span>完成天数</span></div>
        <div class="stat-card"><b>${mastered}</b><span>已掌握句型</span></div>
      </div>
      <div class="section-title">30 天课程地图</div>
      <div class="map-grid">${mapHtml}</div>
      <div class="section-title">弱项本</div>
      <div class="weak-list">${weakHtml}</div>
      <div class="section-title">数据管理</div>
      <div class="data-row">
        <button class="btn-ghost" data-action="export">导出进度</button>
        <button class="btn-ghost" data-action="import">导入进度</button>
        <input type="file" id="import-file" accept="application/json" hidden>
      </div>
      <div class="data-hint">换手机或 Mac 同步时:先在一台设备导出,再到另一台导入</div>
      <div class="section-title">语音音色</div>
      <div class="voice-row">
        ${Voice.VOICES.map(v => `
          <button class="voice-btn ${Voice._voiceId() === v.id ? 'active' : ''}" data-voice="${v.id}">${this._esc(v.name)}</button>
        `).join('')}
      </div>
      <div class="data-hint">默认自然女声;网络不稳时会自动回退系统语音。选好后回到今日工单即可生效。</div>
    `;

    main.querySelector('[data-action="export"]').addEventListener('click', () => Store.export());
    main.querySelector('[data-action="import"]').addEventListener('click', () => {
      main.querySelector('#import-file').click();
    });
    main.querySelector('#import-file').addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      Store.importFile(file).then(() => {
        this._renderProgress();
      }).catch(err => {
        alert('导入失败:' + err.message);
      });
    });
    main.querySelectorAll('.weak-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        const idx = data.weakList.indexOf(key);
        if (idx >= 0) data.weakList.splice(idx, 1);
        Store.save(data);
        this._renderProgress();
      });
    });
    main.querySelectorAll('.voice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        try {
          localStorage.setItem('english-lab-voice', btn.dataset.voice);
        } catch (e) {}
        main.querySelectorAll('.voice-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  },

  _esc(s) {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
