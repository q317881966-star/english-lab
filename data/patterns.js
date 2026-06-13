// English Lab — 句型库（75个句型，S/A/B 三级）
const SENTENCE_PATTERNS = [
  // ========================================
  // S级 · 核心必备 20个
  // ========================================

  { id: 'p01', pattern: "I'm ____.", cn: '我是……', function: '日常沟通', examples: [
    "I'm a student.", "I'm from Beijing.", "I'm really happy today.", "I'm sorry about that.", "I'm ready to go."
  ], examplesCn: ['我是学生。', '我来自北京。', '我今天很开心。', '那件事我很抱歉。', '我准备好了。'] },

  { id: 'p02', pattern: "This is ____. / That is ____.", cn: '这是…… / 那是……', function: '日常沟通', examples: [
    "This is my friend Tom.", "That is a great idea.", "This is the book I told you about.", "That is exactly what I mean.", "This is where I work."
  ], examplesCn: ['这是我的朋友Tom。', '那是个好主意。', '这就是我跟你说过的那本书。', '那正是我的意思。', '这是我工作的地方。'] },

  { id: 'p03', pattern: "I'm from ____.", cn: '我来自……', function: '日常沟通', examples: [
    "I'm from China.", "I'm from a small town in the south.", "I'm from Shanghai, but I live in Beijing now.", "I'm from the marketing department."
  ], examplesCn: ['我来自中国。', '我来自南方的一个小镇。', '我来自上海，但现在住在北京。', '我来自市场部。'] },

  { id: 'p04', pattern: 'I want ____.', cn: '我想要……', function: '表达需求', examples: [
    "I want a cup of coffee.", "I want to learn English.", "I want to go home now.", "I want to talk to the manager.", "I want something different."
  ], examplesCn: ['我想要一杯咖啡。', '我想学英语。', '我现在想回家。', '我想和经理谈谈。', '我想要点不一样的。'] },

  { id: 'p05', pattern: 'I need to ____.', cn: '我需要……', function: '表达需求', examples: [
    "I need to finish this report.", "I need to call my mom.", "I need to get some sleep.", "I need to buy some groceries.", "I need to think about it."
  ], examplesCn: ['我需要完成这份报告。', '我需要给我妈妈打电话。', '我需要睡会儿觉。', '我需要买些日用品。', '我需要考虑一下。'] },

  { id: 'p06', pattern: 'Can I ____?', cn: '我能……吗？', function: '表达需求', examples: [
    "Can I help you?", "Can I have a glass of water?", "Can I ask you a question?", "Can I sit here?", "Can I pay by card?"
  ], examplesCn: ['我能帮你吗？', '我能要杯水吗？', '我能问你一个问题吗？', '我能坐这儿吗？', '我能刷卡吗？'] },

  { id: 'p07', pattern: 'Please ____.', cn: '请……', function: '日常沟通', examples: [
    "Please sit down.", "Please wait a moment.", "Please let me know if you need help.", "Please come in.", "Please don't be late."
  ], examplesCn: ['请坐。', '请稍等。', '如需帮助请告诉我。', '请进。', '请不要迟到。'] },

  { id: 'p08', pattern: 'Thank you for ____.', cn: '感谢你……', function: '日常沟通', examples: [
    "Thank you for your help.", "Thank you for coming.", "Thank you for the wonderful dinner.", "Thank you for listening.", "Thank you for everything."
  ], examplesCn: ['感谢你的帮助。', '感谢你的到来。', '感谢这顿美好的晚餐。', '感谢你的倾听。', '感谢你所做的一切。'] },

  { id: 'p09', pattern: 'Where is ____?', cn: '……在哪里？', function: '询问信息', examples: [
    "Where is the bathroom?", "Where is the nearest subway station?", "Where is my phone?", "Where is the meeting room?", "Where is he from?"
  ], examplesCn: ['洗手间在哪里？', '最近的地铁站在哪里？', '我的手机在哪里？', '会议室在哪里？', '他是哪里人？'] },

  { id: 'p10', pattern: 'How much is ____?', cn: '……多少钱？/ 多少……？', function: '询问信息', examples: [
    "How much is this?", "How much is the rent?", "How much does it cost?", "How much time do we have?", "How much longer do we need to wait?"
  ], examplesCn: ['这个多少钱？', '房租多少？', '这个要花多少钱？', '我们还有多少时间？', '我们还要等多久？'] },

  { id: 'p11', pattern: 'I like ____.', cn: '我喜欢……', function: '表达观点', examples: [
    "I like this song.", "I like playing basketball.", "I like the way you think.", "I like spending time with you.", "I like it here."
  ], examplesCn: ['我喜欢这首歌。', '我喜欢打篮球。', '我喜欢你的想法。', '我喜欢和你在一起。', '我喜欢这里。'] },

  { id: 'p12', pattern: "I don't like ____.", cn: '我不喜欢……', function: '表达观点', examples: [
    "I don't like spicy food.", "I don't like getting up early.", "I don't like the weather here.", "I don't like being rushed.", "I don't like this color."
  ], examplesCn: ['我不喜欢辣的食物。', '我不喜欢早起。', '我不喜欢这里的天气。', '我不喜欢被催促。', '我不喜欢这个颜色。'] },

  { id: 'p13', pattern: 'There is/are ____ on/in ____.', cn: '……上有/里有……', function: '描述事实', examples: [
    "There is a book on the table.", "There are many people in the park.", "There is a problem with the system.", "There are some apples in the fridge.", "There is a message for you on the desk."
  ], examplesCn: ['桌子上有一本书。', '公园里有很多人。', '系统有问题。', '冰箱里有些苹果。', '桌上有给你的留言。'] },

  { id: 'p14', pattern: 'I have ____.', cn: '我有……', function: '日常沟通', examples: [
    "I have a question.", "I have two brothers.", "I have an idea.", "I have a lot of work to do.", "I have something to tell you."
  ], examplesCn: ['我有个问题。', '我有两个兄弟。', '我有个主意。', '我有很多工作要做。', '我有事要告诉你。'] },

  { id: 'p15', pattern: 'Do you have ____?', cn: '你有……吗？', function: '询问信息', examples: [
    "Do you have any questions?", "Do you have a pen I can borrow?", "Do you have time this afternoon?", "Do you have experience in this field?", "Do you have children?"
  ], examplesCn: ['你有什么问题吗？', '你有笔可以借我吗？', '你今天下午有空吗？', '你在这个领域有经验吗？', '你有孩子吗？'] },

  { id: 'p16', pattern: 'What is ____?', cn: '……是什么？', function: '询问信息', examples: [
    "What is your name?", "What is the problem?", "What is the best way to learn English?", "What is that noise?", "What is on your mind?"
  ], examplesCn: ['你叫什么名字？', '问题是什么？', '学英语最好的方法是什么？', '那是什么声音？', '你在想什么？'] },

  { id: 'p17', pattern: 'Who is ____?', cn: '……是谁？', function: '询问信息', examples: [
    "Who is that person?", "Who is in charge here?", "Who is your favorite singer?", "Who is going to the party?", "Who is calling please?"
  ], examplesCn: ['那个人是谁？', '这里谁负责？', '你最喜欢的歌手是谁？', '谁要去派对？', '请问是哪位？'] },

  { id: 'p18', pattern: 'When is ____?', cn: '……是什么时候？', function: '询问信息', examples: [
    "When is the meeting?", "When is your birthday?", "When is the deadline?", "When is a good time to call you?", "When is the next train?"
  ], examplesCn: ['会议是什么时候？', '你的生日是什么时候？', '截止日期是什么时候？', '什么时候给你打电话方便？', '下一班火车是什么时候？'] },

  { id: 'p19', pattern: 'I went to ____ yesterday.', cn: '我昨天去了……', function: '描述事实', examples: [
    "I went to the hospital yesterday.", "I went to a concert yesterday.", "I went to see a movie yesterday.", "I went to visit my parents yesterday.", "I went to the supermarket yesterday."
  ], examplesCn: ['我昨天去了医院。', '我昨天去了一场音乐会。', '我昨天去看了场电影。', '我昨天去看望了父母。', '我昨天去了超市。'] },

  { id: 'p20', pattern: "I'm going to ____ tomorrow.", cn: '我明天要去……', function: '描述事实', examples: [
    "I'm going to Beijing tomorrow.", "I'm going to see a doctor tomorrow.", "I'm going to start my new job tomorrow.", "I'm going to have a meeting tomorrow.", "I'm going to buy a new phone tomorrow."
  ], examplesCn: ['我明天要去北京。', '我明天要去看医生。', '我明天要开始新工作了。', '我明天有个会议。', '我明天要去买部新手机。'] },

  // ========================================
  // A级 · 高频常用 30个
  // ========================================

  { id: 'p21', pattern: 'I feel ____ (about it).', cn: '我觉得（对此）……', function: '表达观点', examples: [
    "I feel great about it.", "I feel a little nervous.", "I feel like we should wait.", "I feel the same way.", "I feel confident this will work."
  ], examplesCn: ['我对此感觉很好。', '我有点紧张。', '我觉得我们应该等等。', '我也有同感。', '我相信这能行。'] },

  { id: 'p22', pattern: 'It looks/sounds/smells/feels ____.', cn: '它看/听/闻/感觉起来……', function: '描述事实', examples: [
    "It looks beautiful.", "That sounds like a great plan.", "It smells delicious in here.", "It feels really soft.", "It sounds like you had a rough day."
  ], examplesCn: ['看起来很漂亮。', '听起来是个好计划。', '这里闻起来好香。', '摸起来很柔软。', '听起来你今天过得很艰难。'] },

  { id: 'p23', pattern: 'I think (that) ____.', cn: '我认为……', function: '表达观点', examples: [
    "I think that's a good idea.", "I think we should leave now.", "I think you're right.", "I think it's going to rain.", "I think I can handle it."
  ], examplesCn: ['我觉得那是个好主意。', '我认为我们现在该走了。', '我觉得你是对的。', '我觉得要下雨了。', '我觉得我能搞定。'] },

  { id: 'p24', pattern: "I don't think ____.", cn: '我不认为……', function: '表达观点', examples: [
    "I don't think that's true.", "I don't think we have enough time.", "I don't think he's coming.", "I don't think it matters.", "I don't think I can make it."
  ], examplesCn: ['我认为那不是真的。', '我觉得我们时间不够。', '我觉得他不会来了。', '我觉得这不重要。', '我觉得我去不了。'] },

  { id: 'p25', pattern: 'In my opinion, ____.', cn: '在我看来，……', function: '表达观点', examples: [
    "In my opinion, this is the best choice.", "In my opinion, we need more time.", "In my opinion, he did the right thing.", "In my opinion, it's worth the money.", "In my opinion, the food here is the best in town."
  ], examplesCn: ['在我看来，这是最好的选择。', '在我看来，我们需要更多时间。', '在我看来，他做得对。', '在我看来，这钱花得值。', '在我看来，这里的食物是城里最好的。'] },

  { id: 'p26', pattern: 'I enjoy ____.', cn: '我喜欢/享受……', function: '表达观点', examples: [
    "I enjoy reading books.", "I enjoy spending time with my family.", "I enjoy learning new things.", "I enjoy working here.", "I enjoy listening to music while I work."
  ], examplesCn: ['我喜欢读书。', '我喜欢和家人在一起。', '我喜欢学新东西。', '我喜欢在这里工作。', '我喜欢边工作边听音乐。'] },

  { id: 'p27', pattern: "I'm good at ____.", cn: '我擅长……', function: '描述事实', examples: [
    "I'm good at math.", "I'm good at solving problems.", "I'm good at cooking.", "I'm good at working with people.", "I'm good at remembering names."
  ], examplesCn: ['我擅长数学。', '我擅长解决问题。', '我擅长做饭。', '我擅长与人打交道。', '我擅长记名字。'] },

  { id: 'p28', pattern: "I've been to ____.", cn: '我去过……', function: '描述事实', examples: [
    "I've been to Japan twice.", "I've been to that restaurant before.", "I've been to many countries in Europe.", "I've been to the new shopping mall.", "I've been to her wedding."
  ], examplesCn: ['我去过日本两次。', '我去过那家餐厅。', '我去过欧洲很多国家。', '我去过那个新商场。', '我参加过她的婚礼。'] },

  { id: 'p29', pattern: "I've been ____ for/since ____.", cn: '我已经……（多久）了', function: '描述事实', examples: [
    "I've been working here for five years.", "I've been learning English since last year.", "I've been waiting for over an hour.", "I've been feeling tired lately.", "I've been thinking about this a lot."
  ], examplesCn: ['我在这里工作五年了。', '我从去年开始学英语。', '我已经等了一个多小时了。', '我最近一直觉得很累。', '我最近一直在想这件事。'] },

  { id: 'p30', pattern: 'I used to ____.', cn: '我以前……', function: '描述事实', examples: [
    "I used to live in Shanghai.", "I used to smoke, but I quit.", "I used to play the piano.", "I used to work at a bank.", "I used to be really shy."
  ], examplesCn: ['我以前住在上海。', '我以前抽烟，但戒了。', '我以前弹钢琴。', '我以前在银行工作。', '我以前很害羞。'] },

  { id: 'p31', pattern: 'How was ____?', cn: '……怎么样？', function: '询问信息', examples: [
    "How was your day?", "How was the movie?", "How was your trip?", "How was the meeting?", "How was your weekend?"
  ], examplesCn: ['你今天过得怎么样？', '电影怎么样？', '你的旅行怎么样？', '会议怎么样？', '你周末过得怎么样？'] },

  { id: 'p32', pattern: 'What do you do?', cn: '你做什么工作？', function: '询问信息', examples: [
    "What do you do for a living?", "What do you do in your free time?", "What do you do when you're stressed?", "What do you do on weekends?", "What do you do exactly?"
  ], examplesCn: ['你是做什么工作的？', '你空闲时间做什么？', '你压力大的时候做什么？', '你周末都做什么？', '你具体做什么？'] },

  { id: 'p33', pattern: 'What do you think about ____?', cn: '你对……怎么看？', function: '询问信息', examples: [
    "What do you think about this idea?", "What do you think about the new policy?", "What do you think about traveling alone?", "What do you think about him?", "What do you think about working from home?"
  ], examplesCn: ['你觉得这个主意怎么样？', '你对新政策怎么看？', '你觉得独自旅行怎么样？', '你觉得他怎么样？', '你觉得在家办公怎么样？'] },

  { id: 'p34', pattern: 'How do I get to ____?', cn: '我怎么去……？', function: '询问信息', examples: [
    "How do I get to the airport?", "How do I get to the nearest hospital?", "How do I get to your office from the station?", "How do I get to the city center?", "How do I get to the third floor?"
  ], examplesCn: ['我怎么去机场？', '最近的医院怎么走？', '从车站到你办公室怎么走？', '市中心怎么走？', '三楼怎么走？'] },

  { id: 'p35', pattern: 'Can you tell me ____?', cn: '你能告诉我……吗？', function: '询问信息', examples: [
    "Can you tell me the way to the station?", "Can you tell me more about the job?", "Can you tell me what happened?", "Can you tell me how to use this?", "Can you tell me when it starts?"
  ], examplesCn: ['你能告诉我去车站的路吗？', '你能告诉我更多关于这份工作的情况吗？', '你能告诉我发生了什么吗？', '你能告诉我这个怎么用吗？', '你能告诉我什么时候开始吗？'] },

  { id: 'p36', pattern: "I'm looking for ____.", cn: '我在找……', function: '表达需求', examples: [
    "I'm looking for a job.", "I'm looking for my keys.", "I'm looking for a good restaurant nearby.", "I'm looking for someone who can help.", "I'm looking for the exit."
  ], examplesCn: ['我在找工作。', '我在找我的钥匙。', '我在找附近好的餐厅。', '我在找能帮忙的人。', '我在找出口。'] },

  { id: 'p37', pattern: 'Would you like to ____?', cn: '你想……吗？', function: '表达需求', examples: [
    "Would you like to join us?", "Would you like to have dinner together?", "Would you like to try it?", "Would you like to sit down?", "Would you like to know more?"
  ], examplesCn: ['你想加入我们吗？', '你想一起吃晚饭吗？', '你想试试吗？', '你想坐下吗？', '你想了解更多吗？'] },

  { id: 'p38', pattern: "Let's ____.", cn: '让我们……吧', function: '提出建议', examples: [
    "Let's go.", "Let's take a break.", "Let's talk about it later.", "Let's try something different.", "Let's finish this first."
  ], examplesCn: ['走吧。', '我们休息一下吧。', '我们晚点再谈。', '我们试试不同的吧。', '我们先把这个完成吧。'] },

  { id: 'p39', pattern: "Why don't we ____?", cn: '我们何不……？', function: '提出建议', examples: [
    "Why don't we go for a walk?", "Why don't we order pizza?", "Why don't we meet earlier?", "Why don't we ask for help?", "Why don't we do it together?"
  ], examplesCn: ['我们何不去散步？', '我们何不点披萨？', '我们何不早点见面？', '我们何不找人帮忙？', '我们何不一起做？'] },

  { id: 'p40', pattern: 'I have to ____.', cn: '我必须……', function: '日常沟通', examples: [
    "I have to go now.", "I have to wake up early tomorrow.", "I have to finish this by Friday.", "I have to tell you something important.", "I have to pick up my kids from school."
  ], examplesCn: ['我现在得走了。', '我明天得早起。', '我必须在周五前完成这个。', '我得告诉你一件重要的事。', '我得去学校接孩子。'] },

  { id: 'p41', pattern: 'I forgot to ____.', cn: '我忘了……', function: '日常沟通', examples: [
    "I forgot to call you back.", "I forgot to bring my wallet.", "I forgot to lock the door.", "I forgot to mention that.", "I forgot to set the alarm."
  ], examplesCn: ['我忘了给你回电话。', '我忘了带钱包。', '我忘了锁门。', '我忘了提那件事。', '我忘了设闹钟。'] },

  { id: 'p42', pattern: "It's time to ____.", cn: '该……了', function: '日常沟通', examples: [
    "It's time to go.", "It's time to make a decision.", "It's time to start the meeting.", "It's time to say goodbye.", "It's time to move on."
  ], examplesCn: ['该走了。', '该做决定了。', '该开会了。', '该说再见了。', '该往前看了。'] },

  { id: 'p43', pattern: "I'm excited about ____.", cn: '我对……很期待/兴奋', function: '表达观点', examples: [
    "I'm excited about the trip.", "I'm excited about the new project.", "I'm excited about meeting you.", "I'm excited about the concert.", "I'm excited about what's coming next."
  ], examplesCn: ['我对这次旅行很期待。', '我对新项目很兴奋。', '我很期待见到你。', '我对演唱会很期待。', '我对接下来要发生的事很期待。'] },

  { id: 'p44', pattern: "I'm worried about ____.", cn: '我担心……', function: '表达观点', examples: [
    "I'm worried about the deadline.", "I'm worried about my health.", "I'm worried about him.", "I'm worried about losing my job.", "I'm worried about the future."
  ], examplesCn: ['我担心截止日期。', '我担心我的健康。', '我担心他。', '我担心失去工作。', '我担心未来。'] },

  { id: 'p45', pattern: 'That sounds ____.', cn: '那听起来……', function: '表达观点', examples: [
    "That sounds great.", "That sounds like a lot of work.", "That sounds interesting.", "That sounds about right.", "That sounds too good to be true."
  ], examplesCn: ['那听起来很棒。', '那听起来工作量很大。', '那听起来很有意思。', '那听起来差不多。', '那听起来好得不像真的。'] },

  { id: 'p46', pattern: 'The best/worst thing is ____.', cn: '最好/最糟的是……', function: '表达观点', examples: [
    "The best thing is that it's free.", "The worst thing is the waiting time.", "The best thing about this job is the people.", "The worst thing is not knowing what happened.", "The best thing we can do now is wait."
  ], examplesCn: ['最好的一点是它免费。', '最糟的是等待时间。', '这份工作最好的地方是同事。', '最糟的是不知道发生了什么。', '我们现在能做的最好的事就是等待。'] },

  { id: 'p47', pattern: 'I heard that ____.', cn: '我听说……', function: '描述事实', examples: [
    "I heard that you got a promotion.", "I heard that it's going to snow tomorrow.", "I heard that the restaurant closed down.", "I heard that she's moving to London.", "I heard that from a friend."
  ], examplesCn: ['我听说你升职了。', '我听说明天要下雪。', '我听说那家餐厅关门了。', '我听说她要搬到伦敦了。', '我是从一个朋友那里听说的。'] },

  { id: 'p48', pattern: 'Do you mean ____?', cn: '你的意思是……？', function: '询问信息', examples: [
    "Do you mean we should wait?", "Do you mean this one or that one?", "Do you mean you want to quit?", "Do you mean the meeting is canceled?", "Do you mean what I think you mean?"
  ], examplesCn: ['你的意思是我们应该等等？', '你是指这个还是那个？', '你的意思是你想辞职？', '你的意思是会议取消了？', '你的意思是我想的那样吗？'] },

  { id: 'p49', pattern: 'What if ____?', cn: '如果……怎么办？', function: '询问信息', examples: [
    "What if it rains?", "What if we're wrong?", "What if he doesn't show up?", "What if we try a different approach?", "What if something goes wrong?"
  ], examplesCn: ['如果下雨怎么办？', '如果我们错了怎么办？', '如果他不来怎么办？', '如果我们换个方法试试呢？', '如果出问题了怎么办？'] },

  { id: 'p50', pattern: "It's + (adj) + for me to ____.", cn: '对我来说……是……的', function: '表达观点', examples: [
    "It's important for me to be on time.", "It's easy for me to make friends.", "It's hard for me to say no.", "It's difficult for me to understand.", "It's exciting for me to explore new places."
  ], examplesCn: ['准时对我来说很重要。', '交朋友对我来说很容易。', '拒绝别人对我来说很难。', '理解这个对我来说很难。', '探索新地方让我很兴奋。'] },

  // ========================================
  // B级 · 进阶拓展 25个
  // ========================================

  { id: 'p51', pattern: 'I ____ because ____.', cn: '我……，因为……', function: '条件因果', examples: [
    "I left early because I was tired.", "I called because I was worried.", "I like it because it's simple.", "I'm asking because I really need to know.", "I stayed because I wanted to help."
  ], examplesCn: ['我提前走了，因为我累了。', '我打电话是因为我担心。', '我喜欢它因为它简单。', '我问是因为我真的需要知道。', '我留下来是因为我想帮忙。'] },

  { id: 'p52', pattern: "That's why ____.", cn: '这就是为什么……', function: '条件因果', examples: [
    "That's why I called you.", "That's why it's so important.", "That's why we need to hurry.", "That's why I was late.", "That's why I love this place."
  ], examplesCn: ['这就是我打电话给你的原因。', '这就是为什么它如此重要。', '这就是为什么我们需要快点。', '这就是我迟到的原因。', '这就是我喜欢这个地方的原因。'] },

  { id: 'p53', pattern: 'It depends on ____.', cn: '这取决于……', function: '条件因果', examples: [
    "It depends on the weather.", "It depends on how much it costs.", "It depends on what you want.", "It depends on the situation.", "It depends on who you ask."
  ], examplesCn: ['这取决于天气。', '这取决于价格。', '这取决于你想要什么。', '这取决于具体情况。', '这取决于你问谁。'] },

  { id: 'p54', pattern: 'A is better than B because ____.', cn: 'A比B好，因为……', function: '比较选择', examples: [
    "This phone is better than that one because it has a longer battery life.", "Taking the train is better than driving because there's no traffic.", "Working in a team is better than working alone because you can share ideas.", "Cooking at home is better than eating out because it's healthier.", "Getting there early is better than arriving late because you'll have time to prepare."
  ], examplesCn: ['这款手机比那款好，因为电池续航更长。', '坐火车比开车好，因为没有堵车。', '团队合作比单打独斗好，因为可以分享想法。', '在家做饭比外出吃饭好，因为更健康。', '早到比晚到好，因为你有时间准备。'] },

  { id: 'p55', pattern: 'I prefer A to B.', cn: '比起B，我更喜欢A', function: '比较选择', examples: [
    "I prefer tea to coffee.", "I prefer summer to winter.", "I prefer walking to driving short distances.", "I prefer reading to watching TV.", "I prefer working in the morning to working at night."
  ], examplesCn: ['比起咖啡，我更喜欢茶。', '比起冬天，我更喜欢夏天。', '比起开车，我更喜欢步行短距离。', '比起看电视，我更喜欢阅读。', '比起晚上工作，我更喜欢早上工作。'] },

  { id: 'p56', pattern: 'Compared to ____, ____.', cn: '与……相比，……', function: '比较选择', examples: [
    "Compared to last year, sales are up 20%.", "Compared to the old version, this is much faster.", "Compared to other cities, it's quite affordable.", "Compared to what I expected, it was surprisingly good.", "Compared to driving, taking the subway saves a lot of time."
  ], examplesCn: ['与去年相比，销售额增长了20%。', '与旧版本相比，这个快多了。', '与其他城市相比，这里相当实惠。', '与我预期的相比，它出奇地好。', '与开车相比，坐地铁节省大量时间。'] },

  { id: 'p57', pattern: 'One of the most ____ is ____.', cn: '最……之一的是……', function: '比较选择', examples: [
    "One of the most important things is communication.", "One of the most difficult parts is getting started.", "One of the most popular destinations is Japan.", "One of the most common mistakes is not asking questions.", "One of the most valuable skills is learning how to listen."
  ], examplesCn: ['最重要的事情之一是沟通。', '最困难的部分之一是开始。', '最受欢迎的目的地之一是日本。', '最常见的错误之一是不提问。', '最有价值的技能之一是学会倾听。'] },

  { id: 'p58', pattern: 'If I were you, I would ____.', cn: '如果我是你，我会……', function: '提出建议', examples: [
    "If I were you, I would take the job.", "If I were you, I would apologize.", "If I were you, I wouldn't worry about it.", "If I were you, I would get there early.", "If I were you, I would talk to him directly."
  ], examplesCn: ['如果我是你，我会接受这份工作。', '如果我是你，我会道歉。', '如果我是你，我不会担心。', '如果我是你，我会早点到。', '如果我是你，我会直接跟他说。'] },

  { id: 'p59', pattern: 'If ____, then ____.', cn: '如果……，那么……', function: '条件因果', examples: [
    "If it rains, then we'll stay inside.", "If you're not sure, then ask.", "If that's the case, then we need to change our plan.", "If you work hard, then you will succeed.", "If he calls, then let me know right away."
  ], examplesCn: ['如果下雨，那么我们就待在里面。', '如果你不确定，那就问。', '如果是那样的话，那我们需要改变计划。', '如果你努力，那么你会成功的。', '如果他打电话，那马上告诉我。'] },

  { id: 'p60', pattern: 'You should/shouldn\'t ____.', cn: '你应该/不应该……', function: '提出建议', examples: [
    "You should see a doctor.", "You should try this dish.", "You shouldn't worry so much.", "You should take a break.", "You shouldn't make decisions when you're angry."
  ], examplesCn: ['你应该去看医生。', '你应该尝尝这道菜。', '你不应该这么担心。', '你应该休息一下。', '你不应该在生气时做决定。'] },

  { id: 'p61', pattern: 'Make sure to ____.', cn: '务必……', function: '提出建议', examples: [
    "Make sure to lock the door.", "Make sure to bring your ID.", "Make sure to double-check everything.", "Make sure to get enough sleep.", "Make sure to let me know when you arrive."
  ], examplesCn: ['务必锁门。', '务必带上身份证。', '务必仔细检查一切。', '务必保证充足睡眠。', '你到了务必告诉我。'] },

  { id: 'p62', pattern: 'The reason (why) ____ is ____.', cn: '……的原因是……', function: '表达观点', examples: [
    "The reason why I called is to confirm the appointment.", "The reason it failed is lack of planning.", "The reason I'm here is to help.", "The reason we're late is the traffic.", "The reason why I chose this is simple."
  ], examplesCn: ['我打电话的原因是要确认预约。', '失败的原因是缺乏规划。', '我来这里的原因是为了帮忙。', '我们迟到的原因是堵车。', '我选择这个的原因很简单。'] },

  { id: 'p63', pattern: 'As long as ____, ____.', cn: '只要……，就……', function: '条件因果', examples: [
    "As long as you're happy, I'm happy.", "As long as we finish on time, it's fine.", "As long as you try your best, that's enough.", "As long as it doesn't rain, we can go.", "As long as I have my phone, I'm fine."
  ], examplesCn: ['只要你开心，我就开心。', '只要我们按时完成，就没问题。', '只要你尽力了，那就够了。', '只要不下雨，我们就能去。', '只要我有手机，我就没事。'] },

  { id: 'p64', pattern: 'Even though ____, ____.', cn: '尽管……，但是……', function: '条件因果', examples: [
    "Even though it was raining, we went out.", "Even though I was tired, I kept working.", "Even though it's expensive, it's worth it.", "Even though we disagreed, we're still friends.", "Even though he's young, he's very mature."
  ], examplesCn: ['尽管在下雨，我们还是出去了。', '尽管我很累，我还是继续工作。', '尽管它很贵，但值得。', '尽管我们有分歧，我们仍然是朋友。', '尽管他年轻，但他很成熟。'] },

  { id: 'p65', pattern: '____ so that ____.', cn: '……，以便……', function: '条件因果', examples: [
    "I wrote it down so that I wouldn't forget.", "Let's leave early so that we don't miss the bus.", "Speak clearly so that everyone can understand.", "Save your work so that you don't lose it.", "I'm telling you this so that you're prepared."
  ], examplesCn: ['我写下来了，以免忘记。', '我们早点出发，以免错过公交车。', '说清楚点，以便大家都能理解。', '保存你的工作，以免丢失。', '我告诉你这些，是让你有准备。'] },

  { id: 'p66', pattern: 'In order to ____, ____.', cn: '为了……，……', function: '条件因果', examples: [
    "In order to succeed, you need to work hard.", "In order to get a visa, you must fill out this form.", "In order to improve, you have to practice every day.", "In order to save money, we cooked at home.", "In order to understand, you need to listen carefully."
  ], examplesCn: ['为了成功，你需要努力。', '为了拿到签证，你必须填这张表。', '为了提高，你必须每天练习。', '为了省钱，我们在家做饭。', '为了理解，你需要仔细听。'] },

  { id: 'p67', pattern: "I didn't mean to ____.", cn: '我不是故意……', function: '表达观点', examples: [
    "I didn't mean to hurt your feelings.", "I didn't mean to interrupt.", "I didn't mean to cause any trouble.", "I didn't mean to make you wait.", "I didn't mean to sound rude."
  ], examplesCn: ['我不是故意伤害你的感受。', '我不是故意打断的。', '我不是故意制造麻烦。', '我不是故意让你等的。', '我不是故意听起来无礼的。'] },

  { id: 'p68', pattern: 'It seems like ____.', cn: '看起来好像……', function: '表达观点', examples: [
    "It seems like everyone is busy today.", "It seems like we have a problem.", "It seems like the weather is getting better.", "It seems like he's not interested.", "It seems like the right thing to do."
  ], examplesCn: ['看起来好像今天大家都很忙。', '看起来好像我们有个问题。', '看起来好像天气在变好。', '看起来好像他不感兴趣。', '看起来好像这是正确的做法。'] },

  { id: 'p69', pattern: "I'm not sure if/whether ____.", cn: '我不确定是否……', function: '表达观点', examples: [
    "I'm not sure if I can come.", "I'm not sure whether this is the right address.", "I'm not sure if that's a good idea.", "I'm not sure whether he received my message.", "I'm not sure if we have enough time."
  ], examplesCn: ['我不确定我能不能来。', '我不确定这是不是正确的地址。', '我不确定那是不是个好主意。', '我不确定他有没有收到我的消息。', '我不确定我们是否有足够的时间。'] },

  { id: 'p70', pattern: 'Let me explain ____.', cn: '让我解释……', function: '日常沟通', examples: [
    "Let me explain what I mean.", "Let me explain how it works.", "Let me explain the situation.", "Let me explain why this matters.", "Let me explain the rules first."
  ], examplesCn: ['让我解释一下我的意思。', '让我解释一下它是怎么运作的。', '让我解释一下情况。', '让我解释一下为什么这很重要。', '让我先解释规则。'] },

  { id: 'p71', pattern: 'What happened was ____.', cn: '当时的情况是……', function: '描述事实', examples: [
    "What happened was that the system crashed.", "What happened was completely unexpected.", "What happened was my fault.", "What happened was we ran out of time.", "What happened was nobody told me about the change."
  ], examplesCn: ['当时的情况是系统崩溃了。', '当时发生的事完全出乎意料。', '当时发生的事情是我的错。', '当时的情况是我们没时间了。', '当时的情况是没人告诉我变动。'] },

  { id: 'p72', pattern: 'I wish I could ____.', cn: '我希望我能……', function: '表达观点', examples: [
    "I wish I could travel more.", "I wish I could speak English fluently.", "I wish I could help you.", "I wish I could stay longer.", "I wish I could go back in time."
  ], examplesCn: ['我希望我能多旅行。', '我希望我能流利地说英语。', '我希望我能帮你。', '我希望我能多待一会儿。', '我希望我能回到过去。'] },

  { id: 'p73', pattern: '____ is all I need.', cn: '……就是我需要的全部', function: '表达观点', examples: [
    "A good book is all I need.", "Your support is all I need.", "A quiet place is all I need right now.", "One more day is all I need.", "This information is all I need."
  ], examplesCn: ['一本好书就是我需要的全部。', '你的支持就是我需要的全部。', '一个安静的地方就是我现在需要的全部。', '再多一天就是我需要的全部。', '这个信息就是我需要的全部。'] },

  { id: 'p74', pattern: 'To be honest, ____.', cn: '老实说，……', function: '表达观点', examples: [
    "To be honest, I don't really like it.", "To be honest, I didn't expect this.", "To be honest, I think we can do better.", "To be honest, it's not what I had in mind.", "To be honest, I'm a little disappointed."
  ], examplesCn: ['老实说，我不太喜欢。', '老实说，我没想到会这样。', '老实说，我觉得我们可以做得更好。', '老实说，这不是我想的那样。', '老实说，我有点失望。'] },

  { id: 'p75', pattern: 'The point is ____.', cn: '重点是……', function: '表达观点', examples: [
    "The point is that we need to act now.", "The point is to keep trying.", "The point is not to win, but to learn.", "The point is that everyone should have a chance.", "The point is we can't give up."
  ], examplesCn: ['重点是我们需要现在行动。', '重点是继续尝试。', '重点不是赢，而是学习。', '重点是每个人都应该有机会。', '重点是我们不能放弃。'] },
];
