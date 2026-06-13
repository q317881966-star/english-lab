// English Lab — 句型库（S/A/B 三级分级）

// 分级标准：
// S级(20)：日常开口第一句，必不可少
// A级(30)：高频常用，稍进阶
// B级(25)：进阶拓展，逻辑表达
const TIER = {
  // === S级：核心20 === p01-p20
  'p01': 'S', 'p02': 'S', 'p03': 'S', 'p04': 'S', 'p05': 'S',
  'p06': 'S', 'p07': 'S', 'p08': 'S', 'p09': 'S', 'p10': 'S',
  'p11': 'S', 'p12': 'S', 'p13': 'S', 'p14': 'S', 'p15': 'S',
  'p16': 'S', 'p17': 'S', 'p18': 'S', 'p19': 'S', 'p20': 'S',
  // === A级：高频30 === p21-p50
  'p21': 'A', 'p22': 'A', 'p23': 'A', 'p24': 'A', 'p25': 'A',
  'p26': 'A', 'p27': 'A', 'p28': 'A', 'p29': 'A', 'p30': 'A',
  'p31': 'A', 'p32': 'A', 'p33': 'A', 'p34': 'A', 'p35': 'A',
  'p36': 'A', 'p37': 'A', 'p38': 'A', 'p39': 'A', 'p40': 'A',
  'p41': 'A', 'p42': 'A', 'p43': 'A', 'p44': 'A', 'p45': 'A',
  'p46': 'A', 'p47': 'A', 'p48': 'A', 'p49': 'A', 'p50': 'A',
};

const TIER_LABEL = {
  S: { name: 'S级 · 核心必备', cls: 'tier-s', icon: '⭐' },
  A: { name: 'A级 · 高频常用', cls: 'tier-a', icon: '🔷' },
  B: { name: 'B级 · 进阶拓展', cls: 'tier-b', icon: '🔸' },
};

// 分类显示顺序
const CAT_ORDER = [
  '日常沟通', '询问信息', '表达需求', '表达观点',
  '描述事实', '提出建议', '比较选择', '条件因果',
];

const App = {
  _tiers: {},  // { S: { cat: [patterns] }, A: {...}, B: {...} }

  init() {
    Voice.init();
    this._buildTiers();
    this._render();
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

  _buildTiers() {
    const result = { S: {}, A: {}, B: {} };
    SENTENCE_PATTERNS.forEach(p => {
      const tier = TIER[p.id] || 'B';
      if (!result[tier][p.function]) result[tier][p.function] = [];
      result[tier][p.function].push(p);
    });
    this._tiers = result;
  },

  _countTier(tier) {
    let n = 0;
    const cats = this._tiers[tier] || {};
    Object.values(cats).forEach(arr => n += arr.length);
    return n;
  },

  _render() {
    const main = document.getElementById('main-content');
    let html = '';

    ['S', 'A', 'B'].forEach(tier => {
      const cats = this._tiers[tier];
      const label = TIER_LABEL[tier];
      const total = this._countTier(tier);
      if (total === 0) return;

      html += `<div class="tier-section"><div class="tier-header ${label.cls}">${label.icon} ${label.name} <span class="tier-count">${total}条</span></div>`;

      // 按 CAT_ORDER 排列分类
      CAT_ORDER.forEach(cat => {
        const patterns = cats[cat];
        if (!patterns || patterns.length === 0) return;
        html += `
          <div class="cat-group">
            <div class="cat-label">${cat} <span class="cat-n">${patterns.length}条</span></div>
            ${patterns.map(p => this._renderCard(p)).join('')}
          </div>
        `;
      });

      // 处理不在 CAT_ORDER 中的分类
      Object.keys(cats).forEach(cat => {
        if (CAT_ORDER.includes(cat)) return;
        const patterns = cats[cat];
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
    return `
      <div class="pattern-card" data-id="${p.id}">
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
  },

  _esc(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
