// English Lab — 句型学习（精简版）
// 聚焦句型 + 匹配单词，手机优先

const App = {
  _current: { week: 1, day: 1 },
  _completed: {},

  // === 初始化 ===
  init() {
    Voice.init();
    this._loadProgress();
    this._bindUI();
    this._render();
    // iOS 需要在用户手势中解锁音频
    document.querySelector('.app').addEventListener('click', () => Voice.unlock(), { once: true });
  },

  // === 进度存取 ===
  _loadProgress() {
    try {
      const raw = localStorage.getItem('elab_progress');
      if (raw) {
        const data = JSON.parse(raw);
        this._current = data.current || { week: 1, day: 1 };
        this._completed = data.completed || {};
      }
    } catch(e) {}
  },

  _saveProgress() {
    localStorage.setItem('elab_progress', JSON.stringify({
      current: this._current,
      completed: this._completed,
    }));
  },

  _isDone(week, day) {
    return !!this._completed[`${week}-${day}`];
  },

  _markDone(week, day) {
    this._completed[`${week}-${day}`] = true;
    this._saveProgress();
  },

  // === 获取数据 ===
  _getDayData(week, day) {
    const weekData = STUDY_PLAN.find(w => w.week === week);
    if (!weekData) return null;
    return weekData.days.find(d => d.day === day) || null;
  },

  _getWeekData(week) {
    return STUDY_PLAN.find(w => w.week === week) || null;
  },

  // === 生成例句 ===
  _genExamples(patternEn) {
    const clean = patternEn.replace(/\.\.\./g, '').trim();
    const FILL = {
      'I am': [{en:'I am a student.', cn:'我是一个学生。'},{en:'I am from Beijing.', cn:'我来自北京。'},{en:'I am ready.', cn:'我准备好了。'},{en:'I am happy today.', cn:'我今天很开心。'},{en:'I am here.', cn:'我在这里。'}],
      'My name is': [{en:'My name is John.', cn:'我叫 John。'},{en:'My name is Li Ming.', cn:'我叫李明。'},{en:'My name is Anna.', cn:'我叫 Anna。'},{en:'My name is Wang Fang.', cn:'我叫王芳。'},{en:'My name is David.', cn:'我叫 David。'}],
      'I am from': [{en:'I am from China.', cn:'我来自中国。'},{en:'I am from Shanghai.', cn:'我来自上海。'},{en:'I am from London.', cn:'我来自伦敦。'},{en:'I am from Tokyo.', cn:'我来自东京。'},{en:'I am from New York.', cn:'我来自纽约。'}],
      'This is': [{en:'This is my book.', cn:'这是我的书。'},{en:'This is John.', cn:'这是 John。'},{en:'This is a good idea.', cn:'这是个好主意。'},{en:'This is my phone.', cn:'这是我的手机。'},{en:'This is my friend.', cn:'这是我的朋友。'}],
      'He is': [{en:'He is tall.', cn:'他很高。'},{en:'He is a teacher.', cn:'他是一名老师。'},{en:'He is my brother.', cn:'他是我的兄弟。'},{en:'He is very kind.', cn:'他很善良。'},{en:'He is from Canada.', cn:'他来自加拿大。'}],
      'She is': [{en:'She is beautiful.', cn:'她很漂亮。'},{en:'She is a doctor.', cn:'她是一名医生。'},{en:'She is my sister.', cn:'她是我的姐妹。'},{en:'She is very smart.', cn:'她很聪明。'},{en:'She is from England.', cn:'她来自英国。'}],
      'He/She is': [{en:'He is tall.', cn:'他很高。'},{en:'She is a doctor.', cn:'她是一名医生。'},{en:'He is my brother.', cn:'他是我的兄弟。'},{en:'She is very kind.', cn:'她很善良。'},{en:'He is from Canada.', cn:'他来自加拿大。'}],
      'It is': [{en:'It is a book.', cn:'这是一本书。'},{en:'It is on the table.', cn:'它在桌子上。'},{en:'It is very good.', cn:'非常好。'},{en:'It is my pen.', cn:'这是我的笔。'},{en:'It is raining today.', cn:'今天在下雨。'}],
      'What is': [{en:'What is this?', cn:'这是什么？'},{en:'What is your name?', cn:'你叫什么名字？'},{en:'What is that?', cn:'那是什么？'},{en:'What is the time?', cn:'几点了？'},{en:'What is in the bag?', cn:'包里有什么？'}],
      'What is this': [{en:'What is this? — It is a book.', cn:'这是什么？——这是一本书。'},{en:'What is this? — It is my phone.', cn:'这是什么？——这是我的手机。'},{en:'What is this? — It is a pen.', cn:'这是什么？——这是一支笔。'},{en:'What is this? — It is a gift.', cn:'这是什么？——这是一份礼物。'},{en:'What is this? — It is my key.', cn:'这是什么？——这是我的钥匙。'}],
      'Is this': [{en:'Is this your book?', cn:'这是你的书吗？'},{en:'Is this the right way?', cn:'这条路对吗？'},{en:'Is this your pen?', cn:'这是你的笔吗？'},{en:'Is this a good idea?', cn:'这是个好主意吗？'},{en:'Is this your phone?', cn:'这是你的手机吗？'}],
      'I want': [{en:'I want some water.', cn:'我想要一些水。'},{en:'I want to eat.', cn:'我想吃饭。'},{en:'I want a new book.', cn:'我想要一本新书。'},{en:'I want to go home.', cn:'我想回家。'},{en:'I want to learn English.', cn:'我想学英语。'}],
      'I would like': [{en:'I would like some tea.', cn:'我想要一些茶。'},{en:'I would like to order now.', cn:'我想现在点餐。'},{en:'I would like a cup of coffee.', cn:'我想要一杯咖啡。'},{en:'I would like to ask a question.', cn:'我想问一个问题。'},{en:'I would like some help.', cn:'我需要一些帮助。'}],
      'I like': [{en:'I like music.', cn:'我喜欢音乐。'},{en:'I like reading books.', cn:'我喜欢读书。'},{en:'I like this movie.', cn:'我喜欢这部电影。'},{en:'I like sunny days.', cn:'我喜欢晴天。'},{en:'I like learning English.', cn:'我喜欢学英语。'}],
      'I don\'t like': [{en:'I don\'t like rain.', cn:'我不喜欢下雨。'},{en:'I don\'t like spicy food.', cn:'我不喜欢辣的食物。'},{en:'I don\'t like getting up early.', cn:'我不喜欢早起。'},{en:'I don\'t like loud music.', cn:'我不喜欢吵闹的音乐。'},{en:'I don\'t like cold weather.', cn:'我不喜欢冷天。'}],
      'He/She has': [{en:'He has a new car.', cn:'他有一辆新车。'},{en:'She has beautiful eyes.', cn:'她有一双漂亮的眼睛。'},{en:'He has a big family.', cn:'他有一个大家庭。'},{en:'She has a great job.', cn:'她有一份好工作。'},{en:'He has two brothers.', cn:'他有两个兄弟。'}],
      'How old': [{en:'How old are you?', cn:'你多大了？'},{en:'How old is your sister?', cn:'你妹妹多大了？'},{en:'How old is this building?', cn:'这栋楼有多少年了？'},{en:'How old is your dog?', cn:'你的狗多大了？'},{en:'How old is that book?', cn:'那本书有多旧了？'}],
      'How old are you': [{en:'How old are you? — I am 25.', cn:'你多大了？——我 25 岁。'},{en:'How old are you? — I am 30 years old.', cn:'你多大了？——我 30 岁。'},{en:'How old are you? — I am a student.', cn:'你多大了？——我是学生。'},{en:'How old are you? — I am 18.', cn:'你多大了？——我 18 岁。'},{en:'How old are you? — I am 42.', cn:'你多大了？——我 42 岁。'}],
      'I am ... years old': [{en:'I am 25 years old.', cn:'我 25 岁。'},{en:'I am 18 years old.', cn:'我 18 岁。'},{en:'I am 30 years old.', cn:'我 30 岁。'},{en:'I am 42 years old.', cn:'我 42 岁。'},{en:'I am 10 years old.', cn:'我 10 岁。'}],
      'When is': [{en:'When is your birthday?', cn:'你生日是什么时候？'},{en:'When is the party?', cn:'派对是什么时候？'},{en:'When is the meeting?', cn:'会议是什么时候？'},{en:'When is the next bus?', cn:'下一班公交什么时候？'},{en:'When is dinner ready?', cn:'晚饭什么时候好？'}],
      'I think': [{en:'I think he is right.', cn:'我觉得他是对的。'},{en:'I think she is nice.', cn:'我觉得她很好。'},{en:'I think this is good.', cn:'我觉得这个不错。'},{en:'I think it will rain.', cn:'我觉得会下雨。'},{en:'I think we should go.', cn:'我觉得我们该走了。'}],
      'What is he/she like': [{en:'What is he like?', cn:'他什么样？'},{en:'What is she like?', cn:'她什么样？'},{en:'What is your mother like?', cn:'你妈妈什么样？'},{en:'What is your boss like?', cn:'你老板什么样？'},{en:'What is the new teacher like?', cn:'新老师什么样？'}],
      'There is': [{en:'There is a book on the table.', cn:'桌子上有一本书。'},{en:'There is a park near my house.', cn:'我家附近有一个公园。'},{en:'There is a problem.', cn:'有个问题。'},{en:'There is a cat in the garden.', cn:'花园里有一只猫。'},{en:'There is a supermarket nearby.', cn:'附近有一家超市。'}],
      'There are': [{en:'There are many people here.', cn:'这里有很多人。'},{en:'There are three apples.', cn:'有三个苹果。'},{en:'There are some books on the desk.', cn:'桌上有一些书。'},{en:'There are two parks in my town.', cn:'我镇上有两个公园。'},{en:'There are many reasons.', cn:'有很多原因。'}],
      'I have': [{en:'I have a dog.', cn:'我有一只狗。'},{en:'I have two brothers.', cn:'我有两个兄弟。'},{en:'I have a question.', cn:'我有一个问题。'},{en:'I have some ideas.', cn:'我有一些想法。'},{en:'I have a meeting today.', cn:'我今天有个会。'}],
      'Do you': [{en:'Do you like music?', cn:'你喜欢音乐吗？'},{en:'Do you have a pen?', cn:'你有笔吗？'},{en:'Do you want some tea?', cn:'你想喝茶吗？'},{en:'Do you speak English?', cn:'你会说英语吗？'},{en:'Do you know the answer?', cn:'你知道答案吗？'}],
      'Can I': [{en:'Can I help you?', cn:'需要帮忙吗？'},{en:'Can I sit here?', cn:'我可以坐这里吗？'},{en:'Can I ask a question?', cn:'我可以问一个问题吗？'},{en:'Can I borrow your pen?', cn:'我可以借你的笔吗？'},{en:'Can I have some water?', cn:'我可以要些水吗？'}],
      'Can you': [{en:'Can you help me?', cn:'你能帮我吗？'},{en:'Can you speak English?', cn:'你会说英语吗？'},{en:'Can you repeat that?', cn:'你能重复一遍吗？'},{en:'Can you show me the way?', cn:'你能给我指路吗？'},{en:'Can you wait a moment?', cn:'你能等一会儿吗？'}],
      'Where is': [{en:'Where is the station?', cn:'车站在哪里？'},{en:'Where is the bathroom?', cn:'洗手间在哪里？'},{en:'Where is my phone?', cn:'我的手机在哪里？'},{en:'Where is the nearest bank?', cn:'最近的银行在哪里？'},{en:'Where is your office?', cn:'你的办公室在哪里？'}],
    };
    if (FILL[clean]) return FILL[clean];
    const keys = Object.keys(FILL);
    for (const k of keys) { if (clean.startsWith(k) || k.startsWith(clean)) return FILL[k]; }
    return [
      {en: `${clean} — let's practice.`, cn: `${clean}——来练习一下。`},
      {en: `Can you say "${clean}"?`, cn: `你能说"${clean}"吗？`},
      {en: `Try using "${clean}" in a sentence.`, cn: `试着用"${clean}"造句。`},
      {en: `${clean} ... now you try.`, cn: `${clean}……你来试试。`},
      {en: `Repeat after me: "${clean}".`, cn: `跟我读："${clean}"。`},
    ];
  },

  _esc(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  // === 导航 ===
  _goTo(week, day) {
    const weekData = this._getWeekData(week);
    if (!weekData) return;
    if (day < 1) day = 1;
    if (day > weekData.days.length) day = weekData.days.length;
    this._current = { week, day };
    this._saveProgress();
    this._render();
    document.getElementById('main-content').scrollTop = 0;
  },

  _goPrev() {
    const { week, day } = this._current;
    if (day > 1) {
      this._goTo(week, day - 1);
    } else if (week > 1) {
      const prevWeek = this._getWeekData(week - 1);
      if (prevWeek) this._goTo(week - 1, prevWeek.days.length);
    }
  },

  _goNext() {
    const { week, day } = this._current;
    const weekData = this._getWeekData(week);
    const maxDay = weekData ? weekData.days.length : 7;
    if (day < maxDay) {
      this._goTo(week, day + 1);
    } else if (week < STUDY_PLAN.length) {
      this._goTo(week + 1, 1);
    }
  },

  // === Toast ===
  _toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
  },

  // === 事件绑定 ===
  _bindUI() {
    document.getElementById('btn-prev').addEventListener('click', () => this._goPrev());
    document.getElementById('btn-next').addEventListener('click', () => this._goNext());
    document.getElementById('btn-done').addEventListener('click', () => this._handleDone());

    document.getElementById('btn-week-picker').addEventListener('click', () => this._openWeekPicker());
    document.getElementById('btn-week-close').addEventListener('click', () => this._closeWeekPicker());
    document.getElementById('week-overlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) this._closeWeekPicker();
    });
  },

  // === 完成今日 ===
  _handleDone() {
    const { week, day } = this._current;
    this._markDone(week, day);
    this._render();
    this._toast('✅ 今日完成！继续加油 🔥');
    setTimeout(() => this._goNext(), 600);
  },

  // === 周选择器 ===
  _openWeekPicker() {
    const list = document.getElementById('week-list');
    list.innerHTML = STUDY_PLAN.map(w => {
      const total = w.days.length;
      const done = w.days.filter(d => this._isDone(w.week, d.day)).length;
      const isCurrent = w.week === this._current.week;
      return `
        <div class="week-select-item ${isCurrent ? 'current' : ''}" data-week="${w.week}">
          <span class="week-select-num">第${w.week}周</span>
          <span class="week-select-theme">${w.theme}</span>
          <span class="week-select-progress">${done}/${total}</span>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.week-select-item').forEach(item => {
      item.addEventListener('click', () => {
        const w = parseInt(item.dataset.week);
        this._goTo(w, 1);
        this._closeWeekPicker();
      });
    });

    document.getElementById('week-overlay').classList.add('open');
  },

  _closeWeekPicker() {
    document.getElementById('week-overlay').classList.remove('open');
  },

  // === 渲染 ===
  _render() {
    const { week, day } = this._current;
    const weekData = this._getWeekData(week);
    const dayData = this._getDayData(week, day);

    document.getElementById('header-week').textContent = `第${week}周`;
    document.getElementById('header-theme').textContent = weekData ? weekData.theme : '';

    // 7天圆点
    const daysEl = document.getElementById('header-days');
    if (weekData) {
      daysEl.innerHTML = weekData.days.map(d => {
        const isActive = d.day === day;
        const isDone = this._isDone(week, d.day);
        let cls = 'day-dot';
        if (isActive) cls += ' active';
        else if (isDone) cls += ' done';
        return `<button class="${cls}" data-day="${d.day}" title="${d.title}">${isDone ? '✓' : d.day}</button>`;
      }).join('');

      daysEl.querySelectorAll('.day-dot').forEach(dot => {
        dot.addEventListener('click', () => this._goTo(week, parseInt(dot.dataset.day)));
      });
    }

    // 主内容
    const main = document.getElementById('main-content');
    if (!dayData) {
      main.innerHTML = `<div class="empty-state"><div class="empty-icon">📭</div><div class="empty-title">该天没有数据</div></div>`;
      return;
    }

    const isDone = this._isDone(week, day);
    const patterns = dayData.patterns || [];
    const words = dayData.words || [];

    const patternsHTML = patterns.length > 0 ? `
      <div class="section-title">📝 今日句型</div>
      ${patterns.map((p, pi) => {
        const examples = this._genExamples(p.en);
        return `
          <div class="pattern-card" data-pi="${pi}">
            <div class="pattern-header">
              <div class="pattern-body">
                <div class="pattern-en">${this._esc(p.en)}</div>
                ${p.cn ? `<div class="pattern-cn">${this._esc(p.cn)}</div>` : ''}
              </div>
              <button class="pattern-play" data-text="${this._esc(p.en)}">🔊</button>
              <span class="pattern-arrow">▼</span>
            </div>
            <div class="pattern-examples">
              ${examples.map((ex, ei) => `
                <div class="example-item">
                  <span class="example-num">${ei + 1}</span>
                  <div class="example-content">
                    <div class="example-en">${this._esc(ex.en)}</div>
                    ${ex.cn ? `<div class="example-cn">${this._esc(ex.cn)}</div>` : ''}
                  </div>
                  <button class="example-play" data-text="${this._esc(ex.en)}">🔊</button>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    ` : '';

    const wordsHTML = words.length > 0 ? `
      <div class="section-title">📋 今日单词 (${words.length}个)</div>
      <div class="word-chips">
        ${words.map(w => `
          <span class="word-chip" data-word="${this._esc(w.en)}">
            <span class="word-en">${this._esc(w.en)}</span>
            <span class="word-cn">${this._esc(w.cn)}</span>
            <span class="word-chip-icon">🔊</span>
          </span>
        `).join('')}
      </div>
    ` : '';

    main.innerHTML = `
      <div style="margin-bottom:8px;">
        <span style="font-size:1.1rem; font-weight:700; color:var(--accent);">第${day}天</span>
        <span style="color:var(--text-secondary); margin-left:8px;">${dayData.title || ''}</span>
        ${isDone ? '<span style="margin-left:8px; font-size:0.8rem; color:var(--green);">✓ 已完成</span>' : ''}
      </div>
      ${patternsHTML}
      ${wordsHTML}
    `;

    // 按钮状态
    const doneBtn = document.getElementById('btn-done');
    if (isDone) {
      doneBtn.textContent = '✅ 已完成';
      doneBtn.classList.add('done');
    } else {
      doneBtn.textContent = '✅ 完成今日';
      doneBtn.classList.remove('done');
    }

    this._bindContentEvents();
  },

  _bindContentEvents() {
    const main = document.getElementById('main-content');

    main.querySelectorAll('.pattern-header').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('.pattern-play')) return;
        header.closest('.pattern-card').classList.toggle('expanded');
      });
    });

    main.querySelectorAll('.pattern-play').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        Voice.speak(btn.dataset.text);
      });
    });

    main.querySelectorAll('.example-play').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        Voice.speak(btn.dataset.text);
      });
    });

    main.querySelectorAll('.word-chip').forEach(chip => {
      chip.addEventListener('click', () => Voice.speak(chip.dataset.word));
    });
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
