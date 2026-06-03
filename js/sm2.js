// SM-2 间隔重复算法
// 参考: P.A.Wozniak, "Optimization of learning" (1990)

const SM2 = {
  // 质量评分 → 下次复习间隔
  // quality: 0-5 (0=完全忘记, 3=模糊想起, 5=轻松记起)
  calculate(card, quality) {
    const c = { ...card };

    if (quality >= 3) {
      // 正确：按间隔递增
      if (c.repetitions === 0) {
        c.interval = 1;
      } else if (c.repetitions === 1) {
        c.interval = 6;
      } else {
        c.interval = Math.round(c.interval * c.easiness);
      }
      c.repetitions += 1;
      c.streak += 1;
      c.wrongStreak = 0;
      c.totalCorrect += 1;
    } else {
      // 错误：重置
      c.repetitions = 0;
      c.interval = 1;
      c.streak = 0;
      c.wrongStreak += 1;
    }

    // 更新简易度因子
    c.easiness = c.easiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (c.easiness < 1.3) c.easiness = 1.3;

    // 计算下次复习日期
    const next = new Date();
    next.setDate(next.getDate() + c.interval);
    next.setHours(0, 0, 0, 0);
    c.nextReview = next.toISOString();
    c.lastReview = new Date().toISOString();
    c.totalReviews += 1;

    return c;
  },

  // 判断是否需要复习（仅限学过的卡片）
  isDue(card) {
    if (!card.nextReview) return false;
    return new Date(card.nextReview) <= new Date();
  },

  // 获取今天到期的卡片
  getDueCards(cards) {
    return cards.filter(c => this.isDue(c));
  },

  // 获取今天的新卡片（还没学过的）
  getNewCards(cards, limit = 10) {
    return cards
      .filter(c => !c.nextReview)
      .slice(0, limit);
  },

  // 获取"烫手"卡片（连续错3次以上）
  getHotCards(cards) {
    return cards.filter(c => c.wrongStreak >= 3);
  },
};
