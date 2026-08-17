// English Lab — 本地进度存储
// 数据存在手机/电脑浏览器本地,支持导出/导入文件用于跨设备同步

const Store = {
  KEY: 'english-lab-progress-v1',

  // 默认状态
  _default() {
    return {
      version: 1,
      startDate: null,          // 开始学习日期(YYYY-MM-DD)
      currentDay: 1,            // 当前进行到第几天(1-30)
      lastCompletedDate: null,  // 最近一次完成当日课程的时间戳
      streak: 0,                // 连续打卡天数
      daysDone: {},             // { 'YYYY-MM-DD': { day, wrongIds: [] } }
      patterns: {},             // 句型掌握状态
      weakList: []              // 弱项句 id 列表
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return this._default();
      const data = JSON.parse(raw);
      return Object.assign(this._default(), data);
    } catch (e) {
      return this._default();
    }
  },

  save(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('进度保存失败', e);
    }
  },

  today() {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  },

  // 导出进度为 JSON 文件
  export() {
    const data = this.load();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'english-lab-progress-' + this.today() + '.json';
    a.click();
    URL.revokeObjectURL(url);
  },

  // 导入进度文件
  importFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          if (!data || typeof data !== 'object' || !data.currentDay) {
            reject(new Error('文件格式不对'));
            return;
          }
          this.save(data);
          resolve(data);
        } catch (e) {
          reject(e);
        }
      };
      reader.onerror = () => reject(new Error('读取失败'));
      reader.readAsText(file);
    });
  }
};
