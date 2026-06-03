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
        patterns: [{"en": "He/She is ...", "cn": ""}, {"en": "He/She has ...", "cn": ""}, {"en": "How old is ...?", "cn": ""}],
        words: [{"en": "tall", "cn": ""}, {"en": "short", "cn": ""}, {"en": "young", "cn": ""}, {"en": "old", "cn": ""}, {"en": "beautiful", "cn": ""}, {"en": "handsome", "cn": ""}, {"en": "strong", "cn": ""}, {"en": "kind", "cn": ""}, {"en": "funny", "cn": ""}, {"en": "smart", "cn": ""}, {"en": "hair", "cn": ""}, {"en": "eye", "cn": ""}, {"en": "face", "cn": ""}, {"en": "smile", "cn": ""}, {"en": "glasses", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "谈论年龄与生日",
        patterns: [{"en": "How old are you?", "cn": ""}, {"en": "I am ... years old.", "cn": ""}, {"en": "When is your birthday?", "cn": ""}],
        words: [{"en": "year", "cn": ""}, {"en": "old", "cn": ""}, {"en": "birthday", "cn": ""}, {"en": "age", "cn": ""}, {"en": "number", "cn": ""}, {"en": "month", "cn": ""}, {"en": "January", "cn": ""}, {"en": "February", "cn": ""}, {"en": "March", "cn": ""}, {"en": "today", "cn": ""}, {"en": "happy", "cn": ""}, {"en": "party", "cn": ""}, {"en": "cake", "cn": ""}, {"en": "gift", "cn": ""}, {"en": "card", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "描述性格特征",
        patterns: [{"en": "He/She is very ...", "cn": ""}, {"en": "I think he/she is ...", "cn": ""}, {"en": "What is he/she like?", "cn": ""}],
        words: [{"en": "kind", "cn": ""}, {"en": "friendly", "cn": ""}, {"en": "shy", "cn": ""}, {"en": "outgoing", "cn": ""}, {"en": "lazy", "cn": ""}, {"en": "hardworking", "cn": ""}, {"en": "quiet", "cn": ""}, {"en": "loud", "cn": ""}, {"en": "serious", "cn": ""}, {"en": "funny", "cn": ""}, {"en": "honest", "cn": ""}, {"en": "brave", "cn": ""}, {"en": "patient", "cn": ""}, {"en": "polite", "cn": ""}, {"en": "rude", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "家庭成员关系",
        patterns: [{"en": "There are ... people in my family.", "cn": ""}, {"en": "I have ... brother(s)/sister(s).", "cn": ""}, {"en": "My ... is a ...", "cn": ""}],
        words: [{"en": "family", "cn": ""}, {"en": "people", "cn": ""}, {"en": "parent", "cn": ""}, {"en": "grandfather", "cn": ""}, {"en": "grandmother", "cn": ""}, {"en": "uncle", "cn": ""}, {"en": "aunt", "cn": ""}, {"en": "cousin", "cn": ""}, {"en": "son", "cn": ""}, {"en": "daughter", "cn": ""}, {"en": "husband", "cn": ""}, {"en": "wife", "cn": ""}, {"en": "child", "cn": ""}, {"en": "baby", "cn": ""}, {"en": "live", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "介绍家乡与国籍",
        patterns: [{"en": "I come from ...", "cn": ""}, {"en": "I was born in ...", "cn": ""}, {"en": "I grew up in ...", "cn": ""}],
        words: [{"en": "country", "cn": ""}, {"en": "city", "cn": ""}, {"en": "town", "cn": ""}, {"en": "village", "cn": ""}, {"en": "hometown", "cn": ""}, {"en": "nationality", "cn": ""}, {"en": "language", "cn": ""}, {"en": "speak", "cn": ""}, {"en": "culture", "cn": ""}, {"en": "food", "cn": ""}, {"en": "people", "cn": ""}, {"en": "famous", "cn": ""}, {"en": "big", "cn": ""}, {"en": "small", "cn": ""}, {"en": "beautiful", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 角色扮演",
        patterns: [{"en": "本周句型综合复习", "cn": ""}, {"en": "角色扮演: 向新邻居介绍全家", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "describe", "cn": ""}, {"en": "family", "cn": ""}, {"en": "photo", "cn": ""}, {"en": "album", "cn": ""}, {"en": "remember", "cn": ""}, {"en": "practice", "cn": ""}, {"en": "introduce", "cn": ""}, {"en": "neighbor", "cn": ""}, {"en": "welcome", "cn": ""}, {"en": "house", "cn": ""}, {"en": "garden", "cn": ""}, {"en": "pet", "cn": ""}, {"en": "together", "cn": ""}, {"en": "love", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "review", "cn": ""}, {"en": "favorite", "cn": ""}, {"en": "word", "cn": ""}, {"en": "sentence", "cn": ""}, {"en": "remember", "cn": ""}, {"en": "forget", "cn": ""}, {"en": "again", "cn": ""}, {"en": "tomorrow", "cn": ""}],
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
        patterns: [{"en": "What time is it?", "cn": ""}, {"en": "It's ... o'clock.", "cn": ""}, {"en": "At ... (time) I ...", "cn": ""}],
        words: [{"en": "time", "cn": ""}, {"en": "clock", "cn": ""}, {"en": "o'clock", "cn": ""}, {"en": "half", "cn": ""}, {"en": "quarter", "cn": ""}, {"en": "minute", "cn": ""}, {"en": "hour", "cn": ""}, {"en": "morning", "cn": ""}, {"en": "afternoon", "cn": ""}, {"en": "evening", "cn": ""}, {"en": "night", "cn": ""}, {"en": "early", "cn": ""}, {"en": "late", "cn": ""}, {"en": "now", "cn": ""}, {"en": "then", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "描述每日行程",
        patterns: [{"en": "I get up at ...", "cn": ""}, {"en": "I go to ... at ...", "cn": ""}, {"en": "Every day I ...", "cn": ""}],
        words: [{"en": "get up", "cn": ""}, {"en": "wake", "cn": ""}, {"en": "wash", "cn": ""}, {"en": "brush", "cn": ""}, {"en": "teeth", "cn": ""}, {"en": "breakfast", "cn": ""}, {"en": "lunch", "cn": ""}, {"en": "dinner", "cn": ""}, {"en": "work", "cn": ""}, {"en": "home", "cn": ""}, {"en": "bed", "cn": ""}, {"en": "sleep", "cn": ""}, {"en": "every", "cn": ""}, {"en": "daily", "cn": ""}, {"en": "routine", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "星期与日期",
        patterns: [{"en": "What day is today?", "cn": ""}, {"en": "Today is ...", "cn": ""}, {"en": "I have ... on ...", "cn": ""}],
        words: [{"en": "Monday", "cn": ""}, {"en": "Tuesday", "cn": ""}, {"en": "Wednesday", "cn": ""}, {"en": "Thursday", "cn": ""}, {"en": "Friday", "cn": ""}, {"en": "Saturday", "cn": ""}, {"en": "Sunday", "cn": ""}, {"en": "week", "cn": ""}, {"en": "weekend", "cn": ""}, {"en": "today", "cn": ""}, {"en": "yesterday", "cn": ""}, {"en": "tomorrow", "cn": ""}, {"en": "date", "cn": ""}, {"en": "calendar", "cn": ""}, {"en": "busy", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "频率副词表达",
        patterns: [{"en": "I always/usually/sometimes/never ...", "cn": ""}, {"en": "How often do you ...?", "cn": ""}, {"en": "Once/Twice a ...", "cn": ""}],
        words: [{"en": "always", "cn": ""}, {"en": "usually", "cn": ""}, {"en": "often", "cn": ""}, {"en": "sometimes", "cn": ""}, {"en": "rarely", "cn": ""}, {"en": "never", "cn": ""}, {"en": "once", "cn": ""}, {"en": "twice", "cn": ""}, {"en": "every", "cn": ""}, {"en": "week", "cn": ""}, {"en": "month", "cn": ""}, {"en": "year", "cn": ""}, {"en": "how often", "cn": ""}, {"en": "frequency", "cn": ""}, {"en": "habit", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "描述正在做的事",
        patterns: [{"en": "I am ...ing ...", "cn": ""}, {"en": "What are you doing?", "cn": ""}, {"en": "Are you ...ing?", "cn": ""}],
        words: [{"en": "doing", "cn": ""}, {"en": "reading", "cn": ""}, {"en": "writing", "cn": ""}, {"en": "cooking", "cn": ""}, {"en": "watching", "cn": ""}, {"en": "listening", "cn": ""}, {"en": "talking", "cn": ""}, {"en": "walking", "cn": ""}, {"en": "running", "cn": ""}, {"en": "sitting", "cn": ""}, {"en": "standing", "cn": ""}, {"en": "working", "cn": ""}, {"en": "studying", "cn": ""}, {"en": "playing", "cn": ""}, {"en": "waiting", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 我的一天演讲",
        patterns: [{"en": "用所有句型描述完整的一天", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "schedule", "cn": ""}, {"en": "diary", "cn": ""}, {"en": "plan", "cn": ""}, {"en": "morning", "cn": ""}, {"en": "noon", "cn": ""}, {"en": "night", "cn": ""}, {"en": "busy", "cn": ""}, {"en": "free", "cn": ""}, {"en": "important", "cn": ""}, {"en": "finish", "cn": ""}, {"en": "start", "cn": ""}, {"en": "begin", "cn": ""}, {"en": "end", "cn": ""}, {"en": "daily", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "rest", "cn": ""}, {"en": "fun", "cn": ""}, {"en": "movie", "cn": ""}, {"en": "music", "cn": ""}, {"en": "song", "cn": ""}, {"en": "easy", "cn": ""}, {"en": "try", "cn": ""}, {"en": "best", "cn": ""}],
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
        patterns: [{"en": "What's the weather like?", "cn": ""}, {"en": "It's ... today.", "cn": ""}, {"en": "Is it ... outside?", "cn": ""}],
        words: [{"en": "weather", "cn": ""}, {"en": "sunny", "cn": ""}, {"en": "cloudy", "cn": ""}, {"en": "rainy", "cn": ""}, {"en": "windy", "cn": ""}, {"en": "snowy", "cn": ""}, {"en": "hot", "cn": ""}, {"en": "cold", "cn": ""}, {"en": "warm", "cn": ""}, {"en": "cool", "cn": ""}, {"en": "outside", "cn": ""}, {"en": "today", "cn": ""}, {"en": "forecast", "cn": ""}, {"en": "temperature", "cn": ""}, {"en": "degree", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "谈论季节",
        patterns: [{"en": "I like ... best.", "cn": ""}, {"en": "In ..., it is usually ...", "cn": ""}, {"en": "What's your favorite season?", "cn": ""}],
        words: [{"en": "spring", "cn": ""}, {"en": "summer", "cn": ""}, {"en": "autumn", "cn": ""}, {"en": "winter", "cn": ""}, {"en": "season", "cn": ""}, {"en": "favorite", "cn": ""}, {"en": "bloom", "cn": ""}, {"en": "hot", "cn": ""}, {"en": "cool", "cn": ""}, {"en": "cold", "cn": ""}, {"en": "warm", "cn": ""}, {"en": "leaves", "cn": ""}, {"en": "snow", "cn": ""}, {"en": "flower", "cn": ""}, {"en": "holiday", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "讨论温度与体感",
        patterns: [{"en": "It feels ... today.", "cn": ""}, {"en": "The temperature is ... degrees.", "cn": ""}, {"en": "It's too ... for me.", "cn": ""}],
        words: [{"en": "feel", "cn": ""}, {"en": "temperature", "cn": ""}, {"en": "high", "cn": ""}, {"en": "low", "cn": ""}, {"en": "degree", "cn": ""}, {"en": "freezing", "cn": ""}, {"en": "boiling", "cn": ""}, {"en": "mild", "cn": ""}, {"en": "humid", "cn": ""}, {"en": "dry", "cn": ""}, {"en": "wet", "cn": ""}, {"en": "windy", "cn": ""}, {"en": "breeze", "cn": ""}, {"en": "comfortable", "cn": ""}, {"en": "terrible", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "天气与活动计划",
        patterns: [{"en": "If it's ..., I will ...", "cn": ""}, {"en": "Let's ... when it's ...", "cn": ""}, {"en": "It's a good day for ...", "cn": ""}],
        words: [{"en": "plan", "cn": ""}, {"en": "outdoor", "cn": ""}, {"en": "indoor", "cn": ""}, {"en": "beach", "cn": ""}, {"en": "park", "cn": ""}, {"en": "hiking", "cn": ""}, {"en": "picnic", "cn": ""}, {"en": "stay", "cn": ""}, {"en": "umbrella", "cn": ""}, {"en": "coat", "cn": ""}, {"en": "jacket", "cn": ""}, {"en": "hat", "cn": ""}, {"en": "sunglasses", "cn": ""}, {"en": "sunscreen", "cn": ""}, {"en": "sweater", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "描述过去的天气",
        patterns: [{"en": "Yesterday it was ...", "cn": ""}, {"en": "Last week was very ...", "cn": ""}, {"en": "It rained/snowed ...", "cn": ""}],
        words: [{"en": "yesterday", "cn": ""}, {"en": "last", "cn": ""}, {"en": "was", "cn": ""}, {"en": "were", "cn": ""}, {"en": "rained", "cn": ""}, {"en": "snowed", "cn": ""}, {"en": "shone", "cn": ""}, {"en": "blew", "cn": ""}, {"en": "storm", "cn": ""}, {"en": "thunder", "cn": ""}, {"en": "lightning", "cn": ""}, {"en": "fog", "cn": ""}, {"en": "foggy", "cn": ""}, {"en": "icy", "cn": ""}, {"en": "slippery", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 天气预报员",
        patterns: [{"en": "模拟英语天气播报", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "report", "cn": ""}, {"en": "forecast", "cn": ""}, {"en": "across", "cn": ""}, {"en": "north", "cn": ""}, {"en": "south", "cn": ""}, {"en": "east", "cn": ""}, {"en": "west", "cn": ""}, {"en": "region", "cn": ""}, {"en": "area", "cn": ""}, {"en": "clear", "cn": ""}, {"en": "change", "cn": ""}, {"en": "stay", "cn": ""}, {"en": "expect", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "outside", "cn": ""}, {"en": "walk", "cn": ""}, {"en": "fresh", "cn": ""}, {"en": "air", "cn": ""}, {"en": "nature", "cn": ""}, {"en": "beautiful", "cn": ""}, {"en": "peaceful", "cn": ""}],
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
        patterns: [{"en": "I'd like to order ...", "cn": ""}, {"en": "Can I have ...?", "cn": ""}, {"en": "What do you recommend?", "cn": ""}],
        words: [{"en": "order", "cn": ""}, {"en": "menu", "cn": ""}, {"en": "waiter", "cn": ""}, {"en": "waitress", "cn": ""}, {"en": "ready", "cn": ""}, {"en": "recommend", "cn": ""}, {"en": "special", "cn": ""}, {"en": "today's", "cn": ""}, {"en": "appetizer", "cn": ""}, {"en": "main course", "cn": ""}, {"en": "dessert", "cn": ""}, {"en": "drink", "cn": ""}, {"en": "bill", "cn": ""}, {"en": "check", "cn": ""}, {"en": "tip", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "表达饮食偏好",
        patterns: [{"en": "I'm allergic to ...", "cn": ""}, {"en": "I don't eat ...", "cn": ""}, {"en": "Is this ... free?", "cn": ""}],
        words: [{"en": "allergic", "cn": ""}, {"en": "vegetarian", "cn": ""}, {"en": "vegan", "cn": ""}, {"en": "gluten", "cn": ""}, {"en": "dairy", "cn": ""}, {"en": "nut", "cn": ""}, {"en": "seafood", "cn": ""}, {"en": "spicy", "cn": ""}, {"en": "salty", "cn": ""}, {"en": "sweet", "cn": ""}, {"en": "sour", "cn": ""}, {"en": "bitter", "cn": ""}, {"en": "taste", "cn": ""}, {"en": "delicious", "cn": ""}, {"en": "fresh", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "描述烹饪方法",
        patterns: [{"en": "How is this cooked?", "cn": ""}, {"en": "It's ...ed.", "cn": ""}, {"en": "Is it fried or boiled?", "cn": ""}],
        words: [{"en": "cook", "cn": ""}, {"en": "fried", "cn": ""}, {"en": "boiled", "cn": ""}, {"en": "grilled", "cn": ""}, {"en": "roasted", "cn": ""}, {"en": "steamed", "cn": ""}, {"en": "baked", "cn": ""}, {"en": "raw", "cn": ""}, {"en": "rare", "cn": ""}, {"en": "medium", "cn": ""}, {"en": "well-done", "cn": ""}, {"en": "sauce", "cn": ""}, {"en": "oil", "cn": ""}, {"en": "salt", "cn": ""}, {"en": "pepper", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "在超市购物",
        patterns: [{"en": "Where can I find ...?", "cn": ""}, {"en": "How much is ...?", "cn": ""}, {"en": "I need some ...", "cn": ""}],
        words: [{"en": "supermarket", "cn": ""}, {"en": "aisle", "cn": ""}, {"en": "section", "cn": ""}, {"en": "produce", "cn": ""}, {"en": "dairy", "cn": ""}, {"en": "bakery", "cn": ""}, {"en": "meat", "cn": ""}, {"en": "frozen", "cn": ""}, {"en": "cart", "cn": ""}, {"en": "basket", "cn": ""}, {"en": "list", "cn": ""}, {"en": "price", "cn": ""}, {"en": "cheap", "cn": ""}, {"en": "expensive", "cn": ""}, {"en": "discount", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "餐桌对话",
        patterns: [{"en": "This tastes ...!", "cn": ""}, {"en": "Could you pass the ...?", "cn": ""}, {"en": "Help yourself to ...", "cn": ""}],
        words: [{"en": "pass", "cn": ""}, {"en": "salt", "cn": ""}, {"en": "pepper", "cn": ""}, {"en": "bowl", "cn": ""}, {"en": "plate", "cn": ""}, {"en": "fork", "cn": ""}, {"en": "knife", "cn": ""}, {"en": "spoon", "cn": ""}, {"en": "napkin", "cn": ""}, {"en": "glass", "cn": ""}, {"en": "bottle", "cn": ""}, {"en": "pour", "cn": ""}, {"en": "cheers", "cn": ""}, {"en": "enjoy", "cn": ""}, {"en": "meal", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 模拟点餐",
        patterns: [{"en": "完整西餐厅场景对话", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "restaurant", "cn": ""}, {"en": "reservation", "cn": ""}, {"en": "table", "cn": ""}, {"en": "window", "cn": ""}, {"en": "ready", "cn": ""}, {"en": "order", "cn": ""}, {"en": "enjoy", "cn": ""}, {"en": "bill", "cn": ""}, {"en": "cash", "cn": ""}, {"en": "card", "cn": ""}, {"en": "change", "cn": ""}, {"en": "receipt", "cn": ""}, {"en": "service", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "cook", "cn": ""}, {"en": "recipe", "cn": ""}, {"en": "try", "cn": ""}, {"en": "new", "cn": ""}, {"en": "favorite", "cn": ""}, {"en": "share", "cn": ""}, {"en": "friend", "cn": ""}],
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
        patterns: [{"en": "How much is this?", "cn": ""}, {"en": "It's ... dollars.", "cn": ""}, {"en": "That's too expensive.", "cn": ""}],
        words: [{"en": "price", "cn": ""}, {"en": "dollar", "cn": ""}, {"en": "cent", "cn": ""}, {"en": "yuan", "cn": ""}, {"en": "euro", "cn": ""}, {"en": "pound", "cn": ""}, {"en": "expensive", "cn": ""}, {"en": "cheap", "cn": ""}, {"en": "cost", "cn": ""}, {"en": "pay", "cn": ""}, {"en": "buy", "cn": ""}, {"en": "sell", "cn": ""}, {"en": "worth", "cn": ""}, {"en": "value", "cn": ""}, {"en": "afford", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "试穿与尺寸",
        patterns: [{"en": "Can I try this on?", "cn": ""}, {"en": "What size do you wear?", "cn": ""}, {"en": "It's too big/small.", "cn": ""}],
        words: [{"en": "size", "cn": ""}, {"en": "small", "cn": ""}, {"en": "medium", "cn": ""}, {"en": "large", "cn": ""}, {"en": "fit", "cn": ""}, {"en": "tight", "cn": ""}, {"en": "loose", "cn": ""}, {"en": "try on", "cn": ""}, {"en": "fitting room", "cn": ""}, {"en": "mirror", "cn": ""}, {"en": "look", "cn": ""}, {"en": "color", "cn": ""}, {"en": "style", "cn": ""}, {"en": "design", "cn": ""}, {"en": "material", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "讨价还价",
        patterns: [{"en": "Can you give me a discount?", "cn": ""}, {"en": "I'll take it for ...", "cn": ""}, {"en": "What's your best price?", "cn": ""}],
        words: [{"en": "discount", "cn": ""}, {"en": "sale", "cn": ""}, {"en": "offer", "cn": ""}, {"en": "deal", "cn": ""}, {"en": "bargain", "cn": ""}, {"en": "cash", "cn": ""}, {"en": "card", "cn": ""}, {"en": "credit", "cn": ""}, {"en": "receipt", "cn": ""}, {"en": "change", "cn": ""}, {"en": "refund", "cn": ""}, {"en": "exchange", "cn": ""}, {"en": "return", "cn": ""}, {"en": "warranty", "cn": ""}, {"en": "guarantee", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "线上购物",
        patterns: [{"en": "I'm looking for ... on the website.", "cn": ""}, {"en": "Add to cart.", "cn": ""}, {"en": "How long is delivery?", "cn": ""}],
        words: [{"en": "online", "cn": ""}, {"en": "website", "cn": ""}, {"en": "app", "cn": ""}, {"en": "search", "cn": ""}, {"en": "cart", "cn": ""}, {"en": "checkout", "cn": ""}, {"en": "delivery", "cn": ""}, {"en": "shipping", "cn": ""}, {"en": "tracking", "cn": ""}, {"en": "order", "cn": ""}, {"en": "address", "cn": ""}, {"en": "payment", "cn": ""}, {"en": "confirm", "cn": ""}, {"en": "cancel", "cn": ""}, {"en": "review", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "支付方式",
        patterns: [{"en": "Do you take ...?", "cn": ""}, {"en": "I'll pay by ...", "cn": ""}, {"en": "Can I pay in cash?", "cn": ""}],
        words: [{"en": "cash", "cn": ""}, {"en": "card", "cn": ""}, {"en": "credit", "cn": ""}, {"en": "debit", "cn": ""}, {"en": "mobile", "cn": ""}, {"en": "Alipay", "cn": ""}, {"en": "WeChat", "cn": ""}, {"en": "transfer", "cn": ""}, {"en": "account", "cn": ""}, {"en": "balance", "cn": ""}, {"en": "charge", "cn": ""}, {"en": "fee", "cn": ""}, {"en": "interest", "cn": ""}, {"en": "bank", "cn": ""}, {"en": "password", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 商场情景剧",
        patterns: [{"en": "完整购物对话角色扮演", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "shop", "cn": ""}, {"en": "store", "cn": ""}, {"en": "mall", "cn": ""}, {"en": "market", "cn": ""}, {"en": "customer", "cn": ""}, {"en": "clerk", "cn": ""}, {"en": "help", "cn": ""}, {"en": "looking", "cn": ""}, {"en": "interested", "cn": ""}, {"en": "decide", "cn": ""}, {"en": "choose", "cn": ""}, {"en": "wrap", "cn": ""}, {"en": "bag", "cn": ""}, {"en": "thank", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "window", "cn": ""}, {"en": "shopping", "cn": ""}, {"en": "browse", "cn": ""}, {"en": "collection", "cn": ""}, {"en": "new", "cn": ""}, {"en": "latest", "cn": ""}, {"en": "popular", "cn": ""}],
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
        patterns: [{"en": "Excuse me, where is ...?", "cn": ""}, {"en": "How do I get to ...?", "cn": ""}, {"en": "Is it far from here?", "cn": ""}],
        words: [{"en": "excuse", "cn": ""}, {"en": "where", "cn": ""}, {"en": "how", "cn": ""}, {"en": "get to", "cn": ""}, {"en": "far", "cn": ""}, {"en": "near", "cn": ""}, {"en": "close", "cn": ""}, {"en": "next to", "cn": ""}, {"en": "opposite", "cn": ""}, {"en": "between", "cn": ""}, {"en": "corner", "cn": ""}, {"en": "left", "cn": ""}, {"en": "right", "cn": ""}, {"en": "straight", "cn": ""}, {"en": "turn", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "指路表达",
        patterns: [{"en": "Go straight ahead.", "cn": ""}, {"en": "Turn left/right at ...", "cn": ""}, {"en": "It's on your left.", "cn": ""}],
        words: [{"en": "go", "cn": ""}, {"en": "straight", "cn": ""}, {"en": "ahead", "cn": ""}, {"en": "turn", "cn": ""}, {"en": "left", "cn": ""}, {"en": "right", "cn": ""}, {"en": "cross", "cn": ""}, {"en": "street", "cn": ""}, {"en": "road", "cn": ""}, {"en": "traffic light", "cn": ""}, {"en": "intersection", "cn": ""}, {"en": "block", "cn": ""}, {"en": "sign", "cn": ""}, {"en": "map", "cn": ""}, {"en": "landmark", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "乘坐公共交通",
        patterns: [{"en": "Which bus goes to ...?", "cn": ""}, {"en": "Where is the nearest ... station?", "cn": ""}, {"en": "How many stops?", "cn": ""}],
        words: [{"en": "bus", "cn": ""}, {"en": "subway", "cn": ""}, {"en": "metro", "cn": ""}, {"en": "train", "cn": ""}, {"en": "station", "cn": ""}, {"en": "stop", "cn": ""}, {"en": "ticket", "cn": ""}, {"en": "fare", "cn": ""}, {"en": "card", "cn": ""}, {"en": "line", "cn": ""}, {"en": "transfer", "cn": ""}, {"en": "platform", "cn": ""}, {"en": "exit", "cn": ""}, {"en": "entrance", "cn": ""}, {"en": "schedule", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "打车与订车",
        patterns: [{"en": "Take me to ..., please.", "cn": ""}, {"en": "How long will it take?", "cn": ""}, {"en": "Can you wait here?", "cn": ""}],
        words: [{"en": "taxi", "cn": ""}, {"en": "cab", "cn": ""}, {"en": "driver", "cn": ""}, {"en": "address", "cn": ""}, {"en": "airport", "cn": ""}, {"en": "hotel", "cn": ""}, {"en": "downtown", "cn": ""}, {"en": "minute", "cn": ""}, {"en": "kilometer", "cn": ""}, {"en": "mile", "cn": ""}, {"en": "meter", "cn": ""}, {"en": "traffic", "cn": ""}, {"en": "jam", "cn": ""}, {"en": "fast", "cn": ""}, {"en": "safe", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "描述位置",
        patterns: [{"en": "It's near the ...", "cn": ""}, {"en": "Across from ...", "cn": ""}, {"en": "Behind/In front of ...", "cn": ""}],
        words: [{"en": "behind", "cn": ""}, {"en": "front", "cn": ""}, {"en": "beside", "cn": ""}, {"en": "inside", "cn": ""}, {"en": "outside", "cn": ""}, {"en": "above", "cn": ""}, {"en": "below", "cn": ""}, {"en": "north", "cn": ""}, {"en": "south", "cn": ""}, {"en": "east", "cn": ""}, {"en": "west", "cn": ""}, {"en": "direction", "cn": ""}, {"en": "building", "cn": ""}, {"en": "floor", "cn": ""}, {"en": "room", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 城市探索",
        patterns: [{"en": "综合指路对话练习", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "city", "cn": ""}, {"en": "map", "cn": ""}, {"en": "tourist", "cn": ""}, {"en": "lost", "cn": ""}, {"en": "help", "cn": ""}, {"en": "direction", "cn": ""}, {"en": "place", "cn": ""}, {"en": "famous", "cn": ""}, {"en": "museum", "cn": ""}, {"en": "park", "cn": ""}, {"en": "bank", "cn": ""}, {"en": "hospital", "cn": ""}, {"en": "police", "cn": ""}, {"en": "pharmacy", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "trip", "cn": ""}, {"en": "explore", "cn": ""}, {"en": "visit", "cn": ""}, {"en": "new", "cn": ""}, {"en": "place", "cn": ""}, {"en": "adventure", "cn": ""}, {"en": "discover", "cn": ""}],
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
        patterns: [{"en": "Hello, this is ... speaking.", "cn": ""}, {"en": "Can I speak to ...?", "cn": ""}, {"en": "I'll call you back.", "cn": ""}],
        words: [{"en": "hello", "cn": ""}, {"en": "speak", "cn": ""}, {"en": "call", "cn": ""}, {"en": "phone", "cn": ""}, {"en": "number", "cn": ""}, {"en": "dial", "cn": ""}, {"en": "ring", "cn": ""}, {"en": "answer", "cn": ""}, {"en": "message", "cn": ""}, {"en": "voicemail", "cn": ""}, {"en": "text", "cn": ""}, {"en": "busy", "cn": ""}, {"en": "line", "cn": ""}, {"en": "hold", "cn": ""}, {"en": "hang up", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "预约与安排",
        patterns: [{"en": "I'd like to make an appointment.", "cn": ""}, {"en": "Are you free on ...?", "cn": ""}, {"en": "What time works for you?", "cn": ""}],
        words: [{"en": "appointment", "cn": ""}, {"en": "schedule", "cn": ""}, {"en": "free", "cn": ""}, {"en": "busy", "cn": ""}, {"en": "available", "cn": ""}, {"en": "calendar", "cn": ""}, {"en": "book", "cn": ""}, {"en": "confirm", "cn": ""}, {"en": "cancel", "cn": ""}, {"en": "reschedule", "cn": ""}, {"en": "morning", "cn": ""}, {"en": "afternoon", "cn": ""}, {"en": "date", "cn": ""}, {"en": "meeting", "cn": ""}, {"en": "visit", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "请假与告知",
        patterns: [{"en": "I can't come because ...", "cn": ""}, {"en": "I'm sorry, I need to ...", "cn": ""}, {"en": "I'll be late for ...", "cn": ""}],
        words: [{"en": "sorry", "cn": ""}, {"en": "can't", "cn": ""}, {"en": "because", "cn": ""}, {"en": "sick", "cn": ""}, {"en": "emergency", "cn": ""}, {"en": "late", "cn": ""}, {"en": "absent", "cn": ""}, {"en": "reason", "cn": ""}, {"en": "explain", "cn": ""}, {"en": "understand", "cn": ""}, {"en": "problem", "cn": ""}, {"en": "worry", "cn": ""}, {"en": "okay", "cn": ""}, {"en": "fine", "cn": ""}, {"en": "alright", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "邀请与回应",
        patterns: [{"en": "Would you like to ...?", "cn": ""}, {"en": "I'd love to!", "cn": ""}, {"en": "Sorry, I have other plans.", "cn": ""}],
        words: [{"en": "invite", "cn": ""}, {"en": "would", "cn": ""}, {"en": "love", "cn": ""}, {"en": "join", "cn": ""}, {"en": "come", "cn": ""}, {"en": "party", "cn": ""}, {"en": "dinner", "cn": ""}, {"en": "movie", "cn": ""}, {"en": "concert", "cn": ""}, {"en": "together", "cn": ""}, {"en": "maybe", "cn": ""}, {"en": "another", "cn": ""}, {"en": "time", "cn": ""}, {"en": "next", "cn": ""}, {"en": "sounds", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "留言与转达",
        patterns: [{"en": "Can I leave a message?", "cn": ""}, {"en": "Please tell him/her ...", "cn": ""}, {"en": "I'll let him/her know.", "cn": ""}],
        words: [{"en": "message", "cn": ""}, {"en": "leave", "cn": ""}, {"en": "tell", "cn": ""}, {"en": "let", "cn": ""}, {"en": "know", "cn": ""}, {"en": "call back", "cn": ""}, {"en": "urgent", "cn": ""}, {"en": "important", "cn": ""}, {"en": "soon", "cn": ""}, {"en": "possible", "cn": ""}, {"en": "reach", "cn": ""}, {"en": "contact", "cn": ""}, {"en": "email", "cn": ""}, {"en": "send", "cn": ""}, {"en": "receive", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 电话模拟",
        patterns: [{"en": "模拟各种电话场景", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "roleplay", "cn": ""}, {"en": "practice", "cn": ""}, {"en": "situation", "cn": ""}, {"en": "formal", "cn": ""}, {"en": "informal", "cn": ""}, {"en": "polite", "cn": ""}, {"en": "tone", "cn": ""}, {"en": "clear", "cn": ""}, {"en": "slowly", "cn": ""}, {"en": "repeat", "cn": ""}, {"en": "spell", "cn": ""}, {"en": "confirm", "cn": ""}, {"en": "thank", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "chat", "cn": ""}, {"en": "talk", "cn": ""}, {"en": "conversation", "cn": ""}, {"en": "practice", "cn": ""}, {"en": "confident", "cn": ""}, {"en": "fluent", "cn": ""}, {"en": "improve", "cn": ""}],
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
        patterns: [{"en": "I feel ...", "cn": ""}, {"en": "I have a ...", "cn": ""}, {"en": "My ... hurts.", "cn": ""}],
        words: [{"en": "feel", "cn": ""}, {"en": "hurt", "cn": ""}, {"en": "pain", "cn": ""}, {"en": "headache", "cn": ""}, {"en": "stomach", "cn": ""}, {"en": "fever", "cn": ""}, {"en": "cough", "cn": ""}, {"en": "cold", "cn": ""}, {"en": "flu", "cn": ""}, {"en": "sore", "cn": ""}, {"en": "throat", "cn": ""}, {"en": "tired", "cn": ""}, {"en": "weak", "cn": ""}, {"en": "dizzy", "cn": ""}, {"en": "nauseous", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "看医生",
        patterns: [{"en": "What's wrong?", "cn": ""}, {"en": "How long have you had this?", "cn": ""}, {"en": "I need to see a doctor.", "cn": ""}],
        words: [{"en": "doctor", "cn": ""}, {"en": "nurse", "cn": ""}, {"en": "hospital", "cn": ""}, {"en": "clinic", "cn": ""}, {"en": "patient", "cn": ""}, {"en": "waiting", "cn": ""}, {"en": "room", "cn": ""}, {"en": "check", "cn": ""}, {"en": "examine", "cn": ""}, {"en": "temperature", "cn": ""}, {"en": "blood", "cn": ""}, {"en": "pressure", "cn": ""}, {"en": "test", "cn": ""}, {"en": "medicine", "cn": ""}, {"en": "prescription", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "吃药与休息",
        patterns: [{"en": "Take this medicine ... times a day.", "cn": ""}, {"en": "You should rest.", "cn": ""}, {"en": "Drink plenty of water.", "cn": ""}],
        words: [{"en": "medicine", "cn": ""}, {"en": "pill", "cn": ""}, {"en": "tablet", "cn": ""}, {"en": "dose", "cn": ""}, {"en": "daily", "cn": ""}, {"en": "before", "cn": ""}, {"en": "after", "cn": ""}, {"en": "meal", "cn": ""}, {"en": "rest", "cn": ""}, {"en": "sleep", "cn": ""}, {"en": "water", "cn": ""}, {"en": "plenty", "cn": ""}, {"en": "better", "cn": ""}, {"en": "soon", "cn": ""}, {"en": "recover", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "健康建议",
        patterns: [{"en": "You should ...", "cn": ""}, {"en": "You shouldn't ...", "cn": ""}, {"en": "It's important to ...", "cn": ""}],
        words: [{"en": "should", "cn": ""}, {"en": "shouldn't", "cn": ""}, {"en": "exercise", "cn": ""}, {"en": "diet", "cn": ""}, {"en": "healthy", "cn": ""}, {"en": "vegetable", "cn": ""}, {"en": "fruit", "cn": ""}, {"en": "sugar", "cn": ""}, {"en": "salt", "cn": ""}, {"en": "smoke", "cn": ""}, {"en": "alcohol", "cn": ""}, {"en": "sleep", "cn": ""}, {"en": "enough", "cn": ""}, {"en": "stress", "cn": ""}, {"en": "relax", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "谈论健身与运动",
        patterns: [{"en": "I work out ... times a week.", "cn": ""}, {"en": "I go jogging every ...", "cn": ""}, {"en": "I like to stay fit.", "cn": ""}],
        words: [{"en": "exercise", "cn": ""}, {"en": "workout", "cn": ""}, {"en": "gym", "cn": ""}, {"en": "jogging", "cn": ""}, {"en": "running", "cn": ""}, {"en": "swimming", "cn": ""}, {"en": "yoga", "cn": ""}, {"en": "stretch", "cn": ""}, {"en": "weight", "cn": ""}, {"en": "muscle", "cn": ""}, {"en": "strong", "cn": ""}, {"en": "fit", "cn": ""}, {"en": "active", "cn": ""}, {"en": "energy", "cn": ""}, {"en": "habit", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 就诊模拟",
        patterns: [{"en": "完整的看病对话", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "symptom", "cn": ""}, {"en": "describe", "cn": ""}, {"en": "since", "cn": ""}, {"en": "worse", "cn": ""}, {"en": "better", "cn": ""}, {"en": "allergy", "cn": ""}, {"en": "insurance", "cn": ""}, {"en": "appointment", "cn": ""}, {"en": "emergency", "cn": ""}, {"en": "ambulance", "cn": ""}, {"en": "wait", "cn": ""}, {"en": "next", "cn": ""}, {"en": "please", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "walk", "cn": ""}, {"en": "fresh", "cn": ""}, {"en": "air", "cn": ""}, {"en": "body", "cn": ""}, {"en": "mind", "cn": ""}, {"en": "healthy", "cn": ""}, {"en": "happy", "cn": ""}],
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
        patterns: [{"en": "What do you do?", "cn": ""}, {"en": "I'm a ...", "cn": ""}, {"en": "I work for ...", "cn": ""}],
        words: [{"en": "job", "cn": ""}, {"en": "work", "cn": ""}, {"en": "company", "cn": ""}, {"en": "office", "cn": ""}, {"en": "boss", "cn": ""}, {"en": "colleague", "cn": ""}, {"en": "client", "cn": ""}, {"en": "meeting", "cn": ""}, {"en": "project", "cn": ""}, {"en": "deadline", "cn": ""}, {"en": "report", "cn": ""}, {"en": "email", "cn": ""}, {"en": "computer", "cn": ""}, {"en": "desk", "cn": ""}, {"en": "phone", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "描述工作内容",
        patterns: [{"en": "I'm responsible for ...", "cn": ""}, {"en": "My job involves ...", "cn": ""}, {"en": "I work on ...", "cn": ""}],
        words: [{"en": "responsible", "cn": ""}, {"en": "manage", "cn": ""}, {"en": "handle", "cn": ""}, {"en": "create", "cn": ""}, {"en": "design", "cn": ""}, {"en": "sell", "cn": ""}, {"en": "teach", "cn": ""}, {"en": "help", "cn": ""}, {"en": "serve", "cn": ""}, {"en": "build", "cn": ""}, {"en": "write", "cn": ""}, {"en": "check", "cn": ""}, {"en": "organize", "cn": ""}, {"en": "lead", "cn": ""}, {"en": "team", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "面试与求职",
        patterns: [{"en": "I studied ... at university.", "cn": ""}, {"en": "I have experience in ...", "cn": ""}, {"en": "Why do you want this job?", "cn": ""}],
        words: [{"en": "interview", "cn": ""}, {"en": "resume", "cn": ""}, {"en": "experience", "cn": ""}, {"en": "skill", "cn": ""}, {"en": "qualification", "cn": ""}, {"en": "university", "cn": ""}, {"en": "degree", "cn": ""}, {"en": "major", "cn": ""}, {"en": "apply", "cn": ""}, {"en": "position", "cn": ""}, {"en": "salary", "cn": ""}, {"en": "full-time", "cn": ""}, {"en": "part-time", "cn": ""}, {"en": "intern", "cn": ""}, {"en": "hire", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "工作时间与假期",
        patterns: [{"en": "I work from ... to ...", "cn": ""}, {"en": "I have ... days off.", "cn": ""}, {"en": "I'm on vacation next week.", "cn": ""}],
        words: [{"en": "schedule", "cn": ""}, {"en": "shift", "cn": ""}, {"en": "overtime", "cn": ""}, {"en": "break", "cn": ""}, {"en": "lunch", "cn": ""}, {"en": "holiday", "cn": ""}, {"en": "vacation", "cn": ""}, {"en": "day off", "cn": ""}, {"en": "sick leave", "cn": ""}, {"en": "busy", "cn": ""}, {"en": "season", "cn": ""}, {"en": "relax", "cn": ""}, {"en": "travel", "cn": ""}, {"en": "plan", "cn": ""}, {"en": "rest", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "商务邮件",
        patterns: [{"en": "I'm writing to ask about ...", "cn": ""}, {"en": "Please find attached ...", "cn": ""}, {"en": "I look forward to hearing from you.", "cn": ""}],
        words: [{"en": "email", "cn": ""}, {"en": "subject", "cn": ""}, {"en": "attach", "cn": ""}, {"en": "file", "cn": ""}, {"en": "document", "cn": ""}, {"en": "reply", "cn": ""}, {"en": "forward", "cn": ""}, {"en": "send", "cn": ""}, {"en": "receive", "cn": ""}, {"en": "confirm", "cn": ""}, {"en": "request", "cn": ""}, {"en": "inform", "cn": ""}, {"en": "update", "cn": ""}, {"en": "regard", "cn": ""}, {"en": "sincerely", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 模拟面试",
        patterns: [{"en": "完整工作场景对话", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "career", "cn": ""}, {"en": "goal", "cn": ""}, {"en": "future", "cn": ""}, {"en": "promotion", "cn": ""}, {"en": "challenge", "cn": ""}, {"en": "success", "cn": ""}, {"en": "learn", "cn": ""}, {"en": "grow", "cn": ""}, {"en": "oppotunity", "cn": ""}, {"en": "network", "cn": ""}, {"en": "advice", "cn": ""}, {"en": "mentor", "cn": ""}, {"en": "training", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "balance", "cn": ""}, {"en": "life", "cn": ""}, {"en": "hobby", "cn": ""}, {"en": "family", "cn": ""}, {"en": "friend", "cn": ""}, {"en": "enjoy", "cn": ""}, {"en": "weekend", "cn": ""}],
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
        patterns: [{"en": "What subject do you study?", "cn": ""}, {"en": "I'm good at ...", "cn": ""}, {"en": "I need help with ...", "cn": ""}],
        words: [{"en": "school", "cn": ""}, {"en": "class", "cn": ""}, {"en": "classroom", "cn": ""}, {"en": "student", "cn": ""}, {"en": "teacher", "cn": ""}, {"en": "subject", "cn": ""}, {"en": "math", "cn": ""}, {"en": "science", "cn": ""}, {"en": "history", "cn": ""}, {"en": "English", "cn": ""}, {"en": "Chinese", "cn": ""}, {"en": "art", "cn": ""}, {"en": "music", "cn": ""}, {"en": "PE", "cn": ""}, {"en": "exam", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "课堂用语",
        patterns: [{"en": "How do you say ... in English?", "cn": ""}, {"en": "Can you repeat that?", "cn": ""}, {"en": "I don't understand.", "cn": ""}],
        words: [{"en": "say", "cn": ""}, {"en": "repeat", "cn": ""}, {"en": "understand", "cn": ""}, {"en": "mean", "cn": ""}, {"en": "spell", "cn": ""}, {"en": "pronounce", "cn": ""}, {"en": "explain", "cn": ""}, {"en": "question", "cn": ""}, {"en": "answer", "cn": ""}, {"en": "correct", "cn": ""}, {"en": "wrong", "cn": ""}, {"en": "example", "cn": ""}, {"en": "page", "cn": ""}, {"en": "homework", "cn": ""}, {"en": "assignment", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "学习习惯",
        patterns: [{"en": "I usually study at ...", "cn": ""}, {"en": "I learn best by ...", "cn": ""}, {"en": "I need to practice more.", "cn": ""}],
        words: [{"en": "study", "cn": ""}, {"en": "learn", "cn": ""}, {"en": "practice", "cn": ""}, {"en": "review", "cn": ""}, {"en": "memorize", "cn": ""}, {"en": "note", "cn": ""}, {"en": "textbook", "cn": ""}, {"en": "notebook", "cn": ""}, {"en": "dictionary", "cn": ""}, {"en": "online", "cn": ""}, {"en": "video", "cn": ""}, {"en": "audio", "cn": ""}, {"en": "read", "cn": ""}, {"en": "write", "cn": ""}, {"en": "speak", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "图书馆与借书",
        patterns: [{"en": "Where's the library?", "cn": ""}, {"en": "Can I borrow this book?", "cn": ""}, {"en": "When is it due back?", "cn": ""}],
        words: [{"en": "library", "cn": ""}, {"en": "book", "cn": ""}, {"en": "borrow", "cn": ""}, {"en": "return", "cn": ""}, {"en": "due", "cn": ""}, {"en": "late", "cn": ""}, {"en": "fine", "cn": ""}, {"en": "shelf", "cn": ""}, {"en": "section", "cn": ""}, {"en": "quiet", "cn": ""}, {"en": "read", "cn": ""}, {"en": "magazine", "cn": ""}, {"en": "newspaper", "cn": ""}, {"en": "copy", "cn": ""}, {"en": "print", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "考试与成绩",
        patterns: [{"en": "The exam is on ...", "cn": ""}, {"en": "I passed/failed ...", "cn": ""}, {"en": "What's your score?", "cn": ""}],
        words: [{"en": "exam", "cn": ""}, {"en": "test", "cn": ""}, {"en": "quiz", "cn": ""}, {"en": "pass", "cn": ""}, {"en": "fail", "cn": ""}, {"en": "score", "cn": ""}, {"en": "grade", "cn": ""}, {"en": "result", "cn": ""}, {"en": "prepare", "cn": ""}, {"en": "review", "cn": ""}, {"en": "nervous", "cn": ""}, {"en": "confident", "cn": ""}, {"en": "easy", "cn": ""}, {"en": "difficult", "cn": ""}, {"en": "important", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 模拟课堂",
        patterns: [{"en": "完整课堂场景对话", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "education", "cn": ""}, {"en": "knowledge", "cn": ""}, {"en": "skill", "cn": ""}, {"en": "certificate", "cn": ""}, {"en": "diploma", "cn": ""}, {"en": "graduation", "cn": ""}, {"en": "continue", "cn": ""}, {"en": "improve", "cn": ""}, {"en": "mistake", "cn": ""}, {"en": "correct", "cn": ""}, {"en": "try", "cn": ""}, {"en": "again", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "read", "cn": ""}, {"en": "book", "cn": ""}, {"en": "interesting", "cn": ""}, {"en": "topic", "cn": ""}, {"en": "curious", "cn": ""}, {"en": "explore", "cn": ""}, {"en": "discover", "cn": ""}],
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
        patterns: [{"en": "I live in a ...", "cn": ""}, {"en": "My house has ...", "cn": ""}, {"en": "There is/are ... in my room.", "cn": ""}],
        words: [{"en": "house", "cn": ""}, {"en": "apartment", "cn": ""}, {"en": "flat", "cn": ""}, {"en": "room", "cn": ""}, {"en": "living room", "cn": ""}, {"en": "bedroom", "cn": ""}, {"en": "kitchen", "cn": ""}, {"en": "bathroom", "cn": ""}, {"en": "balcony", "cn": ""}, {"en": "garden", "cn": ""}, {"en": "floor", "cn": ""}, {"en": "wall", "cn": ""}, {"en": "window", "cn": ""}, {"en": "door", "cn": ""}, {"en": "ceiling", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "家具与物品位置",
        patterns: [{"en": "The ... is next to the ...", "cn": ""}, {"en": "Where should I put ...?", "cn": ""}, {"en": "It belongs in the ...", "cn": ""}],
        words: [{"en": "sofa", "cn": ""}, {"en": "table", "cn": ""}, {"en": "chair", "cn": ""}, {"en": "bed", "cn": ""}, {"en": "desk", "cn": ""}, {"en": "shelf", "cn": ""}, {"en": "cabinet", "cn": ""}, {"en": "closet", "cn": ""}, {"en": "drawer", "cn": ""}, {"en": "lamp", "cn": ""}, {"en": "mirror", "cn": ""}, {"en": "carpet", "cn": ""}, {"en": "curtain", "cn": ""}, {"en": "pillow", "cn": ""}, {"en": "blanket", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "租房与买房",
        patterns: [{"en": "I'm looking for a place to rent.", "cn": ""}, {"en": "How much is the rent?", "cn": ""}, {"en": "Is the deposit included?", "cn": ""}],
        words: [{"en": "rent", "cn": ""}, {"en": "buy", "cn": ""}, {"en": "deposit", "cn": ""}, {"en": "lease", "cn": ""}, {"en": "contract", "cn": ""}, {"en": "landlord", "cn": ""}, {"en": "tenant", "cn": ""}, {"en": "roommate", "cn": ""}, {"en": "neighbor", "cn": ""}, {"en": "price", "cn": ""}, {"en": "utilities", "cn": ""}, {"en": "furnished", "cn": ""}, {"en": "location", "cn": ""}, {"en": "quiet", "cn": ""}, {"en": "safe", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "家务与清洁",
        patterns: [{"en": "I need to clean the ...", "cn": ""}, {"en": "Can you help me with ...?", "cn": ""}, {"en": "Don't make a mess.", "cn": ""}],
        words: [{"en": "clean", "cn": ""}, {"en": "wash", "cn": ""}, {"en": "sweep", "cn": ""}, {"en": "mop", "cn": ""}, {"en": "dust", "cn": ""}, {"en": "vacuum", "cn": ""}, {"en": "laundry", "cn": ""}, {"en": "iron", "cn": ""}, {"en": "fold", "cn": ""}, {"en": "hang", "cn": ""}, {"en": "tidy", "cn": ""}, {"en": "mess", "cn": ""}, {"en": "organize", "cn": ""}, {"en": "trash", "cn": ""}, {"en": "recycle", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "描述住所周边",
        patterns: [{"en": "There's a ... near my house.", "cn": ""}, {"en": "It takes ... minutes to ...", "cn": ""}, {"en": "The neighborhood is ...", "cn": ""}],
        words: [{"en": "neighborhood", "cn": ""}, {"en": "nearby", "cn": ""}, {"en": "park", "cn": ""}, {"en": "store", "cn": ""}, {"en": "supermarket", "cn": ""}, {"en": "school", "cn": ""}, {"en": "bus stop", "cn": ""}, {"en": "quiet", "cn": ""}, {"en": "noisy", "cn": ""}, {"en": "safe", "cn": ""}, {"en": "convenient", "cn": ""}, {"en": "downtown", "cn": ""}, {"en": "suburb", "cn": ""}, {"en": "countryside", "cn": ""}, {"en": "view", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 找房模拟",
        patterns: [{"en": "完整租房场景对话", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "house", "cn": ""}, {"en": "home", "cn": ""}, {"en": "comfortable", "cn": ""}, {"en": "cozy", "cn": ""}, {"en": "spacious", "cn": ""}, {"en": "bright", "cn": ""}, {"en": "dark", "cn": ""}, {"en": "old", "cn": ""}, {"en": "new", "cn": ""}, {"en": "renovate", "cn": ""}, {"en": "decorate", "cn": ""}, {"en": "paint", "cn": ""}, {"en": "move", "cn": ""}, {"en": "settle", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "home", "cn": ""}, {"en": "comfort", "cn": ""}, {"en": "enjoy", "cn": ""}, {"en": "decorate", "cn": ""}, {"en": "personal", "cn": ""}, {"en": "space", "cn": ""}, {"en": "creative", "cn": ""}],
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
        patterns: [{"en": "What are you wearing?", "cn": ""}, {"en": "I'm wearing ...", "cn": ""}, {"en": "He/She has a ... on.", "cn": ""}],
        words: [{"en": "wear", "cn": ""}, {"en": "clothes", "cn": ""}, {"en": "shirt", "cn": ""}, {"en": "pants", "cn": ""}, {"en": "dress", "cn": ""}, {"en": "skirt", "cn": ""}, {"en": "jacket", "cn": ""}, {"en": "coat", "cn": ""}, {"en": "shoe", "cn": ""}, {"en": "hat", "cn": ""}, {"en": "sock", "cn": ""}, {"en": "sweater", "cn": ""}, {"en": "uniform", "cn": ""}, {"en": "casual", "cn": ""}, {"en": "formal", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "颜色与搭配",
        patterns: [{"en": "What color is ...?", "cn": ""}, {"en": "It goes well with ...", "cn": ""}, {"en": "This matches your ...", "cn": ""}],
        words: [{"en": "red", "cn": ""}, {"en": "blue", "cn": ""}, {"en": "green", "cn": ""}, {"en": "yellow", "cn": ""}, {"en": "black", "cn": ""}, {"en": "white", "cn": ""}, {"en": "gray", "cn": ""}, {"en": "pink", "cn": ""}, {"en": "purple", "cn": ""}, {"en": "orange", "cn": ""}, {"en": "brown", "cn": ""}, {"en": "dark", "cn": ""}, {"en": "light", "cn": ""}, {"en": "bright", "cn": ""}, {"en": "match", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "洗衣与保养",
        patterns: [{"en": "How should I wash this?", "cn": ""}, {"en": "It's machine washable.", "cn": ""}, {"en": "Don't use hot water.", "cn": ""}],
        words: [{"en": "wash", "cn": ""}, {"en": "dry", "cn": ""}, {"en": "iron", "cn": ""}, {"en": "shrink", "cn": ""}, {"en": "fade", "cn": ""}, {"en": "stain", "cn": ""}, {"en": "detergent", "cn": ""}, {"en": "bleach", "cn": ""}, {"en": "cold", "cn": ""}, {"en": "warm", "cn": ""}, {"en": "hot", "cn": ""}, {"en": "machine", "cn": ""}, {"en": "hand", "cn": ""}, {"en": "hang", "cn": ""}, {"en": "fold", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "时尚与风格",
        patterns: [{"en": "I like your style.", "cn": ""}, {"en": "Where did you get that?", "cn": ""}, {"en": "This is very fashionable.", "cn": ""}],
        words: [{"en": "style", "cn": ""}, {"en": "fashion", "cn": ""}, {"en": "trend", "cn": ""}, {"en": "designer", "cn": ""}, {"en": "brand", "cn": ""}, {"en": "new", "cn": ""}, {"en": "old", "cn": ""}, {"en": "vintage", "cn": ""}, {"en": "modern", "cn": ""}, {"en": "classic", "cn": ""}, {"en": "elegant", "cn": ""}, {"en": "simple", "cn": ""}, {"en": "comfortable", "cn": ""}, {"en": "popular", "cn": ""}, {"en": "unique", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "在服装店",
        patterns: [{"en": "Do you have this in ...?", "cn": ""}, {"en": "I'm just browsing.", "cn": ""}, {"en": "Can I get this in a larger size?", "cn": ""}],
        words: [{"en": "shop", "cn": ""}, {"en": "browse", "cn": ""}, {"en": "size", "cn": ""}, {"en": "fit", "cn": ""}, {"en": "tight", "cn": ""}, {"en": "loose", "cn": ""}, {"en": "large", "cn": ""}, {"en": "small", "cn": ""}, {"en": "sale", "cn": ""}, {"en": "price tag", "cn": ""}, {"en": "fitting room", "cn": ""}, {"en": "exchange", "cn": ""}, {"en": "refund", "cn": ""}, {"en": "receipt", "cn": ""}, {"en": "bag", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 购物搭配",
        patterns: [{"en": "完整服装店对话", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "outfit", "cn": ""}, {"en": "dress", "cn": ""}, {"en": "up", "cn": ""}, {"en": "down", "cn": ""}, {"en": "occasion", "cn": ""}, {"en": "wedding", "cn": ""}, {"en": "party", "cn": ""}, {"en": "work", "cn": ""}, {"en": "casual", "cn": ""}, {"en": "sport", "cn": ""}, {"en": "weather", "cn": ""}, {"en": "season", "cn": ""}, {"en": "favorite", "cn": ""}, {"en": "wear", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "style", "cn": ""}, {"en": "own", "cn": ""}, {"en": "express", "cn": ""}, {"en": "confident", "cn": ""}, {"en": "beautiful", "cn": ""}, {"en": "handsome", "cn": ""}, {"en": "mirror", "cn": ""}],
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
        patterns: [{"en": "What do you do in your free time?", "cn": ""}, {"en": "I enjoy ...", "cn": ""}, {"en": "My hobby is ...", "cn": ""}],
        words: [{"en": "hobby", "cn": ""}, {"en": "free time", "cn": ""}, {"en": "enjoy", "cn": ""}, {"en": "like", "cn": ""}, {"en": "love", "cn": ""}, {"en": "weekend", "cn": ""}, {"en": "after work", "cn": ""}, {"en": "relax", "cn": ""}, {"en": "fun", "cn": ""}, {"en": "interesting", "cn": ""}, {"en": "boring", "cn": ""}, {"en": "active", "cn": ""}, {"en": "lazy", "cn": ""}, {"en": "creative", "cn": ""}, {"en": "social", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "体育项目",
        patterns: [{"en": "Do you play ...?", "cn": ""}, {"en": "I've been playing for ... years.", "cn": ""}, {"en": "I'm a fan of ...", "cn": ""}],
        words: [{"en": "sport", "cn": ""}, {"en": "soccer", "cn": ""}, {"en": "basketball", "cn": ""}, {"en": "tennis", "cn": ""}, {"en": "swimming", "cn": ""}, {"en": "running", "cn": ""}, {"en": "cycling", "cn": ""}, {"en": "golf", "cn": ""}, {"en": "volleyball", "cn": ""}, {"en": "table tennis", "cn": ""}, {"en": "badminton", "cn": ""}, {"en": "team", "cn": ""}, {"en": "player", "cn": ""}, {"en": "coach", "cn": ""}, {"en": "game", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "健身与锻炼",
        patterns: [{"en": "How often do you work out?", "cn": ""}, {"en": "I go to the gym ...", "cn": ""}, {"en": "My routine includes ...", "cn": ""}],
        words: [{"en": "gym", "cn": ""}, {"en": "work out", "cn": ""}, {"en": "routine", "cn": ""}, {"en": "cardio", "cn": ""}, {"en": "strength", "cn": ""}, {"en": "stretch", "cn": ""}, {"en": "warm up", "cn": ""}, {"en": "cool down", "cn": ""}, {"en": "muscle", "cn": ""}, {"en": "fitness", "cn": ""}, {"en": "health", "cn": ""}, {"en": "sweat", "cn": ""}, {"en": "tired", "cn": ""}, {"en": "energy", "cn": ""}, {"en": "goal", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "观看比赛",
        patterns: [{"en": "Did you watch the game?", "cn": ""}, {"en": "What a great match!", "cn": ""}, {"en": "Who won?", "cn": ""}],
        words: [{"en": "game", "cn": ""}, {"en": "match", "cn": ""}, {"en": "team", "cn": ""}, {"en": "score", "cn": ""}, {"en": "win", "cn": ""}, {"en": "lose", "cn": ""}, {"en": "goal", "cn": ""}, {"en": "point", "cn": ""}, {"en": "player", "cn": ""}, {"en": "referee", "cn": ""}, {"en": "stadium", "cn": ""}, {"en": "crowd", "cn": ""}, {"en": "excited", "cn": ""}, {"en": "cheer", "cn": ""}, {"en": "disappointed", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "户外活动",
        patterns: [{"en": "Let's go ...ing!", "cn": ""}, {"en": "Have you ever tried ...?", "cn": ""}, {"en": "It's a great way to ...", "cn": ""}],
        words: [{"en": "hiking", "cn": ""}, {"en": "camping", "cn": ""}, {"en": "fishing", "cn": ""}, {"en": "climbing", "cn": ""}, {"en": "surfing", "cn": ""}, {"en": "skiing", "cn": ""}, {"en": "skating", "cn": ""}, {"en": "picnic", "cn": ""}, {"en": "nature", "cn": ""}, {"en": "outdoor", "cn": ""}, {"en": "adventure", "cn": ""}, {"en": "weekend", "cn": ""}, {"en": "weather", "cn": ""}, {"en": "equipment", "cn": ""}, {"en": "safety", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 兴趣分享",
        patterns: [{"en": "分享你的爱好", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "passion", "cn": ""}, {"en": "talent", "cn": ""}, {"en": "practice", "cn": ""}, {"en": "improve", "cn": ""}, {"en": "challenge", "cn": ""}, {"en": "competition", "cn": ""}, {"en": "medal", "cn": ""}, {"en": "prize", "cn": ""}, {"en": "join", "cn": ""}, {"en": "club", "cn": ""}, {"en": "community", "cn": ""}, {"en": "share", "cn": ""}, {"en": "together", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "try", "cn": ""}, {"en": "new", "cn": ""}, {"en": "activity", "cn": ""}, {"en": "fun", "cn": ""}, {"en": "health", "cn": ""}, {"en": "happy", "cn": ""}, {"en": "active", "cn": ""}],
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
        patterns: [{"en": "I'd like to book a ...", "cn": ""}, {"en": "When is the next flight to ...?", "cn": ""}, {"en": "Round trip or one way?", "cn": ""}],
        words: [{"en": "book", "cn": ""}, {"en": "flight", "cn": ""}, {"en": "hotel", "cn": ""}, {"en": "ticket", "cn": ""}, {"en": "passport", "cn": ""}, {"en": "visa", "cn": ""}, {"en": "reservation", "cn": ""}, {"en": "confirm", "cn": ""}, {"en": "cancel", "cn": ""}, {"en": "date", "cn": ""}, {"en": "depart", "cn": ""}, {"en": "arrive", "cn": ""}, {"en": "return", "cn": ""}, {"en": "one way", "cn": ""}, {"en": "round trip", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "在机场",
        patterns: [{"en": "Where is the check-in counter?", "cn": ""}, {"en": "Is this your bag?", "cn": ""}, {"en": "Gate number ...", "cn": ""}],
        words: [{"en": "airport", "cn": ""}, {"en": "check-in", "cn": ""}, {"en": "counter", "cn": ""}, {"en": "boarding", "cn": ""}, {"en": "pass", "cn": ""}, {"en": "gate", "cn": ""}, {"en": "baggage", "cn": ""}, {"en": "luggage", "cn": ""}, {"en": "carry-on", "cn": ""}, {"en": "weight", "cn": ""}, {"en": "overweight", "cn": ""}, {"en": "security", "cn": ""}, {"en": "scan", "cn": ""}, {"en": "delay", "cn": ""}, {"en": "announcement", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "问路与导航",
        patterns: [{"en": "How do I get to the city center?", "cn": ""}, {"en": "Is there a bus from the airport?", "cn": ""}, {"en": "Show me on the map.", "cn": ""}],
        words: [{"en": "center", "cn": ""}, {"en": "downtown", "cn": ""}, {"en": "bus", "cn": ""}, {"en": "train", "cn": ""}, {"en": "subway", "cn": ""}, {"en": "map", "cn": ""}, {"en": "directions", "cn": ""}, {"en": "distance", "cn": ""}, {"en": "walk", "cn": ""}, {"en": "drive", "cn": ""}, {"en": "taxi", "cn": ""}, {"en": "ride", "cn": ""}, {"en": "share", "cn": ""}, {"en": "app", "cn": ""}, {"en": "GPS", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "在酒店",
        patterns: [{"en": "I have a reservation under ...", "cn": ""}, {"en": "What time is check-out?", "cn": ""}, {"en": "The AC isn't working.", "cn": ""}],
        words: [{"en": "hotel", "cn": ""}, {"en": "reception", "cn": ""}, {"en": "check-in", "cn": ""}, {"en": "check-out", "cn": ""}, {"en": "key card", "cn": ""}, {"en": "room number", "cn": ""}, {"en": "elevator", "cn": ""}, {"en": "floor", "cn": ""}, {"en": "breakfast", "cn": ""}, {"en": "included", "cn": ""}, {"en": "Wi-Fi", "cn": ""}, {"en": "password", "cn": ""}, {"en": "towel", "cn": ""}, {"en": "service", "cn": ""}, {"en": "complaint", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "谈论旅行经历",
        patterns: [{"en": "I've been to ...", "cn": ""}, {"en": "The best part was ...", "cn": ""}, {"en": "I'd love to go back to ...", "cn": ""}],
        words: [{"en": "trip", "cn": ""}, {"en": "travel", "cn": ""}, {"en": "abroad", "cn": ""}, {"en": "domestic", "cn": ""}, {"en": "sightseeing", "cn": ""}, {"en": "landmark", "cn": ""}, {"en": "museum", "cn": ""}, {"en": "beach", "cn": ""}, {"en": "mountain", "cn": ""}, {"en": "culture", "cn": ""}, {"en": "local", "cn": ""}, {"en": "food", "cn": ""}, {"en": "people", "cn": ""}, {"en": "memory", "cn": ""}, {"en": "photo", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 模拟出行",
        patterns: [{"en": "完整旅行场景", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "plan", "cn": ""}, {"en": "pack", "cn": ""}, {"en": "suitcase", "cn": ""}, {"en": "itinerary", "cn": ""}, {"en": "budget", "cn": ""}, {"en": "insurance", "cn": ""}, {"en": "exchange", "cn": ""}, {"en": "rate", "cn": ""}, {"en": "currency", "cn": ""}, {"en": "customs", "cn": ""}, {"en": "declare", "cn": ""}, {"en": "duty-free", "cn": ""}, {"en": "souvenir", "cn": ""}, {"en": "postcard", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "dream", "cn": ""}, {"en": "destination", "cn": ""}, {"en": "future", "cn": ""}, {"en": "trip", "cn": ""}, {"en": "explore", "cn": ""}, {"en": "world", "cn": ""}, {"en": "adventure", "cn": ""}],
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
        patterns: [{"en": "What's your favorite holiday?", "cn": ""}, {"en": "We celebrate ... by ...", "cn": ""}, {"en": "It's a tradition to ...", "cn": ""}],
        words: [{"en": "holiday", "cn": ""}, {"en": "festival", "cn": ""}, {"en": "celebrate", "cn": ""}, {"en": "tradition", "cn": ""}, {"en": "custom", "cn": ""}, {"en": "New Year", "cn": ""}, {"en": "Christmas", "cn": ""}, {"en": "Spring Festival", "cn": ""}, {"en": "Mid-Autumn", "cn": ""}, {"en": "National Day", "cn": ""}, {"en": "special", "cn": ""}, {"en": "gift", "cn": ""}, {"en": "party", "cn": ""}, {"en": "family", "cn": ""}, {"en": "friend", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "生日派对",
        patterns: [{"en": "When is your birthday?", "cn": ""}, {"en": "I'm turning ... this year.", "cn": ""}, {"en": "Surprise!", "cn": ""}],
        words: [{"en": "birthday", "cn": ""}, {"en": "party", "cn": ""}, {"en": "surprise", "cn": ""}, {"en": "invite", "cn": ""}, {"en": "guest", "cn": ""}, {"en": "host", "cn": ""}, {"en": "decoration", "cn": ""}, {"en": "balloon", "cn": ""}, {"en": "streamer", "cn": ""}, {"en": "birthday cake", "cn": ""}, {"en": "candle", "cn": ""}, {"en": "blow", "cn": ""}, {"en": "wish", "cn": ""}, {"en": "present", "cn": ""}, {"en": "card", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "送礼与祝福",
        patterns: [{"en": "This is for you.", "cn": ""}, {"en": "I hope you like it.", "cn": ""}, {"en": "Best wishes for ...", "cn": ""}],
        words: [{"en": "gift", "cn": ""}, {"en": "present", "cn": ""}, {"en": "box", "cn": ""}, {"en": "wrap", "cn": ""}, {"en": "ribbon", "cn": ""}, {"en": "card", "cn": ""}, {"en": "message", "cn": ""}, {"en": "hope", "cn": ""}, {"en": "wish", "cn": ""}, {"en": "congratulations", "cn": ""}, {"en": "good luck", "cn": ""}, {"en": "best wishes", "cn": ""}, {"en": "thank", "cn": ""}, {"en": "thoughtful", "cn": ""}, {"en": "generous", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "描述庆祝活动",
        patterns: [{"en": "We had a great time!", "cn": ""}, {"en": "Everyone enjoyed ...", "cn": ""}, {"en": "The highlight was ...", "cn": ""}],
        words: [{"en": "celebrate", "cn": ""}, {"en": "party", "cn": ""}, {"en": "dinner", "cn": ""}, {"en": "dance", "cn": ""}, {"en": "music", "cn": ""}, {"en": "firework", "cn": ""}, {"en": "lantern", "cn": ""}, {"en": "decoration", "cn": ""}, {"en": "feast", "cn": ""}, {"en": "drink", "cn": ""}, {"en": "toast", "cn": ""}, {"en": "cheer", "cn": ""}, {"en": "fun", "cn": ""}, {"en": "laugh", "cn": ""}, {"en": "enjoy", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "表达祝福与感谢",
        patterns: [{"en": "Merry Christmas!", "cn": ""}, {"en": "Happy New Year!", "cn": ""}, {"en": "Thank you for coming.", "cn": ""}],
        words: [{"en": "merry", "cn": ""}, {"en": "happy", "cn": ""}, {"en": "blessing", "cn": ""}, {"en": "peace", "cn": ""}, {"en": "joy", "cn": ""}, {"en": "health", "cn": ""}, {"en": "prosperity", "cn": ""}, {"en": "fortune", "cn": ""}, {"en": "luck", "cn": ""}, {"en": "thankful", "cn": ""}, {"en": "grateful", "cn": ""}, {"en": "appreciate", "cn": ""}, {"en": "kind", "cn": ""}, {"en": "lovely", "cn": ""}, {"en": "wonderful", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 节日祝福",
        patterns: [{"en": "模拟各种节日场景", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "calendar", "cn": ""}, {"en": "event", "cn": ""}, {"en": "plan", "cn": ""}, {"en": "prepare", "cn": ""}, {"en": "invitation", "cn": ""}, {"en": "RSVP", "cn": ""}, {"en": "dress", "cn": ""}, {"en": "code", "cn": ""}, {"en": "bring", "cn": ""}, {"en": "dish", "cn": ""}, {"en": "share", "cn": ""}, {"en": "together", "cn": ""}, {"en": "memory", "cn": ""}, {"en": "special", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "enjoy", "cn": ""}, {"en": "festival", "cn": ""}, {"en": "spirit", "cn": ""}, {"en": "family", "cn": ""}, {"en": "friend", "cn": ""}, {"en": "tradition", "cn": ""}, {"en": "culture", "cn": ""}],
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
        patterns: [{"en": "What kind of phone do you have?", "cn": ""}, {"en": "My laptop is ...", "cn": ""}, {"en": "The battery lasts ...", "cn": ""}],
        words: [{"en": "phone", "cn": ""}, {"en": "laptop", "cn": ""}, {"en": "tablet", "cn": ""}, {"en": "screen", "cn": ""}, {"en": "battery", "cn": ""}, {"en": "charger", "cn": ""}, {"en": "headphone", "cn": ""}, {"en": "speaker", "cn": ""}, {"en": "camera", "cn": ""}, {"en": "keyboard", "cn": ""}, {"en": "mouse", "cn": ""}, {"en": "touch", "cn": ""}, {"en": "button", "cn": ""}, {"en": "power", "cn": ""}, {"en": "cable", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "使用软件与APP",
        patterns: [{"en": "Have you tried this app?", "cn": ""}, {"en": "It's very user-friendly.", "cn": ""}, {"en": "You can download it for free.", "cn": ""}],
        words: [{"en": "app", "cn": ""}, {"en": "software", "cn": ""}, {"en": "download", "cn": ""}, {"en": "install", "cn": ""}, {"en": "update", "cn": ""}, {"en": "version", "cn": ""}, {"en": "account", "cn": ""}, {"en": "login", "cn": ""}, {"en": "password", "cn": ""}, {"en": "setting", "cn": ""}, {"en": "profile", "cn": ""}, {"en": "notification", "cn": ""}, {"en": "share", "cn": ""}, {"en": "upload", "cn": ""}, {"en": "delete", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "上网与搜索",
        patterns: [{"en": "I googled it.", "cn": ""}, {"en": "Search for ... online.", "cn": ""}, {"en": "The website is ...", "cn": ""}],
        words: [{"en": "internet", "cn": ""}, {"en": "online", "cn": ""}, {"en": "search", "cn": ""}, {"en": "website", "cn": ""}, {"en": "link", "cn": ""}, {"en": "click", "cn": ""}, {"en": "browse", "cn": ""}, {"en": "scroll", "cn": ""}, {"en": "page", "cn": ""}, {"en": "result", "cn": ""}, {"en": "information", "cn": ""}, {"en": "news", "cn": ""}, {"en": "blog", "cn": ""}, {"en": "video", "cn": ""}, {"en": "post", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "社交媒体",
        patterns: [{"en": "Are you on ...?", "cn": ""}, {"en": "Follow me on ...", "cn": ""}, {"en": "I posted a photo on ...", "cn": ""}],
        words: [{"en": "social media", "cn": ""}, {"en": "follow", "cn": ""}, {"en": "friend", "cn": ""}, {"en": "like", "cn": ""}, {"en": "comment", "cn": ""}, {"en": "share", "cn": ""}, {"en": "post", "cn": ""}, {"en": "story", "cn": ""}, {"en": "feed", "cn": ""}, {"en": "trending", "cn": ""}, {"en": "viral", "cn": ""}, {"en": "hashtag", "cn": ""}, {"en": "influencer", "cn": ""}, {"en": "subscribe", "cn": ""}, {"en": "channel", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "科技问题与求助",
        patterns: [{"en": "My phone froze.", "cn": ""}, {"en": "It's not connecting to Wi-Fi.", "cn": ""}, {"en": "Have you tried restarting?", "cn": ""}],
        words: [{"en": "broken", "cn": ""}, {"en": "fix", "cn": ""}, {"en": "restart", "cn": ""}, {"en": "reboot", "cn": ""}, {"en": "update", "cn": ""}, {"en": "connect", "cn": ""}, {"en": "Wi-Fi", "cn": ""}, {"en": "Bluetooth", "cn": ""}, {"en": "signal", "cn": ""}, {"en": "data", "cn": ""}, {"en": "storage", "cn": ""}, {"en": "memory", "cn": ""}, {"en": "backup", "cn": ""}, {"en": "restore", "cn": ""}, {"en": "tech support", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 科技话题讨论",
        patterns: [{"en": "讨论科技对生活的影响", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "technology", "cn": ""}, {"en": "digital", "cn": ""}, {"en": "smart", "cn": ""}, {"en": "device", "cn": ""}, {"en": "gadget", "cn": ""}, {"en": "innovation", "cn": ""}, {"en": "future", "cn": ""}, {"en": "change", "cn": ""}, {"en": "convenient", "cn": ""}, {"en": "addictive", "cn": ""}, {"en": "balance", "cn": ""}, {"en": "screen time", "cn": ""}, {"en": "privacy", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "unplug", "cn": ""}, {"en": "disconnect", "cn": ""}, {"en": "offline", "cn": ""}, {"en": "nature", "cn": ""}, {"en": "real", "cn": ""}, {"en": "world", "cn": ""}, {"en": "balance", "cn": ""}],
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
        patterns: [{"en": "Did you hear about ...?", "cn": ""}, {"en": "I read in the news that ...", "cn": ""}, {"en": "What's happening in ...?", "cn": ""}],
        words: [{"en": "news", "cn": ""}, {"en": "headline", "cn": ""}, {"en": "article", "cn": ""}, {"en": "report", "cn": ""}, {"en": "journalist", "cn": ""}, {"en": "source", "cn": ""}, {"en": "channel", "cn": ""}, {"en": "broadcast", "cn": ""}, {"en": "breaking", "cn": ""}, {"en": "latest", "cn": ""}, {"en": "update", "cn": ""}, {"en": "event", "cn": ""}, {"en": "happen", "cn": ""}, {"en": "world", "cn": ""}, {"en": "local", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "表达观点",
        patterns: [{"en": "In my opinion ...", "cn": ""}, {"en": "I agree/disagree because ...", "cn": ""}, {"en": "What do you think about ...?", "cn": ""}],
        words: [{"en": "opinion", "cn": ""}, {"en": "agree", "cn": ""}, {"en": "disagree", "cn": ""}, {"en": "think", "cn": ""}, {"en": "believe", "cn": ""}, {"en": "feel", "cn": ""}, {"en": "point of view", "cn": ""}, {"en": "reason", "cn": ""}, {"en": "because", "cn": ""}, {"en": "example", "cn": ""}, {"en": "fact", "cn": ""}, {"en": "truth", "cn": ""}, {"en": "fake", "cn": ""}, {"en": "real", "cn": ""}, {"en": "evidence", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "讨论电视与节目",
        patterns: [{"en": "What shows do you watch?", "cn": ""}, {"en": "I'm into ... lately.", "cn": ""}, {"en": "Have you seen the new ...?", "cn": ""}],
        words: [{"en": "show", "cn": ""}, {"en": "series", "cn": ""}, {"en": "episode", "cn": ""}, {"en": "season", "cn": ""}, {"en": "documentary", "cn": ""}, {"en": "reality", "cn": ""}, {"en": "comedy", "cn": ""}, {"en": "drama", "cn": ""}, {"en": "talk show", "cn": ""}, {"en": "host", "cn": ""}, {"en": "guest", "cn": ""}, {"en": "channel", "cn": ""}, {"en": "stream", "cn": ""}, {"en": "watch", "cn": ""}, {"en": "recommend", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "读报纸与杂志",
        patterns: [{"en": "Is there anything interesting?", "cn": ""}, {"en": "The article says ...", "cn": ""}, {"en": "I subscribe to ...", "cn": ""}],
        words: [{"en": "newspaper", "cn": ""}, {"en": "magazine", "cn": ""}, {"en": "article", "cn": ""}, {"en": "column", "cn": ""}, {"en": "editorial", "cn": ""}, {"en": "interview", "cn": ""}, {"en": "feature", "cn": ""}, {"en": "cover", "cn": ""}, {"en": "issue", "cn": ""}, {"en": "weekly", "cn": ""}, {"en": "monthly", "cn": ""}, {"en": "subscribe", "cn": ""}, {"en": "delivery", "cn": ""}, {"en": "digital", "cn": ""}, {"en": "print", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "辨别信息真伪",
        patterns: [{"en": "Is that true?", "cn": ""}, {"en": "Where did you hear that?", "cn": ""}, {"en": "I need to fact-check.", "cn": ""}],
        words: [{"en": "true", "cn": ""}, {"en": "false", "cn": ""}, {"en": "fact", "cn": ""}, {"en": "opinion", "cn": ""}, {"en": "rumor", "cn": ""}, {"en": "hoax", "cn": ""}, {"en": "check", "cn": ""}, {"en": "verify", "cn": ""}, {"en": "source", "cn": ""}, {"en": "reliable", "cn": ""}, {"en": "doubt", "cn": ""}, {"en": "question", "cn": ""}, {"en": "critical", "cn": ""}, {"en": "thinking", "cn": ""}, {"en": "research", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 新闻播报模拟",
        patterns: [{"en": "扮演新闻主播", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "media", "cn": ""}, {"en": "press", "cn": ""}, {"en": "freedom", "cn": ""}, {"en": "censor", "cn": ""}, {"en": "bias", "cn": ""}, {"en": "objective", "cn": ""}, {"en": "balance", "cn": ""}, {"en": "inform", "cn": ""}, {"en": "educate", "cn": ""}, {"en": "entertain", "cn": ""}, {"en": "audience", "cn": ""}, {"en": "public", "cn": ""}, {"en": "responsibility", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "read", "cn": ""}, {"en": "listen", "cn": ""}, {"en": "learn", "cn": ""}, {"en": "current", "cn": ""}, {"en": "event", "cn": ""}, {"en": "aware", "cn": ""}, {"en": "informed", "cn": ""}],
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
        patterns: [{"en": "I feel ... about ...", "cn": ""}, {"en": "It makes me feel ...", "cn": ""}, {"en": "I'm so ... right now!", "cn": ""}],
        words: [{"en": "happy", "cn": ""}, {"en": "sad", "cn": ""}, {"en": "angry", "cn": ""}, {"en": "excited", "cn": ""}, {"en": "worried", "cn": ""}, {"en": "scared", "cn": ""}, {"en": "surprised", "cn": ""}, {"en": "bored", "cn": ""}, {"en": "confused", "cn": ""}, {"en": "proud", "cn": ""}, {"en": "disappointed", "cn": ""}, {"en": "nervous", "cn": ""}, {"en": "calm", "cn": ""}, {"en": "jealous", "cn": ""}, {"en": "hopeful", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "给予建议",
        patterns: [{"en": "You should ...", "cn": ""}, {"en": "Why don't you ...?", "cn": ""}, {"en": "Have you thought about ...?", "cn": ""}],
        words: [{"en": "should", "cn": ""}, {"en": "suggest", "cn": ""}, {"en": "recommend", "cn": ""}, {"en": "advice", "cn": ""}, {"en": "tip", "cn": ""}, {"en": "idea", "cn": ""}, {"en": "try", "cn": ""}, {"en": "consider", "cn": ""}, {"en": "maybe", "cn": ""}, {"en": "perhaps", "cn": ""}, {"en": "better", "cn": ""}, {"en": "best", "cn": ""}, {"en": "worst", "cn": ""}, {"en": "option", "cn": ""}, {"en": "choice", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "同意与反对",
        patterns: [{"en": "I totally agree.", "cn": ""}, {"en": "I'm not so sure.", "cn": ""}, {"en": "I see your point, but ...", "cn": ""}],
        words: [{"en": "agree", "cn": ""}, {"en": "disagree", "cn": ""}, {"en": "maybe", "cn": ""}, {"en": "partly", "cn": ""}, {"en": "completely", "cn": ""}, {"en": "absolutely", "cn": ""}, {"en": "definitely", "cn": ""}, {"en": "perhaps", "cn": ""}, {"en": "doubt", "cn": ""}, {"en": "convince", "cn": ""}, {"en": "argument", "cn": ""}, {"en": "discuss", "cn": ""}, {"en": "debate", "cn": ""}, {"en": "compromise", "cn": ""}, {"en": "respect", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "道歉与原谅",
        patterns: [{"en": "I'm sorry for ...", "cn": ""}, {"en": "It won't happen again.", "cn": ""}, {"en": "I forgive you.", "cn": ""}],
        words: [{"en": "sorry", "cn": ""}, {"en": "apologize", "cn": ""}, {"en": "forgive", "cn": ""}, {"en": "mistake", "cn": ""}, {"en": "fault", "cn": ""}, {"en": "regret", "cn": ""}, {"en": "accident", "cn": ""}, {"en": "intentional", "cn": ""}, {"en": "explain", "cn": ""}, {"en": "understand", "cn": ""}, {"en": "accept", "cn": ""}, {"en": "move on", "cn": ""}, {"en": "forget", "cn": ""}, {"en": "learn", "cn": ""}, {"en": "better", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "鼓励与支持",
        patterns: [{"en": "You can do it!", "cn": ""}, {"en": "Don't give up.", "cn": ""}, {"en": "I believe in you.", "cn": ""}],
        words: [{"en": "encourage", "cn": ""}, {"en": "support", "cn": ""}, {"en": "cheer", "cn": ""}, {"en": "motivate", "cn": ""}, {"en": "inspire", "cn": ""}, {"en": "believe", "cn": ""}, {"en": "trust", "cn": ""}, {"en": "confidence", "cn": ""}, {"en": "keep going", "cn": ""}, {"en": "try", "cn": ""}, {"en": "best", "cn": ""}, {"en": "proud", "cn": ""}, {"en": "amazing", "cn": ""}, {"en": "great", "cn": ""}, {"en": "wonderful", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 情感表达",
        patterns: [{"en": "角色扮演各种情感场景", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "emotion", "cn": ""}, {"en": "express", "cn": ""}, {"en": "share", "cn": ""}, {"en": "listen", "cn": ""}, {"en": "understand", "cn": ""}, {"en": "empathy", "cn": ""}, {"en": "sympathy", "cn": ""}, {"en": "kind", "cn": ""}, {"en": "caring", "cn": ""}, {"en": "relationship", "cn": ""}, {"en": "communication", "cn": ""}, {"en": "open", "cn": ""}, {"en": "honest", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "reflect", "cn": ""}, {"en": "journal", "cn": ""}, {"en": "write", "cn": ""}, {"en": "feeling", "cn": ""}, {"en": "thought", "cn": ""}, {"en": "grateful", "cn": ""}, {"en": "positive", "cn": ""}],
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
        patterns: [{"en": "I'm going to ...", "cn": ""}, {"en": "I plan to ...", "cn": ""}, {"en": "I hope to ... someday.", "cn": ""}],
        words: [{"en": "plan", "cn": ""}, {"en": "future", "cn": ""}, {"en": "goal", "cn": ""}, {"en": "dream", "cn": ""}, {"en": "hope", "cn": ""}, {"en": "wish", "cn": ""}, {"en": "someday", "cn": ""}, {"en": "next", "cn": ""}, {"en": "year", "cn": ""}, {"en": "month", "cn": ""}, {"en": "soon", "cn": ""}, {"en": "later", "cn": ""}, {"en": "eventually", "cn": ""}, {"en": "maybe", "cn": ""}, {"en": "perhaps", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "预测与推测",
        patterns: [{"en": "I think it will ...", "cn": ""}, {"en": "It might ... tomorrow.", "cn": ""}, {"en": "It's going to be ...", "cn": ""}],
        words: [{"en": "will", "cn": ""}, {"en": "might", "cn": ""}, {"en": "may", "cn": ""}, {"en": "could", "cn": ""}, {"en": "probably", "cn": ""}, {"en": "possibly", "cn": ""}, {"en": "likely", "cn": ""}, {"en": "unlikely", "cn": ""}, {"en": "predict", "cn": ""}, {"en": "guess", "cn": ""}, {"en": "expect", "cn": ""}, {"en": "forecast", "cn": ""}, {"en": "future", "cn": ""}, {"en": "change", "cn": ""}, {"en": "happen", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "做决定",
        patterns: [{"en": "I've decided to ...", "cn": ""}, {"en": "I'm still thinking about ...", "cn": ""}, {"en": "It's hard to choose.", "cn": ""}],
        words: [{"en": "decide", "cn": ""}, {"en": "decision", "cn": ""}, {"en": "choose", "cn": ""}, {"en": "choice", "cn": ""}, {"en": "option", "cn": ""}, {"en": "consider", "cn": ""}, {"en": "weigh", "cn": ""}, {"en": "pros", "cn": ""}, {"en": "cons", "cn": ""}, {"en": "risk", "cn": ""}, {"en": "benefit", "cn": ""}, {"en": "chance", "cn": ""}, {"en": "opportunity", "cn": ""}, {"en": "change", "cn": ""}, {"en": "commit", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "承诺与保证",
        patterns: [{"en": "I promise to ...", "cn": ""}, {"en": "I won't let you down.", "cn": ""}, {"en": "You can count on me.", "cn": ""}],
        words: [{"en": "promise", "cn": ""}, {"en": "swear", "cn": ""}, {"en": "guarantee", "cn": ""}, {"en": "count on", "cn": ""}, {"en": "depend on", "cn": ""}, {"en": "rely", "cn": ""}, {"en": "trust", "cn": ""}, {"en": "word", "cn": ""}, {"en": "keep", "cn": ""}, {"en": "break", "cn": ""}, {"en": "commit", "cn": ""}, {"en": "responsible", "cn": ""}, {"en": "reliable", "cn": ""}, {"en": "serious", "cn": ""}, {"en": "sure", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "设定目标",
        patterns: [{"en": "My goal is to ...", "cn": ""}, {"en": "By next year, I want to ...", "cn": ""}, {"en": "Step by step, I'll ...", "cn": ""}],
        words: [{"en": "goal", "cn": ""}, {"en": "target", "cn": ""}, {"en": "achieve", "cn": ""}, {"en": "reach", "cn": ""}, {"en": "accomplish", "cn": ""}, {"en": "milestone", "cn": ""}, {"en": "step", "cn": ""}, {"en": "progress", "cn": ""}, {"en": "track", "cn": ""}, {"en": "measure", "cn": ""}, {"en": "deadline", "cn": ""}, {"en": "timeline", "cn": ""}, {"en": "realistic", "cn": ""}, {"en": "ambitious", "cn": ""}, {"en": "focus", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 未来演讲",
        patterns: [{"en": "我的五年计划 主题演讲", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "vision", "cn": ""}, {"en": "mission", "cn": ""}, {"en": "purpose", "cn": ""}, {"en": "motivation", "cn": ""}, {"en": "discipline", "cn": ""}, {"en": "habit", "cn": ""}, {"en": "growth", "cn": ""}, {"en": "improve", "cn": ""}, {"en": "learn", "cn": ""}, {"en": "develop", "cn": ""}, {"en": "skill", "cn": ""}, {"en": "career", "cn": ""}, {"en": "future", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "imagine", "cn": ""}, {"en": "visualize", "cn": ""}, {"en": "dream", "cn": ""}, {"en": "big", "cn": ""}, {"en": "action", "cn": ""}, {"en": "start", "cn": ""}, {"en": "today", "cn": ""}],
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
        patterns: [{"en": "... is bigger than ...", "cn": ""}, {"en": "... is more ... than ...", "cn": ""}, {"en": "... is not as ... as ...", "cn": ""}],
        words: [{"en": "bigger", "cn": ""}, {"en": "smaller", "cn": ""}, {"en": "taller", "cn": ""}, {"en": "shorter", "cn": ""}, {"en": "faster", "cn": ""}, {"en": "slower", "cn": ""}, {"en": "better", "cn": ""}, {"en": "worse", "cn": ""}, {"en": "more", "cn": ""}, {"en": "less", "cn": ""}, {"en": "than", "cn": ""}, {"en": "as...as", "cn": ""}, {"en": "same", "cn": ""}, {"en": "different", "cn": ""}, {"en": "similar", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "询问偏好",
        patterns: [{"en": "Which do you prefer?", "cn": ""}, {"en": "I'd rather ... than ...", "cn": ""}, {"en": "... suits me better.", "cn": ""}],
        words: [{"en": "prefer", "cn": ""}, {"en": "rather", "cn": ""}, {"en": "favorite", "cn": ""}, {"en": "choice", "cn": ""}, {"en": "choose", "cn": ""}, {"en": "pick", "cn": ""}, {"en": "select", "cn": ""}, {"en": "between", "cn": ""}, {"en": "among", "cn": ""}, {"en": "either", "cn": ""}, {"en": "neither", "cn": ""}, {"en": "both", "cn": ""}, {"en": "all", "cn": ""}, {"en": "none", "cn": ""}, {"en": "any", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "最高级表达",
        patterns: [{"en": "It's the best ... I've ever ...", "cn": ""}, {"en": "The most ... in the world.", "cn": ""}, {"en": "One of the greatest ...", "cn": ""}],
        words: [{"en": "best", "cn": ""}, {"en": "worst", "cn": ""}, {"en": "most", "cn": ""}, {"en": "least", "cn": ""}, {"en": "greatest", "cn": ""}, {"en": "biggest", "cn": ""}, {"en": "smallest", "cn": ""}, {"en": "oldest", "cn": ""}, {"en": "newest", "cn": ""}, {"en": "favorite", "cn": ""}, {"en": "number one", "cn": ""}, {"en": "top", "cn": ""}, {"en": "ever", "cn": ""}, {"en": "world", "cn": ""}, {"en": "history", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "优缺点分析",
        patterns: [{"en": "The advantage is ...", "cn": ""}, {"en": "On the other hand ...", "cn": ""}, {"en": "The downside is ...", "cn": ""}],
        words: [{"en": "advantage", "cn": ""}, {"en": "disadvantage", "cn": ""}, {"en": "benefit", "cn": ""}, {"en": "drawback", "cn": ""}, {"en": "pro", "cn": ""}, {"en": "con", "cn": ""}, {"en": "positive", "cn": ""}, {"en": "negative", "cn": ""}, {"en": "upside", "cn": ""}, {"en": "downside", "cn": ""}, {"en": "trade-off", "cn": ""}, {"en": "balance", "cn": ""}, {"en": "consider", "cn": ""}, {"en": "decide", "cn": ""}, {"en": "weigh", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "推荐与评价",
        patterns: [{"en": "I highly recommend ...", "cn": ""}, {"en": "It's worth it because ...", "cn": ""}, {"en": "You won't regret ...", "cn": ""}],
        words: [{"en": "recommend", "cn": ""}, {"en": "suggest", "cn": ""}, {"en": "worth", "cn": ""}, {"en": "value", "cn": ""}, {"en": "quality", "cn": ""}, {"en": "price", "cn": ""}, {"en": "review", "cn": ""}, {"en": "rate", "cn": ""}, {"en": "star", "cn": ""}, {"en": "feedback", "cn": ""}, {"en": "comment", "cn": ""}, {"en": "testimonial", "cn": ""}, {"en": "experience", "cn": ""}, {"en": "satisfied", "cn": ""}, {"en": "excellent", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 比较辩论",
        patterns: [{"en": "正式辩论: 城市 vs. 乡村", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "compare", "cn": ""}, {"en": "contrast", "cn": ""}, {"en": "analyze", "cn": ""}, {"en": "evaluate", "cn": ""}, {"en": "judge", "cn": ""}, {"en": "criterion", "cn": ""}, {"en": "standard", "cn": ""}, {"en": "objective", "cn": ""}, {"en": "subjective", "cn": ""}, {"en": "fair", "cn": ""}, {"en": "unfair", "cn": ""}, {"en": "equal", "cn": ""}, {"en": "justice", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "reflect", "cn": ""}, {"en": "preference", "cn": ""}, {"en": "style", "cn": ""}, {"en": "taste", "cn": ""}, {"en": "unique", "cn": ""}, {"en": "individual", "cn": ""}, {"en": "respect", "cn": ""}],
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
        patterns: [{"en": "I've been to ...", "cn": ""}, {"en": "I once ...", "cn": ""}, {"en": "That was the first time I ...", "cn": ""}],
        words: [{"en": "experience", "cn": ""}, {"en": "once", "cn": ""}, {"en": "first time", "cn": ""}, {"en": "last time", "cn": ""}, {"en": "ever", "cn": ""}, {"en": "never", "cn": ""}, {"en": "before", "cn": ""}, {"en": "after", "cn": ""}, {"en": "during", "cn": ""}, {"en": "while", "cn": ""}, {"en": "already", "cn": ""}, {"en": "yet", "cn": ""}, {"en": "just", "cn": ""}, {"en": "recently", "cn": ""}, {"en": "long ago", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "讲故事",
        patterns: [{"en": "Let me tell you about ...", "cn": ""}, {"en": "It happened when I was ...", "cn": ""}, {"en": "You won't believe what happened!", "cn": ""}],
        words: [{"en": "story", "cn": ""}, {"en": "happen", "cn": ""}, {"en": "begin", "cn": ""}, {"en": "then", "cn": ""}, {"en": "next", "cn": ""}, {"en": "suddenly", "cn": ""}, {"en": "finally", "cn": ""}, {"en": "end", "cn": ""}, {"en": "surprise", "cn": ""}, {"en": "funny", "cn": ""}, {"en": "scary", "cn": ""}, {"en": "exciting", "cn": ""}, {"en": "strange", "cn": ""}, {"en": "amazing", "cn": ""}, {"en": "unforgettable", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "描述过去的动作",
        patterns: [{"en": "I was ...ing when ...", "cn": ""}, {"en": "While I was ...", "cn": ""}, {"en": "After I had ..., I ...", "cn": ""}],
        words: [{"en": "was walking", "cn": ""}, {"en": "was talking", "cn": ""}, {"en": "was reading", "cn": ""}, {"en": "was driving", "cn": ""}, {"en": "was cooking", "cn": ""}, {"en": "happened", "cn": ""}, {"en": "saw", "cn": ""}, {"en": "heard", "cn": ""}, {"en": "felt", "cn": ""}, {"en": "noticed", "cn": ""}, {"en": "realized", "cn": ""}, {"en": "decided", "cn": ""}, {"en": "stopped", "cn": ""}, {"en": "started", "cn": ""}, {"en": "continued", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "转折与意外",
        patterns: [{"en": "But then ...", "cn": ""}, {"en": "All of a sudden ...", "cn": ""}, {"en": "It turned out that ...", "cn": ""}],
        words: [{"en": "but", "cn": ""}, {"en": "however", "cn": ""}, {"en": "although", "cn": ""}, {"en": "though", "cn": ""}, {"en": "despite", "cn": ""}, {"en": "anyway", "cn": ""}, {"en": "still", "cn": ""}, {"en": "yet", "cn": ""}, {"en": "unexpected", "cn": ""}, {"en": "accident", "cn": ""}, {"en": "mistake", "cn": ""}, {"en": "luck", "cn": ""}, {"en": "lucky", "cn": ""}, {"en": "unlucky", "cn": ""}, {"en": "fortunately", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "人生重要时刻",
        patterns: [{"en": "I'll never forget ...", "cn": ""}, {"en": "It changed my life.", "cn": ""}, {"en": "That's when I realized ...", "cn": ""}],
        words: [{"en": "moment", "cn": ""}, {"en": "memory", "cn": ""}, {"en": "life", "cn": ""}, {"en": "change", "cn": ""}, {"en": "important", "cn": ""}, {"en": "significant", "cn": ""}, {"en": "special", "cn": ""}, {"en": "unique", "cn": ""}, {"en": "remember", "cn": ""}, {"en": "forget", "cn": ""}, {"en": "learn", "cn": ""}, {"en": "grow", "cn": ""}, {"en": "become", "cn": ""}, {"en": "turn", "cn": ""}, {"en": "point", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 故事分享",
        patterns: [{"en": "分享你人生中最有趣的故事", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "narrative", "cn": ""}, {"en": "sequence", "cn": ""}, {"en": "chronology", "cn": ""}, {"en": "detail", "cn": ""}, {"en": "describe", "cn": ""}, {"en": "express", "cn": ""}, {"en": "reflect", "cn": ""}, {"en": "lesson", "cn": ""}, {"en": "moral", "cn": ""}, {"en": "meaning", "cn": ""}, {"en": "impact", "cn": ""}, {"en": "emotion", "cn": ""}, {"en": "connection", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "recall", "cn": ""}, {"en": "cherish", "cn": ""}, {"en": "appreciate", "cn": ""}, {"en": "past", "cn": ""}, {"en": "present", "cn": ""}, {"en": "future", "cn": ""}, {"en": "journey", "cn": ""}],
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
        patterns: [{"en": "There's a problem with ...", "cn": ""}, {"en": "Something is wrong with ...", "cn": ""}, {"en": "It's not working properly.", "cn": ""}],
        words: [{"en": "problem", "cn": ""}, {"en": "issue", "cn": ""}, {"en": "trouble", "cn": ""}, {"en": "wrong", "cn": ""}, {"en": "broken", "cn": ""}, {"en": "error", "cn": ""}, {"en": "fault", "cn": ""}, {"en": "mistake", "cn": ""}, {"en": "fail", "cn": ""}, {"en": "crash", "cn": ""}, {"en": "bug", "cn": ""}, {"en": "glitch", "cn": ""}, {"en": "stuck", "cn": ""}, {"en": "missing", "cn": ""}, {"en": "lost", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "请求帮助",
        patterns: [{"en": "Can you help me with ...?", "cn": ""}, {"en": "I'm having trouble ...ing.", "cn": ""}, {"en": "Do you know how to ...?", "cn": ""}],
        words: [{"en": "help", "cn": ""}, {"en": "assist", "cn": ""}, {"en": "support", "cn": ""}, {"en": "need", "cn": ""}, {"en": "please", "cn": ""}, {"en": "could", "cn": ""}, {"en": "would", "cn": ""}, {"en": "appreciate", "cn": ""}, {"en": "favor", "cn": ""}, {"en": "hand", "cn": ""}, {"en": "guide", "cn": ""}, {"en": "show", "cn": ""}, {"en": "teach", "cn": ""}, {"en": "explain", "cn": ""}, {"en": "solve", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "提出解决方案",
        patterns: [{"en": "Why don't we try ...?", "cn": ""}, {"en": "Let's see if ... works.", "cn": ""}, {"en": "The best way is to ...", "cn": ""}],
        words: [{"en": "solve", "cn": ""}, {"en": "fix", "cn": ""}, {"en": "repair", "cn": ""}, {"en": "solution", "cn": ""}, {"en": "method", "cn": ""}, {"en": "approach", "cn": ""}, {"en": "try", "cn": ""}, {"en": "test", "cn": ""}, {"en": "check", "cn": ""}, {"en": "verify", "cn": ""}, {"en": "work", "cn": ""}, {"en": "working", "cn": ""}, {"en": "success", "cn": ""}, {"en": "fail", "cn": ""}, {"en": "alternative", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "道歉与弥补",
        patterns: [{"en": "I'm sorry about ...", "cn": ""}, {"en": "I'll take care of it.", "cn": ""}, {"en": "Let me make it up to you.", "cn": ""}],
        words: [{"en": "sorry", "cn": ""}, {"en": "apologize", "cn": ""}, {"en": "take care", "cn": ""}, {"en": "handle", "cn": ""}, {"en": "deal with", "cn": ""}, {"en": "fix", "cn": ""}, {"en": "solve", "cn": ""}, {"en": "resolve", "cn": ""}, {"en": "compensate", "cn": ""}, {"en": "make up", "cn": ""}, {"en": "promise", "cn": ""}, {"en": "guarantee", "cn": ""}, {"en": "ensure", "cn": ""}, {"en": "prevent", "cn": ""}, {"en": "happen again", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "投诉与反馈",
        patterns: [{"en": "I'd like to make a complaint.", "cn": ""}, {"en": "The service was ...", "cn": ""}, {"en": "I'm not satisfied with ...", "cn": ""}],
        words: [{"en": "complain", "cn": ""}, {"en": "complaint", "cn": ""}, {"en": "feedback", "cn": ""}, {"en": "satisfied", "cn": ""}, {"en": "unsatisfied", "cn": ""}, {"en": "disappointed", "cn": ""}, {"en": "expect", "cn": ""}, {"en": "service", "cn": ""}, {"en": "quality", "cn": ""}, {"en": "product", "cn": ""}, {"en": "refund", "cn": ""}, {"en": "exchange", "cn": ""}, {"en": "replace", "cn": ""}, {"en": "improve", "cn": ""}, {"en": "follow up", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "周复习 + 客服模拟",
        patterns: [{"en": "完整问题解决流程", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "process", "cn": ""}, {"en": "step", "cn": ""}, {"en": "procedure", "cn": ""}, {"en": "policy", "cn": ""}, {"en": "rule", "cn": ""}, {"en": "standard", "cn": ""}, {"en": "professional", "cn": ""}, {"en": "polite", "cn": ""}, {"en": "patient", "cn": ""}, {"en": "effective", "cn": ""}, {"en": "efficient", "cn": ""}, {"en": "customer", "cn": ""}, {"en": "service", "cn": ""}],
        tasks: {"morning": "铁柱带你快速回顾本周所有句型，用闪卡方式随机提问，练习反应速度。", "noon": "让铁柱生成一个融合本周所有句型的综合场景对话，反复跟读。", "afternoon": "AI 角色扮演：铁柱模拟真实场景，你必须用本周句型完成对话。"}
      },
      {
        day: 7, title: "自由日",
        patterns: [{"en": "自由选择薄弱句型练习", "cn": ""}],
        words: [{"en": "relax", "cn": ""}, {"en": "solution", "cn": ""}, {"en": "creative", "cn": ""}, {"en": "think", "cn": ""}, {"en": "outside the box", "cn": ""}, {"en": "challenge", "cn": ""}, {"en": "overcome", "cn": ""}, {"en": "success", "cn": ""}],
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
        patterns: [{"en": "综合运用W1-W5所有句型", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "introduce", "cn": ""}, {"en": "family", "cn": ""}, {"en": "daily", "cn": ""}, {"en": "weather", "cn": ""}, {"en": "food", "cn": ""}, {"en": "confident", "cn": ""}, {"en": "fluent", "cn": ""}, {"en": "natural", "cn": ""}, {"en": "conversation", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 2, title: "问路、购物、打电话 总复习",
        patterns: [{"en": "综合运用W6-W8所有句型", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "shop", "cn": ""}, {"en": "direction", "cn": ""}, {"en": "phone", "cn": ""}, {"en": "appointment", "cn": ""}, {"en": "practical", "cn": ""}, {"en": "useful", "cn": ""}, {"en": "essential", "cn": ""}, {"en": "everyday", "cn": ""}, {"en": "situation", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 3, title: "健康、工作、学习 总复习",
        patterns: [{"en": "综合运用W9-W11所有句型", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "health", "cn": ""}, {"en": "work", "cn": ""}, {"en": "school", "cn": ""}, {"en": "career", "cn": ""}, {"en": "professional", "cn": ""}, {"en": "formal", "cn": ""}, {"en": "polite", "cn": ""}, {"en": "appropriate", "cn": ""}, {"en": "context", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 4, title: "住房、时尚、运动 总复习",
        patterns: [{"en": "综合运用W12-W14所有句型", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "home", "cn": ""}, {"en": "style", "cn": ""}, {"en": "sport", "cn": ""}, {"en": "hobby", "cn": ""}, {"en": "lifestyle", "cn": ""}, {"en": "personal", "cn": ""}, {"en": "describe", "cn": ""}, {"en": "express", "cn": ""}, {"en": "preference", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 5, title: "旅行、节日、科技 总复习",
        patterns: [{"en": "综合运用W15-W17所有句型", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "travel", "cn": ""}, {"en": "festival", "cn": ""}, {"en": "technology", "cn": ""}, {"en": "media", "cn": ""}, {"en": "global", "cn": ""}, {"en": "modern", "cn": ""}, {"en": "connect", "cn": ""}, {"en": "communicate", "cn": ""}, {"en": "share", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 6, title: "观点、计划、比较 总复习",
        patterns: [{"en": "综合运用W18-W21所有句型", "cn": ""}],
        words: [{"en": "review", "cn": ""}, {"en": "opinion", "cn": ""}, {"en": "plan", "cn": ""}, {"en": "compare", "cn": ""}, {"en": "argue", "cn": ""}, {"en": "debate", "cn": ""}, {"en": "critical", "cn": ""}, {"en": "thinking", "cn": ""}, {"en": "persuade", "cn": ""}, {"en": "convince", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      },
      {
        day: 7, title: "终极挑战日",
        patterns: [{"en": "完整40分钟英语对话挑战", "cn": ""}],
        words: [{"en": "challenge", "cn": ""}, {"en": "final", "cn": ""}, {"en": "complete", "cn": ""}, {"en": "achievement", "cn": ""}, {"en": "proud", "cn": ""}, {"en": "progress", "cn": ""}, {"en": "beginner", "cn": ""}, {"en": "confident", "cn": ""}, {"en": "speaker", "cn": ""}, {"en": "continue", "cn": ""}, {"en": "grow", "cn": ""}, {"en": "fluent", "cn": ""}, {"en": "master", "cn": ""}, {"en": "success", "cn": ""}],
        tasks: {"morning": "铁柱教你朗读核心句型，然后进行句型轰炸练习——铁柱用不同主语/宾语提问，你快速用句型回答。", "noon": "让铁柱用今日单词生成一个30秒小故事，反复听读5遍，把单词放进场景中记忆。", "afternoon": "和铁柱模拟真实场景对话，全程只用今天和前几天的句型交流，逼自己开口。"}
      }
    ]
  }
];