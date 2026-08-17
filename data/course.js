// English Lab — 第一个月课程(30天)
// 思路:句型为骨架(木板),功能词为螺丝,每天拼装一个核心句型
// 来源:patterns.js 现有句型(标注"库")+ studyPlan.js 24周计划 + 出国场景补充(标注"新")

const MONTH1_COURSE = [
  // ══════════════ 第一周 · 地基句(螺丝包 + 6 大句型) ══════════════
  {
    day: 1, phase: "第一周 · 地基句",
    title: "我是谁——自我介绍",
    screw: "pronouns-subject",
    pattern: {
      en: "I'm ____.",
      cn: "我是……",
      examples: [
        ["I'm a student.", "我是学生。"],
        ["I'm from China.", "我来自中国。"],
        ["I'm really happy today.", "我今天很开心。"],
        ["I'm sorry about that.", "那件事我很抱歉。"],
        ["I'm ready to go.", "我准备好了。"],
        ["I'm tired.", "我累了。"]
      ]
    }
  },
  {
    day: 2, phase: "第一周 · 地基句",
    title: "介绍身边的事物",
    screw: "be-verb",
    pattern: {
      en: "This is ____. / That is ____.",
      cn: "这是…… / 那是……",
      examples: [
        ["This is my friend Tom.", "这是我的朋友汤姆。"],
        ["This is my room.", "这是我的房间。"],
        ["That is a good idea.", "那是个好主意。"],
        ["This is the hotel.", "这就是那家酒店。"],
        ["That is my bag.", "那是我的包。"]
      ]
    }
  },
  {
    day: 3, phase: "第一周 · 地基句",
    title: "表达拥有",
    screw: "possessive",
    pattern: {
      en: "I have ____.",
      cn: "我有……",
      examples: [
        ["I have a reservation.", "我有预订。"],
        ["I have a question.", "我有个问题。"],
        ["I have a ticket.", "我有一张票。"],
        ["I have two brothers.", "我有两个兄弟。"],
        ["I have an idea.", "我有个主意。"]
      ]
    }
  },
  {
    day: 4, phase: "第一周 · 地基句",
    title: "礼貌请求",
    screw: "can",
    pattern: {
      en: "Can I ____?",
      cn: "我能……吗?",
      examples: [
        ["Can I help you?", "我能帮你吗?"],
        ["Can I have some water?", "我能要些水吗?"],
        ["Can I pay by card?", "我能刷卡吗?"],
        ["Can I ask a question?", "我能问个问题吗?"],
        ["Can I sit here?", "我能坐这儿吗?"]
      ]
    }
  },
  {
    day: 5, phase: "第一周 · 地基句",
    title: "询问对方有没有",
    screw: "do-does",
    pattern: {
      en: "Do you have ____?",
      cn: "你有……吗?",
      examples: [
        ["Do you have any questions?", "你有什么问题吗?"],
        ["Do you have a reservation?", "您有预订吗?"],
        ["Do you have time?", "你有时间吗?"],
        ["Do you have a menu?", "你们有菜单吗?"],
        ["Do you have a pen?", "你有笔吗?"]
      ]
    }
  },
  {
    day: 6, phase: "第一周 · 地基句",
    title: "表达需要",
    screw: "prepositions",
    pattern: {
      en: "I need to ____.",
      cn: "我需要……",
      examples: [
        ["I need to call my mom.", "我需要给妈妈打电话。"],
        ["I need to get some sleep.", "我需要睡会儿觉。"],
        ["I need to buy some groceries.", "我需要买些日用品。"],
        ["I need to go to the airport.", "我需要去机场。"],
        ["I need to finish this.", "我需要完成这个。"]
      ]
    }
  },
  {
    day: 7, phase: "第一周 · 地基句",
    title: "周复习:6 个句型串成自我介绍",
    screw: "be-verb",
    pattern: null,
    review: true
  },

  // ══════════════ 第二周 · 出门篇(机场 / 交通 / 酒店) ══════════════
  {
    day: 8, phase: "第二周 · 出门篇",
    title: "问价格",
    screw: "numbers",
    pattern: {
      en: "How much is ____?",
      cn: "……多少钱?",
      examples: [
        ["How much is this?", "这个多少钱?"],
        ["How much is the ticket?", "票多少钱?"],
        ["How much is the room?", "房间多少钱?"],
        ["How much is the taxi?", "出租车多少钱?"],
        ["How much is the wifi?", "WiFi 多少钱?"]
      ]
    }
  },
  {
    day: 9, phase: "第二周 · 出门篇",
    title: "问位置",
    screw: "question-words",
    pattern: {
      en: "Where is ____?",
      cn: "……在哪里?",
      examples: [
        ["Where is the bathroom?", "洗手间在哪里?"],
        ["Where is the baggage claim?", "行李提取处在哪里?"],
        ["Where is the subway station?", "地铁站在哪里?"],
        ["Where is my phone?", "我的手机在哪里?"],
        ["Where is the exit?", "出口在哪里?"]
      ]
    }
  },
  {
    day: 10, phase: "第二周 · 出门篇",
    title: "问路",
    screw: "to",
    pattern: {
      en: "How do I get to ____?",
      cn: "去……怎么走?",
      examples: [
        ["How do I get to the airport?", "去机场怎么走?"],
        ["How do I get to the station?", "去车站怎么走?"],
        ["How do I get to the hotel?", "去酒店怎么走?"],
        ["How do I get to the city center?", "去市中心怎么走?"],
        ["How do I get to this address?", "去这个地址怎么走?"]
      ]
    }
  },
  {
    day: 11, phase: "第二周 · 出门篇",
    title: "坐公交",
    screw: "which",
    pattern: {
      en: "Which bus goes to ____?",
      cn: "哪路公交车去……?",
      examples: [
        ["Which bus goes to the airport?", "哪路公交车去机场?"],
        ["Which bus goes to downtown?", "哪路公交车去市中心?"],
        ["Which bus goes to the museum?", "哪路公交车去博物馆?"],
        ["Which train goes to the zoo?", "哪趟火车去动物园?"],
        ["Which bus goes to the hotel?", "哪路公交车去酒店?"]
      ]
    }
  },
  {
    day: 12, phase: "第二周 · 出门篇",
    title: "酒店入住",
    screw: "would-like",
    pattern: {
      en: "I'd like to check in.",
      cn: "我想办理入住。",
      examples: [
        ["I'd like to check in.", "我想办理入住。"],
        ["I have a reservation under Li Ming.", "我用李明的名字预订了。"],
        ["I'd like to check out.", "我想退房。"],
        ["I'd like a room with a view.", "我想要一间看得见风景的房间。"],
        ["I'd like a wake-up call.", "我想要叫醒服务。"]
      ]
    }
  },
  {
    day: 13, phase: "第二周 · 出门篇",
    title: "礼貌要东西",
    screw: "could",
    pattern: {
      en: "Could I have ____?",
      cn: "能给我……吗?",
      examples: [
        ["Could I have the bill?", "能把账单给我吗?"],
        ["Could I have some water?", "能给我些水吗?"],
        ["Could I have a receipt?", "能给我收据吗?"],
        ["Could I have a room key?", "能给我房卡吗?"],
        ["Could I have a taxi?", "能帮我叫辆出租车吗?"]
      ]
    }
  },
  {
    day: 14, phase: "第二周 · 出门篇",
    title: "周复习:机场 → 酒店全程模拟",
    screw: "question-words",
    pattern: null,
    review: true
  },

  // ══════════════ 第三周 · 生活篇(点餐 / 购物) ══════════════
  {
    day: 15, phase: "第三周 · 生活篇",
    title: "点餐(一):看菜单",
    screw: "would-like",
    pattern: {
      en: "Could I see the menu?",
      cn: "能给我看看菜单吗?",
      examples: [
        ["Could I see the menu?", "能给我看看菜单吗?"],
        ["Could I see the wine list?", "能给我看看酒水单吗?"],
        ["I'd like to order a coffee.", "我想点一杯咖啡。"],
        ["I'd like to order a steak.", "我想点一份牛排。"],
        ["What do you recommend?", "你推荐什么?"]
      ]
    }
  },
  {
    day: 16, phase: "第三周 · 生活篇",
    title: "点餐(二):点菜",
    screw: "please",
    pattern: {
      en: "I'd like ____, please.",
      cn: "我想要……,谢谢。",
      examples: [
        ["I'd like this one, please.", "我想要这个。"],
        ["I'd like a coffee, please.", "我想要杯咖啡。"],
        ["I'd like some water, please.", "我想要些水。"],
        ["I'd like the set meal, please.", "我想要套餐。"],
        ["I'd like a menu, please.", "我想要份菜单。"]
      ]
    }
  },
  {
    day: 17, phase: "第三周 · 生活篇",
    title: "购物:试穿与尺码",
    screw: "try",
    pattern: {
      en: "Can I try this on?",
      cn: "我能试穿这个吗?",
      examples: [
        ["Can I try this on?", "我能试穿这个吗?"],
        ["Do you have a bigger size?", "有大一号的吗?"],
        ["Do you have this in blue?", "这个有蓝色的吗?"],
        ["Do you have any discounts?", "有折扣吗?"],
        ["It's too big.", "太大了。"]
      ]
    }
  },
  {
    day: 18, phase: "第三周 · 生活篇",
    title: "付款",
    screw: "pay",
    pattern: {
      en: "Can I pay by ____?",
      cn: "我能用……付款吗?",
      examples: [
        ["Can I pay by card?", "我能刷卡吗?"],
        ["Can I pay by cash?", "我能付现金吗?"],
        ["Can I pay by credit card?", "我能用信用卡付吗?"],
        ["Do you take Alipay?", "你们接受支付宝吗?"],
        ["I'll pay by cash.", "我付现金。"]
      ]
    }
  },
  {
    day: 19, phase: "第三周 · 生活篇",
    title: "问时间",
    screw: "time",
    pattern: {
      en: "What time is ____?",
      cn: "……几点?",
      examples: [
        ["What time is breakfast?", "早餐几点?"],
        ["What time is check-out?", "几点退房?"],
        ["What time is the last train?", "最后一班火车几点?"],
        ["What time is check-in?", "几点入住?"],
        ["What time is the meeting?", "会议几点?"]
      ]
    }
  },
  {
    day: 20, phase: "第三周 · 生活篇",
    title: "预约",
    screw: "reservation",
    pattern: {
      en: "Can I make a reservation?",
      cn: "我能预订吗?",
      examples: [
        ["Can I make a reservation?", "我能预订吗?"],
        ["I'd like a table for two.", "我想要两人桌。"],
        ["I'd like a room for tonight.", "我想要今晚的房间。"],
        ["I'd like a taxi for tomorrow morning.", "我想订明早的出租车。"],
        ["Are you free on Friday?", "你周五有空吗?"]
      ]
    }
  },
  {
    day: 21, phase: "第三周 · 生活篇",
    title: "周复习:点餐 → 购物全程模拟",
    screw: "pay",
    pattern: null,
    review: true
  },

  // ══════════════ 第四周 · 应急 + 综合 ══════════════
  {
    day: 22, phase: "第四周 · 应急 + 综合",
    title: "求助与迷路",
    screw: "help",
    pattern: {
      en: "I'm lost. Can you help me?",
      cn: "我迷路了,能帮我吗?",
      examples: [
        ["I'm lost. Can you help me?", "我迷路了,能帮我吗?"],
        ["Can you help me find this address?", "能帮我找到这个地址吗?"],
        ["Where is the nearest hospital?", "最近的医院在哪?"],
        ["Can you show me on the map?", "能在地图上指给我看吗?"],
        ["Is it far from here?", "离这里远吗?"]
      ]
    }
  },
  {
    day: 23, phase: "第四周 · 应急 + 综合",
    title: "看病买药",
    screw: "health",
    pattern: {
      en: "I don't feel well.",
      cn: "我感觉不舒服。",
      examples: [
        ["I don't feel well.", "我感觉不舒服。"],
        ["I have a headache.", "我头疼。"],
        ["I need to see a doctor.", "我需要看医生。"],
        ["Where is the pharmacy?", "药房在哪里?"],
        ["I need some medicine.", "我需要一些药。"]
      ]
    }
  },
  {
    day: 24, phase: "第四周 · 应急 + 综合",
    title: "东西丢了",
    screw: "lost",
    pattern: {
      en: "I've lost my ____.",
      cn: "我把……弄丢了。",
      examples: [
        ["I've lost my passport.", "我的护照丢了。"],
        ["I've lost my wallet.", "我的钱包丢了。"],
        ["I've lost my phone.", "我的手机丢了。"],
        ["I've lost my keys.", "我的钥匙丢了。"],
        ["I need to report it.", "我需要报案。"]
      ]
    }
  },
  {
    day: 25, phase: "第四周 · 应急 + 综合",
    title: "紧急求助电话",
    screw: "call",
    pattern: {
      en: "I need to call ____.",
      cn: "我需要给……打电话。",
      examples: [
        ["I need to call the police.", "我需要报警。"],
        ["I need to call the embassy.", "我需要给大使馆打电话。"],
        ["I need to call my family.", "我需要给家人打电话。"],
        ["I need to call a doctor.", "我需要叫医生。"],
        ["Can you help me call a taxi?", "能帮我叫辆出租车吗?"]
      ]
    }
  },
  {
    day: 26, phase: "第四周 · 应急 + 综合",
    title: "综合模拟(一):入境 → 交通 → 酒店",
    screw: "question-words",
    pattern: null,
    review: true
  },
  {
    day: 27, phase: "第四周 · 应急 + 综合",
    title: "综合模拟(二):点餐 → 购物 → 求助",
    screw: "help",
    pattern: null,
    review: true
  },
  {
    day: 28, phase: "第四周 · 应急 + 综合",
    title: "总复习:30 天句型随机抽测",
    screw: "be-verb",
    pattern: null,
    review: true
  },
  {
    day: 29, phase: "弹性补漏日",
    title: "查漏补缺(一)",
    screw: null,
    pattern: null,
    review: true
  },
  {
    day: 30, phase: "弹性补漏日",
    title: "查漏补缺(二)",
    screw: null,
    pattern: null,
    review: true
  }
];
