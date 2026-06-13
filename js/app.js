// English Lab — 句型库（按分类浏览，108核心句型）

const App = {
  _categories: [],
  _activeCat: null,

  // 分类排序：核心在前
  _CAT_ORDER: [
    '表达观点', '询问信息', '表达需求', '日常沟通',
    '描述事实', '提出建议', '比较选择', '条件因果',
    '时间顺序', '商务场景',
  ],

  init() {
    Voice.init();
    this._buildCategories();
    this._renderTabs();
    this._renderAll();
    this._bindEvents();
    // iOS 音频解锁
    const unlock = () => {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const buf = ctx.createBuffer(1, 1, 22050);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start(0);
      ctx.resume();
      document.removeEventListener('click', unlock);
      document.removeEventListener('touchstart', unlock);
    };
    document.addEventListener('click', unlock);
    document.addEventListener('touchstart', unlock);
  },

  _buildCategories() {
    const map = {};
    SENTENCE_PATTERNS.forEach(p => {
      if (!map[p.function]) map[p.function] = [];
      map[p.function].push(p);
    });
    // 按指定顺序排
    this._categories = this._CAT_ORDER
      .filter(cat => map[cat])
      .map(cat => ({ name: cat, patterns: map[cat] }));
    this._activeCat = this._categories[0]?.name || null;
  },

  _renderTabs() {
    const tabs = document.getElementById('category-tabs');
    tabs.innerHTML = this._categories.map(c =>
      `<button class="cat-tab${c.name === this._activeCat ? ' active' : ''}" data-cat="${this._esc(c.name)}">${c.name} (${c.patterns.length})</button>`
    ).join('');
  },

  _renderAll() {
    const main = document.getElementById('main-content');
    main.innerHTML = this._categories.map(cat => `
      <div class="cat-section" data-cat="${this._esc(cat.name)}">
        <div class="cat-header">${cat.name} <span class="cat-count">· ${cat.patterns.length}条</span></div>
        ${cat.patterns.map((p, pi) => this._renderCard(p, pi)).join('')}
      </div>
    `).join('');
  },

  _renderCard(p, pi) {
    const catIdx = this._categories.findIndex(c => c.name === p.function);
    // 高亮空白位 ____
    const enHtml = this._esc(p.pattern).replace(/____/g, '<span class="blank">____</span>');
    return `
      <div class="pattern-card" data-id="${p.id}" data-cat-idx="${catIdx}" data-pi="${pi}">
        <div class="pattern-row">
          <div class="pattern-body">
            <div class="pattern-en">${enHtml}</div>
            <div class="pattern-cn">${this._esc(p.cn)}</div>
          </div>
          <button class="pattern-play" data-text="${this._esc(p.pattern.replace(/____/g, 'something'))}">🔊</button>
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

  _bindEvents() {
    const main = document.getElementById('main-content');

    // 句型卡片展开/收起
    main.addEventListener('click', (e) => {
      const row = e.target.closest('.pattern-row');
      const playBtn = e.target.closest('.pattern-play');
      const exPlayBtn = e.target.closest('.example-play');

      if (exPlayBtn) {
        e.stopPropagation();
        Voice.speak(exPlayBtn.dataset.text);
        return;
      }
      if (playBtn) {
        e.stopPropagation();
        Voice.speak(playBtn.dataset.text);
        return;
      }
      if (row) {
        row.closest('.pattern-card').classList.toggle('expanded');
      }
    });

    // 分类标签点击 → 滚动到对应区域
    document.getElementById('category-tabs').addEventListener('click', (e) => {
      const tab = e.target.closest('.cat-tab');
      if (!tab) return;

      // 更新 active 样式
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      this._activeCat = tab.dataset.cat;

      // 滚动到对应分类
      const section = main.querySelector(`.cat-section[data-cat="${tab.dataset.cat}"]`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  },

  _esc(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
