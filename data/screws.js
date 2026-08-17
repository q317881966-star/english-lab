// English Lab — 螺丝包(功能词卡片)
// 螺丝 = 代词 / be动词 / 情态动词 / 助动词 / 介词等"骨架词"
// 策略:每天课程开头先认对应螺丝,其余在句子里遇到一颗拧一颗

const SCREWS = {
  "pronouns-subject": {
    name: "代词主格",
    note: "做主语的代词,后面直接接动词",
    items: [
      ["I", "我"], ["you", "你/你们"], ["he", "他"], ["she", "她"],
      ["it", "它"], ["we", "我们"], ["they", "他们/她们/它们"]
    ]
  },
  "be-verb": {
    name: "be 动词三兄弟",
    note: "am 配 I;is 配 he/she/it;are 配 you/we/they",
    items: [
      ["am", "用于 I: I am ..."], ["is", "用于 he/she/it: He is ..."],
      ["are", "用于 you/we/they: You are ..."]
    ]
  },
  "possessive": {
    name: "所有格",
    note: "表示\"谁的\",后面必须接名词",
    items: [
      ["my", "我的"], ["your", "你的/你们的"], ["his", "他的"],
      ["her", "她的"], ["our", "我们的"], ["their", "他们的"]
    ]
  },
  "can": {
    name: "情态动词 can",
    note: "can 后面永远接动词原形,表示\"能/可以\"",
    items: [
      ["can", "能/可以: I can speak English."],
      ["Can I ...?", "我能……吗?(礼貌请求)"]
    ]
  },
  "do-does": {
    name: "do / does",
    note: "构成疑问和否定;he/she/it 用 does",
    items: [
      ["Do you ...?", "你……吗?(一般疑问)"],
      ["Does he ...?", "他……吗?"],
      ["don't", "不(否定): I don't know."]
    ]
  },
  "prepositions": {
    name: "核心介词 in / on / at / to",
    note: "介词必须搭配名词记,不单独背",
    items: [
      ["in", "在里面/时间段: in the box / in the morning"],
      ["on", "在上面(接触): on the table"],
      ["at", "在小地点/时刻: at home / at 7 o'clock"],
      ["to", "朝向/去: go to the airport"]
    ]
  },
  "numbers": {
    name: "数字",
    note: "先记住 0-20 和整十,价格、时间都靠它们",
    items: [
      ["one ~ ten", "1~10"], ["eleven ~ twenty", "11~20"],
      ["thirty / forty / fifty", "30 / 40 / 50"], ["hundred", "百"], ["thousand", "千"]
    ]
  },
  "question-words": {
    name: "疑问词",
    note: "疑问词开头 = 特殊疑问句,问具体信息",
    items: [
      ["what", "什么"], ["where", "哪里"], ["when", "什么时候"],
      ["who", "谁"], ["how", "怎么/如何"], ["why", "为什么"]
    ]
  },
  "to": {
    name: "介词 to",
    note: "表示方向\"去往\",问路必备",
    items: [
      ["to", "去/到: get to the airport"],
      ["from", "从: come from China"]
    ]
  },
  "which": {
    name: "which",
    note: "在限定范围里选择\"哪一个\"",
    items: [
      ["which", "哪一个: Which bus ...?"],
      ["which one", "哪一个(件/个)"]
    ]
  },
  "would-like": {
    name: "would like",
    note: "比 want 更礼貌的\"想要\",口语高频",
    items: [
      ["I'd like ...", "我想要……(礼貌)"],
      ["Would you like ...?", "你想要……吗?(邀请)"]
    ]
  },
  "could": {
    name: "情态动词 could",
    note: "can 的礼貌版,请求时用它更客气",
    items: [
      ["Could I ...?", "我能……吗?(非常礼貌)"],
      ["Could you ...?", "你能……吗?(请求帮忙)"]
    ]
  },
  "please": {
    name: "please",
    note: "请求句末尾加 please,万能礼貌词",
    items: [
      ["please", "请: a coffee, please"],
      ["Thank you", "谢谢: Thank you very much."]
    ]
  },
  "try": {
    name: "try",
    note: "试穿/试试,购物必备",
    items: [
      ["try on", "试穿: try this on"],
      ["try", "尝试: try it"]
    ]
  },
  "pay": {
    name: "pay",
    note: "付款,出国必用",
    items: [
      ["pay by card", "刷卡"], ["pay by cash", "付现金"],
      ["pay by Alipay", "用支付宝付"], ["take", "接受(某种支付方式)"]
    ]
  },
  "time": {
    name: "time",
    note: "问时间/时刻: What time ...?",
    items: [
      ["What time ...?", "……几点?"],
      ["o'clock", "整点: at 7 o'clock"],
      ["late / early", "晚 / 早"]
    ]
  },
  "reservation": {
    name: "reservation",
    note: "预订(餐厅/酒店/车),名词",
    items: [
      ["reservation", "预订: make a reservation"],
      ["book", "预订(动词): book a room"],
      ["table for two", "两人桌"]
    ]
  },
  "help": {
    name: "help",
    note: "求助万能词,大声说 I need help!",
    items: [
      ["help", "帮助: Can you help me?"],
      ["lost", "迷路的: I'm lost."],
      ["I need help.", "我需要帮助。"]
    ]
  },
  "health": {
    name: "health 健康",
    note: "描述身体不舒服",
    items: [
      ["feel", "感觉: I don't feel well."],
      ["headache", "头疼"], ["stomachache", "肚子疼"],
      ["medicine", "药"], ["doctor", "医生"]
    ]
  },
  "lost": {
    name: "lost 丢失",
    note: "I've lost ... = 我把……弄丢了",
    items: [
      ["lose / lost", "丢失 / 丢了"],
      ["passport", "护照"], ["wallet", "钱包"],
      ["report", "报案/报告"]
    ]
  },
  "call": {
    name: "call",
    note: "打电话/呼叫,紧急场景高频",
    items: [
      ["call", "打电话: call the police"],
      ["police", "警察"], ["embassy", "大使馆"],
      ["family", "家人"]
    ]
  }
};
