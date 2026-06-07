// localStorage 数据持久化

const Storage = {
  KEYS: {
    VOCABULARY: 'elab_vocabulary',
    SETTINGS: 'elab_settings',
    STATS: 'elab_stats',
    CHECKIN: 'elab_checkin',
    STUDY_PROGRESS: 'elab_study_progress',
  },

  // === 词汇数据 ===
  getVocabulary() {
    const raw = localStorage.getItem(this.KEYS.VOCABULARY);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* corrupt data, reset */ }
    }
    // 首次初始化
    const fresh = initVocabularyState();
    this.saveVocabulary(fresh);
    return fresh;
  },

  saveVocabulary(data) {
    localStorage.setItem(this.KEYS.VOCABULARY, JSON.stringify(data));
  },

  // === 设置 ===
  getSettings() {
    const raw = localStorage.getItem(this.KEYS.SETTINGS);
    const defaults = {
      dailyNewWords: 10,
      voiceSpeed: 0.75,
      voicePitch: 1.0,
      autoPlay: true,
      ttsEngine: 'edge',
      ttsVoice_edge: 'en-US-JennyNeural',
      ttsVoice_google: 'en-US-Wavenet-A',
      ttsVoice_openai: 'nova',
      googleApiKey: '',
      openaiApiKey: '',
      openaiModel: 'tts-1',
    };
    if (raw) {
      try { return { ...defaults, ...JSON.parse(raw) }; } catch (e) { /* fall through */ }
    }
    this.saveSettings(defaults);
    return defaults;
  },

  saveSettings(data) {
    localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(data));
  },

  // === 学习统计 ===
  getStats() {
    const raw = localStorage.getItem(this.KEYS.STATS);
    const defaults = {
      totalLearned: 0,
      totalReviews: 0,
      streakDays: 0,
      lastStudyDate: null,
      dailyHistory: {}, // { '2024-01-01': { newWords: 5, reviews: 20 } }
    };
    if (raw) {
      try { return { ...defaults, ...JSON.parse(raw) }; } catch (e) { /* fall through */ }
    }
    this.saveStats(defaults);
    return defaults;
  },

  saveStats(data) {
    localStorage.setItem(this.KEYS.STATS, JSON.stringify(data));
  },

  // 记录今日学习
  recordStudy(newWordsCount, reviewsCount) {
    const stats = this.getStats();
    const today = new Date().toISOString().split('T')[0];

    // 打卡逻辑
    if (stats.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      if (stats.lastStudyDate === yesterdayStr) {
        stats.streakDays += 1;
      } else if (stats.lastStudyDate !== today) {
        stats.streakDays = 1;
      }
      stats.lastStudyDate = today;
    }

    stats.totalLearned += newWordsCount;
    stats.totalReviews += reviewsCount;

    if (!stats.dailyHistory[today]) {
      stats.dailyHistory[today] = { newWords: 0, reviews: 0 };
    }
    stats.dailyHistory[today].newWords += newWordsCount;
    stats.dailyHistory[today].reviews += reviewsCount;

    this.saveStats(stats);
    return stats;
  },

  // === 学习计划进度 ===
  getStudyProgress() {
    const raw = localStorage.getItem(this.KEYS.STUDY_PROGRESS);
    const defaults = { currentWeek: 1, currentDay: 1, completedDays: [] };
    if (raw) {
      try { return { ...defaults, ...JSON.parse(raw) }; } catch (e) { /* fall through */ }
    }
    this.saveStudyProgress(defaults);
    return defaults;
  },

  saveStudyProgress(data) {
    localStorage.setItem(this.KEYS.STUDY_PROGRESS, JSON.stringify(data));
  },

  markDayComplete(week, day) {
    const progress = this.getStudyProgress();
    const today = new Date().toISOString().split('T')[0];
    if (!progress.completedDays.includes(today)) {
      progress.completedDays.push(today);
    }
    // 自动推进到第二天
    if (week === progress.currentWeek && day === progress.currentDay) {
      const plan = typeof STUDY_PLAN !== 'undefined' ? STUDY_PLAN : [];
      const currentWeekData = plan.find(w => w.week === progress.currentWeek);
      if (currentWeekData) {
        if (progress.currentDay < currentWeekData.days.length) {
          progress.currentDay += 1;
        } else if (progress.currentWeek < plan.length) {
          progress.currentWeek += 1;
          progress.currentDay = 1;
        }
      }
    }
    this.saveStudyProgress(progress);
    this.checkinToday();
    return progress;
  },

  // 任务完成追踪 { "1-1": ["morning","noon","afternoon"] }
  getTaskProgress() {
    const raw = localStorage.getItem('elab_task_progress');
    return raw ? JSON.parse(raw) : {};
  },
  toggleTask(week, day, taskKey) {
    const tp = this.getTaskProgress();
    const id = `${week}-${day}`;
    if (!tp[id]) tp[id] = [];
    const idx = tp[id].indexOf(taskKey);
    if (idx >= 0) tp[id].splice(idx, 1);
    else tp[id].push(taskKey);
    localStorage.setItem('elab_task_progress', JSON.stringify(tp));
    return tp;
  },
  isTaskDone(week, day, taskKey) {
    const tp = this.getTaskProgress();
    const id = `${week}-${day}`;
    return tp[id] ? tp[id].includes(taskKey) : false;
  },

  // === 打卡数据 ===
  getCheckins() {
    const raw = localStorage.getItem(this.KEYS.CHECKIN);
    return raw ? JSON.parse(raw) : [];
  },

  checkinToday() {
    const today = new Date().toISOString().split('T')[0];
    const checkins = this.getCheckins();
    if (!checkins.includes(today)) {
      checkins.push(today);
      localStorage.setItem(this.KEYS.CHECKIN, JSON.stringify(checkins));
    }
    return checkins;
  },

  // === 数据导入导出 ===
  exportData() {
    return {
      vocabulary: this.getVocabulary(),
      settings: this.getSettings(),
      stats: this.getStats(),
      checkins: this.getCheckins(),
      exportedAt: new Date().toISOString(),
      version: 1,
    };
  },

  importData(json) {
    try {
      const data = typeof json === 'string' ? JSON.parse(json) : json;
      if (!data.version) throw new Error('Invalid backup file');
      if (data.vocabulary) this.saveVocabulary(data.vocabulary);
      if (data.settings) this.saveSettings(data.settings);
      if (data.stats) this.saveStats(data.stats);
      if (data.checkins) localStorage.setItem(this.KEYS.CHECKIN, JSON.stringify(data.checkins));
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  },

  // === 重置所有数据 ===
  resetAll() {
    Object.values(this.KEYS).forEach(k => localStorage.removeItem(k));
  },
};
