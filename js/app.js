// English Lab — 句型库（S/A/B 三级分级）

// 分级标准：
// S级(20)：日常开口第一句，必不可少
// A级(30)：高频常用，稍进阶
// B级(58)：场景化，拓展表达
const TIER = {
  // === S级：核心20 ===
  'p01': 'S', 'p02': 'S', 'p13': 'S', 'p14': 'S', 'p16': 'S',
  'p17': 'S', 'p21': 'S', 'p26': 'S', 'p36': 'S', 'p38': 'S',
  'p47': 'S', 'p48': 'S', 'p49': 'S', 'p50': 'S', 'p51': 'S',
  'p52': 'S', 'p53': 'S', 'p55': 'S', 'p69': 'S', 'p96': 'S',
  // === A级：高频30 ===
  'p04': 'A', 'p05': 'A', 'p07': 'A', 'p08': 'A', 'p10': 'A',
  'p11': 'A', 'p12': 'A', 'p15': 'A', 'p18': 'A', 'p19': 'A',
  'p20': 'A', 'p22': 'A', 'p27': 'A', 'p37': 'A', 'p39': 'A',
  'p42': 'A', 'p43': 'A', 'p44': 'A', 'p56': 'A', 'p59': 'A',
  'p62': 'A', 'p63': 'A', 'p64': 'A', 'p71': 'A', 'p73': 'A',
  'p78': 'A', 'p84': 'A', 'p95': 'A', 'p101': 'A', 'p104': 'A',
};

const TIER_LABEL = {
  S: { name: 'S级 · 核心必备', cls: 'tier-s', icon: '⭐' },
  A: { name: 'A级 · 高频常用', cls: 'tier-a', icon: '🔷' },
  B: { name: 'B级 · 进阶拓展', cls: 'tier-b', icon: '🔸' },
};

// 分类显示顺序
const CAT_ORDER = [
  '表达观点', '询问信息', '表达需求', '日常沟通',
  '描述事实', '提出建议', '比较选择', '条件因果',
  '时间顺序', '商务场景',
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
