// 108 核心万能句型 — 按功能分类
// 每个句型配 5+ 替换例句，覆盖日常+工作场景
// 所有例句均附带中文翻译

const SENTENCE_PATTERNS = [

  // ============================================================
  // 一、表达观点 (Expressing Opinions) — 句型 1-12
  // ============================================================
  {
    id: "p01",
    pattern: "I think (that) ____.",
    cn: "我认为 ____。",
    function: "表达观点",
    examples: [
      "I think it's a good idea.",
      "I think we should go now.",
      "I think this price is fair.",
      "I think you're right.",
      "I think the meeting went well.",
      "I think we need more time."
    ],
    examplesCn: [
      "我觉得这是个好主意。",
      "我觉得我们现在该走了。",
      "我觉得这个价格很合理。",
      "我觉得你是对的。",
      "我觉得会议进行得不错。",
      "我觉得我们需要更多时间。"
    ]
  }
,

  {
    id: "p02",
    pattern: "I don't think (that) ____.",
    cn: "我不认为 ____。",
    function: "表达观点",
    examples: [
      "I don't think that's true.",
      "I don't think we can finish today.",
      "I don't think it will rain.",
      "I don't think he's coming.",
      "I don't think this is the right way."
    ],
    examplesCn: [
      "我不认为那是真的。",
      "我觉得我们今天完不成。",
      "我觉得不会下雨。",
      "我觉得他不会来。",
      "我觉得这条路不对。"
    ]
  }
,

  {
    id: "p03",
    pattern: "I believe (that) ____.",
    cn: "我相信 ____。",
    function: "表达观点",
    examples: [
      "I believe we can do better.",
      "I believe in you.",
      "I believe this product will sell well.",
      "I believe it's worth trying.",
      "I believe quality matters most."
    ],
    examplesCn: [
      "我相信我们能做得更好。",
      "我相信你。",
      "我相信这个产品会卖得好。",
      "我相信值得一试。",
      "我相信质量最重要。"
    ]
  }
,

  {
    id: "p04",
    pattern: "In my opinion, ____.",
    cn: "在我看来，____。",
    function: "表达观点",
    examples: [
      "In my opinion, this is the best choice.",
      "In my opinion, we should wait.",
      "In my opinion, the price is too high.",
      "In my opinion, he did a great job.",
      "In my opinion, communication is key."
    ],
    examplesCn: [
      "在我看来，这是最好的选择。",
      "在我看来，我们应该等等。",
      "在我看来，价格太高了。",
      "在我看来，他干得很棒。",
      "在我看来，沟通是关键。"
    ]
  }
,

  {
    id: "p05",
    pattern: "I feel (that) ____.",
    cn: "我觉得 ____。",
    function: "表达观点",
    examples: [
      "I feel that we made the right decision.",
      "I feel a little tired today.",
      "I feel this could be improved.",
      "I feel the same way.",
      "I feel it's not fair."
    ],
    examplesCn: [
      "我觉得我们做了正确的决定。",
      "我今天感觉有点累。",
      "我觉得这点可以改进。",
      "我也有同感。",
      "我觉得这不公平。"
    ]
  }
,

  {
    id: "p06",
    pattern: "As far as I know, ____.",
    cn: "据我所知，____。",
    function: "表达观点",
    examples: [
      "As far as I know, he left last week.",
      "As far as I know, the order is ready.",
      "As far as I know, they don't ship on weekends.",
      "As far as I know, this is the latest model.",
      "As far as I know, the meeting is still on."
    ],
    examplesCn: [
      "据我所知，他上周走了。",
      "据我所知，订单准备好了。",
      "据我所知，他们周末不发货。",
      "据我所知，这是最新款。",
      "据我所知，会议还没取消。"
    ]
  }
,

  {
    id: "p07",
    pattern: "I'm (not) sure if ____.",
    cn: "我(不)确定是否 ____。",
    function: "表达观点",
    examples: [
      "I'm not sure if this is correct.",
      "I'm sure we can find a solution.",
      "I'm not sure if he will agree.",
      "I'm sure you'll do great.",
      "I'm not sure if it's available."
    ],
    examplesCn: [
      "我不确定这是否正确。",
      "我相信我们能找到解决办法。",
      "我不确定他是否会同意。",
      "我相信你会做得很好。",
      "我不确定是否有货。"
    ]
  }
,

  {
    id: "p08",
    pattern: "To be honest, ____.",
    cn: "说实话，____。",
    function: "表达观点",
    examples: [
      "To be honest, I don't like it.",
      "To be honest, the quality could be better.",
      "To be honest, I forgot about the meeting.",
      "To be honest, I need more practice.",
      "To be honest, I was a little nervous."
    ],
    examplesCn: [
      "说实话，我不喜欢。",
      "说实话，质量可以再好一点。",
      "说实话，我忘了开会。",
      "说实话，我需要多练习。",
      "说实话，我刚才有点紧张。"
    ]
  }
,

  {
    id: "p09",
    pattern: "The way I see it, ____.",
    cn: "依我看，____。",
    function: "表达观点",
    examples: [
      "The way I see it, we have two options.",
      "The way I see it, this is a good opportunity.",
      "The way I see it, we should focus on quality.",
      "The way I see it, the problem is communication.",
      "The way I see it, both sides need to compromise."
    ],
    examplesCn: [
      "依我看，我们有两个选择。",
      "依我看，这是个好机会。",
      "依我看，我们应该专注质量。",
      "依我看，问题在于沟通。",
      "依我看，双方都需要让步。"
    ]
  }
,

  {
    id: "p10",
    pattern: "It seems (like) ____.",
    cn: "看起来 ____。",
    function: "表达观点",
    examples: [
      "It seems like a good deal.",
      "It seems the shipment is delayed.",
      "It seems we have a problem.",
      "It seems he is not interested.",
      "It seems too good to be true."
    ],
    examplesCn: [
      "看起来是个不错的交易。",
      "看起来货延迟了。",
      "看起来我们遇到问题了。",
      "看起来他不感兴趣。",
      "看起来好得不像真的。"
    ]
  }
,

  {
    id: "p11",
    pattern: "I agree / disagree with ____.",
    cn: "我同意/不同意 ____。",
    function: "表达观点",
    examples: [
      "I agree with your suggestion.",
      "I disagree with that statement.",
      "I agree that we need more time.",
      "I don't agree with this approach.",
      "I totally agree with you."
    ],
    examplesCn: [
      "我同意你的建议。",
      "我不同意那个说法。",
      "我同意我们需要更多时间。",
      "我不同意这个方法。",
      "我完全同意你。"
    ]
  }
,

  {
    id: "p12",
    pattern: "I have no idea ____.",
    cn: "我不知道 ____。",
    function: "表达观点",
    examples: [
      "I have no idea what happened.",
      "I have no idea where he went.",
      "I have no idea how to fix this.",
      "I have no idea why she's upset.",
      "I have no idea when it will arrive."
    ],
    examplesCn: [
      "我不知道发生了什么。",
      "我不知道他去哪了。",
      "我不知道怎么修这个。",
      "我不知道她为什么生气。",
      "我不知道什么时候能到。"
    ]
  }
,


  // ============================================================
  // 二、询问信息 (Asking Questions) — 句型 13-22
  // ============================================================
  {
    id: "p13",
    pattern: "Could you tell me ____?",
    cn: "你能告诉我 ____ 吗？",
    function: "询问信息",
    examples: [
      "Could you tell me how to get there?",
      "Could you tell me the price?",
      "Could you tell me when it will arrive?",
      "Could you tell me who is in charge?",
      "Could you tell me what happened?"
    ],
    examplesCn: [
      "你能告诉我怎么去那里吗？",
      "你能告诉我价格吗？",
      "你能告诉我什么时候到吗？",
      "你能告诉我谁负责吗？",
      "你能告诉我发生了什么吗？"
    ]
  }
,

  {
    id: "p14",
    pattern: "Do you know ____?",
    cn: "你知道 ____ 吗？",
    function: "询问信息",
    examples: [
      "Do you know where the station is?",
      "Do you know how much it costs?",
      "Do you know when the meeting starts?",
      "Do you know if they ship overseas?",
      "Do you know who to contact?"
    ],
    examplesCn: [
      "你知道车站在哪吗？",
      "你知道多少钱吗？",
      "你知道会议什么时候开始吗？",
      "你知道他们发不发海外吗？",
      "你知道联系谁吗？"
    ]
  }
,

  {
    id: "p15",
    pattern: "I was wondering if ____.",
    cn: "我在想 ____。(委婉提问)",
    function: "询问信息",
    examples: [
      "I was wondering if you could help me.",
      "I was wondering if there's a discount.",
      "I was wondering if the position is still open.",
      "I was wondering if you have this in blue.",
      "I was wondering if we could meet tomorrow."
    ],
    examplesCn: [
      "我在想你能不能帮我。",
      "我在想有没有折扣。",
      "我在想这个职位是否还空缺。",
      "我在想这款有没有蓝色的。",
      "我在想我们明天能不能见面。"
    ]
  }
,

  {
    id: "p16",
    pattern: "What do you think about ____?",
    cn: "你觉得 ____ 怎么样？",
    function: "询问信息",
    examples: [
      "What do you think about this idea?",
      "What do you think about the new design?",
      "What do you think about his proposal?",
      "What do you think about working from home?",
      "What do you think about the price?"
    ],
    examplesCn: [
      "你觉得这个想法怎么样？",
      "你觉得新设计怎么样？",
      "你觉得他的提案怎么样？",
      "你觉得在家办公怎么样？",
      "你觉得价格怎么样？"
    ]
  }
,

  {
    id: "p17",
    pattern: "How do I ____?",
    cn: "我怎么 ____？",
    function: "询问信息",
    examples: [
      "How do I get to the airport?",
      "How do I place an order?",
      "How do I use this machine?",
      "How do I contact customer service?",
      "How do I apply for a refund?"
    ],
    examplesCn: [
      "我怎么去机场？",
      "我怎么下单？",
      "我怎么用这台机器？",
      "我怎么联系客服？",
      "我怎么申请退款？"
    ]
  }
,

  {
    id: "p18",
    pattern: "Is it possible to ____?",
    cn: "有可能 ____ 吗？",
    function: "询问信息",
    examples: [
      "Is it possible to get a sample first?",
      "Is it possible to change the delivery address?",
      "Is it possible to pay by PayPal?",
      "Is it possible to have a meeting tomorrow?",
      "Is it possible to extend the deadline?"
    ],
    examplesCn: [
      "能先拿个样品吗？",
      "能改送货地址吗？",
      "能用PayPal付款吗？",
      "明天能开会吗？",
      "能延期截止日期吗？"
    ]
  }
,

  {
    id: "p19",
    pattern: "Can you explain ____?",
    cn: "你能解释一下 ____ 吗？",
    function: "询问信息",
    examples: [
      "Can you explain how this works?",
      "Can you explain the difference?",
      "Can you explain why the price went up?",
      "Can you explain this word to me?",
      "Can you explain the process?"
    ],
    examplesCn: [
      "你能解释一下这个怎么用吗？",
      "你能解释一下区别吗？",
      "你能解释一下为什么涨价吗？",
      "你能给我解释一下这个词吗？",
      "你能解释一下流程吗？"
    ]
  }
,

  {
    id: "p20",
    pattern: "What does ____ mean?",
    cn: "____ 是什么意思？",
    function: "询问信息",
    examples: [
      "What does this word mean?",
      "What does 'ASAP' mean?",
      "What does this symbol mean?",
      "What does that sign mean?",
      "What does 'out of stock' mean?"
    ],
    examplesCn: [
      "这个词是什么意思？",
      "'ASAP'是什么意思？",
      "这个符号是什么意思？",
      "那个标志是什么意思？",
      "'out of stock'是什么意思？"
    ]
  }
,

  {
    id: "p21",
    pattern: "How much / many ____?",
    cn: "多少 ____？",
    function: "询问信息",
    examples: [
      "How much does it cost?",
      "How many pieces do you need?",
      "How much time do we have?",
      "How many people are coming?",
      "How much is the shipping fee?"
    ],
    examplesCn: [
      "多少钱？",
      "你需要多少件？",
      "我们还有多少时间？",
      "有多少人来？",
      "运费多少？"
    ]
  }
,

  {
    id: "p22",
    pattern: "How long does it take to ____?",
    cn: "____ 需要多长时间？",
    function: "询问信息",
    examples: [
      "How long does it take to ship?",
      "How long does it take to get there?",
      "How long does it take to learn English?",
      "How long does it take to process a refund?",
      "How long does it take to make a sample?"
    ],
    examplesCn: [
      "发货需要多长时间？",
      "到那里需要多长时间？",
      "学英语需要多长时间？",
      "处理退款需要多长时间？",
      "做样品需要多长时间？"
    ]
  }
,


  // ============================================================
  // 三、描述事实 (Describing Facts) — 句型 23-35
  // ============================================================
  {
    id: "p23",
    pattern: "I work in ____.",
    cn: "我从事 ____ 行业。",
    function: "描述事实",
    examples: [
      "I work in e-commerce.",
      "I work in sales.",
      "I work in the fashion industry.",
      "I work in a small company.",
      "I work in customer service."
    ],
    examplesCn: [
      "我从事电商行业。",
      "我从事销售行业。",
      "我从事时尚行业。",
      "我在一家小公司工作。",
      "我从事客服工作。"
    ]
  }
,

  {
    id: "p24",
    pattern: "I sell ____.",
    cn: "我卖 ____。",
    function: "描述事实",
    examples: [
      "I sell products on Amazon.",
      "I sell handmade jewelry online.",
      "I sell electronics to businesses.",
      "I sell clothes on my website.",
      "I sell kitchen supplies."
    ],
    examplesCn: [
      "我在亚马逊上卖产品。",
      "我在网上卖手工首饰。",
      "我向企业卖电子产品。",
      "我在我的网站上卖衣服。",
      "我卖厨房用品。"
    ]
  }
,

  {
    id: "p25",
    pattern: "I'm responsible for ____.",
    cn: "我负责 ____。",
    function: "描述事实",
    examples: [
      "I'm responsible for customer service.",
      "I'm responsible for quality control.",
      "I'm responsible for shipping and delivery.",
      "I'm responsible for finding new suppliers.",
      "I'm responsible for the marketing."
    ],
    examplesCn: [
      "我负责客服。",
      "我负责质量控制。",
      "我负责发货和物流。",
      "我负责找新供应商。",
      "我负责市场营销。"
    ]
  }
,

  {
    id: "p26",
    pattern: "There is / are ____.",
    cn: "有 ____。(存在句)",
    function: "描述事实",
    examples: [
      "There is a problem with the order.",
      "There are many options to choose from.",
      "There is a meeting at 3 p.m.",
      "There are three colors available.",
      "There is no time to waste."
    ],
    examplesCn: [
      "订单有问题。",
      "有很多选择。",
      "下午3点有个会。",
      "有三种颜色可选。",
      "没时间浪费了。"
    ]
  }
,

  {
    id: "p27",
    pattern: "It's + adj + to ____.",
    cn: "做某事是 ____ 的。",
    function: "描述事实",
    examples: [
      "It's important to be on time.",
      "It's hard to learn a new language.",
      "It's easy to make mistakes.",
      "It's necessary to check the quality.",
      "It's better to wait."
    ],
    examplesCn: [
      "准时很重要。",
      "学一门新语言很难。",
      "犯错很容易。",
      "检查质量很有必要。",
      "等等比较好。"
    ]
  }
,

  {
    id: "p28",
    pattern: "The main reason is ____.",
    cn: "主要原因是 ____。",
    function: "描述事实",
    examples: [
      "The main reason is the price.",
      "The main reason is quality control.",
      "The main reason is lack of communication.",
      "The main reason is we want to save time.",
      "The main reason is customer feedback."
    ],
    examplesCn: [
      "主要原因是价格。",
      "主要原因是质量控制。",
      "主要原因是缺乏沟通。",
      "主要是因为我们想节省时间。",
      "主要原因是客户反馈。"
    ]
  }
,

  {
    id: "p29",
    pattern: "One of the ____ is ____.",
    cn: "其中一个 ____ 是 ____。",
    function: "描述事实",
    examples: [
      "One of the problems is shipping time.",
      "One of the best features is the battery life.",
      "One of the reasons is the low cost.",
      "One of our biggest customers is from Japan.",
      "One of the challenges is finding good suppliers."
    ],
    examplesCn: [
      "其中一个问题是发货时间。",
      "最好的特点之一是电池续航。",
      "原因之一是成本低。",
      "我们最大的客户之一来自日本。",
      "挑战之一是找到好供应商。"
    ]
  }
,

  {
    id: "p30",
    pattern: "Compared to ____, ____.",
    cn: "与 ____ 相比，____。",
    function: "描述事实",
    examples: [
      "Compared to last year, sales are up 20%.",
      "Compared to other suppliers, their price is higher.",
      "Compared to driving, taking the train is faster.",
      "Compared to the old model, this one is lighter.",
      "Compared to my previous job, this is less stressful."
    ],
    examplesCn: [
      "和去年相比，销售额增长了20%。",
      "和其他供应商相比，他们的价格更高。",
      "和开车相比，坐火车更快。",
      "和旧款相比，这款更轻。",
      "和我上一份工作相比，这份压力更小。"
    ]
  }
,

  {
    id: "p31",
    pattern: "I've been ____ for ____.",
    cn: "我 ____ 已经 ____ (时间)了。",
    function: "描述事实",
    examples: [
      "I've been doing this for five years.",
      "I've been learning English for six months.",
      "I've been working here since 2019.",
      "I've been waiting for two hours.",
      "I've been using this product for a week."
    ],
    examplesCn: [
      "我做这行已经五年了。",
      "我学英语已经六个月了。",
      "我从2019年开始在这里工作。",
      "我已经等了两个小时了。",
      "我用这个产品已经一周了。"
    ]
  }
,

  {
    id: "p32",
    pattern: "I used to ____, but now I ____.",
    cn: "我以前 ____，但现在 ____。",
    function: "描述事实",
    examples: [
      "I used to work in an office, but now I work from home.",
      "I used to be shy, but now I'm more confident.",
      "I used to hate English, but now I enjoy it.",
      "I used to buy from them, but now I found a better supplier.",
      "I used to live in Beijing, but now I live in Shanghai."
    ],
    examplesCn: [
      "我以前在办公室上班，但现在在家办公。",
      "我以前很害羞，但现在更自信了。",
      "我以前讨厌英语，但现在很喜欢。",
      "我以前从他们那里采购，但现在找到了更好的供应商。",
      "我以前住在北京，但现在住在上海。"
    ]
  }
,

  {
    id: "p33",
    pattern: "I'm used to ____.",
    cn: "我习惯了 ____。",
    function: "描述事实",
    examples: [
      "I'm used to working late.",
      "I'm used to speaking English on the phone.",
      "I'm used to dealing with difficult customers.",
      "I'm used to the weather here.",
      "I'm used to getting up early."
    ],
    examplesCn: [
      "我习惯了加班。",
      "我习惯了用英语打电话。",
      "我习惯了应付难缠的客户。",
      "我习惯了这里的天气。",
      "我习惯了早起。"
    ]
  }
,

  {
    id: "p34",
    pattern: "The best part is ____.",
    cn: "最好的部分是 ____。",
    function: "描述事实",
    examples: [
      "The best part is the price.",
      "The best part is free shipping.",
      "The best part is that it's so easy to use.",
      "The best part is the after-sales service.",
      "The best part is I can work from anywhere."
    ],
    examplesCn: [
      "最好的部分是价格。",
      "最好的部分是免运费。",
      "最好的部分是它用起来太简单了。",
      "最好的部分是售后服务。",
      "最好的部分是我可以在任何地方工作。"
    ]
  }
,

  {
    id: "p35",
    pattern: "What I like most is ____.",
    cn: "我最喜欢的是 ____。",
    function: "描述事实",
    examples: [
      "What I like most is the design.",
      "What I like most is how fast it ships.",
      "What I like most is the customer support.",
      "What I like most is working with my team.",
      "What I like most is the flexibility."
    ],
    examplesCn: [
      "我最喜欢的是设计。",
      "我最喜欢的是发货快。",
      "我最喜欢的是客户支持。",
      "我最喜欢的是和团队一起工作。",
      "我最喜欢的是灵活性。"
    ]
  }
,


  // ============================================================
  // 四、提出建议 (Making Suggestions) — 句型 36-46
  // ============================================================
  {
    id: "p36",
    pattern: "You should ____.",
    cn: "你应该 ____。",
    function: "提出建议",
    examples: [
      "You should try this product.",
      "You should contact them directly.",
      "You should check the quality first.",
      "You should take a break.",
      "You should ask for a sample."
    ],
    examplesCn: [
      "你应该试试这个产品。",
      "你应该直接联系他们。",
      "你应该先检查质量。",
      "你应该休息一下。",
      "你应该要个样品。"
    ]
  }
,

  {
    id: "p37",
    pattern: "I suggest (that) ____.",
    cn: "我建议 ____。",
    function: "提出建议",
    examples: [
      "I suggest we start early.",
      "I suggest you compare prices first.",
      "I suggest talking to the manager.",
      "I suggest we wait for the sample.",
      "I suggest trying a different approach."
    ],
    examplesCn: [
      "我建议我们早点开始。",
      "我建议你先比较价格。",
      "我建议和经理谈谈。",
      "我建议我们等样品。",
      "我建议试试不同的方法。"
    ]
  }
,

  {
    id: "p38",
    pattern: "Why don't we ____?",
    cn: "我们为什么不 ____？",
    function: "提出建议",
    examples: [
      "Why don't we meet tomorrow?",
      "Why don't we try a different supplier?",
      "Why don't we order a sample first?",
      "Why don't we ask for a discount?",
      "Why don't we take a short break?"
    ],
    examplesCn: [
      "我们为什么不明天见面？",
      "我们为什么不试试别的供应商？",
      "我们为什么不先订个样品？",
      "我们为什么不问一下折扣？",
      "我们为什么不休息一下？"
    ]
  }
,

  {
    id: "p39",
    pattern: "How about ____?",
    cn: "____ 怎么样？",
    function: "提出建议",
    examples: [
      "How about we split the order?",
      "How about trying a new design?",
      "How about meeting at 10 instead?",
      "How about sending it by express?",
      "How about discussing this over lunch?"
    ],
    examplesCn: [
      "我们分批订怎么样？",
      "试试新设计怎么样？",
      "改为10点见面怎么样？",
      "用快递寄怎么样？",
      "午饭时讨论这个怎么样？"
    ]
  }
,

  {
    id: "p40",
    pattern: "You'd better ____.",
    cn: "你最好 ____。",
    function: "提出建议",
    examples: [
      "You'd better check the tracking number.",
      "You'd better call them now.",
      "You'd better confirm the delivery address.",
      "You'd better save a copy of the contract.",
      "You'd better leave early to avoid traffic."
    ],
    examplesCn: [
      "你最好查一下追踪号。",
      "你最好现在给他们打电话。",
      "你最好确认一下收货地址。",
      "你最好保存一份合同副本。",
      "你最好早点出发避开堵车。"
    ]
  }
,

  {
    id: "p41",
    pattern: "If I were you, I would ____.",
    cn: "如果我是你，我会 ____。",
    function: "提出建议",
    examples: [
      "If I were you, I would accept the offer.",
      "If I were you, I would get a sample first.",
      "If I were you, I would negotiate the price.",
      "If I were you, I would wait a few days.",
      "If I were you, I would ask for a written agreement."
    ],
    examplesCn: [
      "如果我是你，我会接受这个报价。",
      "如果我是你，我会先要个样品。",
      "如果我是你，我会谈谈价格。",
      "如果我是你，我会等几天。",
      "如果我是你，我会要求书面协议。"
    ]
  }
,

  {
    id: "p42",
    pattern: "It's (not) a good idea to ____.",
    cn: "____ 是(不)个好主意。",
    function: "提出建议",
    examples: [
      "It's a good idea to check reviews first.",
      "It's not a good idea to rush the order.",
      "It's a good idea to have a backup supplier.",
      "It's not a good idea to skip the quality check.",
      "It's a good idea to practice every day."
    ],
    examplesCn: [
      "先看评价是个好主意。",
      "催单不是个好主意。",
      "有备选供应商是个好主意。",
      "跳过质量检查不是个好主意。",
      "每天练习是个好主意。"
    ]
  }
,

  {
    id: "p43",
    pattern: "Make sure (that) ____.",
    cn: "确保 ____。",
    function: "提出建议",
    examples: [
      "Make sure the address is correct.",
      "Make sure you get a tracking number.",
      "Make sure the quality meets your standards.",
      "Make sure to read the contract carefully.",
      "Make sure to follow up after the meeting."
    ],
    examplesCn: [
      "确保地址正确。",
      "确保你拿到追踪号。",
      "确保质量达到你的标准。",
      "确保仔细阅读合同。",
      "确保会后跟进。"
    ]
  }
,

  {
    id: "p44",
    pattern: "Don't forget to ____.",
    cn: "别忘了 ____。",
    function: "提出建议",
    examples: [
      "Don't forget to send the invoice.",
      "Don't forget to confirm the order.",
      "Don't forget to check the shipment.",
      "Don't forget to reply to the email.",
      "Don't forget to bring the samples."
    ],
    examplesCn: [
      "别忘了发发票。",
      "别忘了确认订单。",
      "别忘了检查货物。",
      "别忘了回复邮件。",
      "别忘了带样品。"
    ]
  }
,

  {
    id: "p45",
    pattern: "Have you tried ____?",
    cn: "你试过 ____ 吗？",
    function: "提出建议",
    examples: [
      "Have you tried contacting them directly?",
      "Have you tried using a different carrier?",
      "Have you tried this new software?",
      "Have you tried asking for their best price?",
      "Have you tried practicing with a partner?"
    ],
    examplesCn: [
      "你试过直接联系他们吗？",
      "你试过用别的物流吗？",
      "你试过这个新软件吗？",
      "你试过问他们的最低价吗？",
      "你试过找个伙伴练习吗？"
    ]
  }
,

  {
    id: "p46",
    pattern: "The key is to ____.",
    cn: "关键是 ____。",
    function: "提出建议",
    examples: [
      "The key is to be patient.",
      "The key is to communicate clearly.",
      "The key is to check everything twice.",
      "The key is to build good relationships.",
      "The key is to keep learning."
    ],
    examplesCn: [
      "关键是耐心。",
      "关键是清晰沟通。",
      "关键是每样都检查两遍。",
      "关键是建立良好关系。",
      "关键是持续学习。"
    ]
  }
,


  // ============================================================
  // 五、表达需求 (Expressing Needs) — 句型 47-58
  // ============================================================
  {
    id: "p47",
    pattern: "I want to ____.",
    cn: "我想 ____。",
    function: "表达需求",
    examples: [
      "I want to place an order.",
      "I want to improve my English.",
      "I want to find a better supplier.",
      "I want to cancel my order.",
      "I want to learn more about this product."
    ],
    examplesCn: [
      "我想下单。",
      "我想提高英语。",
      "我想找更好的供应商。",
      "我想取消订单。",
      "我想了解更多这个产品。"
    ]
  }
,

  {
    id: "p48",
    pattern: "I need ____.",
    cn: "我需要 ____。",
    function: "表达需求",
    examples: [
      "I need your help.",
      "I need more information.",
      "I need a sample before I order.",
      "I need to think about it.",
      "I need the delivery by Friday."
    ],
    examplesCn: [
      "我需要你的帮助。",
      "我需要更多信息。",
      "我下单前需要样品。",
      "我需要想一想。",
      "我需要周五前送货。"
    ]
  }
,

  {
    id: "p49",
    pattern: "I would like ____.",
    cn: "我想要 ____。(礼貌)",
    function: "表达需求",
    examples: [
      "I would like a quotation, please.",
      "I would like to speak with the manager.",
      "I would like a refund.",
      "I would like to return this item.",
      "I would like to change my order."
    ],
    examplesCn: [
      "我想要一份报价单。",
      "我想和经理谈谈。",
      "我想退款。",
      "我想退这个商品。",
      "我想改一下订单。"
    ]
  }
,

  {
    id: "p50",
    pattern: "Can I ____?",
    cn: "我能 ____ 吗？",
    function: "表达需求",
    examples: [
      "Can I have a discount?",
      "Can I see the sample?",
      "Can I pay by credit card?",
      "Can I change my order?",
      "Can I get a tracking number?"
    ],
    examplesCn: [
      "能给我折扣吗？",
      "我能看看样品吗？",
      "我能用信用卡付款吗？",
      "我能改订单吗？",
      "我能拿到追踪号吗？"
    ]
  }
,

  {
    id: "p51",
    pattern: "Could you please ____?",
    cn: "请问你能 ____ 吗？(礼貌)",
    function: "表达需求",
    examples: [
      "Could you please send me the catalog?",
      "Could you please check the stock?",
      "Could you please give me a better price?",
      "Could you please confirm the delivery date?",
      "Could you please speak more slowly?"
    ],
    examplesCn: [
      "请问能发给我目录吗？",
      "请问能查一下库存吗？",
      "请问能给个更好的价格吗？",
      "请问能确认交货日期吗？",
      "请问能说慢一点吗？"
    ]
  }
,

  {
    id: "p52",
    pattern: "I'm looking for ____.",
    cn: "我在找 ____。",
    function: "表达需求",
    examples: [
      "I'm looking for a reliable supplier.",
      "I'm looking for high-quality products.",
      "I'm looking for a cheaper option.",
      "I'm looking for a long-term partner.",
      "I'm looking for the tracking number."
    ],
    examplesCn: [
      "我在找一个可靠的供应商。",
      "我在找高质量的产品。",
      "我在找更便宜的选项。",
      "我在找长期合作伙伴。",
      "我在找追踪号。"
    ]
  }
,

  {
    id: "p53",
    pattern: "Do you have ____?",
    cn: "你们有 ____ 吗？",
    function: "表达需求",
    examples: [
      "Do you have this in stock?",
      "Do you have a smaller size?",
      "Do you have any other colors?",
      "Do you have a catalog I can look at?",
      "Do you have any questions for me?"
    ],
    examplesCn: [
      "这个有现货吗？",
      "有小一号的吗？",
      "有其他颜色吗？",
      "有目录可以看吗？",
      "你有什么问题要问我吗？"
    ]
  }
,

  {
    id: "p54",
    pattern: "I'm here to ____.",
    cn: "我是来 ____ 的。",
    function: "表达需求",
    examples: [
      "I'm here to pick up my order.",
      "I'm here to see the manager.",
      "I'm here to discuss the contract.",
      "I'm here to learn about your products.",
      "I'm here to solve this problem."
    ],
    examplesCn: [
      "我是来取订单的。",
      "我是来见经理的。",
      "我是来讨论合同的。",
      "我是来了解你们产品的。",
      "我是来解决这个问题的。"
    ]
  }
,

  {
    id: "p55",
    pattern: "Please ____.",
    cn: "请 ____。",
    function: "表达需求",
    examples: [
      "Please send me the details.",
      "Please wait a moment.",
      "Please check your email.",
      "Please let me know if there's any problem.",
      "Please keep me updated."
    ],
    examplesCn: [
      "请发给我详情。",
      "请稍等。",
      "请查看邮件。",
      "有问题请告诉我。",
      "请随时告诉我进展。"
    ]
  }
,

  {
    id: "p56",
    pattern: "Let me ____.",
    cn: "让我 ____。",
    function: "表达需求",
    examples: [
      "Let me check and get back to you.",
      "Let me think about it.",
      "Let me talk to my boss first.",
      "Let me show you the sample.",
      "Let me explain how it works."
    ],
    examplesCn: [
      "让我查一下再回复你。",
      "让我想想。",
      "让我先和老板谈谈。",
      "让我给你看样品。",
      "让我解释一下怎么用。"
    ]
  }
,

  {
    id: "p57",
    pattern: "Is there any way to ____?",
    cn: "有没有办法 ____？",
    function: "表达需求",
    examples: [
      "Is there any way to get it faster?",
      "Is there any way to lower the cost?",
      "Is there any way to fix this problem?",
      "Is there any way to check the status online?",
      "Is there any way to change the order now?"
    ],
    examplesCn: [
      "有没有办法更快拿到？",
      "有没有办法降低成本？",
      "有没有办法解决这个问题？",
      "有没有办法在线查状态？",
      "有没有办法现在改订单？"
    ]
  }
,

  {
    id: "p58",
    pattern: "I'd appreciate it if ____.",
    cn: "如果 ____ 我会很感激。",
    function: "表达需求",
    examples: [
      "I'd appreciate it if you could reply soon.",
      "I'd appreciate it if you could check this for me.",
      "I'd appreciate it if you could give me a call.",
      "I'd appreciate it if you could send the sample.",
      "I'd appreciate your honest opinion."
    ],
    examplesCn: [
      "如果你能尽快回复，我会很感激。",
      "如果你能帮我查一下，我会很感激。",
      "如果你能给我打个电话，我会很感激。",
      "如果你能寄样品，我会很感激。",
      "感谢你的诚实意见。"
    ]
  }
,


  // ============================================================
  // 六、时间与顺序 (Time & Sequence) — 句型 59-68
  // ============================================================
  {
    id: "p59",
    pattern: "First, ____. Then, ____.",
    cn: "首先 ____。然后 ____。",
    function: "时间顺序",
    examples: [
      "First, we check the quality. Then, we ship it out.",
      "First, I check emails. Then, I start my main work.",
      "First, let me introduce our company. Then, I'll show you the products.",
      "First, fill out this form. Then, we'll process your order.",
      "First, we need a sample. Then, we can discuss the price."
    ],
    examplesCn: [
      "首先，我们检查质量。然后，发货出去。",
      "首先，我查看邮件。然后，开始主要工作。",
      "首先，让我介绍我们公司。然后，我会展示产品。",
      "首先，填好这个表。然后，我们处理你的订单。",
      "首先，我们需要样品。然后，我们可以讨论价格。"
    ]
  }
,

  {
    id: "p60",
    pattern: "Before ____, make sure ____.",
    cn: "在 ____ 之前，确保 ____。",
    function: "时间顺序",
    examples: [
      "Before you pay, make sure you check the quality.",
      "Before the meeting, make sure to prepare the report.",
      "Before shipping, make sure the address is correct.",
      "Before you sign, make sure you read the contract.",
      "Before we start, make sure everyone is here."
    ],
    examplesCn: [
      "付款前，确保检查质量。",
      "开会前，确保准备好报告。",
      "发货前，确保地址正确。",
      "签字前，确保阅读合同。",
      "开始前，确保所有人都到了。"
    ]
  }
,

  {
    id: "p61",
    pattern: "After ____, we will ____.",
    cn: "在 ____ 之后，我们会 ____。",
    function: "时间顺序",
    examples: [
      "After we receive payment, we will ship the order.",
      "After the meeting, I will send you a summary.",
      "After checking the sample, I will let you know.",
      "After the holiday, we'll get back to work.",
      "After the test, we'll discuss the results."
    ],
    examplesCn: [
      "收到付款后，我们会发货。",
      "会后，我会发给你总结。",
      "检查样品后，我会告诉你。",
      "假期后，我们会继续工作。",
      "测试后，我们会讨论结果。"
    ]
  }
,

  {
    id: "p62",
    pattern: "As soon as ____, I will ____.",
    cn: "一 ____，我就 ____。",
    function: "时间顺序",
    examples: [
      "As soon as I get the tracking number, I will send it to you.",
      "As soon as the sample arrives, I will check it.",
      "As soon as I hear from them, I will let you know.",
      "As soon as the meeting ends, I'll call you.",
      "As soon as possible, please."
    ],
    examplesCn: [
      "我一拿到追踪号就发给你。",
      "样品一到我就检查。",
      "我一收到他们的消息就告诉你。",
      "会议一结束我就给你打电话。",
      "请尽快。"
    ]
  }
,

  {
    id: "p63",
    pattern: "I've already ____.",
    cn: "我已经 ____ 了。",
    function: "时间顺序",
    examples: [
      "I've already placed the order.",
      "I've already sent the payment.",
      "I've already talked to the manager.",
      "I've already checked the tracking number.",
      "I've already read the contract."
    ],
    examplesCn: [
      "我已经下单了。",
      "我已经付款了。",
      "我已经和经理谈过了。",
      "我已经查过追踪号了。",
      "我已经读过合同了。"
    ]
  }
,

  {
    id: "p64",
    pattern: "I haven't ____ yet.",
    cn: "我还没有 ____。",
    function: "时间顺序",
    examples: [
      "I haven't received the package yet.",
      "I haven't decided yet.",
      "I haven't heard back from them yet.",
      "I haven't checked the sample yet.",
      "I haven't had time to review it yet."
    ],
    examplesCn: [
      "我还没收到包裹。",
      "我还没决定。",
      "我还没收到他们的回复。",
      "我还没检查样品。",
      "我还没时间审阅。"
    ]
  }
,

  {
    id: "p65",
    pattern: "It takes + time + to ____.",
    cn: "做 ____ 需要 ____ (时间)。",
    function: "时间顺序",
    examples: [
      "It takes about two weeks to ship.",
      "It takes time to build trust.",
      "It takes 30 minutes to get there.",
      "It takes practice to speak fluently.",
      "It takes a lot of effort to run a business."
    ],
    examplesCn: [
      "发货大约需要两周。",
      "建立信任需要时间。",
      "到那里需要30分钟。",
      "流利说需要练习。",
      "经营生意需要很多努力。"
    ]
  }
,

  {
    id: "p66",
    pattern: "I spend + time + ____ing.",
    cn: "我花 ____ (时间) ____。",
    function: "时间顺序",
    examples: [
      "I spend two hours a day learning English.",
      "I spend most of my time on customer service.",
      "I spend a lot of time checking quality.",
      "I spend too much time on emails.",
      "I spend weekends with my family."
    ],
    examplesCn: [
      "我每天花两小时学英语。",
      "我大部分时间花在客服上。",
      "我花很多时间检查质量。",
      "我花太多时间在邮件上。",
      "我周末陪家人。"
    ]
  }
,

  {
    id: "p67",
    pattern: "While ____, I ____.",
    cn: "在 ____ 的时候，我 ____。",
    function: "时间顺序",
    examples: [
      "While I was checking the order, I found a problem.",
      "While traveling, I always check emails.",
      "While waiting for the reply, I worked on other things.",
      "While the machine is running, don't touch it.",
      "While studying English, I listen to podcasts."
    ],
    examplesCn: [
      "检查订单的时候，我发现了一个问题。",
      "旅行的时候，我总会查看邮件。",
      "等回复的时候，我做了其他事情。",
      "机器运行时，不要碰它。",
      "学英语时，我听播客。"
    ]
  }
,

  {
    id: "p68",
    pattern: "From now on, ____.",
    cn: "从现在开始，____。",
    function: "时间顺序",
    examples: [
      "From now on, I will check everything twice.",
      "From now on, we'll use this new system.",
      "From now on, let's communicate by email.",
      "From now on, I'll practice English every day.",
      "From now on, I'll keep better records."
    ],
    examplesCn: [
      "从现在开始，每样东西我都会检查两遍。",
      "从现在开始，我们用这个新系统。",
      "从现在开始，我们通过邮件沟通。",
      "从现在开始，我每天练英语。",
      "从现在开始，我会做好记录。"
    ]
  }
,


  // ============================================================
  // 七、条件与因果 (Condition & Cause) — 句型 69-78
  // ============================================================
  {
    id: "p69",
    pattern: "If ____, I will ____.",
    cn: "如果 ____，我会 ____。",
    function: "条件因果",
    examples: [
      "If the price is good, I will place a big order.",
      "If it rains, I will stay home.",
      "If you need anything, I will be happy to help.",
      "If I don't hear back, I will call again.",
      "If the sample looks good, we can move forward."
    ],
    examplesCn: [
      "如果价格合适，我会下大单。",
      "如果下雨，我会待在家。",
      "如果你需要什么，我很乐意帮忙。",
      "如果我没有收到回复，我会再打电话。",
      "如果样品看起来不错，我们可以继续推进。"
    ]
  }
,

  {
    id: "p70",
    pattern: "If I were you, I would ____.",
    cn: "如果我是你，我会 ____。",
    function: "条件因果",
    examples: [
      "If I were you, I would accept the offer.",
      "If I were you, I would wait for the sample.",
      "If I were you, I would talk to them directly.",
      "If I were you, I would get everything in writing.",
      "If I were you, I wouldn't worry too much."
    ],
    examplesCn: [
      "如果我是你，我会接受报价。",
      "如果我是你，我会等样品。",
      "如果我是你，我会直接跟他们谈。",
      "如果我是你，我会把所有东西都写下来。",
      "如果我是你，我不会太担心。"
    ]
  }
,

  {
    id: "p71",
    pattern: "Because of ____, ____.",
    cn: "因为 ____，____。",
    function: "条件因果",
    examples: [
      "Because of the holiday, shipping is delayed.",
      "Because of the rain, the event was canceled.",
      "Because of high demand, some items are out of stock.",
      "Because of the price increase, we lost some customers.",
      "Because of your help, we finished on time."
    ],
    examplesCn: [
      "因为假期，发货延迟了。",
      "因为下雨，活动取消了。",
      "因为需求大，有些商品缺货了。",
      "因为涨价，我们失去了一些客户。",
      "因为你的帮助，我们按时完成了。"
    ]
  }
,

  {
    id: "p72",
    pattern: "The reason (why) ____ is ____.",
    cn: "____ 的原因是 ____。",
    function: "条件因果",
    examples: [
      "The reason I called is to confirm the order.",
      "The reason it's late is the bad weather.",
      "The reason we chose them is their quality.",
      "The reason I'm learning English is for my business.",
      "The reason I'm asking is to avoid mistakes."
    ],
    examplesCn: [
      "我打电话的原因是确认订单。",
      "晚了的原因是天气不好。",
      "我们选他们的原因是质量。",
      "我学英语的原因是为了生意。",
      "我问的原因是为了避免出错。"
    ]
  }
,

  {
    id: "p73",
    pattern: "That's why ____.",
    cn: "这就是为什么 ____。",
    function: "条件因果",
    examples: [
      "That's why I want to check the sample first.",
      "That's why we need a written agreement.",
      "That's why I always use a tracking number.",
      "That's why practice is so important.",
      "That's why I'm asking for your advice."
    ],
    examplesCn: [
      "这就是为什么我想先看样品。",
      "这就是为什么我们需要书面协议。",
      "这就是为什么我总用追踪号。",
      "这就是为什么练习那么重要。",
      "这就是为什么我在征求你的意见。"
    ]
  }
,

  {
    id: "p74",
    pattern: "As long as ____, ____.",
    cn: "只要 ____，就 ____。",
    function: "条件因果",
    examples: [
      "As long as the quality is good, I'll keep ordering.",
      "As long as you're happy, I'm happy.",
      "As long as we communicate, there won't be problems.",
      "As long as it arrives by Friday, it's fine.",
      "As long as you keep practicing, you'll improve."
    ],
    examplesCn: [
      "只要质量好，我会一直订。",
      "只要你开心，我就开心。",
      "只要我们沟通，就不会有问题。",
      "只要周五前到就行。",
      "只要你坚持练习，你就会进步。"
    ]
  }
,

  {
    id: "p75",
    pattern: "Unless ____, ____.",
    cn: "除非 ____，否则 ____。",
    function: "条件因果",
    examples: [
      "Unless you check the quality, you might get bad products.",
      "Unless we hurry, we'll miss the deadline.",
      "Unless it's too expensive, I'll buy it.",
      "Unless you have a better idea, let's go with this.",
      "Unless the sample is perfect, I won't order."
    ],
    examplesCn: [
      "除非你检查质量，否则可能收到差的产品。",
      "除非我们快点，否则会错过截止日期。",
      "除非太贵，否则我会买。",
      "除非你有更好的主意，否则就用这个。",
      "除非样品完美，否则我不会订。"
    ]
  }
,

  {
    id: "p76",
    pattern: "Even if ____, ____.",
    cn: "即使 ____，也 ____。",
    function: "条件因果",
    examples: [
      "Even if it's more expensive, I prefer quality.",
      "Even if you fail, you learn something.",
      "Even if he doesn't agree, I'll try.",
      "Even if it takes longer, we should do it right.",
      "Even if I'm tired, I practice every day."
    ],
    examplesCn: [
      "即使更贵，我也偏爱质量。",
      "即使你失败，也能学到东西。",
      "即使他不同意，我也会试。",
      "即使花更长时间，我们也应该做对。",
      "即使累了，我也每天练习。"
    ]
  }
,

  {
    id: "p77",
    pattern: "No matter ____, ____.",
    cn: "无论 ____，____。",
    function: "条件因果",
    examples: [
      "No matter what happens, don't give up.",
      "No matter how hard it is, keep trying.",
      "No matter where you are, I'll find you.",
      "No matter the price, quality comes first.",
      "No matter how busy I am, I study every day."
    ],
    examplesCn: [
      "无论发生什么，不要放弃。",
      "无论多难，继续尝试。",
      "无论你在哪里，我都会找到你。",
      "无论价格如何，质量第一。",
      "无论多忙，我每天都学习。"
    ]
  }
,

  {
    id: "p78",
    pattern: "The more ____, the more ____.",
    cn: "越 ____，越 ____。",
    function: "条件因果",
    examples: [
      "The more you practice, the better you get.",
      "The more you order, the lower the price.",
      "The more I learn, the more confident I feel.",
      "The more you communicate, the fewer problems you have.",
      "The more time you spend, the better the result."
    ],
    examplesCn: [
      "你练得越多，就越好。",
      "你订得越多，价格越低。",
      "我学得越多，就越自信。",
      "你沟通越多，问题就越少。",
      "你花的时间越多，结果就越好。"
    ]
  }
,


  // ============================================================
  // 八、比较与选择 (Comparison & Choice) — 句型 79-86
  // ============================================================
  {
    id: "p79",
    pattern: "____ is better than ____.",
    cn: "____ 比 ____ 好。",
    function: "比较选择",
    examples: [
      "Quality is better than quantity.",
      "This one is better than that one.",
      "Email is better than text messages for business.",
      "Doing it right is better than doing it fast.",
      "A good relationship is better than a low price."
    ],
    examplesCn: [
      "质量比数量好。",
      "这个比那个好。",
      "做生意，邮件比短信好。",
      "做好比做快好。",
      "好的关系比低价好。"
    ]
  }
,

  {
    id: "p80",
    pattern: "____ is not as + adj + as ____.",
    cn: "____ 不如 ____。",
    function: "比较选择",
    examples: [
      "This product is not as good as the sample.",
      "Their price is not as low as I expected.",
      "His English is not as good as yours.",
      "The new model is not as popular as the old one.",
      "Working alone is not as fun as working in a team."
    ],
    examplesCn: [
      "这个产品不如样品好。",
      "他们的价格不如我预期的低。",
      "他的英语不如你好。",
      "新款不如老款受欢迎。",
      "独自工作不如团队合作有趣。"
    ]
  }
,

  {
    id: "p81",
    pattern: "Between A and B, I prefer ____.",
    cn: "在 A 和 B 之间，我更喜欢 ____。",
    function: "比较选择",
    examples: [
      "Between the two options, I prefer the first one.",
      "Between price and quality, I prefer quality.",
      "Between email and phone, I prefer email.",
      "Between this color and that one, I prefer blue.",
      "Between working alone and in a team, I prefer working in a team."
    ],
    examplesCn: [
      "两个选项中，我更喜欢第一个。",
      "价格和质量之间，我更喜欢质量。",
      "邮件和电话之间，我更喜欢邮件。",
      "这个颜色和那个颜色之间，我更喜欢蓝色。",
      "独自工作和团队合作之间，我更喜欢团队合作。"
    ]
  }
,

  {
    id: "p82",
    pattern: "I'd rather ____ than ____.",
    cn: "我宁愿 ____ 也不 ____。",
    function: "比较选择",
    examples: [
      "I'd rather pay more for quality than risk it.",
      "I'd rather wait than rush a bad product.",
      "I'd rather call than send an email.",
      "I'd rather do it myself than trust someone else.",
      "I'd rather be safe than sorry."
    ],
    examplesCn: [
      "我宁愿多花钱买质量，也不愿冒险。",
      "我宁愿等，也不愿赶出差产品。",
      "我宁愿打电话，也不愿发邮件。",
      "我宁愿自己做，也不愿信任别人。",
      "我宁愿安全，也不愿后悔。"
    ]
  }
,

  {
    id: "p83",
    pattern: "The difference between ____ and ____ is ____.",
    cn: "____ 和 ____ 的区别是 ____。",
    function: "比较选择",
    examples: [
      "The difference between the two models is the size.",
      "The biggest difference is the price.",
      "The difference between A and B is the material.",
      "The main difference is the shipping time.",
      "There's not much difference between them."
    ],
    examplesCn: [
      "两个型号的区别是尺寸。",
      "最大的区别是价格。",
      "A和B的区别是材质。",
      "主要区别是发货时间。",
      "它们之间没什么区别。"
    ]
  }
,

  {
    id: "p84",
    pattern: "It depends on ____.",
    cn: "这要看 ____。",
    function: "比较选择",
    examples: [
      "It depends on the quantity.",
      "It depends on how fast you need it.",
      "It depends on your budget.",
      "It depends on the market situation.",
      "It depends on what you're looking for."
    ],
    examplesCn: [
      "这要看数量。",
      "这要看你要多快。",
      "这要看你的预算。",
      "这要看市场情况。",
      "这要看你在找什么。"
    ]
  }
,

  {
    id: "p85",
    pattern: "On one hand, ____. On the other hand, ____.",
    cn: "一方面 ____，另一方面 ____。",
    function: "比较选择",
    examples: [
      "On one hand, the price is good. On the other hand, the quality could be better.",
      "On one hand, I want to go. On the other hand, I'm very busy.",
      "On one hand, it's a great opportunity. On the other hand, it's a big risk.",
      "On one hand, shipping is free. On the other hand, it takes longer.",
      "On one hand, I like the design. On the other hand, the color is too bright."
    ],
    examplesCn: [
      "一方面，价格不错。另一方面，质量可以更好。",
      "一方面，我想去。另一方面，我很忙。",
      "一方面，这是个好机会。另一方面，风险也很大。",
      "一方面，包邮。另一方面，时间更长。",
      "一方面，我喜欢设计。另一方面，颜色太亮了。"
    ]
  }
,

  {
    id: "p86",
    pattern: "____ is worth it.",
    cn: "____ 是值得的。",
    function: "比较选择",
    examples: [
      "The extra cost is worth it for better quality.",
      "Learning English is worth the effort.",
      "The wait was worth it.",
      "It's not worth the risk.",
      "A good sample is always worth it."
    ],
    examplesCn: [
      "多花点钱换更好的质量是值得的。",
      "学英语付出的努力是值得的。",
      "等待是值得的。",
      "不值得冒这个风险。",
      "好的样品总是值得的。"
    ]
  }
,


  // ============================================================
  // 九、商务场景 (Business Scenarios) — 句型 87-94
  // ============================================================
  {
    id: "p87",
    pattern: "What's your best price for ____?",
    cn: "____ 你的最低价是多少？",
    function: "商务场景",
    examples: [
      "What's your best price for 500 units?",
      "What's your best price for this model?",
      "What's your best price including shipping?",
      "What's your best price for bulk orders?",
      "What's your best price for new customers?"
    ],
    examplesCn: [
      "500件最低价多少？",
      "这个型号最低价多少？",
      "含运费最低价多少？",
      "批量订单最低价多少？",
      "新客户最低价多少？"
    ]
  }
,

  {
    id: "p88",
    pattern: "I'd like to place an order for ____.",
    cn: "我想订购 ____。",
    function: "商务场景",
    examples: [
      "I'd like to place an order for 200 pieces.",
      "I'd like to place an order for the blue ones.",
      "I'd like to place a trial order first.",
      "I'd like to place an order after seeing the sample.",
      "I'd like to place a regular order every month."
    ],
    examplesCn: [
      "我想订200件。",
      "我想订蓝色的。",
      "我想先下个试单。",
      "我想看完样品再下单。",
      "我想每月定期下单。"
    ]
  }
,

  {
    id: "p89",
    pattern: "Can we get a ____?",
    cn: "我们能 ____ 吗？",
    function: "商务场景",
    examples: [
      "Can we get a discount for bulk orders?",
      "Can we get a sample before ordering?",
      "Can we get a better delivery time?",
      "Can we get the invoice by email?",
      "Can we get a written guarantee?"
    ],
    examplesCn: [
      "批量订有折扣吗？",
      "下单前能拿样品吗？",
      "能更快发货吗？",
      "能邮件发发票吗？",
      "能提供书面保证吗？"
    ]
  }
,

  {
    id: "p90",
    pattern: "Please find ____ attached.",
    cn: "请查收附件中的 ____。",
    function: "商务场景",
    examples: [
      "Please find the quotation attached.",
      "Please find the invoice attached.",
      "Please find the product photos attached.",
      "Please find the contract attached.",
      "Please find the catalog attached."
    ],
    examplesCn: [
      "请查收附件中的报价单。",
      "请查收附件中的发票。",
      "请查收附件中的产品图片。",
      "请查收附件中的合同。",
      "请查收附件中的目录。"
    ]
  }
,

  {
    id: "p91",
    pattern: "I look forward to ____.",
    cn: "我期待 ____。",
    function: "商务场景",
    examples: [
      "I look forward to hearing from you.",
      "I look forward to working with you.",
      "I look forward to your reply.",
      "I look forward to seeing the samples.",
      "I look forward to a long-term partnership."
    ],
    examplesCn: [
      "期待您的回复。",
      "期待与你合作。",
      "期待你的回复。",
      "期待看到样品。",
      "期待长期合作。"
    ]
  }
,

  {
    id: "p92",
    pattern: "We apologize for ____.",
    cn: "我们为 ____ 道歉。",
    function: "商务场景",
    examples: [
      "We apologize for the delay.",
      "We apologize for the mistake.",
      "We apologize for any inconvenience.",
      "We apologize for the damaged item.",
      "We apologize for the confusion."
    ],
    examplesCn: [
      "我们为延迟道歉。",
      "我们为错误道歉。",
      "我们为不便道歉。",
      "我们为损坏的商品道歉。",
      "我们为混淆道歉。"
    ]
  }
,

  {
    id: "p93",
    pattern: "How would you like to ____?",
    cn: "你想怎么 ____？",
    function: "商务场景",
    examples: [
      "How would you like to pay?",
      "How would you like to ship this?",
      "How would you like to receive the invoice?",
      "How would you like to handle returns?",
      "How would you like to communicate going forward?"
    ],
    examplesCn: [
      "你想怎么付款？",
      "你想怎么发货？",
      "你想怎么收发票？",
      "你想怎么处理退货？",
      "以后你想怎么沟通？"
    ]
  }
,

  {
    id: "p94",
    pattern: "Let's ____ and ____.",
    cn: "我们 ____ 然后 ____。",
    function: "商务场景",
    examples: [
      "Let's discuss the details and sign the contract.",
      "Let's check the sample and then decide.",
      "Let's start with a small order and see how it goes.",
      "Let's meet next week and go over the plan.",
      "Let's confirm the price and place the order."
    ],
    examplesCn: [
      "我们讨论细节然后签合同。",
      "我们检查样品然后决定。",
      "我们从小单开始，看看怎么样。",
      "我们下周见面过一遍计划。",
      "我们确认价格然后下单。"
    ]
  }
,


  // ============================================================
  // 十、日常沟通 (Daily Communication) — 句型 95-100
  // ============================================================
  {
    id: "p95",
    pattern: "I'm on my way to ____.",
    cn: "我在去 ____ 的路上。",
    function: "日常沟通",
    examples: [
      "I'm on my way to the office.",
      "I'm on my way to the meeting.",
      "I'm on my way to the airport.",
      "I'm on my way to pick up the samples.",
      "I'm on my way, I'll be there in 10 minutes."
    ],
    examplesCn: [
      "我在去办公室的路上。",
      "我在去开会的路上。",
      "我在去机场的路上。",
      "我在去取样品的路上。",
      "我在路上，10分钟后到。"
    ]
  }
,

  {
    id: "p96",
    pattern: "I'm going to ____.",
    cn: "我打算 ____。",
    function: "日常沟通",
    examples: [
      "I'm going to visit the factory tomorrow.",
      "I'm going to send you the details tonight.",
      "I'm going to learn English every day.",
      "I'm going to call them back later.",
      "I'm going to take a vacation next month."
    ],
    examplesCn: [
      "我打算明天参观工厂。",
      "我打算今晚把详情发给你。",
      "我要每天学英语。",
      "我打算晚点给他们回电话。",
      "我打算下个月休假。"
    ]
  }
,

  {
    id: "p97",
    pattern: "Can I get back to you on ____?",
    cn: "我能 ____ 再回复你吗？",
    function: "日常沟通",
    examples: [
      "Can I get back to you on that tomorrow?",
      "Can I get back to you after I check with my team?",
      "Can I get back to you with a price?",
      "Can I get back to you once I have the information?",
      "Can I get back to you by Friday?"
    ],
    examplesCn: [
      "我明天再回复你可以吗？",
      "我和团队确认后再回复你可以吗？",
      "我把价格告诉你之后再回复你可以吗？",
      "我拿到信息后再回复你可以吗？",
      "我周五前回复你可以吗？"
    ]
  }
,

  {
    id: "p98",
    pattern: "Sorry to bother you, but ____.",
    cn: "抱歉打扰，____。",
    function: "日常沟通",
    examples: [
      "Sorry to bother you, but I have a question.",
      "Sorry to bother you, but can you help me?",
      "Sorry to bother you, but the delivery is late.",
      "Sorry to bother you, but I need your signature.",
      "Sorry to bother you so late."
    ],
    examplesCn: [
      "抱歉打扰，我有个问题。",
      "抱歉打扰，能帮我一下吗？",
      "抱歉打扰，快递迟了。",
      "抱歉打扰，我需要你的签名。",
      "抱歉这么晚打扰。"
    ]
  }
,

  {
    id: "p99",
    pattern: "No problem, ____.",
    cn: "没问题，____。",
    function: "日常沟通",
    examples: [
      "No problem, I can wait.",
      "No problem, take your time.",
      "No problem, I understand.",
      "No problem, let's try another way.",
      "No problem, I'll handle it."
    ],
    examplesCn: [
      "没问题，我可以等。",
      "没问题，慢慢来。",
      "没问题，我理解。",
      "没问题，我们换个方式试试。",
      "没问题，我来处理。"
    ]
  }
,

  {
    id: "p100",
    pattern: "Keep me posted on ____.",
    cn: "____ 有进展告诉我。",
    function: "日常沟通",
    examples: [
      "Keep me posted on the delivery status.",
      "Keep me posted on the sample progress.",
      "Keep me posted on their decision.",
      "Keep me posted on any updates.",
      "Keep me posted on how it goes."
    ],
    examplesCn: [
      "物流状态有进展告诉我。",
      "样品进展有消息告诉我。",
      "他们的决定有消息告诉我。",
      "有任何更新告诉我。",
      "进展如何告诉我。"
    ]
  }
,


  // ============================================================
  // 十一、日常沟通扩展 (Daily Communication Extended) — 句型 101-108
  // ============================================================
  {
    id: "p101",
    pattern: "Let me know if ____.",
    cn: "如果 ____ 告诉我。",
    function: "日常沟通",
    examples: [
      "Let me know if you need anything.",
      "Let me know if the price works for you.",
      "Let me know if there's any problem.",
      "Let me know if you want to change anything.",
      "Let me know if you have a better idea."
    ],
    examplesCn: [
      "如果你需要什么，告诉我。",
      "如果价格合适，告诉我。",
      "如果有任何问题，告诉我。",
      "如果你想改什么，告诉我。",
      "如果你有更好的主意，告诉我。"
    ]
  }
,

  {
    id: "p102",
    pattern: "I'll ____ as soon as ____.",
    cn: "一 ____ 我就 ____。",
    function: "日常沟通",
    examples: [
      "I'll call you as soon as I arrive.",
      "I'll send it as soon as it's ready.",
      "I'll let you know as soon as I hear back.",
      "I'll pay as soon as I get the invoice.",
      "I'll start as soon as I get the details."
    ],
    examplesCn: [
      "我一到就给你打电话。",
      "一准备好我就发。",
      "一收到回复我就告诉你。",
      "一收到发票我就付款。",
      "一拿到详情我就开始。"
    ]
  }
,

  {
    id: "p103",
    pattern: "I'm not sure about ____.",
    cn: "我对 ____ 不太确定。",
    function: "日常沟通",
    examples: [
      "I'm not sure about the delivery date.",
      "I'm not sure about this color.",
      "I'm not sure about their quality.",
      "I'm not sure about the price.",
      "I'm not sure about the next step."
    ],
    examplesCn: [
      "我对交货日期不太确定。",
      "我对这个颜色不太确定。",
      "我对他们的质量不太确定。",
      "我对价格不太确定。",
      "我对下一步不太确定。"
    ]
  }
,

  {
    id: "p104",
    pattern: "Thanks for ____.",
    cn: "感谢 ____。",
    function: "日常沟通",
    examples: [
      "Thanks for your help.",
      "Thanks for your time.",
      "Thanks for the quick reply.",
      "Thanks for understanding.",
      "Thanks for the update."
    ],
    examplesCn: [
      "感谢你的帮助。",
      "感谢你抽出时间。",
      "感谢快速回复。",
      "感谢理解。",
      "感谢更新。"
    ]
  }
,

  {
    id: "p105",
    pattern: "I'll get back to you ____.",
    cn: "我 ____ 回复你。",
    function: "日常沟通",
    examples: [
      "I'll get back to you soon.",
      "I'll get back to you by the end of the day.",
      "I'll get back to you after I check.",
      "I'll get back to you with an answer.",
      "I'll get back to you as soon as possible."
    ],
    examplesCn: [
      "我很快回复你。",
      "我今天结束前回复你。",
      "我查完以后回复你。",
      "我有答案了回复你。",
      "我尽快回复你。"
    ]
  }
,

  {
    id: "p106",
    pattern: "Take your time, ____.",
    cn: "慢慢来，____。",
    function: "日常沟通",
    examples: [
      "Take your time, there's no rush.",
      "Take your time, I can wait.",
      "Take your time, think about it carefully.",
      "Take your time, let me know when you're ready.",
      "Take your time, quality is more important."
    ],
    examplesCn: [
      "慢慢来，不急。",
      "慢慢来，我可以等。",
      "慢慢来，仔细想。",
      "慢慢来，准备好了告诉我。",
      "慢慢来，质量更重要。"
    ]
  }
,

  {
    id: "p107",
    pattern: "I was just about to ____.",
    cn: "我正准备 ____。",
    function: "日常沟通",
    examples: [
      "I was just about to call you.",
      "I was just about to send the email.",
      "I was just about to leave.",
      "I was just about to ask the same thing.",
      "I was just about to check the order."
    ],
    examplesCn: [
      "我正准备给你打电话。",
      "我正准备发邮件。",
      "我正准备出发。",
      "我正准备问同样的事。",
      "我正准备查订单。"
    ]
  }
,

  {
    id: "p108",
    pattern: "I didn't mean to ____.",
    cn: "我不是故意 ____。",
    function: "日常沟通",
    examples: [
      "I didn't mean to bother you.",
      "I didn't mean to make you wait.",
      "I didn't mean to sound rude.",
      "I didn't mean to cause any trouble.",
      "I didn't mean to send that message."
    ],
    examplesCn: [
      "我不是故意打扰你。",
      "我不是故意让你等。",
      "我不是故意听起来没礼貌。",
      "我不是故意惹麻烦。",
      "我不是故意发那条消息的。"
    ]
  }

];
