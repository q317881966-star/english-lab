// English Lab — 三层词汇体系（重新分类 + 扩充）
// tier: "core" = 核心功能词 (292) | "high" = 高频实意词 (1482) | "biz" = 行业词 (555)
// 功能词定义：代词、介词、连词、限定词、量词、疑问词、情态动词、助动词、数词、基本副词、语气词
// 实意词定义：日常高频使用的名词、动词、形容词、副词
// 行业词定义：电商、AI、互联网、跨境贸易相关词汇

const VOCABULARY = [

  // ═══════════════════════════════════════════════
  // 🔴 核心功能词 (CORE) — 英语的'骨架词'
  // 代词·介词·连词·限定词·疑问词·情态动词·助动词·数词·副词·语气词
  // --- 新增: 代词 ---
  { word: "none", meaning: "没有一个/毫无", example: "None of them work.", exampleCn: "没一个能用。", category: "代词", tier: "core" }
,
  { word: "whichever", meaning: "无论哪个", example: "Take whichever you like.", exampleCn: "喜欢哪个拿哪个。", category: "代词", tier: "core" }
,
  { word: "whoever", meaning: "无论谁", example: "Whoever comes is welcome.", exampleCn: "谁来都欢迎。", category: "代词", tier: "core" }
,
  // --- 新增: 副词 ---
  { word: "moreover", meaning: "此外/而且", example: "Moreover, it's cheap.", exampleCn: "而且它便宜。", category: "副词", tier: "core" }
,
  { word: "furthermore", meaning: "此外/再者", example: "Furthermore, we agree.", exampleCn: "此外，我们同意。", category: "副词", tier: "core" }
,
  { word: "nevertheless", meaning: "尽管如此", example: "Nevertheless, he succeeded.", exampleCn: "尽管如此，他成功了。", category: "副词", tier: "core" }
,
  { word: "thus", meaning: "因此/这样", example: "Thus, we decided.", exampleCn: "因此，我们决定了。", category: "副词", tier: "core" }
,
  { word: "hence", meaning: "因此/从此", example: "Hence the problem.", exampleCn: "因此有了问题。", category: "副词", tier: "core" }
,
  { word: "somehow", meaning: "不知何故/以某种方式", example: "Somehow it worked.", exampleCn: "不知怎么的它成功了。", category: "副词", tier: "core" }
,
  { word: "anyhow", meaning: "无论如何/总之", example: "Anyhow, let's go.", exampleCn: "不管怎样，我们走吧。", category: "副词", tier: "core" }
,
  // --- 新增: 连词 ---
  { word: "whereas", meaning: "然而/鉴于", example: "I like tea, whereas he likes coffee.", exampleCn: "我喜欢茶，而他喜欢咖啡。", category: "连词", tier: "core" }
,
  { word: "provided", meaning: "假如/只要", example: "Provided you agree.", exampleCn: "只要你同意。", category: "连词", tier: "core" }
,

  // --- 新增: 介词 ---
  { word: "amongst", meaning: "在…之中", example: "Amongst friends.", exampleCn: "在朋友之中。", category: "介词", tier: "core" }
,
  { word: "amid", meaning: "在…中间", example: "Amid the chaos.", exampleCn: "在混乱中。", category: "介词", tier: "core" }
,

  // --- 新增: 代词 ---
  { word: "whatever", meaning: "无论什么", example: "Take whatever you need.", exampleCn: "需要什么尽管拿。", category: "代词", tier: "core" }
,

  // --- 新增: 连词 ---
  { word: "wherever", meaning: "无论哪里", example: "Wherever you go, I'll follow.", exampleCn: "无论你去哪，我都跟着。", category: "连词", tier: "core" }
,
  { word: "whenever", meaning: "无论何时", example: "Come whenever you want.", exampleCn: "随时来。", category: "连词", tier: "core" }
,

  // --- 新增: 介词/连词/代词 补充 ---
  // ═══════════════════════════════════════════════

  // --- 介词 — 时空、方式、逻辑介词 ---
  {     word: "about", meaning: "关于/大约", example: "Tell me about yourself.", exampleCn: "介绍下你自己。", category: "介词", tier: "core" }
,
  {     word: "above", meaning: "在……之上", example: "Above the minimum order quantity.", exampleCn: "超过最小起订量。", category: "介词", tier: "core" }
,
  {     word: "according", meaning: "根据", example: "According to the contract.", exampleCn: "根据合同。", category: "介词", tier: "core" }
,
  {     word: "across", meaning: "穿过/遍及", example: "Across the country.", exampleCn: "全国各地。", category: "介词", tier: "core" }
,
  {     word: "after", meaning: "在...之后", example: "I'll call after the meeting.", exampleCn: "会后我打电话。", category: "介词", tier: "core" }
,
  {     word: "against", meaning: "反对/靠", example: "Against the wall.", exampleCn: "靠墙。", category: "介词", tier: "core" }
,
  {     word: "along", meaning: "沿着", example: "Walk along this street.", exampleCn: "沿着这条街走。", category: "介词", tier: "core" }
,
  {     word: "among", meaning: "在……之中", example: "Among all suppliers.", exampleCn: "在所有供应商中。", category: "介词", tier: "core" }
,
  {     word: "around", meaning: "围绕/大约", example: "Look around you.", exampleCn: "看看你周围。", category: "介词", tier: "core" }
,
  {     word: "as", meaning: "作为/当……时", example: "As a seller on Amazon.", exampleCn: "作为亚马逊卖家。", category: "介词", tier: "core" }
,
  {     word: "at", meaning: "在(点/地点)", example: "I'm at home.", exampleCn: "我在家。", category: "介词", tier: "core" }
,
  {     word: "before", meaning: "在...之前", example: "Wash your hands before eating.", exampleCn: "饭前洗手。", category: "介词", tier: "core" }
,
  {     word: "behind", meaning: "在...后面", example: "He is behind the door.", exampleCn: "他在门后面。", category: "介词", tier: "core" }
,
  {     word: "below", meaning: "在……之下", example: "Below our cost price.", exampleCn: "低于我们的成本价。", category: "介词", tier: "core" }
,
  {     word: "beside", meaning: "在……旁边", example: "Beside the main road.", exampleCn: "在主路旁边。", category: "介词", tier: "core" }
,
  {     word: "besides", meaning: "除了……还", example: "Besides the price, quality matters.", exampleCn: "除了价格，质量也重要。", category: "介词", tier: "core" }
,
  {     word: "between", meaning: "在...之间", example: "Between you and me.", exampleCn: "你我之间。", category: "介词", tier: "core" }
,
  {     word: "beyond", meaning: "超出", example: "Beyond our expectations.", exampleCn: "超出我们的预期。", category: "介词", tier: "core" }
,
  {     word: "by", meaning: "通过/被/在旁边", example: "I go to work by bus.", exampleCn: "我坐公交上班。", category: "介词", tier: "core" }
,
  {     word: "despite", meaning: "尽管", example: "Despite the delay.", exampleCn: "尽管有延迟。", category: "介词", tier: "core" }
,
  {     word: "down", meaning: "向下", example: "Sit down.", exampleCn: "坐下。", category: "介词", tier: "core" }
,
  {     word: "during", meaning: "在...期间", example: "I fell asleep during the movie.", exampleCn: "我看电影时睡着了。", category: "介词", tier: "core" }
,
  {     word: "except", meaning: "除了", example: "Except this item.", exampleCn: "除了这个商品。", category: "介词", tier: "core" }
,
  {     word: "excluding", meaning: "不包括", example: "Excluding tax.", exampleCn: "不含税。", category: "介词", tier: "core" }
,
  {     word: "following", meaning: "在……之后", example: "Following our conversation.", exampleCn: "根据我们的谈话。", category: "介词", tier: "core" }
,
  {     word: "for", meaning: "为了/给", example: "This is for you.", exampleCn: "这是给你的。", category: "介词", tier: "core" }
,
  {     word: "from", meaning: "从/来自", example: "I'm from China.", exampleCn: "我来自中国。", category: "介词", tier: "core" }
,
  {     word: "in", meaning: "在...里面", example: "It's in the box.", exampleCn: "在盒子里。", category: "介词", tier: "core" }
,
  {     word: "including", meaning: "包括", example: "Including shipping cost.", exampleCn: "包括运费。", category: "介词", tier: "core" }
,
  {     word: "inside", meaning: "在里面", example: "Come inside.", exampleCn: "进来。", category: "介词", tier: "core" }
,
  {     word: "into", meaning: "进入", example: "She walked into the room.", exampleCn: "她走进了房间。", category: "介词", tier: "core" }
,
  {     word: "like", meaning: "喜欢、像", example: "I like ice cream.", exampleCn: "我喜欢冰淇淋。", category: "介词", tier: "core" }
,
  {     word: "near", meaning: "在...附近", example: "I live near the station.", exampleCn: "我住在车站附近。", category: "介词", tier: "core" }
,
  {     word: "of", meaning: "...的", example: "The name of the book.", exampleCn: "这本书的名字。", category: "介词", tier: "core" }
,
  {     word: "off", meaning: "离开/关", example: "Take 10% off the price.", exampleCn: "打九折。", category: "介词", tier: "core" }
,
  {     word: "on", meaning: "在...上面", example: "The book is on the table.", exampleCn: "书在桌子上。", category: "介词", tier: "core" }
,
  {     word: "onto", meaning: "到……上面", example: "Load onto the truck.", exampleCn: "装到卡车上。", category: "介词", tier: "core" }
,
  {     word: "outside", meaning: "在外面", example: "Let's go outside.", exampleCn: "我们去外面。", category: "介词", tier: "core" }
,
  {     word: "over", meaning: "在...上方/超过", example: "A plane flew over us.", exampleCn: "飞机从我们头上飞过。", category: "介词", tier: "core" }
,
  {     word: "past", meaning: "经过/过", example: "Past the deadline.", exampleCn: "过了截止日期。", category: "介词", tier: "core" }
,
  {     word: "per", meaning: "每", example: "$5 per piece.", exampleCn: "每件5美元。", category: "介词", tier: "core" }
,
  {     word: "regarding", meaning: "关于", example: "Regarding your inquiry.", exampleCn: "关于您的询价。", category: "介词", tier: "core" }
,
  {     word: "since", meaning: "自从", example: "I've been here since Monday.", exampleCn: "我从周一开始就在这。", category: "介词", tier: "core" }
,
  {     word: "through", meaning: "穿过/通过", example: "We walked through the park.", exampleCn: "我们穿过了公园。", category: "介词", tier: "core" }
,
  {     word: "throughout", meaning: "遍及/贯穿", example: "Throughout the process.", exampleCn: "整个过程中。", category: "介词", tier: "core" }
,
  {     word: "till", meaning: "直到", example: "Till Friday.", exampleCn: "到周五。", category: "介词", tier: "core" }
,
  {     word: "to", meaning: "到/向", example: "I'm going to school.", exampleCn: "我去学校。", category: "介词", tier: "core" }
,
  {     word: "toward", meaning: "朝着", example: "Toward the end of the month.", exampleCn: "快到月底。", category: "介词", tier: "core" }
,
  {     word: "towards", meaning: "朝着", example: "Working towards a solution.", exampleCn: "朝着解决方案努力。", category: "介词", tier: "core" }
,
  {     word: "under", meaning: "在...下面", example: "The cat is under the table.", exampleCn: "猫在桌子下面。", category: "介词", tier: "core" }
,
  {     word: "unlike", meaning: "不像", example: "Unlike our competitors.", exampleCn: "不像我们的竞争对手。", category: "介词", tier: "core" }
,
  {     word: "until", meaning: "直到", example: "Wait until I come back.", exampleCn: "等到我回来。", category: "介词", tier: "core" }
,
  {     word: "up", meaning: "向上", example: "Stand up.", exampleCn: "站起来。", category: "介词", tier: "core" }
,
  {     word: "upon", meaning: "在……上/一……就", example: "Upon arrival.", exampleCn: "一到就……。", category: "介词", tier: "core" }
,
  {     word: "via", meaning: "通过/经由", example: "Via air freight.", exampleCn: "通过空运。", category: "介词", tier: "core" }
,
  {     word: "with", meaning: "和...一起/用", example: "Come with me.", exampleCn: "跟我来。", category: "介词", tier: "core" }
,
  {     word: "within", meaning: "在……之内", example: "Within 7 business days.", exampleCn: "7个工作日内。", category: "介词", tier: "core" }
,
  {     word: "without", meaning: "没有", example: "I can't live without you.", exampleCn: "没有你我活不下去。", category: "介词", tier: "core" }
,

  // --- 代词 — 人称代词、指示代词、反身代词、不定代词、疑问代词 ---
  {     word: "anybody", meaning: "任何人", example: "Can anybody help me?", exampleCn: "有人能帮我吗？", category: "代词", tier: "core" }
,
  {     word: "anyone", meaning: "任何人", example: "Is anyone there?", exampleCn: "有人在吗？", category: "代词", tier: "core" }
,
  {     word: "anything", meaning: "任何东西", example: "Do you need anything?", exampleCn: "你需要什么吗？", category: "代词", tier: "core" }
,
  {     word: "each other", meaning: "互相", example: "We help each other.", exampleCn: "我们互相帮助。", category: "代词", tier: "core" }
,
  {     word: "everybody", meaning: "每个人", example: "Everybody likes this design.", exampleCn: "每个人都喜欢这个设计。", category: "代词", tier: "core" }
,
  {     word: "everyone", meaning: "每个人", example: "Everyone is here.", exampleCn: "大家都到了。", category: "代词", tier: "core" }
,
  {     word: "everything", meaning: "一切", example: "Everything is fine.", exampleCn: "一切都好。", category: "代词", tier: "core" }
,
  {     word: "he", meaning: "他", example: "He is my brother.", exampleCn: "他是我弟弟。", category: "代词", tier: "core" }
,
  {     word: "her", meaning: "她 (宾格/所有格)", example: "I gave her the book.", exampleCn: "我把书给了她。", category: "代词", tier: "core" }
,
  {     word: "hers", meaning: "她的东西", example: "The decision is hers.", exampleCn: "决定权在她。", category: "代词", tier: "core" }
,
  {     word: "herself", meaning: "她自己", example: "She runs the store herself.", exampleCn: "她自己经营店铺。", category: "代词", tier: "core" }
,
  {     word: "him", meaning: "他 (宾格)", example: "I saw him yesterday.", exampleCn: "我昨天看见他了。", category: "代词", tier: "core" }
,
  {     word: "himself", meaning: "他自己", example: "He fixed it himself.", exampleCn: "他自己修好了。", category: "代词", tier: "core" }
,
  {     word: "his", meaning: "他的", example: "His car is blue.", exampleCn: "他的车是蓝色的。", category: "代词", tier: "core" }
,
  {     word: "I", meaning: "我", example: "I am learning English.", exampleCn: "我在学英语。", category: "代词", tier: "core" }
,
  {     word: "it", meaning: "它", example: "It is a beautiful day.", exampleCn: "今天天气真好。", category: "代词", tier: "core" }
,
  {     word: "its", meaning: "它的", example: "The cat licked its paw.", exampleCn: "猫舔了舔它的爪子。", category: "代词", tier: "core" }
,
  {     word: "itself", meaning: "它自己", example: "The problem fixed itself.", exampleCn: "问题自己解决了。", category: "代词", tier: "core" }
,
  {     word: "me", meaning: "我 (宾格)", example: "Please tell me the truth.", exampleCn: "请告诉我真相。", category: "代词", tier: "core" }
,
  {     word: "mine", meaning: "我的 (名词性)", example: "This book is mine.", exampleCn: "这本书是我的。", category: "代词", tier: "core" }
,
  {     word: "my", meaning: "我的", example: "This is my phone.", exampleCn: "这是我的手机。", category: "代词", tier: "core" }
,
  {     word: "myself", meaning: "我自己", example: "I did it by myself.", exampleCn: "我自己做的。", category: "代词", tier: "core" }
,
  {     word: "nobody", meaning: "没有人", example: "Nobody complained about the quality.", exampleCn: "没人抱怨质量。", category: "代词", tier: "core" }
,
  {     word: "nothing", meaning: "没有什么", example: "Nothing happened.", exampleCn: "什么也没发生。", category: "代词", tier: "core" }
,
  {     word: "one another", meaning: "彼此", example: "They trust one another.", exampleCn: "他们彼此信任。", category: "代词", tier: "core" }
,
  {     word: "our", meaning: "我们的", example: "Our house is small but cozy.", exampleCn: "我们的房子虽小但很温馨。", category: "代词", tier: "core" }
,
  {     word: "ours", meaning: "我们的东西", example: "This style is ours.", exampleCn: "这个款式是我们的。", category: "代词", tier: "core" }
,
  {     word: "ourselves", meaning: "我们自己", example: "We did it ourselves.", exampleCn: "我们自己做的。", category: "代词", tier: "core" }
,
  {     word: "she", meaning: "她", example: "She works in a hospital.", exampleCn: "她在医院工作。", category: "代词", tier: "core" }
,
  {     word: "somebody", meaning: "某人", example: "Somebody called earlier.", exampleCn: "有人之前打过电话。", category: "代词", tier: "core" }
,
  {     word: "someone", meaning: "某人", example: "Someone is waiting for you.", exampleCn: "有人在等你。", category: "代词", tier: "core" }
,
  {     word: "something", meaning: "某事/某物", example: "I have something to tell you.", exampleCn: "我有事告诉你。", category: "代词", tier: "core" }
,
  {     word: "that", meaning: "那个", example: "That is a good idea.", exampleCn: "那是个好主意。", category: "代词", tier: "core" }
,
  {     word: "their", meaning: "他们的", example: "Their children are very polite.", exampleCn: "他们的孩子很有礼貌。", category: "代词", tier: "core" }
,
  {     word: "theirs", meaning: "他们的东西", example: "The market is theirs.", exampleCn: "这个市场是他们的。", category: "代词", tier: "core" }
,
  {     word: "them", meaning: "他们 (宾格)", example: "I don't know them.", exampleCn: "我不认识他们。", category: "代词", tier: "core" }
,
  {     word: "themselves", meaning: "他们自己", example: "They built it themselves.", exampleCn: "他们自己建的。", category: "代词", tier: "core" }
,
  {     word: "these", meaning: "这些(this复数)", example: "These are my friends.", exampleCn: "这些是我的朋友。", category: "代词", tier: "core" }
,
  {     word: "they", meaning: "他们、她们", example: "They are my friends.", exampleCn: "他们是我的朋友。", category: "代词", tier: "core" }
,
  {     word: "this", meaning: "这个", example: "This is my book.", exampleCn: "这是我的书。", category: "代词", tier: "core" }
,
  {     word: "those", meaning: "那些(that复数)", example: "Those books are mine.", exampleCn: "那些书是我的。", category: "代词", tier: "core" }
,
  {     word: "us", meaning: "我们 (宾格)", example: "They invited us to dinner.", exampleCn: "他们请我们吃晚饭。", category: "代词", tier: "core" }
,
  {     word: "we", meaning: "我们", example: "We are going to the park.", exampleCn: "我们要去公园。", category: "代词", tier: "core" }
,
  {     word: "you", meaning: "你、你们", example: "You are very kind.", exampleCn: "你人真好。", category: "代词", tier: "core" }
,
  {     word: "your", meaning: "你的", example: "Is this your bag?", exampleCn: "这是你的包吗？", category: "代词", tier: "core" }
,
  {     word: "yours", meaning: "你的 (名词性)", example: "Is this pen yours?", exampleCn: "这支笔是你的吗？", category: "代词", tier: "core" }
,
  {     word: "yourself", meaning: "你自己", example: "Take care of yourself.", exampleCn: "照顾好你自己。", category: "代词", tier: "core" }
,

  // --- 基本副词 — 时间、频率、程度、方式副词 ---
  {     word: "ago", meaning: "...以前", example: "I saw him two days ago.", exampleCn: "我两天前见过他。", category: "副词", tier: "core" }
,
  {     word: "almost", meaning: "几乎", example: "I'm almost done.", exampleCn: "我快做完了。", category: "副词", tier: "core" }
,
  {     word: "already", meaning: "已经", example: "I already ate.", exampleCn: "我已经吃过了。", category: "副词", tier: "core" }
,
  {     word: "also", meaning: "也", example: "I also want one.", exampleCn: "我也想要一个。", category: "副词", tier: "core" }
,
  {     word: "always", meaning: "总是", example: "He is always late.", exampleCn: "他总是迟到。", category: "副词", tier: "core" }
,
  {     word: "anyway", meaning: "无论如何/反正", example: "Anyway, I'll take it.", exampleCn: "反正我买了。", category: "副词", tier: "core" }
,
  {     word: "apart", meaning: "分开", example: "Apart from the price, it's great.", exampleCn: "除了价格之外，它很棒。", category: "副词", tier: "core" }
,
  {     word: "certainly", meaning: "当然/肯定", example: "I will certainly help you.", exampleCn: "我肯定会帮你。", category: "副词", tier: "core" }
,
  {     word: "definitely", meaning: "绝对/一定", example: "This is definitely the best.", exampleCn: "这绝对是最好的。", category: "副词", tier: "core" }
,
  {     word: "even", meaning: "甚至", example: "Even I can do it.", exampleCn: "连我都能做到。", category: "副词", tier: "core" }
,
  {     word: "ever", meaning: "曾经", example: "Have you ever shipped to Japan?", exampleCn: "你往日本发过货吗？", category: "副词", tier: "core" }
,
  {     word: "hardly", meaning: "几乎不", example: "I hardly know them.", exampleCn: "我几乎不认识他们。", category: "副词", tier: "core" }
,
  {     word: "here", meaning: "这里", example: "Come here.", exampleCn: "过来。", category: "副词", tier: "core" }
,
  {     word: "however", meaning: "然而", example: "However, there is a problem.", exampleCn: "然而，有一个问题。", category: "副词", tier: "core" }
,
  {     word: "instead", meaning: "代替/反而", example: "I chose this one instead.", exampleCn: "我反而选了这个。", category: "副词", tier: "core" }
,
  {     word: "just", meaning: "刚刚/只是", example: "I just arrived.", exampleCn: "我刚到。", category: "副词", tier: "core" }
,
  {     word: "maybe", meaning: "也许", example: "Maybe next time.", exampleCn: "也许下次吧。", category: "副词", tier: "core" }
,
  {     word: "nearly", meaning: "几乎/差不多", example: "Nearly finished.", exampleCn: "差不多完成了。", category: "副词", tier: "core" }
,
  {     word: "never", meaning: "从不", example: "I never smoke.", exampleCn: "我从不抽烟。", category: "副词", tier: "core" }
,
  {     word: "not", meaning: "不/不是", example: "I do not know.", exampleCn: "我不知道。", category: "副词", tier: "core" }
,
  {     word: "now", meaning: "现在", example: "I must go now.", exampleCn: "我必须现在走。", category: "副词", tier: "core" }
,
  {     word: "often", meaning: "经常", example: "How often do you exercise?", exampleCn: "你多久锻炼一次？", category: "副词", tier: "core" }
,
  {     word: "only", meaning: "只有/仅仅", example: "It's only $5.", exampleCn: "只要5美元。", category: "副词", tier: "core" }
,
  {     word: "otherwise", meaning: "否则", example: "Check it, otherwise you may regret.", exampleCn: "检查一下，否则你可能会后悔。", category: "副词", tier: "core" }
,
  {     word: "perhaps", meaning: "或许", example: "Perhaps you're right.", exampleCn: "或许你是对的。", category: "副词", tier: "core" }
,
  {     word: "please", meaning: "请", example: "Please sit down.", exampleCn: "请坐。", category: "副词", tier: "core" }
,
  {     word: "probably", meaning: "可能/大概", example: "It's probably fine.", exampleCn: "大概没问题。", category: "副词", tier: "core" }
,
  {     word: "quite", meaning: "相当/很", example: "Quite expensive but worth it.", exampleCn: "相当贵但值得。", category: "副词", tier: "core" }
,
  {     word: "rarely", meaning: "极少", example: "I rarely complain.", exampleCn: "我极少投诉。", category: "副词", tier: "core" }
,
  {     word: "rather", meaning: "相当/宁愿", example: "Rather difficult to explain.", exampleCn: "相当难解释。", category: "副词", tier: "core" }
,
  {     word: "really", meaning: "真的", example: "I really like it.", exampleCn: "我真的很喜欢。", category: "副词", tier: "core" }
,
  {     word: "seldom", meaning: "很少", example: "I seldom have problems.", exampleCn: "我很少有问题的。", category: "副词", tier: "core" }
,
  {     word: "sometimes", meaning: "有时候", example: "I sometimes walk to work.", exampleCn: "我有时走路上班。", category: "副词", tier: "core" }
,
  {     word: "soon", meaning: "很快", example: "I'll be back soon.", exampleCn: "我很快就回来。", category: "副词", tier: "core" }
,
  {     word: "still", meaning: "仍然", example: "I'm still waiting.", exampleCn: "我还在等。", category: "副词", tier: "core" }
,
  {     word: "then", meaning: "然后/那时", example: "Check it, then pay.", exampleCn: "先检查，然后付款。", category: "副词", tier: "core" }
,
  {     word: "there", meaning: "那里", example: "Put it there.", exampleCn: "放那里。", category: "副词", tier: "core" }
,
  {     word: "therefore", meaning: "因此", example: "Therefore, I want a refund.", exampleCn: "因此，我要退款。", category: "副词", tier: "core" }
,
  {     word: "today", meaning: "今天", example: "Today is Monday.", exampleCn: "今天是周一。", category: "副词", tier: "core" }
,
  {     word: "together", meaning: "一起", example: "Let's go together.", exampleCn: "我们一起去吧。", category: "副词", tier: "core" }
,
  {     word: "tomorrow", meaning: "明天", example: "See you tomorrow.", exampleCn: "明天见。", category: "副词", tier: "core" }
,
  {     word: "too", meaning: "太/也", example: "It's too hot.", exampleCn: "太热了。", category: "副词", tier: "core" }
,
  {     word: "usually", meaning: "通常", example: "I usually get up at 7.", exampleCn: "我通常7点起床。", category: "副词", tier: "core" }
,
  {     word: "very", meaning: "非常", example: "It's very good.", exampleCn: "非常好。", category: "副词", tier: "core" }
,
  {     word: "well", meaning: "好地", example: "She sings well.", exampleCn: "她唱歌好听。", category: "副词", tier: "core" }
,
  {     word: "yesterday", meaning: "昨天", example: "I was sick yesterday.", exampleCn: "我昨天病了。", category: "副词", tier: "core" }
,

  // --- 助动词 — be、do、have 的各类形式 ---
  {     word: "am", meaning: "是(I am)", example: "I am a student.", exampleCn: "我是学生。", category: "助动词", tier: "core" }
,
  {     word: "are", meaning: "是(you/we/they)", example: "We are friends.", exampleCn: "我们是朋友。", category: "助动词", tier: "core" }
,
  {     word: "be", meaning: "是、存在", example: "I want to be a doctor.", exampleCn: "我想成为一名医生。", category: "助动词", tier: "core" }
,
  {     word: "been", meaning: "是(过去分词)", example: "I have been to Beijing.", exampleCn: "我去过北京。", category: "助动词", tier: "core" }
,
  {     word: "being", meaning: "是(现在分词)", example: "She is being nice.", exampleCn: "她现在表现得很友善。", category: "助动词", tier: "core" }
,
  {     word: "did", meaning: "做(过去式)", example: "I did my best.", exampleCn: "我尽力了。", category: "助动词", tier: "core" }
,
  {     word: "do", meaning: "做", example: "What do you do?", exampleCn: "你是做什么的？", category: "助动词", tier: "core" }
,
  {     word: "does", meaning: "做(第三人称)", example: "He does his homework.", exampleCn: "他做作业。", category: "助动词", tier: "core" }
,
  {     word: "had", meaning: "有(过去式)", example: "I had a good time.", exampleCn: "我玩得很开心。", category: "助动词", tier: "core" }
,
  {     word: "has", meaning: "有(第三人称)", example: "She has a cat.", exampleCn: "她有一只猫。", category: "助动词", tier: "core" }
,
  {     word: "have", meaning: "有", example: "I have two brothers.", exampleCn: "我有两个兄弟。", category: "助动词", tier: "core" }
,
  {     word: "having", meaning: "有/正在(进行)", example: "I'm having trouble with the website.", exampleCn: "我用网站遇到问题。", category: "助动词", tier: "core" }
,
  {     word: "is", meaning: "是(he/she/it)", example: "She is a doctor.", exampleCn: "她是医生。", category: "助动词", tier: "core" }
,
  {     word: "was", meaning: "是(过去, I/he/she)", example: "He was late.", exampleCn: "他迟到了。", category: "助动词", tier: "core" }
,
  {     word: "were", meaning: "是(过去, you/we/they)", example: "They were happy.", exampleCn: "他们很开心。", category: "助动词", tier: "core" }
,

  // --- 情态动词 — 表示能力、意愿、义务 ---
  {     word: "can", meaning: "能/会", example: "I can swim.", exampleCn: "我会游泳。", category: "情态动词", tier: "core" }
,
  {     word: "could", meaning: "能(过去/委婉)", example: "Could you help me?", exampleCn: "你能帮我吗？", category: "情态动词", tier: "core" }
,
  {     word: "dare", meaning: "敢", example: "I dare say it's the best quality.", exampleCn: "我敢说这是最好的质量。", category: "情态动词", tier: "core" }
,
  {     word: "may", meaning: "可以/可能", example: "May I come in?", exampleCn: "我可以进来吗？", category: "情态动词", tier: "core" }
,
  {     word: "might", meaning: "可能", example: "It might rain.", exampleCn: "可能要下雨。", category: "情态动词", tier: "core" }
,
  {     word: "must", meaning: "必须", example: "You must go now.", exampleCn: "你必须现在走。", category: "情态动词", tier: "core" }
,
  {     word: "need", meaning: "需要", example: "I need your help.", exampleCn: "我需要你的帮助。", category: "情态动词", tier: "core" }
,
  {     word: "ought", meaning: "应该", example: "You ought to check the contract.", exampleCn: "你应该检查合同。", category: "情态动词", tier: "core" }
,
  {     word: "shall", meaning: "应该(正式)", example: "Shall we go?", exampleCn: "我们走吧？", category: "情态动词", tier: "core" }
,
  {     word: "should", meaning: "应该", example: "You should rest.", exampleCn: "你应该休息。", category: "情态动词", tier: "core" }
,
  {     word: "will", meaning: "将会", example: "I will come.", exampleCn: "我会来的。", category: "情态动词", tier: "core" }
,
  {     word: "would", meaning: "会(委婉/假设)", example: "I would like coffee.", exampleCn: "我想要咖啡。", category: "情态动词", tier: "core" }
,

  // --- 数词 — 基数词、序数词 ---
  {     word: "eight", meaning: "八", example: "There are eight people.", exampleCn: "有八个人。", category: "数词", tier: "core" }
,
  {     word: "eighteen", meaning: "十八", example: "Eighteen centimeters.", exampleCn: "十八厘米。", category: "数词", tier: "core" }
,
  {     word: "eighth", meaning: "第八", example: "The eighth order.", exampleCn: "第八个订单。", category: "数词", tier: "core" }
,
  {     word: "eighty", meaning: "八十", example: "Eighty units.", exampleCn: "八十件。", category: "数词", tier: "core" }
,
  {     word: "eleven", meaning: "十一", example: "Eleven items in total.", exampleCn: "总共十一件。", category: "数词", tier: "core" }
,
  {     word: "fifteen", meaning: "十五", example: "Fifteen minutes.", exampleCn: "十五分钟。", category: "数词", tier: "core" }
,
  {     word: "fifth", meaning: "第五", example: "The fifth item.", exampleCn: "第五件商品。", category: "数词", tier: "core" }
,
  {     word: "fifty", meaning: "五十", example: "Fifty percent deposit.", exampleCn: "百分之五十定金。", category: "数词", tier: "core" }
,
  {     word: "first", meaning: "第一", example: "This is my first order.", exampleCn: "这是我的第一单。", category: "数词", tier: "core" }
,
  {     word: "five", meaning: "五", example: "Give me five minutes.", exampleCn: "给我五分钟。", category: "数词", tier: "core" }
,
  {     word: "forty", meaning: "四十", example: "Forty feet container.", exampleCn: "四十尺柜。", category: "数词", tier: "core" }
,
  {     word: "four", meaning: "四", example: "I have four notebooks.", exampleCn: "我有四个笔记本。", category: "数词", tier: "core" }
,
  {     word: "fourteen", meaning: "十四", example: "Fourteen days return policy.", exampleCn: "十四天退货政策。", category: "数词", tier: "core" }
,
  {     word: "fourth", meaning: "第四", example: "The fourth quarter.", exampleCn: "第四季度。", category: "数词", tier: "core" }
,
  {     word: "hundred", meaning: "百", example: "One hundred pieces.", exampleCn: "一百件。", category: "数词", tier: "core" }
,
  {     word: "million", meaning: "百万", example: "A million dollars.", exampleCn: "一百万美元。", category: "数词", tier: "core" }
,
  {     word: "nine", meaning: "九", example: "The store opens at nine.", exampleCn: "商店九点开门。", category: "数词", tier: "core" }
,
  {     word: "nineteen", meaning: "十九", example: "Nineteen dollars each.", exampleCn: "每个十九美元。", category: "数词", tier: "core" }
,
  {     word: "ninety", meaning: "九十", example: "Ninety percent done.", exampleCn: "完成了百分之九十。", category: "数词", tier: "core" }
,
  {     word: "ninth", meaning: "第九", example: "The ninth customer.", exampleCn: "第九个客户。", category: "数词", tier: "core" }
,
  {     word: "one", meaning: "一", example: "I have one sister.", exampleCn: "我有一个姐妹。", category: "数词", tier: "core" }
,
  {     word: "second", meaning: "第二", example: "The second batch.", exampleCn: "第二批。", category: "数词", tier: "core" }
,
  {     word: "seven", meaning: "七", example: "I get up at seven.", exampleCn: "我七点起床。", category: "数词", tier: "core" }
,
  {     word: "seventeen", meaning: "十七", example: "Seventeen dollars.", exampleCn: "十七美元。", category: "数词", tier: "core" }
,
  {     word: "seventh", meaning: "第七", example: "The seventh day.", exampleCn: "第七天。", category: "数词", tier: "core" }
,
  {     word: "seventy", meaning: "七十", example: "Seventy dollars.", exampleCn: "七十美元。", category: "数词", tier: "core" }
,
  {     word: "six", meaning: "六", example: "She works six days a week.", exampleCn: "她一周工作六天。", category: "数词", tier: "core" }
,
  {     word: "sixteen", meaning: "十六", example: "Sixteen ounces.", exampleCn: "十六盎司。", category: "数词", tier: "core" }
,
  {     word: "sixth", meaning: "第六", example: "The sixth month.", exampleCn: "第六个月。", category: "数词", tier: "core" }
,
  {     word: "sixty", meaning: "六十", example: "Sixty days lead time.", exampleCn: "六十天交期。", category: "数词", tier: "core" }
,
  {     word: "ten", meaning: "十", example: "I'll be there in ten minutes.", exampleCn: "我十分钟后到。", category: "数词", tier: "core" }
,
  {     word: "tenth", meaning: "第十", example: "The tenth shipment.", exampleCn: "第十批货。", category: "数词", tier: "core" }
,
  {     word: "third", meaning: "第三", example: "The third time.", exampleCn: "第三次。", category: "数词", tier: "core" }
,
  {     word: "thirteen", meaning: "十三", example: "Thirteen dollars.", exampleCn: "十三美元。", category: "数词", tier: "core" }
,
  {     word: "thirty", meaning: "三十", example: "Thirty days net.", exampleCn: "三十天账期。", category: "数词", tier: "core" }
,
  {     word: "thousand", meaning: "千", example: "Two thousand units.", exampleCn: "两千件。", category: "数词", tier: "core" }
,
  {     word: "three", meaning: "三", example: "I'll be there at three.", exampleCn: "我三点到。", category: "数词", tier: "core" }
,
  {     word: "twelve", meaning: "十二", example: "Twelve pieces per box.", exampleCn: "每盒十二件。", category: "数词", tier: "core" }
,
  {     word: "twenty", meaning: "二十", example: "Twenty pieces minimum.", exampleCn: "最少二十件。", category: "数词", tier: "core" }
,
  {     word: "two", meaning: "二", example: "Two cups, please.", exampleCn: "请来两杯。", category: "数词", tier: "core" }
,

  // --- 疑问词 ---
  {     word: "how", meaning: "怎么", example: "How are you?", exampleCn: "你好吗？", category: "疑问词", tier: "core" }
,
  {     word: "what", meaning: "什么", example: "What is this?", exampleCn: "这是什么？", category: "疑问词", tier: "core" }
,
  {     word: "when", meaning: "什么时候 / 当...时", example: "When will you come?", exampleCn: "你什么时候来？", category: "疑问词", tier: "core" }
,
  {     word: "where", meaning: "哪里", example: "Where are you?", exampleCn: "你在哪？", category: "疑问词", tier: "core" }
,
  {     word: "which", meaning: "哪个", example: "Which one do you want?", exampleCn: "你要哪个？", category: "疑问词", tier: "core" }
,
  {     word: "who", meaning: "谁", example: "Who is that?", exampleCn: "那是谁？", category: "疑问词", tier: "core" }
,
  {     word: "whom", meaning: "谁(宾格)", example: "To whom should I send it?", exampleCn: "我应该发给谁？", category: "疑问词", tier: "core" }
,
  {     word: "whose", meaning: "谁的", example: "Whose bag is this?", exampleCn: "这是谁的包？", category: "疑问词", tier: "core" }
,
  {     word: "why", meaning: "为什么", example: "Why are you sad?", exampleCn: "你为什么难过？", category: "疑问词", tier: "core" }
,

  // --- 语气词 — 感叹、回应、招呼 ---
  {     word: "bye", meaning: "拜", example: "Bye! Take care.", exampleCn: "拜！保重。", category: "语气词", tier: "core" }
,
  {     word: "hello", meaning: "你好", example: "Hello, how are you?", exampleCn: "你好，你好吗？", category: "语气词", tier: "core" }
,
  {     word: "hey", meaning: "嘿", example: "Hey, how are you?", exampleCn: "嘿，你好吗？", category: "语气词", tier: "core" }
,
  {     word: "hi", meaning: "嗨", example: "Hi, nice to meet you.", exampleCn: "嗨，很高兴见到你。", category: "语气词", tier: "core" }
,
  {     word: "no", meaning: "没有 / 不/不是", example: "I have no money.", exampleCn: "我没钱。", category: "语气词", tier: "core" }
,
  {     word: "oh", meaning: "哦", example: "Oh, I see.", exampleCn: "哦，我明白了。", category: "语气词", tier: "core" }
,
  {     word: "OK", meaning: "好的", example: "OK, let's go.", exampleCn: "好的，走吧。", category: "语气词", tier: "core" }
,
  {     word: "sorry", meaning: "对不起", example: "I'm so sorry.", exampleCn: "我很抱歉。", category: "语气词", tier: "core" }
,
  {     word: "yes", meaning: "是/对", example: "Yes, I agree.", exampleCn: "是的，我同意。", category: "语气词", tier: "core" }
,

  // --- 连词 — 并列连词、从属连词 ---
  {     word: "although", meaning: "虽然", example: "Although it's hard, I'll try.", exampleCn: "虽然难，但我会试试。", category: "连词", tier: "core" }
,
  {     word: "and", meaning: "和", example: "You and me.", exampleCn: "你和我。", category: "连词", tier: "core" }
,
  {     word: "because", meaning: "因为", example: "I'm tired because I worked late.", exampleCn: "我累是因为加班了。", category: "连词", tier: "core" }
,
  {     word: "both", meaning: "两者都", example: "Both are good.", exampleCn: "两个都好。", category: "连词", tier: "core" }
,
  {     word: "but", meaning: "但是", example: "I like it, but it's expensive.", exampleCn: "我喜欢，但太贵了。", category: "连词", tier: "core" }
,
  {     word: "either", meaning: "两者之一", example: "Either is fine.", exampleCn: "随便哪个都行。", category: "连词", tier: "core" }
,
  {     word: "if", meaning: "如果", example: "If it rains, I won't go.", exampleCn: "如果下雨，我就不去。", category: "连词", tier: "core" }
,
  {     word: "neither", meaning: "两者都不", example: "Neither works.", exampleCn: "两个都不行。", category: "连词", tier: "core" }
,
  {     word: "nor", meaning: "也不", example: "Not big nor small.", exampleCn: "不大也不小。", category: "连词", tier: "core" }
,
  {     word: "or", meaning: "或者", example: "Tea or coffee?", exampleCn: "茶还是咖啡？", category: "连词", tier: "core" }
,
  {     word: "so", meaning: "所以 / 如此/这么", example: "It's raining, so take an umbrella.", exampleCn: "在下雨，所以带把伞。", category: "连词", tier: "core" }
,
  {     word: "than", meaning: "比", example: "She is taller than me.", exampleCn: "她比我高。", category: "连词", tier: "core" }
,
  {     word: "though", meaning: "虽然", example: "Though I am new to this.", exampleCn: "虽然我是新手。", category: "连词", tier: "core" }
,
  {     word: "unless", meaning: "除非", example: "Unless you check first.", exampleCn: "除非你先检查。", category: "连词", tier: "core" }
,
  {     word: "whether", meaning: "是否", example: "I don't know whether it's in stock.", exampleCn: "我不知道是否有货。", category: "连词", tier: "core" }
,
  {     word: "while", meaning: "当...的时候", example: "I listen to music while working.", exampleCn: "我工作时听音乐。", category: "连词", tier: "core" }
,
  {     word: "yet", meaning: "还(没)", example: "I haven't finished yet.", exampleCn: "我还没完成。", category: "连词", tier: "core" }
,

  // --- 限定词/量词 — 冠词、指示词、数量限定词 ---
  {     word: "a", meaning: "一个(辅音前)", example: "I have a dog.", exampleCn: "我有一只狗。", category: "限定词", tier: "core" }
,
  {     word: "all", meaning: "所有", example: "All of us agree.", exampleCn: "我们都同意。", category: "限定词", tier: "core" }
,
  {     word: "an", meaning: "一个(元音前)", example: "I ate an apple.", exampleCn: "我吃了一个苹果。", category: "限定词", tier: "core" }
,
  {     word: "another", meaning: "另一个", example: "Can I have another one?", exampleCn: "能再给我一个吗？", category: "限定词", tier: "core" }
,
  {     word: "any", meaning: "任何", example: "Do you have any questions?", exampleCn: "你有问题吗？", category: "限定词", tier: "core" }
,
  {     word: "certain", meaning: "某些/确定", example: "Certain items are out of stock.", exampleCn: "某些商品缺货。", category: "限定词", tier: "core" }
,
  {     word: "each", meaning: "每个", example: "Each one is different.", exampleCn: "每个都不一样。", category: "限定词", tier: "core" }
,
  {     word: "enough", meaning: "足够", example: "That's enough.", exampleCn: "够了。", category: "限定词", tier: "core" }
,
  {     word: "every", meaning: "每个", example: "Every student passed.", exampleCn: "每个学生都通过了。", category: "限定词", tier: "core" }
,
  {     word: "few", meaning: "很少(可数)", example: "A few days ago.", exampleCn: "几天前。", category: "限定词", tier: "core" }
,
  // --- 新增: 健康与身体 ---
  { word: "clinic", meaning: "诊所", example: "Go to the clinic.", exampleCn: "去诊所。", category: "健康与身体", tier: "high" }
,
  { word: "surgery", meaning: "手术", example: "Minor surgery.", exampleCn: "小手术。", category: "健康与身体", tier: "high" }
,
  { word: "wound", meaning: "伤口", example: "Clean the wound.", exampleCn: "清洗伤口。", category: "健康与身体", tier: "high" }
,
  { word: "bandage", meaning: "绷带", example: "Put on a bandage.", exampleCn: "贴上绷带。", category: "健康与身体", tier: "high" }
,
  { word: "needle", meaning: "针/注射", example: "The needle hurts.", exampleCn: "针扎得疼。", category: "健康与身体", tier: "high" }
,
  { word: "lung", meaning: "肺", example: "Lung health.", exampleCn: "肺部健康。", category: "健康与身体", tier: "high" }
,
  { word: "liver", meaning: "肝脏", example: "Liver function.", exampleCn: "肝功能。", category: "健康与身体", tier: "high" }
,
  { word: "tongue", meaning: "舌头", example: "Burnt my tongue.", exampleCn: "烫到舌头了。", category: "健康与身体", tier: "high" }
,
  { word: "thumb", meaning: "拇指", example: "Thumb up.", exampleCn: "竖起拇指。", category: "健康与身体", tier: "high" }
,
  { word: "elbow", meaning: "肘部", example: "Elbow pain.", exampleCn: "肘部疼痛。", category: "健康与身体", tier: "high" }
,
  { word: "ankle", meaning: "脚踝", example: "Twist an ankle.", exampleCn: "扭伤脚踝。", category: "健康与身体", tier: "high" }
,
  { word: "waist", meaning: "腰", example: "Waist size.", exampleCn: "腰围。", category: "健康与身体", tier: "high" }
,
  { word: "chest", meaning: "胸部", example: "Chest pain.", exampleCn: "胸痛。", category: "健康与身体", tier: "high" }
,
  { word: "chin", meaning: "下巴", example: "Chin up.", exampleCn: "抬起下巴。", category: "健康与身体", tier: "high" }
,
  { word: "forehead", meaning: "额头", example: "Hot forehead.", exampleCn: "额头热。", category: "健康与身体", tier: "high" }
,
  { word: "sweat", meaning: "汗水", example: "Cold sweat.", exampleCn: "冷汗。", category: "健康与身体", tier: "high" }
,
  { word: "bruise", meaning: "淤青", example: "A bruise on my leg.", exampleCn: "腿上淤青。", category: "健康与身体", tier: "high" }
,
  { word: "scar", meaning: "疤痕", example: "A small scar.", exampleCn: "小疤痕。", category: "健康与身体", tier: "high" }
,
  { word: "faint", meaning: "晕倒/微弱的", example: "Feel faint.", exampleCn: "感觉要晕倒。", category: "健康与身体", tier: "high" }
,
  { word: "dizzy", meaning: "头晕的", example: "I feel dizzy.", exampleCn: "我觉得头晕。", category: "健康与身体", tier: "high" }
,
  { word: "prescription", meaning: "处方", example: "Doctor's prescription.", exampleCn: "医生处方。", category: "健康与身体", tier: "high" }
,
  { word: "vaccine", meaning: "疫苗", example: "Get the vaccine.", exampleCn: "打疫苗。", category: "健康与身体", tier: "high" }
,
  { word: "symptom", meaning: "症状", example: "Flu symptoms.", exampleCn: "流感症状。", category: "健康与身体", tier: "high" }
,
  { word: "therapy", meaning: "治疗/疗法", example: "Physical therapy.", exampleCn: "物理治疗。", category: "健康与身体", tier: "high" }
,
  { word: "dose", meaning: "剂量", example: "One dose daily.", exampleCn: "每日一剂。", category: "健康与身体", tier: "high" }
,
  { word: "poison", meaning: "毒药", example: "Rat poison.", exampleCn: "老鼠药。", category: "健康与身体", tier: "high" }
,
  { word: "injury", meaning: "受伤", example: "Serious injury.", exampleCn: "重伤。", category: "健康与身体", tier: "high" }
,
  { word: "ambulance", meaning: "救护车", example: "Call an ambulance.", exampleCn: "叫救护车。", category: "健康与身体", tier: "high" }
,
  { word: "emergency", meaning: "紧急情况", example: "In an emergency.", exampleCn: "紧急情况下。", category: "健康与身体", tier: "high" }
,
  // --- 新增: 出行与交通 ---
  { word: "vehicle", meaning: "车辆", example: "Motor vehicle.", exampleCn: "机动车辆。", category: "出行与交通", tier: "high" }
,
  { word: "brake", meaning: "刹车", example: "Hit the brake.", exampleCn: "踩刹车。", category: "出行与交通", tier: "high" }
,
  { word: "horn", meaning: "喇叭", example: "Honk the horn.", exampleCn: "按喇叭。", category: "出行与交通", tier: "high" }
,
  { word: "helmet", meaning: "头盔", example: "Wear a helmet.", exampleCn: "戴头盔。", category: "出行与交通", tier: "high" }
,
  { word: "lane", meaning: "车道", example: "Bike lane.", exampleCn: "自行车道。", category: "出行与交通", tier: "high" }
,
  { word: "route", meaning: "路线", example: "Best route.", exampleCn: "最佳路线。", category: "出行与交通", tier: "high" }
,
  { word: "destination", meaning: "目的地", example: "Final destination.", exampleCn: "最终目的地。", category: "出行与交通", tier: "high" }
,
  { word: "terminal", meaning: "航站楼/终点站", example: "Airport terminal.", exampleCn: "机场航站楼。", category: "出行与交通", tier: "high" }
,
  { word: "runway", meaning: "跑道", example: "The plane is on the runway.", exampleCn: "飞机在跑道上。", category: "出行与交通", tier: "high" }
,
  { word: "harbor", meaning: "港口", example: "Fishing harbor.", exampleCn: "渔港。", category: "出行与交通", tier: "high" }
,
  { word: "anchor", meaning: "锚", example: "Drop anchor.", exampleCn: "抛锚。", category: "出行与交通", tier: "high" }
,
  { word: "sail", meaning: "帆/航行", example: "Set sail tomorrow.", exampleCn: "明天起航。", category: "出行与交通", tier: "high" }
,
  { word: "deck", meaning: "甲板", example: "On the deck.", exampleCn: "在甲板上。", category: "出行与交通", tier: "high" }
,
  { word: "cabin", meaning: "客舱/小屋", example: "Book a cabin.", exampleCn: "预订客舱。", category: "出行与交通", tier: "high" }
,
  { word: "cruise", meaning: "巡游/邮轮", example: "Cruise ship.", exampleCn: "邮轮。", category: "出行与交通", tier: "high" }
,
  { word: "subway", meaning: "地铁", example: "Take the subway.", exampleCn: "坐地铁。", category: "出行与交通", tier: "high" }
,
  { word: "railway", meaning: "铁路", example: "Railway station.", exampleCn: "火车站。", category: "出行与交通", tier: "high" }
,
  { word: "freeway", meaning: "高速公路", example: "Drive on the freeway.", exampleCn: "在高速上开车。", category: "出行与交通", tier: "high" }
,
  { word: "avenue", meaning: "大街/大道", example: "Fifth Avenue.", exampleCn: "第五大道。", category: "出行与交通", tier: "high" }
,
  { word: "alley", meaning: "小巷", example: "Dark alley.", exampleCn: "黑暗的小巷。", category: "出行与交通", tier: "high" }
,
  { word: "crosswalk", meaning: "人行横道", example: "Use the crosswalk.", exampleCn: "走人行横道。", category: "出行与交通", tier: "high" }
,
  { word: "intersection", meaning: "十字路口", example: "At the intersection.", exampleCn: "在十字路口。", category: "出行与交通", tier: "high" }
,
  { word: "trail", meaning: "小径/步道", example: "Hiking trail.", exampleCn: "徒步步道。", category: "出行与交通", tier: "high" }
,
  { word: "tourist", meaning: "游客", example: "Tourist attraction.", exampleCn: "旅游景点。", category: "出行与交通", tier: "high" }
,
  { word: "guide", meaning: "导游/指南", example: "Tour guide.", exampleCn: "导游。", category: "出行与交通", tier: "high" }
,
  { word: "museum", meaning: "博物馆", example: "Art museum.", exampleCn: "艺术博物馆。", category: "出行与交通", tier: "high" }
,
  // --- 新增: 工作与学习 ---
  { word: "bonus", meaning: "奖金", example: "Year-end bonus.", exampleCn: "年终奖。", category: "工作与学习", tier: "high" }
,
  { word: "career", meaning: "职业/事业", example: "Career path.", exampleCn: "职业道路。", category: "工作与学习", tier: "high" }
,
  { word: "profession", meaning: "专业/职业", example: "The legal profession.", exampleCn: "法律行业。", category: "工作与学习", tier: "high" }
,
  { word: "diploma", meaning: "文凭", example: "College diploma.", exampleCn: "大学文凭。", category: "工作与学习", tier: "high" }
,
  { word: "degree", meaning: "学位/程度", example: "Master's degree.", exampleCn: "硕士学位。", category: "工作与学习", tier: "high" }
,
  { word: "research", meaning: "研究", example: "Do research.", exampleCn: "做研究。", category: "工作与学习", tier: "high" }
,
  { word: "experiment", meaning: "实验", example: "Science experiment.", exampleCn: "科学实验。", category: "工作与学习", tier: "high" }
,
  { word: "theory", meaning: "理论", example: "In theory.", exampleCn: "理论上。", category: "工作与学习", tier: "high" }
,
  { word: "knowledge", meaning: "知识", example: "Share knowledge.", exampleCn: "分享知识。", category: "工作与学习", tier: "high" }
,
  { word: "wisdom", meaning: "智慧", example: "Words of wisdom.", exampleCn: "智慧之言。", category: "工作与学习", tier: "high" }
,
  { word: "talent", meaning: "天赋/才能", example: "Natural talent.", exampleCn: "与生俱来的天赋。", category: "工作与学习", tier: "high" }
,
  { word: "effort", meaning: "努力", example: "Make an effort.", exampleCn: "努力。", category: "工作与学习", tier: "high" }
,
  { word: "achievement", meaning: "成就", example: "A great achievement.", exampleCn: "很大的成就。", category: "工作与学习", tier: "high" }
,
  { word: "assignment", meaning: "作业/任务", example: "Homework assignment.", exampleCn: "家庭作业。", category: "工作与学习", tier: "high" }
,
  { word: "subject", meaning: "学科/主题", example: "Favorite subject.", exampleCn: "最喜欢的科目。", category: "工作与学习", tier: "high" }
,
  { word: "science", meaning: "科学", example: "Computer science.", exampleCn: "计算机科学。", category: "工作与学习", tier: "high" }
,
  { word: "math", meaning: "数学", example: "Math class.", exampleCn: "数学课。", category: "工作与学习", tier: "high" }
,
  { word: "history", meaning: "历史", example: "World history.", exampleCn: "世界史。", category: "工作与学习", tier: "high" }
,
  { word: "geography", meaning: "地理", example: "Geography lesson.", exampleCn: "地理课。", category: "工作与学习", tier: "high" }
,
  { word: "art", meaning: "艺术", example: "Work of art.", exampleCn: "艺术品。", category: "工作与学习", tier: "high" }
,
  { word: "music", meaning: "音乐", example: "Listen to music.", exampleCn: "听音乐。", category: "工作与学习", tier: "high" }
,
  // --- 新增: 情感与态度 ---
  { word: "mood", meaning: "心情", example: "Good mood.", exampleCn: "好心情。", category: "情感与态度", tier: "high" }
,
  { word: "emotion", meaning: "情感", example: "Show emotion.", exampleCn: "流露情感。", category: "情感与态度", tier: "high" }
,
  { word: "feeling", meaning: "感觉", example: "A strange feeling.", exampleCn: "奇怪的感觉。", category: "情感与态度", tier: "high" }
,
  { word: "peace", meaning: "和平/平静", example: "Peace of mind.", exampleCn: "内心的平静。", category: "情感与态度", tier: "high" }
,
  { word: "joy", meaning: "快乐", example: "Tears of joy.", exampleCn: "喜悦的泪水。", category: "情感与态度", tier: "high" }
,
  { word: "pleasure", meaning: "愉快", example: "It's a pleasure.", exampleCn: "很荣幸。", category: "情感与态度", tier: "high" }
,
  { word: "pride", meaning: "骄傲", example: "Take pride in your work.", exampleCn: "以工作为豪。", category: "情感与态度", tier: "high" }
,
  { word: "shame", meaning: "羞耻", example: "What a shame.", exampleCn: "真可惜。", category: "情感与态度", tier: "high" }
,
  { word: "guilt", meaning: "内疚", example: "Feel guilt.", exampleCn: "感到内疚。", category: "情感与态度", tier: "high" }
,
  { word: "regret", meaning: "后悔", example: "No regrets.", exampleCn: "不后悔。", category: "情感与态度", tier: "high" }
,
  { word: "envy", meaning: "嫉妒", example: "Green with envy.", exampleCn: "妒火中烧。", category: "情感与态度", tier: "high" }
,
  { word: "doubt", meaning: "怀疑", example: "Without a doubt.", exampleCn: "毫无疑问。", category: "情感与态度", tier: "high" }
,
  { word: "confidence", meaning: "信心", example: "Build confidence.", exampleCn: "建立信心。", category: "情感与态度", tier: "high" }
,
  { word: "courage", meaning: "勇气", example: "Take courage.", exampleCn: "鼓起勇气。", category: "情感与态度", tier: "high" }
,
  { word: "fear", meaning: "恐惧", example: "Overcome fear.", exampleCn: "克服恐惧。", category: "情感与态度", tier: "high" }
,
  { word: "faith", meaning: "信仰/信念", example: "Keep the faith.", exampleCn: "保持信念。", category: "情感与态度", tier: "high" }
,
  { word: "respect", meaning: "尊重", example: "Show respect.", exampleCn: "表示尊重。", category: "情感与态度", tier: "high" }
,
  { word: "gratitude", meaning: "感激", example: "Express gratitude.", exampleCn: "表达感激。", category: "情感与态度", tier: "high" }
,
  { word: "attitude", meaning: "态度", example: "Positive attitude.", exampleCn: "积极的态度。", category: "情感与态度", tier: "high" }
,
  { word: "patience", meaning: "耐心", example: "Have patience.", exampleCn: "有点耐心。", category: "情感与态度", tier: "high" }
,
  { word: "curiosity", meaning: "好奇心", example: "Out of curiosity.", exampleCn: "出于好奇。", category: "情感与态度", tier: "high" }
,
  { word: "disappointment", meaning: "失望", example: "Big disappointment.", exampleCn: "大失所望。", category: "情感与态度", tier: "high" }
,
  { word: "loneliness", meaning: "孤独", example: "Feel loneliness.", exampleCn: "感到孤独。", category: "情感与态度", tier: "high" }
,
  { word: "anxiety", meaning: "焦虑", example: "Reduce anxiety.", exampleCn: "减轻焦虑。", category: "情感与态度", tier: "high" }
,
  { word: "stress", meaning: "压力", example: "Under stress.", exampleCn: "在压力下。", category: "情感与态度", tier: "high" }
,
  { word: "relief", meaning: "缓解/松了口气", example: "A sense of relief.", exampleCn: "如释重负。", category: "情感与态度", tier: "high" }
,
  { word: "shock", meaning: "震惊", example: "In shock.", exampleCn: "震惊中。", category: "情感与态度", tier: "high" }
,
  { word: "humor", meaning: "幽默", example: "Sense of humor.", exampleCn: "幽默感。", category: "情感与态度", tier: "high" }
,
  { word: "interest", meaning: "兴趣/利息", example: "Take an interest.", exampleCn: "产生兴趣。", category: "情感与态度", tier: "high" }
,
  // --- 新增: 描述性质 ---
  { word: "rare", meaning: "稀有的", example: "A rare bird.", exampleCn: "稀有鸟类。", category: "描述性质", tier: "high" }
,
  { word: "extraordinary", meaning: "非凡的", example: "Extraordinary talent.", exampleCn: "非凡才华。", category: "描述性质", tier: "high" }
,
  { word: "opposite", meaning: "相反的", example: "Opposite direction.", exampleCn: "相反方向。", category: "描述性质", tier: "high" }
,
  { word: "entire", meaning: "整个的", example: "The entire day.", exampleCn: "一整天。", category: "描述性质", tier: "high" }
,
  { word: "major", meaning: "主要的", example: "Major problem.", exampleCn: "主要问题。", category: "描述性质", tier: "high" }
,
  { word: "minor", meaning: "次要的", example: "Minor issue.", exampleCn: "小问题。", category: "描述性质", tier: "high" }
,
  { word: "silly", meaning: "愚蠢可笑的", example: "Silly question.", exampleCn: "傻问题。", category: "描述性质", tier: "high" }
,
  { word: "sensible", meaning: "明智的", example: "Sensible choice.", exampleCn: "明智的选择。", category: "描述性质", tier: "high" }
,
  { word: "reasonable", meaning: "合理的", example: "Reasonable price.", exampleCn: "合理的价格。", category: "描述性质", tier: "high" }
,
  { word: "cruel", meaning: "残忍的", example: "Cruel joke.", exampleCn: "残忍的玩笑。", category: "描述性质", tier: "high" }
,
  { word: "gentle", meaning: "温柔的", example: "Gentle touch.", exampleCn: "轻柔的触摸。", category: "描述性质", tier: "high" }
,
  { word: "rough", meaning: "粗糙的/艰难的", example: "Rough surface.", exampleCn: "粗糙的表面。", category: "描述性质", tier: "high" }
,
  { word: "tough", meaning: "坚韧的/艰难的", example: "Tough decision.", exampleCn: "艰难的抉择。", category: "描述性质", tier: "high" }
,
  { word: "firm", meaning: "坚定的/结实的", example: "Firm decision.", exampleCn: "坚定的决定。", category: "描述性质", tier: "high" }
,
  { word: "steady", meaning: "稳定的", example: "Steady job.", exampleCn: "稳定的工作。", category: "描述性质", tier: "high" }
,
  { word: "hollow", meaning: "中空的", example: "Hollow tube.", exampleCn: "空心管。", category: "描述性质", tier: "high" }
,
  { word: "solid", meaning: "固体的/结实的", example: "Solid wood.", exampleCn: "实木。", category: "描述性质", tier: "high" }
,
  { word: "liquid", meaning: "液体的", example: "Liquid soap.", exampleCn: "液体皂。", category: "描述性质", tier: "high" }
,
  { word: "raw", meaning: "生的/未经加工的", example: "Raw material.", exampleCn: "原材料。", category: "描述性质", tier: "high" }
,
  { word: "ripe", meaning: "熟的", example: "Ripe banana.", exampleCn: "熟香蕉。", category: "描述性质", tier: "high" }
,
  { word: "rotten", meaning: "腐烂的", example: "Rotten apple.", exampleCn: "烂苹果。", category: "描述性质", tier: "high" }
,
  { word: "stale", meaning: "不新鲜的", example: "Stale bread.", exampleCn: "不新鲜的面包。", category: "描述性质", tier: "high" }
,
  { word: "crispy", meaning: "酥脆的", example: "Crispy chicken.", exampleCn: "脆皮鸡。", category: "描述性质", tier: "high" }
,
  { word: "juicy", meaning: "多汁的", example: "Juicy steak.", exampleCn: "多汁的牛排。", category: "描述性质", tier: "high" }
,
  { word: "tender", meaning: "嫩的/温柔的", example: "Tender meat.", exampleCn: "嫩肉。", category: "描述性质", tier: "high" }
,
  { word: "greasy", meaning: "油腻的", example: "Greasy food.", exampleCn: "油腻的食物。", category: "描述性质", tier: "high" }
,
  { word: "damp", meaning: "潮湿的", example: "Damp towel.", exampleCn: "湿毛巾。", category: "描述性质", tier: "high" }
,
  { word: "steep", meaning: "陡峭的", example: "Steep hill.", exampleCn: "陡峭的山。", category: "描述性质", tier: "high" }
,
  { word: "shallow", meaning: "浅的", example: "Shallow water.", exampleCn: "浅水。", category: "描述性质", tier: "high" }
,
  { word: "broad", meaning: "宽阔的", example: "Broad shoulders.", exampleCn: "宽阔的肩膀。", category: "描述性质", tier: "high" }
,
  { word: "dense", meaning: "密集的/浓厚的", example: "Dense fog.", exampleCn: "浓雾。", category: "描述性质", tier: "high" }
,
  { word: "sparse", meaning: "稀疏的", example: "Sparse population.", exampleCn: "人烟稀少。", category: "描述性质", tier: "high" }
,
  { word: "visible", meaning: "看得见的", example: "Clearly visible.", exampleCn: "清晰可见。", category: "描述性质", tier: "high" }
,
  { word: "invisible", meaning: "看不见的", example: "Almost invisible.", exampleCn: "几乎看不见。", category: "描述性质", tier: "high" }
,
  { word: "familiar", meaning: "熟悉的", example: "A familiar face.", exampleCn: "熟面孔。", category: "描述性质", tier: "high" }
,
  { word: "native", meaning: "本国的/母语的", example: "Native speaker.", exampleCn: "母语者。", category: "描述性质", tier: "high" }
,
  { word: "specific", meaning: "具体的", example: "Be more specific.", exampleCn: "说得更具体。", category: "描述性质", tier: "high" }
,
  { word: "general", meaning: "一般的/总的", example: "General idea.", exampleCn: "大概意思。", category: "描述性质", tier: "high" }
,
  { word: "likely", meaning: "可能的", example: "Most likely.", exampleCn: "很可能。", category: "描述性质", tier: "high" }
,
  { word: "proper", meaning: "合适的", example: "Proper way.", exampleCn: "正确的方式。", category: "描述性质", tier: "high" }
,
  { word: "suitable", meaning: "适合的", example: "A suitable candidate.", exampleCn: "合适的人选。", category: "描述性质", tier: "high" }
,
  { word: "convenient", meaning: "方便的", example: "A convenient time.", exampleCn: "方便的时间。", category: "描述性质", tier: "high" }
,
  { word: "formal", meaning: "正式的", example: "Formal meeting.", exampleCn: "正式会议。", category: "描述性质", tier: "high" }
,
  { word: "casual", meaning: "随意的/休闲的", example: "Casual clothes.", exampleCn: "休闲服装。", category: "描述性质", tier: "high" }
,
  { word: "eager", meaning: "热切的", example: "Eager to learn.", exampleCn: "渴望学习。", category: "描述性质", tier: "high" }
,
  { word: "loyal", meaning: "忠诚的", example: "Loyal customer.", exampleCn: "忠实顾客。", category: "描述性质", tier: "high" }
,
  // --- 新增: 数量与程度 ---
  { word: "quantity", meaning: "数量", example: "In large quantities.", exampleCn: "大量地。", category: "数量与程度", tier: "high" }
,
  { word: "plenty", meaning: "大量/充足", example: "Plenty of time.", exampleCn: "充足的时间。", category: "数量与程度", tier: "high" }
,
  { word: "spare", meaning: "多余的/备用的", example: "Spare time.", exampleCn: "空闲时间。", category: "数量与程度", tier: "high" }
,
  { word: "majority", meaning: "大多数", example: "The majority of people.", exampleCn: "大多数人。", category: "数量与程度", tier: "high" }
,
  { word: "minority", meaning: "少数", example: "A small minority.", exampleCn: "一小部分人。", category: "数量与程度", tier: "high" }
,
  { word: "inch", meaning: "英寸", example: "One inch long.", exampleCn: "一英寸长。", category: "数量与程度", tier: "high" }
,
  { word: "mile", meaning: "英里", example: "A mile away.", exampleCn: "一英里远。", category: "数量与程度", tier: "high" }
,
  { word: "liter", meaning: "升", example: "One liter of water.", exampleCn: "一升水。", category: "数量与程度", tier: "high" }
,
  { word: "kilo", meaning: "公斤", example: "One kilo of rice.", exampleCn: "一公斤米。", category: "数量与程度", tier: "high" }
,
  { word: "gram", meaning: "克", example: "Hundred grams.", exampleCn: "一百克。", category: "数量与程度", tier: "high" }
,
  { word: "ton", meaning: "吨", example: "A ton of steel.", exampleCn: "一吨钢。", category: "数量与程度", tier: "high" }
,
  { word: "dozen", meaning: "一打/十二个", example: "A dozen eggs.", exampleCn: "一打鸡蛋。", category: "数量与程度", tier: "high" }
,
  // --- 新增: 日常生活 ---
  { word: "balcony", meaning: "阳台", example: "On the balcony.", exampleCn: "在阳台上。", category: "日常生活", tier: "high" }
,
  { word: "basement", meaning: "地下室", example: "In the basement.", exampleCn: "在地下室。", category: "日常生活", tier: "high" }
,
  { word: "attic", meaning: "阁楼", example: "In the attic.", exampleCn: "在阁楼里。", category: "日常生活", tier: "high" }
,
  { word: "fence", meaning: "围栏/篱笆", example: "Wooden fence.", exampleCn: "木围栏。", category: "日常生活", tier: "high" }
,
  { word: "gate", meaning: "大门", example: "Open the gate.", exampleCn: "开大门。", category: "日常生活", tier: "high" }
,
  { word: "driveway", meaning: "车道(私人)", example: "Park in the driveway.", exampleCn: "停在车道上。", category: "日常生活", tier: "high" }
,
  { word: "lawn", meaning: "草坪", example: "Mow the lawn.", exampleCn: "修剪草坪。", category: "日常生活", tier: "high" }
,
  { word: "chimney", meaning: "烟囱", example: "Smoke from the chimney.", exampleCn: "烟囱冒烟。", category: "日常生活", tier: "high" }
,
  { word: "sheet", meaning: "床单/纸张", example: "Bed sheet.", exampleCn: "床单。", category: "日常生活", tier: "high" }
,
  { word: "soap", meaning: "肥皂", example: "A bar of soap.", exampleCn: "一块肥皂。", category: "日常生活", tier: "high" }
,
  { word: "brush", meaning: "刷子", example: "Hair brush.", exampleCn: "发刷。", category: "日常生活", tier: "high" }
,
  { word: "comb", meaning: "梳子", example: "A wooden comb.", exampleCn: "木梳。", category: "日常生活", tier: "high" }
,
  { word: "razor", meaning: "剃须刀", example: "Electric razor.", exampleCn: "电动剃须刀。", category: "日常生活", tier: "high" }
,
  { word: "switch", meaning: "开关", example: "Light switch.", exampleCn: "电灯开关。", category: "日常生活", tier: "high" }
,
  { word: "plug", meaning: "插头", example: "Power plug.", exampleCn: "电源插头。", category: "日常生活", tier: "high" }
,
  { word: "cord", meaning: "电线/绳索", example: "Extension cord.", exampleCn: "延长线。", category: "日常生活", tier: "high" }
,
  { word: "hammer", meaning: "锤子", example: "Hit with a hammer.", exampleCn: "用锤子敲。", category: "日常生活", tier: "high" }
,
  { word: "nail", meaning: "钉子/指甲", example: "Drive a nail.", exampleCn: "钉钉子。", category: "日常生活", tier: "high" }
,
  { word: "screw", meaning: "螺丝", example: "Tighten the screw.", exampleCn: "拧紧螺丝。", category: "日常生活", tier: "high" }
,
  { word: "chain", meaning: "链条", example: "Bicycle chain.", exampleCn: "自行车链条。", category: "日常生活", tier: "high" }
,
  // --- 新增: 时间与日期 ---
  { word: "fortnight", meaning: "两周", example: "In a fortnight.", exampleCn: "两周后。", category: "时间与日期", tier: "high" }
,
  { word: "decade", meaning: "十年", example: "A decade ago.", exampleCn: "十年前。", category: "时间与日期", tier: "high" }
,
  { word: "century", meaning: "世纪", example: "The 21st century.", exampleCn: "21世纪。", category: "时间与日期", tier: "high" }
,
  { word: "era", meaning: "时代", example: "A new era.", exampleCn: "新时代。", category: "时间与日期", tier: "high" }
,
  { word: "overnight", meaning: "通宵/一夜之间", example: "Stay overnight.", exampleCn: "过夜。", category: "时间与日期", tier: "high" }
,
  { word: "recently", meaning: "最近", example: "I recently moved.", exampleCn: "我最近搬家了。", category: "时间与日期", tier: "high" }
,
  { word: "lately", meaning: "最近/近来", example: "Have you seen him lately?", exampleCn: "你最近见到他了吗？", category: "时间与日期", tier: "high" }
,
  { word: "shortly", meaning: "不久/马上", example: "I'll be there shortly.", exampleCn: "我马上到。", category: "时间与日期", tier: "high" }
,
  { word: "instantly", meaning: "立刻", example: "Reply instantly.", exampleCn: "立刻回复。", category: "时间与日期", tier: "high" }
,
  { word: "gradually", meaning: "逐渐地", example: "Gradually improve.", exampleCn: "逐步改善。", category: "时间与日期", tier: "high" }
,
  { word: "eventually", meaning: "最终", example: "He eventually agreed.", exampleCn: "他最终同意了。", category: "时间与日期", tier: "high" }
,
  { word: "frequently", meaning: "频繁地", example: "Frequently asked questions.", exampleCn: "常见问题。", category: "时间与日期", tier: "high" }
,
  { word: "occasionally", meaning: "偶尔", example: "We occasionally meet.", exampleCn: "我们偶尔见面。", category: "时间与日期", tier: "high" }
,
  { word: "afterwards", meaning: "后来/然后", example: "We went home afterwards.", exampleCn: "后来我们回家了。", category: "时间与日期", tier: "high" }
,
  { word: "previously", meaning: "之前/先前", example: "As previously stated.", exampleCn: "如前所述。", category: "时间与日期", tier: "high" }
,
  { word: "currently", meaning: "目前", example: "Currently available.", exampleCn: "目前可用。", category: "时间与日期", tier: "high" }
,
  // --- 新增: 沟通与表达 ---
  { word: "conversation", meaning: "对话", example: "Nice conversation.", exampleCn: "愉快的对话。", category: "沟通与表达", tier: "high" }
,
  { word: "discussion", meaning: "讨论", example: "Group discussion.", exampleCn: "小组讨论。", category: "沟通与表达", tier: "high" }
,
  { word: "argument", meaning: "争论/论点", example: "Heated argument.", exampleCn: "激烈争论。", category: "沟通与表达", tier: "high" }
,
  { word: "opinion", meaning: "意见/看法", example: "In my opinion.", exampleCn: "依我看。", category: "沟通与表达", tier: "high" }
,
  { word: "advice", meaning: "建议", example: "Give advice.", exampleCn: "提建议。", category: "沟通与表达", tier: "high" }
,
  { word: "suggestion", meaning: "提议", example: "Any suggestions?", exampleCn: "有什么提议？", category: "沟通与表达", tier: "high" }
,
  { word: "comment", meaning: "评论", example: "Leave a comment.", exampleCn: "留下评论。", category: "沟通与表达", tier: "high" }
,
  { word: "apology", meaning: "道歉", example: "Accept my apology.", exampleCn: "接受我的道歉。", category: "沟通与表达", tier: "high" }
,
  { word: "excuse", meaning: "借口/原谅", example: "No excuse.", exampleCn: "没借口。", category: "沟通与表达", tier: "high" }
,
  { word: "disagreement", meaning: "分歧", example: "We had a disagreement.", exampleCn: "我们有分歧。", category: "沟通与表达", tier: "high" }
,
  { word: "truth", meaning: "真相", example: "Tell the truth.", exampleCn: "说实话。", category: "沟通与表达", tier: "high" }
,
  { word: "lie", meaning: "谎言", example: "That's a lie.", exampleCn: "那是谎言。", category: "沟通与表达", tier: "high" }
,
  { word: "secret", meaning: "秘密", example: "Keep a secret.", exampleCn: "保守秘密。", category: "沟通与表达", tier: "high" }
,
  { word: "rumor", meaning: "谣言", example: "It's just a rumor.", exampleCn: "只是谣言。", category: "沟通与表达", tier: "high" }
,
  { word: "gossip", meaning: "八卦/闲话", example: "Office gossip.", exampleCn: "办公室八卦。", category: "沟通与表达", tier: "high" }
,
  { word: "silence", meaning: "沉默", example: "In silence.", exampleCn: "沉默地。", category: "沟通与表达", tier: "high" }
,
  { word: "shout", meaning: "喊叫", example: "Don't shout at me.", exampleCn: "别对我喊。", category: "沟通与表达", tier: "high" }
,
  { word: "whisper", meaning: "耳语/小声说", example: "In a whisper.", exampleCn: "轻声说。", category: "沟通与表达", tier: "high" }
,
  { word: "gesture", meaning: "手势", example: "Hand gesture.", exampleCn: "手势。", category: "沟通与表达", tier: "high" }
,
  { word: "signal", meaning: "信号", example: "Give a signal.", exampleCn: "发出信号。", category: "沟通与表达", tier: "high" }
,
  { word: "alphabet", meaning: "字母表", example: "The English alphabet.", exampleCn: "英文字母表。", category: "沟通与表达", tier: "high" }
,
  { word: "spelling", meaning: "拼写", example: "Correct spelling.", exampleCn: "正确拼写。", category: "沟通与表达", tier: "high" }
,
  { word: "grammar", meaning: "语法", example: "English grammar.", exampleCn: "英语语法。", category: "沟通与表达", tier: "high" }
,
  { word: "paragraph", meaning: "段落", example: "First paragraph.", exampleCn: "第一段。", category: "沟通与表达", tier: "high" }
,
  { word: "title", meaning: "标题", example: "Article title.", exampleCn: "文章标题。", category: "沟通与表达", tier: "high" }
,
  { word: "headline", meaning: "大标题/头条", example: "News headline.", exampleCn: "新闻头条。", category: "沟通与表达", tier: "high" }
,
  { word: "press", meaning: "新闻界/按", example: "Press the button.", exampleCn: "按下按钮。", category: "沟通与表达", tier: "high" }
,
  { word: "media", meaning: "媒体", example: "Social media.", exampleCn: "社交媒体。", category: "沟通与表达", tier: "high" }
,
  { word: "broadcast", meaning: "广播", example: "Live broadcast.", exampleCn: "直播。", category: "沟通与表达", tier: "high" }
,
  { word: "speech", meaning: "演讲", example: "Give a speech.", exampleCn: "做演讲。", category: "沟通与表达", tier: "high" }
,
  { word: "lecture", meaning: "讲座", example: "Attend a lecture.", exampleCn: "参加讲座。", category: "沟通与表达", tier: "high" }
,
  // --- 新增: 自然与天气 ---
  { word: "planet", meaning: "行星", example: "Planet Earth.", exampleCn: "地球行星。", category: "自然与天气", tier: "high" }
,
  { word: "universe", meaning: "宇宙", example: "The universe.", exampleCn: "宇宙。", category: "自然与天气", tier: "high" }
,
  { word: "climate", meaning: "气候", example: "Climate change.", exampleCn: "气候变化。", category: "自然与天气", tier: "high" }
,
  { word: "breeze", meaning: "微风", example: "Cool breeze.", exampleCn: "凉爽的微风。", category: "自然与天气", tier: "high" }
,
  { word: "frost", meaning: "霜/霜冻", example: "Morning frost.", exampleCn: "晨霜。", category: "自然与天气", tier: "high" }
,
  { word: "dew", meaning: "露水", example: "Morning dew.", exampleCn: "晨露。", category: "自然与天气", tier: "high" }
,
  { word: "rainbow", meaning: "彩虹", example: "After the rain, a rainbow appeared.", exampleCn: "雨后出现一道彩虹。", category: "自然与天气", tier: "high" }
,
  { word: "desert", meaning: "沙漠", example: "The Sahara Desert.", exampleCn: "撒哈拉沙漠。", category: "自然与天气", tier: "high" }
,
  { word: "shore", meaning: "海岸/湖岸", example: "On the shore.", exampleCn: "在岸边。", category: "自然与天气", tier: "high" }
,
  { word: "wave", meaning: "波浪", example: "Ocean waves.", exampleCn: "海浪。", category: "自然与天气", tier: "high" }
,
  { word: "tide", meaning: "潮汐", example: "High tide.", exampleCn: "涨潮。", category: "自然与天气", tier: "high" }
,
  { word: "canal", meaning: "运河", example: "The Panama Canal.", exampleCn: "巴拿马运河。", category: "自然与天气", tier: "high" }
,
  // --- 新增: 购物与消费 ---
  { word: "sale", meaning: "促销/销售", example: "On sale now.", exampleCn: "现在促销。", category: "购物与消费", tier: "high" }
,
  { word: "debt", meaning: "债务", example: "Pay off debt.", exampleCn: "还清债务。", category: "购物与消费", tier: "high" }
,
  { word: "afford", meaning: "负担得起", example: "I can't afford it.", exampleCn: "我买不起。", category: "购物与消费", tier: "high" }
,
  { word: "valuable", meaning: "有价值的", example: "Valuable advice.", exampleCn: "宝贵的建议。", category: "购物与消费", tier: "high" }
,
  { word: "luxury", meaning: "奢侈", example: "Luxury goods.", exampleCn: "奢侈品。", category: "购物与消费", tier: "high" }
,
  { word: "fashion", meaning: "时尚", example: "Fashion week.", exampleCn: "时装周。", category: "购物与消费", tier: "high" }
,
  { word: "shopkeeper", meaning: "店主", example: "The shopkeeper smiled.", exampleCn: "店主笑了。", category: "购物与消费", tier: "high" }
,
  { word: "counter", meaning: "柜台", example: "At the counter.", exampleCn: "在柜台前。", category: "购物与消费", tier: "high" }
,
  { word: "groceries", meaning: "食品杂货", example: "Buy groceries.", exampleCn: "买食品。", category: "购物与消费", tier: "high" }
,
  { word: "supplies", meaning: "用品/补给", example: "Office supplies.", exampleCn: "办公用品。", category: "购物与消费", tier: "high" }
,
  { word: "equipment", meaning: "设备", example: "Sports equipment.", exampleCn: "运动器材。", category: "购物与消费", tier: "high" }
,
  { word: "appliance", meaning: "电器", example: "Kitchen appliance.", exampleCn: "厨房电器。", category: "购物与消费", tier: "high" }
,
  { word: "catalog", meaning: "目录/商品册", example: "Product catalog.", exampleCn: "产品目录。", category: "购物与消费", tier: "high" }
,
  // --- 新增: 食物与饮食 ---
  { word: "lamb", meaning: "羊肉", example: "Roast lamb.", exampleCn: "烤羊肉。", category: "食物与饮食", tier: "high" }
,
  { word: "bacon", meaning: "培根", example: "Bacon and eggs.", exampleCn: "培根和鸡蛋。", category: "食物与饮食", tier: "high" }
,
  { word: "ham", meaning: "火腿", example: "Slice of ham.", exampleCn: "火腿片。", category: "食物与饮食", tier: "high" }
,
  { word: "pasta", meaning: "意大利面", example: "Pasta salad.", exampleCn: "意面沙拉。", category: "食物与饮食", tier: "high" }
,
  { word: "flour", meaning: "面粉", example: "Wheat flour.", exampleCn: "小麦面粉。", category: "食物与饮食", tier: "high" }
,
  { word: "dough", meaning: "面团", example: "Knead the dough.", exampleCn: "揉面团。", category: "食物与饮食", tier: "high" }
,
  { word: "yeast", meaning: "酵母", example: "Add yeast.", exampleCn: "加酵母。", category: "食物与饮食", tier: "high" }
,
  { word: "toast", meaning: "烤面包片", example: "Toast and butter.", exampleCn: "黄油吐司。", category: "食物与饮食", tier: "high" }
,
  { word: "cereal", meaning: "谷物/麦片", example: "Breakfast cereal.", exampleCn: "早餐麦片。", category: "食物与饮食", tier: "high" }
,
  { word: "flavor", meaning: "味道/风味", example: "Natural flavor.", exampleCn: "天然风味。", category: "食物与饮食", tier: "high" }
,
  { word: "recipe", meaning: "食谱", example: "Try a new recipe.", exampleCn: "尝试新食谱。", category: "食物与饮食", tier: "high" }
,
  { word: "pan", meaning: "平底锅", example: "Frying pan.", exampleCn: "煎锅。", category: "食物与饮食", tier: "high" }
,
  { word: "kettle", meaning: "水壶", example: "Electric kettle.", exampleCn: "电水壶。", category: "食物与饮食", tier: "high" }
,
  { word: "napkin", meaning: "餐巾纸", example: "Paper napkin.", exampleCn: "餐巾纸。", category: "食物与饮食", tier: "high" }
,
  { word: "straw", meaning: "吸管", example: "Drink with a straw.", exampleCn: "用吸管喝。", category: "食物与饮食", tier: "high" }
,
  { word: "jar", meaning: "罐子", example: "Glass jar.", exampleCn: "玻璃罐。", category: "食物与饮食", tier: "high" }
,
  { word: "saucer", meaning: "碟子", example: "Cup and saucer.", exampleCn: "杯碟。", category: "食物与饮食", tier: "high" }
,
  { word: "chopstick", meaning: "筷子", example: "Use chopsticks.", exampleCn: "用筷子。", category: "食物与饮食", tier: "high" }
,
  {     word: "half", meaning: "一半", example: "Half an hour.", exampleCn: "半小时。", category: "限定词", tier: "core" }
,
  {     word: "little", meaning: "很少/小的", example: "A little help, please.", exampleCn: "帮个小忙。", category: "限定词", tier: "core" }
,
  {     word: "many", meaning: "很多(可数)", example: "Many people came.", exampleCn: "很多人来了。", category: "限定词", tier: "core" }
,
  {     word: "more", meaning: "更多", example: "I need more time.", exampleCn: "我需要更多时间。", category: "限定词", tier: "core" }
,
  {     word: "most", meaning: "大多数", example: "Most people like it.", exampleCn: "大多数人喜欢。", category: "限定词", tier: "core" }
,
  {     word: "much", meaning: "很多(不可数)", example: "Too much sugar.", exampleCn: "太多糖了。", category: "限定词", tier: "core" }
,
  {     word: "other", meaning: "其他的", example: "Any other questions?", exampleCn: "还有其他问题吗？", category: "限定词", tier: "core" }
,
  {     word: "several", meaning: "几个", example: "Several options to choose.", exampleCn: "有几个选择。", category: "限定词", tier: "core" }
,
  {     word: "some", meaning: "一些", example: "I need some water.", exampleCn: "我需要一些水。", category: "限定词", tier: "core" }
,
  {     word: "such", meaning: "这样的/如此", example: "It's such a nice day!", exampleCn: "天气真好！", category: "限定词", tier: "core" }
,
  {     word: "the", meaning: "这个/那个(定冠词)", example: "The sun is bright.", exampleCn: "太阳很亮。", category: "限定词", tier: "core" }
,
  {     word: "various", meaning: "各种各样的", example: "Various styles to choose from.", exampleCn: "各种款式可选。", category: "限定词", tier: "core" }
,

  // ═══════════════════════════════════════════════
  // 🟡 高频实意词 (HIGH) — 日常使用的名词、动词、形容词、副词
  // ═══════════════════════════════════════════════

  // --- 人与家庭、社会关系 ---
  {     word: "marriage", meaning: "婚姻", example: "A happy marriage.", exampleCn: "幸福的婚姻。", category: "人与关系", tier: "high" }
,
  {     word: "adult", meaning: "成年人", example: "This movie is for adults only.", exampleCn: "这部电影仅限成人观看。", category: "人与关系", tier: "high" }
,
  {     word: "age", meaning: "年龄", example: "What is your age?", exampleCn: "你多大了？", category: "人与关系", tier: "high" }
,
  {     word: "alive", meaning: "活着的", example: "Is the fish still alive?", exampleCn: "鱼还活着吗？", category: "人与关系", tier: "high" }
,
  {     word: "arm", meaning: "手臂", example: "He broke his arm playing football.", exampleCn: "他踢足球摔断了手臂。", category: "人与关系", tier: "high" }
,
  {     word: "artist", meaning: "艺术家", example: "She is a talented artist.", exampleCn: "她是一位有才华的艺术家。", category: "人与关系", tier: "high" }
,
  {     word: "aunt", meaning: "阿姨、姑姑", example: "My aunt is a nurse.", exampleCn: "我阿姨是护士。", category: "人与关系", tier: "high", phonetic: "/ænt/" }
,
  {     word: "baby", meaning: "婴儿", example: "The baby is sleeping.", exampleCn: "婴儿在睡觉。", category: "人与关系", tier: "high", phonetic: "/ˈbeɪbi/" }
,
  {     word: "back", meaning: "背", example: "My back hurts from sitting too long.", exampleCn: "坐太久我背疼。", category: "人与关系", tier: "high" }
,
  {     word: "birth", meaning: "出生", example: "What is your date of birth?", exampleCn: "你的出生日期是什么？", category: "人与关系", tier: "high" }
,
  {     word: "birthday", meaning: "生日", example: "Happy birthday to you!", exampleCn: "祝你生日快乐！", category: "人与关系", tier: "high" }
,
  {     word: "body", meaning: "身体", example: "Exercise is good for your body.", exampleCn: "运动对身体好。", category: "人与关系", tier: "high" }
,
  {     word: "born", meaning: "出生", example: "I was born in 1990.", exampleCn: "我出生在1990年。", category: "人与关系", tier: "high" }
,
  {     word: "boss", meaning: "老板", example: "My boss gave me a raise.", exampleCn: "老板给我加了工资。", category: "人与关系", tier: "high" }
,
  {     word: "boy", meaning: "男孩", example: "The boy is running fast.", exampleCn: "那个男孩跑得很快。", category: "人与关系", tier: "high" }
,
  {     word: "brother", meaning: "兄弟", example: "My brother is taller than me.", exampleCn: "我哥哥比我高。", category: "人与关系", tier: "high", phonetic: "/ˈbrʌðər/" }
,
  {     word: "businessman", meaning: "商人", example: "He is a successful businessman.", exampleCn: "他是一位成功的商人。", category: "人与关系", tier: "high" }
,
  {     word: "chef", meaning: "厨师", example: "The chef made a special dish.", exampleCn: "厨师做了一道特色菜。", category: "人与关系", tier: "high" }
,
  {     word: "child", meaning: "孩子", example: "She has one child.", exampleCn: "她有一个孩子。", category: "人与关系", tier: "high", phonetic: "/tʃaɪld/" }
,
  {     word: "children", meaning: "孩子们 (复数)", example: "The children are playing outside.", exampleCn: "孩子们在外面玩。", category: "人与关系", tier: "high", phonetic: "/ˈtʃɪldrən/" }
,
  {     word: "couple", meaning: "夫妻、一对", example: "The young couple just got married.", exampleCn: "那对年轻夫妇刚结婚。", category: "人与关系", tier: "high" }
,
  {     word: "cousin", meaning: "表/堂兄弟姐妹", example: "My cousin and I are the same age.", exampleCn: "我和表姐同岁。", category: "人与关系", tier: "high", phonetic: "/ˈkʌzn/" }
,
  {     word: "customer", meaning: "顾客", example: "The customer is always right.", exampleCn: "顾客永远是对的。", category: "人与关系", tier: "high" }
,
  {     word: "daughter", meaning: "女儿", example: "Her daughter likes dancing.", exampleCn: "她女儿喜欢跳舞。", category: "人与关系", tier: "high", phonetic: "/ˈdɔːtər/" }
,
  {     word: "dead", meaning: "死的", example: "The battery is dead.", exampleCn: "电池没电了。", category: "人与关系", tier: "high" }
,
  {     word: "die", meaning: "死亡", example: "The plant died because I forgot to water it.", exampleCn: "植物死了，因为我忘了浇水。", category: "人与关系", tier: "high" }
,
  {     word: "doctor", meaning: "医生", example: "The doctor said I need more rest.", exampleCn: "医生说我需要多休息。", category: "人与关系", tier: "high" }
,
  {     word: "driver", meaning: "司机", example: "The bus driver was very kind.", exampleCn: "公交车司机人很好。", category: "人与关系", tier: "high" }
,
  {     word: "ear", meaning: "耳朵", example: "My left ear hurts.", exampleCn: "我左耳疼。", category: "人与关系", tier: "high" }
,
  {     word: "employee", meaning: "雇员", example: "The company has 200 employees.", exampleCn: "这家公司有200名员工。", category: "人与关系", tier: "high" }
,
  {     word: "engineer", meaning: "工程师", example: "He works as a software engineer.", exampleCn: "他是一名软件工程师。", category: "人与关系", tier: "high" }
,
  {     word: "eye", meaning: "眼睛", example: "She has beautiful blue eyes.", exampleCn: "她有一双漂亮的蓝眼睛。", category: "人与关系", tier: "high" }
,
  {     word: "face", meaning: "脸", example: "He has a friendly face.", exampleCn: "他有一张友善的脸。", category: "人与关系", tier: "high" }
,
  {     word: "family", meaning: "家庭、家人", example: "My family is small.", exampleCn: "我的家庭很小。", category: "人与关系", tier: "high", phonetic: "/ˈfæməli/" }
,
  {     word: "farmer", meaning: "农民", example: "The farmer grows vegetables.", exampleCn: "农夫种蔬菜。", category: "人与关系", tier: "high" }
,
  {     word: "father", meaning: "父亲", example: "My father works in an office.", exampleCn: "我爸爸在办公室工作。", category: "人与关系", tier: "high", phonetic: "/ˈfɑːðər/" }
,
  {     word: "feet", meaning: "脚 (复数)", example: "Keep your feet warm.", exampleCn: "脚要保暖。", category: "人与关系", tier: "high" }
,
  {     word: "finger", meaning: "手指", example: "I cut my finger.", exampleCn: "我割伤了手指。", category: "人与关系", tier: "high" }
,
  {     word: "foot", meaning: "脚", example: "My feet hurt after walking all day.", exampleCn: "走了一整天，我的脚疼。", category: "人与关系", tier: "high" }
,
  {     word: "friend", meaning: "朋友", example: "She is my best friend.", exampleCn: "她是我最好的朋友。", category: "人与关系", tier: "high" }
,
  {     word: "girl", meaning: "女孩", example: "The girl has a beautiful voice.", exampleCn: "那个女孩声音很美。", category: "人与关系", tier: "high" }
,
  {     word: "grandfather", meaning: "祖父、外公", example: "My grandfather is 80 years old.", exampleCn: "我爷爷80岁了。", category: "人与关系", tier: "high" }
,
  {     word: "grandmother", meaning: "祖母、外婆", example: "My grandmother makes great food.", exampleCn: "我奶奶做饭很好吃。", category: "人与关系", tier: "high" }
,
  {     word: "grandparent", meaning: "祖父母", example: "My grandparents live in the countryside.", exampleCn: "我祖父母住在乡下。", category: "人与关系", tier: "high" }
,
  {     word: "guest", meaning: "客人", example: "We have guests this weekend.", exampleCn: "这周末我们有客人来。", category: "人与关系", tier: "high" }
,
  {     word: "hair", meaning: "头发", example: "She has long black hair.", exampleCn: "她有一头黑色长发。", category: "人与关系", tier: "high" }
,
  {     word: "hand", meaning: "手", example: "Wash your hands before eating.", exampleCn: "吃饭前要洗手。", category: "人与关系", tier: "high" }
,
  {     word: "head", meaning: "头", example: "She has a headache.", exampleCn: "她头痛。", category: "人与关系", tier: "high" }
,
  {     word: "heart", meaning: "心脏", example: "My heart beats fast when I'm nervous.", exampleCn: "紧张时我的心跳很快。", category: "人与关系", tier: "high" }
,
  {     word: "husband", meaning: "丈夫", example: "Her husband is a doctor.", exampleCn: "她丈夫是医生。", category: "人与关系", tier: "high", phonetic: "/ˈhʌzbənd/" }
,
  {     word: "leg", meaning: "腿", example: "She has long legs.", exampleCn: "她腿很长。", category: "人与关系", tier: "high" }
,
  {     word: "man", meaning: "男人", example: "The man is waiting outside.", exampleCn: "那个男人在外面等着。", category: "人与关系", tier: "high" }
,
  {     word: "manager", meaning: "经理", example: "I need to speak to the manager.", exampleCn: "我需要和经理谈谈。", category: "人与关系", tier: "high" }
,
  {     word: "married", meaning: "已婚的", example: "Are you married?", exampleCn: "你结婚了吗？", category: "人与关系", tier: "high" }
,
  {     word: "member", meaning: "成员", example: "He is a member of our team.", exampleCn: "他是我们团队的一员。", category: "人与关系", tier: "high" }
,
  {     word: "mother", meaning: "母亲", example: "My mother is a teacher.", exampleCn: "我妈妈是老师。", category: "人与关系", tier: "high", phonetic: "/ˈmʌðər/" }
,
  {     word: "mouth", meaning: "嘴", example: "Open your mouth, please.", exampleCn: "请张开嘴。", category: "人与关系", tier: "high" }
,
  {     word: "musician", meaning: "音乐家", example: "He wants to be a musician.", exampleCn: "他想成为音乐家。", category: "人与关系", tier: "high" }
,
  {     word: "name", meaning: "名字", example: "What is your name?", exampleCn: "你叫什么名字？", category: "人与关系", tier: "high" }
,
  {     word: "neighbor", meaning: "邻居", example: "Our neighbors are very friendly.", exampleCn: "我们的邻居很友好。", category: "人与关系", tier: "high" }
,
  {     word: "nose", meaning: "鼻子", example: "He has a big nose.", exampleCn: "他鼻子很大。", category: "人与关系", tier: "high" }
,
  {     word: "nurse", meaning: "护士", example: "The nurse checked my temperature.", exampleCn: "护士量了我的体温。", category: "人与关系", tier: "high" }
,
  {     word: "old", meaning: "老的、旧的", example: "My grandfather is very old.", exampleCn: "我爷爷很老了。", category: "人与关系", tier: "high" }
,
  {     word: "parent", meaning: "父母", example: "My parents are at home.", exampleCn: "我父母在家。", category: "人与关系", tier: "high", phonetic: "/ˈperənt/" }
,
  {     word: "partner", meaning: "伴侣、搭档", example: "She is my business partner.", exampleCn: "她是我的生意伙伴。", category: "人与关系", tier: "high" }
,
  {     word: "people", meaning: "人们", example: "Many people came to the party.", exampleCn: "很多人来参加了聚会。", category: "人与关系", tier: "high" }
,
  {     word: "person", meaning: "人", example: "She is a very nice person.", exampleCn: "她是个很好的人。", category: "人与关系", tier: "high" }
,
  {     word: "police", meaning: "警察", example: "The police arrived quickly.", exampleCn: "警察很快就到了。", category: "人与关系", tier: "high" }
,
  {     word: "relative", meaning: "亲戚", example: "We visit our relatives every year.", exampleCn: "我们每年都去走亲戚。", category: "人与关系", tier: "high" }
,
  {     word: "single", meaning: "单身的", example: "I am still single.", exampleCn: "我还是单身。", category: "人与关系", tier: "high" }
,
  {     word: "sister", meaning: "姐妹", example: "I have two sisters.", exampleCn: "我有两个姐妹。", category: "人与关系", tier: "high", phonetic: "/ˈsɪstər/" }
,
  {     word: "skin", meaning: "皮肤", example: "She has soft skin.", exampleCn: "她皮肤很柔软。", category: "人与关系", tier: "high" }
,
  {     word: "son", meaning: "儿子", example: "My son is five years old.", exampleCn: "我儿子五岁了。", category: "人与关系", tier: "high", phonetic: "/sʌn/" }
,
  {     word: "stomach", meaning: "胃、肚子", example: "My stomach is full.", exampleCn: "我肚子饱了。", category: "人与关系", tier: "high" }
,
  {     word: "stranger", meaning: "陌生人", example: "Don't talk to strangers.", exampleCn: "不要和陌生人说话。", category: "人与关系", tier: "high" }
,
  {     word: "student", meaning: "学生", example: "She is a college student.", exampleCn: "她是一名大学生。", category: "人与关系", tier: "high" }
,
  {     word: "teacher", meaning: "老师", example: "My English teacher is very patient.", exampleCn: "我的英语老师很有耐心。", category: "人与关系", tier: "high" }
,
  {     word: "teenager", meaning: "青少年", example: "Teenagers spend a lot of time online.", exampleCn: "青少年花很多时间上网。", category: "人与关系", tier: "high" }
,
  {     word: "teeth", meaning: "牙齿 (复数)", example: "She has white teeth.", exampleCn: "她牙齿很白。", category: "人与关系", tier: "high" }
,
  {     word: "tooth", meaning: "牙齿", example: "I need to brush my teeth.", exampleCn: "我需要刷牙。", category: "人与关系", tier: "high" }
,
  {     word: "uncle", meaning: "叔叔、舅舅", example: "My uncle lives in Beijing.", exampleCn: "我叔叔住在北京。", category: "人与关系", tier: "high", phonetic: "/ˈʌŋkl/" }
,
  {     word: "visitor", meaning: "访客", example: "We have a visitor from Japan.", exampleCn: "我们有一位日本来的访客。", category: "人与关系", tier: "high" }
,
  {     word: "waiter", meaning: "服务员 (男)", example: "The waiter brought the menu.", exampleCn: "服务员拿来了菜单。", category: "人与关系", tier: "high" }
,
  {     word: "waitress", meaning: "服务员 (女)", example: "The waitress was very friendly.", exampleCn: "女服务员很友好。", category: "人与关系", tier: "high" }
,
  {     word: "wife", meaning: "妻子", example: "His wife is very kind.", exampleCn: "他妻子很善良。", category: "人与关系", tier: "high", phonetic: "/waɪf/" }
,
  {     word: "woman", meaning: "女人", example: "The woman in the red dress is my boss.", exampleCn: "穿红裙子的女人是我老板。", category: "人与关系", tier: "high" }
,
  {     word: "worker", meaning: "工人", example: "The workers start at 8 a.m.", exampleCn: "工人早上8点开工。", category: "人与关系", tier: "high" }
,
  {     word: "writer", meaning: "作家", example: "She is a famous writer.", exampleCn: "她是一位著名作家。", category: "人与关系", tier: "high" }
,
  {     word: "young", meaning: "年轻的", example: "She looks very young.", exampleCn: "她看起来很年轻。", category: "人与关系", tier: "high" }
,

  // --- 身体部位、健康与医疗 ---
  {     word: "wash", meaning: "洗", example: "Wash your hands.", exampleCn: "洗手。", category: "健康与身体", tier: "high" }
,

  // --- 交通工具、出行、旅游 ---
  {     word: "airport", meaning: "机场", example: "Go to the airport.", exampleCn: "去机场。", category: "出行与交通", tier: "high" }
,
  {     word: "bike", meaning: "自行车", example: "Ride a bike.", exampleCn: "骑自行车。", category: "出行与交通", tier: "high" }
,
  {     word: "bridge", meaning: "桥", example: "Cross the bridge.", exampleCn: "过桥。", category: "出行与交通", tier: "high" }
,
  {     word: "bus", meaning: "公交车", example: "Take the bus.", exampleCn: "坐公交。", category: "出行与交通", tier: "high" }
,
  {     word: "car", meaning: "汽车", example: "Drive a car.", exampleCn: "开车。", category: "出行与交通", tier: "high" }
,
  {     word: "direction", meaning: "方向/指示", example: "Ask for directions.", exampleCn: "问路。", category: "出行与交通", tier: "high" }
,
  {     word: "distance", meaning: "距离", example: "Long distance.", exampleCn: "长途。", category: "出行与交通", tier: "high" }
,
  {     word: "map", meaning: "地图", example: "Look at the map.", exampleCn: "看地图。", category: "出行与交通", tier: "high" }
,
  {     word: "passport", meaning: "护照", example: "Show your passport.", exampleCn: "出示护照。", category: "出行与交通", tier: "high" }
,
  {     word: "plane", meaning: "飞机", example: "Take a plane.", exampleCn: "坐飞机。", category: "出行与交通", tier: "high" }
,
  {     word: "port", meaning: "港口", example: "Ship to the port.", exampleCn: "发到港口。", category: "出行与交通", tier: "high" }
,
  {     word: "road", meaning: "路/道路", example: "On the road.", exampleCn: "在路上。", category: "出行与交通", tier: "high" }
,
  {     word: "ship", meaning: "船/发货", example: "Ship by sea.", exampleCn: "海运。", category: "出行与交通", tier: "high" }
,
  {     word: "speed", meaning: "速度", example: "Full speed.", exampleCn: "全速。", category: "出行与交通", tier: "high" }
,
  {     word: "station", meaning: "车站", example: "Train station.", exampleCn: "火车站。", category: "出行与交通", tier: "high" }
,
  {     word: "street", meaning: "街道", example: "Main street.", exampleCn: "主街。", category: "出行与交通", tier: "high" }
,
  {     word: "taxi", meaning: "出租车", example: "Take a taxi.", exampleCn: "打车。", category: "出行与交通", tier: "high" }
,
  {     word: "ticket", meaning: "票", example: "Buy a ticket.", exampleCn: "买票。", category: "出行与交通", tier: "high" }
,
  {     word: "traffic", meaning: "交通/流量", example: "Heavy traffic.", exampleCn: "交通拥堵。", category: "出行与交通", tier: "high" }
,
  {     word: "train", meaning: "火车", example: "Take the train.", exampleCn: "坐火车。", category: "出行与交通", tier: "high" }
,
  {     word: "trip", meaning: "旅行/行程", example: "Business trip.", exampleCn: "出差。", category: "出行与交通", tier: "high" }
,
  {     word: "truck", meaning: "卡车", example: "Deliver by truck.", exampleCn: "卡车送货。", category: "出行与交通", tier: "high" }
,
  {     word: "accept", meaning: "接受", example: "I accept your apology.", exampleCn: "我接受你的道歉。", category: "基本动作", tier: "high" }
,
  {     word: "agree", meaning: "同意", example: "I agree with you.", exampleCn: "我同意你。", category: "基本动作", tier: "high" }
,
  {     word: "appear", meaning: "出现、显得", example: "A rainbow appeared in the sky.", exampleCn: "天空中出现了彩虹。", category: "基本动作", tier: "high" }
,
  {     word: "arrive", meaning: "到达", example: "We arrived at the airport on time.", exampleCn: "我们准时到达了机场。", category: "基本动作", tier: "high" }
,
  {     word: "ask", meaning: "问、请求", example: "Can I ask you a question?", exampleCn: "我能问你一个问题吗？", category: "基本动作", tier: "high" }
,
  {     word: "begin", meaning: "开始", example: "The movie begins at 7 p.m.", exampleCn: "电影晚上7点开始。", category: "基本动作", tier: "high" }
,
  {     word: "believe", meaning: "相信", example: "I believe you.", exampleCn: "我相信你。", category: "基本动作", tier: "high" }
,
  {     word: "break", meaning: "打破、弄坏", example: "Don't break the window.", exampleCn: "别打破窗户。", category: "基本动作", tier: "high" }
,
  {     word: "bring", meaning: "带来", example: "Please bring a gift to the party.", exampleCn: "请带一份礼物来派对。", category: "基本动作", tier: "high" }
,
  {     word: "build", meaning: "建造", example: "They are building a new school.", exampleCn: "他们在建一所新学校。", category: "基本动作", tier: "high" }
,
  {     word: "buy", meaning: "买", example: "I need to buy some milk.", exampleCn: "我需要买些牛奶。", category: "基本动作", tier: "high" }
,
  {     word: "carry", meaning: "携带、搬运", example: "Can you help me carry this box?", exampleCn: "你能帮我搬这个箱子吗？", category: "基本动作", tier: "high" }
,
  {     word: "catch", meaning: "抓住、赶上", example: "I need to catch the 9 o'clock bus.", exampleCn: "我得赶9点的公交车。", category: "基本动作", tier: "high" }
,
  {     word: "cause", meaning: "导致", example: "Smoking can cause health problems.", exampleCn: "吸烟会导致健康问题。", category: "基本动作", tier: "high" }
,
  {     word: "change", meaning: "变化、改变", example: "People can change.", exampleCn: "人是可以改变的。", category: "基本动作", tier: "high" }
,
  {     word: "check", meaning: "检查", example: "Please check your spelling.", exampleCn: "请检查拼写。", category: "基本动作", tier: "high" }
,
  {     word: "choose", meaning: "选择", example: "Choose the one you like best.", exampleCn: "选你最喜欢的那个。", category: "基本动作", tier: "high" }
,
  {     word: "close", meaning: "关", example: "Please close the window.", exampleCn: "请关上窗户。", category: "基本动作", tier: "high" }
,
  {     word: "come", meaning: "来", example: "Come here, please.", exampleCn: "请过来。", category: "基本动作", tier: "high" }
,
  {     word: "compare", meaning: "比较", example: "Compare these two options.", exampleCn: "比较这两个选项。", category: "基本动作", tier: "high" }
,
  {     word: "cook", meaning: "做饭", example: "I learned to cook from my mother.", exampleCn: "我跟妈妈学做饭。", category: "基本动作", tier: "high" }
,
  {     word: "cost", meaning: "花费", example: "How much does this cost?", exampleCn: "这个多少钱？", category: "基本动作", tier: "high" }
,
  {     word: "cry", meaning: "哭", example: "The baby is crying.", exampleCn: "婴儿在哭。", category: "基本动作", tier: "high" }
,
  {     word: "cut", meaning: "切", example: "Cut the apple into small pieces.", exampleCn: "把苹果切成小块。", category: "基本动作", tier: "high" }
,
  {     word: "dance", meaning: "跳舞", example: "They danced all night.", exampleCn: "他们跳了一整夜的舞。", category: "基本动作", tier: "high" }
,
  {     word: "decide", meaning: "决定", example: "I can't decide what to wear.", exampleCn: "我决定不了穿什么。", category: "基本动作", tier: "high" }
,
  {     word: "describe", meaning: "描述", example: "Can you describe the man you saw?", exampleCn: "你能描述一下你看到的那个人吗？", category: "基本动作", tier: "high" }
,
  {     word: "disagree", meaning: "不同意", example: "I disagree with that idea.", exampleCn: "我不同意那个想法。", category: "基本动作", tier: "high" }
,
  {     word: "draw", meaning: "画", example: "My daughter loves to draw.", exampleCn: "我女儿爱画画。", category: "基本动作", tier: "high" }
,
  {     word: "drink", meaning: "喝", example: "Drink plenty of water.", exampleCn: "多喝水。", category: "基本动作", tier: "high" }
,
  {     word: "drive", meaning: "开车", example: "Can you drive?", exampleCn: "你会开车吗？", category: "基本动作", tier: "high" }
,
  {     word: "drop", meaning: "掉落、放下", example: "Be careful not to drop the glass.", exampleCn: "小心别把杯子掉了。", category: "基本动作", tier: "high" }
,
  {     word: "eat", meaning: "吃", example: "Let's eat dinner together.", exampleCn: "一起吃晚饭吧。", category: "基本动作", tier: "high" }
,
  {     word: "end", meaning: "结束", example: "The story ends happily.", exampleCn: "故事结局很幸福。", category: "基本动作", tier: "high" }
,
  {     word: "expect", meaning: "期望、预计", example: "I didn't expect to see you here.", exampleCn: "没想到会在这里见到你。", category: "基本动作", tier: "high" }
,
  {     word: "feel", meaning: "感觉", example: "I feel happy today.", exampleCn: "我今天感觉开心。", category: "基本动作", tier: "high" }
,
  {     word: "find", meaning: "找到", example: "I can't find my keys.", exampleCn: "我找不到钥匙了。", category: "基本动作", tier: "high" }
,
  {     word: "finish", meaning: "完成", example: "I finished my homework.", exampleCn: "我完成了作业。", category: "基本动作", tier: "high" }
,
  {     word: "fix", meaning: "修理、固定", example: "Can you fix my computer?", exampleCn: "你能修好我的电脑吗？", category: "基本动作", tier: "high" }
,
  {     word: "fly", meaning: "飞、飞行", example: "The bird can fly very high.", exampleCn: "这只鸟能飞得很高。", category: "基本动作", tier: "high" }
,
  {     word: "get", meaning: "得到、变得", example: "I get up at 7 every day.", exampleCn: "我每天7点起床。", category: "基本动作", tier: "high" }
,
  {     word: "give", meaning: "给", example: "Please give me the book.", exampleCn: "请把书给我。", category: "基本动作", tier: "high" }
,
  {     word: "go", meaning: "去", example: "I go to work by bus.", exampleCn: "我坐公交上班。", category: "基本动作", tier: "high" }
,
  {     word: "grow", meaning: "生长、增长", example: "Children grow up so fast.", exampleCn: "孩子长大得太快了。", category: "基本动作", tier: "high" }
,
  {     word: "happen", meaning: "发生", example: "What happened to your leg?", exampleCn: "你的腿怎么了？", category: "基本动作", tier: "high" }
,
  {     word: "hate", meaning: "恨、讨厌", example: "I hate getting up early.", exampleCn: "我讨厌早起。", category: "基本动作", tier: "high" }
,
  {     word: "hear", meaning: "听见", example: "Can you hear me?", exampleCn: "你能听见我说话吗？", category: "基本动作", tier: "high" }
,
  {     word: "hold", meaning: "拿着、握住", example: "Hold my hand when we cross the street.", exampleCn: "过马路时牵住我的手。", category: "基本动作", tier: "high" }
,
  {     word: "hope", meaning: "希望", example: "I hope you feel better soon.", exampleCn: "希望你快点好起来。", category: "基本动作", tier: "high" }
,
  {     word: "include", meaning: "包括", example: "Does the price include tax?", exampleCn: "这个价格含税吗？", category: "基本动作", tier: "high" }
,
  {     word: "keep", meaning: "保持、保留", example: "Keep the change.", exampleCn: "不用找了。", category: "基本动作", tier: "high" }
,
  {     word: "know", meaning: "知道", example: "I don't know the answer.", exampleCn: "我不知道答案。", category: "基本动作", tier: "high" }
,
  {     word: "laugh", meaning: "笑", example: "His joke made everyone laugh.", exampleCn: "他的笑话让大家都笑了。", category: "基本动作", tier: "high" }
,
  {     word: "leave", meaning: "离开", example: "I leave home at 7:30 every day.", exampleCn: "我每天7:30离开家。", category: "基本动作", tier: "high" }
,
  {     word: "let", meaning: "让", example: "Let me help you.", exampleCn: "让我来帮你。", category: "基本动作", tier: "high" }
,
  {     word: "listen", meaning: "听", example: "Listen to the music.", exampleCn: "听这音乐。", category: "基本动作", tier: "high" }
,
  {     word: "live", meaning: "生活、住", example: "Where do you live?", exampleCn: "你住在哪里？", category: "基本动作", tier: "high" }
,
  {     word: "look", meaning: "看", example: "Look at that beautiful sunset!", exampleCn: "看那美丽的日落！", category: "基本动作", tier: "high" }
,
  {     word: "lose", meaning: "丢失、输", example: "Don't lose your ticket.", exampleCn: "别丢了你的票。", category: "基本动作", tier: "high" }
,
  {     word: "love", meaning: "爱", example: "I love my family.", exampleCn: "我爱我的家人。", category: "基本动作", tier: "high" }
,
  {     word: "make", meaning: "做、制造", example: "She makes great coffee.", exampleCn: "她泡的咖啡很好喝。", category: "基本动作", tier: "high" }
,
  {     word: "move", meaning: "移动、搬家", example: "Please move your car.", exampleCn: "请挪一下你的车。", category: "基本动作", tier: "high" }
,
  {     word: "notice", meaning: "注意到", example: "Did you notice her new haircut?", exampleCn: "你注意到她的新发型了吗？", category: "基本动作", tier: "high" }
,
  {     word: "offer", meaning: "提供", example: "He offered me a job.", exampleCn: "他给了我一份工作。", category: "基本动作", tier: "high" }
,
  {     word: "open", meaning: "打开", example: "Open the door, please.", exampleCn: "请开门。", category: "基本动作", tier: "high" }
,
  {     word: "paint", meaning: "画画、涂漆", example: "He painted the wall green.", exampleCn: "他把墙刷成了绿色。", category: "基本动作", tier: "high" }
,
  {     word: "pay", meaning: "付钱", example: "Can I pay by card?", exampleCn: "我能刷卡吗？", category: "基本动作", tier: "high" }
,
  {     word: "pick", meaning: "捡、摘、选", example: "Pick a number between 1 and 10.", exampleCn: "从1到10中选一个数字。", category: "基本动作", tier: "high" }
,
  {     word: "play", meaning: "玩", example: "Children love to play outside.", exampleCn: "孩子们喜欢在外面玩。", category: "基本动作", tier: "high" }
,
  {     word: "promise", meaning: "承诺", example: "I promise to be on time.", exampleCn: "我保证准时到。", category: "基本动作", tier: "high" }
,
  {     word: "pull", meaning: "拉", example: "Pull the door to open it.", exampleCn: "拉门打开。", category: "基本动作", tier: "high" }
,
  {     word: "push", meaning: "推", example: "Push the door, don't pull.", exampleCn: "推门，别拉。", category: "基本动作", tier: "high" }
,
  {     word: "put", meaning: "放", example: "Put your bag on the table.", exampleCn: "把包放在桌子上。", category: "基本动作", tier: "high" }
,
  {     word: "receive", meaning: "收到", example: "Did you receive my message?", exampleCn: "你收到我的信息了吗？", category: "基本动作", tier: "high" }
,
  {     word: "refuse", meaning: "拒绝", example: "He refused to answer the question.", exampleCn: "他拒绝回答这个问题。", category: "基本动作", tier: "high" }
,
  {     word: "return", meaning: "返回、归还", example: "Please return the book by Friday.", exampleCn: "请在周五前归还这本书。", category: "基本动作", tier: "high" }
,
  {     word: "ride", meaning: "骑、乘", example: "I ride my bike to work.", exampleCn: "我骑自行车上班。", category: "基本动作", tier: "high" }
,
  {     word: "run", meaning: "跑", example: "He runs faster than me.", exampleCn: "他跑得比我快。", category: "基本动作", tier: "high" }
,
  {     word: "save", meaning: "救、节省", example: "We should save water.", exampleCn: "我们应该节约用水。", category: "基本动作", tier: "high" }
,
  {     word: "say", meaning: "说", example: "What did you say?", exampleCn: "你说了什么？", category: "基本动作", tier: "high" }
,
  {     word: "see", meaning: "看见", example: "I can see the mountain from here.", exampleCn: "我从这里能看见山。", category: "基本动作", tier: "high" }
,
  {     word: "seem", meaning: "似乎", example: "You seem happy today.", exampleCn: "你今天似乎很开心。", category: "基本动作", tier: "high" }
,
  {     word: "sell", meaning: "卖", example: "They sell fresh fruit at the market.", exampleCn: "他们在市场卖新鲜水果。", category: "基本动作", tier: "high" }
,
  {     word: "send", meaning: "发送", example: "I'll send you an email.", exampleCn: "我会给你发邮件。", category: "基本动作", tier: "high" }
,
  {     word: "shut", meaning: "关闭", example: "Shut your eyes and count to ten.", exampleCn: "闭上眼睛数到十。", category: "基本动作", tier: "high" }
,
  {     word: "sing", meaning: "唱歌", example: "She can sing very well.", exampleCn: "她唱歌很好听。", category: "基本动作", tier: "high" }
,
  {     word: "sit", meaning: "坐", example: "Please sit down.", exampleCn: "请坐。", category: "基本动作", tier: "high" }
,
  {     word: "smile", meaning: "微笑", example: "She smiled at the camera.", exampleCn: "她对着镜头微笑。", category: "基本动作", tier: "high" }
,
  {     word: "speak", meaning: "说、讲", example: "Do you speak English?", exampleCn: "你说英语吗？", category: "基本动作", tier: "high" }
,
  {     word: "spend", meaning: "花费（时间/钱）", example: "I spend too much time on my phone.", exampleCn: "我在手机上花了太多时间。", category: "基本动作", tier: "high" }
,
  {     word: "stand", meaning: "站", example: "I had to stand on the bus.", exampleCn: "我只好在公交车上站着。", category: "基本动作", tier: "high" }
,
  {     word: "start", meaning: "开始", example: "Let's start the meeting.", exampleCn: "我们开始开会吧。", category: "基本动作", tier: "high" }
,
  {     word: "stay", meaning: "停留、待", example: "Stay here while I get help.", exampleCn: "待在这里，我去找人帮忙。", category: "基本动作", tier: "high" }
,
  {     word: "stop", meaning: "停止", example: "Please stop talking.", exampleCn: "请停止讲话。", category: "基本动作", tier: "high" }
,
  {     word: "suggest", meaning: "建议", example: "I suggest we leave early.", exampleCn: "我建议我们早点走。", category: "基本动作", tier: "high" }
,
  {     word: "swim", meaning: "游泳", example: "I learned to swim when I was six.", exampleCn: "我六岁学的游泳。", category: "基本动作", tier: "high" }
,
  {     word: "take", meaning: "拿、带、乘坐", example: "Take an umbrella with you.", exampleCn: "带把伞。", category: "基本动作", tier: "high" }
,
  {     word: "talk", meaning: "交谈", example: "I need to talk to you.", exampleCn: "我需要和你谈谈。", category: "基本动作", tier: "high" }
,
  {     word: "tell", meaning: "告诉", example: "Tell me a story.", exampleCn: "给我讲个故事。", category: "基本动作", tier: "high" }
,
  {     word: "think", meaning: "想、认为", example: "I think it's a good idea.", exampleCn: "我觉得这是个好主意。", category: "基本动作", tier: "high" }
,
  {     word: "throw", meaning: "扔、投", example: "Don't throw stones at the window.", exampleCn: "别往窗户扔石头。", category: "基本动作", tier: "high" }
,
  {     word: "travel", meaning: "旅行", example: "I love to travel to new places.", exampleCn: "我爱去新地方旅行。", category: "基本动作", tier: "high" }
,
  {     word: "try", meaning: "尝试", example: "Let me try again.", exampleCn: "让我再试一次。", category: "基本动作", tier: "high" }
,
  {     word: "turn", meaning: "转、转弯", example: "Turn left at the next corner.", exampleCn: "下个路口左转。", category: "基本动作", tier: "high" }
,
  {     word: "use", meaning: "使用", example: "May I use your phone?", exampleCn: "我能用一下你的手机吗？", category: "基本动作", tier: "high" }
,
  {     word: "wait", meaning: "等待", example: "Wait for me, please.", exampleCn: "请等等我。", category: "基本动作", tier: "high" }
,
  {     word: "walk", meaning: "走、散步", example: "I walk to work every day.", exampleCn: "我每天走路上班。", category: "基本动作", tier: "high" }
,
  {     word: "want", meaning: "想要", example: "I want a cup of coffee.", exampleCn: "我想要一杯咖啡。", category: "基本动作", tier: "high" }
,
  {     word: "wish", meaning: "希望、祝愿", example: "I wish you good luck.", exampleCn: "祝你好运。", category: "基本动作", tier: "high" }
,
  {     word: "worry", meaning: "担心", example: "Don't worry about me.", exampleCn: "别担心我。", category: "基本动作", tier: "high" }
,

  // --- 高频动词与基础动作 ---
  {     word: "hit", meaning: "打/击", example: "Sales hit a record.", exampleCn: "销售额创新高。", category: "基本动作", tier: "high" }
,
  {     word: "imagine", meaning: "想象", example: "Imagine the possibilities.", exampleCn: "想象可能性。", category: "基本动作", tier: "high" }
,
  {     word: "prepare", meaning: "准备", example: "Prepare the order.", exampleCn: "准备订单。", category: "基本动作", tier: "high" }
,
  {     word: "prove", meaning: "证明", example: "Prove the quality.", exampleCn: "证明质量。", category: "基本动作", tier: "high" }
,
  {     word: "realize", meaning: "意识到/实现", example: "I realized my mistake.", exampleCn: "我意识到了我的错误。", category: "基本动作", tier: "high" }
,
  {     word: "show", meaning: "展示", example: "Let me show you the sample.", exampleCn: "让我给你看样品。", category: "基本动作", tier: "high" }
,
  {     word: "surprise", meaning: "惊喜/使惊讶", example: "What a nice surprise!", exampleCn: "真是个好惊喜！", category: "基本动作", tier: "high" }
,
  {     word: "trust", meaning: "信任", example: "I trust this supplier.", exampleCn: "我信任这个供应商。", category: "基本动作", tier: "high" }
,
  {     word: "win", meaning: "赢/获胜", example: "Win more customers.", exampleCn: "赢得更多客户。", category: "基本动作", tier: "high" }
,

  // --- 工作、商务、教育、学习 ---
  {     word: "answer", meaning: "答案、回答", example: "Please answer my question.", exampleCn: "请回答我的问题。", category: "工作与学习", tier: "high" }
,
  {     word: "book", meaning: "书", example: "This book is very interesting.", exampleCn: "这本书很有趣。", category: "工作与学习", tier: "high" }
,
  {     word: "business", meaning: "商业、生意", example: "He runs a small business.", exampleCn: "他经营一家小企业。", category: "工作与学习", tier: "high" }
,
  {     word: "class", meaning: "课、班级", example: "I have English class on Monday.", exampleCn: "我周一有英语课。", category: "工作与学习", tier: "high" }
,
  {     word: "client", meaning: "客户", example: "I'm meeting a client this afternoon.", exampleCn: "我今天下午要见一个客户。", category: "工作与学习", tier: "high" }
,
  {     word: "colleague", meaning: "同事", example: "My colleagues are very helpful.", exampleCn: "我的同事很乐于助人。", category: "工作与学习", tier: "high" }
,
  {     word: "college", meaning: "学院、大学", example: "I went to college in Shanghai.", exampleCn: "我在上海上的大学。", category: "工作与学习", tier: "high" }
,
  {     word: "company", meaning: "公司", example: "Our company is growing fast.", exampleCn: "我们公司发展很快。", category: "工作与学习", tier: "high" }
,
  {     word: "contract", meaning: "合同", example: "Please read the contract before signing.", exampleCn: "签字前请先阅读合同。", category: "工作与学习", tier: "high" }
,
  {     word: "correct", meaning: "正确的", example: "That is the correct answer.", exampleCn: "那是正确答案。", category: "工作与学习", tier: "high" }
,
  {     word: "course", meaning: "课程", example: "I'm taking an online course.", exampleCn: "我在上一个线上课程。", category: "工作与学习", tier: "high" }
,
  {     word: "deadline", meaning: "截止日期", example: "The deadline is next Monday.", exampleCn: "截止日期是下周一。", category: "工作与学习", tier: "high" }
,
  {     word: "dictionary", meaning: "字典", example: "Look up the word in a dictionary.", exampleCn: "在字典里查这个词。", category: "工作与学习", tier: "high" }
,
  {     word: "exam", meaning: "考试", example: "The final exam is next week.", exampleCn: "期末考试是下周。", category: "工作与学习", tier: "high" }
,
  {     word: "experience", meaning: "经验", example: "Do you have any work experience?", exampleCn: "你有工作经验吗？", category: "工作与学习", tier: "high" }
,
  {     word: "explain", meaning: "解释", example: "Can you explain that again?", exampleCn: "你能再解释一遍吗？", category: "工作与学习", tier: "high" }
,
  {     word: "factory", meaning: "工厂", example: "The factory employs 500 workers.", exampleCn: "工厂雇佣了500名工人。", category: "工作与学习", tier: "high" }
,
  {     word: "forget", meaning: "忘记", example: "Don't forget to lock the door.", exampleCn: "别忘了锁门。", category: "工作与学习", tier: "high" }
,
  {     word: "goal", meaning: "目标", example: "My goal is to sell 1000 units.", exampleCn: "我的目标是卖1000件。", category: "工作与学习", tier: "high" }
,
  {     word: "grade", meaning: "成绩、年级", example: "She got good grades this year.", exampleCn: "她今年成绩很好。", category: "工作与学习", tier: "high" }
,
  {     word: "homework", meaning: "家庭作业", example: "I have a lot of homework tonight.", exampleCn: "我今晚有很多作业。", category: "工作与学习", tier: "high" }
,
  {     word: "interview", meaning: "面试", example: "I have a job interview tomorrow.", exampleCn: "我明天有一个求职面试。", category: "工作与学习", tier: "high" }
,
  {     word: "job", meaning: "工作、职位", example: "She found a new job.", exampleCn: "她找到了一份新工作。", category: "工作与学习", tier: "high" }
,
  {     word: "language", meaning: "语言", example: "Learning a new language takes time.", exampleCn: "学一门新语言需要时间。", category: "工作与学习", tier: "high" }
,
  {     word: "law", meaning: "法律", example: "By law.", exampleCn: "依据法律。", category: "工作与学习", tier: "high" }
,
  {     word: "learn", meaning: "学习、学会", example: "I want to learn how to drive.", exampleCn: "我想学开车。", category: "工作与学习", tier: "high" }
,
  {     word: "lesson", meaning: "课、课程", example: "Today's lesson is about grammar.", exampleCn: "今天的课讲语法。", category: "工作与学习", tier: "high" }
,
  {     word: "list", meaning: "列表/清单", example: "Make a list.", exampleCn: "列个清单。", category: "工作与学习", tier: "high" }
,
  {     word: "mean", meaning: "意思是", example: "What does this word mean?", exampleCn: "这个词是什么意思？", category: "工作与学习", tier: "high" }
,
  {     word: "meeting", meaning: "会议", example: "I have a meeting at 10 a.m.", exampleCn: "我上午十点有会。", category: "工作与学习", tier: "high" }
,
  {     word: "mistake", meaning: "错误", example: "Everyone makes mistakes.", exampleCn: "每个人都会犯错。", category: "工作与学习", tier: "high" }
,
  {     word: "notebook", meaning: "笔记本", example: "Write it down in your notebook.", exampleCn: "记在你的笔记本上。", category: "工作与学习", tier: "high" }
,
  {     word: "office", meaning: "办公室", example: "I work in a big office.", exampleCn: "我在一个大办公室工作。", category: "工作与学习", tier: "high" }
,
  {     word: "order", meaning: "订单、命令", example: "We received a large order today.", exampleCn: "我们今天收到一个大订单。", category: "工作与学习", tier: "high" }
,
  {     word: "page", meaning: "页", example: "Turn to page 10.", exampleCn: "翻到第10页。", category: "工作与学习", tier: "high" }
,
  {     word: "pen", meaning: "笔", example: "Do you have a pen I can borrow?", exampleCn: "你有笔能借我吗？", category: "工作与学习", tier: "high" }
,
  {     word: "pencil", meaning: "铅笔", example: "I drew the picture with a pencil.", exampleCn: "我用铅笔画了这幅画。", category: "工作与学习", tier: "high" }
,
  {     word: "plan", meaning: "计划", example: "What's your plan for today?", exampleCn: "你今天有什么计划？", category: "工作与学习", tier: "high" }
,
  {     word: "practice", meaning: "练习", example: "Practice makes perfect.", exampleCn: "熟能生巧。", category: "工作与学习", tier: "high" }
,
  {     word: "price", meaning: "价格", example: "The price is too high.", exampleCn: "价格太高了。", category: "工作与学习", tier: "high" }
,
  {     word: "product", meaning: "产品", example: "This is our newest product.", exampleCn: "这是我们最新的产品。", category: "工作与学习", tier: "high" }
,
  {     word: "project", meaning: "项目", example: "We just started a new project.", exampleCn: "我们刚启动了一个新项目。", category: "工作与学习", tier: "high" }
,
  {     word: "promotion", meaning: "晋升、促销", example: "She got a promotion last month.", exampleCn: "她上个月升职了。", category: "工作与学习", tier: "high" }
,
  {     word: "quality", meaning: "质量", example: "We care about quality.", exampleCn: "我们在乎质量。", category: "工作与学习", tier: "high" }
,
  {     word: "question", meaning: "问题", example: "Do you have any questions?", exampleCn: "你有什么问题吗？", category: "工作与学习", tier: "high" }
,
  {     word: "read", meaning: "读", example: "I like to read before bed.", exampleCn: "我喜欢睡前看书。", category: "工作与学习", tier: "high" }
,
  {     word: "remember", meaning: "记住", example: "I can't remember his name.", exampleCn: "我记不住他的名字。", category: "工作与学习", tier: "high" }
,
  {     word: "report", meaning: "报告", example: "I need to finish this report by Friday.", exampleCn: "我周五前要完成这份报告。", category: "工作与学习", tier: "high" }
,
  {     word: "result", meaning: "结果", example: "Good results.", exampleCn: "好结果。", category: "工作与学习", tier: "high" }
,
  {     word: "resume", meaning: "简历", example: "Please send us your resume.", exampleCn: "请把你的简历发给我们。", category: "工作与学习", tier: "high" }
,
  {     word: "rule", meaning: "规则", example: "Follow the rules.", exampleCn: "遵守规则。", category: "工作与学习", tier: "high" }
,
  {     word: "salary", meaning: "薪水", example: "I get my salary on the first of each month.", exampleCn: "我每月一号领工资。", category: "工作与学习", tier: "high" }
,
  {     word: "schedule", meaning: "日程、时间表", example: "Let me check my schedule.", exampleCn: "我看一下我的日程。", category: "工作与学习", tier: "high" }
,
  {     word: "school", meaning: "学校", example: "My children go to school by bus.", exampleCn: "我的孩子坐公交上学。", category: "工作与学习", tier: "high" }
,
  {     word: "score", meaning: "分数", example: "My test score was 85.", exampleCn: "我考试得了85分。", category: "工作与学习", tier: "high" }
,
  {     word: "service", meaning: "服务", example: "Our company provides excellent service.", exampleCn: "我们公司提供出色的服务。", category: "工作与学习", tier: "high" }
,
  {     word: "sign", meaning: "签名/标志", example: "Sign here please.", exampleCn: "请在这里签名。", category: "工作与学习", tier: "high" }
,
  {     word: "skill", meaning: "技能", example: "What skills do you have?", exampleCn: "你有什么技能？", category: "工作与学习", tier: "high" }
,
  {     word: "solution", meaning: "解决方案", example: "Find a solution.", exampleCn: "找到解决方案。", category: "工作与学习", tier: "high" }
,
  {     word: "study", meaning: "学习", example: "I study English every day.", exampleCn: "我每天学英语。", category: "工作与学习", tier: "high" }
,
  {     word: "task", meaning: "任务", example: "My first task is to organize the files.", exampleCn: "我的第一个任务是整理文件。", category: "工作与学习", tier: "high" }
,
  {     word: "teach", meaning: "教", example: "She teaches math at a high school.", exampleCn: "她在高中教数学。", category: "工作与学习", tier: "high" }
,
  {     word: "test", meaning: "测试", example: "I passed the driving test.", exampleCn: "我通过了驾照考试。", category: "工作与学习", tier: "high" }
,
  {     word: "trade", meaning: "贸易", example: "International trade is growing.", exampleCn: "国际贸易在增长。", category: "工作与学习", tier: "high" }
,
  {     word: "translate", meaning: "翻译", example: "Can you translate this for me?", exampleCn: "你能帮我翻译这个吗？", category: "工作与学习", tier: "high" }
,
  {     word: "understand", meaning: "理解", example: "I don't understand this sentence.", exampleCn: "我不理解这句话。", category: "工作与学习", tier: "high" }
,
  {     word: "university", meaning: "大学", example: "She studies at Beijing University.", exampleCn: "她在北京大学读书。", category: "工作与学习", tier: "high" }
,
  {     word: "word", meaning: "单词", example: "What does this word mean?", exampleCn: "这个单词什么意思？", category: "工作与学习", tier: "high" }
,
  {     word: "work", meaning: "工作", example: "I go to work at 8 a.m.", exampleCn: "我早上8点上班。", category: "工作与学习", tier: "high" }
,
  {     word: "write", meaning: "写", example: "Please write your name here.", exampleCn: "请在这里写下你的名字。", category: "工作与学习", tier: "high" }
,
  {     word: "wrong", meaning: "错误的", example: "I'm sorry, that's wrong.", exampleCn: "抱歉，那不对。", category: "工作与学习", tier: "high" }
,
  {     word: "apartment", meaning: "公寓", example: "She lives in an apartment downtown.", exampleCn: "她住在市中心的一套公寓里。", category: "日常生活", tier: "high" }
,
  {     word: "bag", meaning: "包", example: "She put everything in her bag.", exampleCn: "她把所有东西都放进了包里。", category: "日常生活", tier: "high" }
,
  {     word: "bathroom", meaning: "浴室、卫生间", example: "The bathroom is upstairs.", exampleCn: "浴室在楼上。", category: "日常生活", tier: "high" }
,
  {     word: "bed", meaning: "床", example: "It's time to go to bed.", exampleCn: "该睡觉了。", category: "日常生活", tier: "high" }
,
  {     word: "bedroom", meaning: "卧室", example: "My bedroom is painted blue.", exampleCn: "我的卧室刷成了蓝色。", category: "日常生活", tier: "high" }
,
  {     word: "belt", meaning: "皮带", example: "I need a belt for these pants.", exampleCn: "我需要条皮带配这条裤子。", category: "日常生活", tier: "high" }
,
  {     word: "blanket", meaning: "毯子", example: "I felt cold so I got a blanket.", exampleCn: "我觉得冷就拿了一条毯子。", category: "日常生活", tier: "high" }
,
  {     word: "bottle", meaning: "瓶子", example: "Please give me a bottle of water.", exampleCn: "请给我一瓶水。", category: "日常生活", tier: "high" }
,
  {     word: "bowl", meaning: "碗", example: "I had a bowl of soup for lunch.", exampleCn: "我午饭喝了一碗汤。", category: "日常生活", tier: "high" }
,
  {     word: "box", meaning: "盒子", example: "Put it in the box.", exampleCn: "把它放进盒子里。", category: "日常生活", tier: "high" }
,
  {     word: "cabinet", meaning: "橱柜", example: "The plates are in the cabinet.", exampleCn: "盘子在橱柜里。", category: "日常生活", tier: "high" }
,
  {     word: "calendar", meaning: "日历", example: "Let me check my calendar.", exampleCn: "我查一下日历。", category: "日常生活", tier: "high" }
,
  {     word: "camera", meaning: "相机", example: "I took a photo with my camera.", exampleCn: "我用相机拍了张照片。", category: "日常生活", tier: "high" }
,
  {     word: "carpet", meaning: "地毯", example: "The carpet is very soft.", exampleCn: "地毯很软。", category: "日常生活", tier: "high" }
,
  {     word: "ceiling", meaning: "天花板", example: "There's a light on the ceiling.", exampleCn: "天花板上有一盏灯。", category: "日常生活", tier: "high" }
,
  {     word: "chair", meaning: "椅子", example: "Please sit on this chair.", exampleCn: "请坐这把椅子。", category: "日常生活", tier: "high" }
,
  {     word: "charger", meaning: "充电器", example: "Can I borrow your phone charger?", exampleCn: "能借一下你的手机充电器吗？", category: "日常生活", tier: "high" }
,
  {     word: "chopsticks", meaning: "筷子", example: "Can you use chopsticks?", exampleCn: "你会用筷子吗？", category: "日常生活", tier: "high" }
,
  {     word: "clock", meaning: "时钟", example: "The clock on the wall stopped working.", exampleCn: "墙上的钟不走了。", category: "日常生活", tier: "high" }
,
  {     word: "closet", meaning: "衣柜", example: "Hang your coat in the closet.", exampleCn: "把外套挂在衣柜里。", category: "日常生活", tier: "high" }
,
  {     word: "clothes", meaning: "衣服", example: "I need to buy new clothes.", exampleCn: "我需要买新衣服。", category: "日常生活", tier: "high" }
,
  {     word: "coat", meaning: "外套、大衣", example: "She bought a warm winter coat.", exampleCn: "她买了一件暖和的冬大衣。", category: "日常生活", tier: "high" }
,
  {     word: "computer", meaning: "电脑", example: "I use a computer for work.", exampleCn: "我用电脑工作。", category: "日常生活", tier: "high" }
,
  {     word: "cotton", meaning: "棉花、棉布", example: "This shirt is 100% cotton.", exampleCn: "这件衬衫是纯棉的。", category: "日常生活", tier: "high" }
,
  {     word: "cup", meaning: "杯子", example: "Would you like a cup of tea?", exampleCn: "来杯茶吗？", category: "日常生活", tier: "high" }
,
  {     word: "curtain", meaning: "窗帘", example: "Close the curtains, the sun is too bright.", exampleCn: "拉上窗帘，太阳太刺眼了。", category: "日常生活", tier: "high" }
,
  {     word: "desk", meaning: "书桌", example: "He is studying at his desk.", exampleCn: "他在书桌前学习。", category: "日常生活", tier: "high" }
,
  {     word: "door", meaning: "门", example: "Please close the door.", exampleCn: "请关上门。", category: "日常生活", tier: "high" }
,
  {     word: "drawer", meaning: "抽屉", example: "The keys are in the top drawer.", exampleCn: "钥匙在最上面的抽屉里。", category: "日常生活", tier: "high" }
,
  {     word: "dress", meaning: "连衣裙", example: "She wore a red dress.", exampleCn: "她穿了一条红裙子。", category: "日常生活", tier: "high" }
,
  {     word: "floor", meaning: "地板、楼层", example: "The floor is made of wood.", exampleCn: "地板是木头的。", category: "日常生活", tier: "high" }
,
  {     word: "fork", meaning: "叉子", example: "Use a fork to eat the salad.", exampleCn: "用叉子吃沙拉。", category: "日常生活", tier: "high" }
,
  {     word: "fridge", meaning: "冰箱 (口语)", example: "Is there anything in the fridge?", exampleCn: "冰箱里有东西吗？", category: "日常生活", tier: "high" }
,
  {     word: "garage", meaning: "车库", example: "He keeps his car in the garage.", exampleCn: "他把车停在车库里。", category: "日常生活", tier: "high" }
,
  {     word: "garden", meaning: "花园", example: "We have flowers in the garden.", exampleCn: "我们花园里有花。", category: "日常生活", tier: "high" }
,
  {     word: "gift", meaning: "礼物", example: "Thank you for the gift!", exampleCn: "谢谢你的礼物！", category: "日常生活", tier: "high" }
,
  {     word: "glass", meaning: "玻璃、玻璃杯", example: "Be careful, the glass might break.", exampleCn: "小心，玻璃可能会碎。", category: "日常生活", tier: "high" }
,
  {     word: "glasses", meaning: "眼镜", example: "I need glasses to read.", exampleCn: "我看书需要眼镜。", category: "日常生活", tier: "high" }
,
  {     word: "gold", meaning: "金子、金色", example: "She wears a gold ring.", exampleCn: "她戴着一枚金戒指。", category: "日常生活", tier: "high" }
,
  {     word: "hat", meaning: "帽子", example: "He always wears a hat.", exampleCn: "他总是戴帽子。", category: "日常生活", tier: "high" }
,
  {     word: "home", meaning: "家", example: "I'm going home now.", exampleCn: "我现在回家了。", category: "日常生活", tier: "high" }
,
  {     word: "house", meaning: "房子", example: "We live in a small house.", exampleCn: "我们住在一所小房子里。", category: "日常生活", tier: "high" }
,
  {     word: "jacket", meaning: "夹克", example: "Wear a jacket, it's cold outside.", exampleCn: "穿件夹克，外面冷。", category: "日常生活", tier: "high" }
,
  {     word: "key", meaning: "钥匙", example: "I can't find my keys.", exampleCn: "我找不到钥匙了。", category: "日常生活", tier: "high" }
,
  {     word: "kitchen", meaning: "厨房", example: "She is cooking in the kitchen.", exampleCn: "她在厨房做饭。", category: "日常生活", tier: "high" }
,
  {     word: "knife", meaning: "刀", example: "Be careful with the knife.", exampleCn: "小心用刀。", category: "日常生活", tier: "high" }
,
  {     word: "lamp", meaning: "灯", example: "Turn on the lamp, please.", exampleCn: "请开灯。", category: "日常生活", tier: "high" }
,
  {     word: "letter", meaning: "信、字母", example: "I received a letter from my friend.", exampleCn: "我收到了朋友的一封信。", category: "日常生活", tier: "high" }
,
  {     word: "living room", meaning: "客厅", example: "We watch TV in the living room.", exampleCn: "我们在客厅看电视。", category: "日常生活", tier: "high" }
,
  {     word: "magazine", meaning: "杂志", example: "She reads fashion magazines.", exampleCn: "她看时尚杂志。", category: "日常生活", tier: "high" }
,
  {     word: "metal", meaning: "金属", example: "The frame is made of metal.", exampleCn: "框架是金属做的。", category: "日常生活", tier: "high" }
,
  {     word: "microwave", meaning: "微波炉", example: "Heat it in the microwave for two minutes.", exampleCn: "用微波炉加热两分钟。", category: "日常生活", tier: "high" }
,
  {     word: "mirror", meaning: "镜子", example: "She looked at herself in the mirror.", exampleCn: "她照着镜子看自己。", category: "日常生活", tier: "high" }
,
  {     word: "necklace", meaning: "项链", example: "This necklace is a gift from my mother.", exampleCn: "这条项链是妈妈送我的礼物。", category: "日常生活", tier: "high" }
,
  {     word: "newspaper", meaning: "报纸", example: "My father reads the newspaper every morning.", exampleCn: "我父亲每天早上看报纸。", category: "日常生活", tier: "high" }
,
  {     word: "oven", meaning: "烤箱", example: "Preheat the oven to 180 degrees.", exampleCn: "把烤箱预热到180度。", category: "日常生活", tier: "high" }
,
  {     word: "pants", meaning: "裤子", example: "These pants are too long.", exampleCn: "这条裤子太长了。", category: "日常生活", tier: "high" }
,
  {     word: "paper", meaning: "纸", example: "Can I have a piece of paper?", exampleCn: "能给我一张纸吗？", category: "日常生活", tier: "high" }
,
  {     word: "phone", meaning: "电话、手机", example: "I lost my phone.", exampleCn: "我手机丢了。", category: "日常生活", tier: "high" }
,
  {     word: "photo", meaning: "照片", example: "Can I take a photo with you?", exampleCn: "我能和你合个影吗？", category: "日常生活", tier: "high" }
,
  {     word: "picture", meaning: "图片、照片", example: "She drew a beautiful picture.", exampleCn: "她画了一幅漂亮的画。", category: "日常生活", tier: "high" }
,
  {     word: "pillow", meaning: "枕头", example: "I need a softer pillow.", exampleCn: "我需要一个更软的枕头。", category: "日常生活", tier: "high" }
,
  {     word: "plastic", meaning: "塑料", example: "Please don't use plastic bags.", exampleCn: "请不要用塑料袋。", category: "日常生活", tier: "high" }
,
  {     word: "plate", meaning: "盘子", example: "Put the food on a plate.", exampleCn: "把食物放在盘子里。", category: "日常生活", tier: "high" }
,
  {     word: "pocket", meaning: "口袋", example: "He put the money in his pocket.", exampleCn: "他把钱放进口袋。", category: "日常生活", tier: "high" }
,
  {     word: "radio", meaning: "收音机", example: "I listen to the radio in the morning.", exampleCn: "我早上听收音机。", category: "日常生活", tier: "high" }
,
  {     word: "refrigerator", meaning: "冰箱", example: "Put the milk in the refrigerator.", exampleCn: "把牛奶放进冰箱。", category: "日常生活", tier: "high" }
,
  {     word: "remote control", meaning: "遥控器", example: "Where is the remote control?", exampleCn: "遥控器在哪？", category: "日常生活", tier: "high" }
,
  {     word: "ring", meaning: "戒指、环", example: "She wears a gold ring.", exampleCn: "她戴着一枚金戒指。", category: "日常生活", tier: "high" }
,
  {     word: "roof", meaning: "屋顶", example: "The roof needs repair.", exampleCn: "屋顶需要修理。", category: "日常生活", tier: "high" }
,
  {     word: "room", meaning: "房间", example: "My room is on the second floor.", exampleCn: "我的房间在二楼。", category: "日常生活", tier: "high" }
,
  {     word: "screen", meaning: "屏幕", example: "Don't stare at the screen all day.", exampleCn: "别整天盯着屏幕。", category: "日常生活", tier: "high" }
,
  {     word: "shelf", meaning: "架子", example: "The books are on the shelf.", exampleCn: "书在书架上。", category: "日常生活", tier: "high" }
,
  {     word: "shirt", meaning: "衬衫", example: "He wore a white shirt to the party.", exampleCn: "他穿了件白衬衫去派对。", category: "日常生活", tier: "high" }
,
  {     word: "shoe", meaning: "鞋", example: "I need to buy new shoes.", exampleCn: "我需要买新鞋。", category: "日常生活", tier: "high" }
,
  {     word: "silver", meaning: "银、银色", example: "The mirror has a silver frame.", exampleCn: "镜子有银色的边框。", category: "日常生活", tier: "high" }
,
  {     word: "skirt", meaning: "裙子", example: "This skirt is too short.", exampleCn: "这条裙子太短了。", category: "日常生活", tier: "high" }
,
  {     word: "sock", meaning: "袜子", example: "I can't find a matching pair of socks.", exampleCn: "我找不到一双配对的袜子。", category: "日常生活", tier: "high" }
,
  {     word: "sofa", meaning: "沙发", example: "I fell asleep on the sofa.", exampleCn: "我在沙发上睡着了。", category: "日常生活", tier: "high" }
,
  {     word: "spoon", meaning: "勺子", example: "Stir the soup with a spoon.", exampleCn: "用勺子搅一搅汤。", category: "日常生活", tier: "high" }
,
  {     word: "stairs", meaning: "楼梯", example: "She ran up the stairs.", exampleCn: "她跑上了楼梯。", category: "日常生活", tier: "high" }
,
  {     word: "sweater", meaning: "毛衣", example: "My grandmother knitted this sweater for me.", exampleCn: "这件毛衣是我奶奶给我织的。", category: "日常生活", tier: "high" }
,
  {     word: "table", meaning: "桌子", example: "Put the book on the table.", exampleCn: "把书放在桌子上。", category: "日常生活", tier: "high" }
,
  {     word: "television", meaning: "电视机", example: "We bought a new television.", exampleCn: "我们买了新电视。", category: "日常生活", tier: "high" }
,
  {     word: "tool", meaning: "工具", example: "I need some tools to fix this.", exampleCn: "我需要些工具来修这个。", category: "日常生活", tier: "high" }
,
  {     word: "toy", meaning: "玩具", example: "The child is playing with his toys.", exampleCn: "孩子在玩他的玩具。", category: "日常生活", tier: "high" }
,
  {     word: "TV", meaning: "电视 (缩写)", example: "Don't watch too much TV.", exampleCn: "别看太多电视。", category: "日常生活", tier: "high" }
,
  {     word: "umbrella", meaning: "雨伞", example: "Take an umbrella, it's going to rain.", exampleCn: "带把伞，要下雨了。", category: "日常生活", tier: "high" }
,
  {     word: "wall", meaning: "墙", example: "She painted the wall white.", exampleCn: "她把墙刷成了白色。", category: "日常生活", tier: "high" }
,
  {     word: "wallet", meaning: "钱包", example: "I left my wallet at home.", exampleCn: "我把钱包落在家里了。", category: "日常生活", tier: "high" }
,
  {     word: "washing machine", meaning: "洗衣机", example: "Put the clothes in the washing machine.", exampleCn: "把衣服放进洗衣机。", category: "日常生活", tier: "high" }
,
  {     word: "watch", meaning: "手表", example: "My watch is five minutes slow.", exampleCn: "我的手表慢了五分钟。", category: "日常生活", tier: "high" }
,
  {     word: "window", meaning: "窗户", example: "Open the window, it's hot.", exampleCn: "打开窗户，太热了。", category: "日常生活", tier: "high" }
,
  {     word: "wood", meaning: "木头", example: "This table is made of wood.", exampleCn: "这张桌子是木头做的。", category: "日常生活", tier: "high" }
,

  // --- 形容词 — 外观、品质、状态 ---
  {     word: "afraid", meaning: "害怕的/恐怕", example: "I'm afraid it's out of stock.", exampleCn: "恐怕缺货了。", category: "描述性质", tier: "high" }
,
  {     word: "angry", meaning: "生气的", example: "The customer is angry.", exampleCn: "客户很生气。", category: "描述性质", tier: "high" }
,
  {     word: "boring", meaning: "无聊的", example: "A boring meeting.", exampleCn: "无聊的会议。", category: "描述性质", tier: "high" }
,
  {     word: "brave", meaning: "勇敢的", example: "Be brave.", exampleCn: "勇敢点。", category: "描述性质", tier: "high" }
,
  {     word: "careful", meaning: "小心的", example: "Be careful with the package.", exampleCn: "小心包裹。", category: "描述性质", tier: "high" }
,
  {     word: "cheap", meaning: "便宜的", example: "Cheap but good.", exampleCn: "便宜但好。", category: "描述性质", tier: "high" }
,
  {     word: "closed", meaning: "关闭的", example: "Closed on Sundays.", exampleCn: "周日休息。", category: "描述性质", tier: "high" }
,
  {     word: "difficult", meaning: "困难的", example: "Difficult to explain.", exampleCn: "难解释。", category: "描述性质", tier: "high" }
,
  {     word: "empty", meaning: "空的", example: "Empty box.", exampleCn: "空盒子。", category: "描述性质", tier: "high" }
,
  {     word: "expensive", meaning: "贵的", example: "Too expensive.", exampleCn: "太贵了。", category: "描述性质", tier: "high" }
,
  {     word: "fair", meaning: "公平的", example: "A fair price.", exampleCn: "公平的价格。", category: "描述性质", tier: "high" }
,
  {     word: "famous", meaning: "著名的", example: "A famous brand.", exampleCn: "著名品牌。", category: "描述性质", tier: "high" }
,
  {     word: "heavy", meaning: "重的", example: "Heavy package.", exampleCn: "重包裹。", category: "描述性质", tier: "high" }
,
  {     word: "honest", meaning: "诚实的", example: "An honest supplier.", exampleCn: "诚实的供应商。", category: "描述性质", tier: "high" }
,
  {     word: "interesting", meaning: "有趣的", example: "An interesting product.", exampleCn: "有趣的产品。", category: "描述性质", tier: "high" }
,
  {     word: "kind", meaning: "善良的/种类", example: "Thank you, you are very kind.", exampleCn: "谢谢，你真好。", category: "描述性质", tier: "high" }
,
  {     word: "large", meaning: "大的(正式)", example: "A large quantity.", exampleCn: "大批量。", category: "描述性质", tier: "high" }
,
  {     word: "lazy", meaning: "懒的", example: "Don't be lazy.", exampleCn: "别偷懒。", category: "描述性质", tier: "high" }
,
  {     word: "narrow", meaning: "窄的", example: "A narrow path.", exampleCn: "窄路。", category: "描述性质", tier: "high" }
,
  {     word: "nice", meaning: "好的/漂亮", example: "Nice to meet you.", exampleCn: "很高兴认识你。", category: "描述性质", tier: "high" }
,
  {     word: "popular", meaning: "受欢迎的", example: "Popular products.", exampleCn: "受欢迎的产品。", category: "描述性质", tier: "high" }
,
  {     word: "pretty", meaning: "漂亮的/相当", example: "Pretty good price.", exampleCn: "相当好的价格。", category: "描述性质", tier: "high" }
,
  {     word: "proud", meaning: "自豪的", example: "Proud of our quality.", exampleCn: "为我们的质量自豪。", category: "描述性质", tier: "high" }
,
  {     word: "quick", meaning: "迅速的", example: "A quick reply.", exampleCn: "快速回复。", category: "描述性质", tier: "high" }
,
  {     word: "real", meaning: "真实的", example: "Real leather.", exampleCn: "真皮。", category: "描述性质", tier: "high" }
,
  {     word: "serious", meaning: "严肃的/严重的", example: "A serious problem.", exampleCn: "严重的问题。", category: "描述性质", tier: "high" }
,
  {     word: "similar", meaning: "相似的", example: "Similar to this one.", exampleCn: "和这个相似。", category: "描述性质", tier: "high" }
,
  {     word: "simple", meaning: "简单的", example: "Simple design.", exampleCn: "简单的设计。", category: "描述性质", tier: "high" }
,
  {     word: "smart", meaning: "聪明的", example: "A smart choice.", exampleCn: "明智的选择。", category: "描述性质", tier: "high" }
,
  {     word: "soft", meaning: "软的", example: "Soft material.", exampleCn: "软材质。", category: "描述性质", tier: "high" }
,
  {     word: "stupid", meaning: "愚蠢的", example: "A stupid mistake.", exampleCn: "愚蠢的错误。", category: "描述性质", tier: "high" }
,
  {     word: "tall", meaning: "高的(人/物)", example: "A tall building.", exampleCn: "高楼。", category: "描述性质", tier: "high" }
,
  {     word: "thick", meaning: "厚的/粗的", example: "Thick material.", exampleCn: "厚材料。", category: "描述性质", tier: "high" }
,
  {     word: "wide", meaning: "宽的", example: "A wide range of products.", exampleCn: "产品种类广泛。", category: "描述性质", tier: "high" }
,

  // --- 日常物品与家居 ---
  {     word: "basket", meaning: "篮子", example: "A shopping basket.", exampleCn: "购物篮。", category: "日常生活", tier: "high" }
,
  {     word: "battery", meaning: "电池", example: "The battery lasts long.", exampleCn: "电池很耐用。", category: "日常生活", tier: "high" }
,
  {     word: "furniture", meaning: "家具", example: "We sell furniture online.", exampleCn: "我们在网上卖家具。", category: "日常生活", tier: "high" }
,
  {     word: "light", meaning: "光/灯", example: "Turn off the light.", exampleCn: "关灯。", category: "日常生活", tier: "high" }
,
  {     word: "lock", meaning: "锁", example: "The door lock is broken.", exampleCn: "门锁坏了。", category: "日常生活", tier: "high" }
,
  {     word: "machine", meaning: "机器", example: "The machine is running.", exampleCn: "机器在运转。", category: "日常生活", tier: "high" }
,
  {     word: "rope", meaning: "绳子", example: "Tie it with a rope.", exampleCn: "用绳子绑起来。", category: "日常生活", tier: "high" }
,
  {     word: "shoes", meaning: "鞋子", example: "Comfortable shoes.", exampleCn: "舒适的鞋子。", category: "日常生活", tier: "high" }
,
  {     word: "string", meaning: "细绳/线", example: "A piece of string.", exampleCn: "一根细绳。", category: "日常生活", tier: "high" }
,
  {     word: "towel", meaning: "毛巾", example: "A clean towel.", exampleCn: "一条干净毛巾。", category: "日常生活", tier: "high" }
,
  {     word: "wire", meaning: "电线", example: "The wire is too short.", exampleCn: "电线太短。", category: "日常生活", tier: "high" }
,
  {     word: "yard", meaning: "院子", example: "Park in the yard.", exampleCn: "停在院子里。", category: "日常生活", tier: "high" }
,

  // --- 时间单位、日期、星期、月份 ---
  {     word: "April", meaning: "四月", example: "April delivery.", exampleCn: "四月交货。", category: "时间与日期", tier: "high" }
,
  {     word: "August", meaning: "八月", example: "Back to school in August.", exampleCn: "八月返校季。", category: "时间与日期", tier: "high" }
,
  {     word: "beginning", meaning: "开始/开头", example: "At the beginning of the month.", exampleCn: "月初。", category: "时间与日期", tier: "high" }
,
  {     word: "December", meaning: "十二月", example: "Christmas in December.", exampleCn: "十二月圣诞节。", category: "时间与日期", tier: "high" }
,
  {     word: "early", meaning: "早的", example: "Early delivery.", exampleCn: "提前交货。", category: "时间与日期", tier: "high" }
,
  {     word: "February", meaning: "二月", example: "February shipment.", exampleCn: "二月发货。", category: "时间与日期", tier: "high" }
,
  {     word: "Friday", meaning: "周五", example: "TGIF!", exampleCn: "感谢上帝今天是周五！", category: "时间与日期", tier: "high" }
,
  {     word: "future", meaning: "将来", example: "In the future.", exampleCn: "将来。", category: "时间与日期", tier: "high" }
,
  {     word: "January", meaning: "一月", example: "January sales.", exampleCn: "一月促销。", category: "时间与日期", tier: "high" }
,
  {     word: "July", meaning: "七月", example: "Prime Day in July.", exampleCn: "七月会员日。", category: "时间与日期", tier: "high" }
,
  {     word: "June", meaning: "六月", example: "June is busy.", exampleCn: "六月很忙。", category: "时间与日期", tier: "high" }
,
  {     word: "late", meaning: "晚的", example: "Late payment.", exampleCn: "逾期付款。", category: "时间与日期", tier: "high" }
,
  {     word: "March", meaning: "三月", example: "New model in March.", exampleCn: "三月出新款。", category: "时间与日期", tier: "high" }
,
  {     word: "Monday", meaning: "周一", example: "Ship on Monday.", exampleCn: "周一发货。", category: "时间与日期", tier: "high" }
,
  {     word: "November", meaning: "十一月", example: "Black Friday in November.", exampleCn: "十一月黑色星期五。", category: "时间与日期", tier: "high" }
,
  {     word: "October", meaning: "十月", example: "October fair.", exampleCn: "十月展会。", category: "时间与日期", tier: "high" }
,
  {     word: "present", meaning: "现在的/礼物", example: "At present.", exampleCn: "目前。", category: "时间与日期", tier: "high" }
,
  {     word: "Saturday", meaning: "周六", example: "Work on Saturday?", exampleCn: "周六上班？", category: "时间与日期", tier: "high" }
,
  {     word: "September", meaning: "九月", example: "September order.", exampleCn: "九月订单。", category: "时间与日期", tier: "high" }
,
  {     word: "Sunday", meaning: "周日", example: "Rest on Sunday.", exampleCn: "周日休息。", category: "时间与日期", tier: "high" }
,
  {     word: "Thursday", meaning: "周四", example: "Call you Thursday.", exampleCn: "周四打给你。", category: "时间与日期", tier: "high" }
,
  {     word: "Tuesday", meaning: "周二", example: "Arrive on Tuesday.", exampleCn: "周二到。", category: "时间与日期", tier: "high" }
,
  {     word: "Wednesday", meaning: "周三", example: "Meeting on Wednesday.", exampleCn: "周三开会。", category: "时间与日期", tier: "high" }
,
  {     word: "actually", meaning: "实际上", example: "Actually, I don't know.", exampleCn: "实际上，我不知道。", category: "基本动作", tier: "high" }
,
  {     word: "afternoon", meaning: "下午", example: "Good afternoon!", exampleCn: "下午好！", category: "基本动作", tier: "high" }
,
  {     word: "again", meaning: "再次", example: "Try again.", exampleCn: "再试一次。", category: "基本动作", tier: "high" }
,
  {     word: "ate", meaning: "吃(过去式)", example: "I ate too much.", exampleCn: "我吃太多了。", category: "基本动作", tier: "high" }
,
  {     word: "away", meaning: "离开", example: "Go away.", exampleCn: "走开。", category: "基本动作", tier: "high" }
,
  {     word: "bad", meaning: "坏的", example: "That's bad news.", exampleCn: "那是坏消息。", category: "基本动作", tier: "high" }
,
  // --- 新增: AI与科技 ---
  { word: "bias", meaning: "偏见/偏差", example: "Algorithm bias.", exampleCn: "算法偏见。", category: "AI与科技", tier: "biz" }
,
  { word: "accuracy", meaning: "准确率", example: "High accuracy.", exampleCn: "高准确率。", category: "AI与科技", tier: "biz" }
,
  { word: "precision", meaning: "精确率", example: "Precision and recall.", exampleCn: "精确率与召回率。", category: "AI与科技", tier: "biz" }
,
  { word: "synthesis", meaning: "合成", example: "Speech synthesis.", exampleCn: "语音合成。", category: "AI与科技", tier: "biz" }
,
  { word: "detection", meaning: "检测", example: "Object detection.", exampleCn: "物体检测。", category: "AI与科技", tier: "biz" }
,
  // --- 新增: 互联网与开发 ---
  { word: "restore", meaning: "恢复/还原", example: "Restore data.", exampleCn: "恢复数据。", category: "互联网与开发", tier: "biz" }
,
  { word: "compile", meaning: "编译", example: "Compile the program.", exampleCn: "编译程序。", category: "互联网与开发", tier: "biz" }
,
  { word: "runtime", meaning: "运行时", example: "Runtime error.", exampleCn: "运行时错误。", category: "互联网与开发", tier: "biz" }
,
  { word: "framework", meaning: "框架", example: "Web framework.", exampleCn: "Web 框架。", category: "互联网与开发", tier: "biz" }
,
  { word: "library", meaning: "库/程序库", example: "Code library.", exampleCn: "代码库。", category: "互联网与开发", tier: "biz" }
,
  { word: "dependency", meaning: "依赖", example: "Package dependency.", exampleCn: "包依赖。", category: "互联网与开发", tier: "biz" }
,
  // --- 新增: 产品与质量 ---
  { word: "fabric", meaning: "布料", example: "Cotton fabric.", exampleCn: "棉布料。", category: "产品与质量", tier: "biz" }
,
  { word: "textile", meaning: "纺织品", example: "Textile industry.", exampleCn: "纺织业。", category: "产品与质量", tier: "biz" }
,
  { word: "alloy", meaning: "合金", example: "Aluminum alloy.", exampleCn: "铝合金。", category: "产品与质量", tier: "biz" }
,
  { word: "manufacture", meaning: "制造", example: "Manufacture date.", exampleCn: "生产日期。", category: "产品与质量", tier: "biz" }
,
  { word: "slogan", meaning: "口号/标语", example: "Brand slogan.", exampleCn: "品牌口号。", category: "产品与质量", tier: "biz" }
,
  { word: "flaw", meaning: "瑕疵/缺陷", example: "Without flaw.", exampleCn: "毫无瑕疵。", category: "产品与质量", tier: "biz" }
,
  { word: "recall", meaning: "召回", example: "Product recall.", exampleCn: "产品召回。", category: "产品与质量", tier: "biz" }
,
  { word: "liability", meaning: "责任", example: "Product liability.", exampleCn: "产品责任。", category: "产品与质量", tier: "biz" }
,
  // --- 新增: 商务谈判 ---
  { word: "counteroffer", meaning: "还价", example: "Make a counteroffer.", exampleCn: "还价。", category: "商务谈判", tier: "biz" }
,
  { word: "bulk", meaning: "批量/大宗", example: "Bulk purchase.", exampleCn: "批量采购。", category: "商务谈判", tier: "biz" }
,
  { word: "vendor", meaning: "供应商/卖家", example: "Vendor management.", exampleCn: "供应商管理。", category: "商务谈判", tier: "biz" }
,
  { word: "stakeholder", meaning: "利益相关方", example: "Key stakeholder.", exampleCn: "关键利益方。", category: "商务谈判", tier: "biz" }
,
  { word: "confidential", meaning: "保密的", example: "Confidential information.", exampleCn: "保密信息。", category: "商务谈判", tier: "biz" }
,
  { word: "non-disclosure", meaning: "保密(不披露)", example: "NDA agreement.", exampleCn: "保密协议。", category: "商务谈判", tier: "biz" }
,
  { word: "arbitration", meaning: "仲裁", example: "International arbitration.", exampleCn: "国际仲裁。", category: "商务谈判", tier: "biz" }
,
  { word: "settlement", meaning: "和解/结算", example: "Reach a settlement.", exampleCn: "达成和解。", category: "商务谈判", tier: "biz" }
,
  // --- 新增: 客服与售后 ---
  { word: "escalate", meaning: "升级/上报", example: "Escalate the issue.", exampleCn: "上报问题。", category: "客服与售后", tier: "biz" }
,
  { word: "resolve", meaning: "解决", example: "Resolve a complaint.", exampleCn: "解决投诉。", category: "客服与售后", tier: "biz" }
,
  { word: "troubleshoot", meaning: "故障排查", example: "Troubleshoot a problem.", exampleCn: "排查问题。", category: "客服与售后", tier: "biz" }
,
  { word: "diagnose", meaning: "诊断", example: "Diagnose the issue.", exampleCn: "诊断问题。", category: "客服与售后", tier: "biz" }
,
  { word: "maintenance", meaning: "维护", example: "Regular maintenance.", exampleCn: "定期维护。", category: "客服与售后", tier: "biz" }
,
  { word: "coverage", meaning: "覆盖范围/保险", example: "Warranty coverage.", exampleCn: "保修范围。", category: "客服与售后", tier: "biz" }
,
  { word: "compensation", meaning: "赔偿/补偿", example: "Ask for compensation.", exampleCn: "要求赔偿。", category: "客服与售后", tier: "biz" }
,
  { word: "procedure", meaning: "流程/程序", example: "Return procedure.", exampleCn: "退货流程。", category: "客服与售后", tier: "biz" }
,
  { word: "policy", meaning: "政策", example: "Return policy.", exampleCn: "退货政策。", category: "客服与售后", tier: "biz" }
,
  // --- 新增: 支付与金融 ---
  { word: "merchant", meaning: "商户", example: "Merchant account.", exampleCn: "商户账户。", category: "支付与金融", tier: "biz" }
,
  { word: "withdraw", meaning: "提现/取款", example: "Withdraw money.", exampleCn: "取钱。", category: "支付与金融", tier: "biz" }
,
  { word: "forex", meaning: "外汇", example: "Forex market.", exampleCn: "外汇市场。", category: "支付与金融", tier: "biz" }
,
  { word: "loan", meaning: "贷款", example: "Apply for a loan.", exampleCn: "申请贷款。", category: "支付与金融", tier: "biz" }
,
  { word: "mortgage", meaning: "按揭/抵押", example: "House mortgage.", exampleCn: "房屋按揭。", category: "支付与金融", tier: "biz" }
,
  { word: "charge", meaning: "收费/费用", example: "Extra charge.", exampleCn: "额外费用。", category: "支付与金融", tier: "biz" }
,
  { word: "expense", meaning: "开销/费用", example: "Business expense.", exampleCn: "业务开销。", category: "支付与金融", tier: "biz" }
,
  { word: "capital", meaning: "资本/资金", example: "Working capital.", exampleCn: "运营资金。", category: "支付与金融", tier: "biz" }
,
  { word: "investment", meaning: "投资", example: "Return on investment.", exampleCn: "投资回报。", category: "支付与金融", tier: "biz" }
,
  { word: "asset", meaning: "资产", example: "Fixed asset.", exampleCn: "固定资产。", category: "支付与金融", tier: "biz" }
,
  // --- 新增: 物流与仓储 ---
  { word: "consignment", meaning: "托运/寄售", example: "A consignment of goods.", exampleCn: "一批货物。", category: "物流与仓储", tier: "biz" }
,
  { word: "consignee", meaning: "收货人", example: "Consignee name.", exampleCn: "收货人姓名。", category: "物流与仓储", tier: "biz" }
,
  { word: "consignor", meaning: "发货人", example: "Consignor address.", exampleCn: "发货人地址。", category: "物流与仓储", tier: "biz" }
,
  { word: "notify", meaning: "通知/告知", example: "Notify the buyer.", exampleCn: "通知买家。", category: "物流与仓储", tier: "biz" }
,
  { word: "dispatch", meaning: "发运/派送", example: "Ready for dispatch.", exampleCn: "准备发运。", category: "物流与仓储", tier: "biz" }
,
  { word: "transit", meaning: "运输中", example: "In transit.", exampleCn: "运输中。", category: "物流与仓储", tier: "biz" }
,
  { word: "transshipment", meaning: "转运/中转", example: "Transshipment port.", exampleCn: "转运港。", category: "物流与仓储", tier: "biz" }
,
  { word: "quarantine", meaning: "检疫", example: "Animal quarantine.", exampleCn: "动物检疫。", category: "物流与仓储", tier: "biz" }
,
  { word: "origin", meaning: "原产地", example: "Country of origin.", exampleCn: "原产国。", category: "物流与仓储", tier: "biz" }
,
  { word: "detention", meaning: "滞留/扣留", example: "Container detention.", exampleCn: "集装箱滞箱费。", category: "物流与仓储", tier: "biz" }
,
  { word: "demurrage", meaning: "滞期费", example: "Demurrage charges.", exampleCn: "滞期费。", category: "物流与仓储", tier: "biz" }
,
  { word: "shelving", meaning: "上架/货架", example: "Warehouse shelving.", exampleCn: "仓库货架。", category: "物流与仓储", tier: "biz" }
,
  { word: "forklift", meaning: "叉车", example: "Operate a forklift.", exampleCn: "开叉车。", category: "物流与仓储", tier: "biz" }
,
  { word: "loading", meaning: "装载", example: "Loading dock.", exampleCn: "装货台。", category: "物流与仓储", tier: "biz" }
,
  // --- 新增: 电商运营 ---
  { word: "description", meaning: "描述", example: "Product description.", exampleCn: "产品描述。", category: "电商运营", tier: "biz" }
,
  { word: "bullet", meaning: "要点/子弹点", example: "Bullet points.", exampleCn: "要点列表。", category: "电商运营", tier: "biz" }
,
  { word: "image", meaning: "图片", example: "Product image.", exampleCn: "产品图片。", category: "电商运营", tier: "biz" }
,
  { word: "thumbnail", meaning: "缩略图", example: "Thumbnail image.", exampleCn: "缩略图。", category: "电商运营", tier: "biz" }
,
  { word: "video", meaning: "视频", example: "Product video.", exampleCn: "产品视频。", category: "电商运营", tier: "biz" }
,
  { word: "gallery", meaning: "图片库", example: "Image gallery.", exampleCn: "图片库。", category: "电商运营", tier: "biz" }
,
  { word: "spec", meaning: "规格", example: "Product specs.", exampleCn: "产品规格。", category: "电商运营", tier: "biz" }
,
  { word: "option", meaning: "选项", example: "Size options.", exampleCn: "尺码选项。", category: "电商运营", tier: "biz" }
,
  { word: "selection", meaning: "选择/精选", example: "Wide selection.", exampleCn: "多种选择。", category: "电商运营", tier: "biz" }
,
  { word: "subcategory", meaning: "子类目", example: "Choose a subcategory.", exampleCn: "选择子类目。", category: "电商运营", tier: "biz" }
,
  { word: "view", meaning: "浏览量/查看", example: "Page view.", exampleCn: "页面浏览量。", category: "电商运营", tier: "biz" }
,
  { word: "session", meaning: "会话", example: "User session.", exampleCn: "用户会话。", category: "电商运营", tier: "biz" }
,
  // --- 新增: 营销与流量 ---
  { word: "affiliate", meaning: "联盟营销", example: "Affiliate link.", exampleCn: "联盟链接。", category: "营销与流量", tier: "biz" }
,
  { word: "landing", meaning: "着陆页", example: "Landing page.", exampleCn: "着陆页。", category: "营销与流量", tier: "biz" }
,
  { word: "funnel", meaning: "漏斗/转化路径", example: "Sales funnel.", exampleCn: "销售漏斗。", category: "营销与流量", tier: "biz" }
,
  { word: "segment", meaning: "细分/分段", example: "Market segment.", exampleCn: "市场细分。", category: "营销与流量", tier: "biz" }
,
  { word: "retarget", meaning: "再营销/重定向", example: "Retarget visitors.", exampleCn: "重定向访客。", category: "营销与流量", tier: "biz" }
,
  { word: "giveaway", meaning: "赠品/抽奖", example: "Free giveaway.", exampleCn: "免费赠品。", category: "营销与流量", tier: "biz" }
,
  { word: "testimonial", meaning: "客户证言", example: "Customer testimonial.", exampleCn: "客户见证。", category: "营销与流量", tier: "biz" }
,
  { word: "proof", meaning: "证明/证据", example: "Social proof.", exampleCn: "社会认同。", category: "营销与流量", tier: "biz" }
,
  { word: "scarcity", meaning: "稀缺性", example: "Scarcity tactic.", exampleCn: "稀缺性策略。", category: "营销与流量", tier: "biz" }
,
  { word: "urgency", meaning: "紧迫感", example: "Create urgency.", exampleCn: "制造紧迫感。", category: "营销与流量", tier: "biz" }
,
  { word: "countdown", meaning: "倒计时", example: "Countdown timer.", exampleCn: "倒计时器。", category: "营销与流量", tier: "biz" }
,
  { word: "hashtag", meaning: "话题标签", example: "Use a hashtag.", exampleCn: "用话题标签。", category: "营销与流量", tier: "biz" }
,
  {     word: "badly", meaning: "坏地/严重地", example: "I need this badly.", exampleCn: "我非常需要这个。", category: "基本动作", tier: "high" }
,
  {     word: "beautiful", meaning: "美丽的", example: "What a beautiful day!", exampleCn: "多美的一天！", category: "基本动作", tier: "high" }
,
  {     word: "big", meaning: "大的", example: "It's a big house.", exampleCn: "那是栋大房子。", category: "基本动作", tier: "high" }
,
  {     word: "bottom", meaning: "底部", example: "Read the bottom line.", exampleCn: "看最下面一行。", category: "基本动作", tier: "high" }
,
  {     word: "bought", meaning: "买(过去式)", example: "I bought a new phone.", exampleCn: "我买了个新手机。", category: "基本动作", tier: "high" }
,
  {     word: "broke", meaning: "打破(过去式)", example: "I broke my phone screen.", exampleCn: "我把手机屏幕摔碎了。", category: "基本动作", tier: "high" }
,
  {     word: "built", meaning: "建造(过去式)", example: "They built a new factory.", exampleCn: "他们建了新工厂。", category: "基本动作", tier: "high" }
,
  {     word: "busy", meaning: "忙的", example: "I'm busy right now.", exampleCn: "我现在很忙。", category: "基本动作", tier: "high" }
,
  {     word: "call", meaning: "打电话/叫", example: "Call me later.", exampleCn: "晚点打给我。", category: "基本动作", tier: "high" }
,
  {     word: "came", meaning: "来(过去式)", example: "She came late.", exampleCn: "她来晚了。", category: "基本动作", tier: "high" }
,
  {     word: "carefully", meaning: "小心地", example: "Drive carefully.", exampleCn: "小心开车。", category: "基本动作", tier: "high" }
,
  {     word: "caught", meaning: "抓住(过去式)", example: "I caught the ball.", exampleCn: "我接住了球。", category: "基本动作", tier: "high" }
,
  {     word: "chose", meaning: "选择(过去式)", example: "She chose the blue one.", exampleCn: "她选了蓝色的。", category: "基本动作", tier: "high" }
,
  {     word: "city", meaning: "城市", example: "Beijing is a big city.", exampleCn: "北京是个大城市。", category: "基本动作", tier: "high" }
,
  {     word: "clean", meaning: "干净的", example: "Keep your room clean.", exampleCn: "保持房间干净。", category: "基本动作", tier: "high" }
,
  {     word: "clear", meaning: "清楚的", example: "Is that clear?", exampleCn: "清楚了吗？", category: "基本动作", tier: "high" }
,
  {     word: "common", meaning: "常见的", example: "It's a common mistake.", exampleCn: "这是个常见错误。", category: "基本动作", tier: "high" }
,
  {     word: "corner", meaning: "角落", example: "The shop is on the corner.", exampleCn: "店铺在拐角处。", category: "基本动作", tier: "high" }
,
  {     word: "country", meaning: "国家", example: "Which country are you from?", exampleCn: "你来自哪个国家？", category: "基本动作", tier: "high" }
,
  {     word: "dangerous", meaning: "危险的", example: "It's dangerous to go alone.", exampleCn: "一个人去很危险。", category: "基本动作", tier: "high" }
,
  {     word: "day", meaning: "天/日", example: "Have a nice day!", exampleCn: "祝你有美好的一天！", category: "基本动作", tier: "high" }
,
  {     word: "different", meaning: "不同的", example: "These are different colors.", exampleCn: "这些颜色不同。", category: "基本动作", tier: "high" }
,
  {     word: "dirty", meaning: "脏的", example: "My hands are dirty.", exampleCn: "我的手脏了。", category: "基本动作", tier: "high" }
,
  {     word: "drank", meaning: "喝(过去式)", example: "She drank all the water.", exampleCn: "她把水都喝了。", category: "基本动作", tier: "high" }
,
  {     word: "drove", meaning: "开车(过去式)", example: "She drove to work.", exampleCn: "她开车去上班。", category: "基本动作", tier: "high" }
,
  {     word: "easy", meaning: "容易的", example: "This is easy.", exampleCn: "这很简单。", category: "基本动作", tier: "high" }
,
  {     word: "else", meaning: "其他/别的", example: "Anything else?", exampleCn: "还要别的吗？", category: "基本动作", tier: "high" }
,
  {     word: "evening", meaning: "晚上", example: "Good evening!", exampleCn: "晚上好！", category: "基本动作", tier: "high" }
,
  {     word: "example", meaning: "例子", example: "For example.", exampleCn: "举个例子。", category: "基本动作", tier: "high" }
,
  {     word: "excuse me", meaning: "打扰一下", example: "Excuse me, where is the station?", exampleCn: "打扰一下，车站在哪？", category: "基本动作", tier: "high" }
,
  {     word: "false", meaning: "假的/错的", example: "True or false?", exampleCn: "对还是错？", category: "基本动作", tier: "high" }
,
  {     word: "fast", meaning: "快的", example: "He drives too fast.", exampleCn: "他开太快了。", category: "基本动作", tier: "high" }
,
  {     word: "fell", meaning: "掉落(过去式)", example: "The baby fell asleep.", exampleCn: "宝宝睡着了。", category: "基本动作", tier: "high" }
,
  {     word: "felt", meaning: "感觉(过去式)", example: "I felt tired after work.", exampleCn: "下班后我觉得累。", category: "基本动作", tier: "high" }
,
  {     word: "flew", meaning: "飞(过去式)", example: "The bird flew away.", exampleCn: "鸟飞走了。", category: "基本动作", tier: "high" }
,
  {     word: "found", meaning: "找到(过去式)", example: "I found my keys.", exampleCn: "我找到钥匙了。", category: "基本动作", tier: "high" }
,
  {     word: "free", meaning: "自由的/免费的", example: "It's free!", exampleCn: "是免费的！", category: "基本动作", tier: "high" }
,
  {     word: "front", meaning: "前面", example: "Sit in the front.", exampleCn: "坐前面。", category: "基本动作", tier: "high" }
,
  {     word: "gave", meaning: "给(过去式)", example: "I gave him the book.", exampleCn: "我把书给了他。", category: "基本动作", tier: "high" }
,
  {     word: "gone", meaning: "去(过去分词)", example: "She has gone home.", exampleCn: "她已经回家了。", category: "基本动作", tier: "high" }
,
  {     word: "good", meaning: "好的", example: "Good morning!", exampleCn: "早上好！", category: "基本动作", tier: "high" }
,
  {     word: "good night", meaning: "晚安", example: "Good night, sleep well.", exampleCn: "晚安，睡个好觉。", category: "基本动作", tier: "high" }
,
  {     word: "goodbye", meaning: "再见", example: "Goodbye, see you later.", exampleCn: "再见，回头见。", category: "基本动作", tier: "high" }
,
  {     word: "got", meaning: "得到(过去式)", example: "I got your message.", exampleCn: "我收到了你的消息。", category: "基本动作", tier: "high" }
,
  {     word: "grew", meaning: "生长(过去式)", example: "The company grew fast.", exampleCn: "公司发展很快。", category: "基本动作", tier: "high" }
,
  {     word: "happy", meaning: "开心的", example: "I'm so happy!", exampleCn: "我好开心！", category: "基本动作", tier: "high" }
,
  {     word: "hard", meaning: "难的/硬的", example: "English is hard.", exampleCn: "英语很难。", category: "基本动作", tier: "high" }
,
  {     word: "heard", meaning: "听见(过去式)", example: "I heard a noise.", exampleCn: "我听到一个声音。", category: "基本动作", tier: "high" }
,
  {     word: "held", meaning: "拿着(过去式)", example: "She held my hand.", exampleCn: "她牵着我的手。", category: "基本动作", tier: "high" }
,
  {     word: "help", meaning: "帮助", example: "Help me, please.", exampleCn: "请帮帮我。", category: "基本动作", tier: "high" }
,
  {     word: "high", meaning: "高的", example: "The price is too high.", exampleCn: "价格太高了。", category: "基本动作", tier: "high" }
,
  {     word: "hour", meaning: "小时", example: "One hour left.", exampleCn: "还剩一小时。", category: "基本动作", tier: "high" }
,
  {     word: "how many", meaning: "多少(可数)", example: "How many people?", exampleCn: "多少人？", category: "基本动作", tier: "high" }
,
  {     word: "how much", meaning: "多少(不可数)", example: "How much is this?", exampleCn: "这个多少钱？", category: "基本动作", tier: "high" }
,
  {     word: "idea", meaning: "主意/想法", example: "Good idea!", exampleCn: "好主意！", category: "基本动作", tier: "high" }
,
  {     word: "important", meaning: "重要的", example: "This is very important.", exampleCn: "这很重要。", category: "基本动作", tier: "high" }
,
  {     word: "impossible", meaning: "不可能的", example: "Nothing is impossible.", exampleCn: "没有什么不可能。", category: "基本动作", tier: "high" }
,
  {     word: "kept", meaning: "保持(过去式)", example: "He kept the secret.", exampleCn: "他保守了秘密。", category: "基本动作", tier: "high" }
,
  {     word: "knew", meaning: "知道(过去式)", example: "I knew it was wrong.", exampleCn: "我知道那是错的。", category: "基本动作", tier: "high" }
,
  {     word: "later", meaning: "稍后", example: "Talk to you later.", exampleCn: "晚点聊。", category: "基本动作", tier: "high" }
,
  {     word: "left", meaning: "左边", example: "Turn left.", exampleCn: "左转。", category: "基本动作", tier: "high" }
,
  {     word: "life", meaning: "生活/生命", example: "Life is beautiful.", exampleCn: "生活很美好。", category: "基本动作", tier: "high" }
,
  {     word: "long", meaning: "长的", example: "It's a long story.", exampleCn: "说来话长。", category: "基本动作", tier: "high" }
,
  {     word: "low", meaning: "低的", example: "The chair is too low.", exampleCn: "椅子太低了。", category: "基本动作", tier: "high" }
,
  {     word: "made", meaning: "做(过去式)", example: "I made a mistake.", exampleCn: "我犯了个错。", category: "基本动作", tier: "high" }
,
  {     word: "meant", meaning: "意思是(过去式)", example: "What he meant was...", exampleCn: "他的意思是……", category: "基本动作", tier: "high" }
,
  {     word: "middle", meaning: "中间", example: "In the middle of the road.", exampleCn: "在路中间。", category: "基本动作", tier: "high" }
,
  {     word: "minute", meaning: "分钟", example: "Wait a minute.", exampleCn: "等一下。", category: "基本动作", tier: "high" }
,
  {     word: "moment", meaning: "片刻", example: "Just a moment.", exampleCn: "稍等片刻。", category: "基本动作", tier: "high" }
,
  {     word: "money", meaning: "钱", example: "I don't have enough money.", exampleCn: "我钱不够。", category: "基本动作", tier: "high" }
,
  {     word: "month", meaning: "月", example: "I'll be back next month.", exampleCn: "我下个月回来。", category: "基本动作", tier: "high" }
,
  {     word: "morning", meaning: "早上", example: "Good morning!", exampleCn: "早上好！", category: "基本动作", tier: "high" }
,
  {     word: "necessary", meaning: "必要的", example: "Is that necessary?", exampleCn: "那有必要吗？", category: "基本动作", tier: "high" }
,
  {     word: "need to", meaning: "需要", example: "I need to go.", exampleCn: "我得走了。", category: "基本动作", tier: "high" }
,
  {     word: "new", meaning: "新的", example: "I got a new job.", exampleCn: "我找到了新工作。", category: "基本动作", tier: "high" }
,
  {     word: "night", meaning: "夜晚", example: "Good night!", exampleCn: "晚安！", category: "基本动作", tier: "high" }
,
  {     word: "no one", meaning: "没有人", example: "No one knows the answer.", exampleCn: "没人知道答案。", category: "基本动作", tier: "high" }
,
  {     word: "normal", meaning: "正常的", example: "That's normal.", exampleCn: "那是正常的。", category: "基本动作", tier: "high" }
,
  {     word: "number", meaning: "数字/号码", example: "What's your phone number?", exampleCn: "你电话号码多少？", category: "基本动作", tier: "high" }
,
  {     word: "paid", meaning: "付钱(过去式)", example: "I paid $50 for this.", exampleCn: "我付了50美元。", category: "基本动作", tier: "high" }
,
  {     word: "part", meaning: "部分", example: "Part of the problem.", exampleCn: "问题的一部分。", category: "基本动作", tier: "high" }
,
  {     word: "place", meaning: "地方", example: "This is a nice place.", exampleCn: "这地方不错。", category: "基本动作", tier: "high" }
,
  {     word: "poor", meaning: "穷的/可怜的", example: "The poor dog is hungry.", exampleCn: "可怜的狗饿了。", category: "基本动作", tier: "high" }
,
  {     word: "possible", meaning: "可能的", example: "Is it possible?", exampleCn: "可能吗？", category: "基本动作", tier: "high" }
,
  {     word: "problem", meaning: "问题/麻烦", example: "No problem!", exampleCn: "没问题！", category: "基本动作", tier: "high" }
,
  {     word: "quickly", meaning: "快速地", example: "Please come quickly.", exampleCn: "请快来。", category: "基本动作", tier: "high" }
,
  {     word: "ran", meaning: "跑(过去式)", example: "He ran to catch the bus.", exampleCn: "他跑去赶公交。", category: "基本动作", tier: "high" }
,
  {     word: "ready", meaning: "准备好的", example: "Are you ready?", exampleCn: "你准备好了吗？", category: "基本动作", tier: "high" }
,
  {     word: "rich", meaning: "富有的/丰富的", example: "He is very rich.", exampleCn: "他很有钱。", category: "基本动作", tier: "high" }
,
  {     word: "right", meaning: "右边/正确 / 对的/右边的", example: "Turn right.", exampleCn: "右转。", category: "基本动作", tier: "high" }
,
  {     word: "sad", meaning: "难过的", example: "Don't be sad.", exampleCn: "别难过。", category: "基本动作", tier: "high" }
,
  {     word: "safe", meaning: "安全的", example: "Is this area safe?", exampleCn: "这个区域安全吗？", category: "基本动作", tier: "high" }
,
  {     word: "said", meaning: "说(过去式)", example: "She said yes.", exampleCn: "她说了好。", category: "基本动作", tier: "high" }
,
  {     word: "same", meaning: "相同的", example: "We have the same bag.", exampleCn: "我们有一样的包。", category: "基本动作", tier: "high" }
,
  {     word: "sang", meaning: "唱歌(过去式)", example: "She sang a beautiful song.", exampleCn: "她唱了一首美丽的歌。", category: "基本动作", tier: "high" }
,
  {     word: "saw", meaning: "看见(过去式)", example: "I saw a movie.", exampleCn: "我看了一部电影。", category: "基本动作", tier: "high" }
,
  {     word: "sent", meaning: "发送(过去式)", example: "I sent you an email.", exampleCn: "我给你发了邮件。", category: "基本动作", tier: "high" }
,
  {     word: "short", meaning: "短的/矮的", example: "She has short hair.", exampleCn: "她留着短发。", category: "基本动作", tier: "high" }
,
  {     word: "side", meaning: "侧面/一边", example: "The other side.", exampleCn: "另一边。", category: "基本动作", tier: "high" }
,
  {     word: "slept", meaning: "睡觉(过去式)", example: "I slept for eight hours.", exampleCn: "我睡了八小时。", category: "基本动作", tier: "high" }
,
  {     word: "slow", meaning: "慢的", example: "The internet is slow.", exampleCn: "网速很慢。", category: "基本动作", tier: "high" }
,
  {     word: "slowly", meaning: "慢慢地", example: "Speak slowly, please.", exampleCn: "请说慢点。", category: "基本动作", tier: "high" }
,
  {     word: "small", meaning: "小的", example: "The room is small.", exampleCn: "房间很小。", category: "基本动作", tier: "high" }
,
  {     word: "sold", meaning: "卖(过去式)", example: "We sold 100 units.", exampleCn: "我们卖了100件。", category: "基本动作", tier: "high" }
,
  {     word: "special", meaning: "特别的", example: "A special gift for you.", exampleCn: "给你的特别礼物。", category: "基本动作", tier: "high" }
,
  {     word: "spoke", meaning: "说(过去式)", example: "She spoke to the manager.", exampleCn: "她跟经理谈了。", category: "基本动作", tier: "high" }
,
  {     word: "story", meaning: "故事", example: "Tell me a story.", exampleCn: "给我讲个故事。", category: "基本动作", tier: "high" }
,
  {     word: "sure", meaning: "当然", example: "Sure, no problem.", exampleCn: "当然，没问题。", category: "基本动作", tier: "high" }
,
  {     word: "swam", meaning: "游泳(过去式)", example: "We swam in the lake.", exampleCn: "我们在湖里游泳。", category: "基本动作", tier: "high" }
,
  {     word: "thank you", meaning: "谢谢你", example: "Thank you very much.", exampleCn: "非常感谢。", category: "基本动作", tier: "high" }
,
  {     word: "thanks", meaning: "谢谢(口语)", example: "Thanks for your help.", exampleCn: "谢谢你的帮助。", category: "基本动作", tier: "high" }
,
  {     word: "thing", meaning: "东西/事情", example: "One more thing.", exampleCn: "还有一件事。", category: "基本动作", tier: "high" }
,
  {     word: "thought", meaning: "想/认为(过去式)", example: "I thought you were busy.", exampleCn: "我以为你在忙。", category: "基本动作", tier: "high" }
,
  {     word: "threw", meaning: "扔(过去式)", example: "He threw the ball.", exampleCn: "他把球扔了。", category: "基本动作", tier: "high" }
,
  {     word: "time", meaning: "时间", example: "What time is it?", exampleCn: "几点了？", category: "基本动作", tier: "high" }
,
  {     word: "took", meaning: "拿/带(过去式)", example: "He took my pen.", exampleCn: "他拿走了我的笔。", category: "基本动作", tier: "high" }
,
  {     word: "top", meaning: "顶部", example: "It's on the top shelf.", exampleCn: "在最上面的架子上。", category: "基本动作", tier: "high" }
,
  {     word: "true", meaning: "真的", example: "Is that true?", exampleCn: "那是真的吗？", category: "基本动作", tier: "high" }
,
  {     word: "ugly", meaning: "丑的", example: "That building is ugly.", exampleCn: "那栋楼很丑。", category: "基本动作", tier: "high" }
,
  {     word: "way", meaning: "方法/路", example: "Which way do we go?", exampleCn: "我们走哪条路？", category: "基本动作", tier: "high" }
,
  {     word: "week", meaning: "周", example: "See you next week.", exampleCn: "下周见。", category: "基本动作", tier: "high" }
,
  {     word: "welcome", meaning: "欢迎/不客气", example: "You're welcome.", exampleCn: "不客气。", category: "基本动作", tier: "high" }
,
  {     word: "went", meaning: "去(过去式)", example: "I went to the store.", exampleCn: "我去了商店。", category: "基本动作", tier: "high" }
,
  {     word: "whole", meaning: "整个的", example: "The whole family came.", exampleCn: "全家都来了。", category: "基本动作", tier: "high" }
,
  {     word: "woke", meaning: "醒来(过去式)", example: "I woke up early today.", exampleCn: "我今天醒得早。", category: "基本动作", tier: "high" }
,
  {     word: "year", meaning: "年", example: "Happy New Year!", exampleCn: "新年快乐！", category: "基本动作", tier: "high" }
,

  // --- 自然现象、动植物、颜色 ---
  {     word: "air", meaning: "空气", example: "The air in the mountains is fresh.", exampleCn: "山里的空气很新鲜。", category: "自然与天气", tier: "high" }
,
  {     word: "animal", meaning: "动物", example: "My favorite animal is the panda.", exampleCn: "我最喜欢的动物是熊猫。", category: "自然与天气", tier: "high" }
,
  {     word: "autumn", meaning: "秋天", example: "I love the colors of autumn.", exampleCn: "我爱秋天的颜色。", category: "自然与天气", tier: "high" }
,
  {     word: "beach", meaning: "海滩", example: "Let's go to the beach this weekend.", exampleCn: "这周末去海滩吧。", category: "自然与天气", tier: "high" }
,
  {     word: "bird", meaning: "鸟", example: "I can hear the birds singing.", exampleCn: "我能听到鸟儿在唱歌。", category: "自然与天气", tier: "high" }
,
  {     word: "black", meaning: "黑色", example: "Black Friday sale.", exampleCn: "黑色星期五促销。", category: "自然与天气", tier: "high" }
,
  {     word: "blue", meaning: "蓝色", example: "Blue is my favorite.", exampleCn: "蓝色是我的最爱。", category: "自然与天气", tier: "high" }
,
  {     word: "bright", meaning: "明亮的", example: "Bright future.", exampleCn: "光明的未来。", category: "自然与天气", tier: "high" }
,
  {     word: "brown", meaning: "棕色", example: "Brown leather.", exampleCn: "棕色皮革。", category: "自然与天气", tier: "high" }
,
  {     word: "cat", meaning: "猫", example: "The cat is sleeping on the sofa.", exampleCn: "猫在沙发上睡觉。", category: "自然与天气", tier: "high" }
,
  {     word: "cloud", meaning: "云", example: "Look at that big cloud.", exampleCn: "看那片大云。", category: "自然与天气", tier: "high" }
,
  {     word: "cloudy", meaning: "多云的", example: "It's cloudy today, maybe it will rain.", exampleCn: "今天多云，可能要下雨。", category: "自然与天气", tier: "high" }
,
  {     word: "cold", meaning: "冷的", example: "It's very cold in winter.", exampleCn: "冬天很冷。", category: "自然与天气", tier: "high" }
,
  {     word: "cool", meaning: "凉爽的", example: "The evening is nice and cool.", exampleCn: "傍晚凉爽宜人。", category: "自然与天气", tier: "high" }
,
  {     word: "dark", meaning: "黑暗的/深的", example: "Dark blue.", exampleCn: "深蓝色。", category: "自然与天气", tier: "high" }
,
  {     word: "dog", meaning: "狗", example: "My dog likes to play fetch.", exampleCn: "我的狗喜欢玩接球。", category: "自然与天气", tier: "high" }
,
  {     word: "dry", meaning: "干燥的", example: "The air is very dry in winter.", exampleCn: "冬天空气很干燥。", category: "自然与天气", tier: "high" }
,
  {     word: "earth", meaning: "地球", example: "The Earth goes around the Sun.", exampleCn: "地球绕太阳转。", category: "自然与天气", tier: "high" }
,
  {     word: "environment", meaning: "环境", example: "We should protect the environment.", exampleCn: "我们应该保护环境。", category: "自然与天气", tier: "high" }
,
  {     word: "fall", meaning: "秋天 (美式)", example: "Leaves turn red in the fall.", exampleCn: "秋天叶子变红。", category: "自然与天气", tier: "high" }
,
  {     word: "fire", meaning: "火", example: "We sat around the fire.", exampleCn: "我们围坐在火边。", category: "自然与天气", tier: "high" }
,
  {     word: "flower", meaning: "花", example: "She gave me a beautiful flower.", exampleCn: "她给了我一朵漂亮的花。", category: "自然与天气", tier: "high" }
,
  {     word: "fog", meaning: "雾", example: "The fog is too thick to drive.", exampleCn: "雾太大了，不适合开车。", category: "自然与天气", tier: "high" }
,
  {     word: "forest", meaning: "森林", example: "We walked through the forest.", exampleCn: "我们穿过了森林。", category: "自然与天气", tier: "high" }
,
  {     word: "grass", meaning: "草", example: "The grass is wet in the morning.", exampleCn: "早上的草是湿的。", category: "自然与天气", tier: "high" }
,
  {     word: "gray", meaning: "灰色", example: "Gray hair.", exampleCn: "灰白头发。", category: "自然与天气", tier: "high" }
,
  {     word: "green", meaning: "绿色", example: "Green packaging.", exampleCn: "绿色包装。", category: "自然与天气", tier: "high" }
,
  {     word: "hill", meaning: "小山", example: "The house is on a hill.", exampleCn: "房子在一座小山上。", category: "自然与天气", tier: "high" }
,
  {     word: "horse", meaning: "马", example: "She rides a horse every weekend.", exampleCn: "她每个周末都骑马。", category: "自然与天气", tier: "high" }
,
  {     word: "hot", meaning: "热的", example: "It's too hot outside.", exampleCn: "外面太热了。", category: "自然与天气", tier: "high" }
,
  {     word: "island", meaning: "岛", example: "They live on a small island.", exampleCn: "他们住在一个小岛上。", category: "自然与天气", tier: "high" }
,
  {     word: "lake", meaning: "湖", example: "We went swimming in the lake.", exampleCn: "我们去湖里游泳了。", category: "自然与天气", tier: "high" }
,
  {     word: "leaf", meaning: "叶子", example: "The leaves fall in autumn.", exampleCn: "秋天叶子落下来。", category: "自然与天气", tier: "high" }
,
  {     word: "moon", meaning: "月亮", example: "The moon is full tonight.", exampleCn: "今晚是满月。", category: "自然与天气", tier: "high" }
,
  {     word: "mountain", meaning: "山", example: "We climbed a high mountain.", exampleCn: "我们爬了一座高山。", category: "自然与天气", tier: "high" }
,
  {     word: "nature", meaning: "自然", example: "I love spending time in nature.", exampleCn: "我喜欢待在大自然里。", category: "自然与天气", tier: "high" }
,
  {     word: "ocean", meaning: "海洋", example: "The Pacific Ocean is very big.", exampleCn: "太平洋非常大。", category: "自然与天气", tier: "high" }
,
  {     word: "pink", meaning: "粉色", example: "Pink flowers.", exampleCn: "粉色花朵。", category: "自然与天气", tier: "high" }
,
  {     word: "plant", meaning: "植物", example: "Water the plants every day.", exampleCn: "每天给植物浇水。", category: "自然与天气", tier: "high" }
,
  {     word: "purple", meaning: "紫色", example: "Purple grapes.", exampleCn: "紫葡萄。", category: "自然与天气", tier: "high" }
,
  {     word: "rain", meaning: "雨、下雨", example: "It's raining outside.", exampleCn: "外面在下雨。", category: "自然与天气", tier: "high" }
,
  {     word: "rainy", meaning: "下雨的", example: "I don't like rainy days.", exampleCn: "我不喜欢下雨天。", category: "自然与天气", tier: "high" }
,
  {     word: "red", meaning: "红色", example: "Red is a lucky color.", exampleCn: "红色是幸运色。", category: "自然与天气", tier: "high" }
,
  {     word: "river", meaning: "河流", example: "The river flows into the sea.", exampleCn: "这条河流入大海。", category: "自然与天气", tier: "high" }
,
  {     word: "sea", meaning: "海", example: "I love swimming in the sea.", exampleCn: "我爱在海里游泳。", category: "自然与天气", tier: "high" }
,
  {     word: "season", meaning: "季节", example: "Which season do you like best?", exampleCn: "你最喜欢哪个季节？", category: "自然与天气", tier: "high" }
,
  {     word: "sky", meaning: "天空", example: "The sky is so blue today.", exampleCn: "今天的天空好蓝。", category: "自然与天气", tier: "high" }
,
  {     word: "snow", meaning: "雪、下雪", example: "It snowed all night.", exampleCn: "下了一整夜的雪。", category: "自然与天气", tier: "high" }
,
  {     word: "spring", meaning: "春天", example: "Flowers bloom in spring.", exampleCn: "春天花开。", category: "自然与天气", tier: "high" }
,
  {     word: "star", meaning: "星星", example: "You can see many stars at night.", exampleCn: "晚上能看到很多星星。", category: "自然与天气", tier: "high" }
,
  {     word: "storm", meaning: "暴风雨", example: "A big storm is coming.", exampleCn: "一场大暴风雨要来了。", category: "自然与天气", tier: "high" }
,
  {     word: "summer", meaning: "夏天", example: "We go swimming in summer.", exampleCn: "我们夏天去游泳。", category: "自然与天气", tier: "high" }
,
  {     word: "sun", meaning: "太阳", example: "The sun is very bright today.", exampleCn: "今天太阳很刺眼。", category: "自然与天气", tier: "high" }
,
  {     word: "sunny", meaning: "晴朗的", example: "It's a sunny day.", exampleCn: "今天是晴天。", category: "自然与天气", tier: "high" }
,
  {     word: "temperature", meaning: "温度", example: "The temperature is 30 degrees today.", exampleCn: "今天温度30度。", category: "自然与天气", tier: "high" }
,
  {     word: "tree", meaning: "树", example: "The tree is very old.", exampleCn: "这棵树很老了。", category: "自然与天气", tier: "high" }
,
  {     word: "warm", meaning: "温暖的", example: "The weather is getting warm.", exampleCn: "天气变暖了。", category: "自然与天气", tier: "high" }
,
  {     word: "weather", meaning: "天气", example: "The weather is nice today.", exampleCn: "今天天气很好。", category: "自然与天气", tier: "high" }
,
  {     word: "wet", meaning: "湿的", example: "My shoes are wet from the rain.", exampleCn: "我的鞋被雨淋湿了。", category: "自然与天气", tier: "high" }
,
  {     word: "white", meaning: "白色", example: "A white shirt.", exampleCn: "白衬衫。", category: "自然与天气", tier: "high" }
,
  {     word: "wind", meaning: "风", example: "The wind is very strong today.", exampleCn: "今天风很大。", category: "自然与天气", tier: "high" }
,
  {     word: "windy", meaning: "有风的", example: "It's too windy to go sailing.", exampleCn: "风太大了，不适合出海。", category: "自然与天气", tier: "high" }
,
  {     word: "winter", meaning: "冬天", example: "It gets dark early in winter.", exampleCn: "冬天天黑得早。", category: "自然与天气", tier: "high" }
,
  {     word: "world", meaning: "世界", example: "The world is a big place.", exampleCn: "世界很大。", category: "自然与天气", tier: "high" }
,
  {     word: "yellow", meaning: "黄色", example: "A yellow dress.", exampleCn: "黄色连衣裙。", category: "自然与天气", tier: "high" }
,

  // --- 购物、消费、交易 ---
  {     word: "bill", meaning: "账单", example: "Pay the bill.", exampleCn: "付账单。", category: "购物与消费", tier: "high" }
,
  {     word: "card", meaning: "卡片/银行卡", example: "Credit card.", exampleCn: "信用卡。", category: "购物与消费", tier: "high" }
,
  {     word: "cash", meaning: "现金", example: "Pay cash.", exampleCn: "付现金。", category: "购物与消费", tier: "high" }
,
  {     word: "cloth", meaning: "布/布料", example: "Soft cloth.", exampleCn: "软布。", category: "购物与消费", tier: "high" }
,
  {     word: "coin", meaning: "硬币", example: "A gold coin.", exampleCn: "金币。", category: "购物与消费", tier: "high" }
,
  {     word: "leather", meaning: "皮/皮革", example: "Genuine leather.", exampleCn: "真皮。", category: "购物与消费", tier: "high" }
,
  {     word: "mall", meaning: "商场", example: "Shopping mall.", exampleCn: "购物中心。", category: "购物与消费", tier: "high" }
,
  {     word: "market", meaning: "市场", example: "The online market.", exampleCn: "线上市场。", category: "购物与消费", tier: "high" }
,
  {     word: "pack", meaning: "包/包装", example: "A pack of 10.", exampleCn: "一包10个。", category: "购物与消费", tier: "high" }
,
  {     word: "pair", meaning: "双/对", example: "A pair of shoes.", exampleCn: "一双鞋。", category: "购物与消费", tier: "high" }
,
  {     word: "pattern", meaning: "图案/模式", example: "A beautiful pattern.", exampleCn: "漂亮的图案。", category: "购物与消费", tier: "high" }
,
  {     word: "piece", meaning: "件/块", example: "One piece each.", exampleCn: "每件一个。", category: "购物与消费", tier: "high" }
,
  {     word: "receipt", meaning: "收据", example: "Keep the receipt.", exampleCn: "保留收据。", category: "购物与消费", tier: "high" }
,
  {     word: "set", meaning: "套/组", example: "A set of tools.", exampleCn: "一套工具。", category: "购物与消费", tier: "high" }
,
  {     word: "shape", meaning: "形状", example: "Round shape.", exampleCn: "圆形。", category: "购物与消费", tier: "high" }
,
  {     word: "shop", meaning: "商店/购物", example: "I shop online.", exampleCn: "我网上购物。", category: "购物与消费", tier: "high" }
,
  {     word: "silk", meaning: "丝绸", example: "Silk scarf.", exampleCn: "丝巾。", category: "购物与消费", tier: "high" }
,
  {     word: "store", meaning: "商店/储存", example: "Open a store.", exampleCn: "开店。", category: "购物与消费", tier: "high" }
,
  {     word: "style", meaning: "风格/款式", example: "New style.", exampleCn: "新款。", category: "购物与消费", tier: "high" }
,
  {     word: "value", meaning: "价值", example: "Good value for money.", exampleCn: "性价比高。", category: "购物与消费", tier: "high" }
,
  {     word: "worth", meaning: "值得/价值", example: "Is it worth it?", exampleCn: "值得吗？", category: "购物与消费", tier: "high" }
,
  {     word: "apple", meaning: "苹果", example: "I eat an apple every day.", exampleCn: "我每天吃一个苹果。", category: "食物与饮食", tier: "high" }
,
  {     word: "banana", meaning: "香蕉", example: "Monkeys love bananas.", exampleCn: "猴子爱吃香蕉。", category: "食物与饮食", tier: "high" }
,
  {     word: "beef", meaning: "牛肉", example: "This beef is very tender.", exampleCn: "这牛肉很嫩。", category: "食物与饮食", tier: "high" }
,
  {     word: "beer", meaning: "啤酒", example: "He ordered a cold beer.", exampleCn: "他点了一杯冰啤酒。", category: "食物与饮食", tier: "high" }
,
  {     word: "bitter", meaning: "苦的", example: "Black coffee tastes bitter.", exampleCn: "黑咖啡尝起来很苦。", category: "食物与饮食", tier: "high" }
,
  {     word: "blood", meaning: "血", example: "The nurse took my blood pressure.", exampleCn: "护士量了我的血压。", category: "食物与饮食", tier: "high" }
,
  {     word: "bread", meaning: "面包", example: "I bought fresh bread this morning.", exampleCn: "我今早买了新鲜面包。", category: "食物与饮食", tier: "high" }
,
  {     word: "breakfast", meaning: "早餐", example: "I usually skip breakfast.", exampleCn: "我通常不吃早餐。", category: "食物与饮食", tier: "high" }
,
  {     word: "butter", meaning: "黄油", example: "Spread butter on the bread.", exampleCn: "在面包上涂黄油。", category: "食物与饮食", tier: "high" }
,
  {     word: "cake", meaning: "蛋糕", example: "She made a birthday cake for me.", exampleCn: "她为我做了一个生日蛋糕。", category: "食物与饮食", tier: "high" }
,
  {     word: "carrot", meaning: "胡萝卜", example: "Rabbits love carrots.", exampleCn: "兔子爱吃胡萝卜。", category: "食物与饮食", tier: "high" }
,
  {     word: "cheese", meaning: "奶酪", example: "This pizza has too much cheese.", exampleCn: "这个披萨放了太多奶酪。", category: "食物与饮食", tier: "high" }
,
  {     word: "chicken", meaning: "鸡肉", example: "We had chicken for dinner.", exampleCn: "我们晚饭吃了鸡肉。", category: "食物与饮食", tier: "high" }
,
  {     word: "chocolate", meaning: "巧克力", example: "I love dark chocolate.", exampleCn: "我爱吃黑巧克力。", category: "食物与饮食", tier: "high" }
,
  {     word: "coffee", meaning: "咖啡", example: "I need a coffee to wake up.", exampleCn: "我需要杯咖啡提神。", category: "食物与饮食", tier: "high" }
,
  {     word: "cookie", meaning: "饼干", example: "The child wants a cookie.", exampleCn: "孩子想要一块饼干。", category: "食物与饮食", tier: "high" }
,
  {     word: "delicious", meaning: "美味的", example: "This soup is delicious!", exampleCn: "这汤太好喝了！", category: "食物与饮食", tier: "high" }
,
  {     word: "dentist", meaning: "牙医", example: "I have to see the dentist tomorrow.", exampleCn: "我明天得去看牙医。", category: "食物与饮食", tier: "high" }
,
  {     word: "diet", meaning: "饮食", example: "A balanced diet is important.", exampleCn: "均衡饮食很重要。", category: "食物与饮食", tier: "high" }
,
  {     word: "dinner", meaning: "晚餐、正餐", example: "What's for dinner tonight?", exampleCn: "今晚吃什么？", category: "食物与饮食", tier: "high" }
,
  {     word: "egg", meaning: "鸡蛋", example: "I have two eggs for breakfast.", exampleCn: "我早餐吃两个鸡蛋。", category: "食物与饮食", tier: "high" }
,
  {     word: "exercise", meaning: "锻炼", example: "I do exercise every morning.", exampleCn: "我每天早上锻炼。", category: "食物与饮食", tier: "high" }
,
  {     word: "fat", meaning: "胖的、脂肪", example: "Eating too much makes you fat.", exampleCn: "吃太多会让你变胖。", category: "食物与饮食", tier: "high" }
,
  {     word: "fish", meaning: "鱼", example: "We caught a big fish.", exampleCn: "我们钓了一条大鱼。", category: "食物与饮食", tier: "high" }
,
  {     word: "food", meaning: "食物", example: "The food here is delicious.", exampleCn: "这里的食物很好吃。", category: "食物与饮食", tier: "high" }
,
  {     word: "fresh", meaning: "新鲜的", example: "These vegetables are very fresh.", exampleCn: "这些蔬菜很新鲜。", category: "食物与饮食", tier: "high" }
,
  {     word: "fruit", meaning: "水果", example: "An apple is a healthy fruit.", exampleCn: "苹果是健康的水果。", category: "食物与饮食", tier: "high" }
,
  {     word: "full", meaning: "饱的、满的", example: "No more, I'm full.", exampleCn: "不要了，我饱了。", category: "食物与饮食", tier: "high" }
,
  {     word: "health", meaning: "健康", example: "Exercise is good for your health.", exampleCn: "运动对健康有益。", category: "食物与饮食", tier: "high" }
,
  {     word: "healthy", meaning: "健康的", example: "She lives a healthy lifestyle.", exampleCn: "她过着健康的生活方式。", category: "食物与饮食", tier: "high" }
,
  {     word: "honey", meaning: "蜂蜜", example: "I put honey in my tea.", exampleCn: "我在茶里放了蜂蜜。", category: "食物与饮食", tier: "high" }
,
  {     word: "hospital", meaning: "医院", example: "He was taken to the hospital.", exampleCn: "他被送去了医院。", category: "食物与饮食", tier: "high" }
,
  {     word: "hungry", meaning: "饿的", example: "I'm hungry. Let's eat.", exampleCn: "我饿了，吃饭吧。", category: "食物与饮食", tier: "high" }
,
  {     word: "hurt", meaning: "疼痛、受伤", example: "My head hurts.", exampleCn: "我头疼。", category: "食物与饮食", tier: "high" }
,
  {     word: "ice cream", meaning: "冰淇淋", example: "Let's get some ice cream.", exampleCn: "我们去吃冰淇淋吧。", category: "食物与饮食", tier: "high" }
,
  {     word: "ill", meaning: "生病的", example: "She is seriously ill.", exampleCn: "她病得很重。", category: "食物与饮食", tier: "high" }
,
  {     word: "jam", meaning: "果酱", example: "I like toast with jam.", exampleCn: "我喜欢吐司配果酱。", category: "食物与饮食", tier: "high" }
,
  {     word: "juice", meaning: "果汁", example: "Fresh orange juice, please.", exampleCn: "请来杯鲜榨橙汁。", category: "食物与饮食", tier: "high" }
,
  {     word: "lunch", meaning: "午餐", example: "Let's have lunch together.", exampleCn: "一起吃午饭吧。", category: "食物与饮食", tier: "high" }
,
  {     word: "meal", meaning: "一餐", example: "We have three meals a day.", exampleCn: "我们一天吃三餐。", category: "食物与饮食", tier: "high" }
,
  {     word: "meat", meaning: "肉", example: "Do you eat meat?", exampleCn: "你吃肉吗？", category: "食物与饮食", tier: "high" }
,
  {     word: "medicine", meaning: "药", example: "Take this medicine three times a day.", exampleCn: "这药一天吃三次。", category: "食物与饮食", tier: "high" }
,
  {     word: "milk", meaning: "牛奶", example: "Drink your milk before bed.", exampleCn: "睡前把牛奶喝了。", category: "食物与饮食", tier: "high" }
,
  {     word: "noodle", meaning: "面条", example: "I want a bowl of noodles.", exampleCn: "我想来一碗面条。", category: "食物与饮食", tier: "high" }
,
  {     word: "oil", meaning: "油", example: "Heat the oil in a pan.", exampleCn: "在锅里把油烧热。", category: "食物与饮食", tier: "high" }
,
  {     word: "onion", meaning: "洋葱", example: "Cutting onions makes me cry.", exampleCn: "切洋葱让我流泪。", category: "食物与饮食", tier: "high" }
,
  {     word: "orange", meaning: "橙子、橙色", example: "Would you like some orange juice?", exampleCn: "来点橙汁吗？", category: "食物与饮食", tier: "high" }
,
  {     word: "pain", meaning: "疼痛", example: "I have a pain in my back.", exampleCn: "我背痛。", category: "食物与饮食", tier: "high" }
,
  {     word: "pork", meaning: "猪肉", example: "I don't eat pork.", exampleCn: "我不吃猪肉。", category: "食物与饮食", tier: "high" }
,
  {     word: "potato", meaning: "土豆", example: "I'd like mashed potatoes, please.", exampleCn: "请给我土豆泥。", category: "食物与饮食", tier: "high" }
,
  {     word: "rest", meaning: "休息", example: "You need to rest more.", exampleCn: "你需要多休息。", category: "食物与饮食", tier: "high" }
,
  {     word: "rice", meaning: "米饭", example: "We eat rice almost every day.", exampleCn: "我们几乎天天吃米饭。", category: "食物与饮食", tier: "high" }
,
  {     word: "salad", meaning: "沙拉", example: "I'll have a salad for lunch.", exampleCn: "我午饭吃沙拉。", category: "食物与饮食", tier: "high" }
,
  {     word: "salt", meaning: "盐", example: "Don't add too much salt.", exampleCn: "别放太多盐。", category: "食物与饮食", tier: "high" }
,
  {     word: "salty", meaning: "咸的", example: "The soup is too salty.", exampleCn: "汤太咸了。", category: "食物与饮食", tier: "high" }
,
  {     word: "sauce", meaning: "酱汁", example: "This sauce tastes amazing.", exampleCn: "这酱汁味道好极了。", category: "食物与饮食", tier: "high" }
,
  {     word: "sick", meaning: "生病的", example: "I feel sick today.", exampleCn: "我今天觉得不舒服。", category: "食物与饮食", tier: "high" }
,
  {     word: "sleep", meaning: "睡觉", example: "I need to sleep eight hours.", exampleCn: "我需要睡八小时。", category: "食物与饮食", tier: "high" }
,
  {     word: "snack", meaning: "零食、小吃", example: "I had a snack between meals.", exampleCn: "我在两餐之间吃了点零食。", category: "食物与饮食", tier: "high" }
,
  {     word: "soup", meaning: "汤", example: "I'd like a bowl of hot soup.", exampleCn: "我想要一碗热汤。", category: "食物与饮食", tier: "high" }
,
  {     word: "sour", meaning: "酸的", example: "This lemon is very sour.", exampleCn: "这个柠檬很酸。", category: "食物与饮食", tier: "high" }
,
  {     word: "spicy", meaning: "辣的", example: "Thai food is often spicy.", exampleCn: "泰国菜通常很辣。", category: "食物与饮食", tier: "high" }
,
  {     word: "strong", meaning: "强壮的", example: "He is tall and strong.", exampleCn: "他又高又壮。", category: "食物与饮食", tier: "high" }
,
  {     word: "sugar", meaning: "糖", example: "Do you take sugar in your coffee?", exampleCn: "你咖啡里放糖吗？", category: "食物与饮食", tier: "high" }
,
  {     word: "sweet", meaning: "甜的", example: "This candy is too sweet.", exampleCn: "这糖果太甜了。", category: "食物与饮食", tier: "high" }
,
  {     word: "tea", meaning: "茶", example: "Would you like a cup of tea?", exampleCn: "来杯茶吗？", category: "食物与饮食", tier: "high" }
,
  {     word: "thin", meaning: "瘦的", example: "She is very thin.", exampleCn: "她很瘦。", category: "食物与饮食", tier: "high" }
,
  {     word: "thirsty", meaning: "渴的", example: "I'm thirsty after running.", exampleCn: "跑步后我很渴。", category: "食物与饮食", tier: "high" }
,
  {     word: "tired", meaning: "累的", example: "I'm too tired to go out.", exampleCn: "我太累了，不想出门。", category: "食物与饮食", tier: "high" }
,
  {     word: "tomato", meaning: "西红柿", example: "Tomatoes are actually a fruit.", exampleCn: "西红柿其实是水果。", category: "食物与饮食", tier: "high" }
,
  {     word: "vegetable", meaning: "蔬菜", example: "You should eat more vegetables.", exampleCn: "你应该多吃蔬菜。", category: "食物与饮食", tier: "high" }
,
  {     word: "water", meaning: "水", example: "I drink eight glasses of water a day.", exampleCn: "我每天喝八杯水。", category: "食物与饮食", tier: "high" }
,
  {     word: "weak", meaning: "虚弱的", example: "She feels weak after the illness.", exampleCn: "病后她觉得很虚弱。", category: "食物与饮食", tier: "high" }
,
  {     word: "weight", meaning: "体重、重量", example: "I want to lose weight.", exampleCn: "我想减肥。", category: "食物与饮食", tier: "high" }
,
  {     word: "wine", meaning: "葡萄酒", example: "A glass of red wine, please.", exampleCn: "请来一杯红酒。", category: "食物与饮食", tier: "high" }
,

  // --- 食物、饮料、烹饪 ---
  {     word: "taste", meaning: "味道/品尝", example: "It tastes good.", exampleCn: "味道很好。", category: "食物与饮食", tier: "high" }
,

  // --- 新增: 人与关系 ---
  { word: "citizen", meaning: "公民", example: "Senior citizen.", exampleCn: "老年人。", category: "人与关系", tier: "high" }
,
  { word: "population", meaning: "人口", example: "World population.", exampleCn: "世界人口。", category: "人与关系", tier: "high" }
,
  { word: "race", meaning: "种族/赛跑", example: "Human race.", exampleCn: "人类。", category: "人与关系", tier: "high" }
,
  { word: "nationality", meaning: "国籍", example: "What's your nationality?", exampleCn: "你的国籍是什么？", category: "人与关系", tier: "high" }
,
  { word: "immigrant", meaning: "移民", example: "Illegal immigrant.", exampleCn: "非法移民。", category: "人与关系", tier: "high" }
,
  { word: "refugee", meaning: "难民", example: "Refugee camp.", exampleCn: "难民营。", category: "人与关系", tier: "high" }
,
  { word: "orphan", meaning: "孤儿", example: "Orphan child.", exampleCn: "孤儿。", category: "人与关系", tier: "high" }
,
  { word: "widow", meaning: "寡妇/鳏夫", example: "War widow.", exampleCn: "战争遗孀。", category: "人与关系", tier: "high" }
,
  { word: "spouse", meaning: "配偶", example: "Bring your spouse.", exampleCn: "带上你的配偶。", category: "人与关系", tier: "high" }
,
  { word: "fiance", meaning: "未婚夫/妻", example: "My fiance and I.", exampleCn: "我和我的未婚妻。", category: "人与关系", tier: "high" }
,
  { word: "godfather", meaning: "教父", example: "Godfather of the child.", exampleCn: "孩子的教父。", category: "人与关系", tier: "high" }
,
  { word: "ancestor", meaning: "祖先", example: "Our ancestors.", exampleCn: "我们的祖先。", category: "人与关系", tier: "high" }
,
  { word: "descendant", meaning: "后代", example: "Descendants of the king.", exampleCn: "国王的后代。", category: "人与关系", tier: "high" }
,
  { word: "heir", meaning: "继承人", example: "The only heir.", exampleCn: "唯一继承人。", category: "人与关系", tier: "high" }
,
  { word: "household", meaning: "家庭/住户", example: "Head of household.", exampleCn: "户主。", category: "人与关系", tier: "high" }
,
  { word: "crowd", meaning: "人群", example: "A crowd of people.", exampleCn: "一群人。", category: "人与关系", tier: "high" }
,
  { word: "community", meaning: "社区/社群", example: "Local community.", exampleCn: "本地社区。", category: "人与关系", tier: "high" }
,
  { word: "society", meaning: "社会", example: "Modern society.", exampleCn: "现代社会。", category: "人与关系", tier: "high" }
,

  // --- 新增: 健康与身体 ---
  { word: "pulse", meaning: "脉搏", example: "Check your pulse.", exampleCn: "检查脉搏。", category: "健康与身体", tier: "high" }
,
  { word: "vein", meaning: "静脉", example: "Vein in the arm.", exampleCn: "手臂静脉。", category: "健康与身体", tier: "high" }
,
  { word: "organ", meaning: "器官", example: "Internal organ.", exampleCn: "内脏。", category: "健康与身体", tier: "high" }
,
  { word: "gland", meaning: "腺体", example: "Thyroid gland.", exampleCn: "甲状腺。", category: "健康与身体", tier: "high" }
,
  { word: "hormone", meaning: "激素", example: "Growth hormone.", exampleCn: "生长激素。", category: "健康与身体", tier: "high" }
,
  { word: "vitamin", meaning: "维生素", example: "Take vitamins.", exampleCn: "吃维生素。", category: "健康与身体", tier: "high" }
,
  { word: "protein", meaning: "蛋白质", example: "Eat more protein.", exampleCn: "多吃蛋白质。", category: "健康与身体", tier: "high" }
,
  { word: "fiber", meaning: "纤维", example: "Dietary fiber.", exampleCn: "膳食纤维。", category: "健康与身体", tier: "high" }
,
  { word: "calcium", meaning: "钙", example: "Calcium supplement.", exampleCn: "补钙。", category: "健康与身体", tier: "high" }
,
  { word: "obesity", meaning: "肥胖", example: "Childhood obesity.", exampleCn: "儿童肥胖。", category: "健康与身体", tier: "high" }
,
  { word: "stroke", meaning: "中风", example: "Heat stroke.", exampleCn: "中暑。", category: "健康与身体", tier: "high" }
,
  { word: "attack", meaning: "发作/攻击", example: "Heart attack.", exampleCn: "心脏病发作。", category: "健康与身体", tier: "high" }
,
  { word: "cancer", meaning: "癌症", example: "Lung cancer.", exampleCn: "肺癌。", category: "健康与身体", tier: "high" }
,
  { word: "tumor", meaning: "肿瘤", example: "Benign tumor.", exampleCn: "良性肿瘤。", category: "健康与身体", tier: "high" }
,
  { word: "diabetes", meaning: "糖尿病", example: "Type 2 diabetes.", exampleCn: "2型糖尿病。", category: "健康与身体", tier: "high" }
,
  { word: "asthma", meaning: "哮喘", example: "Asthma attack.", exampleCn: "哮喘发作。", category: "健康与身体", tier: "high" }
,
  { word: "chronic", meaning: "慢性的", example: "Chronic disease.", exampleCn: "慢性病。", category: "健康与身体", tier: "high" }
,
  { word: "acute", meaning: "急性的", example: "Acute pain.", exampleCn: "急性疼痛。", category: "健康与身体", tier: "high" }
,
  { word: "swell", meaning: "肿胀", example: "My ankle is swollen.", exampleCn: "我脚踝肿了。", category: "健康与身体", tier: "high" }
,
  { word: "rash", meaning: "皮疹", example: "Skin rash.", exampleCn: "皮疹。", category: "健康与身体", tier: "high" }
,
  { word: "itch", meaning: "痒", example: "My skin itches.", exampleCn: "我皮肤痒。", category: "健康与身体", tier: "high" }
,
  { word: "bleed", meaning: "流血", example: "My nose is bleeding.", exampleCn: "我鼻子在流血。", category: "健康与身体", tier: "high" }
,
  { word: "heal", meaning: "愈合", example: "The wound is healing.", exampleCn: "伤口在愈合。", category: "健康与身体", tier: "high" }
,
  { word: "cure", meaning: "治愈/疗法", example: "There is no cure.", exampleCn: "没有治愈方法。", category: "健康与身体", tier: "high" }
,
  { word: "treat", meaning: "治疗/对待", example: "Treat the patient.", exampleCn: "治疗病人。", category: "健康与身体", tier: "high" }
,
  { word: "hygiene", meaning: "卫生", example: "Personal hygiene.", exampleCn: "个人卫生。", category: "健康与身体", tier: "high" }
,

  // --- 新增: 出行与交通 ---
  { word: "tire", meaning: "轮胎", example: "Flat tire.", exampleCn: "轮胎漏气。", category: "出行与交通", tier: "high" }
,
  { word: "fuel", meaning: "燃料", example: "Fuel tank.", exampleCn: "油箱。", category: "出行与交通", tier: "high" }
,
  { word: "gasoline", meaning: "汽油", example: "Unleaded gasoline.", exampleCn: "无铅汽油。", category: "出行与交通", tier: "high" }
,
  { word: "pedal", meaning: "踏板", example: "Press the pedal.", exampleCn: "踩踏板。", category: "出行与交通", tier: "high" }
,
  { word: "steer", meaning: "方向盘/驾驶", example: "Steer the car.", exampleCn: "驾驶汽车。", category: "出行与交通", tier: "high" }
,
  { word: "crash", meaning: "碰撞/坠毁", example: "Car crash.", exampleCn: "车祸。", category: "出行与交通", tier: "high" }
,
  { word: "tow", meaning: "拖车", example: "Tow truck.", exampleCn: "拖车。", category: "出行与交通", tier: "high" }
,
  { word: "pilot", meaning: "飞行员", example: "Airline pilot.", exampleCn: "航空公司飞行员。", category: "出行与交通", tier: "high" }
,
  { word: "crew", meaning: "机组/船员", example: "Cabin crew.", exampleCn: "客舱乘务员。", category: "出行与交通", tier: "high" }
,
  { word: "depart", meaning: "出发/离港", example: "The flight departs at 6.", exampleCn: "航班6点起飞。", category: "出行与交通", tier: "high" }
,
  { word: "aboard", meaning: "在(船/飞机)上", example: "Welcome aboard.", exampleCn: "欢迎登机。", category: "出行与交通", tier: "high" }
,
  { word: "ashore", meaning: "在岸上", example: "Go ashore.", exampleCn: "上岸。", category: "出行与交通", tier: "high" }
,
  { word: "voyage", meaning: "航行/航程", example: "Maiden voyage.", exampleCn: "首航。", category: "出行与交通", tier: "high" }
,
  { word: "expedition", meaning: "探险/远征", example: "Arctic expedition.", exampleCn: "北极探险。", category: "出行与交通", tier: "high" }
,
  { word: "commute", meaning: "通勤", example: "Daily commute.", exampleCn: "每日通勤。", category: "出行与交通", tier: "high" }
,
  { word: "pedestrian", meaning: "行人", example: "Pedestrian crossing.", exampleCn: "人行横道。", category: "出行与交通", tier: "high" }
,
  { word: "license", meaning: "执照/许可证", example: "Driver's license.", exampleCn: "驾照。", category: "出行与交通", tier: "high" }
,

  // --- 新增: 工作与学习 ---
  { word: "position", meaning: "职位/位置", example: "Apply for a position.", exampleCn: "申请职位。", category: "工作与学习", tier: "high" }
,
  { word: "role", meaning: "角色/职责", example: "Team role.", exampleCn: "团队角色。", category: "工作与学习", tier: "high" }
,
  { word: "wage", meaning: "工资/时薪", example: "Minimum wage.", exampleCn: "最低工资。", category: "工作与学习", tier: "high" }
,
  { word: "income", meaning: "收入", example: "Monthly income.", exampleCn: "月收入。", category: "工作与学习", tier: "high" }
,
  { word: "pension", meaning: "养老金", example: "Retirement pension.", exampleCn: "退休金。", category: "工作与学习", tier: "high" }
,
  { word: "union", meaning: "工会/联盟", example: "Trade union.", exampleCn: "工会。", category: "工作与学习", tier: "high" }
,
  { word: "strike", meaning: "罢工/打击", example: "Workers go on strike.", exampleCn: "工人罢工。", category: "工作与学习", tier: "high" }
,
  { word: "employ", meaning: "雇佣", example: "Employ workers.", exampleCn: "雇佣工人。", category: "工作与学习", tier: "high" }
,
  { word: "dismiss", meaning: "解雇/解散", example: "Dismiss an employee.", exampleCn: "解雇员工。", category: "工作与学习", tier: "high" }
,
  { word: "appoint", meaning: "任命/指定", example: "Appoint a manager.", exampleCn: "任命经理。", category: "工作与学习", tier: "high" }
,
  { word: "resign", meaning: "辞职", example: "I decided to resign.", exampleCn: "我决定辞职。", category: "工作与学习", tier: "high" }
,
  { word: "promote", meaning: "提升/推广", example: "Promote the product.", exampleCn: "推广产品。", category: "工作与学习", tier: "high" }
,
  { word: "tutor", meaning: "家教/辅导老师", example: "Private tutor.", exampleCn: "私人家教。", category: "工作与学习", tier: "high" }
,
  { word: "tuition", meaning: "学费/教学", example: "Tuition fee.", exampleCn: "学费。", category: "工作与学习", tier: "high" }
,
  { word: "scholarship", meaning: "奖学金", example: "Win a scholarship.", exampleCn: "获得奖学金。", category: "工作与学习", tier: "high" }
,
  { word: "graduation", meaning: "毕业", example: "Graduation ceremony.", exampleCn: "毕业典礼。", category: "工作与学习", tier: "high" }
,
  { word: "academy", meaning: "学院/学会", example: "Military academy.", exampleCn: "军事学院。", category: "工作与学习", tier: "high" }
,
  { word: "seminar", meaning: "研讨会", example: "Attend a seminar.", exampleCn: "参加研讨会。", category: "工作与学习", tier: "high" }
,
  { word: "workshop", meaning: "工作坊/车间", example: "Training workshop.", exampleCn: "培训工作坊。", category: "工作与学习", tier: "high" }
,
  { word: "intern", meaning: "实习生", example: "Summer intern.", exampleCn: "暑期实习生。", category: "工作与学习", tier: "high" }
,
  { word: "apprentice", meaning: "学徒", example: "Apprentice chef.", exampleCn: "学徒厨师。", category: "工作与学习", tier: "high" }
,
  { word: "novice", meaning: "新手/初学者", example: "A complete novice.", exampleCn: "完全的新手。", category: "工作与学习", tier: "high" }
,
  { word: "expert", meaning: "专家", example: "Industry expert.", exampleCn: "行业专家。", category: "工作与学习", tier: "high" }
,
  { word: "specialist", meaning: "专家/专科医生", example: "Marketing specialist.", exampleCn: "营销专家。", category: "工作与学习", tier: "high" }
,
  { word: "consultant", meaning: "顾问", example: "Business consultant.", exampleCn: "商业顾问。", category: "工作与学习", tier: "high" }
,
  { word: "associate", meaning: "同事/伙伴", example: "Business associate.", exampleCn: "商业伙伴。", category: "工作与学习", tier: "high" }
,

  // --- 新增: 情感与态度 ---
  { word: "comfort", meaning: "安慰/舒适", example: "Comfort zone.", exampleCn: "舒适区。", category: "情感与态度", tier: "high" }
,
  { word: "suffer", meaning: "遭受/受苦", example: "Suffer from pain.", exampleCn: "遭受痛苦。", category: "情感与态度", tier: "high" }
,
  { word: "endure", meaning: "忍耐/忍受", example: "Endure the hardship.", exampleCn: "忍受艰难。", category: "情感与态度", tier: "high" }
,
  { word: "tolerate", meaning: "容忍", example: "I can't tolerate this.", exampleCn: "我无法容忍。", category: "情感与态度", tier: "high" }
,
  { word: "sympathy", meaning: "同情", example: "Express sympathy.", exampleCn: "表示同情。", category: "情感与态度", tier: "high" }
,
  { word: "mercy", meaning: "怜悯/宽恕", example: "Show mercy.", exampleCn: "表现出怜悯。", category: "情感与态度", tier: "high" }
,
  { word: "forgive", meaning: "原谅", example: "Please forgive me.", exampleCn: "请原谅我。", category: "情感与态度", tier: "high" }
,
  { word: "blame", meaning: "责怪", example: "Don't blame me.", exampleCn: "别怪我。", category: "情感与态度", tier: "high" }
,
  { word: "criticize", meaning: "批评", example: "He criticized my work.", exampleCn: "他批评了我的工作。", category: "情感与态度", tier: "high" }
,
  { word: "appreciate", meaning: "感激/欣赏", example: "I appreciate your help.", exampleCn: "感谢你的帮助。", category: "情感与态度", tier: "high" }
,
  { word: "admire", meaning: "钦佩/欣赏", example: "I admire your courage.", exampleCn: "我钦佩你的勇气。", category: "情感与态度", tier: "high" }
,
  { word: "despise", meaning: "鄙视/厌恶", example: "I despise cheating.", exampleCn: "我鄙视作弊。", category: "情感与态度", tier: "high" }
,
  { word: "resent", meaning: "怨恨/不满", example: "He resented the comment.", exampleCn: "他对评论感到不满。", category: "情感与态度", tier: "high" }
,
  { word: "panic", meaning: "恐慌", example: "Don't panic.", exampleCn: "别慌。", category: "情感与态度", tier: "high" }
,
  { word: "thrill", meaning: "兴奋/激动", example: "A thrill of excitement.", exampleCn: "一阵兴奋。", category: "情感与态度", tier: "high" }
,
  { word: "embarrass", meaning: "尴尬/使难堪", example: "I felt embarrassed.", exampleCn: "我感到尴尬。", category: "情感与态度", tier: "high" }
,
  { word: "disgust", meaning: "厌恶/恶心", example: "In disgust.", exampleCn: "厌恶地。", category: "情感与态度", tier: "high" }
,
  { word: "passion", meaning: "激情/热情", example: "Full of passion.", exampleCn: "充满激情。", category: "情感与态度", tier: "high" }
,
  { word: "desire", meaning: "渴望/欲望", example: "A strong desire.", exampleCn: "强烈的渴望。", category: "情感与态度", tier: "high" }
,
  { word: "urge", meaning: "强烈欲望/催促", example: "I had an urge to run.", exampleCn: "我有想跑的冲动。", category: "情感与态度", tier: "high" }
,
  { word: "instinct", meaning: "本能", example: "Basic instinct.", exampleCn: "基本本能。", category: "情感与态度", tier: "high" }
,
  { word: "impulse", meaning: "冲动", example: "On impulse.", exampleCn: "冲动之下。", category: "情感与态度", tier: "high" }
,
  { word: "motive", meaning: "动机", example: "What's your motive?", exampleCn: "你的动机是什么？", category: "情感与态度", tier: "high" }
,
  { word: "intention", meaning: "意图/打算", example: "Good intention.", exampleCn: "好意。", category: "情感与态度", tier: "high" }
,
  { word: "spirit", meaning: "精神/灵魂", example: "Team spirit.", exampleCn: "团队精神。", category: "情感与态度", tier: "high" }
,
  { word: "soul", meaning: "灵魂/心灵", example: "Heart and soul.", exampleCn: "全心全意。", category: "情感与态度", tier: "high" }
,

  // --- 新增: 描述性质 ---
  { word: "abstract", meaning: "抽象的", example: "Abstract concept.", exampleCn: "抽象概念。", category: "描述性质", tier: "high" }
,
  { word: "concrete", meaning: "具体的/混凝土", example: "Concrete evidence.", exampleCn: "具体证据。", category: "描述性质", tier: "high" }
,
  { word: "obvious", meaning: "明显的", example: "It's obvious.", exampleCn: "很明显。", category: "描述性质", tier: "high" }
,
  { word: "vague", meaning: "模糊的", example: "Vague answer.", exampleCn: "模糊的回答。", category: "描述性质", tier: "high" }
,
  { word: "precise", meaning: "精确的", example: "Precise measurement.", exampleCn: "精确测量。", category: "描述性质", tier: "high" }
,
  { word: "accurate", meaning: "准确的", example: "Accurate information.", exampleCn: "准确信息。", category: "描述性质", tier: "high" }
,
  { word: "adequate", meaning: "足够的/适当的", example: "Adequate preparation.", exampleCn: "充分准备。", category: "描述性质", tier: "high" }
,
  { word: "sufficient", meaning: "充分的", example: "Sufficient funds.", exampleCn: "充足资金。", category: "描述性质", tier: "high" }
,
  { word: "excessive", meaning: "过多的", example: "Excessive speed.", exampleCn: "超速。", category: "描述性质", tier: "high" }
,
  { word: "moderate", meaning: "适度的", example: "Moderate exercise.", exampleCn: "适度锻炼。", category: "描述性质", tier: "high" }
,
  { word: "intense", meaning: "强烈的/激烈的", example: "Intense heat.", exampleCn: "酷热。", category: "描述性质", tier: "high" }
,
  { word: "mild", meaning: "温和的", example: "Mild weather.", exampleCn: "温和的天气。", category: "描述性质", tier: "high" }
,
  { word: "severe", meaning: "严重的/严厉的", example: "Severe damage.", exampleCn: "严重损坏。", category: "描述性质", tier: "high" }
,
  { word: "slight", meaning: "轻微的", example: "Slight difference.", exampleCn: "细微差别。", category: "描述性质", tier: "high" }
,
  { word: "enormous", meaning: "巨大的", example: "Enormous success.", exampleCn: "巨大的成功。", category: "描述性质", tier: "high" }
,
  { word: "vast", meaning: "广阔的/大量的", example: "Vast majority.", exampleCn: "绝大多数。", category: "描述性质", tier: "high" }
,
  { word: "massive", meaning: "大规模的", example: "Massive change.", exampleCn: "巨大变化。", category: "描述性质", tier: "high" }
,
  { word: "brief", meaning: "简短的", example: "Brief introduction.", exampleCn: "简短介绍。", category: "描述性质", tier: "high" }
,
  { word: "constant", meaning: "不断的", example: "Constant noise.", exampleCn: "不断的噪音。", category: "描述性质", tier: "high" }
,
  { word: "frequent", meaning: "频繁的", example: "Frequent visits.", exampleCn: "频繁的访问。", category: "描述性质", tier: "high" }
,
  { word: "occasional", meaning: "偶尔的", example: "Occasional rain.", exampleCn: "偶尔下雨。", category: "描述性质", tier: "high" }
,
  { word: "random", meaning: "随机的", example: "Random pick.", exampleCn: "随机挑选。", category: "描述性质", tier: "high" }
,
  { word: "unique", meaning: "独一无二的", example: "Unique design.", exampleCn: "独特的设计。", category: "描述性质", tier: "high" }
,
  { word: "typical", meaning: "典型的", example: "A typical example.", exampleCn: "典型例子。", category: "描述性质", tier: "high" }
,
  { word: "abnormal", meaning: "不正常的", example: "Abnormal behavior.", exampleCn: "异常行为。", category: "描述性质", tier: "high" }
,
  { word: "positive", meaning: "积极的/正面的", example: "Positive attitude.", exampleCn: "积极态度。", category: "描述性质", tier: "high" }
,
  { word: "negative", meaning: "消极的/负面的", example: "Negative effect.", exampleCn: "负面效果。", category: "描述性质", tier: "high" }
,
  { word: "neutral", meaning: "中立的", example: "Stay neutral.", exampleCn: "保持中立。", category: "描述性质", tier: "high" }
,
  { word: "absolute", meaning: "绝对的", example: "Absolute power.", exampleCn: "绝对权力。", category: "描述性质", tier: "high" }
,
  { word: "potential", meaning: "潜在的", example: "Potential customer.", exampleCn: "潜在客户。", category: "描述性质", tier: "high" }
,
  { word: "effective", meaning: "有效的", example: "Effective method.", exampleCn: "有效的方法。", category: "描述性质", tier: "high" }
,
  { word: "efficient", meaning: "高效的", example: "Efficient worker.", exampleCn: "高效的员工。", category: "描述性质", tier: "high" }
,
  { word: "essential", meaning: "必要的", example: "Essential item.", exampleCn: "必需品。", category: "描述性质", tier: "high" }
,
  { word: "vital", meaning: "至关重要的", example: "Vital information.", exampleCn: "至关重要的信息。", category: "描述性质", tier: "high" }
,
  { word: "critical", meaning: "关键的/批评的", example: "Critical moment.", exampleCn: "关键时刻。", category: "描述性质", tier: "high" }
,
  { word: "significant", meaning: "重要的/显著的", example: "Significant change.", exampleCn: "显著变化。", category: "描述性质", tier: "high" }
,

  // --- 新增: 日常生活 ---
  { word: "basin", meaning: "盆/洗脸盆", example: "Wash basin.", exampleCn: "洗脸盆。", category: "日常生活", tier: "high" }
,
  { word: "tub", meaning: "浴缸", example: "Hot tub.", exampleCn: "热水浴缸。", category: "日常生活", tier: "high" }
,
  { word: "tissue", meaning: "纸巾", example: "Facial tissue.", exampleCn: "面巾纸。", category: "日常生活", tier: "high" }
,
  { word: "waste", meaning: "废物/浪费", example: "Don't waste water.", exampleCn: "别浪费水。", category: "日常生活", tier: "high" }
,
  { word: "stain", meaning: "污渍", example: "Remove the stain.", exampleCn: "去除污渍。", category: "日常生活", tier: "high" }
,
  { word: "dust", meaning: "灰尘", example: "Dust the shelf.", exampleCn: "清扫架子上的灰尘。", category: "日常生活", tier: "high" }
,
  { word: "mess", meaning: "混乱/脏乱", example: "Clean up the mess.", exampleCn: "清理脏乱。", category: "日常生活", tier: "high" }
,
  { word: "frame", meaning: "框架/框", example: "Picture frame.", exampleCn: "相框。", category: "日常生活", tier: "high" }
,
  { word: "wardrobe", meaning: "衣柜/全部衣服", example: "New wardrobe.", exampleCn: "新衣柜。", category: "日常生活", tier: "high" }
,
  { word: "hanger", meaning: "衣架", example: "Clothes hanger.", exampleCn: "衣架。", category: "日常生活", tier: "high" }
,
  { word: "hook", meaning: "钩子", example: "Hang on the hook.", exampleCn: "挂在钩子上。", category: "日常生活", tier: "high" }
,
  { word: "ribbon", meaning: "丝带/缎带", example: "Red ribbon.", exampleCn: "红丝带。", category: "日常生活", tier: "high" }
,
  { word: "zipper", meaning: "拉链", example: "Zip the zipper.", exampleCn: "拉拉链。", category: "日常生活", tier: "high" }
,

  // --- 新增: 时间与日期 ---
  { word: "previous", meaning: "以前的", example: "Previous experience.", exampleCn: "以前的经验。", category: "时间与日期", tier: "high" }
,
  { word: "initial", meaning: "最初的", example: "Initial stage.", exampleCn: "初始阶段。", category: "时间与日期", tier: "high" }
,
  { word: "final", meaning: "最终的", example: "Final decision.", exampleCn: "最终决定。", category: "时间与日期", tier: "high" }
,
  { word: "sudden", meaning: "突然的", example: "Sudden change.", exampleCn: "突然的变化。", category: "时间与日期", tier: "high" }
,
  { word: "gradual", meaning: "逐渐的", example: "Gradual improvement.", exampleCn: "逐步改善。", category: "时间与日期", tier: "high" }
,
  { word: "instant", meaning: "即刻的", example: "Instant reply.", exampleCn: "即时回复。", category: "时间与日期", tier: "high" }
,
  { word: "eternal", meaning: "永恒的", example: "Eternal love.", exampleCn: "永恒的爱。", category: "时间与日期", tier: "high" }
,
  { word: "phase", meaning: "阶段", example: "First phase.", exampleCn: "第一阶段。", category: "时间与日期", tier: "high" }
,
  { word: "stage", meaning: "阶段/舞台", example: "At this stage.", exampleCn: "在这个阶段。", category: "时间与日期", tier: "high" }
,
  { word: "term", meaning: "期限/术语", example: "Long term.", exampleCn: "长期。", category: "时间与日期", tier: "high" }
,
  { word: "period", meaning: "时期/期间", example: "Trial period.", exampleCn: "试用期。", category: "时间与日期", tier: "high" }
,
  { word: "interval", meaning: "间隔", example: "At regular intervals.", exampleCn: "每隔固定时间。", category: "时间与日期", tier: "high" }
,
  { word: "gap", meaning: "间隔/差距", example: "Generation gap.", exampleCn: "代沟。", category: "时间与日期", tier: "high" }
,
  { word: "pause", meaning: "暂停", example: "Take a pause.", exampleCn: "暂停一下。", category: "时间与日期", tier: "high" }
,
  { word: "extend", meaning: "延长", example: "Extend the deadline.", exampleCn: "延长截止日。", category: "时间与日期", tier: "high" }
,
  { word: "expire", meaning: "到期", example: "The contract expires.", exampleCn: "合同到期。", category: "时间与日期", tier: "high" }
,

  // --- 新增: 沟通与表达 ---
  { word: "interpret", meaning: "口译/解读", example: "Interpret the data.", exampleCn: "解读数据。", category: "沟通与表达", tier: "high" }
,
  { word: "pronounce", meaning: "发音", example: "How to pronounce this?", exampleCn: "这个怎么发音？", category: "沟通与表达", tier: "high" }
,
  { word: "accent", meaning: "口音", example: "British accent.", exampleCn: "英式口音。", category: "沟通与表达", tier: "high" }
,
  { word: "dialect", meaning: "方言", example: "Local dialect.", exampleCn: "本地方言。", category: "沟通与表达", tier: "high" }
,
  { word: "slang", meaning: "俚语", example: "Street slang.", exampleCn: "街头俚语。", category: "沟通与表达", tier: "high" }
,
  { word: "phrase", meaning: "短语", example: "Useful phrase.", exampleCn: "有用的短语。", category: "沟通与表达", tier: "high" }
,
  { word: "sentence", meaning: "句子", example: "A simple sentence.", exampleCn: "简单句。", category: "沟通与表达", tier: "high" }
,
  { word: "essay", meaning: "短文/论文", example: "Write an essay.", exampleCn: "写一篇短文。", category: "沟通与表达", tier: "high" }
,
  { word: "summary", meaning: "总结/摘要", example: "Brief summary.", exampleCn: "简短摘要。", category: "沟通与表达", tier: "high" }
,
  { word: "detail", meaning: "细节", example: "In detail.", exampleCn: "详细地。", category: "沟通与表达", tier: "high" }
,
  { word: "topic", meaning: "话题", example: "Hot topic.", exampleCn: "热门话题。", category: "沟通与表达", tier: "high" }
,
  { word: "theme", meaning: "主题", example: "Main theme.", exampleCn: "主题。", category: "沟通与表达", tier: "high" }
,
  { word: "tone", meaning: "语气/音调", example: "Friendly tone.", exampleCn: "友好的语气。", category: "沟通与表达", tier: "high" }
,
  { word: "context", meaning: "上下文/语境", example: "In this context.", exampleCn: "在此语境下。", category: "沟通与表达", tier: "high" }
,
  { word: "refer", meaning: "参考/提到", example: "Refer to the manual.", exampleCn: "参考手册。", category: "沟通与表达", tier: "high" }
,
  { word: "declare", meaning: "宣布/声明", example: "Declare your income.", exampleCn: "申报收入。", category: "沟通与表达", tier: "high" }
,
  { word: "persuade", meaning: "说服", example: "Try to persuade him.", exampleCn: "试着说服他。", category: "沟通与表达", tier: "high" }
,
  { word: "convince", meaning: "使确信/说服", example: "Convince the customer.", exampleCn: "说服客户。", category: "沟通与表达", tier: "high" }
,

  // --- 新增: 自然与天气 ---
  { word: "wild", meaning: "野生的/狂野的", example: "Wild animal.", exampleCn: "野生动物。", category: "自然与天气", tier: "high" }
,
  { word: "creature", meaning: "生物", example: "Sea creature.", exampleCn: "海洋生物。", category: "自然与天气", tier: "high" }
,
  { word: "species", meaning: "物种", example: "Endangered species.", exampleCn: "濒危物种。", category: "自然与天气", tier: "high" }
,
  { word: "insect", meaning: "昆虫", example: "Insect bite.", exampleCn: "虫咬。", category: "自然与天气", tier: "high" }
,
  { word: "worm", meaning: "蠕虫", example: "Earth worm.", exampleCn: "蚯蚓。", category: "自然与天气", tier: "high" }
,
  { word: "bee", meaning: "蜜蜂", example: "Busy as a bee.", exampleCn: "忙得像蜜蜂。", category: "自然与天气", tier: "high" }
,
  { word: "ant", meaning: "蚂蚁", example: "Ant colony.", exampleCn: "蚁群。", category: "自然与天气", tier: "high" }
,
  { word: "snake", meaning: "蛇", example: "Poisonous snake.", exampleCn: "毒蛇。", category: "自然与天气", tier: "high" }
,
  { word: "whale", meaning: "鲸鱼", example: "Blue whale.", exampleCn: "蓝鲸。", category: "自然与天气", tier: "high" }
,
  { word: "shark", meaning: "鲨鱼", example: "Shark attack.", exampleCn: "鲨鱼袭击。", category: "自然与天气", tier: "high" }
,
  { word: "eagle", meaning: "鹰", example: "Bald eagle.", exampleCn: "白头鹰。", category: "自然与天气", tier: "high" }
,
  { word: "hawk", meaning: "鹰/隼", example: "Hawk eye.", exampleCn: "鹰眼。", category: "自然与天气", tier: "high" }
,
  { word: "dove", meaning: "鸽子", example: "White dove.", exampleCn: "白鸽。", category: "自然与天气", tier: "high" }
,
  { word: "parrot", meaning: "鹦鹉", example: "Talking parrot.", exampleCn: "会说话的鹦鹉。", category: "自然与天气", tier: "high" }
,
  { word: "petal", meaning: "花瓣", example: "Rose petal.", exampleCn: "玫瑰花瓣。", category: "自然与天气", tier: "high" }
,
  { word: "thorn", meaning: "刺", example: "Rose thorn.", exampleCn: "玫瑰刺。", category: "自然与天气", tier: "high" }
,
  { word: "weed", meaning: "杂草", example: "Pull out weeds.", exampleCn: "拔杂草。", category: "自然与天气", tier: "high" }
,
  { word: "herb", meaning: "草药/香草", example: "Herbal tea.", exampleCn: "草药茶。", category: "自然与天气", tier: "high" }
,
  { word: "log", meaning: "原木/日志", example: "Wooden log.", exampleCn: "原木。", category: "自然与天气", tier: "high" }
,
  { word: "timber", meaning: "木材", example: "Timber industry.", exampleCn: "木材业。", category: "自然与天气", tier: "high" }
,

  // --- 新增: 购物与消费 ---
  { word: "retailer", meaning: "零售商", example: "Online retailer.", exampleCn: "在线零售商。", category: "购物与消费", tier: "high" }
,
  { word: "wholesaler", meaning: "批发商", example: "Buy from a wholesaler.", exampleCn: "从批发商买。", category: "购物与消费", tier: "high" }
,
  { word: "consumer", meaning: "消费者", example: "Consumer rights.", exampleCn: "消费者权益。", category: "购物与消费", tier: "high" }
,
  { word: "purchase", meaning: "购买", example: "Make a purchase.", exampleCn: "进行购买。", category: "购物与消费", tier: "high" }
,
  { word: "register", meaning: "收银机/登记", example: "Cash register.", exampleCn: "收银机。", category: "购物与消费", tier: "high" }
,
  { word: "scanner", meaning: "扫描仪", example: "Price scanner.", exampleCn: "价格扫描仪。", category: "购物与消费", tier: "high" }
,
  { word: "points", meaning: "积分", example: "Reward points.", exampleCn: "奖励积分。", category: "购物与消费", tier: "high" }
,

  // --- 新增: 食物与饮食 ---
  { word: "syrup", meaning: "糖浆", example: "Maple syrup.", exampleCn: "枫糖浆。", category: "食物与饮食", tier: "high" }
,
  { word: "vinegar", meaning: "醋", example: "Rice vinegar.", exampleCn: "米醋。", category: "食物与饮食", tier: "high" }
,
  { word: "gravy", meaning: "肉汁/调味汁", example: "Turkey gravy.", exampleCn: "火鸡肉汁。", category: "食物与饮食", tier: "high" }
,
  { word: "pepper", meaning: "胡椒", example: "Salt and pepper.", exampleCn: "盐和胡椒。", category: "食物与饮食", tier: "high" }
,
  { word: "cinnamon", meaning: "肉桂", example: "Cinnamon roll.", exampleCn: "肉桂卷。", category: "食物与饮食", tier: "high" }
,
  { word: "vanilla", meaning: "香草", example: "Vanilla ice cream.", exampleCn: "香草冰激凌。", category: "食物与饮食", tier: "high" }
,
  { word: "mint", meaning: "薄荷", example: "Mint tea.", exampleCn: "薄荷茶。", category: "食物与饮食", tier: "high" }
,
  { word: "ginger", meaning: "姜", example: "Ginger tea.", exampleCn: "姜茶。", category: "食物与饮食", tier: "high" }
,
  { word: "garlic", meaning: "大蒜", example: "Garlic bread.", exampleCn: "蒜蓉面包。", category: "食物与饮食", tier: "high" }
,
  { word: "cucumber", meaning: "黄瓜", example: "Sliced cucumber.", exampleCn: "黄瓜片。", category: "食物与饮食", tier: "high" }
,
  { word: "lettuce", meaning: "生菜", example: "Lettuce salad.", exampleCn: "生菜沙拉。", category: "食物与饮食", tier: "high" }
,
  { word: "mushroom", meaning: "蘑菇", example: "Wild mushroom.", exampleCn: "野生蘑菇。", category: "食物与饮食", tier: "high" }
,
  { word: "corn", meaning: "玉米", example: "Pop corn.", exampleCn: "爆米花。", category: "食物与饮食", tier: "high" }
,
  { word: "bean", meaning: "豆子", example: "Green beans.", exampleCn: "四季豆。", category: "食物与饮食", tier: "high" }
,
  { word: "pea", meaning: "豌豆", example: "Green peas.", exampleCn: "青豌豆。", category: "食物与饮食", tier: "high" }
,
  { word: "nut", meaning: "坚果", example: "Mixed nuts.", exampleCn: "混合坚果。", category: "食物与饮食", tier: "high" }
,
  { word: "cherry", meaning: "樱桃", example: "Cherry blossom.", exampleCn: "樱花。", category: "食物与饮食", tier: "high" }
,
  { word: "grape", meaning: "葡萄", example: "Grape juice.", exampleCn: "葡萄汁。", category: "食物与饮食", tier: "high" }
,
  { word: "peach", meaning: "桃子", example: "Juicy peach.", exampleCn: "多汁的桃子。", category: "食物与饮食", tier: "high" }
,
  { word: "pear", meaning: "梨", example: "Pear tree.", exampleCn: "梨树。", category: "食物与饮食", tier: "high" }
,
  { word: "plum", meaning: "李子", example: "Dried plum.", exampleCn: "李子干。", category: "食物与饮食", tier: "high" }
,
  { word: "pineapple", meaning: "菠萝", example: "Pineapple juice.", exampleCn: "菠萝汁。", category: "食物与饮食", tier: "high" }
,
  { word: "melon", meaning: "瓜", example: "Water melon.", exampleCn: "西瓜。", category: "食物与饮食", tier: "high" }
,

  // ═══════════════════════════════════════════════
  // 🟢 行业词 (BIZ) — 电商·AI·互联网·跨境贸易
  // ═══════════════════════════════════════════════

  // --- 人工智能与前沿科技 ---
  {     word: "algorithm", meaning: "算法", example: "Search algorithm.", exampleCn: "搜索算法。", category: "AI与科技", tier: "biz" }
,
  {     word: "artificial", meaning: "人工的", example: "Artificial intelligence.", exampleCn: "人工智能。", category: "AI与科技", tier: "biz" }
,
  {     word: "automation", meaning: "自动化", example: "Process automation.", exampleCn: "流程自动化。", category: "AI与科技", tier: "biz" }
,
  {     word: "chatbot", meaning: "聊天机器人", example: "Customer service chatbot.", exampleCn: "客服机器人。", category: "AI与科技", tier: "biz" }
,
  {     word: "dataset", meaning: "数据集", example: "Large dataset.", exampleCn: "大数据集。", category: "AI与科技", tier: "biz" }
,
  {     word: "deep learning", meaning: "深度学习", example: "Deep learning technology.", exampleCn: "深度学习技术。", category: "AI与科技", tier: "biz" }
,
  {     word: "embedding", meaning: "向量嵌入", example: "Text embedding.", exampleCn: "文本嵌入。", category: "AI与科技", tier: "biz" }
,
  {     word: "generation", meaning: "生成/生成式", example: "Image generation.", exampleCn: "图像生成。", category: "AI与科技", tier: "biz" }
,
  {     word: "GPT", meaning: "生成式预训练模型", example: "Use GPT for translation.", exampleCn: "用GPT做翻译。", category: "AI与科技", tier: "biz" }
,
  {     word: "intelligence", meaning: "智能/情报", example: "Market intelligence.", exampleCn: "市场情报。", category: "AI与科技", tier: "biz" }
,
  {     word: "LLM", meaning: "大语言模型", example: "LLM applications.", exampleCn: "大语言模型应用。", category: "AI与科技", tier: "biz" }
,
  {     word: "machine learning", meaning: "机器学习", example: "Machine learning model.", exampleCn: "机器学习模型。", category: "AI与科技", tier: "biz" }
,
  {     word: "model", meaning: "模型", example: "AI model.", exampleCn: "AI模型。", category: "AI与科技", tier: "biz" }
,
  {     word: "neural network", meaning: "神经网络", example: "Neural network training.", exampleCn: "神经网络训练。", category: "AI与科技", tier: "biz" }
,
  {     word: "optimization", meaning: "优化", example: "Listing optimization.", exampleCn: "Listing优化。", category: "AI与科技", tier: "biz" }
,
  {     word: "prediction", meaning: "预测", example: "Sales prediction.", exampleCn: "销售预测。", category: "AI与科技", tier: "biz" }
,
  {     word: "prompt", meaning: "提示词", example: "Write a good prompt.", exampleCn: "写好提示词。", category: "AI与科技", tier: "biz" }
,
  {     word: "recognition", meaning: "识别", example: "Voice recognition.", exampleCn: "语音识别。", category: "AI与科技", tier: "biz" }
,
  {     word: "token", meaning: "令牌/词元", example: "API token.", exampleCn: "API令牌。", category: "AI与科技", tier: "biz" }
,
  {     word: "training", meaning: "训练", example: "Data training.", exampleCn: "数据训练。", category: "AI与科技", tier: "biz" }
,

  // --- 网站、软件与开发 ---
  {     word: "analytics", meaning: "数据分析", example: "Web analytics.", exampleCn: "网站分析。", category: "互联网与开发", tier: "biz" }
,
  {     word: "API", meaning: "应用程序接口", example: "Connect via API.", exampleCn: "通过API连接。", category: "互联网与开发", tier: "biz" }
,
  {     word: "authentication", meaning: "身份验证", example: "Two-factor authentication.", exampleCn: "双因素认证。", category: "互联网与开发", tier: "biz" }
,
  {     word: "backend", meaning: "后端", example: "Backend system.", exampleCn: "后端系统。", category: "互联网与开发", tier: "biz" }
,
  {     word: "backup", meaning: "备份", example: "Daily backup.", exampleCn: "每日备份。", category: "互联网与开发", tier: "biz" }
,
  {     word: "bandwidth", meaning: "带宽", example: "Unlimited bandwidth.", exampleCn: "不限带宽。", category: "互联网与开发", tier: "biz" }
,
  {     word: "browser", meaning: "浏览器", example: "Open your browser.", exampleCn: "打开浏览器。", category: "互联网与开发", tier: "biz" }
,
  {     word: "cache", meaning: "缓存", example: "Clear the cache.", exampleCn: "清除缓存。", category: "互联网与开发", tier: "biz" }
,
  {     word: "dashboard", meaning: "仪表盘/后台", example: "Sales dashboard.", exampleCn: "销售后台。", category: "互联网与开发", tier: "biz" }
,
  {     word: "database", meaning: "数据库", example: "Product database.", exampleCn: "产品数据库。", category: "互联网与开发", tier: "biz" }
,
  {     word: "debug", meaning: "调试/排错", example: "Debug the code.", exampleCn: "调试代码。", category: "互联网与开发", tier: "biz" }
,
  {     word: "domain", meaning: "域名/领域", example: "Register a domain.", exampleCn: "注册域名。", category: "互联网与开发", tier: "biz" }
,
  {     word: "download", meaning: "下载", example: "Download the file.", exampleCn: "下载文件。", category: "互联网与开发", tier: "biz" }
,
  {     word: "encryption", meaning: "加密", example: "Data encryption.", exampleCn: "数据加密。", category: "互联网与开发", tier: "biz" }
,
  {     word: "firewall", meaning: "防火墙", example: "Network firewall.", exampleCn: "网络防火墙。", category: "互联网与开发", tier: "biz" }
,
  {     word: "frontend", meaning: "前端", example: "Frontend development.", exampleCn: "前端开发。", category: "互联网与开发", tier: "biz" }
,
  {     word: "hosting", meaning: "服务器托管", example: "Web hosting.", exampleCn: "网站托管。", category: "互联网与开发", tier: "biz" }
,
  {     word: "interface", meaning: "界面/接口", example: "User interface.", exampleCn: "用户界面。", category: "互联网与开发", tier: "biz" }
,
  {     word: "login", meaning: "登录", example: "Login to your account.", exampleCn: "登录你的账户。", category: "互联网与开发", tier: "biz" }
,
  {     word: "malware", meaning: "恶意软件", example: "Malware protection.", exampleCn: "恶意软件防护。", category: "互联网与开发", tier: "biz" }
,
  {     word: "metrics", meaning: "指标/数据指标", example: "Key metrics.", exampleCn: "关键指标。", category: "互联网与开发", tier: "biz" }
,
  {     word: "mobile-friendly", meaning: "移动端友好", example: "Mobile-friendly website.", exampleCn: "移动端友好的网站。", category: "互联网与开发", tier: "biz" }
,
  {     word: "password", meaning: "密码", example: "Change your password.", exampleCn: "修改密码。", category: "互联网与开发", tier: "biz" }
,
  {     word: "phishing", meaning: "钓鱼/网络钓鱼", example: "Phishing email.", exampleCn: "钓鱼邮件。", category: "互联网与开发", tier: "biz" }
,
  {     word: "pixel", meaning: "像素/追踪像素", example: "Tracking pixel.", exampleCn: "追踪像素。", category: "互联网与开发", tier: "biz" }
,
  {     word: "plugin", meaning: "插件", example: "Install the plugin.", exampleCn: "安装插件。", category: "互联网与开发", tier: "biz" }
,
  {     word: "QR code", meaning: "二维码", example: "Scan the QR code.", exampleCn: "扫二维码。", category: "互联网与开发", tier: "biz" }
,
  {     word: "responsive", meaning: "响应式", example: "Responsive design.", exampleCn: "响应式设计。", category: "互联网与开发", tier: "biz" }
,
  {     word: "server", meaning: "服务器", example: "The server is down.", exampleCn: "服务器宕机了。", category: "互联网与开发", tier: "biz" }
,
  {     word: "spam", meaning: "垃圾邮件/垃圾信息", example: "Spam filter.", exampleCn: "垃圾邮件过滤。", category: "互联网与开发", tier: "biz" }
,
  {     word: "SSL", meaning: "安全证书", example: "SSL certificate.", exampleCn: "SSL证书。", category: "互联网与开发", tier: "biz" }
,
  {     word: "UI", meaning: "用户界面", example: "Clean UI.", exampleCn: "简洁的用户界面。", category: "互联网与开发", tier: "biz" }
,
  {     word: "update", meaning: "更新", example: "Software update.", exampleCn: "软件更新。", category: "互联网与开发", tier: "biz" }
,
  {     word: "upload", meaning: "上传", example: "Upload product images.", exampleCn: "上传产品图片。", category: "互联网与开发", tier: "biz" }
,
  {     word: "URL", meaning: "网址/链接", example: "Copy the URL.", exampleCn: "复制网址。", category: "互联网与开发", tier: "biz" }
,
  {     word: "username", meaning: "用户名", example: "Enter your username.", exampleCn: "输入用户名。", category: "互联网与开发", tier: "biz" }
,
  {     word: "UX", meaning: "用户体验", example: "Good UX design.", exampleCn: "好的用户体验设计。", category: "互联网与开发", tier: "biz" }
,
  {     word: "verification", meaning: "验证", example: "Email verification.", exampleCn: "邮箱验证。", category: "互联网与开发", tier: "biz" }
,
  {     word: "version", meaning: "版本", example: "Latest version.", exampleCn: "最新版本。", category: "互联网与开发", tier: "biz" }
,
  {     word: "VPN", meaning: "虚拟专用网", example: "Use a VPN.", exampleCn: "用VPN。", category: "互联网与开发", tier: "biz" }
,
  {     word: "website", meaning: "网站", example: "Build a website.", exampleCn: "建网站。", category: "互联网与开发", tier: "biz" }
,

  // --- 产品开发与品质管理 ---
  {     word: "ASIN", meaning: "亚马逊标准识别号", example: "Amazon ASIN.", exampleCn: "亚马逊ASIN。", category: "产品与质量", tier: "biz" }
,
  {     word: "barcode", meaning: "条形码", example: "Print the barcode.", exampleCn: "打印条形码。", category: "产品与质量", tier: "biz" }
,
  {     word: "biodegradable", meaning: "可生物降解", example: "Biodegradable plastic.", exampleCn: "可降解塑料。", category: "产品与质量", tier: "biz" }
,
  {     word: "certificate", meaning: "证书/认证", example: "Quality certificate.", exampleCn: "质量认证。", category: "产品与质量", tier: "biz" }
,
  {     word: "certification", meaning: "认证", example: "CE certification.", exampleCn: "CE认证。", category: "产品与质量", tier: "biz" }
,
  {     word: "compliance", meaning: "合规", example: "Product compliance.", exampleCn: "产品合规。", category: "产品与质量", tier: "biz" }
,
  {     word: "defect", meaning: "瑕疵/缺陷", example: "Zero defect policy.", exampleCn: "零缺陷政策。", category: "产品与质量", tier: "biz" }
,
  {     word: "dimension", meaning: "尺寸/维度", example: "Check the dimensions.", exampleCn: "确认尺寸。", category: "产品与质量", tier: "biz" }
,
  {     word: "durability", meaning: "耐久性", example: "Tested for durability.", exampleCn: "经过耐用性测试。", category: "产品与质量", tier: "biz" }
,
  {     word: "EAN", meaning: "欧洲商品编码", example: "EAN barcode.", exampleCn: "EAN条形码。", category: "产品与质量", tier: "biz" }
,
  {     word: "eco-friendly", meaning: "环保的", example: "Eco-friendly packaging.", exampleCn: "环保包装。", category: "产品与质量", tier: "biz" }
,
  {     word: "FNSKU", meaning: "亚马逊配送码", example: "FBA FNSKU label.", exampleCn: "FBA配送码标签。", category: "产品与质量", tier: "biz" }
,
  {     word: "guarantee", meaning: "保证/担保", example: "Money-back guarantee.", exampleCn: "退款保证。", category: "产品与质量", tier: "biz" }
,
  {     word: "ingredient", meaning: "成分/配料", example: "List all ingredients.", exampleCn: "列明所有成分。", category: "产品与质量", tier: "biz" }
,
  {     word: "inspection", meaning: "检验/检查", example: "Quality inspection before shipping.", exampleCn: "发货前质检。", category: "产品与质量", tier: "biz" }
,
  {     word: "instruction", meaning: "使用说明/指示", example: "Follow the instructions.", exampleCn: "按照说明操作。", category: "产品与质量", tier: "biz" }
,
  {     word: "label", meaning: "标签", example: "Product label.", exampleCn: "产品标签。", category: "产品与质量", tier: "biz" }
,
  {     word: "lifespan", meaning: "使用寿命", example: "Long lifespan.", exampleCn: "使用寿命长。", category: "产品与质量", tier: "biz" }
,
  {     word: "manual", meaning: "说明书", example: "User manual.", exampleCn: "用户手册。", category: "产品与质量", tier: "biz" }
,
  {     word: "patent", meaning: "专利", example: "Patent pending.", exampleCn: "专利申请中。", category: "产品与质量", tier: "biz" }
,
  {     word: "prototype", meaning: "原型/样板", example: "Make a prototype.", exampleCn: "做样板。", category: "产品与质量", tier: "biz" }
,
  {     word: "recyclable", meaning: "可回收的", example: "Recyclable materials.", exampleCn: "可回收材料。", category: "产品与质量", tier: "biz" }
,
  {     word: "shockproof", meaning: "防震", example: "Shockproof case.", exampleCn: "防震壳。", category: "产品与质量", tier: "biz" }
,
  {     word: "specification", meaning: "规格/参数", example: "Product specifications.", exampleCn: "产品规格。", category: "产品与质量", tier: "biz" }
,
  {     word: "standard", meaning: "标准", example: "Meet international standards.", exampleCn: "符合国际标准。", category: "产品与质量", tier: "biz" }
,
  {     word: "tolerance", meaning: "公差/容差", example: "Within tolerance.", exampleCn: "在公差范围内。", category: "产品与质量", tier: "biz" }
,
  {     word: "trademark", meaning: "商标", example: "Registered trademark.", exampleCn: "注册商标。", category: "产品与质量", tier: "biz" }
,
  {     word: "UPC", meaning: "通用产品码", example: "Need a UPC code.", exampleCn: "需要UPC码。", category: "产品与质量", tier: "biz" }
,

  // --- 商务沟通与合同 ---
  {     word: "acquisition", meaning: "收购", example: "Business acquisition.", exampleCn: "企业收购。", category: "商务谈判", tier: "biz" }
,
  {     word: "agent", meaning: "代理/代理人", example: "Sales agent.", exampleCn: "销售代理。", category: "商务谈判", tier: "biz" }
,
  {     word: "agreement", meaning: "协议/一致", example: "Written agreement.", exampleCn: "书面协议。", category: "商务谈判", tier: "biz" }
,
  {     word: "bulk order", meaning: "大宗订单", example: "Bulk order discount.", exampleCn: "大宗订单折扣。", category: "商务谈判", tier: "biz" }
,
  {     word: "clause", meaning: "条款(合同)", example: "Non-compete clause.", exampleCn: "竞业禁止条款。", category: "商务谈判", tier: "biz" }
,
  {     word: "conditions", meaning: "条件/状况", example: "Terms and conditions.", exampleCn: "条款与条件。", category: "商务谈判", tier: "biz" }
,
  {     word: "counter-offer", meaning: "还价/还盘", example: "Make a counter-offer.", exampleCn: "还价。", category: "商务谈判", tier: "biz" }
,
  {     word: "due diligence", meaning: "尽职调查", example: "Do due diligence.", exampleCn: "做尽职调查。", category: "商务谈判", tier: "biz" }
,
  {     word: "exclusivity", meaning: "独家/排他性", example: "Exclusive rights.", exampleCn: "独家权利。", category: "商务谈判", tier: "biz" }
,
  {     word: "joint venture", meaning: "合资企业", example: "Form a joint venture.", exampleCn: "成立合资企业。", category: "商务谈判", tier: "biz" }
,
  {     word: "LOI", meaning: "意向书", example: "Letter of intent.", exampleCn: "意向书。", category: "商务谈判", tier: "biz" }
,
  {     word: "long-term", meaning: "长期的", example: "Long-term cooperation.", exampleCn: "长期合作。", category: "商务谈判", tier: "biz" }
,
  {     word: "merger", meaning: "合并", example: "Company merger.", exampleCn: "公司合并。", category: "商务谈判", tier: "biz" }
,
  {     word: "middleman", meaning: "中间人", example: "Cut out the middleman.", exampleCn: "去掉中间商。", category: "商务谈判", tier: "biz" }
,
  {     word: "MOU", meaning: "谅解备忘录", example: "Sign an MOU.", exampleCn: "签谅解备忘录。", category: "商务谈判", tier: "biz" }
,
  {     word: "NDA", meaning: "保密协议", example: "Sign an NDA.", exampleCn: "签保密协议。", category: "商务谈判", tier: "biz" }
,
  {     word: "negotiation", meaning: "谈判/协商", example: "Price negotiation.", exampleCn: "价格谈判。", category: "商务谈判", tier: "biz" }
,
  {     word: "partnership", meaning: "合作关系", example: "Long-term partnership.", exampleCn: "长期合作。", category: "商务谈判", tier: "biz" }
,
  {     word: "proposal", meaning: "提案/建议书", example: "Business proposal.", exampleCn: "商业提案。", category: "商务谈判", tier: "biz" }
,
  {     word: "repeat order", meaning: "返单/复购", example: "Customer repeat order rate.", exampleCn: "客户复购率。", category: "商务谈判", tier: "biz" }
,
  {     word: "terms", meaning: "条款/条件", example: "Payment terms.", exampleCn: "付款条款。", category: "商务谈判", tier: "biz" }
,
  {     word: "terms sheet", meaning: "条款清单", example: "Draft a terms sheet.", exampleCn: "起草条款清单。", category: "商务谈判", tier: "biz" }
,
  {     word: "territory", meaning: "区域/领土", example: "Sales territory.", exampleCn: "销售区域。", category: "商务谈判", tier: "biz" }
,
  {     word: "trial order", meaning: "试单", example: "Start with a trial order.", exampleCn: "从试单开始。", category: "商务谈判", tier: "biz" }
,
  {     word: "win-win", meaning: "双赢", example: "A win-win situation.", exampleCn: "双赢局面。", category: "商务谈判", tier: "biz" }
,

  // --- 客户服务与售后处理 ---
  {     word: "automated reply", meaning: "自动回复", example: "Set up automated reply.", exampleCn: "设置自动回复。", category: "客服与售后", tier: "biz" }
,
  {     word: "chat", meaning: "聊天/在线聊天", example: "Live chat support.", exampleCn: "在线聊天支持。", category: "客服与售后", tier: "biz" }
,
  {     word: "escalation", meaning: "升级/上报", example: "Escalation process.", exampleCn: "升级流程。", category: "客服与售后", tier: "biz" }
,
  {     word: "FAQ", meaning: "常见问题", example: "Check our FAQ page.", exampleCn: "看我们的常见问题页面。", category: "客服与售后", tier: "biz" }
,
  {     word: "follow-up", meaning: "跟进", example: "Follow-up email.", exampleCn: "跟进邮件。", category: "客服与售后", tier: "biz" }
,
  {     word: "helpdesk", meaning: "客服系统", example: "Helpdesk software.", exampleCn: "客服软件。", category: "客服与售后", tier: "biz" }
,
  {     word: "notification", meaning: "通知", example: "Push notification.", exampleCn: "推送通知。", category: "客服与售后", tier: "biz" }
,
  {     word: "resolution", meaning: "解决方案/解决", example: "Quick resolution.", exampleCn: "快速解决。", category: "客服与售后", tier: "biz" }
,
  {     word: "response time", meaning: "响应时间", example: "Fast response time.", exampleCn: "快速响应。", category: "客服与售后", tier: "biz" }
,
  {     word: "restocking", meaning: "退货入库", example: "Restocking fee.", exampleCn: "退货入库费。", category: "客服与售后", tier: "biz" }
,
  {     word: "RMA", meaning: "退货授权", example: "RMA number.", exampleCn: "退货授权号。", category: "客服与售后", tier: "biz" }
,
  {     word: "satisfaction", meaning: "满意度", example: "Customer satisfaction.", exampleCn: "客户满意度。", category: "客服与售后", tier: "biz" }
,
  {     word: "script", meaning: "脚本/话术", example: "Customer service script.", exampleCn: "客服话术。", category: "客服与售后", tier: "biz" }
,
  {     word: "SLA", meaning: "服务水平协议", example: "SLA guarantee.", exampleCn: "服务水平保证。", category: "客服与售后", tier: "biz" }
,
  {     word: "survey", meaning: "调查/问卷", example: "Customer survey.", exampleCn: "客户调查。", category: "客服与售后", tier: "biz" }
,
  {     word: "template", meaning: "模板", example: "Email template.", exampleCn: "邮件模板。", category: "客服与售后", tier: "biz" }
,

  // --- 支付、金融与资金 ---
  {     word: "balance", meaning: "余额/尾款", example: "Pay the balance before shipping.", exampleCn: "发货前付清余额。", category: "支付与金融", tier: "biz" }
,
  {     word: "break-even", meaning: "盈亏平衡", example: "Break-even point.", exampleCn: "盈亏平衡点。", category: "支付与金融", tier: "biz" }
,
  {     word: "budget", meaning: "预算", example: "Within budget.", exampleCn: "在预算内。", category: "支付与金融", tier: "biz" }
,
  {     word: "chargeback", meaning: "拒付/退单", example: "Chargeback reason.", exampleCn: "拒付原因。", category: "支付与金融", tier: "biz" }
,
  {     word: "credit", meaning: "信用/贷方", example: "Credit card.", exampleCn: "信用卡。", category: "支付与金融", tier: "biz" }
,
  {     word: "credit limit", meaning: "信用额度", example: "Increase credit limit.", exampleCn: "提高信用额度。", category: "支付与金融", tier: "biz" }
,
  {     word: "currency", meaning: "货币", example: "Foreign currency.", exampleCn: "外币。", category: "支付与金融", tier: "biz" }
,
  {     word: "debit", meaning: "借方/借记", example: "Debit card.", exampleCn: "借记卡。", category: "支付与金融", tier: "biz" }
,
  {     word: "deposit", meaning: "定金/押金", example: "30% deposit required.", exampleCn: "需要30%定金。", category: "支付与金融", tier: "biz" }
,
  {     word: "escrow", meaning: "第三方托管", example: "Use escrow service.", exampleCn: "用第三方托管。", category: "支付与金融", tier: "biz" }
,
  {     word: "estimate", meaning: "估算/预估", example: "Rough estimate.", exampleCn: "粗略估算。", category: "支付与金融", tier: "biz" }
,
  {     word: "exchange rate", meaning: "汇率", example: "Check the exchange rate.", exampleCn: "查汇率。", category: "支付与金融", tier: "biz" }
,
  {     word: "fee", meaning: "费用/手续费", example: "Transaction fee.", exampleCn: "交易手续费。", category: "支付与金融", tier: "biz" }
,
  {     word: "installment", meaning: "分期付款", example: "Pay in installments.", exampleCn: "分期付款。", category: "支付与金融", tier: "biz" }
,
  {     word: "loss", meaning: "亏损", example: "Net loss.", exampleCn: "净亏损。", category: "支付与金融", tier: "biz" }
,
  {     word: "margin", meaning: "利润率/利润空间", example: "Profit margin is too low.", exampleCn: "利润率太低。", category: "支付与金融", tier: "biz" }
,
  {     word: "overdue", meaning: "逾期", example: "Overdue payment.", exampleCn: "逾期付款。", category: "支付与金融", tier: "biz" }
,
  {     word: "payment", meaning: "付款/支付", example: "Payment received.", exampleCn: "已收款。", category: "支付与金融", tier: "biz" }
,
  {     word: "penalty", meaning: "罚款/违约金", example: "Late payment penalty.", exampleCn: "逾期付款罚金。", category: "支付与金融", tier: "biz" }
,
  {     word: "processing fee", meaning: "处理费", example: "3% processing fee.", exampleCn: "3%处理费。", category: "支付与金融", tier: "biz" }
,
  {     word: "profit", meaning: "利润", example: "Net profit.", exampleCn: "净利润。", category: "支付与金融", tier: "biz" }
,
  {     word: "quote", meaning: "报价", example: "Send me a quote.", exampleCn: "给我报价。", category: "支付与金融", tier: "biz" }
,
  {     word: "remittance", meaning: "汇款", example: "International remittance.", exampleCn: "国际汇款。", category: "支付与金融", tier: "biz" }
,
  {     word: "ROI", meaning: "投资回报率", example: "Calculate your ROI.", exampleCn: "算投资回报率。", category: "支付与金融", tier: "biz" }
,
  {     word: "transaction", meaning: "交易", example: "Secure transaction.", exampleCn: "安全交易。", category: "支付与金融", tier: "biz" }
,
  {     word: "transfer", meaning: "转账/转移", example: "Bank transfer.", exampleCn: "银行转账。", category: "支付与金融", tier: "biz" }
,

  // --- 跨境物流与仓储 ---
  {     word: "backorder", meaning: "缺货/延期交货", example: "Item is on backorder.", exampleCn: "商品缺货延期。", category: "物流与仓储", tier: "biz" }
,
  {     word: "broker", meaning: "经纪人/报关行", example: "Customs broker.", exampleCn: "报关行。", category: "物流与仓储", tier: "biz" }
,
  {     word: "bubble wrap", meaning: "气泡膜", example: "Wrap with bubble wrap.", exampleCn: "用气泡膜包。", category: "物流与仓储", tier: "biz" }
,
  {     word: "carrier", meaning: "物流公司/承运人", example: "Which carrier do you use?", exampleCn: "你用哪家物流？", category: "物流与仓储", tier: "biz" }
,
  {     word: "carton", meaning: "纸箱", example: "One carton per size.", exampleCn: "每个尺码一箱。", category: "物流与仓储", tier: "biz" }
,
  {     word: "claim", meaning: "索赔", example: "File a claim.", exampleCn: "提出索赔。", category: "物流与仓储", tier: "biz" }
,
  {     word: "clearance", meaning: "清关/许可", example: "Customs clearance takes 3 days.", exampleCn: "清关需要3天。", category: "物流与仓储", tier: "biz" }
,
  {     word: "container", meaning: "集装箱/货柜", example: "A full container load.", exampleCn: "整柜发货。", category: "物流与仓储", tier: "biz" }
,
  {     word: "courier", meaning: "快递员/快递", example: "Send by courier.", exampleCn: "发快递。", category: "物流与仓储", tier: "biz" }
,
  {     word: "damage", meaning: "损坏", example: "Report damage immediately.", exampleCn: "立即报告损坏。", category: "物流与仓储", tier: "biz" }
,
  {     word: "declaration", meaning: "申报/报关", example: "Customs declaration.", exampleCn: "报关单。", category: "物流与仓储", tier: "biz" }
,
  {     word: "dispute", meaning: "纠纷/争议", example: "Open a dispute.", exampleCn: "发起纠纷。", category: "物流与仓储", tier: "biz" }
,
  {     word: "drop-off", meaning: "投递/交货点", example: "Drop-off location.", exampleCn: "投递点。", category: "物流与仓储", tier: "biz" }
,
  {     word: "duty", meaning: "税/关税", example: "Customs duty included.", exampleCn: "含关税。", category: "物流与仓储", tier: "biz" }
,
  {     word: "ETA", meaning: "预计到达时间", example: "What's the ETA?", exampleCn: "预计到达时间是什么？", category: "物流与仓储", tier: "biz" }
,
  {     word: "ETD", meaning: "预计出发时间", example: "ETD is next Monday.", exampleCn: "预计下周一出货。", category: "物流与仓储", tier: "biz" }
,
  {     word: "FBA", meaning: "亚马逊物流", example: "Send to FBA warehouse.", exampleCn: "发到FBA仓库。", category: "物流与仓储", tier: "biz" }
,
  {     word: "FBM", meaning: "自发货", example: "I do FBM.", exampleCn: "我自发货。", category: "物流与仓储", tier: "biz" }
,
  {     word: "FCL", meaning: "整箱", example: "FCL cheaper than LCL.", exampleCn: "整箱比拼箱便宜。", category: "物流与仓储", tier: "biz" }
,
  {     word: "forwarder", meaning: "货代", example: "Freight forwarder.", exampleCn: "货运代理。", category: "物流与仓储", tier: "biz" }
,
  {     word: "insurance", meaning: "保险", example: "Shipping insurance.", exampleCn: "运输保险。", category: "物流与仓储", tier: "biz" }
,
  {     word: "LCL", meaning: "拼箱", example: "LCL shipment.", exampleCn: "拼箱发货。", category: "物流与仓储", tier: "biz" }
,
  {     word: "lead time", meaning: "交期/前置时间", example: "Lead time is 15 days.", exampleCn: "交期15天。", category: "物流与仓储", tier: "biz" }
,
  {     word: "lost", meaning: "丢失的", example: "Lost package.", exampleCn: "丢失的包裹。", category: "物流与仓储", tier: "biz" }
,
  {     word: "packing", meaning: "包装", example: "Packing list.", exampleCn: "装箱单。", category: "物流与仓储", tier: "biz" }
,
  {     word: "pallet", meaning: "托盘", example: "Ship on a pallet.", exampleCn: "托盘发货。", category: "物流与仓储", tier: "biz" }
,
  {     word: "pickup", meaning: "取件/自提", example: "Pickup service.", exampleCn: "取件服务。", category: "物流与仓储", tier: "biz" }
,
  {     word: "polybag", meaning: "塑料袋", example: "Pack in polybag.", exampleCn: "用塑料袋包装。", category: "物流与仓储", tier: "biz" }
,
  {     word: "pre-order", meaning: "预售", example: "Available for pre-order.", exampleCn: "可预售。", category: "物流与仓储", tier: "biz" }
,
  {     word: "shipment", meaning: "发货/货物", example: "Track your shipment.", exampleCn: "追踪你的货物。", category: "物流与仓储", tier: "biz" }
,
  {     word: "signature", meaning: "签名", example: "Signature required.", exampleCn: "需要签收。", category: "物流与仓储", tier: "biz" }
,
  {     word: "tariff", meaning: "关税", example: "Import tariff.", exampleCn: "进口关税。", category: "物流与仓储", tier: "biz" }
,
  {     word: "tax", meaning: "税", example: "Sales tax.", exampleCn: "销售税。", category: "物流与仓储", tier: "biz" }
,
  {     word: "VAT", meaning: "增值税", example: "VAT included.", exampleCn: "含增值税。", category: "物流与仓储", tier: "biz" }
,
  {     word: "brand", meaning: "品牌", example: "It's a famous brand.", exampleCn: "这是知名品牌。", category: "产品与质量", tier: "biz" }
,
  {     word: "color", meaning: "颜色", example: "Available in three colors.", exampleCn: "有三种颜色可选。", category: "产品与质量", tier: "biz" }
,
  {     word: "design", meaning: "设计", example: "I love the design.", exampleCn: "我喜欢这个设计。", category: "产品与质量", tier: "biz" }
,
  {     word: "durable", meaning: "耐用的", example: "This bag is very durable.", exampleCn: "这个包很耐用。", category: "产品与质量", tier: "biz" }
,
  {     word: "feature", meaning: "特点", example: "The main feature is waterproof.", exampleCn: "主要特点是防水。", category: "产品与质量", tier: "biz" }
,
  {     word: "material", meaning: "材料", example: "What material is this?", exampleCn: "这是什么材料？", category: "产品与质量", tier: "biz" }
,
  {     word: "sample", meaning: "样品", example: "Can you send me a sample?", exampleCn: "能寄个样品吗？", category: "产品与质量", tier: "biz" }
,
  {     word: "size", meaning: "大小/尺码", example: "What size do you need?", exampleCn: "你需要什么尺码？", category: "产品与质量", tier: "biz" }
,
  {     word: "waterproof", meaning: "防水的", example: "Is this watch waterproof?", exampleCn: "这表防水吗？", category: "产品与质量", tier: "biz" }
,
  {     word: "discount", meaning: "折扣", example: "Can I get a discount?", exampleCn: "能打折吗？", category: "支付与金融", tier: "biz" }
,
  {     word: "cancel", meaning: "取消", example: "Can I cancel my order?", exampleCn: "我能取消订单吗？", category: "商务谈判", tier: "biz" }
,
  {     word: "confirm", meaning: "确认", example: "Please confirm your order.", exampleCn: "请确认订单。", category: "商务谈判", tier: "biz" }
,
  {     word: "inquiry", meaning: "询问/询价", example: "Thank you for your inquiry.", exampleCn: "感谢您的询问。", category: "商务谈判", tier: "biz" }
,
  {     word: "invoice", meaning: "发票", example: "Please send the invoice.", exampleCn: "请发发票。", category: "商务谈判", tier: "biz" }
,
  {     word: "negotiate", meaning: "谈判", example: "Can we negotiate?", exampleCn: "能商量一下吗？", category: "商务谈判", tier: "biz" }
,
  {     word: "quotation", meaning: "报价单", example: "I need a formal quotation.", exampleCn: "我需要正式报价单。", category: "商务谈判", tier: "biz" }
,
  {     word: "supplier", meaning: "供应商", example: "Find a reliable supplier.", exampleCn: "找可靠供应商。", category: "商务谈判", tier: "biz" }
,
  {     word: "apologize", meaning: "道歉", example: "We apologize for the inconvenience.", exampleCn: "对不便表示歉意。", category: "客服与售后", tier: "biz" }
,
  {     word: "complaint", meaning: "投诉", example: "We take complaints seriously.", exampleCn: "我们认真对待投诉。", category: "客服与售后", tier: "biz" }
,
  {     word: "exchange", meaning: "换货", example: "Would you like an exchange?", exampleCn: "要换货吗？", category: "客服与售后", tier: "biz" }
,
  {     word: "refund", meaning: "退款", example: "We process refunds in 3 days.", exampleCn: "我们3天内退款。", category: "客服与售后", tier: "biz" }
,
  {     word: "warranty", meaning: "保修", example: "One-year warranty included.", exampleCn: "包含一年保修。", category: "客服与售后", tier: "biz" }
,
  {     word: "customs", meaning: "海关", example: "The package is at customs.", exampleCn: "包裹在海关。", category: "物流与仓储", tier: "biz" }
,
  {     word: "delivery", meaning: "配送", example: "Delivery takes 5-7 days.", exampleCn: "配送5-7天。", category: "物流与仓储", tier: "biz" }
,
  {     word: "express", meaning: "快递/特快", example: "Express shipping available.", exampleCn: "可发特快。", category: "物流与仓储", tier: "biz" }
,
  {     word: "freight", meaning: "货运/运费", example: "The freight cost is included.", exampleCn: "运费已包含。", category: "物流与仓储", tier: "biz" }
,
  {     word: "inventory", meaning: "库存", example: "Check our current inventory.", exampleCn: "查一下当前库存。", category: "物流与仓储", tier: "biz" }
,
  {     word: "shipping", meaning: "运输/运费", example: "Free shipping over $50.", exampleCn: "满$50免运费。", category: "物流与仓储", tier: "biz" }
,
  {     word: "stock", meaning: "库存/现货", example: "This item is in stock.", exampleCn: "这件有现货。", category: "物流与仓储", tier: "biz" }
,
  {     word: "tracking", meaning: "追踪", example: "Here's your tracking number.", exampleCn: "这是你的追踪号。", category: "物流与仓储", tier: "biz" }
,
  {     word: "warehouse", meaning: "仓库", example: "Goods are in our warehouse.", exampleCn: "货在我们仓库。", category: "物流与仓储", tier: "biz" }
,

  // --- 电商平台与运营 ---
  {     word: "account", meaning: "账户", example: "My seller account.", exampleCn: "我的卖家账户。", category: "电商运营", tier: "biz" }
,
  {     word: "B2B", meaning: "企业对企业", example: "We do B2B wholesale.", exampleCn: "我们做B2B批发。", category: "电商运营", tier: "biz" }
,
  {     word: "B2C", meaning: "企业对消费者", example: "B2C e-commerce.", exampleCn: "B2C电商。", category: "电商运营", tier: "biz" }
,
  {     word: "category", meaning: "类目", example: "Choose the right category.", exampleCn: "选对类目。", category: "电商运营", tier: "biz" }
,
  {     word: "commission", meaning: "佣金", example: "Platform commission is 15%.", exampleCn: "平台佣金是15%。", category: "电商运营", tier: "biz" }
,
  {     word: "distributor", meaning: "经销商", example: "Find a local distributor.", exampleCn: "找本地经销商。", category: "电商运营", tier: "biz" }
,
  {     word: "dropshipping", meaning: "一件代发", example: "I do dropshipping.", exampleCn: "我做一件代发。", category: "电商运营", tier: "biz" }
,
  {     word: "feedback", meaning: "反馈/评价", example: "Customer feedback.", exampleCn: "客户反馈。", category: "电商运营", tier: "biz" }
,
  {     word: "GMV", meaning: "成交总额", example: "GMV exceeded target.", exampleCn: "成交总额超目标。", category: "电商运营", tier: "biz" }
,
  {     word: "listing", meaning: "商品listing/刊登", example: "Optimize your product listing.", exampleCn: "优化你的商品详情页。", category: "电商运营", tier: "biz" }
,
  {     word: "marketplace", meaning: "电商平台/市场", example: "Online marketplace.", exampleCn: "在线交易平台。", category: "电商运营", tier: "biz" }
,
  {     word: "membership", meaning: "会员", example: "Prime membership.", exampleCn: "Prime会员。", category: "电商运营", tier: "biz" }
,
  {     word: "MOQ", meaning: "最小起订量", example: "What's your MOQ?", exampleCn: "最小起订量是多少？", category: "电商运营", tier: "biz" }
,
  {     word: "ODM", meaning: "原创设计制造", example: "ODM products available.", exampleCn: "有ODM产品。", category: "电商运营", tier: "biz" }
,
  {     word: "OEM", meaning: "贴牌生产", example: "We offer OEM service.", exampleCn: "我们提供贴牌服务。", category: "电商运营", tier: "biz" }
,
  {     word: "platform", meaning: "平台", example: "Which platform do you sell on?", exampleCn: "你在哪个平台卖？", category: "电商运营", tier: "biz" }
,
  {     word: "procurement", meaning: "采购", example: "Procurement manager.", exampleCn: "采购经理。", category: "电商运营", tier: "biz" }
,
  {     word: "rank", meaning: "排名", example: "Best seller rank.", exampleCn: "畅销排名。", category: "电商运营", tier: "biz" }
,
  {     word: "rating", meaning: "评分", example: "Five-star rating.", exampleCn: "五星评分。", category: "电商运营", tier: "biz" }
,
  {     word: "reseller", meaning: "转售商", example: "Authorized reseller.", exampleCn: "授权经销商。", category: "电商运营", tier: "biz" }
,
  {     word: "retail", meaning: "零售", example: "Retail and wholesale.", exampleCn: "零售和批发。", category: "电商运营", tier: "biz" }
,
  {     word: "revenue", meaning: "收入/营收", example: "Monthly revenue.", exampleCn: "月收入。", category: "电商运营", tier: "biz" }
,
  {     word: "review", meaning: "评价/评论", example: "Get more positive reviews.", exampleCn: "获得更多好评。", category: "电商运营", tier: "biz" }
,
  {     word: "sales", meaning: "销量/销售额", example: "Sales increased 20%.", exampleCn: "销量增长了20%。", category: "电商运营", tier: "biz" }
,
  {     word: "SKU", meaning: "库存单位编码", example: "How many SKUs do you have?", exampleCn: "你有多少个SKU？", category: "电商运营", tier: "biz" }
,
  {     word: "sourcing", meaning: "采购/找货源", example: "Product sourcing in China.", exampleCn: "在中国找货源。", category: "电商运营", tier: "biz" }
,
  {     word: "storefront", meaning: "店铺首页", example: "Customize your storefront.", exampleCn: "自定义店铺首页。", category: "电商运营", tier: "biz" }
,
  {     word: "subscription", meaning: "订阅", example: "Monthly subscription.", exampleCn: "月度订阅。", category: "电商运营", tier: "biz" }
,
  {     word: "wholesale", meaning: "批发", example: "Wholesale price available.", exampleCn: "有批发价。", category: "电商运营", tier: "biz" }
,

  // --- 广告、流量与营销 ---
  {     word: "ad", meaning: "广告", example: "Run an ad.", exampleCn: "投放广告。", category: "营销与流量", tier: "biz" }
,
  {     word: "advertisement", meaning: "广告", example: "Online advertisement.", exampleCn: "在线广告。", category: "营销与流量", tier: "biz" }
,
  {     word: "audience", meaning: "受众/观众", example: "Target audience.", exampleCn: "目标受众。", category: "营销与流量", tier: "biz" }
,
  {     word: "banner", meaning: "横幅/广告横幅", example: "Website banner.", exampleCn: "网站横幅。", category: "营销与流量", tier: "biz" }
,
  {     word: "blog", meaning: "博客", example: "Write a blog post.", exampleCn: "写博客文章。", category: "营销与流量", tier: "biz" }
,
  {     word: "branding", meaning: "品牌建设", example: "Strong branding.", exampleCn: "强品牌。", category: "营销与流量", tier: "biz" }
,
  {     word: "campaign", meaning: "广告活动/营销活动", example: "Launch a campaign.", exampleCn: "启动营销活动。", category: "营销与流量", tier: "biz" }
,
  {     word: "click", meaning: "点击", example: "Pay per click.", exampleCn: "按点击付费。", category: "营销与流量", tier: "biz" }
,
  {     word: "content", meaning: "内容", example: "Create good content.", exampleCn: "创作好内容。", category: "营销与流量", tier: "biz" }
,
  {     word: "conversion", meaning: "转化", example: "Improve conversion rate.", exampleCn: "提高转化率。", category: "营销与流量", tier: "biz" }
,
  {     word: "coupon", meaning: "优惠券", example: "Use this coupon code.", exampleCn: "用这个优惠码。", category: "营销与流量", tier: "biz" }
,
  {     word: "CPA", meaning: "每次获取成本", example: "Target CPA.", exampleCn: "目标获客成本。", category: "营销与流量", tier: "biz" }
,
  {     word: "CPC", meaning: "每次点击成本", example: "CPC is $0.50.", exampleCn: "每次点击0.5美元。", category: "营销与流量", tier: "biz" }
,
  {     word: "CTR", meaning: "点击率", example: "CTR is 2%.", exampleCn: "点击率2%。", category: "营销与流量", tier: "biz" }
,
  {     word: "deal", meaning: "交易/优惠", example: "A good deal.", exampleCn: "好交易。", category: "营销与流量", tier: "biz" }
,
  {     word: "impression", meaning: "曝光/展示", example: "Ad impressions.", exampleCn: "广告展示量。", category: "营销与流量", tier: "biz" }
,
  {     word: "influencer", meaning: "网红/影响者", example: "Influencer marketing.", exampleCn: "网红营销。", category: "营销与流量", tier: "biz" }
,
  {     word: "keyword", meaning: "关键词", example: "Choose the right keywords.", exampleCn: "选对关键词。", category: "营销与流量", tier: "biz" }
,
  {     word: "livestream", meaning: "直播", example: "Sell via livestream.", exampleCn: "通过直播卖货。", category: "营销与流量", tier: "biz" }
,
  {     word: "loyalty", meaning: "忠诚度", example: "Customer loyalty program.", exampleCn: "客户忠诚计划。", category: "营销与流量", tier: "biz" }
,
  {     word: "newsletter", meaning: "邮件营销/简报", example: "Subscribe to our newsletter.", exampleCn: "订阅我们的简报。", category: "营销与流量", tier: "biz" }
,
  {     word: "pop-up", meaning: "弹窗", example: "Pop-up ad.", exampleCn: "弹窗广告。", category: "营销与流量", tier: "biz" }
,
  {     word: "ROAS", meaning: "广告支出回报率", example: "ROAS is 3x.", exampleCn: "广告回报率3倍。", category: "营销与流量", tier: "biz" }
,
  {     word: "SEM", meaning: "搜索引擎营销", example: "SEM strategy.", exampleCn: "搜索引擎营销策略。", category: "营销与流量", tier: "biz" }
,
  {     word: "SEO", meaning: "搜索引擎优化", example: "Do SEO for your listing.", exampleCn: "给listing做SEO。", category: "营销与流量", tier: "biz" }
,
  {     word: "social media", meaning: "社交媒体", example: "Promote on social media.", exampleCn: "在社交媒体上推广。", category: "营销与流量", tier: "biz" }
,
  {     word: "targeting", meaning: "定向/目标定位", example: "Audience targeting.", exampleCn: "受众定向。", category: "营销与流量", tier: "biz" }
,
  {     word: "unboxing", meaning: "开箱", example: "Unboxing video.", exampleCn: "开箱视频。", category: "营销与流量", tier: "biz" }
,
  {     word: "vlog", meaning: "视频博客", example: "Product vlog.", exampleCn: "产品视频博客。", category: "营销与流量", tier: "biz" }
,

  // --- 新增: AI与科技 ---
  { word: "cluster", meaning: "集群", example: "Server cluster.", exampleCn: "服务器集群。", category: "AI与科技", tier: "biz" }
,
  { word: "node", meaning: "节点", example: "Network node.", exampleCn: "网络节点。", category: "AI与科技", tier: "biz" }
,
  { word: "instance", meaning: "实例", example: "Cloud instance.", exampleCn: "云实例。", category: "AI与科技", tier: "biz" }
,
  { word: "orchestrate", meaning: "编排/调度", example: "Orchestrate services.", exampleCn: "编排服务。", category: "AI与科技", tier: "biz" }
,
  { word: "pipeline", meaning: "流水线/管道", example: "Data pipeline.", exampleCn: "数据管道。", category: "AI与科技", tier: "biz" }
,
  { word: "trigger", meaning: "触发器/触发", example: "Event trigger.", exampleCn: "事件触发器。", category: "AI与科技", tier: "biz" }
,
  { word: "payload", meaning: "载荷/数据包", example: "JSON payload.", exampleCn: "JSON载荷。", category: "AI与科技", tier: "biz" }
,
  { word: "query", meaning: "查询", example: "Database query.", exampleCn: "数据库查询。", category: "AI与科技", tier: "biz" }
,
  { word: "index", meaning: "索引/指标", example: "Create an index.", exampleCn: "创建索引。", category: "AI与科技", tier: "biz" }
,
  { word: "schema", meaning: "模式/结构", example: "Database schema.", exampleCn: "数据库模式。", category: "AI与科技", tier: "biz" }
,
  { word: "migrate", meaning: "迁移/数据迁移", example: "Data migration.", exampleCn: "数据迁移。", category: "AI与科技", tier: "biz" }
,
  { word: "replicate", meaning: "复制/同步", example: "Data replication.", exampleCn: "数据复制。", category: "AI与科技", tier: "biz" }
,
  { word: "shard", meaning: "分片/数据分片", example: "Database shard.", exampleCn: "数据库分片。", category: "AI与科技", tier: "biz" }
,
  { word: "failover", meaning: "故障转移", example: "Automatic failover.", exampleCn: "自动故障转移。", category: "AI与科技", tier: "biz" }
,

  // --- 新增: 产品与质量 ---
  { word: "mold", meaning: "模具/模子", example: "Injection mold.", exampleCn: "注塑模具。", category: "产品与质量", tier: "biz" }
,
  { word: "tooling", meaning: "模具/工装", example: "Tooling cost.", exampleCn: "模具费用。", category: "产品与质量", tier: "biz" }
,
  { word: "calibration", meaning: "校准/标定", example: "Equipment calibration.", exampleCn: "设备校准。", category: "产品与质量", tier: "biz" }
,
  { word: "defective", meaning: "有缺陷的", example: "Defective product.", exampleCn: "有缺陷的产品。", category: "产品与质量", tier: "biz" }
,
  { word: "reject", meaning: "拒收/不合格品", example: "Reject rate.", exampleCn: "不合格率。", category: "产品与质量", tier: "biz" }
,
  { word: "yield", meaning: "良率/产量", example: "Production yield.", exampleCn: "生产良率。", category: "产品与质量", tier: "biz" }
,
  { word: "capacity", meaning: "产能/容量", example: "Production capacity.", exampleCn: "产能。", category: "产品与质量", tier: "biz" }
,
  { word: "output", meaning: "产量/输出", example: "Daily output.", exampleCn: "日产量。", category: "产品与质量", tier: "biz" }
,
  { word: "input", meaning: "输入/投入", example: "Raw material input.", exampleCn: "原材料投入。", category: "产品与质量", tier: "biz" }
,
  { word: "optimize", meaning: "优化", example: "Optimize the process.", exampleCn: "优化流程。", category: "产品与质量", tier: "biz" }
,
  { word: "streamline", meaning: "精简/简化", example: "Streamline production.", exampleCn: "精简生产。", category: "产品与质量", tier: "biz" }
,
  { word: "automate", meaning: "自动化", example: "Automate the process.", exampleCn: "流程自动化。", category: "产品与质量", tier: "biz" }
,
  { word: "scale", meaning: "规模/扩大", example: "Scale up production.", exampleCn: "扩大生产。", category: "产品与质量", tier: "biz" }
,
  { word: "outsource", meaning: "外包", example: "Outsource manufacturing.", exampleCn: "外包制造。", category: "产品与质量", tier: "biz" }
,
  { word: "offshore", meaning: "离岸的/海外的", example: "Offshore production.", exampleCn: "海外生产。", category: "产品与质量", tier: "biz" }
,
  { word: "nearshore", meaning: "近岸的", example: "Nearshore sourcing.", exampleCn: "近岸采购。", category: "产品与质量", tier: "biz" }
,
  { word: "reshore", meaning: "回迁/制造业回流", example: "Reshore manufacturing.", exampleCn: "制造业回流。", category: "产品与质量", tier: "biz" }
,

  // --- 新增: 商务谈判 ---
  { word: "milestone", meaning: "里程碑/节点", example: "Project milestone.", exampleCn: "项目里程碑。", category: "商务谈判", tier: "biz" }
,
  { word: "deliverable", meaning: "交付物", example: "Key deliverable.", exampleCn: "关键交付物。", category: "商务谈判", tier: "biz" }
,
  { word: "scope", meaning: "范围", example: "Project scope.", exampleCn: "项目范围。", category: "商务谈判", tier: "biz" }
,
  { word: "bid", meaning: "投标/出价", example: "Winning bid.", exampleCn: "中标。", category: "商务谈判", tier: "biz" }
,
  { word: "requisition", meaning: "申购/请购单", example: "Purchase requisition.", exampleCn: "请购单。", category: "商务谈判", tier: "biz" }
,
  { word: "authorization", meaning: "授权/批准", example: "Written authorization.", exampleCn: "书面授权。", category: "商务谈判", tier: "biz" }
,
  { word: "signatory", meaning: "签字人", example: "Authorized signatory.", exampleCn: "授权签字人。", category: "商务谈判", tier: "biz" }
,
  { word: "notarize", meaning: "公证", example: "Notarize the document.", exampleCn: "公证文件。", category: "商务谈判", tier: "biz" }
,
  { word: "witness", meaning: "见证人/证人", example: "In front of a witness.", exampleCn: "在见证人面前。", category: "商务谈判", tier: "biz" }
,
  { word: "jurisdiction", meaning: "管辖/司法", example: "Under Chinese jurisdiction.", exampleCn: "中国管辖。", category: "商务谈判", tier: "biz" }
,

  // --- 新增: 支付与金融 ---
  { word: "ledger", meaning: "分类账/总账", example: "General ledger.", exampleCn: "总账。", category: "支付与金融", tier: "biz" }
,
  { word: "journal", meaning: "日记账/分录", example: "Accounting journal.", exampleCn: "会计日记账。", category: "支付与金融", tier: "biz" }
,
  { word: "entry", meaning: "分录/条目", example: "Journal entry.", exampleCn: "日记账分录。", category: "支付与金融", tier: "biz" }
,
  { word: "accrual", meaning: "应计/权责发生", example: "Accrual basis.", exampleCn: "权责发生制。", category: "支付与金融", tier: "biz" }
,
  { word: "amortize", meaning: "摊销/分期偿还", example: "Amortize the cost.", exampleCn: "摊销成本。", category: "支付与金融", tier: "biz" }
,
  { word: "depreciate", meaning: "折旧/贬值", example: "Depreciate over 5 years.", exampleCn: "五年折旧。", category: "支付与金融", tier: "biz" }
,
  { word: "audit", meaning: "审计", example: "Annual audit.", exampleCn: "年度审计。", category: "支付与金融", tier: "biz" }
,
  { word: "reconcile", meaning: "对账/核对", example: "Reconcile the accounts.", exampleCn: "对账。", category: "支付与金融", tier: "biz" }
,
  { word: "fiscal", meaning: "财政的/会计的", example: "Fiscal year.", exampleCn: "财政年度。", category: "支付与金融", tier: "biz" }
,
  { word: "equity", meaning: "股权/权益", example: "Shareholder equity.", exampleCn: "股东权益。", category: "支付与金融", tier: "biz" }
,
  { word: "dividend", meaning: "股息/分红", example: "Stock dividend.", exampleCn: "股票分红。", category: "支付与金融", tier: "biz" }
,
  { word: "portfolio", meaning: "投资组合", example: "Product portfolio.", exampleCn: "产品组合。", category: "支付与金融", tier: "biz" }
,
  { word: "hedge", meaning: "对冲/避险", example: "Hedge the risk.", exampleCn: "对冲风险。", category: "支付与金融", tier: "biz" }
,
  { word: "collateral", meaning: "抵押品/担保", example: "Loan collateral.", exampleCn: "贷款抵押品。", category: "支付与金融", tier: "biz" }
,
  { word: "insolvent", meaning: "破产/资不抵债", example: "The company is insolvent.", exampleCn: "公司已资不抵债。", category: "支付与金融", tier: "biz" }
,
  { word: "liquidate", meaning: "清算/变现", example: "Liquidate assets.", exampleCn: "清算资产。", category: "支付与金融", tier: "biz" }
,
  { word: "bankrupt", meaning: "破产", example: "File for bankruptcy.", exampleCn: "申请破产。", category: "支付与金融", tier: "biz" }
,
  { word: "restructure", meaning: "重组", example: "Debt restructuring.", exampleCn: "债务重组。", category: "支付与金融", tier: "biz" }
,

  // --- 新增: 物流与仓储 ---
  { word: "crate", meaning: "板条箱/木箱", example: "Shipping crate.", exampleCn: "运输木箱。", category: "物流与仓储", tier: "biz" }
,
  { word: "drum", meaning: "桶/圆桶", example: "Oil drum.", exampleCn: "油桶。", category: "物流与仓储", tier: "biz" }
,
  { word: "bale", meaning: "捆/大包", example: "Cotton bale.", exampleCn: "棉花包。", category: "物流与仓储", tier: "biz" }
,
  { word: "seal", meaning: "封条/密封", example: "Container seal.", exampleCn: "集装箱封条。", category: "物流与仓储", tier: "biz" }
,
  { word: "tag", meaning: "标签/吊牌", example: "Price tag.", exampleCn: "价格标签。", category: "物流与仓储", tier: "biz" }
,
  { word: "manifest", meaning: "舱单/清单", example: "Cargo manifest.", exampleCn: "货物舱单。", category: "物流与仓储", tier: "biz" }
,
  { word: "acknowledgement", meaning: "回执/确认", example: "Order acknowledgement.", exampleCn: "订单确认。", category: "物流与仓储", tier: "biz" }
,
  { word: "advise", meaning: "通知/告知", example: "Shipping advise.", exampleCn: "发货通知。", category: "物流与仓储", tier: "biz" }
,
  { word: "shortage", meaning: "短缺/短少", example: "Inventory shortage.", exampleCn: "库存短缺。", category: "物流与仓储", tier: "biz" }
,
  { word: "overage", meaning: "超出/溢装", example: "Weight overage.", exampleCn: "重量超标。", category: "物流与仓储", tier: "biz" }
,
  { word: "discrepancy", meaning: "差异/不符", example: "Quantity discrepancy.", exampleCn: "数量差异。", category: "物流与仓储", tier: "biz" }
,
  { word: "priority", meaning: "优先/优先权", example: "Priority shipping.", exampleCn: "优先配送。", category: "物流与仓储", tier: "biz" }
,

  // --- 新增: 电商运营 ---
  { word: "wishlist", meaning: "心愿单/收藏夹", example: "Add to wishlist.", exampleCn: "加入心愿单。", category: "电商运营", tier: "biz" }
,
  { word: "gateway", meaning: "网关/支付渠道", example: "Payment gateway.", exampleCn: "支付网关。", category: "电商运营", tier: "biz" }
,
  { word: "authorize", meaning: "授权/验证", example: "Authorize payment.", exampleCn: "验证付款。", category: "电商运营", tier: "biz" }
,
  { word: "capture", meaning: "捕获/抓取", example: "Capture payment.", exampleCn: "捕获付款。", category: "电商运营", tier: "biz" }
,
  { word: "void", meaning: "作废/取消", example: "Void a transaction.", exampleCn: "作废交易。", category: "电商运营", tier: "biz" }
,
  { word: "fraud", meaning: "欺诈", example: "Fraud detection.", exampleCn: "欺诈检测。", category: "电商运营", tier: "biz" }
,
  { word: "onboarding", meaning: "入驻/上线", example: "Seller onboarding.", exampleCn: "卖家入驻。", category: "电商运营", tier: "biz" }
,
  { word: "approval", meaning: "审核/批准", example: "Listing approval.", exampleCn: "上架审核。", category: "电商运营", tier: "biz" }
,
  { word: "rejection", meaning: "拒绝/驳回", example: "Product rejection.", exampleCn: "产品驳回。", category: "电商运营", tier: "biz" }
,
  { word: "appeal", meaning: "申诉/上诉", example: "File an appeal.", exampleCn: "提出申诉。", category: "电商运营", tier: "biz" }
,
  { word: "suspend", meaning: "暂停/封停", example: "Account suspended.", exampleCn: "账号被封。", category: "电商运营", tier: "biz" }
,
  { word: "reinstate", meaning: "恢复/恢复权限", example: "Reinstate the account.", exampleCn: "恢复账号。", category: "电商运营", tier: "biz" }
,

  // --- 新增: 营销与流量 ---
  { word: "personalize", meaning: "个性化", example: "Personalize the email.", exampleCn: "个性化邮件。", category: "营销与流量", tier: "biz" }
,
  { word: "customize", meaning: "定制", example: "Customize your order.", exampleCn: "定制订单。", category: "营销与流量", tier: "biz" }
,
  { word: "upsell", meaning: "追加销售/升级销售", example: "Upsell opportunity.", exampleCn: "追加销售机会。", category: "营销与流量", tier: "biz" }
,
  { word: "cross-sell", meaning: "交叉销售", example: "Cross-sell products.", exampleCn: "交叉销售。", category: "营销与流量", tier: "biz" }
,
  { word: "retention", meaning: "留存/保留", example: "Customer retention.", exampleCn: "客户留存。", category: "营销与流量", tier: "biz" }
,
  { word: "churn", meaning: "流失/客户流失", example: "Reduce churn rate.", exampleCn: "降低流失率。", category: "营销与流量", tier: "biz" }
,
  { word: "activation", meaning: "激活/启用", example: "Account activation.", exampleCn: "账户激活。", category: "营销与流量", tier: "biz" }
,
  { word: "attribution", meaning: "归因/来源追踪", example: "Ad attribution.", exampleCn: "广告归因。", category: "营销与流量", tier: "biz" }
,
  { word: "click-through", meaning: "点击率", example: "Click-through rate.", exampleCn: "点击率。", category: "营销与流量", tier: "biz" }
,
  { word: "bounce", meaning: "跳出/弹回", example: "Bounce rate.", exampleCn: "跳出率。", category: "营销与流量", tier: "biz" }
,
  { word: "dwell", meaning: "停留/驻留", example: "Dwell time.", exampleCn: "停留时间。", category: "营销与流量", tier: "biz" }
,
  { word: "scroll", meaning: "滚动", example: "Scroll depth.", exampleCn: "滚动深度。", category: "营销与流量", tier: "biz" }
,
  { word: "heatmap", meaning: "热力图", example: "Click heatmap.", exampleCn: "点击热力图。", category: "营销与流量", tier: "biz" }
,
  { word: "split-test", meaning: "A/B测试", example: "Run a split test.", exampleCn: "做A/B测试。", category: "营销与流量", tier: "biz" }
,
  { word: "variant", meaning: "变体/版本", example: "Test variant.", exampleCn: "测试版本。", category: "营销与流量", tier: "biz" }
,
  { word: "baseline", meaning: "基线/基准", example: "Baseline metric.", exampleCn: "基线指标。", category: "营销与流量", tier: "biz" }
,
  { word: "lift", meaning: "提升/增长幅度", example: "5% lift in sales.", exampleCn: "销售额提升5%。", category: "营销与流量", tier: "biz" }
,
  {     word: "voucher", meaning: "代金券", example: "Gift voucher.", exampleCn: "礼品券。", category: "营销与流量", tier: "biz" },
  {     word: "headache", meaning: "头痛", example: "I have a headache.", exampleCn: "我头痛。", category: "健康与身体", tier: "high" },
  {     word: "fever", meaning: "发烧", example: "I have a fever.", exampleCn: "我发烧了。", category: "健康与身体", tier: "high" },
  {     word: "cough", meaning: "咳嗽", example: "A bad cough.", exampleCn: "严重咳嗽。", category: "健康与身体", tier: "high" },
  {     word: "shoulder", meaning: "肩膀", example: "My shoulder is sore.", exampleCn: "我肩膀酸痛。", category: "健康与身体", tier: "high" },
  {     word: "knee", meaning: "膝盖", example: "My knee hurts.", exampleCn: "我膝盖痛。", category: "健康与身体", tier: "high" },
  {     word: "neck", meaning: "脖子", example: "Neck pain.", exampleCn: "脖子痛。", category: "健康与身体", tier: "high" },
  {     word: "brain", meaning: "大脑", example: "Use your brain.", exampleCn: "动动脑子。", category: "健康与身体", tier: "high" },
  {     word: "bone", meaning: "骨头", example: "Broken bone.", exampleCn: "骨折。", category: "健康与身体", tier: "high" },
  {     word: "muscle", meaning: "肌肉", example: "Muscle pain.", exampleCn: "肌肉痛。", category: "健康与身体", tier: "high" },
  {     word: "disease", meaning: "疾病", example: "Heart disease.", exampleCn: "心脏病。", category: "健康与身体", tier: "high" },
  {     word: "virus", meaning: "病毒", example: "Computer virus.", exampleCn: "电脑病毒。", category: "健康与身体", tier: "high" },
  {     word: "infection", meaning: "感染", example: "Skin infection.", exampleCn: "皮肤感染。", category: "健康与身体", tier: "high" },
  {     word: "allergy", meaning: "过敏", example: "Food allergy.", exampleCn: "食物过敏。", category: "健康与身体", tier: "high" },
  {     word: "pill", meaning: "药丸", example: "Take one pill.", exampleCn: "吃一片。", category: "健康与身体", tier: "high" },
  {     word: "cream", meaning: "乳霜/面霜", example: "Skin cream.", exampleCn: "护肤霜。", category: "健康与身体", tier: "high" },
  {     word: "engine", meaning: "引擎/发动机", example: "Start the engine.", exampleCn: "发动引擎。", category: "出行与交通", tier: "high" },
  {     word: "wheel", meaning: "轮子/方向盘", example: "Four wheels.", exampleCn: "四个轮子。", category: "出行与交通", tier: "high" },
  {     word: "seat", meaning: "座位", example: "Take a seat.", exampleCn: "请坐。", category: "出行与交通", tier: "high" },
  {     word: "passenger", meaning: "乘客", example: "One passenger only.", exampleCn: "只限一位乘客。", category: "出行与交通", tier: "high" },
  {     word: "highway", meaning: "高速公路", example: "On the highway.", exampleCn: "在高速上。", category: "出行与交通", tier: "high" },
  {     word: "crossing", meaning: "十字路口/横穿", example: "Pedestrian crossing.", exampleCn: "人行横道。", category: "出行与交通", tier: "high" },
  {     word: "parking", meaning: "停车", example: "Free parking.", exampleCn: "免费停车。", category: "出行与交通", tier: "high" },
  {     word: "gas", meaning: "汽油/燃气", example: "Gas station.", exampleCn: "加油站。", category: "出行与交通", tier: "high" },
  {     word: "petrol", meaning: "汽油", example: "Petrol price.", exampleCn: "汽油价格。", category: "出行与交通", tier: "high" },
  {     word: "boarding", meaning: "登机/上车", example: "Boarding pass.", exampleCn: "登机牌。", category: "出行与交通", tier: "high" },
  {     word: "luggage", meaning: "行李", example: "Carry your luggage.", exampleCn: "拿行李。", category: "出行与交通", tier: "high" },
  {     word: "suitcase", meaning: "行李箱", example: "Pack your suitcase.", exampleCn: "收拾行李箱。", category: "出行与交通", tier: "high" },
  {     word: "visa", meaning: "签证", example: "Apply for a visa.", exampleCn: "申请签证。", category: "出行与交通", tier: "high" },
  {     word: "hotel", meaning: "酒店/宾馆", example: "Book a hotel.", exampleCn: "订酒店。", category: "出行与交通", tier: "high" },
  {     word: "reservation", meaning: "预订", example: "Make a reservation.", exampleCn: "预订。", category: "出行与交通", tier: "high" },
  {     word: "check-in", meaning: "办理入住/值机", example: "Online check-in.", exampleCn: "在线值机。", category: "出行与交通", tier: "high" },
  {     word: "checkout", meaning: "退房/结账", example: "Late checkout.", exampleCn: "延迟退房。", category: "出行与交通", tier: "high" },
  {     word: "departure", meaning: "出发/离境", example: "Departure time.", exampleCn: "出发时间。", category: "出行与交通", tier: "high" },
  {     word: "arrival", meaning: "到达/入境", example: "Arrival hall.", exampleCn: "到达大厅。", category: "出行与交通", tier: "high" },
  {     word: "delay", meaning: "延迟/耽误", example: "Flight delay.", exampleCn: "航班延误。", category: "出行与交通", tier: "high" },
  {     word: "cart", meaning: "购物车", example: "Add to cart.", exampleCn: "加购物车。", category: "购物与消费", tier: "high" },
  {     word: "package", meaning: "包裹/包装", example: "Track your package.", exampleCn: "追踪包裹。", category: "购物与消费", tier: "high" },
  {     word: "parcel", meaning: "包裹/邮包", example: "Send a parcel.", exampleCn: "寄包裹。", category: "购物与消费", tier: "high" },
  {     word: "half price", meaning: "半价", example: "Half price sale.", exampleCn: "半价促销。", category: "购物与消费", tier: "high" },
  {     word: "bargain", meaning: "便宜货/讨价还价", example: "A real bargain.", exampleCn: "真便宜。", category: "购物与消费", tier: "high" },
  {     word: "second-hand", meaning: "二手的", example: "Second-hand goods.", exampleCn: "二手货。", category: "购物与消费", tier: "high" },
  {     word: "used", meaning: "用过的/二手的", example: "Used items.", exampleCn: "二手商品。", category: "购物与消费", tier: "high" },
  {     word: "brand new", meaning: "全新的", example: "Brand new product.", exampleCn: "全新产品。", category: "购物与消费", tier: "high" },
  {     word: "quarter", meaning: "四分之一/季度", example: "First quarter.", exampleCn: "第一季度。", category: "时间与日期", tier: "high" },
  {     word: "annual", meaning: "每年的/年度的", example: "Annual report.", exampleCn: "年度报告。", category: "时间与日期", tier: "high" },
  {     word: "monthly", meaning: "每月的", example: "Monthly payment.", exampleCn: "月付。", category: "时间与日期", tier: "high" },
  {     word: "weekly", meaning: "每周的", example: "Weekly meeting.", exampleCn: "周会。", category: "时间与日期", tier: "high" },
  {     word: "daily", meaning: "每天的", example: "Daily routine.", exampleCn: "日常。", category: "时间与日期", tier: "high" },
  {     word: "midnight", meaning: "午夜", example: "Before midnight.", exampleCn: "午夜前。", category: "时间与日期", tier: "high" },
  {     word: "noon", meaning: "中午", example: "At noon.", exampleCn: "中午。", category: "时间与日期", tier: "high" },
  {     word: "dawn", meaning: "黎明/破晓", example: "At dawn.", exampleCn: "黎明时。", category: "时间与日期", tier: "high" },
  {     word: "dusk", meaning: "黄昏", example: "At dusk.", exampleCn: "黄昏时。", category: "时间与日期", tier: "high" },
  {     word: "appointment", meaning: "预约/约会", example: "Make an appointment.", exampleCn: "预约。", category: "时间与日期", tier: "high" },
  {     word: "holiday", meaning: "假期/节日", example: "Public holiday.", exampleCn: "公共假期。", category: "时间与日期", tier: "high" },
  {     word: "vacation", meaning: "休假/假期", example: "Summer vacation.", exampleCn: "暑假。", category: "时间与日期", tier: "high" },
  {     word: "festival", meaning: "节日", example: "Spring Festival.", exampleCn: "春节。", category: "时间与日期", tier: "high" },
  {     word: "comfortable", meaning: "舒服的", example: "Comfortable shoes.", exampleCn: "舒适的鞋子。", category: "描述性质", tier: "high" },
  {     word: "terrible", meaning: "糟糕的", example: "Terrible quality.", exampleCn: "质量糟透了。", category: "描述性质", tier: "high" },
  {     word: "wonderful", meaning: "极好的", example: "Wonderful service.", exampleCn: "服务很棒。", category: "描述性质", tier: "high" },
  {     word: "excellent", meaning: "优秀的", example: "Excellent quality.", exampleCn: "品质优秀。", category: "描述性质", tier: "high" },
  {     word: "perfect", meaning: "完美的", example: "A perfect match.", exampleCn: "完美匹配。", category: "描述性质", tier: "high" },
  {     word: "awful", meaning: "很坏的/讨厌的", example: "Awful smell.", exampleCn: "难闻的气味。", category: "描述性质", tier: "high" },
  {     word: "strange", meaning: "奇怪的", example: "Strange behavior.", exampleCn: "奇怪的行为。", category: "描述性质", tier: "high" },
  {     word: "weird", meaning: "怪异的", example: "Weird design.", exampleCn: "怪异的设计。", category: "描述性质", tier: "high" },
  {     word: "ordinary", meaning: "普通的", example: "Ordinary products.", exampleCn: "普通产品。", category: "描述性质", tier: "high" },
  {     word: "extra", meaning: "额外的/特别", example: "Extra charge.", exampleCn: "额外收费。", category: "描述性质", tier: "high" },
  {     word: "basic", meaning: "基本的/基础的", example: "Basic needs.", exampleCn: "基本需求。", category: "描述性质", tier: "high" },
  {     word: "advanced", meaning: "高级的/先进的", example: "Advanced technology.", exampleCn: "先进技术。", category: "描述性质", tier: "high" },
  {     word: "modern", meaning: "现代的", example: "Modern design.", exampleCn: "现代设计。", category: "描述性质", tier: "high" },
  {     word: "traditional", meaning: "传统的", example: "Traditional style.", exampleCn: "传统风格。", category: "描述性质", tier: "high" },
  {     word: "ancient", meaning: "古老的", example: "Ancient history.", exampleCn: "古老的历史。", category: "描述性质", tier: "high" },
  {     word: "natural", meaning: "自然的", example: "Natural materials.", exampleCn: "天然材料。", category: "描述性质", tier: "high" },
  {     word: "official", meaning: "官方的/正式的", example: "Official website.", exampleCn: "官网。", category: "描述性质", tier: "high" },
  {     word: "private", meaning: "私人的/私密的", example: "Private message.", exampleCn: "私信。", category: "描述性质", tier: "high" },
  {     word: "public", meaning: "公共的/公开的", example: "Public holiday.", exampleCn: "公共假期。", category: "描述性质", tier: "high" },
  {     word: "local", meaning: "本地的/当地的", example: "Local supplier.", exampleCn: "本地供应商。", category: "描述性质", tier: "high" },
  {     word: "foreign", meaning: "外国的", example: "Foreign trade.", exampleCn: "外贸。", category: "描述性质", tier: "high" },
  {     word: "international", meaning: "国际的", example: "International shipping.", exampleCn: "国际运输。", category: "描述性质", tier: "high" },
  {     word: "domestic", meaning: "国内的", example: "Domestic market.", exampleCn: "国内市场。", category: "描述性质", tier: "high" },
  {     word: "global", meaning: "全球的", example: "Global market.", exampleCn: "全球市场。", category: "描述性质", tier: "high" },
  {     word: "regular", meaning: "定期的/常规的", example: "Regular customer.", exampleCn: "常客。", category: "描述性质", tier: "high" },
  {     word: "temporary", meaning: "临时的", example: "Temporary worker.", exampleCn: "临时工。", category: "描述性质", tier: "high" },
  {     word: "permanent", meaning: "永久的/固定的", example: "Permanent address.", exampleCn: "固定地址。", category: "描述性质", tier: "high" },
  {     word: "huge", meaning: "巨大的", example: "A huge order.", exampleCn: "大订单。", category: "描述性质", tier: "high" },
  {     word: "tiny", meaning: "微小的", example: "A tiny detail.", exampleCn: "一个小细节。", category: "描述性质", tier: "high" },
  {     word: "excited", meaning: "兴奋的", example: "I'm so excited!", exampleCn: "我太兴奋了！", category: "情感与态度", tier: "high" },
  {     word: "nervous", meaning: "紧张的", example: "I feel nervous.", exampleCn: "我感到紧张。", category: "情感与态度", tier: "high" },
  {     word: "calm", meaning: "冷静的/平静的", example: "Stay calm.", exampleCn: "保持冷静。", category: "情感与态度", tier: "high" },
  {     word: "confident", meaning: "自信的", example: "I feel confident.", exampleCn: "我感到自信。", category: "情感与态度", tier: "high" },
  {     word: "shy", meaning: "害羞的", example: "Don't be shy.", exampleCn: "别害羞。", category: "情感与态度", tier: "high" },
  {     word: "jealous", meaning: "嫉妒的", example: "Don't be jealous.", exampleCn: "别嫉妒。", category: "情感与态度", tier: "high" },
  {     word: "grateful", meaning: "感激的", example: "I'm very grateful.", exampleCn: "我非常感激。", category: "情感与态度", tier: "high" },
  {     word: "patient", meaning: "耐心的", example: "Be patient.", exampleCn: "耐心点。", category: "情感与态度", tier: "high" },
  {     word: "curious", meaning: "好奇的", example: "I'm just curious.", exampleCn: "我只是好奇。", category: "情感与态度", tier: "high" },
  {     word: "confused", meaning: "困惑的", example: "I'm a bit confused.", exampleCn: "我有点困惑。", category: "情感与态度", tier: "high" },
  {     word: "disappointed", meaning: "失望的", example: "I'm disappointed.", exampleCn: "我很失望。", category: "情感与态度", tier: "high" },
  {     word: "satisfied", meaning: "满意的", example: "Are you satisfied?", exampleCn: "你满意吗？", category: "情感与态度", tier: "high" },
  {     word: "embarrassed", meaning: "尴尬的", example: "I felt embarrassed.", exampleCn: "我感到尴尬。", category: "情感与态度", tier: "high" },
  {     word: "lonely", meaning: "孤独的", example: "Feeling lonely.", exampleCn: "感到孤独。", category: "情感与态度", tier: "high" },
  {     word: "relaxed", meaning: "放松的", example: "Feel relaxed.", exampleCn: "感到放松。", category: "情感与态度", tier: "high" },
  {     word: "stressed", meaning: "有压力的/紧张", example: "I'm so stressed.", exampleCn: "我压力好大。", category: "情感与态度", tier: "high" },
  {     word: "annoyed", meaning: "恼怒的/烦的", example: "I'm a little annoyed.", exampleCn: "我有点烦。", category: "情感与态度", tier: "high" },
  {     word: "upset", meaning: "不高兴的/心烦的", example: "She looks upset.", exampleCn: "她看起来不高兴。", category: "情感与态度", tier: "high" },
  {     word: "shocked", meaning: "震惊的", example: "I was shocked.", exampleCn: "我震惊了。", category: "情感与态度", tier: "high" },
  {     word: "frightened", meaning: "害怕的/受惊的", example: "I felt frightened.", exampleCn: "我很害怕。", category: "情感与态度", tier: "high" },
  {     word: "add", meaning: "添加/加", example: "Add to cart.", exampleCn: "加入购物车。", category: "基本动作", tier: "high" },
  {     word: "remove", meaning: "移除/去掉", example: "Remove from list.", exampleCn: "从列表移除。", category: "基本动作", tier: "high" },
  {     word: "replace", meaning: "替换/更换", example: "Replace the old one.", exampleCn: "换掉旧的。", category: "基本动作", tier: "high" },
  {     word: "repair", meaning: "修理/修复", example: "Can you repair it?", exampleCn: "你能修吗？", category: "基本动作", tier: "high" },
  {     word: "collect", meaning: "收集/领取", example: "Collect the package.", exampleCn: "取包裹。", category: "基本动作", tier: "high" },
  {     word: "deliver", meaning: "递送/交货", example: "Deliver on time.", exampleCn: "按时交货。", category: "基本动作", tier: "high" },
  {     word: "attach", meaning: "附上/粘贴", example: "Please find the file attached.", exampleCn: "请查收附件。", category: "基本动作", tier: "high" },
  {     word: "fill", meaning: "填写/装满", example: "Fill out this form.", exampleCn: "填写这个表格。", category: "基本动作", tier: "high" },
  {     word: "print", meaning: "打印", example: "Print the label.", exampleCn: "打印标签。", category: "基本动作", tier: "high" },
  {     word: "scan", meaning: "扫描", example: "Scan the QR code.", exampleCn: "扫二维码。", category: "基本动作", tier: "high" },
  {     word: "copy", meaning: "复制/复印", example: "Copy and paste.", exampleCn: "复制粘贴。", category: "基本动作", tier: "high" },
  {     word: "paste", meaning: "粘贴", example: "Copy and paste.", exampleCn: "复制粘贴。", category: "基本动作", tier: "high" },
  {     word: "sort", meaning: "整理/分类", example: "Sort by price.", exampleCn: "按价格排序。", category: "基本动作", tier: "high" },
  {     word: "filter", meaning: "过滤/筛选", example: "Filter by category.", exampleCn: "按类别筛选。", category: "基本动作", tier: "high" },
  {     word: "search", meaning: "搜索/查找", example: "Search online.", exampleCn: "网上搜索。", category: "基本动作", tier: "high" },
  {     word: "share", meaning: "分享/共享", example: "Share this link.", exampleCn: "分享这个链接。", category: "基本动作", tier: "high" },
  {     word: "follow", meaning: "跟随/关注", example: "Follow us on social media.", exampleCn: "在社交媒体关注我们。", category: "基本动作", tier: "high" },
  {     word: "join", meaning: "加入/参加", example: "Join our team.", exampleCn: "加入我们团队。", category: "基本动作", tier: "high" },
  {     word: "attend", meaning: "参加/出席", example: "Attend the meeting.", exampleCn: "参加会议。", category: "基本动作", tier: "high" },
  {     word: "avoid", meaning: "避免", example: "Avoid mistakes.", exampleCn: "避免错误。", category: "基本动作", tier: "high" },
  {     word: "prevent", meaning: "防止/预防", example: "Prevent damage.", exampleCn: "防止损坏。", category: "基本动作", tier: "high" },
  {     word: "protect", meaning: "保护", example: "Protect your account.", exampleCn: "保护你的账户。", category: "基本动作", tier: "high" },
  {     word: "support", meaning: "支持", example: "Customer support.", exampleCn: "客户支持。", category: "基本动作", tier: "high" },
  {     word: "provide", meaning: "提供/给予", example: "Provide good service.", exampleCn: "提供好服务。", category: "基本动作", tier: "high" },
  {     word: "contain", meaning: "包含/容纳", example: "Contains small parts.", exampleCn: "含小零件。", category: "基本动作", tier: "high" },
  {     word: "require", meaning: "要求/需要", example: "This item requires assembly.", exampleCn: "此商品需要组装。", category: "基本动作", tier: "high" },
  {     word: "allow", meaning: "允许/让", example: "The system doesn't allow it.", exampleCn: "系统不允许。", category: "基本动作", tier: "high" },
  {     word: "force", meaning: "强迫/强制", example: "Don't force it.", exampleCn: "别强来。", category: "基本动作", tier: "high" },
  {     word: "recommend", meaning: "推荐", example: "I recommend this product.", exampleCn: "我推荐这个产品。", category: "基本动作", tier: "high" },
  {     word: "consider", meaning: "考虑", example: "Consider the price.", exampleCn: "考虑一下价格。", category: "基本动作", tier: "high" },
  {     word: "measure", meaning: "测量/衡量", example: "Measure the size.", exampleCn: "量尺寸。", category: "基本动作", tier: "high" },
  {     word: "count", meaning: "数/计数", example: "Count the items.", exampleCn: "数一下物品。", category: "基本动作", tier: "high" },
  {     word: "calculate", meaning: "计算", example: "Calculate the total.", exampleCn: "算总价。", category: "基本动作", tier: "high" },
  {     word: "improve", meaning: "改进/提高", example: "Improve your English.", exampleCn: "提高你的英语。", category: "基本动作", tier: "high" },
  {     word: "increase", meaning: "增加/提高", example: "Increase sales.", exampleCn: "提高销量。", category: "基本动作", tier: "high" },
  {     word: "reduce", meaning: "减少/降低", example: "Reduce costs.", exampleCn: "降低成本。", category: "基本动作", tier: "high" },
  {     word: "expand", meaning: "扩展/扩大", example: "Expand your business.", exampleCn: "扩展你的生意。", category: "基本动作", tier: "high" },
  {     word: "develop", meaning: "开发/发展", example: "Develop new products.", exampleCn: "开发新品。", category: "基本动作", tier: "high" },
  {     word: "manage", meaning: "管理/经营", example: "Manage your store.", exampleCn: "管理你的店铺。", category: "基本动作", tier: "high" },
  {     word: "organize", meaning: "组织/整理", example: "Organize your files.", exampleCn: "整理文件。", category: "基本动作", tier: "high" },
  {     word: "control", meaning: "控制/管理", example: "Quality control.", exampleCn: "质量控制。", category: "基本动作", tier: "high" },
  {     word: "handle", meaning: "处理/应对", example: "I can handle it.", exampleCn: "我能处理。", category: "基本动作", tier: "high" },
  {     word: "diary", meaning: "日记", example: "Keep a diary.", exampleCn: "写日记。", category: "日常生活", tier: "high" },
  {     word: "candle", meaning: "蜡烛", example: "Light a candle.", exampleCn: "点蜡烛。", category: "日常生活", tier: "high" },
  {     word: "matches", meaning: "火柴", example: "A box of matches.", exampleCn: "一盒火柴。", category: "日常生活", tier: "high" },
  {     word: "lighter", meaning: "打火机", example: "A cigarette lighter.", exampleCn: "打火机。", category: "日常生活", tier: "high" },
  {     word: "scissors", meaning: "剪刀", example: "A pair of scissors.", exampleCn: "一把剪刀。", category: "日常生活", tier: "high" },
  {     word: "tape", meaning: "胶带", example: "Packaging tape.", exampleCn: "封箱胶带。", category: "日常生活", tier: "high" },
  {     word: "glue", meaning: "胶水", example: "Super glue.", exampleCn: "强力胶。", category: "日常生活", tier: "high" },
  {     word: "envelope", meaning: "信封", example: "Put in an envelope.", exampleCn: "放进信封。", category: "日常生活", tier: "high" },
  {     word: "stamp", meaning: "邮票/印章", example: "Postage stamp.", exampleCn: "邮票。", category: "日常生活", tier: "high" },
  {     word: "purse", meaning: "手提包/钱包(女)", example: "A leather purse.", exampleCn: "皮钱包。", category: "日常生活", tier: "high" },
  {     word: "mask", meaning: "面具/口罩", example: "Wear a mask.", exampleCn: "戴口罩。", category: "日常生活", tier: "high" },
  {     word: "fan", meaning: "风扇/粉丝", example: "Electric fan.", exampleCn: "电风扇。", category: "日常生活", tier: "high" },
  {     word: "heater", meaning: "加热器/暖气", example: "Room heater.", exampleCn: "房间暖气。", category: "日常生活", tier: "high" },
  {     word: "air conditioner", meaning: "空调", example: "Turn on the air conditioner.", exampleCn: "开空调。", category: "日常生活", tier: "high" },
  {     word: "freezer", meaning: "冷冻柜", example: "Keep in the freezer.", exampleCn: "放冷冻。", category: "日常生活", tier: "high" },
  {     word: "stove", meaning: "炉灶", example: "Gas stove.", exampleCn: "煤气灶。", category: "日常生活", tier: "high" },
  {     word: "sink", meaning: "水槽/洗脸盆", example: "Kitchen sink.", exampleCn: "厨房水槽。", category: "日常生活", tier: "high" },
  {     word: "faucet", meaning: "水龙头", example: "Turn on the faucet.", exampleCn: "开水龙头。", category: "日常生活", tier: "high" },
  {     word: "shower", meaning: "淋浴", example: "Take a shower.", exampleCn: "淋浴。", category: "日常生活", tier: "high" },
  {     word: "bathtub", meaning: "浴缸", example: "Soak in the bathtub.", exampleCn: "泡浴缸。", category: "日常生活", tier: "high" },
  {     word: "toilet", meaning: "马桶/厕所", example: "Where is the toilet?", exampleCn: "洗手间在哪？", category: "日常生活", tier: "high" },
  {     word: "trash", meaning: "垃圾", example: "Take out the trash.", exampleCn: "扔垃圾。", category: "日常生活", tier: "high" },
  {     word: "garbage", meaning: "垃圾", example: "Garbage can.", exampleCn: "垃圾桶。", category: "日常生活", tier: "high" },
  {     word: "laundry", meaning: "洗衣/要洗的衣服", example: "Do the laundry.", exampleCn: "洗衣服。", category: "日常生活", tier: "high" },
  {     word: "iron", meaning: "熨斗/铁", example: "Iron the clothes.", exampleCn: "熨衣服。", category: "日常生活", tier: "high" },
  {     word: "broom", meaning: "扫帚", example: "Sweep with a broom.", exampleCn: "用扫帚扫。", category: "日常生活", tier: "high" },
  {     word: "mop", meaning: "拖把", example: "Mop the floor.", exampleCn: "拖地。", category: "日常生活", tier: "high" },
  {     word: "bucket", meaning: "水桶", example: "A bucket of water.", exampleCn: "一桶水。", category: "日常生活", tier: "high" },
  {     word: "ladder", meaning: "梯子", example: "Climb the ladder.", exampleCn: "爬梯子。", category: "日常生活", tier: "high" },
  {     word: "message", meaning: "消息/信息", example: "Send me a message.", exampleCn: "给我发消息。", category: "沟通与表达", tier: "high" },
  {     word: "reply", meaning: "回复/回答", example: "I'm waiting for your reply.", exampleCn: "我在等你的回复。", category: "沟通与表达", tier: "high" },
  {     word: "respond", meaning: "回应/回复", example: "Please respond ASAP.", exampleCn: "请尽快回复。", category: "沟通与表达", tier: "high" },
  {     word: "mention", meaning: "提到/提及", example: "Don't mention it.", exampleCn: "不客气。", category: "沟通与表达", tier: "high" },
  {     word: "discuss", meaning: "讨论", example: "Let's discuss the details.", exampleCn: "我们讨论一下细节。", category: "沟通与表达", tier: "high" },
  {     word: "argue", meaning: "争论/争吵", example: "Don't argue with customers.", exampleCn: "不要和客户争吵。", category: "沟通与表达", tier: "high" },
  {     word: "complain", meaning: "抱怨/投诉", example: "Customers complain about the price.", exampleCn: "客户抱怨价格。", category: "沟通与表达", tier: "high" },
  {     word: "praise", meaning: "表扬/称赞", example: "Praise their good work.", exampleCn: "表扬他们的好工作。", category: "沟通与表达", tier: "high" },
  {     word: "thank", meaning: "感谢", example: "Thank you for your help.", exampleCn: "谢谢你的帮助。", category: "沟通与表达", tier: "high" },
  {     word: "greet", meaning: "问候/打招呼", example: "Greet the customer warmly.", exampleCn: "热情问候客户。", category: "沟通与表达", tier: "high" },
  {     word: "introduce", meaning: "介绍", example: "Let me introduce myself.", exampleCn: "让我介绍一下自己。", category: "沟通与表达", tier: "high" },
  {     word: "announce", meaning: "宣布/公布", example: "Announce a new product.", exampleCn: "发布新品。", category: "沟通与表达", tier: "high" },
  {     word: "deny", meaning: "否认", example: "I don't deny it.", exampleCn: "我不否认。", category: "沟通与表达", tier: "high" },
  {     word: "admit", meaning: "承认", example: "I admit I made a mistake.", exampleCn: "我承认我犯了错。", category: "沟通与表达", tier: "high" },
  {     word: "insist", meaning: "坚持说/坚持要求", example: "If you insist.", exampleCn: "如果你坚持的话。", category: "沟通与表达", tier: "high" },
  {     word: "warn", meaning: "警告/提醒", example: "I warned you about the delay.", exampleCn: "我提醒过你延迟的事。", category: "沟通与表达", tier: "high" },
  {     word: "amount", meaning: "数量/金额", example: "A large amount.", exampleCn: "大数量。", category: "数量与程度", tier: "high" },
  {     word: "total", meaning: "总计/总数", example: "Total cost.", exampleCn: "总成本。", category: "数量与程度", tier: "high" },
  {     word: "double", meaning: "两倍/双的", example: "Double check.", exampleCn: "再确认。", category: "数量与程度", tier: "high" },
  {     word: "triple", meaning: "三倍", example: "Triple the price.", exampleCn: "三倍价格。", category: "数量与程度", tier: "high" },
  {     word: "average", meaning: "平均/一般的", example: "Average price.", exampleCn: "均价。", category: "数量与程度", tier: "high" },
  {     word: "maximum", meaning: "最大/最多", example: "Maximum quantity.", exampleCn: "最大数量。", category: "数量与程度", tier: "high" },
  {     word: "minimum", meaning: "最小/最少", example: "Minimum order quantity.", exampleCn: "最小起订量。", category: "数量与程度", tier: "high" },
  {     word: "exact", meaning: "精确的/确切的", example: "The exact amount.", exampleCn: "精确金额。", category: "数量与程度", tier: "high" },
  {     word: "approximate", meaning: "大约的/近似的", example: "Approximate weight.", exampleCn: "大约重量。", category: "数量与程度", tier: "high" },
  {     word: "plus", meaning: "加/外加", example: "Cost plus shipping.", exampleCn: "成本加运费。", category: "数量与程度", tier: "high" },
  {     word: "minus", meaning: "减", example: "Price minus discount.", exampleCn: "价格减折扣。", category: "数量与程度", tier: "high" },
  {     word: "percent", meaning: "百分之", example: "Ten percent off.", exampleCn: "打九折。", category: "数量与程度", tier: "high" },
  {     word: "variation", meaning: "变体/变种", example: "Size and color variations.", exampleCn: "尺码和颜色变体。", category: "电商运营", tier: "biz" },
  {     word: "parent ASIN", meaning: "父ASIN", example: "Create a parent ASIN.", exampleCn: "创建父ASIN。", category: "电商运营", tier: "biz" },
  {     word: "child ASIN", meaning: "子ASIN", example: "Child ASIN for each color.", exampleCn: "每个颜色一个子ASIN。", category: "电商运营", tier: "biz" },
  {     word: "buy box", meaning: "购物车/黄金购物车", example: "Win the buy box.", exampleCn: "赢得购物车。", category: "电商运营", tier: "biz" },
  {     word: "suppressed", meaning: "被抑制/被下架", example: "Suppressed listing.", exampleCn: "被抑制的Listing。", category: "电商运营", tier: "biz" },
  {     word: "gating", meaning: "类目审核/门槛", example: "Category gating.", exampleCn: "类目审核。", category: "电商运营", tier: "biz" },
  {     word: "ungating", meaning: "解除类目限制", example: "Get ungated in this category.", exampleCn: "获得该类目销售权限。", category: "电商运营", tier: "biz" },
  {     word: "hijacker", meaning: "跟卖者/劫持者", example: "Report a hijacker.", exampleCn: "举报跟卖。", category: "电商运营", tier: "biz" },
  {     word: "counterfeit", meaning: "假冒的/仿冒品", example: "Counterfeit complaint.", exampleCn: "假货投诉。", category: "电商运营", tier: "biz" },
  {     word: "suspension", meaning: "暂停/封号", example: "Account suspension.", exampleCn: "账号被封。", category: "电商运营", tier: "biz" },
  {     word: "reinstatement", meaning: "恢复/申诉恢复", example: "Account reinstatement.", exampleCn: "账号申诉恢复。", category: "电商运营", tier: "biz" },
  {     word: "arbitrage", meaning: "套利/倒卖", example: "Online arbitrage.", exampleCn: "线上套利。", category: "电商运营", tier: "biz" },
  {     word: "private label", meaning: "自有品牌", example: "Private label products.", exampleCn: "自有品牌产品。", category: "电商运营", tier: "biz" },
  {     word: "bundling", meaning: "捆绑销售", example: "Product bundling.", exampleCn: "产品捆绑。", category: "电商运营", tier: "biz" },
  {     word: "launch", meaning: "发布/推出", example: "Launch a new product.", exampleCn: "发布新品。", category: "电商运营", tier: "biz" },
  {     word: "ranking", meaning: "排名", example: "Keyword ranking.", exampleCn: "关键词排名。", category: "电商运营", tier: "biz" },
  {     word: "indexation", meaning: "索引/收录", example: "Keyword indexation.", exampleCn: "关键词收录。", category: "电商运营", tier: "biz" },
  {     word: "crawl", meaning: "爬取/抓取", example: "Google crawl your site.", exampleCn: "Google抓取你的网站。", category: "电商运营", tier: "biz" },
  {     word: "PPC", meaning: "按点击付费广告", example: "PPC campaign.", exampleCn: "PPC广告活动。", category: "营销与流量", tier: "biz" },
  {     word: "sponsored", meaning: "赞助的/广告位", example: "Sponsored products.", exampleCn: "广告产品。", category: "营销与流量", tier: "biz" },
  {     word: "organic", meaning: "自然的/非广告的", example: "Organic traffic.", exampleCn: "自然流量。", category: "营销与流量", tier: "biz" },
  {     word: "viral", meaning: "病毒式传播/爆款", example: "Go viral.", exampleCn: "爆红。", category: "营销与流量", tier: "biz" },
  {     word: "trending", meaning: "热门的/流行的", example: "Trending products.", exampleCn: "热门产品。", category: "营销与流量", tier: "biz" },
  {     word: "niche", meaning: "利基市场/细分", example: "Find your niche.", exampleCn: "找到你的细分市场。", category: "营销与流量", tier: "biz" },
  {     word: "positioning", meaning: "定位", example: "Brand positioning.", exampleCn: "品牌定位。", category: "营销与流量", tier: "biz" },
  {     word: "rebranding", meaning: "品牌重塑", example: "Company rebranding.", exampleCn: "公司品牌重塑。", category: "营销与流量", tier: "biz" },
  {     word: "copywriting", meaning: "文案写作", example: "Good copywriting sells.", exampleCn: "好文案能卖货。", category: "营销与流量", tier: "biz" },
  {     word: "storytelling", meaning: "讲故事/叙事", example: "Brand storytelling.", exampleCn: "品牌故事。", category: "营销与流量", tier: "biz" },
  {     word: "engagement", meaning: "互动/参与度", example: "Customer engagement.", exampleCn: "客户互动。", category: "营销与流量", tier: "biz" },
  {     word: "reach", meaning: "触达/覆盖范围", example: "Increase your reach.", exampleCn: "扩大覆盖范围。", category: "营销与流量", tier: "biz" },
  {     word: "follower", meaning: "粉丝/关注者", example: "10K followers.", exampleCn: "一万粉丝。", category: "营销与流量", tier: "biz" },
  {     word: "subscribe", meaning: "订阅/关注", example: "Subscribe to our channel.", exampleCn: "订阅我们的频道。", category: "营销与流量", tier: "biz" },
  {     word: "unsubscribe", meaning: "取消订阅", example: "Click to unsubscribe.", exampleCn: "点击取消订阅。", category: "营销与流量", tier: "biz" },
  {     word: "raw material", meaning: "原材料", example: "Source raw materials.", exampleCn: "采购原材料。", category: "产品与质量", tier: "biz" },
  {     word: "component", meaning: "部件/组件", example: "Electronic components.", exampleCn: "电子元件。", category: "产品与质量", tier: "biz" },
  {     word: "accessory", meaning: "配件/附件", example: "Phone accessories.", exampleCn: "手机配件。", category: "产品与质量", tier: "biz" },
  {     word: "assembly", meaning: "组装/装配", example: "Easy assembly.", exampleCn: "易组装。", category: "产品与质量", tier: "biz" },
  {     word: "disassembly", meaning: "拆卸/拆解", example: "For disassembly only.", exampleCn: "仅用于拆解。", category: "产品与质量", tier: "biz" },
  {     word: "coating", meaning: "涂层/镀层", example: "Anti-scratch coating.", exampleCn: "防刮涂层。", category: "产品与质量", tier: "biz" },
  {     word: "texture", meaning: "质地/纹理", example: "Soft texture.", exampleCn: "柔软质地。", category: "产品与质量", tier: "biz" },
  {     word: "glossy", meaning: "光滑的/有光泽的", example: "Glossy surface.", exampleCn: "光滑表面。", category: "产品与质量", tier: "biz" },
  {     word: "matte", meaning: "哑光的/无光泽的", example: "Matte black.", exampleCn: "哑光黑。", category: "产品与质量", tier: "biz" },
  {     word: "transparent", meaning: "透明的", example: "Transparent case.", exampleCn: "透明壳。", category: "产品与质量", tier: "biz" },
  {     word: "opaque", meaning: "不透明的", example: "Opaque material.", exampleCn: "不透明材料。", category: "产品与质量", tier: "biz" },
  {     word: "flexible", meaning: "柔韧的/灵活的", example: "Flexible material.", exampleCn: "柔性材料。", category: "产品与质量", tier: "biz" },
  {     word: "rigid", meaning: "坚硬的/刚性的", example: "Rigid structure.", exampleCn: "刚性结构。", category: "产品与质量", tier: "biz" },
  {     word: "fragile", meaning: "易碎的/脆弱的", example: "Fragile, handle with care.", exampleCn: "易碎，小心轻放。", category: "产品与质量", tier: "biz" },
  {     word: "sturdy", meaning: "结实的/坚固的", example: "Sturdy construction.", exampleCn: "结构牢固。", category: "产品与质量", tier: "biz" },
  {     word: "compact", meaning: "紧凑的/小巧的", example: "Compact design.", exampleCn: "紧凑设计。", category: "产品与质量", tier: "biz" },
  {     word: "portable", meaning: "便携的", example: "Portable and lightweight.", exampleCn: "便携轻便。", category: "产品与质量", tier: "biz" },
  {     word: "foldable", meaning: "可折叠的", example: "Foldable design.", exampleCn: "可折叠设计。", category: "产品与质量", tier: "biz" },
  {     word: "detachable", meaning: "可拆卸的", example: "Detachable strap.", exampleCn: "可拆卸肩带。", category: "产品与质量", tier: "biz" },
  {     word: "neural", meaning: "神经的", example: "Neural network.", exampleCn: "神经网络。", category: "AI与科技", tier: "biz" },
  {     word: "inference", meaning: "推理/推断", example: "AI inference.", exampleCn: "AI推理。", category: "AI与科技", tier: "biz" },
  {     word: "fine-tuning", meaning: "微调(模型)", example: "Fine-tuning the model.", exampleCn: "微调模型。", category: "AI与科技", tier: "biz" },
  {     word: "hallucination", meaning: "幻觉(AI胡说)", example: "AI hallucination problem.", exampleCn: "AI幻觉问题。", category: "AI与科技", tier: "biz" },
  {     word: "token limit", meaning: "词元限制", example: "Token limit exceeded.", exampleCn: "超出词元限制。", category: "AI与科技", tier: "biz" },
  {     word: "context window", meaning: "上下文窗口", example: "Large context window.", exampleCn: "大上下文窗口。", category: "AI与科技", tier: "biz" },
  {     word: "reasoning", meaning: "推理/逻辑思维", example: "Chain of reasoning.", exampleCn: "推理链。", category: "AI与科技", tier: "biz" },
  {     word: "workflow", meaning: "工作流/流程", example: "Automated workflow.", exampleCn: "自动化工作流。", category: "AI与科技", tier: "biz" },
  {     word: "orchestration", meaning: "编排/协调", example: "Workflow orchestration.", exampleCn: "工作流编排。", category: "AI与科技", tier: "biz" },
  {     word: "semantic", meaning: "语义的", example: "Semantic search.", exampleCn: "语义搜索。", category: "AI与科技", tier: "biz" },
  {     word: "vector", meaning: "向量/矢量", example: "Vector database.", exampleCn: "向量数据库。", category: "AI与科技", tier: "biz" },
  {     word: "clustering", meaning: "聚类/分组", example: "Data clustering.", exampleCn: "数据聚类。", category: "AI与科技", tier: "biz" },
  {     word: "classification", meaning: "分类", example: "Text classification.", exampleCn: "文本分类。", category: "AI与科技", tier: "biz" },
  {     word: "sentiment", meaning: "情感/情绪", example: "Sentiment analysis.", exampleCn: "情感分析。", category: "AI与科技", tier: "biz" },
  {     word: "summarization", meaning: "摘要/总结", example: "Text summarization.", exampleCn: "文本摘要。", category: "AI与科技", tier: "biz" },
  {     word: "extraction", meaning: "提取/抽取", example: "Data extraction.", exampleCn: "数据提取。", category: "AI与科技", tier: "biz" },
  {     word: "augmentation", meaning: "增强/扩充", example: "Data augmentation.", exampleCn: "数据增强。", category: "AI与科技", tier: "biz" },
  {     word: "synthetic", meaning: "合成的/人造的", example: "Synthetic data.", exampleCn: "合成数据。", category: "AI与科技", tier: "biz" },
  {     word: "benchmark", meaning: "基准测试/标杆", example: "Performance benchmark.", exampleCn: "性能基准测试。", category: "AI与科技", tier: "biz" },
  {     word: "deploy", meaning: "部署/上线", example: "Deploy to production.", exampleCn: "部署到生产环境。", category: "互联网与开发", tier: "biz" },
  {     word: "scaling", meaning: "扩展/扩容", example: "Auto scaling.", exampleCn: "自动扩容。", category: "互联网与开发", tier: "biz" },
  {     word: "downtime", meaning: "宕机时间/停机", example: "Zero downtime.", exampleCn: "零宕机。", category: "互联网与开发", tier: "biz" },
  {     word: "latency", meaning: "延迟/时延", example: "Low latency.", exampleCn: "低延迟。", category: "互联网与开发", tier: "biz" },
  {     word: "throughput", meaning: "吞吐量", example: "High throughput.", exampleCn: "高吞吐量。", category: "互联网与开发", tier: "biz" },
  {     word: "load balancing", meaning: "负载均衡", example: "Load balancing server.", exampleCn: "负载均衡服务器。", category: "互联网与开发", tier: "biz" },
  {     word: "CDN", meaning: "内容分发网络", example: "Use a CDN.", exampleCn: "用CDN。", category: "互联网与开发", tier: "biz" },
  {     word: "DNS", meaning: "域名系统", example: "DNS settings.", exampleCn: "DNS设置。", category: "互联网与开发", tier: "biz" },
  {     word: "IP address", meaning: "IP地址", example: "Static IP address.", exampleCn: "静态IP地址。", category: "互联网与开发", tier: "biz" },
  {     word: "protocol", meaning: "协议/规程", example: "HTTPS protocol.", exampleCn: "HTTPS协议。", category: "互联网与开发", tier: "biz" },
  {     word: "endpoint", meaning: "端点/接口", example: "API endpoint.", exampleCn: "API接口。", category: "互联网与开发", tier: "biz" },
  {     word: "webhook", meaning: "网络钩子/回调", example: "Set up a webhook.", exampleCn: "设置webhook。", category: "互联网与开发", tier: "biz" },
  {     word: "cron job", meaning: "定时任务", example: "Schedule a cron job.", exampleCn: "安排定时任务。", category: "互联网与开发", tier: "biz" },
  {     word: "sandbox", meaning: "沙箱/测试环境", example: "Test in sandbox first.", exampleCn: "先在沙箱测试。", category: "互联网与开发", tier: "biz" },
  {     word: "staging", meaning: "预发布/预演", example: "Staging environment.", exampleCn: "预发布环境。", category: "互联网与开发", tier: "biz" },
  {     word: "repository", meaning: "代码仓库/存储库", example: "Code repository.", exampleCn: "代码仓库。", category: "互联网与开发", tier: "biz" },
  {     word: "commit", meaning: "提交(代码)", example: "Git commit.", exampleCn: "Git提交。", category: "互联网与开发", tier: "biz" },
  {     word: "merge", meaning: "合并", example: "Merge the changes.", exampleCn: "合并更改。", category: "互联网与开发", tier: "biz" },
  {     word: "rollback", meaning: "回滚/撤销", example: "Emergency rollback.", exampleCn: "紧急回滚。", category: "互联网与开发", tier: "biz" },
  {     word: "patch", meaning: "补丁/修补", example: "Security patch.", exampleCn: "安全补丁。", category: "互联网与开发", tier: "biz" }

];

function initVocabularyState() {
  return VOCABULARY.map(v => ({
    ...v,
    id: v.word.toLowerCase().replace(/\s+/g, '-'),
    interval: 0, repetitions: 0, easiness: 2.5,
    nextReview: null, lastReview: null,
    totalReviews: 0, totalCorrect: 0,
    streak: 0, wrongStreak: 0,
  }));
}