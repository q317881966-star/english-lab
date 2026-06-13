// English Lab — 24周学习计划（句型优先 + 单词填入）
// 共 168 天 · 覆盖约 300 句型 + 2000 单词
// 方法论：句型为骨架，单词为砖瓦，每日 3 模块（精学 + 输入 + 实战）

const STUDY_PLAN = [
  // ═══════════════════════════════════════════════
  // 第 1 周：自我介绍与基础社交
  // ═══════════════════════════════════════════════
  {
    week: 1, theme: "自我介绍与基础社交",
    days: [
      {
        day: 1, title: "介绍自己的名字与身份",
        patterns: [{"en": "I am ...", "cn": "我是……"}, {"en": "My name is ...", "cn": "我的名字是……"}, {"en": "I am from ...", "cn": "我来自……"}],
        words: [{"en": "I", "cn": "我"}, {"en": "am", "cn": "是"}, {"en": "my", "cn": "我的"}, {"en": "name", "cn": "名字"}, {"en": "from", "cn": "来自"}, {"en": "China", "cn": "中国"}, {"en": "teacher", "cn": "老师"}, {"en": "student", "cn": "学生"}, {"en": "friend", "cn": "朋友"}, {"en": "and", "cn": "和/并且"}],
        tasks: {"morning": "铁柱带你朗读 I am Li Ming. My name is Li Ming. I am from China. I am a student. 然后铁柱用 Are you...? 问，你用 I am... 回答。", "noon": "让铁柱用这 10 个词编一个 30 秒的极短自我介绍故事，听读 5 遍。", "afternoon": "和铁柱模拟'初次见面'场景，全程只用 I am... / My name is... 交流，逼自己介绍名字、家乡、身份。"}
      },
      {
        day: 2, title: "介绍身边的人",
        patterns: [{"en": "This is ...", "cn": "这是……"}, {"en": "He/She is ...", "cn": "他/她是……"}, {"en": "He/She is my ...", "cn": "他/她是我的……"}],
        words: [{"en": "this", "cn": "这"}, {"en": "he", "cn": "他"}, {"en": "she", "cn": "她"}, {"en": "my", "cn": "我的"}, {"en": "brother", "cn": "兄弟"}, {"en": "sister", "cn": "姐妹"}, {"en": "mother", "cn": "母亲"}, {"en": "father", "cn": "父亲"}, {"en": "friend", "cn": "朋友"}, {"en": "teacher", "cn": "老师"}, {"en": "good", "cn": "好的"}, {"en": "nice", "cn": "好的/友善的"}],
        tasks: {"morning": "指着家人照片练习 This is my father. He is a teacher. 让铁柱问 Who is this?，你用 This is... 回答。", "noon": "让铁柱生成故事《我的一家》，反复听读。", "afternoon": "模拟'向同事介绍家人'场景，用今天和昨天的句型组合介绍三个人。"}
      },
      {
        day: 3, title: "询问和表达事物名称",
        patterns: [{"en": "What is this?", "cn": "这是什么？"}, {"en": "It is ...", "cn": "它是……"}, {"en": "Is this ...?", "cn": "这是……吗？"}],
        words: [{"en": "what", "cn": "什么"}, {"en": "it", "cn": "它"}, {"en": "pen", "cn": "钢笔"}, {"en": "book", "cn": "书"}, {"en": "table", "cn": "桌子"}, {"en": "chair", "cn": "椅子"}, {"en": "phone", "cn": "手机"}, {"en": "computer", "cn": "电脑"}, {"en": "water", "cn": "水"}, {"en": "coffee", "cn": "咖啡"}, {"en": "tea", "cn": "茶"}, {"en": "cup", "cn": "杯子"}, {"en": "bag", "cn": "包"}, {"en": "key", "cn": "钥匙"}, {"en": "door", "cn": "门"}],
        tasks: {"morning": "拿着实物和铁柱玩'猜猜这是什么'。铁柱问 What is this?，你回答 It is a book. 然后你问他。", "noon": "让铁柱生成故事《我的书桌》，包含今天所有单词。", "afternoon": "在自己房间里漫步，每看到一样东西，就用 This is... / It is... 自言自语描述出来。"}
      },
      {
        day: 4, title: "表达需求与愿望",
        patterns: [{"en": "I want ...", "cn": "我想要……"}, {"en": "I would like ...", "cn": "我想要……(礼貌版)"}],
        words: [{"en": "want", "cn": "想要"}, {"en": "would", "cn": "愿意"}, {"en": "like", "cn": "喜欢/想要"}, {"en": "eat", "cn": "吃"}, {"en": "drink", "cn": "喝"}, {"en": "food", "cn": "食物"}, {"en": "rice", "cn": "米饭"}, {"en": "noodle", "cn": "面条"}, {"en": "meat", "cn": "肉"}, {"en": "vegetable", "cn": "蔬菜"}, {"en": "fruit", "cn": "水果"}, {"en": "apple", "cn": "苹果"}, {"en": "banana", "cn": "香蕉"}, {"en": "milk", "cn": "牛奶"}, {"en": "juice", "cn": "果汁"}],
        tasks: {"morning": "用 I want... 疯狂造句，必须是自己真心想吃的、想喝的。让铁柱扮演服务员，问你 What do you want?", "noon": "让铁柱生成模拟餐厅对话，反复跟读。", "afternoon": "模拟'在餐厅点餐'，铁柱当服务员，你完整地说出 I want some rice and a cup of juice."}
      },
      {
        day: 5, title: "表达喜欢与讨厌",
        patterns: [{"en": "I like ...", "cn": "我喜欢……"}, {"en": "I don't like ...", "cn": "我不喜欢……"}, {"en": "I like ... very much.", "cn": "我非常喜欢……"}],
        words: [{"en": "like", "cn": "喜欢"}, {"en": "don't", "cn": "不"}, {"en": "very", "cn": "非常"}, {"en": "music", "cn": "音乐"}, {"en": "sport", "cn": "运动"}, {"en": "book", "cn": "书"}, {"en": "movie", "cn": "电影"}, {"en": "weather", "cn": "天气"}, {"en": "rain", "cn": "雨"}, {"en": "sun", "cn": "太阳"}, {"en": "hot", "cn": "热的"}, {"en": "cold", "cn": "冷的"}, {"en": "dog", "cn": "狗"}, {"en": "cat", "cn": "猫"}, {"en": "but", "cn": "但是"}],
        tasks: {"morning": "对铁柱宣布你的各种喜好 I like music, but I don't like rain. 铁柱追问 Do you like...?，你快速用 I like / don't like 回答。", "noon": "听一首极简英文歌，让铁柱帮你搞懂所有歌词。", "afternoon": "和铁柱聊'你的爱好'，努力连续说出 3-5 个喜欢的和不喜欢的东西。"}
      },
      {
        day: 6, title: "大复习 + 街头生存挑战",
        patterns: [{"en": "本周全部句型轮换复习", "cn": "综合运用前 5 天所有句型"}],
        words: [{"en": "review", "cn": "复习"}, {"en": "practice", "cn": "练习"}, {"en": "question", "cn": "问题"}, {"en": "answer", "cn": "回答"}, {"en": "speak", "cn": "说"}, {"en": "listen", "cn": "听"}, {"en": "again", "cn": "再/又"}, {"en": "please", "cn": "请"}, {"en": "thank", "cn": "谢谢"}, {"en": "sorry", "cn": "对不起"}],
        tasks: {"morning": "让铁柱用本周所有句型和你进行一次随机快问快答，不许暂停，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的'机场入境'或'咖啡馆搭讪'模拟对话，反复读。", "afternoon": "AI 模拟生存挑战。指令：'铁柱，扮演伦敦机场海关人员，问我关于名字、从哪来、想做什么、喜欢什么等问题，语速慢，用简单句。'"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由复习", "cn": "选择本周最薄弱句型重点练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "enjoy", "cn": "享受"}, {"en": "learn", "cn": "学习"}, {"en": "fun", "cn": "乐趣"}, {"en": "song", "cn": "歌曲"}, {"en": "story", "cn": "故事"}, {"en": "easy", "cn": "容易的"}, {"en": "happy", "cn": "开心的"}, {"en": "today", "cn": "今天"}, {"en": "tomorrow", "cn": "明天"}],
        tasks: {"morning": "看一集带中英字幕的《小猪佩奇》，用铁柱搞懂三句你最想学的台词。", "noon": "只听英文儿歌，当作背景音乐，放松大脑。", "afternoon": "自由选择：复习本周任何你觉得还需要加强的内容，或者预习下周话题。"}
      }
    ]
  },

  // 第 2 周：家庭与人物描述
  {
    week: 2, theme: "家庭与人物描述",
    days: [
      {
        day: 1, title: "描述家人外貌",
        patterns: [{"en": "He/She is ...", "cn": "他/她是……"}, {"en": "He/She has ...", "cn": "他/她有……"}, {"en": "How old is ...?", "cn": "……多大了？"}],
        words: [{"en": "tall", "cn": "高的"}, {"en": "short", "cn": "矮的/短的"}, {"en": "young", "cn": "年轻的"}, {"en": "old", "cn": "老的/旧的"}, {"en": "beautiful", "cn": "美丽的"}, {"en": "handsome", "cn": "英俊的"}, {"en": "strong", "cn": "强壮的"}, {"en": "kind", "cn": "种类/善良"}, {"en": "funny", "cn": "有趣的"}, {"en": "smart", "cn": "聪明的"}, {"en": "hair", "cn": "头发"}, {"en": "eye", "cn": "眼睛"}, {"en": "face", "cn": "脸"}, {"en": "smile", "cn": "微笑"}, {"en": "glasses", "cn": "眼镜"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "谈论年龄与生日",
        patterns: [{"en": "How old are you?", "cn": "你多大了？"}, {"en": "I am ... years old.", "cn": "我……岁"}, {"en": "When is your birthday?", "cn": "你生日是什么时候？"}],
        words: [{"en": "year", "cn": "年"}, {"en": "old", "cn": "老的/旧的"}, {"en": "birthday", "cn": "生日"}, {"en": "age", "cn": "年龄"}, {"en": "number", "cn": "数字/号码"}, {"en": "month", "cn": "月"}, {"en": "January", "cn": "一月"}, {"en": "February", "cn": "二月"}, {"en": "March", "cn": "三月"}, {"en": "today", "cn": "今天"}, {"en": "happy", "cn": "开心的"}, {"en": "party", "cn": "派对/聚会"}, {"en": "cake", "cn": "蛋糕"}, {"en": "gift", "cn": "礼物"}, {"en": "card", "cn": "卡片"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "描述性格特征",
        patterns: [{"en": "He/She is very ...", "cn": "他/她非常……"}, {"en": "I think he/she is ...", "cn": "我认为他/她是……"}, {"en": "What is he/she like?", "cn": "他/她什么样？"}],
        words: [{"en": "kind", "cn": "种类/善良"}, {"en": "friendly", "cn": "友好的"}, {"en": "shy", "cn": "害羞的"}, {"en": "outgoing", "cn": "外向的"}, {"en": "lazy", "cn": "懒惰的"}, {"en": "hardworking", "cn": "勤奋的"}, {"en": "quiet", "cn": "安静的"}, {"en": "loud", "cn": "大声的"}, {"en": "serious", "cn": "严肃的"}, {"en": "funny", "cn": "有趣的"}, {"en": "honest", "cn": "诚实的"}, {"en": "brave", "cn": "勇敢的"}, {"en": "patient", "cn": "耐心的"}, {"en": "polite", "cn": "礼貌的"}, {"en": "rude", "cn": "粗鲁的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "家庭成员关系",
        patterns: [{"en": "There are ... people in my family.", "cn": "我家有……口人"}, {"en": "I have ... brother(s)/sister(s).", "cn": "我有……个兄弟/姐妹"}, {"en": "My ... is a ...", "cn": "我的……是……"}],
        words: [{"en": "family", "cn": "家庭"}, {"en": "people", "cn": "人们"}, {"en": "parent", "cn": "父母"}, {"en": "grandfather", "cn": "爷爷/外公"}, {"en": "grandmother", "cn": "奶奶/外婆"}, {"en": "uncle", "cn": "叔叔/舅舅"}, {"en": "aunt", "cn": "阿姨/姑姑"}, {"en": "cousin", "cn": "表/堂兄弟姐妹"}, {"en": "son", "cn": "儿子"}, {"en": "daughter", "cn": "女儿"}, {"en": "husband", "cn": "丈夫"}, {"en": "wife", "cn": "妻子"}, {"en": "child", "cn": "孩子"}, {"en": "baby", "cn": "婴儿"}, {"en": "live", "cn": "生活/居住"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "介绍家乡与国籍",
        patterns: [{"en": "I come from ...", "cn": "我来自……"}, {"en": "I was born in ...", "cn": "我出生在……"}, {"en": "I grew up in ...", "cn": "我在……长大"}],
        words: [{"en": "country", "cn": "国家"}, {"en": "city", "cn": "城市"}, {"en": "town", "cn": "城镇"}, {"en": "village", "cn": "村庄"}, {"en": "hometown", "cn": "家乡"}, {"en": "nationality", "cn": "国籍"}, {"en": "language", "cn": "语言"}, {"en": "speak", "cn": "说话"}, {"en": "culture", "cn": "文化"}, {"en": "food", "cn": "食物"}, {"en": "people", "cn": "人们"}, {"en": "famous", "cn": "著名的"}, {"en": "big", "cn": "大的"}, {"en": "small", "cn": "小的"}, {"en": "beautiful", "cn": "美丽的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 角色扮演",
        patterns: [{"en": "本周句型综合复习", "cn": "本周句型综合复习"}, {"en": "角色扮演: 向新邻居介绍全家", "cn": "角色扮演: 向新邻居介绍全家"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "describe", "cn": "描述"}, {"en": "family", "cn": "家庭"}, {"en": "photo", "cn": "照片"}, {"en": "album", "cn": "专辑"}, {"en": "remember", "cn": "记住"}, {"en": "practice", "cn": "练习"}, {"en": "introduce", "cn": "介绍"}, {"en": "neighbor", "cn": "邻居"}, {"en": "welcome", "cn": "欢迎"}, {"en": "house", "cn": "房子"}, {"en": "garden", "cn": "花园"}, {"en": "pet", "cn": "宠物"}, {"en": "together", "cn": "一起"}, {"en": "love", "cn": "爱"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "review", "cn": "复习/评价"}, {"en": "favorite", "cn": "最喜欢的"}, {"en": "word", "cn": "单词"}, {"en": "sentence", "cn": "句子"}, {"en": "remember", "cn": "记住"}, {"en": "forget", "cn": "忘记"}, {"en": "again", "cn": "再/又"}, {"en": "tomorrow", "cn": "明天"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 3 周：时间与日常生活
  {
    week: 3, theme: "时间与日常生活",
    days: [
      {
        day: 1, title: "询问和表达时间",
        patterns: [{"en": "What time is it?", "cn": "几点了？"}, {"en": "It's ... o'clock.", "cn": "……点了"}, {"en": "At ... (time) I ...", "cn": "在……(时间)我……"}],
        words: [{"en": "time", "cn": "时间"}, {"en": "clock", "cn": "时钟"}, {"en": "o'clock", "cn": "…点钟"}, {"en": "half", "cn": "一半"}, {"en": "quarter", "cn": "四分之一/一刻钟/季度"}, {"en": "minute", "cn": "分钟"}, {"en": "hour", "cn": "小时"}, {"en": "morning", "cn": "早上"}, {"en": "afternoon", "cn": "下午"}, {"en": "evening", "cn": "晚上"}, {"en": "night", "cn": "夜晚"}, {"en": "early", "cn": "早的"}, {"en": "late", "cn": "晚的"}, {"en": "now", "cn": "现在"}, {"en": "then", "cn": "然后/那时"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "描述每日行程",
        patterns: [{"en": "I get up at ...", "cn": "我……点起床"}, {"en": "I go to ... at ...", "cn": "我……点去……"}, {"en": "Every day I ...", "cn": "我每天……"}],
        words: [{"en": "get up", "cn": "起床"}, {"en": "wake", "cn": "醒来/叫醒"}, {"en": "wash", "cn": "洗"}, {"en": "brush", "cn": "刷子/刷"}, {"en": "teeth", "cn": "牙齿(复数)"}, {"en": "breakfast", "cn": "早餐"}, {"en": "lunch", "cn": "午餐"}, {"en": "dinner", "cn": "晚餐"}, {"en": "work", "cn": "工作"}, {"en": "home", "cn": "家"}, {"en": "bed", "cn": "床"}, {"en": "sleep", "cn": "睡觉"}, {"en": "every", "cn": "每个"}, {"en": "daily", "cn": "每日的"}, {"en": "routine", "cn": "日常"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "星期与日期",
        patterns: [{"en": "What day is today?", "cn": "今天星期几？"}, {"en": "Today is ...", "cn": "今天是……"}, {"en": "I have ... on ...", "cn": "我……有……"}],
        words: [{"en": "Monday", "cn": "星期一"}, {"en": "Tuesday", "cn": "星期二"}, {"en": "Wednesday", "cn": "星期三"}, {"en": "Thursday", "cn": "星期四"}, {"en": "Friday", "cn": "星期五"}, {"en": "Saturday", "cn": "星期六"}, {"en": "Sunday", "cn": "星期日"}, {"en": "week", "cn": "周"}, {"en": "weekend", "cn": "周末"}, {"en": "today", "cn": "今天"}, {"en": "yesterday", "cn": "昨天"}, {"en": "tomorrow", "cn": "明天"}, {"en": "date", "cn": "日期"}, {"en": "calendar", "cn": "日历"}, {"en": "busy", "cn": "忙碌的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "频率副词表达",
        patterns: [{"en": "I always/usually/sometimes/never ...", "cn": "我总是/通常/有时/从不……"}, {"en": "How often do you ...?", "cn": "你多久……一次？"}, {"en": "Once/Twice a ...", "cn": "每……一次/两次"}],
        words: [{"en": "always", "cn": "总是"}, {"en": "usually", "cn": "通常"}, {"en": "often", "cn": "经常"}, {"en": "sometimes", "cn": "有时"}, {"en": "rarely", "cn": "很少"}, {"en": "never", "cn": "从不"}, {"en": "once", "cn": "一次"}, {"en": "twice", "cn": "两次"}, {"en": "every", "cn": "每个"}, {"en": "week", "cn": "周"}, {"en": "month", "cn": "月"}, {"en": "year", "cn": "年"}, {"en": "how often", "cn": "多久一次"}, {"en": "frequency", "cn": "频率"}, {"en": "habit", "cn": "习惯"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "描述正在做的事",
        patterns: [{"en": "I am ...ing ...", "cn": "我正在……"}, {"en": "What are you doing?", "cn": "你在做什么？"}, {"en": "Are you ...ing?", "cn": "你正在……吗？"}],
        words: [{"en": "doing", "cn": "做(进行时)"}, {"en": "reading", "cn": "阅读"}, {"en": "writing", "cn": "写作"}, {"en": "cooking", "cn": "烹饪"}, {"en": "watching", "cn": "看/观看"}, {"en": "listening", "cn": "听力/听着"}, {"en": "talking", "cn": "谈话"}, {"en": "walking", "cn": "散步"}, {"en": "running", "cn": "跑步/运行"}, {"en": "sitting", "cn": "坐着"}, {"en": "standing", "cn": "站着/常设的"}, {"en": "working", "cn": "工作中/运行中"}, {"en": "studying", "cn": "学习(进行时)"}, {"en": "playing", "cn": "玩/演奏"}, {"en": "waiting", "cn": "等待"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 我的一天演讲",
        patterns: [{"en": "用所有句型描述完整的一天", "cn": "用所有句型描述完整的一天"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "schedule", "cn": "日程"}, {"en": "diary", "cn": "日记"}, {"en": "plan", "cn": "计划"}, {"en": "morning", "cn": "早上"}, {"en": "noon", "cn": "中午"}, {"en": "night", "cn": "夜晚"}, {"en": "busy", "cn": "忙碌的"}, {"en": "free", "cn": "免费的/自由的"}, {"en": "important", "cn": "重要的"}, {"en": "finish", "cn": "完成"}, {"en": "start", "cn": "开始"}, {"en": "begin", "cn": "开始"}, {"en": "end", "cn": "结束"}, {"en": "daily", "cn": "每日的"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "rest", "cn": "休息/剩余"}, {"en": "fun", "cn": "有趣的"}, {"en": "movie", "cn": "电影"}, {"en": "music", "cn": "音乐"}, {"en": "song", "cn": "歌曲"}, {"en": "easy", "cn": "容易的"}, {"en": "try", "cn": "尝试"}, {"en": "best", "cn": "最好的"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 4 周：天气与季节
  {
    week: 4, theme: "天气与季节",
    days: [
      {
        day: 1, title: "询问和描述天气",
        patterns: [{"en": "What's the weather like?", "cn": "天气怎么样？"}, {"en": "It's ... today.", "cn": "今天……"}, {"en": "Is it ... outside?", "cn": "外面……吗？"}],
        words: [{"en": "weather", "cn": "天气"}, {"en": "sunny", "cn": "晴朗的"}, {"en": "cloudy", "cn": "多云的"}, {"en": "rainy", "cn": "下雨的"}, {"en": "windy", "cn": "有风的"}, {"en": "snowy", "cn": "下雪的"}, {"en": "hot", "cn": "热的/辣的"}, {"en": "cold", "cn": "冷的"}, {"en": "warm", "cn": "温暖的"}, {"en": "cool", "cn": "酷/凉"}, {"en": "outside", "cn": "在外面"}, {"en": "today", "cn": "今天"}, {"en": "forecast", "cn": "预报"}, {"en": "temperature", "cn": "温度"}, {"en": "degree", "cn": "度/学位"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "谈论季节",
        patterns: [{"en": "I like ... best.", "cn": "我最喜欢……"}, {"en": "In ..., it is usually ...", "cn": "在……，通常是……"}, {"en": "What's your favorite season?", "cn": "你最喜欢的季节是什么？"}],
        words: [{"en": "spring", "cn": "春天"}, {"en": "summer", "cn": "夏天"}, {"en": "autumn", "cn": "秋天"}, {"en": "winter", "cn": "冬天"}, {"en": "season", "cn": "季节"}, {"en": "favorite", "cn": "最喜欢的"}, {"en": "bloom", "cn": "开花"}, {"en": "hot", "cn": "热的/辣的"}, {"en": "cool", "cn": "酷/凉"}, {"en": "cold", "cn": "冷的"}, {"en": "warm", "cn": "温暖的"}, {"en": "leaves", "cn": "叶子/离开"}, {"en": "snow", "cn": "雪"}, {"en": "flower", "cn": "花"}, {"en": "holiday", "cn": "假日"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "讨论温度与体感",
        patterns: [{"en": "It feels ... today.", "cn": "今天感觉……"}, {"en": "The temperature is ... degrees.", "cn": "温度是……度"}, {"en": "It's too ... for me.", "cn": "对我来说太……了"}],
        words: [{"en": "feel", "cn": "感觉"}, {"en": "temperature", "cn": "温度"}, {"en": "high", "cn": "高的"}, {"en": "low", "cn": "低的"}, {"en": "degree", "cn": "度/学位"}, {"en": "freezing", "cn": "极冷的"}, {"en": "boiling", "cn": "沸腾的"}, {"en": "mild", "cn": "温和的"}, {"en": "humid", "cn": "潮湿的"}, {"en": "dry", "cn": "干的/擦干"}, {"en": "wet", "cn": "湿的"}, {"en": "windy", "cn": "有风的"}, {"en": "breeze", "cn": "微风"}, {"en": "comfortable", "cn": "舒服的"}, {"en": "terrible", "cn": "糟糕的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "天气与活动计划",
        patterns: [{"en": "If it's ..., I will ...", "cn": "如果……，我就……"}, {"en": "Let's ... when it's ...", "cn": "当……的时候，我们……吧"}, {"en": "It's a good day for ...", "cn": "是个……的好天气"}],
        words: [{"en": "plan", "cn": "计划"}, {"en": "outdoor", "cn": "户外的"}, {"en": "indoor", "cn": "室内的"}, {"en": "beach", "cn": "海滩"}, {"en": "park", "cn": "公园"}, {"en": "hiking", "cn": "徒步"}, {"en": "picnic", "cn": "野餐"}, {"en": "stay", "cn": "停留/保持"}, {"en": "umbrella", "cn": "雨伞"}, {"en": "coat", "cn": "外套"}, {"en": "jacket", "cn": "夹克"}, {"en": "hat", "cn": "帽子"}, {"en": "sunglasses", "cn": "太阳镜"}, {"en": "sunscreen", "cn": "防晒霜"}, {"en": "sweater", "cn": "毛衣"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "描述过去的天气",
        patterns: [{"en": "Yesterday it was ...", "cn": "昨天是……"}, {"en": "Last week was very ...", "cn": "上周非常……"}, {"en": "It rained/snowed ...", "cn": "下了雨/雪……"}],
        words: [{"en": "yesterday", "cn": "昨天"}, {"en": "last", "cn": "最后"}, {"en": "was", "cn": "是(过去)"}, {"en": "were", "cn": "是(过去)"}, {"en": "rained", "cn": "下过雨"}, {"en": "snowed", "cn": "下过雪"}, {"en": "shone", "cn": "闪耀(过去式)"}, {"en": "blew", "cn": "吹(过去式)"}, {"en": "storm", "cn": "暴风雨"}, {"en": "thunder", "cn": "雷声"}, {"en": "lightning", "cn": "闪电"}, {"en": "fog", "cn": "雾"}, {"en": "foggy", "cn": "有雾的"}, {"en": "icy", "cn": "结冰的"}, {"en": "slippery", "cn": "滑的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 天气预报员",
        patterns: [{"en": "模拟英语天气播报", "cn": "模拟英语天气播报"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "report", "cn": "报告"}, {"en": "forecast", "cn": "预报"}, {"en": "across", "cn": "穿过"}, {"en": "north", "cn": "北方"}, {"en": "south", "cn": "南方"}, {"en": "east", "cn": "东方"}, {"en": "west", "cn": "西方"}, {"en": "region", "cn": "地区"}, {"en": "area", "cn": "区域"}, {"en": "clear", "cn": "清楚的/清理"}, {"en": "change", "cn": "找零/改变"}, {"en": "stay", "cn": "停留/保持"}, {"en": "expect", "cn": "期望"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "outside", "cn": "在外面"}, {"en": "walk", "cn": "走/散步"}, {"en": "fresh", "cn": "新鲜的"}, {"en": "air", "cn": "空气"}, {"en": "nature", "cn": "大自然/本性"}, {"en": "beautiful", "cn": "美丽的"}, {"en": "peaceful", "cn": "平静的"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 5 周：食物与餐厅
  {
    week: 5, theme: "食物与餐厅",
    days: [
      {
        day: 1, title: "点餐与叫菜",
        patterns: [{"en": "I'd like to order ...", "cn": "我想点……"}, {"en": "Can I have ...?", "cn": "我可以要……吗？"}, {"en": "What do you recommend?", "cn": "你推荐什么？"}],
        words: [{"en": "order", "cn": "点餐/命令"}, {"en": "menu", "cn": "菜单"}, {"en": "waiter", "cn": "服务员"}, {"en": "waitress", "cn": "女服务员"}, {"en": "ready", "cn": "准备好的"}, {"en": "recommend", "cn": "推荐"}, {"en": "special", "cn": "特别的"}, {"en": "today's", "cn": "今天的"}, {"en": "appetizer", "cn": "开胃菜"}, {"en": "main course", "cn": "主菜"}, {"en": "dessert", "cn": "甜点"}, {"en": "drink", "cn": "喝/饮料"}, {"en": "bill", "cn": "账单"}, {"en": "check", "cn": "检查"}, {"en": "tip", "cn": "小费/提示"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "表达饮食偏好",
        patterns: [{"en": "I'm allergic to ...", "cn": "我对……过敏"}, {"en": "I don't eat ...", "cn": "我不吃……"}, {"en": "Is this ... free?", "cn": "这个……免费吗？"}],
        words: [{"en": "allergic", "cn": "过敏的"}, {"en": "vegetarian", "cn": "素食的"}, {"en": "vegan", "cn": "纯素食的"}, {"en": "gluten", "cn": "麸质"}, {"en": "dairy", "cn": "奶制品"}, {"en": "nut", "cn": "坚果/螺帽"}, {"en": "seafood", "cn": "海鲜"}, {"en": "spicy", "cn": "辣的"}, {"en": "salty", "cn": "咸的"}, {"en": "sweet", "cn": "甜的"}, {"en": "sour", "cn": "酸的"}, {"en": "bitter", "cn": "苦的"}, {"en": "taste", "cn": "尝起来/味道"}, {"en": "delicious", "cn": "美味的"}, {"en": "fresh", "cn": "新鲜的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "描述烹饪方法",
        patterns: [{"en": "How is this cooked?", "cn": "这个是怎么做的？"}, {"en": "It's ...ed.", "cn": "已经……了"}, {"en": "Is it fried or boiled?", "cn": "是炸的还是煮的？"}],
        words: [{"en": "cook", "cn": "烹饪"}, {"en": "fried", "cn": "炸的"}, {"en": "boiled", "cn": "煮的"}, {"en": "grilled", "cn": "烤的"}, {"en": "roasted", "cn": "烤的"}, {"en": "steamed", "cn": "蒸的"}, {"en": "baked", "cn": "烤的"}, {"en": "raw", "cn": "生的"}, {"en": "rare", "cn": "稀有的"}, {"en": "medium", "cn": "中号"}, {"en": "well-done", "cn": "全熟/做得好"}, {"en": "sauce", "cn": "酱汁"}, {"en": "oil", "cn": "油/石油"}, {"en": "salt", "cn": "盐"}, {"en": "pepper", "cn": "胡椒"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "在超市购物",
        patterns: [{"en": "Where can I find ...?", "cn": "我在哪里可以找到……？"}, {"en": "How much is ...?", "cn": "……多少钱？"}, {"en": "I need some ...", "cn": "我需要一些……"}],
        words: [{"en": "supermarket", "cn": "超市"}, {"en": "aisle", "cn": "过道"}, {"en": "section", "cn": "部分/区域"}, {"en": "produce", "cn": "生产/农产品"}, {"en": "dairy", "cn": "奶制品"}, {"en": "bakery", "cn": "面包店"}, {"en": "meat", "cn": "肉"}, {"en": "frozen", "cn": "冷冻的"}, {"en": "cart", "cn": "购物车"}, {"en": "basket", "cn": "篮子"}, {"en": "list", "cn": "列表"}, {"en": "price", "cn": "价格"}, {"en": "cheap", "cn": "便宜的"}, {"en": "expensive", "cn": "昂贵的"}, {"en": "discount", "cn": "折扣"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "餐桌对话",
        patterns: [{"en": "This tastes ...!", "cn": "这尝起来……！"}, {"en": "Could you pass the ...?", "cn": "能把……递过来吗？"}, {"en": "Help yourself to ...", "cn": "请随便吃/用……"}],
        words: [{"en": "pass", "cn": "通过"}, {"en": "salt", "cn": "盐"}, {"en": "pepper", "cn": "胡椒"}, {"en": "bowl", "cn": "碗"}, {"en": "plate", "cn": "盘子"}, {"en": "fork", "cn": "叉子"}, {"en": "knife", "cn": "刀"}, {"en": "spoon", "cn": "勺子"}, {"en": "napkin", "cn": "餐巾纸"}, {"en": "glass", "cn": "玻璃/杯子"}, {"en": "bottle", "cn": "瓶子"}, {"en": "pour", "cn": "倒"}, {"en": "cheers", "cn": "干杯/谢谢"}, {"en": "enjoy", "cn": "享受/喜欢"}, {"en": "meal", "cn": "一顿饭"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 模拟点餐",
        patterns: [{"en": "完整西餐厅场景对话", "cn": "完整西餐厅场景对话"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "restaurant", "cn": "餐厅"}, {"en": "reservation", "cn": "预订"}, {"en": "table", "cn": "桌子"}, {"en": "window", "cn": "窗户"}, {"en": "ready", "cn": "准备好的"}, {"en": "order", "cn": "点餐/命令"}, {"en": "enjoy", "cn": "享受/喜欢"}, {"en": "bill", "cn": "账单"}, {"en": "cash", "cn": "现金"}, {"en": "card", "cn": "卡片"}, {"en": "change", "cn": "找零/改变"}, {"en": "receipt", "cn": "收据"}, {"en": "service", "cn": "服务"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "cook", "cn": "烹饪"}, {"en": "recipe", "cn": "食谱"}, {"en": "try", "cn": "尝试"}, {"en": "new", "cn": "新的"}, {"en": "favorite", "cn": "最喜欢的"}, {"en": "share", "cn": "分享"}, {"en": "friend", "cn": "朋友"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 6 周：购物与金钱
  {
    week: 6, theme: "购物与金钱",
    days: [
      {
        day: 1, title: "询问价格",
        patterns: [{"en": "How much is this?", "cn": "这个多少钱？"}, {"en": "It's ... dollars.", "cn": "……美元"}, {"en": "That's too expensive.", "cn": "太贵了"}],
        words: [{"en": "price", "cn": "价格"}, {"en": "dollar", "cn": "美元"}, {"en": "cent", "cn": "分(货币)"}, {"en": "yuan", "cn": "元(人民币)"}, {"en": "euro", "cn": "欧元"}, {"en": "pound", "cn": "磅/英镑"}, {"en": "expensive", "cn": "昂贵的"}, {"en": "cheap", "cn": "便宜的"}, {"en": "cost", "cn": "花费"}, {"en": "pay", "cn": "支付"}, {"en": "buy", "cn": "买"}, {"en": "sell", "cn": "卖"}, {"en": "worth", "cn": "值得"}, {"en": "value", "cn": "价值"}, {"en": "afford", "cn": "负担得起"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "试穿与尺寸",
        patterns: [{"en": "Can I try this on?", "cn": "我可以试穿吗？"}, {"en": "What size do you wear?", "cn": "你穿什么尺码？"}, {"en": "It's too big/small.", "cn": "太大了/太小了"}],
        words: [{"en": "size", "cn": "尺码"}, {"en": "small", "cn": "小的"}, {"en": "medium", "cn": "中号"}, {"en": "large", "cn": "大的"}, {"en": "fit", "cn": "适合"}, {"en": "tight", "cn": "紧的"}, {"en": "loose", "cn": "松的"}, {"en": "try on", "cn": "试穿"}, {"en": "fitting room", "cn": "试衣间"}, {"en": "mirror", "cn": "镜子"}, {"en": "look", "cn": "看"}, {"en": "color", "cn": "颜色"}, {"en": "style", "cn": "风格"}, {"en": "design", "cn": "设计"}, {"en": "material", "cn": "材料/物质"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "讨价还价",
        patterns: [{"en": "Can you give me a discount?", "cn": "能给我打折吗？"}, {"en": "I'll take it for ...", "cn": "我买下它，……(价格/时间)"}, {"en": "What's your best price?", "cn": "你最低多少钱？"}],
        words: [{"en": "discount", "cn": "折扣"}, {"en": "sale", "cn": "销售/打折"}, {"en": "offer", "cn": "提供/优惠"}, {"en": "deal", "cn": "处理/交易"}, {"en": "bargain", "cn": "讨价还价/便宜货"}, {"en": "cash", "cn": "现金"}, {"en": "card", "cn": "卡片"}, {"en": "credit", "cn": "信用/学分"}, {"en": "receipt", "cn": "收据"}, {"en": "change", "cn": "找零/改变"}, {"en": "refund", "cn": "退款"}, {"en": "exchange", "cn": "交换/兑换"}, {"en": "return", "cn": "返回"}, {"en": "warranty", "cn": "保修"}, {"en": "guarantee", "cn": "保证"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "线上购物",
        patterns: [{"en": "I'm looking for ... on the website.", "cn": "我在网站上找……"}, {"en": "Add to cart.", "cn": "加入购物车"}, {"en": "How long is delivery?", "cn": "送货要多久？"}],
        words: [{"en": "online", "cn": "在线"}, {"en": "website", "cn": "网站"}, {"en": "app", "cn": "应用程序"}, {"en": "search", "cn": "搜索"}, {"en": "cart", "cn": "购物车"}, {"en": "checkout", "cn": "结账"}, {"en": "delivery", "cn": "送货"}, {"en": "shipping", "cn": "运输/快递"}, {"en": "tracking", "cn": "追踪"}, {"en": "order", "cn": "点餐/命令"}, {"en": "address", "cn": "地址"}, {"en": "payment", "cn": "付款"}, {"en": "confirm", "cn": "确认"}, {"en": "cancel", "cn": "取消"}, {"en": "review", "cn": "复习/评价"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "支付方式",
        patterns: [{"en": "Do you take ...?", "cn": "你接受……吗？/你带……吗？"}, {"en": "I'll pay by ...", "cn": "我将用……支付"}, {"en": "Can I pay in cash?", "cn": "可以用现金吗？"}],
        words: [{"en": "cash", "cn": "现金"}, {"en": "card", "cn": "卡片"}, {"en": "credit", "cn": "信用/学分"}, {"en": "debit", "cn": "借记"}, {"en": "mobile", "cn": "移动的/手机"}, {"en": "Alipay", "cn": "支付宝"}, {"en": "WeChat", "cn": "微信"}, {"en": "transfer", "cn": "转移/转车"}, {"en": "account", "cn": "账户/账号"}, {"en": "balance", "cn": "平衡/余额"}, {"en": "charge", "cn": "充电/收费"}, {"en": "fee", "cn": "费用"}, {"en": "interest", "cn": "兴趣/利息"}, {"en": "bank", "cn": "银行"}, {"en": "password", "cn": "密码"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 商场情景剧",
        patterns: [{"en": "完整购物对话角色扮演", "cn": "完整购物对话角色扮演"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "shop", "cn": "商店/购物"}, {"en": "store", "cn": "商店"}, {"en": "mall", "cn": "商场"}, {"en": "market", "cn": "市场"}, {"en": "customer", "cn": "顾客"}, {"en": "clerk", "cn": "职员/店员"}, {"en": "help", "cn": "帮助"}, {"en": "looking", "cn": "看起来/找"}, {"en": "interested", "cn": "感兴趣的"}, {"en": "decide", "cn": "决定"}, {"en": "choose", "cn": "选择"}, {"en": "wrap", "cn": "包装/包裹"}, {"en": "bag", "cn": "包/袋子"}, {"en": "thank", "cn": "谢谢"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "window", "cn": "窗户"}, {"en": "shopping", "cn": "购物"}, {"en": "browse", "cn": "浏览"}, {"en": "collection", "cn": "收藏/收集"}, {"en": "new", "cn": "新的"}, {"en": "latest", "cn": "最新的"}, {"en": "popular", "cn": "流行的"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 7 周：问路与交通
  {
    week: 7, theme: "问路与交通",
    days: [
      {
        day: 1, title: "问路基本句型",
        patterns: [{"en": "Excuse me, where is ...?", "cn": "打扰一下，……在哪里？"}, {"en": "How do I get to ...?", "cn": "去……怎么走？"}, {"en": "Is it far from here?", "cn": "离这里远吗？"}],
        words: [{"en": "excuse", "cn": "借口/原谅"}, {"en": "where", "cn": "哪里"}, {"en": "how", "cn": "怎样"}, {"en": "get to", "cn": "到达/开始"}, {"en": "far", "cn": "远的"}, {"en": "near", "cn": "在…附近"}, {"en": "close", "cn": "近的/关闭"}, {"en": "next to", "cn": "在…旁边"}, {"en": "opposite", "cn": "相反的"}, {"en": "between", "cn": "在…之间"}, {"en": "corner", "cn": "角落/拐角"}, {"en": "left", "cn": "左边"}, {"en": "right", "cn": "权利/正确的"}, {"en": "straight", "cn": "直的"}, {"en": "turn", "cn": "转向/变成"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "指路表达",
        patterns: [{"en": "Go straight ahead.", "cn": "一直往前走"}, {"en": "Turn left/right at ...", "cn": "在……左转/右转"}, {"en": "It's on your left.", "cn": "在你左边"}],
        words: [{"en": "go", "cn": "去"}, {"en": "straight", "cn": "直的"}, {"en": "ahead", "cn": "在前面"}, {"en": "turn", "cn": "转向/变成"}, {"en": "left", "cn": "左边"}, {"en": "right", "cn": "权利/正确的"}, {"en": "cross", "cn": "穿过"}, {"en": "street", "cn": "街道"}, {"en": "road", "cn": "路"}, {"en": "traffic light", "cn": "红绿灯"}, {"en": "intersection", "cn": "十字路口"}, {"en": "block", "cn": "街区/挡住"}, {"en": "sign", "cn": "标志/签名"}, {"en": "map", "cn": "地图"}, {"en": "landmark", "cn": "地标"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "乘坐公共交通",
        patterns: [{"en": "Which bus goes to ...?", "cn": "哪路公交去……？"}, {"en": "Where is the nearest ... station?", "cn": "最近的……站怎么走？"}, {"en": "How many stops?", "cn": "几站路？"}],
        words: [{"en": "bus", "cn": "公交车"}, {"en": "subway", "cn": "地铁"}, {"en": "metro", "cn": "地铁"}, {"en": "train", "cn": "火车"}, {"en": "station", "cn": "车站"}, {"en": "stop", "cn": "停止"}, {"en": "ticket", "cn": "票"}, {"en": "fare", "cn": "车费/票价"}, {"en": "card", "cn": "卡片"}, {"en": "line", "cn": "线/线路/排队"}, {"en": "transfer", "cn": "转移/转车"}, {"en": "platform", "cn": "平台"}, {"en": "exit", "cn": "退出"}, {"en": "entrance", "cn": "入口"}, {"en": "schedule", "cn": "日程"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "打车与订车",
        patterns: [{"en": "Take me to ..., please.", "cn": "请带我去……"}, {"en": "How long will it take?", "cn": "需要多长时间？"}, {"en": "Can you wait here?", "cn": "你能在这里等吗？"}],
        words: [{"en": "taxi", "cn": "出租车"}, {"en": "cab", "cn": "出租车"}, {"en": "driver", "cn": "司机"}, {"en": "address", "cn": "地址"}, {"en": "airport", "cn": "机场"}, {"en": "hotel", "cn": "酒店"}, {"en": "downtown", "cn": "市中心"}, {"en": "minute", "cn": "分钟"}, {"en": "kilometer", "cn": "公里"}, {"en": "mile", "cn": "英里"}, {"en": "meter", "cn": "米"}, {"en": "traffic", "cn": "交通"}, {"en": "jam", "cn": "果酱/堵塞"}, {"en": "fast", "cn": "快的"}, {"en": "safe", "cn": "安全的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "描述位置",
        patterns: [{"en": "It's near the ...", "cn": "它在……附近"}, {"en": "Across from ...", "cn": "在……对面"}, {"en": "Behind/In front of ...", "cn": "在……后面/前面"}],
        words: [{"en": "behind", "cn": "在…后面"}, {"en": "front", "cn": "前面"}, {"en": "beside", "cn": "在...旁边"}, {"en": "inside", "cn": "在里面"}, {"en": "outside", "cn": "在外面"}, {"en": "above", "cn": "在...上方"}, {"en": "below", "cn": "在...下面"}, {"en": "north", "cn": "北方"}, {"en": "south", "cn": "南方"}, {"en": "east", "cn": "东方"}, {"en": "west", "cn": "西方"}, {"en": "direction", "cn": "方向"}, {"en": "building", "cn": "建筑物"}, {"en": "floor", "cn": "地板"}, {"en": "room", "cn": "房间"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 城市探索",
        patterns: [{"en": "综合指路对话练习", "cn": "综合指路对话练习"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "city", "cn": "城市"}, {"en": "map", "cn": "地图"}, {"en": "tourist", "cn": "游客"}, {"en": "lost", "cn": "丢失的/迷路的"}, {"en": "help", "cn": "帮助"}, {"en": "direction", "cn": "方向"}, {"en": "place", "cn": "地方"}, {"en": "famous", "cn": "著名的"}, {"en": "museum", "cn": "博物馆"}, {"en": "park", "cn": "公园"}, {"en": "bank", "cn": "银行"}, {"en": "hospital", "cn": "医院"}, {"en": "police", "cn": "警察"}, {"en": "pharmacy", "cn": "药店"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "trip", "cn": "旅行/行程"}, {"en": "explore", "cn": "探索"}, {"en": "visit", "cn": "拜访/访问"}, {"en": "new", "cn": "新的"}, {"en": "place", "cn": "地方"}, {"en": "adventure", "cn": "冒险"}, {"en": "discover", "cn": "发现"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 8 周：打电话与预约
  {
    week: 8, theme: "打电话与预约",
    days: [
      {
        day: 1, title: "接打电话",
        patterns: [{"en": "Hello, this is ... speaking.", "cn": "你好，我是……"}, {"en": "Can I speak to ...?", "cn": "我能和……通话吗？"}, {"en": "I'll call you back.", "cn": "我回电话给你"}],
        words: [{"en": "hello", "cn": "你好"}, {"en": "speak", "cn": "说话"}, {"en": "call", "cn": "打电话/叫"}, {"en": "phone", "cn": "手机/电话"}, {"en": "number", "cn": "数字/号码"}, {"en": "dial", "cn": "拨号"}, {"en": "ring", "cn": "戒指/打电话"}, {"en": "answer", "cn": "回答"}, {"en": "message", "cn": "消息"}, {"en": "voicemail", "cn": "语音信箱"}, {"en": "text", "cn": "文字/发短信"}, {"en": "busy", "cn": "忙碌的"}, {"en": "line", "cn": "线/线路/排队"}, {"en": "hold", "cn": "拿着/举行"}, {"en": "hang up", "cn": "挂断电话"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "预约与安排",
        patterns: [{"en": "I'd like to make an appointment.", "cn": "我想预约"}, {"en": "Are you free on ...?", "cn": "你……有空吗？"}, {"en": "What time works for you?", "cn": "你什么时间方便？"}],
        words: [{"en": "appointment", "cn": "预约"}, {"en": "schedule", "cn": "日程"}, {"en": "free", "cn": "免费的/自由的"}, {"en": "busy", "cn": "忙碌的"}, {"en": "available", "cn": "可用的/有空的"}, {"en": "calendar", "cn": "日历"}, {"en": "book", "cn": "书"}, {"en": "confirm", "cn": "确认"}, {"en": "cancel", "cn": "取消"}, {"en": "reschedule", "cn": "改期"}, {"en": "morning", "cn": "早上"}, {"en": "afternoon", "cn": "下午"}, {"en": "date", "cn": "日期"}, {"en": "meeting", "cn": "会议"}, {"en": "visit", "cn": "拜访/访问"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "请假与告知",
        patterns: [{"en": "I can't come because ...", "cn": "我不能来，因为……"}, {"en": "I'm sorry, I need to ...", "cn": "抱歉，我需要……"}, {"en": "I'll be late for ...", "cn": "我……要迟到了"}],
        words: [{"en": "sorry", "cn": "对不起"}, {"en": "can't", "cn": "不能/不会"}, {"en": "because", "cn": "因为"}, {"en": "sick", "cn": "生病的"}, {"en": "emergency", "cn": "紧急情况"}, {"en": "late", "cn": "晚的"}, {"en": "absent", "cn": "缺席的"}, {"en": "reason", "cn": "原因"}, {"en": "explain", "cn": "解释"}, {"en": "understand", "cn": "理解"}, {"en": "problem", "cn": "问题"}, {"en": "worry", "cn": "担心"}, {"en": "okay", "cn": "还行"}, {"en": "fine", "cn": "好的/晴朗的"}, {"en": "alright", "cn": "好吧"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "邀请与回应",
        patterns: [{"en": "Would you like to ...?", "cn": "你想做……吗？"}, {"en": "I'd love to!", "cn": "我很乐意！"}, {"en": "Sorry, I have other plans.", "cn": "抱歉，我有其他安排了"}],
        words: [{"en": "invite", "cn": "邀请"}, {"en": "would", "cn": "会/愿意(过去/虚拟)"}, {"en": "love", "cn": "爱"}, {"en": "join", "cn": "加入"}, {"en": "come", "cn": "来"}, {"en": "party", "cn": "派对/聚会"}, {"en": "dinner", "cn": "晚餐"}, {"en": "movie", "cn": "电影"}, {"en": "concert", "cn": "音乐会"}, {"en": "together", "cn": "一起"}, {"en": "maybe", "cn": "也许"}, {"en": "another", "cn": "另一个"}, {"en": "time", "cn": "时间"}, {"en": "next", "cn": "下一个"}, {"en": "sounds", "cn": "听起来"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "留言与转达",
        patterns: [{"en": "Can I leave a message?", "cn": "我可以留言吗？"}, {"en": "Please tell him/her ...", "cn": "请告诉他/她……"}, {"en": "I'll let him/her know.", "cn": "我会告诉他/她的"}],
        words: [{"en": "message", "cn": "消息"}, {"en": "leave", "cn": "离开"}, {"en": "tell", "cn": "告诉"}, {"en": "let", "cn": "让"}, {"en": "know", "cn": "知道"}, {"en": "call back", "cn": "回电话"}, {"en": "urgent", "cn": "紧急的"}, {"en": "important", "cn": "重要的"}, {"en": "soon", "cn": "很快"}, {"en": "possible", "cn": "可能的"}, {"en": "reach", "cn": "到达/够到"}, {"en": "contact", "cn": "联系"}, {"en": "email", "cn": "电子邮件"}, {"en": "send", "cn": "发送"}, {"en": "receive", "cn": "收到"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 电话模拟",
        patterns: [{"en": "模拟各种电话场景", "cn": "模拟各种电话场景"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "roleplay", "cn": "角色扮演"}, {"en": "practice", "cn": "练习"}, {"en": "situation", "cn": "情况"}, {"en": "formal", "cn": "正式的"}, {"en": "informal", "cn": "非正式的"}, {"en": "polite", "cn": "礼貌的"}, {"en": "tone", "cn": "语气/语调"}, {"en": "clear", "cn": "清楚的/清理"}, {"en": "slowly", "cn": "慢慢地"}, {"en": "repeat", "cn": "重复"}, {"en": "spell", "cn": "拼写"}, {"en": "confirm", "cn": "确认"}, {"en": "thank", "cn": "谢谢"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "chat", "cn": "聊天"}, {"en": "talk", "cn": "谈话"}, {"en": "conversation", "cn": "对话"}, {"en": "practice", "cn": "练习"}, {"en": "confident", "cn": "自信的"}, {"en": "fluent", "cn": "流利的"}, {"en": "improve", "cn": "提高"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 9 周：健康与看病
  {
    week: 9, theme: "健康与看病",
    days: [
      {
        day: 1, title: "描述症状",
        patterns: [{"en": "I feel ...", "cn": "我感觉……"}, {"en": "I have a ...", "cn": "我有一个……"}, {"en": "My ... hurts.", "cn": "我的……疼"}],
        words: [{"en": "feel", "cn": "感觉"}, {"en": "hurt", "cn": "受伤/疼痛"}, {"en": "pain", "cn": "疼痛"}, {"en": "headache", "cn": "头痛"}, {"en": "stomach", "cn": "胃/肚子"}, {"en": "fever", "cn": "发烧"}, {"en": "cough", "cn": "咳嗽"}, {"en": "cold", "cn": "冷的"}, {"en": "flu", "cn": "流感"}, {"en": "sore", "cn": "酸痛的"}, {"en": "throat", "cn": "喉咙"}, {"en": "tired", "cn": "累的"}, {"en": "weak", "cn": "虚弱的"}, {"en": "dizzy", "cn": "头晕的"}, {"en": "nauseous", "cn": "恶心的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "看医生",
        patterns: [{"en": "What's wrong?", "cn": "怎么了？"}, {"en": "How long have you had this?", "cn": "你有这个多久了？"}, {"en": "I need to see a doctor.", "cn": "我需要看医生"}],
        words: [{"en": "doctor", "cn": "医生"}, {"en": "nurse", "cn": "护士"}, {"en": "hospital", "cn": "医院"}, {"en": "clinic", "cn": "诊所"}, {"en": "patient", "cn": "耐心的"}, {"en": "waiting", "cn": "等待"}, {"en": "room", "cn": "房间"}, {"en": "check", "cn": "检查"}, {"en": "examine", "cn": "检查"}, {"en": "temperature", "cn": "温度"}, {"en": "blood", "cn": "血液"}, {"en": "pressure", "cn": "压力"}, {"en": "test", "cn": "测试"}, {"en": "medicine", "cn": "药"}, {"en": "prescription", "cn": "处方"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "吃药与休息",
        patterns: [{"en": "Take this medicine ... times a day.", "cn": "这个药每天吃……次"}, {"en": "You should rest.", "cn": "你应该休息"}, {"en": "Drink plenty of water.", "cn": "多喝水"}],
        words: [{"en": "medicine", "cn": "药"}, {"en": "pill", "cn": "药片"}, {"en": "tablet", "cn": "平板电脑/药片"}, {"en": "dose", "cn": "剂量"}, {"en": "daily", "cn": "每日的"}, {"en": "before", "cn": "在…之前"}, {"en": "after", "cn": "在…之后"}, {"en": "meal", "cn": "一顿饭"}, {"en": "rest", "cn": "休息/剩余"}, {"en": "sleep", "cn": "睡觉"}, {"en": "water", "cn": "水"}, {"en": "plenty", "cn": "大量"}, {"en": "better", "cn": "更好"}, {"en": "soon", "cn": "很快"}, {"en": "recover", "cn": "恢复"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "健康建议",
        patterns: [{"en": "You should ...", "cn": "你应该……"}, {"en": "You shouldn't ...", "cn": "你不应该……"}, {"en": "It's important to ...", "cn": "……很重要"}],
        words: [{"en": "should", "cn": "应该"}, {"en": "shouldn't", "cn": "不应该"}, {"en": "exercise", "cn": "锻炼"}, {"en": "diet", "cn": "饮食"}, {"en": "healthy", "cn": "健康的"}, {"en": "vegetable", "cn": "蔬菜"}, {"en": "fruit", "cn": "水果"}, {"en": "sugar", "cn": "糖"}, {"en": "salt", "cn": "盐"}, {"en": "smoke", "cn": "吸烟/烟"}, {"en": "alcohol", "cn": "酒/酒精"}, {"en": "sleep", "cn": "睡觉"}, {"en": "enough", "cn": "足够的"}, {"en": "stress", "cn": "压力/强调"}, {"en": "relax", "cn": "放松"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "谈论健身与运动",
        patterns: [{"en": "I work out ... times a week.", "cn": "我每周锻炼……次"}, {"en": "I go jogging every ...", "cn": "我每……都去慢跑"}, {"en": "I like to stay fit.", "cn": "我喜欢保持健康"}],
        words: [{"en": "exercise", "cn": "锻炼"}, {"en": "workout", "cn": "锻炼"}, {"en": "gym", "cn": "健身房"}, {"en": "jogging", "cn": "慢跑"}, {"en": "running", "cn": "跑步/运行"}, {"en": "swimming", "cn": "游泳"}, {"en": "yoga", "cn": "瑜伽"}, {"en": "stretch", "cn": "拉伸/伸展"}, {"en": "weight", "cn": "重量"}, {"en": "muscle", "cn": "肌肉"}, {"en": "strong", "cn": "强壮的"}, {"en": "fit", "cn": "适合"}, {"en": "active", "cn": "活跃的"}, {"en": "energy", "cn": "能量"}, {"en": "habit", "cn": "习惯"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 就诊模拟",
        patterns: [{"en": "完整的看病对话", "cn": "完整的看病对话"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "symptom", "cn": "症状"}, {"en": "describe", "cn": "描述"}, {"en": "since", "cn": "自从/因为"}, {"en": "worse", "cn": "更差"}, {"en": "better", "cn": "更好"}, {"en": "allergy", "cn": "过敏"}, {"en": "insurance", "cn": "保险"}, {"en": "appointment", "cn": "预约"}, {"en": "emergency", "cn": "紧急情况"}, {"en": "ambulance", "cn": "救护车"}, {"en": "wait", "cn": "等待"}, {"en": "next", "cn": "下一个"}, {"en": "please", "cn": "请"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "walk", "cn": "走/散步"}, {"en": "fresh", "cn": "新鲜的"}, {"en": "air", "cn": "空气"}, {"en": "body", "cn": "身体"}, {"en": "mind", "cn": "介意/头脑"}, {"en": "healthy", "cn": "健康的"}, {"en": "happy", "cn": "开心的"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 10 周：工作与职业
  {
    week: 10, theme: "工作与职业",
    days: [
      {
        day: 1, title: "谈论职业",
        patterns: [{"en": "What do you do?", "cn": "你是做什么的？"}, {"en": "I'm a ...", "cn": "我是……"}, {"en": "I work for ...", "cn": "我在……工作"}],
        words: [{"en": "job", "cn": "工作/职位"}, {"en": "work", "cn": "工作"}, {"en": "company", "cn": "公司"}, {"en": "office", "cn": "办公室"}, {"en": "boss", "cn": "老板"}, {"en": "colleague", "cn": "同事"}, {"en": "client", "cn": "客户"}, {"en": "meeting", "cn": "会议"}, {"en": "project", "cn": "项目"}, {"en": "deadline", "cn": "截止日期"}, {"en": "report", "cn": "报告"}, {"en": "email", "cn": "电子邮件"}, {"en": "computer", "cn": "电脑"}, {"en": "desk", "cn": "书桌"}, {"en": "phone", "cn": "手机/电话"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "描述工作内容",
        patterns: [{"en": "I'm responsible for ...", "cn": "我负责……"}, {"en": "My job involves ...", "cn": "我的工作涉及……"}, {"en": "I work on ...", "cn": "我从事……/我在……上工作"}],
        words: [{"en": "responsible", "cn": "负责的"}, {"en": "manage", "cn": "管理/设法"}, {"en": "handle", "cn": "处理/把手"}, {"en": "create", "cn": "创造"}, {"en": "design", "cn": "设计"}, {"en": "sell", "cn": "卖"}, {"en": "teach", "cn": "教"}, {"en": "help", "cn": "帮助"}, {"en": "serve", "cn": "服务/上菜"}, {"en": "build", "cn": "建造"}, {"en": "write", "cn": "写"}, {"en": "check", "cn": "检查"}, {"en": "organize", "cn": "组织"}, {"en": "lead", "cn": "带领"}, {"en": "team", "cn": "团队"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "面试与求职",
        patterns: [{"en": "I studied ... at university.", "cn": "我在大学学的是……"}, {"en": "I have experience in ...", "cn": "我在……方面有经验"}, {"en": "Why do you want this job?", "cn": "你为什么想要这份工作？"}],
        words: [{"en": "interview", "cn": "面试"}, {"en": "resume", "cn": "简历"}, {"en": "experience", "cn": "经验/经历"}, {"en": "skill", "cn": "技能"}, {"en": "qualification", "cn": "资质/资格"}, {"en": "university", "cn": "大学"}, {"en": "degree", "cn": "度/学位"}, {"en": "major", "cn": "专业/主要的"}, {"en": "apply", "cn": "申请"}, {"en": "position", "cn": "位置/职位"}, {"en": "salary", "cn": "薪水"}, {"en": "full-time", "cn": "全职"}, {"en": "part-time", "cn": "兼职"}, {"en": "intern", "cn": "实习生"}, {"en": "hire", "cn": "雇佣"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "工作时间与假期",
        patterns: [{"en": "I work from ... to ...", "cn": "我从……工作到……"}, {"en": "I have ... days off.", "cn": "我有……天假"}, {"en": "I'm on vacation next week.", "cn": "我下周休假"}],
        words: [{"en": "schedule", "cn": "日程"}, {"en": "shift", "cn": "轮班/转变"}, {"en": "overtime", "cn": "加班"}, {"en": "break", "cn": "打破"}, {"en": "lunch", "cn": "午餐"}, {"en": "holiday", "cn": "假日"}, {"en": "vacation", "cn": "假期"}, {"en": "day off", "cn": "休息日"}, {"en": "sick leave", "cn": "病假"}, {"en": "busy", "cn": "忙碌的"}, {"en": "season", "cn": "季节"}, {"en": "relax", "cn": "放松"}, {"en": "travel", "cn": "旅行"}, {"en": "plan", "cn": "计划"}, {"en": "rest", "cn": "休息/剩余"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "商务邮件",
        patterns: [{"en": "I'm writing to ask about ...", "cn": "我写信是想问一下……"}, {"en": "Please find attached ...", "cn": "请查收附件……"}, {"en": "I look forward to hearing from you.", "cn": "期待收到你的回信"}],
        words: [{"en": "email", "cn": "电子邮件"}, {"en": "subject", "cn": "科目"}, {"en": "attach", "cn": "附件/附加"}, {"en": "file", "cn": "文件"}, {"en": "document", "cn": "文件"}, {"en": "reply", "cn": "回复"}, {"en": "forward", "cn": "向前/转发"}, {"en": "send", "cn": "发送"}, {"en": "receive", "cn": "收到"}, {"en": "confirm", "cn": "确认"}, {"en": "request", "cn": "请求"}, {"en": "inform", "cn": "通知"}, {"en": "update", "cn": "更新"}, {"en": "regard", "cn": "认为/关于"}, {"en": "sincerely", "cn": "真诚地"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 模拟面试",
        patterns: [{"en": "完整工作场景对话", "cn": "完整工作场景对话"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "career", "cn": "职业"}, {"en": "goal", "cn": "目标"}, {"en": "future", "cn": "未来"}, {"en": "promotion", "cn": "晋升/促销"}, {"en": "challenge", "cn": "挑战"}, {"en": "success", "cn": "成功"}, {"en": "learn", "cn": "学习"}, {"en": "grow", "cn": "成长/种植"}, {"en": "oppotunity", "cn": "机会"}, {"en": "network", "cn": "网络"}, {"en": "advice", "cn": "建议"}, {"en": "mentor", "cn": "导师"}, {"en": "training", "cn": "培训"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "balance", "cn": "平衡/余额"}, {"en": "life", "cn": "生活/生命"}, {"en": "hobby", "cn": "爱好"}, {"en": "family", "cn": "家庭"}, {"en": "friend", "cn": "朋友"}, {"en": "enjoy", "cn": "享受/喜欢"}, {"en": "weekend", "cn": "周末"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 11 周：学校与学习
  {
    week: 11, theme: "学校与学习",
    days: [
      {
        day: 1, title: "在学校",
        patterns: [{"en": "What subject do you study?", "cn": "你学什么专业？"}, {"en": "I'm good at ...", "cn": "我擅长……"}, {"en": "I need help with ...", "cn": "我在……上需要帮助"}],
        words: [{"en": "school", "cn": "学校"}, {"en": "class", "cn": "班级/课"}, {"en": "classroom", "cn": "教室"}, {"en": "student", "cn": "学生"}, {"en": "teacher", "cn": "老师"}, {"en": "subject", "cn": "科目"}, {"en": "math", "cn": "数学"}, {"en": "science", "cn": "科学"}, {"en": "history", "cn": "历史"}, {"en": "English", "cn": "英语"}, {"en": "Chinese", "cn": "中文/中国人"}, {"en": "art", "cn": "艺术"}, {"en": "music", "cn": "音乐"}, {"en": "PE", "cn": "体育课"}, {"en": "exam", "cn": "考试"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "课堂用语",
        patterns: [{"en": "How do you say ... in English?", "cn": "……用英语怎么说？"}, {"en": "Can you repeat that?", "cn": "你能重复一遍吗？"}, {"en": "I don't understand.", "cn": "我不明白"}],
        words: [{"en": "say", "cn": "说"}, {"en": "repeat", "cn": "重复"}, {"en": "understand", "cn": "理解"}, {"en": "mean", "cn": "意思是/刻薄的"}, {"en": "spell", "cn": "拼写"}, {"en": "pronounce", "cn": "发音"}, {"en": "explain", "cn": "解释"}, {"en": "question", "cn": "问题"}, {"en": "answer", "cn": "回答"}, {"en": "correct", "cn": "正确的"}, {"en": "wrong", "cn": "错误的"}, {"en": "example", "cn": "例子"}, {"en": "page", "cn": "页"}, {"en": "homework", "cn": "作业"}, {"en": "assignment", "cn": "作业/任务"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "学习习惯",
        patterns: [{"en": "I usually study at ...", "cn": "我通常在……学习"}, {"en": "I learn best by ...", "cn": "我通过……学得最好"}, {"en": "I need to practice more.", "cn": "我需要多练习"}],
        words: [{"en": "study", "cn": "学习/研究"}, {"en": "learn", "cn": "学习"}, {"en": "practice", "cn": "练习"}, {"en": "review", "cn": "复习/评价"}, {"en": "memorize", "cn": "记住"}, {"en": "note", "cn": "笔记/注意"}, {"en": "textbook", "cn": "教科书"}, {"en": "notebook", "cn": "笔记本"}, {"en": "dictionary", "cn": "字典"}, {"en": "online", "cn": "在线"}, {"en": "video", "cn": "视频"}, {"en": "audio", "cn": "音频"}, {"en": "read", "cn": "阅读"}, {"en": "write", "cn": "写"}, {"en": "speak", "cn": "说话"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "图书馆与借书",
        patterns: [{"en": "Where's the library?", "cn": "图书馆在哪？"}, {"en": "Can I borrow this book?", "cn": "我能借这本书吗？"}, {"en": "When is it due back?", "cn": "什么时候要还？"}],
        words: [{"en": "library", "cn": "图书馆"}, {"en": "book", "cn": "书"}, {"en": "borrow", "cn": "借入"}, {"en": "return", "cn": "返回"}, {"en": "due", "cn": "到期的/由于"}, {"en": "late", "cn": "晚的"}, {"en": "fine", "cn": "好的/晴朗的"}, {"en": "shelf", "cn": "架子"}, {"en": "section", "cn": "部分/区域"}, {"en": "quiet", "cn": "安静的"}, {"en": "read", "cn": "阅读"}, {"en": "magazine", "cn": "杂志"}, {"en": "newspaper", "cn": "报纸"}, {"en": "copy", "cn": "复制"}, {"en": "print", "cn": "打印"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "考试与成绩",
        patterns: [{"en": "The exam is on ...", "cn": "考试在……"}, {"en": "I passed/failed ...", "cn": "我通过了/没通过……"}, {"en": "What's your score?", "cn": "你得了多少分？"}],
        words: [{"en": "exam", "cn": "考试"}, {"en": "test", "cn": "测试"}, {"en": "quiz", "cn": "小测验"}, {"en": "pass", "cn": "通过"}, {"en": "fail", "cn": "失败"}, {"en": "score", "cn": "分数"}, {"en": "grade", "cn": "年级/成绩"}, {"en": "result", "cn": "结果"}, {"en": "prepare", "cn": "准备"}, {"en": "review", "cn": "复习/评价"}, {"en": "nervous", "cn": "紧张的"}, {"en": "confident", "cn": "自信的"}, {"en": "easy", "cn": "容易的"}, {"en": "difficult", "cn": "困难的"}, {"en": "important", "cn": "重要的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 模拟课堂",
        patterns: [{"en": "完整课堂场景对话", "cn": "完整课堂场景对话"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "education", "cn": "教育"}, {"en": "knowledge", "cn": "知识"}, {"en": "skill", "cn": "技能"}, {"en": "certificate", "cn": "证书"}, {"en": "diploma", "cn": "文凭"}, {"en": "graduation", "cn": "毕业"}, {"en": "continue", "cn": "继续"}, {"en": "improve", "cn": "提高"}, {"en": "mistake", "cn": "错误"}, {"en": "correct", "cn": "正确的"}, {"en": "try", "cn": "尝试"}, {"en": "again", "cn": "再/又"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "read", "cn": "阅读"}, {"en": "book", "cn": "书"}, {"en": "interesting", "cn": "有趣的"}, {"en": "topic", "cn": "话题"}, {"en": "curious", "cn": "好奇的"}, {"en": "explore", "cn": "探索"}, {"en": "discover", "cn": "发现"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 12 周：住房与家具
  {
    week: 12, theme: "住房与家具",
    days: [
      {
        day: 1, title: "描述家居",
        patterns: [{"en": "I live in a ...", "cn": "我住在一个……"}, {"en": "My house has ...", "cn": "我家有……"}, {"en": "There is/are ... in my room.", "cn": "我房间里有……"}],
        words: [{"en": "house", "cn": "房子"}, {"en": "apartment", "cn": "公寓"}, {"en": "flat", "cn": "平的/公寓"}, {"en": "room", "cn": "房间"}, {"en": "living room", "cn": "客厅"}, {"en": "bedroom", "cn": "卧室"}, {"en": "kitchen", "cn": "厨房"}, {"en": "bathroom", "cn": "浴室"}, {"en": "balcony", "cn": "阳台"}, {"en": "garden", "cn": "花园"}, {"en": "floor", "cn": "地板"}, {"en": "wall", "cn": "墙"}, {"en": "window", "cn": "窗户"}, {"en": "door", "cn": "门"}, {"en": "ceiling", "cn": "天花板"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "家具与物品位置",
        patterns: [{"en": "The ... is next to the ...", "cn": "……在……旁边"}, {"en": "Where should I put ...?", "cn": "我应该把……放哪？"}, {"en": "It belongs in the ...", "cn": "它应该放在……"}],
        words: [{"en": "sofa", "cn": "沙发"}, {"en": "table", "cn": "桌子"}, {"en": "chair", "cn": "椅子"}, {"en": "bed", "cn": "床"}, {"en": "desk", "cn": "书桌"}, {"en": "shelf", "cn": "架子"}, {"en": "cabinet", "cn": "柜子"}, {"en": "closet", "cn": "衣柜"}, {"en": "drawer", "cn": "抽屉"}, {"en": "lamp", "cn": "灯"}, {"en": "mirror", "cn": "镜子"}, {"en": "carpet", "cn": "地毯"}, {"en": "curtain", "cn": "窗帘"}, {"en": "pillow", "cn": "枕头"}, {"en": "blanket", "cn": "毯子"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "租房与买房",
        patterns: [{"en": "I'm looking for a place to rent.", "cn": "我在找房子租"}, {"en": "How much is the rent?", "cn": "房租多少？"}, {"en": "Is the deposit included?", "cn": "包含押金吗？"}],
        words: [{"en": "rent", "cn": "租金/租"}, {"en": "buy", "cn": "买"}, {"en": "deposit", "cn": "押金/存款"}, {"en": "lease", "cn": "租约"}, {"en": "contract", "cn": "合同"}, {"en": "landlord", "cn": "房东"}, {"en": "tenant", "cn": "租客"}, {"en": "roommate", "cn": "室友"}, {"en": "neighbor", "cn": "邻居"}, {"en": "price", "cn": "价格"}, {"en": "utilities", "cn": "水电费/公用事业"}, {"en": "furnished", "cn": "带家具的"}, {"en": "location", "cn": "位置"}, {"en": "quiet", "cn": "安静的"}, {"en": "safe", "cn": "安全的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "家务与清洁",
        patterns: [{"en": "I need to clean the ...", "cn": "我需要清理……"}, {"en": "Can you help me with ...?", "cn": "你能帮我……吗？"}, {"en": "Don't make a mess.", "cn": "别弄乱了"}],
        words: [{"en": "clean", "cn": "干净的/打扫"}, {"en": "wash", "cn": "洗"}, {"en": "sweep", "cn": "打扫"}, {"en": "mop", "cn": "拖把/拖地"}, {"en": "dust", "cn": "灰尘"}, {"en": "vacuum", "cn": "吸尘器/真空"}, {"en": "laundry", "cn": "洗衣"}, {"en": "iron", "cn": "熨斗/铁/熨"}, {"en": "fold", "cn": "折叠"}, {"en": "hang", "cn": "悬挂"}, {"en": "tidy", "cn": "整洁的"}, {"en": "mess", "cn": "混乱/脏乱"}, {"en": "organize", "cn": "组织"}, {"en": "trash", "cn": "垃圾"}, {"en": "recycle", "cn": "回收"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "描述住所周边",
        patterns: [{"en": "There's a ... near my house.", "cn": "我家附近有一个……"}, {"en": "It takes ... minutes to ...", "cn": "……需要……分钟"}, {"en": "The neighborhood is ...", "cn": "这个社区……"}],
        words: [{"en": "neighborhood", "cn": "社区/周边"}, {"en": "nearby", "cn": "附近的"}, {"en": "park", "cn": "公园"}, {"en": "store", "cn": "商店"}, {"en": "supermarket", "cn": "超市"}, {"en": "school", "cn": "学校"}, {"en": "bus stop", "cn": "公交站"}, {"en": "quiet", "cn": "安静的"}, {"en": "noisy", "cn": "吵闹的"}, {"en": "safe", "cn": "安全的"}, {"en": "convenient", "cn": "方便的"}, {"en": "downtown", "cn": "市中心"}, {"en": "suburb", "cn": "郊区"}, {"en": "countryside", "cn": "乡村"}, {"en": "view", "cn": "观点/景色"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 找房模拟",
        patterns: [{"en": "完整租房场景对话", "cn": "完整租房场景对话"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "house", "cn": "房子"}, {"en": "home", "cn": "家"}, {"en": "comfortable", "cn": "舒服的"}, {"en": "cozy", "cn": "舒适的"}, {"en": "spacious", "cn": "宽敞的"}, {"en": "bright", "cn": "明亮的"}, {"en": "dark", "cn": "黑暗的"}, {"en": "old", "cn": "老的/旧的"}, {"en": "new", "cn": "新的"}, {"en": "renovate", "cn": "装修"}, {"en": "decorate", "cn": "装饰"}, {"en": "paint", "cn": "画画/油漆"}, {"en": "move", "cn": "移动"}, {"en": "settle", "cn": "安顿/解决"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "home", "cn": "家"}, {"en": "comfort", "cn": "舒适/安慰"}, {"en": "enjoy", "cn": "享受/喜欢"}, {"en": "decorate", "cn": "装饰"}, {"en": "personal", "cn": "个人的"}, {"en": "space", "cn": "空间/太空"}, {"en": "creative", "cn": "有创意的"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 13 周：衣服与颜色
  {
    week: 13, theme: "衣服与颜色",
    days: [
      {
        day: 1, title: "描述穿着",
        patterns: [{"en": "What are you wearing?", "cn": "你穿着什么？"}, {"en": "I'm wearing ...", "cn": "我穿着……"}, {"en": "He/She has a ... on.", "cn": "他/她穿着……"}],
        words: [{"en": "wear", "cn": "穿/戴"}, {"en": "clothes", "cn": "衣服"}, {"en": "shirt", "cn": "衬衫"}, {"en": "pants", "cn": "裤子"}, {"en": "dress", "cn": "连衣裙"}, {"en": "skirt", "cn": "裙子"}, {"en": "jacket", "cn": "夹克"}, {"en": "coat", "cn": "外套"}, {"en": "shoe", "cn": "鞋子"}, {"en": "hat", "cn": "帽子"}, {"en": "sock", "cn": "袜子"}, {"en": "sweater", "cn": "毛衣"}, {"en": "uniform", "cn": "制服"}, {"en": "casual", "cn": "休闲的"}, {"en": "formal", "cn": "正式的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "颜色与搭配",
        patterns: [{"en": "What color is ...?", "cn": "……是什么颜色？"}, {"en": "It goes well with ...", "cn": "它和……很配"}, {"en": "This matches your ...", "cn": "这很配你的……"}],
        words: [{"en": "red", "cn": "红色"}, {"en": "blue", "cn": "蓝色"}, {"en": "green", "cn": "绿色"}, {"en": "yellow", "cn": "黄色"}, {"en": "black", "cn": "黑色"}, {"en": "white", "cn": "白色"}, {"en": "gray", "cn": "灰色"}, {"en": "pink", "cn": "粉色"}, {"en": "purple", "cn": "紫色"}, {"en": "orange", "cn": "橙子"}, {"en": "brown", "cn": "棕色"}, {"en": "dark", "cn": "黑暗的"}, {"en": "light", "cn": "浅色的/光"}, {"en": "bright", "cn": "明亮的"}, {"en": "match", "cn": "比赛/匹配"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "洗衣与保养",
        patterns: [{"en": "How should I wash this?", "cn": "这个应该怎么洗？"}, {"en": "It's machine washable.", "cn": "可以机洗"}, {"en": "Don't use hot water.", "cn": "不要用热水"}],
        words: [{"en": "wash", "cn": "洗"}, {"en": "dry", "cn": "干的/擦干"}, {"en": "iron", "cn": "熨斗/铁/熨"}, {"en": "shrink", "cn": "缩水"}, {"en": "fade", "cn": "褪色/消退"}, {"en": "stain", "cn": "污渍"}, {"en": "detergent", "cn": "洗涤剂"}, {"en": "bleach", "cn": "漂白剂"}, {"en": "cold", "cn": "冷的"}, {"en": "warm", "cn": "温暖的"}, {"en": "hot", "cn": "热的/辣的"}, {"en": "machine", "cn": "机器"}, {"en": "hand", "cn": "手"}, {"en": "hang", "cn": "悬挂"}, {"en": "fold", "cn": "折叠"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "时尚与风格",
        patterns: [{"en": "I like your style.", "cn": "我喜欢你的风格"}, {"en": "Where did you get that?", "cn": "你在哪买的？"}, {"en": "This is very fashionable.", "cn": "这个很时尚"}],
        words: [{"en": "style", "cn": "风格"}, {"en": "fashion", "cn": "时尚"}, {"en": "trend", "cn": "趋势"}, {"en": "designer", "cn": "设计师"}, {"en": "brand", "cn": "品牌"}, {"en": "new", "cn": "新的"}, {"en": "old", "cn": "老的/旧的"}, {"en": "vintage", "cn": "复古的/经典"}, {"en": "modern", "cn": "现代的"}, {"en": "classic", "cn": "经典的"}, {"en": "elegant", "cn": "优雅的"}, {"en": "simple", "cn": "简单的"}, {"en": "comfortable", "cn": "舒服的"}, {"en": "popular", "cn": "流行的"}, {"en": "unique", "cn": "独特的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "在服装店",
        patterns: [{"en": "Do you have this in ...?", "cn": "这个有……的吗？"}, {"en": "I'm just browsing.", "cn": "我只是随便看看"}, {"en": "Can I get this in a larger size?", "cn": "这个有大一号的吗？"}],
        words: [{"en": "shop", "cn": "商店/购物"}, {"en": "browse", "cn": "浏览"}, {"en": "size", "cn": "尺码"}, {"en": "fit", "cn": "适合"}, {"en": "tight", "cn": "紧的"}, {"en": "loose", "cn": "松的"}, {"en": "large", "cn": "大的"}, {"en": "small", "cn": "小的"}, {"en": "sale", "cn": "销售/打折"}, {"en": "price tag", "cn": "价格标签"}, {"en": "fitting room", "cn": "试衣间"}, {"en": "exchange", "cn": "交换/兑换"}, {"en": "refund", "cn": "退款"}, {"en": "receipt", "cn": "收据"}, {"en": "bag", "cn": "包/袋子"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 购物搭配",
        patterns: [{"en": "完整服装店对话", "cn": "完整服装店对话"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "outfit", "cn": "服装/全套装备"}, {"en": "dress", "cn": "连衣裙"}, {"en": "up", "cn": "向上"}, {"en": "down", "cn": "向下"}, {"en": "occasion", "cn": "场合"}, {"en": "wedding", "cn": "婚礼"}, {"en": "party", "cn": "派对/聚会"}, {"en": "work", "cn": "工作"}, {"en": "casual", "cn": "休闲的"}, {"en": "sport", "cn": "运动"}, {"en": "weather", "cn": "天气"}, {"en": "season", "cn": "季节"}, {"en": "favorite", "cn": "最喜欢的"}, {"en": "wear", "cn": "穿/戴"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "style", "cn": "风格"}, {"en": "own", "cn": "拥有/自己的"}, {"en": "express", "cn": "表达/快递"}, {"en": "confident", "cn": "自信的"}, {"en": "beautiful", "cn": "美丽的"}, {"en": "handsome", "cn": "英俊的"}, {"en": "mirror", "cn": "镜子"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 14 周：运动与爱好
  {
    week: 14, theme: "运动与爱好",
    days: [
      {
        day: 1, title: "谈论爱好",
        patterns: [{"en": "What do you do in your free time?", "cn": "你空闲时间做什么？"}, {"en": "I enjoy ...", "cn": "我喜欢/享受……"}, {"en": "My hobby is ...", "cn": "我的爱好是……"}],
        words: [{"en": "hobby", "cn": "爱好"}, {"en": "free time", "cn": "空闲时间"}, {"en": "enjoy", "cn": "享受/喜欢"}, {"en": "like", "cn": "喜欢"}, {"en": "love", "cn": "爱"}, {"en": "weekend", "cn": "周末"}, {"en": "after work", "cn": "下班后"}, {"en": "relax", "cn": "放松"}, {"en": "fun", "cn": "有趣的"}, {"en": "interesting", "cn": "有趣的"}, {"en": "boring", "cn": "无聊的"}, {"en": "active", "cn": "活跃的"}, {"en": "lazy", "cn": "懒惰的"}, {"en": "creative", "cn": "有创意的"}, {"en": "social", "cn": "社交的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "体育项目",
        patterns: [{"en": "Do you play ...?", "cn": "你玩/打……吗？"}, {"en": "I've been playing for ... years.", "cn": "我已经玩了……年了"}, {"en": "I'm a fan of ...", "cn": "我是……的粉丝"}],
        words: [{"en": "sport", "cn": "运动"}, {"en": "soccer", "cn": "足球"}, {"en": "basketball", "cn": "篮球"}, {"en": "tennis", "cn": "网球"}, {"en": "swimming", "cn": "游泳"}, {"en": "running", "cn": "跑步/运行"}, {"en": "cycling", "cn": "骑行"}, {"en": "golf", "cn": "高尔夫"}, {"en": "volleyball", "cn": "排球"}, {"en": "table tennis", "cn": "乒乓球"}, {"en": "badminton", "cn": "羽毛球"}, {"en": "team", "cn": "团队"}, {"en": "player", "cn": "选手/玩家"}, {"en": "coach", "cn": "教练"}, {"en": "game", "cn": "游戏"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "健身与锻炼",
        patterns: [{"en": "How often do you work out?", "cn": "你多久锻炼一次？"}, {"en": "I go to the gym ...", "cn": "我……去健身房"}, {"en": "My routine includes ...", "cn": "我的日常包括……"}],
        words: [{"en": "gym", "cn": "健身房"}, {"en": "work out", "cn": "锻炼/解决"}, {"en": "routine", "cn": "日常"}, {"en": "cardio", "cn": "有氧运动"}, {"en": "strength", "cn": "力量/优势"}, {"en": "stretch", "cn": "拉伸/伸展"}, {"en": "warm up", "cn": "热身"}, {"en": "cool down", "cn": "冷静下来/降温"}, {"en": "muscle", "cn": "肌肉"}, {"en": "fitness", "cn": "健身"}, {"en": "health", "cn": "健康"}, {"en": "sweat", "cn": "汗水"}, {"en": "tired", "cn": "累的"}, {"en": "energy", "cn": "能量"}, {"en": "goal", "cn": "目标"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "观看比赛",
        patterns: [{"en": "Did you watch the game?", "cn": "你看比赛了吗？"}, {"en": "What a great match!", "cn": "好精彩的比赛！"}, {"en": "Who won?", "cn": "谁赢了？"}],
        words: [{"en": "game", "cn": "游戏"}, {"en": "match", "cn": "比赛/匹配"}, {"en": "team", "cn": "团队"}, {"en": "score", "cn": "分数"}, {"en": "win", "cn": "赢"}, {"en": "lose", "cn": "输/丢失"}, {"en": "goal", "cn": "目标"}, {"en": "point", "cn": "点/观点/指向"}, {"en": "player", "cn": "选手/玩家"}, {"en": "referee", "cn": "裁判"}, {"en": "stadium", "cn": "体育场"}, {"en": "crowd", "cn": "人群"}, {"en": "excited", "cn": "兴奋的"}, {"en": "cheer", "cn": "欢呼/加油"}, {"en": "disappointed", "cn": "失望的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "户外活动",
        patterns: [{"en": "Let's go ...ing!", "cn": "我们去……吧！"}, {"en": "Have you ever tried ...?", "cn": "你试过……吗？"}, {"en": "It's a great way to ...", "cn": "这是一个……的好方法"}],
        words: [{"en": "hiking", "cn": "徒步"}, {"en": "camping", "cn": "露营"}, {"en": "fishing", "cn": "钓鱼"}, {"en": "climbing", "cn": "攀岩/爬山"}, {"en": "surfing", "cn": "冲浪/浏览"}, {"en": "skiing", "cn": "滑雪"}, {"en": "skating", "cn": "滑冰"}, {"en": "picnic", "cn": "野餐"}, {"en": "nature", "cn": "大自然/本性"}, {"en": "outdoor", "cn": "户外的"}, {"en": "adventure", "cn": "冒险"}, {"en": "weekend", "cn": "周末"}, {"en": "weather", "cn": "天气"}, {"en": "equipment", "cn": "设备"}, {"en": "safety", "cn": "安全"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 兴趣分享",
        patterns: [{"en": "分享你的爱好", "cn": "分享你的爱好"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "passion", "cn": "热情"}, {"en": "talent", "cn": "天赋"}, {"en": "practice", "cn": "练习"}, {"en": "improve", "cn": "提高"}, {"en": "challenge", "cn": "挑战"}, {"en": "competition", "cn": "竞赛"}, {"en": "medal", "cn": "奖牌"}, {"en": "prize", "cn": "奖品"}, {"en": "join", "cn": "加入"}, {"en": "club", "cn": "俱乐部"}, {"en": "community", "cn": "社区"}, {"en": "share", "cn": "分享"}, {"en": "together", "cn": "一起"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "try", "cn": "尝试"}, {"en": "new", "cn": "新的"}, {"en": "activity", "cn": "活动"}, {"en": "fun", "cn": "有趣的"}, {"en": "health", "cn": "健康"}, {"en": "happy", "cn": "开心的"}, {"en": "active", "cn": "活跃的"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 15 周：旅行与假期
  {
    week: 15, theme: "旅行与假期",
    days: [
      {
        day: 1, title: "预订旅行",
        patterns: [{"en": "I'd like to book a ...", "cn": "我想预订……"}, {"en": "When is the next flight to ...?", "cn": "下一班去……的航班是什么时候？"}, {"en": "Round trip or one way?", "cn": "往返还是单程？"}],
        words: [{"en": "book", "cn": "书"}, {"en": "flight", "cn": "航班"}, {"en": "hotel", "cn": "酒店"}, {"en": "ticket", "cn": "票"}, {"en": "passport", "cn": "护照"}, {"en": "visa", "cn": "签证"}, {"en": "reservation", "cn": "预订"}, {"en": "confirm", "cn": "确认"}, {"en": "cancel", "cn": "取消"}, {"en": "date", "cn": "日期"}, {"en": "depart", "cn": "出发"}, {"en": "arrive", "cn": "到达"}, {"en": "return", "cn": "返回"}, {"en": "one way", "cn": "单程"}, {"en": "round trip", "cn": "往返"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "在机场",
        patterns: [{"en": "Where is the check-in counter?", "cn": "值机柜台在哪里？"}, {"en": "Is this your bag?", "cn": "这是你的包吗？"}, {"en": "Gate number ...", "cn": "登机口……号"}],
        words: [{"en": "airport", "cn": "机场"}, {"en": "check-in", "cn": "办理入住/登机"}, {"en": "counter", "cn": "柜台"}, {"en": "boarding", "cn": "登机/登车"}, {"en": "pass", "cn": "通过"}, {"en": "gate", "cn": "登机口/大门"}, {"en": "baggage", "cn": "行李"}, {"en": "luggage", "cn": "行李"}, {"en": "carry-on", "cn": "手提行李"}, {"en": "weight", "cn": "重量"}, {"en": "overweight", "cn": "超重"}, {"en": "security", "cn": "安全/安保"}, {"en": "scan", "cn": "扫描"}, {"en": "delay", "cn": "延误"}, {"en": "announcement", "cn": "公告"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "问路与导航",
        patterns: [{"en": "How do I get to the city center?", "cn": "去市中心怎么走？"}, {"en": "Is there a bus from the airport?", "cn": "有从机场出发的公交吗？"}, {"en": "Show me on the map.", "cn": "在地图上指给我看"}],
        words: [{"en": "center", "cn": "中心"}, {"en": "downtown", "cn": "市中心"}, {"en": "bus", "cn": "公交车"}, {"en": "train", "cn": "火车"}, {"en": "subway", "cn": "地铁"}, {"en": "map", "cn": "地图"}, {"en": "directions", "cn": "方向/说明"}, {"en": "distance", "cn": "距离"}, {"en": "walk", "cn": "走/散步"}, {"en": "drive", "cn": "开车/驱动"}, {"en": "taxi", "cn": "出租车"}, {"en": "ride", "cn": "骑/乘车"}, {"en": "share", "cn": "分享"}, {"en": "app", "cn": "应用程序"}, {"en": "GPS", "cn": "全球定位系统"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "在酒店",
        patterns: [{"en": "I have a reservation under ...", "cn": "我用……的名字预订了"}, {"en": "What time is check-out?", "cn": "退房时间是几点？"}, {"en": "The AC isn't working.", "cn": "空调坏了"}],
        words: [{"en": "hotel", "cn": "酒店"}, {"en": "reception", "cn": "前台/接待"}, {"en": "check-in", "cn": "办理入住/登机"}, {"en": "check-out", "cn": "退房/结账"}, {"en": "key card", "cn": "房卡"}, {"en": "room number", "cn": "房间号"}, {"en": "elevator", "cn": "电梯"}, {"en": "floor", "cn": "地板"}, {"en": "breakfast", "cn": "早餐"}, {"en": "included", "cn": "包含的"}, {"en": "Wi-Fi", "cn": "无线网络"}, {"en": "password", "cn": "密码"}, {"en": "towel", "cn": "毛巾"}, {"en": "service", "cn": "服务"}, {"en": "complaint", "cn": "投诉"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "谈论旅行经历",
        patterns: [{"en": "I've been to ...", "cn": "我去过……"}, {"en": "The best part was ...", "cn": "最棒的部分是……"}, {"en": "I'd love to go back to ...", "cn": "我很想再回……"}],
        words: [{"en": "trip", "cn": "旅行/行程"}, {"en": "travel", "cn": "旅行"}, {"en": "abroad", "cn": "国外"}, {"en": "domestic", "cn": "国内的"}, {"en": "sightseeing", "cn": "观光"}, {"en": "landmark", "cn": "地标"}, {"en": "museum", "cn": "博物馆"}, {"en": "beach", "cn": "海滩"}, {"en": "mountain", "cn": "山"}, {"en": "culture", "cn": "文化"}, {"en": "local", "cn": "当地的"}, {"en": "food", "cn": "食物"}, {"en": "people", "cn": "人们"}, {"en": "memory", "cn": "记忆/内存"}, {"en": "photo", "cn": "照片"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 模拟出行",
        patterns: [{"en": "完整旅行场景", "cn": "完整旅行场景"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "plan", "cn": "计划"}, {"en": "pack", "cn": "打包/包"}, {"en": "suitcase", "cn": "行李箱"}, {"en": "itinerary", "cn": "行程"}, {"en": "budget", "cn": "预算"}, {"en": "insurance", "cn": "保险"}, {"en": "exchange", "cn": "交换/兑换"}, {"en": "rate", "cn": "速度/比率/评价"}, {"en": "currency", "cn": "货币"}, {"en": "customs", "cn": "海关"}, {"en": "declare", "cn": "声明"}, {"en": "duty-free", "cn": "免税的"}, {"en": "souvenir", "cn": "纪念品"}, {"en": "postcard", "cn": "明信片"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "dream", "cn": "梦/梦想"}, {"en": "destination", "cn": "目的地"}, {"en": "future", "cn": "未来"}, {"en": "trip", "cn": "旅行/行程"}, {"en": "explore", "cn": "探索"}, {"en": "world", "cn": "世界"}, {"en": "adventure", "cn": "冒险"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 16 周：节日与庆祝
  {
    week: 16, theme: "节日与庆祝",
    days: [
      {
        day: 1, title: "谈论节日",
        patterns: [{"en": "What's your favorite holiday?", "cn": "你最喜欢的节日是什么？"}, {"en": "We celebrate ... by ...", "cn": "我们通过……来庆祝……"}, {"en": "It's a tradition to ...", "cn": "……是一个传统"}],
        words: [{"en": "holiday", "cn": "假日"}, {"en": "festival", "cn": "节日"}, {"en": "celebrate", "cn": "庆祝"}, {"en": "tradition", "cn": "传统"}, {"en": "custom", "cn": "习俗/定制的"}, {"en": "New Year", "cn": "新年"}, {"en": "Christmas", "cn": "圣诞节"}, {"en": "Spring Festival", "cn": "春节"}, {"en": "Mid-Autumn", "cn": "中秋"}, {"en": "National Day", "cn": "国庆节"}, {"en": "special", "cn": "特别的"}, {"en": "gift", "cn": "礼物"}, {"en": "party", "cn": "派对/聚会"}, {"en": "family", "cn": "家庭"}, {"en": "friend", "cn": "朋友"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "生日派对",
        patterns: [{"en": "When is your birthday?", "cn": "你生日是什么时候？"}, {"en": "I'm turning ... this year.", "cn": "我今年就……岁了"}, {"en": "Surprise!", "cn": "惊喜！"}],
        words: [{"en": "birthday", "cn": "生日"}, {"en": "party", "cn": "派对/聚会"}, {"en": "surprise", "cn": "惊喜"}, {"en": "invite", "cn": "邀请"}, {"en": "guest", "cn": "客人"}, {"en": "host", "cn": "主人/主持"}, {"en": "decoration", "cn": "装饰品"}, {"en": "balloon", "cn": "气球"}, {"en": "streamer", "cn": "主播"}, {"en": "birthday cake", "cn": "生日蛋糕"}, {"en": "candle", "cn": "蜡烛"}, {"en": "blow", "cn": "吹"}, {"en": "wish", "cn": "愿望/希望"}, {"en": "present", "cn": "现在/礼物"}, {"en": "card", "cn": "卡片"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "送礼与祝福",
        patterns: [{"en": "This is for you.", "cn": "这是给你的"}, {"en": "I hope you like it.", "cn": "希望你喜欢"}, {"en": "Best wishes for ...", "cn": "祝……一切顺利"}],
        words: [{"en": "gift", "cn": "礼物"}, {"en": "present", "cn": "现在/礼物"}, {"en": "box", "cn": "盒子"}, {"en": "wrap", "cn": "包装/包裹"}, {"en": "ribbon", "cn": "丝带"}, {"en": "card", "cn": "卡片"}, {"en": "message", "cn": "消息"}, {"en": "hope", "cn": "希望"}, {"en": "wish", "cn": "愿望/希望"}, {"en": "congratulations", "cn": "恭喜"}, {"en": "good luck", "cn": "祝你好运"}, {"en": "best wishes", "cn": "最美好的祝愿"}, {"en": "thank", "cn": "谢谢"}, {"en": "thoughtful", "cn": "体贴的/深思的"}, {"en": "generous", "cn": "慷慨的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "描述庆祝活动",
        patterns: [{"en": "We had a great time!", "cn": "我们玩得很开心！"}, {"en": "Everyone enjoyed ...", "cn": "大家都喜欢……"}, {"en": "The highlight was ...", "cn": "亮点是……"}],
        words: [{"en": "celebrate", "cn": "庆祝"}, {"en": "party", "cn": "派对/聚会"}, {"en": "dinner", "cn": "晚餐"}, {"en": "dance", "cn": "跳舞"}, {"en": "music", "cn": "音乐"}, {"en": "firework", "cn": "烟花"}, {"en": "lantern", "cn": "灯笼"}, {"en": "decoration", "cn": "装饰品"}, {"en": "feast", "cn": "盛宴"}, {"en": "drink", "cn": "喝/饮料"}, {"en": "toast", "cn": "吐司/敬酒"}, {"en": "cheer", "cn": "欢呼/加油"}, {"en": "fun", "cn": "有趣的"}, {"en": "laugh", "cn": "笑"}, {"en": "enjoy", "cn": "享受/喜欢"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "表达祝福与感谢",
        patterns: [{"en": "Merry Christmas!", "cn": "圣诞快乐！"}, {"en": "Happy New Year!", "cn": "新年快乐！"}, {"en": "Thank you for coming.", "cn": "谢谢你能来"}],
        words: [{"en": "merry", "cn": "快乐的"}, {"en": "happy", "cn": "开心的"}, {"en": "blessing", "cn": "祝福"}, {"en": "peace", "cn": "和平"}, {"en": "joy", "cn": "快乐"}, {"en": "health", "cn": "健康"}, {"en": "prosperity", "cn": "繁荣"}, {"en": "fortune", "cn": "财富/运气"}, {"en": "luck", "cn": "运气"}, {"en": "thankful", "cn": "感恩的"}, {"en": "grateful", "cn": "感激的"}, {"en": "appreciate", "cn": "感激/欣赏"}, {"en": "kind", "cn": "种类/善良"}, {"en": "lovely", "cn": "可爱的"}, {"en": "wonderful", "cn": "精彩的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 节日祝福",
        patterns: [{"en": "模拟各种节日场景", "cn": "模拟各种节日场景"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "calendar", "cn": "日历"}, {"en": "event", "cn": "事件/活动"}, {"en": "plan", "cn": "计划"}, {"en": "prepare", "cn": "准备"}, {"en": "invitation", "cn": "邀请"}, {"en": "RSVP", "cn": "请回复"}, {"en": "dress", "cn": "连衣裙"}, {"en": "code", "cn": "代码/密码"}, {"en": "bring", "cn": "带来"}, {"en": "dish", "cn": "菜/盘子"}, {"en": "share", "cn": "分享"}, {"en": "together", "cn": "一起"}, {"en": "memory", "cn": "记忆/内存"}, {"en": "special", "cn": "特别的"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "enjoy", "cn": "享受/喜欢"}, {"en": "festival", "cn": "节日"}, {"en": "spirit", "cn": "精神"}, {"en": "family", "cn": "家庭"}, {"en": "friend", "cn": "朋友"}, {"en": "tradition", "cn": "传统"}, {"en": "culture", "cn": "文化"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 17 周：科技与互联网
  {
    week: 17, theme: "科技与互联网",
    days: [
      {
        day: 1, title: "描述科技设备",
        patterns: [{"en": "What kind of phone do you have?", "cn": "你用什么手机？"}, {"en": "My laptop is ...", "cn": "我的笔记本电脑……"}, {"en": "The battery lasts ...", "cn": "电池续航……"}],
        words: [{"en": "phone", "cn": "手机/电话"}, {"en": "laptop", "cn": "笔记本电脑"}, {"en": "tablet", "cn": "平板电脑/药片"}, {"en": "screen", "cn": "屏幕"}, {"en": "battery", "cn": "电池"}, {"en": "charger", "cn": "充电器"}, {"en": "headphone", "cn": "耳机"}, {"en": "speaker", "cn": "扬声器/说话者"}, {"en": "camera", "cn": "相机"}, {"en": "keyboard", "cn": "键盘"}, {"en": "mouse", "cn": "鼠标"}, {"en": "touch", "cn": "触摸"}, {"en": "button", "cn": "纽扣"}, {"en": "power", "cn": "力量/权力"}, {"en": "cable", "cn": "电缆/数据线"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "使用软件与APP",
        patterns: [{"en": "Have you tried this app?", "cn": "你试过这个应用吗？"}, {"en": "It's very user-friendly.", "cn": "非常好用"}, {"en": "You can download it for free.", "cn": "你可以免费下载"}],
        words: [{"en": "app", "cn": "应用程序"}, {"en": "software", "cn": "软件"}, {"en": "download", "cn": "下载"}, {"en": "install", "cn": "安装"}, {"en": "update", "cn": "更新"}, {"en": "version", "cn": "版本"}, {"en": "account", "cn": "账户/账号"}, {"en": "login", "cn": "登录"}, {"en": "password", "cn": "密码"}, {"en": "setting", "cn": "设置"}, {"en": "profile", "cn": "简介/档案"}, {"en": "notification", "cn": "通知"}, {"en": "share", "cn": "分享"}, {"en": "upload", "cn": "上传"}, {"en": "delete", "cn": "删除"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "上网与搜索",
        patterns: [{"en": "I googled it.", "cn": "我用谷歌搜过了"}, {"en": "Search for ... online.", "cn": "在网上搜索……"}, {"en": "The website is ...", "cn": "这个网站……"}],
        words: [{"en": "internet", "cn": "互联网"}, {"en": "online", "cn": "在线"}, {"en": "search", "cn": "搜索"}, {"en": "website", "cn": "网站"}, {"en": "link", "cn": "链接"}, {"en": "click", "cn": "点击"}, {"en": "browse", "cn": "浏览"}, {"en": "scroll", "cn": "滚动"}, {"en": "page", "cn": "页"}, {"en": "result", "cn": "结果"}, {"en": "information", "cn": "信息"}, {"en": "news", "cn": "新闻"}, {"en": "blog", "cn": "博客"}, {"en": "video", "cn": "视频"}, {"en": "post", "cn": "帖子/邮寄"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "社交媒体",
        patterns: [{"en": "Are you on ...?", "cn": "你上……吗？/你在……吗？"}, {"en": "Follow me on ...", "cn": "在……上关注我"}, {"en": "I posted a photo on ...", "cn": "我在……上发了张照片"}],
        words: [{"en": "social media", "cn": "社交媒体"}, {"en": "follow", "cn": "跟随"}, {"en": "friend", "cn": "朋友"}, {"en": "like", "cn": "喜欢"}, {"en": "comment", "cn": "评论"}, {"en": "share", "cn": "分享"}, {"en": "post", "cn": "帖子/邮寄"}, {"en": "story", "cn": "故事"}, {"en": "feed", "cn": "喂养/信息流"}, {"en": "trending", "cn": "流行的/热搜"}, {"en": "viral", "cn": "病毒式传播的"}, {"en": "hashtag", "cn": "话题标签"}, {"en": "influencer", "cn": "网红/影响者"}, {"en": "subscribe", "cn": "订阅"}, {"en": "channel", "cn": "频道/渠道"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "科技问题与求助",
        patterns: [{"en": "My phone froze.", "cn": "我手机死机了"}, {"en": "It's not connecting to Wi-Fi.", "cn": "连不上Wi-Fi"}, {"en": "Have you tried restarting?", "cn": "你试过重启吗？"}],
        words: [{"en": "broken", "cn": "坏掉的"}, {"en": "fix", "cn": "修理"}, {"en": "restart", "cn": "重启"}, {"en": "reboot", "cn": "重启"}, {"en": "update", "cn": "更新"}, {"en": "connect", "cn": "连接"}, {"en": "Wi-Fi", "cn": "无线网络"}, {"en": "Bluetooth", "cn": "蓝牙"}, {"en": "signal", "cn": "信号"}, {"en": "data", "cn": "数据"}, {"en": "storage", "cn": "存储"}, {"en": "memory", "cn": "记忆/内存"}, {"en": "backup", "cn": "备份"}, {"en": "restore", "cn": "恢复"}, {"en": "tech support", "cn": "技术支持"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 科技话题讨论",
        patterns: [{"en": "讨论科技对生活的影响", "cn": "讨论科技对生活的影响"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "technology", "cn": "科技"}, {"en": "digital", "cn": "数字的"}, {"en": "smart", "cn": "聪明的"}, {"en": "device", "cn": "设备"}, {"en": "gadget", "cn": "小装置/电子产品"}, {"en": "innovation", "cn": "创新"}, {"en": "future", "cn": "未来"}, {"en": "change", "cn": "找零/改变"}, {"en": "convenient", "cn": "方便的"}, {"en": "addictive", "cn": "上瘾的"}, {"en": "balance", "cn": "平衡/余额"}, {"en": "screen time", "cn": "屏幕使用时间"}, {"en": "privacy", "cn": "隐私"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "unplug", "cn": "拔掉插头"}, {"en": "disconnect", "cn": "断开连接"}, {"en": "offline", "cn": "离线"}, {"en": "nature", "cn": "大自然/本性"}, {"en": "real", "cn": "真实的"}, {"en": "world", "cn": "世界"}, {"en": "balance", "cn": "平衡/余额"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 18 周：新闻与媒体
  {
    week: 18, theme: "新闻与媒体",
    days: [
      {
        day: 1, title: "谈论新闻",
        patterns: [{"en": "Did you hear about ...?", "cn": "你听说……了吗？"}, {"en": "I read in the news that ...", "cn": "我在新闻上看到……"}, {"en": "What's happening in ...?", "cn": "……发生了什么？"}],
        words: [{"en": "news", "cn": "新闻"}, {"en": "headline", "cn": "标题"}, {"en": "article", "cn": "文章"}, {"en": "report", "cn": "报告"}, {"en": "journalist", "cn": "记者"}, {"en": "source", "cn": "来源"}, {"en": "channel", "cn": "频道/渠道"}, {"en": "broadcast", "cn": "广播/直播"}, {"en": "breaking", "cn": "打破/突发"}, {"en": "latest", "cn": "最新的"}, {"en": "update", "cn": "更新"}, {"en": "event", "cn": "事件/活动"}, {"en": "happen", "cn": "发生"}, {"en": "world", "cn": "世界"}, {"en": "local", "cn": "当地的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "表达观点",
        patterns: [{"en": "In my opinion ...", "cn": "在我看来……"}, {"en": "I agree/disagree because ...", "cn": "我同意/不同意，因为……"}, {"en": "What do you think about ...?", "cn": "你觉得……怎么样？"}],
        words: [{"en": "opinion", "cn": "观点"}, {"en": "agree", "cn": "同意"}, {"en": "disagree", "cn": "不同意"}, {"en": "think", "cn": "想/认为"}, {"en": "believe", "cn": "相信"}, {"en": "feel", "cn": "感觉"}, {"en": "point of view", "cn": "观点"}, {"en": "reason", "cn": "原因"}, {"en": "because", "cn": "因为"}, {"en": "example", "cn": "例子"}, {"en": "fact", "cn": "事实"}, {"en": "truth", "cn": "真相"}, {"en": "fake", "cn": "假的"}, {"en": "real", "cn": "真实的"}, {"en": "evidence", "cn": "证据"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "讨论电视与节目",
        patterns: [{"en": "What shows do you watch?", "cn": "你看什么节目？"}, {"en": "I'm into ... lately.", "cn": "我最近迷上了……"}, {"en": "Have you seen the new ...?", "cn": "你看过新的……吗？"}],
        words: [{"en": "show", "cn": "节目/展示"}, {"en": "series", "cn": "系列"}, {"en": "episode", "cn": "集/片段"}, {"en": "season", "cn": "季节"}, {"en": "documentary", "cn": "纪录片"}, {"en": "reality", "cn": "现实"}, {"en": "comedy", "cn": "喜剧"}, {"en": "drama", "cn": "戏剧"}, {"en": "talk show", "cn": "脱口秀"}, {"en": "host", "cn": "主人/主持"}, {"en": "guest", "cn": "客人"}, {"en": "channel", "cn": "频道/渠道"}, {"en": "stream", "cn": "流/直播"}, {"en": "watch", "cn": "手表/观看"}, {"en": "recommend", "cn": "推荐"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "读报纸与杂志",
        patterns: [{"en": "Is there anything interesting?", "cn": "有什么有趣的事吗？"}, {"en": "The article says ...", "cn": "文章说……"}, {"en": "I subscribe to ...", "cn": "我订阅了……"}],
        words: [{"en": "newspaper", "cn": "报纸"}, {"en": "magazine", "cn": "杂志"}, {"en": "article", "cn": "文章"}, {"en": "column", "cn": "栏目/柱子"}, {"en": "editorial", "cn": "社论"}, {"en": "interview", "cn": "面试"}, {"en": "feature", "cn": "特色"}, {"en": "cover", "cn": "覆盖/封面"}, {"en": "issue", "cn": "问题/议题/发行"}, {"en": "weekly", "cn": "每周的"}, {"en": "monthly", "cn": "每月的"}, {"en": "subscribe", "cn": "订阅"}, {"en": "delivery", "cn": "送货"}, {"en": "digital", "cn": "数字的"}, {"en": "print", "cn": "打印"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "辨别信息真伪",
        patterns: [{"en": "Is that true?", "cn": "真的吗？"}, {"en": "Where did you hear that?", "cn": "你从哪听说的？"}, {"en": "I need to fact-check.", "cn": "我需要核实事实"}],
        words: [{"en": "true", "cn": "真实的"}, {"en": "false", "cn": "假的"}, {"en": "fact", "cn": "事实"}, {"en": "opinion", "cn": "观点"}, {"en": "rumor", "cn": "谣言"}, {"en": "hoax", "cn": "骗局/恶作剧"}, {"en": "check", "cn": "检查"}, {"en": "verify", "cn": "验证"}, {"en": "source", "cn": "来源"}, {"en": "reliable", "cn": "可靠的"}, {"en": "doubt", "cn": "怀疑"}, {"en": "question", "cn": "问题"}, {"en": "critical", "cn": "关键的/批评的"}, {"en": "thinking", "cn": "思考"}, {"en": "research", "cn": "研究"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 新闻播报模拟",
        patterns: [{"en": "扮演新闻主播", "cn": "扮演新闻主播"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "media", "cn": "媒体"}, {"en": "press", "cn": "按/压/新闻"}, {"en": "freedom", "cn": "自由"}, {"en": "censor", "cn": "审查"}, {"en": "bias", "cn": "偏见"}, {"en": "objective", "cn": "目标/客观的"}, {"en": "balance", "cn": "平衡/余额"}, {"en": "inform", "cn": "通知"}, {"en": "educate", "cn": "教育"}, {"en": "entertain", "cn": "娱乐"}, {"en": "audience", "cn": "观众"}, {"en": "public", "cn": "公共的"}, {"en": "responsibility", "cn": "责任"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "read", "cn": "阅读"}, {"en": "listen", "cn": "听"}, {"en": "learn", "cn": "学习"}, {"en": "current", "cn": "当前的"}, {"en": "event", "cn": "事件/活动"}, {"en": "aware", "cn": "意识到"}, {"en": "informed", "cn": "知情的"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 19 周：情感与意见
  {
    week: 19, theme: "情感与意见",
    days: [
      {
        day: 1, title: "表达情感",
        patterns: [{"en": "I feel ... about ...", "cn": "我对……感到……"}, {"en": "It makes me feel ...", "cn": "它让我感觉……"}, {"en": "I'm so ... right now!", "cn": "我现在太……了！"}],
        words: [{"en": "happy", "cn": "开心的"}, {"en": "sad", "cn": "难过的"}, {"en": "angry", "cn": "生气的"}, {"en": "excited", "cn": "兴奋的"}, {"en": "worried", "cn": "担心的"}, {"en": "scared", "cn": "害怕的"}, {"en": "surprised", "cn": "惊讶的"}, {"en": "bored", "cn": "无聊的"}, {"en": "confused", "cn": "困惑的"}, {"en": "proud", "cn": "骄傲的"}, {"en": "disappointed", "cn": "失望的"}, {"en": "nervous", "cn": "紧张的"}, {"en": "calm", "cn": "冷静的"}, {"en": "jealous", "cn": "嫉妒的"}, {"en": "hopeful", "cn": "充满希望的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "给予建议",
        patterns: [{"en": "You should ...", "cn": "你应该……"}, {"en": "Why don't you ...?", "cn": "你为什么不……？"}, {"en": "Have you thought about ...?", "cn": "你考虑过……吗？"}],
        words: [{"en": "should", "cn": "应该"}, {"en": "suggest", "cn": "建议"}, {"en": "recommend", "cn": "推荐"}, {"en": "advice", "cn": "建议"}, {"en": "tip", "cn": "小费/提示"}, {"en": "idea", "cn": "主意"}, {"en": "try", "cn": "尝试"}, {"en": "consider", "cn": "考虑"}, {"en": "maybe", "cn": "也许"}, {"en": "perhaps", "cn": "也许"}, {"en": "better", "cn": "更好"}, {"en": "best", "cn": "最好的"}, {"en": "worst", "cn": "最差的"}, {"en": "option", "cn": "选择"}, {"en": "choice", "cn": "选择"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "同意与反对",
        patterns: [{"en": "I totally agree.", "cn": "我完全同意"}, {"en": "I'm not so sure.", "cn": "我不太确定"}, {"en": "I see your point, but ...", "cn": "我明白你的意思，但……"}],
        words: [{"en": "agree", "cn": "同意"}, {"en": "disagree", "cn": "不同意"}, {"en": "maybe", "cn": "也许"}, {"en": "partly", "cn": "部分地"}, {"en": "completely", "cn": "完全地"}, {"en": "absolutely", "cn": "绝对地"}, {"en": "definitely", "cn": "肯定地"}, {"en": "perhaps", "cn": "也许"}, {"en": "doubt", "cn": "怀疑"}, {"en": "convince", "cn": "说服"}, {"en": "argument", "cn": "争论"}, {"en": "discuss", "cn": "讨论"}, {"en": "debate", "cn": "辩论"}, {"en": "compromise", "cn": "妥协"}, {"en": "respect", "cn": "尊重"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "道歉与原谅",
        patterns: [{"en": "I'm sorry for ...", "cn": "我为……道歉"}, {"en": "It won't happen again.", "cn": "不会再发生了"}, {"en": "I forgive you.", "cn": "我原谅你"}],
        words: [{"en": "sorry", "cn": "对不起"}, {"en": "apologize", "cn": "道歉"}, {"en": "forgive", "cn": "原谅"}, {"en": "mistake", "cn": "错误"}, {"en": "fault", "cn": "错误/故障"}, {"en": "regret", "cn": "后悔"}, {"en": "accident", "cn": "事故"}, {"en": "intentional", "cn": "故意的"}, {"en": "explain", "cn": "解释"}, {"en": "understand", "cn": "理解"}, {"en": "accept", "cn": "接受"}, {"en": "move on", "cn": "继续前进"}, {"en": "forget", "cn": "忘记"}, {"en": "learn", "cn": "学习"}, {"en": "better", "cn": "更好"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "鼓励与支持",
        patterns: [{"en": "You can do it!", "cn": "你能行！"}, {"en": "Don't give up.", "cn": "别放弃"}, {"en": "I believe in you.", "cn": "我相信你"}],
        words: [{"en": "encourage", "cn": "鼓励"}, {"en": "support", "cn": "支持"}, {"en": "cheer", "cn": "欢呼/加油"}, {"en": "motivate", "cn": "激励"}, {"en": "inspire", "cn": "激励"}, {"en": "believe", "cn": "相信"}, {"en": "trust", "cn": "信任"}, {"en": "confidence", "cn": "信心"}, {"en": "keep going", "cn": "继续"}, {"en": "try", "cn": "尝试"}, {"en": "best", "cn": "最好的"}, {"en": "proud", "cn": "骄傲的"}, {"en": "amazing", "cn": "令人惊叹的"}, {"en": "great", "cn": "很棒的"}, {"en": "wonderful", "cn": "精彩的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 情感表达",
        patterns: [{"en": "角色扮演各种情感场景", "cn": "角色扮演各种情感场景"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "emotion", "cn": "情感"}, {"en": "express", "cn": "表达/快递"}, {"en": "share", "cn": "分享"}, {"en": "listen", "cn": "听"}, {"en": "understand", "cn": "理解"}, {"en": "empathy", "cn": "同理心"}, {"en": "sympathy", "cn": "同情"}, {"en": "kind", "cn": "种类/善良"}, {"en": "caring", "cn": "有爱心的"}, {"en": "relationship", "cn": "关系"}, {"en": "communication", "cn": "沟通"}, {"en": "open", "cn": "打开"}, {"en": "honest", "cn": "诚实的"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "reflect", "cn": "反映/反思"}, {"en": "journal", "cn": "日志/期刊"}, {"en": "write", "cn": "写"}, {"en": "feeling", "cn": "感觉"}, {"en": "thought", "cn": "想法/思考(过去式)"}, {"en": "grateful", "cn": "感激的"}, {"en": "positive", "cn": "积极的"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 20 周：计划与未来
  {
    week: 20, theme: "计划与未来",
    days: [
      {
        day: 1, title: "谈论未来计划",
        patterns: [{"en": "I'm going to ...", "cn": "我打算……"}, {"en": "I plan to ...", "cn": "我计划……"}, {"en": "I hope to ... someday.", "cn": "我希望有一天……"}],
        words: [{"en": "plan", "cn": "计划"}, {"en": "future", "cn": "未来"}, {"en": "goal", "cn": "目标"}, {"en": "dream", "cn": "梦/梦想"}, {"en": "hope", "cn": "希望"}, {"en": "wish", "cn": "愿望/希望"}, {"en": "someday", "cn": "有一天"}, {"en": "next", "cn": "下一个"}, {"en": "year", "cn": "年"}, {"en": "month", "cn": "月"}, {"en": "soon", "cn": "很快"}, {"en": "later", "cn": "稍后"}, {"en": "eventually", "cn": "最终"}, {"en": "maybe", "cn": "也许"}, {"en": "perhaps", "cn": "也许"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "预测与推测",
        patterns: [{"en": "I think it will ...", "cn": "我觉得它会……"}, {"en": "It might ... tomorrow.", "cn": "明天可能……"}, {"en": "It's going to be ...", "cn": "将会……"}],
        words: [{"en": "will", "cn": "将会/意志"}, {"en": "might", "cn": "可能"}, {"en": "may", "cn": "可能/可以"}, {"en": "could", "cn": "可以(过去/礼貌)"}, {"en": "probably", "cn": "可能"}, {"en": "possibly", "cn": "可能地"}, {"en": "likely", "cn": "可能的"}, {"en": "unlikely", "cn": "不可能的"}, {"en": "predict", "cn": "预测"}, {"en": "guess", "cn": "猜"}, {"en": "expect", "cn": "期望"}, {"en": "forecast", "cn": "预报"}, {"en": "future", "cn": "未来"}, {"en": "change", "cn": "找零/改变"}, {"en": "happen", "cn": "发生"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "做决定",
        patterns: [{"en": "I've decided to ...", "cn": "我已经决定……"}, {"en": "I'm still thinking about ...", "cn": "我还在想……"}, {"en": "It's hard to choose.", "cn": "太难选了"}],
        words: [{"en": "decide", "cn": "决定"}, {"en": "decision", "cn": "决定"}, {"en": "choose", "cn": "选择"}, {"en": "choice", "cn": "选择"}, {"en": "option", "cn": "选择"}, {"en": "consider", "cn": "考虑"}, {"en": "weigh", "cn": "称重"}, {"en": "pros", "cn": "优点(复数)"}, {"en": "cons", "cn": "缺点(复数)"}, {"en": "risk", "cn": "风险"}, {"en": "benefit", "cn": "好处/福利"}, {"en": "chance", "cn": "机会"}, {"en": "opportunity", "cn": "机会"}, {"en": "change", "cn": "找零/改变"}, {"en": "commit", "cn": "承诺/提交"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "承诺与保证",
        patterns: [{"en": "I promise to ...", "cn": "我承诺……"}, {"en": "I won't let you down.", "cn": "我不会让你失望的"}, {"en": "You can count on me.", "cn": "你可以指望我"}],
        words: [{"en": "promise", "cn": "承诺"}, {"en": "swear", "cn": "发誓/说脏话"}, {"en": "guarantee", "cn": "保证"}, {"en": "count on", "cn": "依靠"}, {"en": "depend on", "cn": "取决于/依赖"}, {"en": "rely", "cn": "依赖"}, {"en": "trust", "cn": "信任"}, {"en": "word", "cn": "单词"}, {"en": "keep", "cn": "保持/继续"}, {"en": "break", "cn": "打破"}, {"en": "commit", "cn": "承诺/提交"}, {"en": "responsible", "cn": "负责的"}, {"en": "reliable", "cn": "可靠的"}, {"en": "serious", "cn": "严肃的"}, {"en": "sure", "cn": "确定的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "设定目标",
        patterns: [{"en": "My goal is to ...", "cn": "我的目标是……"}, {"en": "By next year, I want to ...", "cn": "到明年，我想……"}, {"en": "Step by step, I'll ...", "cn": "一步一步地，我会……"}],
        words: [{"en": "goal", "cn": "目标"}, {"en": "target", "cn": "目标"}, {"en": "achieve", "cn": "实现"}, {"en": "reach", "cn": "到达/够到"}, {"en": "accomplish", "cn": "完成"}, {"en": "milestone", "cn": "里程碑"}, {"en": "step", "cn": "步骤/脚步"}, {"en": "progress", "cn": "进步"}, {"en": "track", "cn": "追踪/轨道"}, {"en": "measure", "cn": "测量/措施"}, {"en": "deadline", "cn": "截止日期"}, {"en": "timeline", "cn": "时间线"}, {"en": "realistic", "cn": "现实的"}, {"en": "ambitious", "cn": "有雄心的"}, {"en": "focus", "cn": "专注/焦点"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 未来演讲",
        patterns: [{"en": "我的五年计划 主题演讲", "cn": "我的五年计划 主题演讲"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "vision", "cn": "愿景/视力"}, {"en": "mission", "cn": "任务/使命"}, {"en": "purpose", "cn": "目的"}, {"en": "motivation", "cn": "动机/动力"}, {"en": "discipline", "cn": "纪律"}, {"en": "habit", "cn": "习惯"}, {"en": "growth", "cn": "成长/增长"}, {"en": "improve", "cn": "提高"}, {"en": "learn", "cn": "学习"}, {"en": "develop", "cn": "发展/开发"}, {"en": "skill", "cn": "技能"}, {"en": "career", "cn": "职业"}, {"en": "future", "cn": "未来"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "imagine", "cn": "想象"}, {"en": "visualize", "cn": "可视化/想象"}, {"en": "dream", "cn": "梦/梦想"}, {"en": "big", "cn": "大的"}, {"en": "action", "cn": "行动"}, {"en": "start", "cn": "开始"}, {"en": "today", "cn": "今天"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 21 周：比较与选择
  {
    week: 21, theme: "比较与选择",
    days: [
      {
        day: 1, title: "比较事物",
        patterns: [{"en": "... is bigger than ...", "cn": "……比……大"}, {"en": "... is more ... than ...", "cn": "……比……更……"}, {"en": "... is not as ... as ...", "cn": "……不如……"}],
        words: [{"en": "bigger", "cn": "更大的"}, {"en": "smaller", "cn": "更小"}, {"en": "taller", "cn": "更高"}, {"en": "shorter", "cn": "更短"}, {"en": "faster", "cn": "更快"}, {"en": "slower", "cn": "更慢"}, {"en": "better", "cn": "更好"}, {"en": "worse", "cn": "更差"}, {"en": "more", "cn": "更多"}, {"en": "less", "cn": "更少"}, {"en": "than", "cn": "比"}, {"en": "as...as", "cn": "和……一样"}, {"en": "same", "cn": "相同的"}, {"en": "different", "cn": "不同的"}, {"en": "similar", "cn": "相似的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "询问偏好",
        patterns: [{"en": "Which do you prefer?", "cn": "你更喜欢哪个？"}, {"en": "I'd rather ... than ...", "cn": "我宁愿……也不……"}, {"en": "... suits me better.", "cn": "……更适合我"}],
        words: [{"en": "prefer", "cn": "更喜欢"}, {"en": "rather", "cn": "相当/宁愿"}, {"en": "favorite", "cn": "最喜欢的"}, {"en": "choice", "cn": "选择"}, {"en": "choose", "cn": "选择"}, {"en": "pick", "cn": "捡起/选择"}, {"en": "select", "cn": "选择"}, {"en": "between", "cn": "在…之间"}, {"en": "among", "cn": "在...之中"}, {"en": "either", "cn": "任一个"}, {"en": "neither", "cn": "两者都不"}, {"en": "both", "cn": "两者都"}, {"en": "all", "cn": "所有"}, {"en": "none", "cn": "没有任何"}, {"en": "any", "cn": "任何"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "最高级表达",
        patterns: [{"en": "It's the best ... I've ever ...", "cn": "这是我……过的最好的……"}, {"en": "The most ... in the world.", "cn": "世界上最……的"}, {"en": "One of the greatest ...", "cn": "最伟大的……之一"}],
        words: [{"en": "best", "cn": "最好的"}, {"en": "worst", "cn": "最差的"}, {"en": "most", "cn": "大多数"}, {"en": "least", "cn": "最少"}, {"en": "greatest", "cn": "最伟大的"}, {"en": "biggest", "cn": "最大的"}, {"en": "smallest", "cn": "最小的"}, {"en": "oldest", "cn": "最老的"}, {"en": "newest", "cn": "最新的"}, {"en": "favorite", "cn": "最喜欢的"}, {"en": "number one", "cn": "第一/头号"}, {"en": "top", "cn": "顶部"}, {"en": "ever", "cn": "曾经"}, {"en": "world", "cn": "世界"}, {"en": "history", "cn": "历史"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "优缺点分析",
        patterns: [{"en": "The advantage is ...", "cn": "优势是……"}, {"en": "On the other hand ...", "cn": "另一方面……"}, {"en": "The downside is ...", "cn": "缺点是……"}],
        words: [{"en": "advantage", "cn": "优势"}, {"en": "disadvantage", "cn": "劣势"}, {"en": "benefit", "cn": "好处/福利"}, {"en": "drawback", "cn": "缺点"}, {"en": "pro", "cn": "优点"}, {"en": "con", "cn": "缺点"}, {"en": "positive", "cn": "积极的"}, {"en": "negative", "cn": "消极的"}, {"en": "upside", "cn": "好处/上方"}, {"en": "downside", "cn": "缺点"}, {"en": "trade-off", "cn": "权衡"}, {"en": "balance", "cn": "平衡/余额"}, {"en": "consider", "cn": "考虑"}, {"en": "decide", "cn": "决定"}, {"en": "weigh", "cn": "称重"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "推荐与评价",
        patterns: [{"en": "I highly recommend ...", "cn": "我强烈推荐……"}, {"en": "It's worth it because ...", "cn": "值得，因为……"}, {"en": "You won't regret ...", "cn": "你不会后悔……"}],
        words: [{"en": "recommend", "cn": "推荐"}, {"en": "suggest", "cn": "建议"}, {"en": "worth", "cn": "值得"}, {"en": "value", "cn": "价值"}, {"en": "quality", "cn": "质量"}, {"en": "price", "cn": "价格"}, {"en": "review", "cn": "复习/评价"}, {"en": "rate", "cn": "速度/比率/评价"}, {"en": "star", "cn": "星星"}, {"en": "feedback", "cn": "反馈"}, {"en": "comment", "cn": "评论"}, {"en": "testimonial", "cn": "推荐信/评价"}, {"en": "experience", "cn": "经验/经历"}, {"en": "satisfied", "cn": "满意的"}, {"en": "excellent", "cn": "优秀的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 比较辩论",
        patterns: [{"en": "正式辩论: 城市 vs. 乡村", "cn": "正式辩论: 城市 vs. 乡村"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "compare", "cn": "比较"}, {"en": "contrast", "cn": "对比"}, {"en": "analyze", "cn": "分析"}, {"en": "evaluate", "cn": "评估"}, {"en": "judge", "cn": "法官/判断"}, {"en": "criterion", "cn": "标准"}, {"en": "standard", "cn": "标准"}, {"en": "objective", "cn": "目标/客观的"}, {"en": "subjective", "cn": "主观的"}, {"en": "fair", "cn": "公平的/展览会"}, {"en": "unfair", "cn": "不公平的"}, {"en": "equal", "cn": "等于/平等的"}, {"en": "justice", "cn": "正义"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "reflect", "cn": "反映/反思"}, {"en": "preference", "cn": "偏好"}, {"en": "style", "cn": "风格"}, {"en": "taste", "cn": "尝起来/味道"}, {"en": "unique", "cn": "独特的"}, {"en": "individual", "cn": "个人/个体的"}, {"en": "respect", "cn": "尊重"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 22 周：经历与故事
  {
    week: 22, theme: "经历与故事",
    days: [
      {
        day: 1, title: "谈论过去经历",
        patterns: [{"en": "I've been to ...", "cn": "我去过……"}, {"en": "I once ...", "cn": "我曾经……"}, {"en": "That was the first time I ...", "cn": "那是我第一次……"}],
        words: [{"en": "experience", "cn": "经验/经历"}, {"en": "once", "cn": "一次"}, {"en": "first time", "cn": "第一次"}, {"en": "last time", "cn": "上次"}, {"en": "ever", "cn": "曾经"}, {"en": "never", "cn": "从不"}, {"en": "before", "cn": "在…之前"}, {"en": "after", "cn": "在…之后"}, {"en": "during", "cn": "在…期间"}, {"en": "while", "cn": "一会儿/当…时"}, {"en": "already", "cn": "已经"}, {"en": "yet", "cn": "还/已经"}, {"en": "just", "cn": "刚刚/只是"}, {"en": "recently", "cn": "最近"}, {"en": "long ago", "cn": "很久以前"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "讲故事",
        patterns: [{"en": "Let me tell you about ...", "cn": "让我告诉你关于……"}, {"en": "It happened when I was ...", "cn": "那发生在我……的时候"}, {"en": "You won't believe what happened!", "cn": "你不会相信发生了什么！"}],
        words: [{"en": "story", "cn": "故事"}, {"en": "happen", "cn": "发生"}, {"en": "begin", "cn": "开始"}, {"en": "then", "cn": "然后/那时"}, {"en": "next", "cn": "下一个"}, {"en": "suddenly", "cn": "突然地"}, {"en": "finally", "cn": "最终"}, {"en": "end", "cn": "结束"}, {"en": "surprise", "cn": "惊喜"}, {"en": "funny", "cn": "有趣的"}, {"en": "scary", "cn": "吓人的"}, {"en": "exciting", "cn": "刺激的"}, {"en": "strange", "cn": "奇怪的"}, {"en": "amazing", "cn": "令人惊叹的"}, {"en": "unforgettable", "cn": "难忘的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "描述过去的动作",
        patterns: [{"en": "I was ...ing when ...", "cn": "当……的时候，我正在……"}, {"en": "While I was ...", "cn": "当我正在……的时候"}, {"en": "After I had ..., I ...", "cn": "在我……之后，我……"}],
        words: [{"en": "was walking", "cn": "正在走路"}, {"en": "was talking", "cn": "正在说话"}, {"en": "was reading", "cn": "正在阅读"}, {"en": "was driving", "cn": "正在开车"}, {"en": "was cooking", "cn": "正在做饭"}, {"en": "happened", "cn": "发生了"}, {"en": "saw", "cn": "看到(过去式)"}, {"en": "heard", "cn": "听到(过去式)"}, {"en": "felt", "cn": "感觉(过去式)"}, {"en": "noticed", "cn": "注意到了"}, {"en": "realized", "cn": "意识到"}, {"en": "decided", "cn": "决定了的"}, {"en": "stopped", "cn": "停止了"}, {"en": "started", "cn": "开始了"}, {"en": "continued", "cn": "持续的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "转折与意外",
        patterns: [{"en": "But then ...", "cn": "但接着……"}, {"en": "All of a sudden ...", "cn": "突然间……"}, {"en": "It turned out that ...", "cn": "结果是……"}],
        words: [{"en": "but", "cn": "但是"}, {"en": "however", "cn": "然而"}, {"en": "although", "cn": "虽然"}, {"en": "though", "cn": "虽然/不过"}, {"en": "despite", "cn": "尽管"}, {"en": "anyway", "cn": "无论如何"}, {"en": "still", "cn": "仍然"}, {"en": "yet", "cn": "还/已经"}, {"en": "unexpected", "cn": "意外的"}, {"en": "accident", "cn": "事故"}, {"en": "mistake", "cn": "错误"}, {"en": "luck", "cn": "运气"}, {"en": "lucky", "cn": "幸运的"}, {"en": "unlucky", "cn": "不幸的"}, {"en": "fortunately", "cn": "幸运地"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "人生重要时刻",
        patterns: [{"en": "I'll never forget ...", "cn": "我永远不会忘记……"}, {"en": "It changed my life.", "cn": "它改变了我的人生"}, {"en": "That's when I realized ...", "cn": "就在那时我意识到……"}],
        words: [{"en": "moment", "cn": "片刻"}, {"en": "memory", "cn": "记忆/内存"}, {"en": "life", "cn": "生活/生命"}, {"en": "change", "cn": "找零/改变"}, {"en": "important", "cn": "重要的"}, {"en": "significant", "cn": "重要的"}, {"en": "special", "cn": "特别的"}, {"en": "unique", "cn": "独特的"}, {"en": "remember", "cn": "记住"}, {"en": "forget", "cn": "忘记"}, {"en": "learn", "cn": "学习"}, {"en": "grow", "cn": "成长/种植"}, {"en": "become", "cn": "变成"}, {"en": "turn", "cn": "转向/变成"}, {"en": "point", "cn": "点/观点/指向"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 故事分享",
        patterns: [{"en": "分享你人生中最有趣的故事", "cn": "分享你人生中最有趣的故事"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "narrative", "cn": "叙述"}, {"en": "sequence", "cn": "顺序/序列"}, {"en": "chronology", "cn": "时间顺序"}, {"en": "detail", "cn": "细节"}, {"en": "describe", "cn": "描述"}, {"en": "express", "cn": "表达/快递"}, {"en": "reflect", "cn": "反映/反思"}, {"en": "lesson", "cn": "课程"}, {"en": "moral", "cn": "道德的/寓意"}, {"en": "meaning", "cn": "意思"}, {"en": "impact", "cn": "影响/冲击"}, {"en": "emotion", "cn": "情感"}, {"en": "connection", "cn": "连接"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "recall", "cn": "回忆/召回"}, {"en": "cherish", "cn": "珍惜"}, {"en": "appreciate", "cn": "感激/欣赏"}, {"en": "past", "cn": "过去"}, {"en": "present", "cn": "现在/礼物"}, {"en": "future", "cn": "未来"}, {"en": "journey", "cn": "旅程"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 23 周：解决问题
  {
    week: 23, theme: "解决问题",
    days: [
      {
        day: 1, title: "描述问题",
        patterns: [{"en": "There's a problem with ...", "cn": "……有问题"}, {"en": "Something is wrong with ...", "cn": "……出问题了"}, {"en": "It's not working properly.", "cn": "它不能正常工作了"}],
        words: [{"en": "problem", "cn": "问题"}, {"en": "issue", "cn": "问题/议题/发行"}, {"en": "trouble", "cn": "麻烦"}, {"en": "wrong", "cn": "错误的"}, {"en": "broken", "cn": "坏掉的"}, {"en": "error", "cn": "错误"}, {"en": "fault", "cn": "错误/故障"}, {"en": "mistake", "cn": "错误"}, {"en": "fail", "cn": "失败"}, {"en": "crash", "cn": "崩溃/撞车"}, {"en": "bug", "cn": "虫子/故障"}, {"en": "glitch", "cn": "小故障"}, {"en": "stuck", "cn": "卡住的/被困的"}, {"en": "missing", "cn": "失踪的/缺少的"}, {"en": "lost", "cn": "丢失的/迷路的"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "请求帮助",
        patterns: [{"en": "Can you help me with ...?", "cn": "你能帮我……吗？"}, {"en": "I'm having trouble ...ing.", "cn": "我……有困难"}, {"en": "Do you know how to ...?", "cn": "你知道怎么……吗？"}],
        words: [{"en": "help", "cn": "帮助"}, {"en": "assist", "cn": "协助"}, {"en": "support", "cn": "支持"}, {"en": "need", "cn": "需要"}, {"en": "please", "cn": "请"}, {"en": "could", "cn": "可以(过去/礼貌)"}, {"en": "would", "cn": "会/愿意(过去/虚拟)"}, {"en": "appreciate", "cn": "感激/欣赏"}, {"en": "favor", "cn": "帮忙/偏爱"}, {"en": "hand", "cn": "手"}, {"en": "guide", "cn": "导游/指南"}, {"en": "show", "cn": "节目/展示"}, {"en": "teach", "cn": "教"}, {"en": "explain", "cn": "解释"}, {"en": "solve", "cn": "解决"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "提出解决方案",
        patterns: [{"en": "Why don't we try ...?", "cn": "我们为什么不试试……？"}, {"en": "Let's see if ... works.", "cn": "我们看看……行不行"}, {"en": "The best way is to ...", "cn": "最好的方法是……"}],
        words: [{"en": "solve", "cn": "解决"}, {"en": "fix", "cn": "修理"}, {"en": "repair", "cn": "修理"}, {"en": "solution", "cn": "解决方案"}, {"en": "method", "cn": "方法"}, {"en": "approach", "cn": "方法/接近"}, {"en": "try", "cn": "尝试"}, {"en": "test", "cn": "测试"}, {"en": "check", "cn": "检查"}, {"en": "verify", "cn": "验证"}, {"en": "work", "cn": "工作"}, {"en": "working", "cn": "工作中/运行中"}, {"en": "success", "cn": "成功"}, {"en": "fail", "cn": "失败"}, {"en": "alternative", "cn": "替代方案"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "道歉与弥补",
        patterns: [{"en": "I'm sorry about ...", "cn": "对于……我很抱歉"}, {"en": "I'll take care of it.", "cn": "我来处理"}, {"en": "Let me make it up to you.", "cn": "让我补偿你"}],
        words: [{"en": "sorry", "cn": "对不起"}, {"en": "apologize", "cn": "道歉"}, {"en": "take care", "cn": "保重"}, {"en": "handle", "cn": "处理/把手"}, {"en": "deal with", "cn": "处理"}, {"en": "fix", "cn": "修理"}, {"en": "solve", "cn": "解决"}, {"en": "resolve", "cn": "解决"}, {"en": "compensate", "cn": "补偿"}, {"en": "make up", "cn": "弥补/化妆/编造"}, {"en": "promise", "cn": "承诺"}, {"en": "guarantee", "cn": "保证"}, {"en": "ensure", "cn": "确保"}, {"en": "prevent", "cn": "防止"}, {"en": "happen again", "cn": "再次发生"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "投诉与反馈",
        patterns: [{"en": "I'd like to make a complaint.", "cn": "我想投诉"}, {"en": "The service was ...", "cn": "服务……"}, {"en": "I'm not satisfied with ...", "cn": "我对……不满意"}],
        words: [{"en": "complain", "cn": "抱怨"}, {"en": "complaint", "cn": "投诉"}, {"en": "feedback", "cn": "反馈"}, {"en": "satisfied", "cn": "满意的"}, {"en": "unsatisfied", "cn": "不满意的"}, {"en": "disappointed", "cn": "失望的"}, {"en": "expect", "cn": "期望"}, {"en": "service", "cn": "服务"}, {"en": "quality", "cn": "质量"}, {"en": "product", "cn": "产品"}, {"en": "refund", "cn": "退款"}, {"en": "exchange", "cn": "交换/兑换"}, {"en": "replace", "cn": "替换"}, {"en": "improve", "cn": "提高"}, {"en": "follow up", "cn": "跟进"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 客服模拟",
        patterns: [{"en": "完整问题解决流程", "cn": "完整问题解决流程"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "process", "cn": "过程/处理"}, {"en": "step", "cn": "步骤/脚步"}, {"en": "procedure", "cn": "程序/流程"}, {"en": "policy", "cn": "政策"}, {"en": "rule", "cn": "规则"}, {"en": "standard", "cn": "标准"}, {"en": "professional", "cn": "专业的"}, {"en": "polite", "cn": "礼貌的"}, {"en": "patient", "cn": "耐心的"}, {"en": "effective", "cn": "有效的"}, {"en": "efficient", "cn": "高效的"}, {"en": "customer", "cn": "顾客"}, {"en": "service", "cn": "服务"}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": "自由选择薄弱句型练习"}],
        words: [{"en": "relax", "cn": "放松"}, {"en": "solution", "cn": "解决方案"}, {"en": "creative", "cn": "有创意的"}, {"en": "think", "cn": "想/认为"}, {"en": "outside the box", "cn": "打破常规"}, {"en": "challenge", "cn": "挑战"}, {"en": "overcome", "cn": "克服"}, {"en": "success", "cn": "成功"}],
        tasks: {"morning": "选本周最薄弱的句型，和铁柱重点练习。", "noon": "看一集带中英字幕的英文视频，搞懂 3 句你最想学的台词。", "afternoon": "自由选择：复习、预习下周话题，或者听英文歌曲放松。"}
      }
    ]
  },

  // 第 24 周：综合复习与实战
  {
    week: 24, theme: "综合复习与实战",
    days: [
      {
        day: 1, title: "自我介绍与社交 总复习",
        patterns: [{"en": "综合运用W1-W5所有句型", "cn": "综合运用W1-W5所有句型"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "introduce", "cn": "介绍"}, {"en": "family", "cn": "家庭"}, {"en": "daily", "cn": "每日的"}, {"en": "weather", "cn": "天气"}, {"en": "food", "cn": "食物"}, {"en": "confident", "cn": "自信的"}, {"en": "fluent", "cn": "流利的"}, {"en": "natural", "cn": "自然的"}, {"en": "conversation", "cn": "对话"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "问路、购物、打电话 总复习",
        patterns: [{"en": "综合运用W6-W8所有句型", "cn": "综合运用W6-W8所有句型"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "shop", "cn": "商店/购物"}, {"en": "direction", "cn": "方向"}, {"en": "phone", "cn": "手机/电话"}, {"en": "appointment", "cn": "预约"}, {"en": "practical", "cn": "实际的"}, {"en": "useful", "cn": "有用的"}, {"en": "essential", "cn": "必要的"}, {"en": "everyday", "cn": "日常的"}, {"en": "situation", "cn": "情况"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "健康、工作、学习 总复习",
        patterns: [{"en": "综合运用W9-W11所有句型", "cn": "综合运用W9-W11所有句型"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "health", "cn": "健康"}, {"en": "work", "cn": "工作"}, {"en": "school", "cn": "学校"}, {"en": "career", "cn": "职业"}, {"en": "professional", "cn": "专业的"}, {"en": "formal", "cn": "正式的"}, {"en": "polite", "cn": "礼貌的"}, {"en": "appropriate", "cn": "合适的"}, {"en": "context", "cn": "上下文/背景"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "住房、时尚、运动 总复习",
        patterns: [{"en": "综合运用W12-W14所有句型", "cn": "综合运用W12-W14所有句型"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "home", "cn": "家"}, {"en": "style", "cn": "风格"}, {"en": "sport", "cn": "运动"}, {"en": "hobby", "cn": "爱好"}, {"en": "lifestyle", "cn": "生活方式"}, {"en": "personal", "cn": "个人的"}, {"en": "describe", "cn": "描述"}, {"en": "express", "cn": "表达/快递"}, {"en": "preference", "cn": "偏好"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "旅行、节日、科技 总复习",
        patterns: [{"en": "综合运用W15-W17所有句型", "cn": "综合运用W15-W17所有句型"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "travel", "cn": "旅行"}, {"en": "festival", "cn": "节日"}, {"en": "technology", "cn": "科技"}, {"en": "media", "cn": "媒体"}, {"en": "global", "cn": "全球的"}, {"en": "modern", "cn": "现代的"}, {"en": "connect", "cn": "连接"}, {"en": "communicate", "cn": "交流"}, {"en": "share", "cn": "分享"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "观点、计划、比较 总复习",
        patterns: [{"en": "综合运用W18-W21所有句型", "cn": "综合运用W18-W21所有句型"}],
        words: [{"en": "review", "cn": "复习/评价"}, {"en": "opinion", "cn": "观点"}, {"en": "plan", "cn": "计划"}, {"en": "compare", "cn": "比较"}, {"en": "argue", "cn": "争论"}, {"en": "debate", "cn": "辩论"}, {"en": "critical", "cn": "关键的/批评的"}, {"en": "thinking", "cn": "思考"}, {"en": "persuade", "cn": "说服"}, {"en": "convince", "cn": "说服"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 7, title: "终极挑战日",
        patterns: [{"en": "完整40分钟英语对话挑战", "cn": "完整40分钟英语对话挑战"}],
        words: [{"en": "challenge", "cn": "挑战"}, {"en": "final", "cn": "最终的"}, {"en": "complete", "cn": "完成/完整的"}, {"en": "achievement", "cn": "成就"}, {"en": "proud", "cn": "骄傲的"}, {"en": "progress", "cn": "进步"}, {"en": "beginner", "cn": "初学者"}, {"en": "confident", "cn": "自信的"}, {"en": "speaker", "cn": "扬声器/说话者"}, {"en": "continue", "cn": "继续"}, {"en": "grow", "cn": "成长/种植"}, {"en": "fluent", "cn": "流利的"}, {"en": "master", "cn": "掌握/大师"}, {"en": "success", "cn": "成功"}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      }
    ]
  }
];