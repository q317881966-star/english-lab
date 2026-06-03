// 常用短语和固定表达

const PHRASES = [
  // === 邮件常用语 ===
  { en: "Thank you for your time.", cn: "感谢您的时间。", scene: "邮件结尾" },
  { en: "I look forward to your reply.", cn: "期待您的回复。", scene: "邮件结尾" },
  { en: "Please let me know if you have any questions.", cn: "如有问题请告诉我。", scene: "邮件结尾" },
  { en: "I am writing to inquire about...", cn: "我写信是想询问关于……", scene: "邮件开头" },
  { en: "Thank you for your prompt reply.", cn: "感谢您的及时回复。", scene: "邮件开头" },
  { en: "As we discussed earlier...", cn: "如我们之前讨论的……", scene: "邮件正文" },
  { en: "Please find attached...", cn: "请查收附件……", scene: "邮件正文" },
  { en: "I will keep you updated.", cn: "我会持续更新您。", scene: "邮件正文" },
  { en: "At your earliest convenience.", cn: "在您方便时尽早。", scene: "邮件正文" },
  { en: "Please do not hesitate to contact me.", cn: "请随时联系我。", scene: "邮件结尾" },

  // === 客服常用语 ===
  { en: "How may I help you?", cn: "有什么可以帮您的？", scene: "客服开场" },
  { en: "I understand your concern.", cn: "我理解您的顾虑。", scene: "客服安抚" },
  { en: "Let me look into this for you.", cn: "我帮您查一下。", scene: "客服处理" },
  { en: "I will get back to you shortly.", cn: "我很快回复您。", scene: "客服处理" },
  { en: "Is there anything else I can help with?", cn: "还有什么可以帮您的吗？", scene: "客服结尾" },
  { en: "Thank you for your patience.", cn: "感谢您的耐心。", scene: "客服安抚" },
  { en: "I will escalate this to my manager.", cn: "我会把这个上报给经理。", scene: "客服升级" },
  { en: "Your satisfaction is our priority.", cn: "您的满意是我们的首要任务。", scene: "客服安抚" },

  // === 商务谈判 ===
  { en: "What's your best price?", cn: "你最低什么价？", scene: "价格" },
  { en: "Can we meet halfway?", cn: "我们能各让一步吗？", scene: "价格" },
  { en: "This is our final offer.", cn: "这是我们最终报价了。", scene: "价格" },
  { en: "We need to think about it.", cn: "我们需要考虑一下。", scene: "谈判" },
  { en: "Let's make a deal.", cn: "我们成交吧。", scene: "谈判" },
  { en: "We can work with that.", cn: "这个我们可以接受。", scene: "谈判" },
  { en: "I'll need to check with my team.", cn: "我需要跟团队确认一下。", scene: "谈判" },
  { en: "Can you give me a rough estimate?", cn: "能给我一个大概的估算吗？", scene: "谈判" },

  // === 物流相关 ===
  { en: "When will my order ship?", cn: "我的订单什么时候发货？", scene: "物流" },
  { en: "How can I track my package?", cn: "怎么追踪我的包裹？", scene: "物流" },
  { en: "Is shipping included?", cn: "含运费吗？", scene: "物流" },
  { en: "Do you ship internationally?", cn: "你们发国际快递吗？", scene: "物流" },
  { en: "The package hasn't arrived yet.", cn: "包裹还没到。", scene: "物流" },
  { en: "Can you expedite the shipping?", cn: "能加快发货吗？", scene: "物流" },

  // === 付款相关 ===
  { en: "What payment methods do you accept?", cn: "你们接受哪些付款方式？", scene: "付款" },
  { en: "Is it safe to pay online?", cn: "在线支付安全吗？", scene: "付款" },
  { en: "Can I pay by credit card?", cn: "能刷信用卡吗？", scene: "付款" },
  { en: "The payment didn't go through.", cn: "支付没成功。", scene: "付款" },
  { en: "I haven't received the invoice yet.", cn: "我还没收到发票。", scene: "付款" },

  // === 产品相关 ===
  { en: "Is this item in stock?", cn: "这个有现货吗？", scene: "产品" },
  { en: "Do you have this in a different color?", cn: "这个有其他颜色吗？", scene: "产品" },
  { en: "Is it easy to use?", cn: "好用吗？", scene: "产品" },
  { en: "How long does it last?", cn: "能用多久？", scene: "产品" },
  { en: "Can I customize it?", cn: "能定制吗？", scene: "产品" },
  { en: "What's the difference between these two?", cn: "这两个有什么区别？", scene: "产品" },
];
