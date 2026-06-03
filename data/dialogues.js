// 跨境电商场景对话库
// 每个对话包含: id, title, scene(场景), lines(对话行数组: {role, en, cn})

const DIALOGUES = [
  {
    id: "email-inquiry",
    title: "写邮件询价",
    scene: "邮件写作",
    lines: [
      { role: "A", en: "Dear Sir/Madam,", cn: "尊敬的先生/女士，" },
      { role: "A", en: "I am interested in your products.", cn: "我对你们的产品很感兴趣。" },
      { role: "A", en: "Could you please send me a quotation?", cn: "能发给我一份报价单吗？" },
      { role: "A", en: "I would like to order 500 pieces.", cn: "我想订购500件。" },
      { role: "A", en: "What is the minimum order quantity?", cn: "最小起订量是多少？" },
      { role: "A", en: "Also, do you offer free samples?", cn: "另外，你们提供免费样品吗？" },
      { role: "A", en: "I look forward to hearing from you.", cn: "期待您的回复。" },
      { role: "A", en: "Best regards,", cn: "此致敬礼，" },
      { role: "A", en: "Li Ming", cn: "李明" },
    ]
  },
  {
    id: "email-reply",
    title: "回复客户询价",
    scene: "邮件写作",
    lines: [
      { role: "B", en: "Dear Li Ming,", cn: "亲爱的李明，" },
      { role: "B", en: "Thank you for your inquiry.", cn: "感谢您的询价。" },
      { role: "B", en: "Our price is $3.50 per piece for 500 units.", cn: "500件的单价是3.50美元。" },
      { role: "B", en: "The minimum order quantity is 100 pieces.", cn: "最小起订量是100件。" },
      { role: "B", en: "Yes, we can send you a free sample.", cn: "是的，我们可以寄免费样品。" },
      { role: "B", en: "Please find our catalog attached.", cn: "请查收附件中的产品目录。" },
      { role: "B", en: "If you have any questions, please let me know.", cn: "如有任何问题，请告诉我。" },
      { role: "B", en: "Sincerely,", cn: "真诚的，" },
      { role: "B", en: "John Smith", cn: "约翰·史密斯" },
    ]
  },
  {
    id: "shipping-inquiry",
    title: "物流查询",
    scene: "客服对话",
    lines: [
      { role: "A", en: "Hello, I'd like to check my order status.", cn: "你好，我想查一下订单状态。" },
      { role: "B", en: "Sure! May I have your order number?", cn: "好的！能给我您的订单号吗？" },
      { role: "A", en: "It's ORD-2024001.", cn: "订单号是 ORD-2024001。" },
      { role: "B", en: "Let me check... Your order was shipped yesterday.", cn: "我查一下……您的订单昨天已发货。" },
      { role: "A", en: "Great! Do you have a tracking number?", cn: "太好了！有追踪单号吗？" },
      { role: "B", en: "Yes, the tracking number is 1Z999AA10123456784.", cn: "有的，追踪单号是 1Z999AA10123456784。" },
      { role: "A", en: "When will it arrive?", cn: "什么时候能到？" },
      { role: "B", en: "Estimated delivery is 5-7 business days.", cn: "预计5-7个工作日送达。" },
      { role: "A", en: "Thank you very much!", cn: "非常感谢！" },
      { role: "B", en: "You're welcome. Have a nice day!", cn: "不客气。祝您有美好的一天！" },
    ]
  },
  {
    id: "refund-request",
    title: "退款处理",
    scene: "客服对话",
    lines: [
      { role: "A", en: "Hi, I received my order but the item is damaged.", cn: "你好，我收到订单了，但商品是坏的。" },
      { role: "B", en: "I'm very sorry to hear that.", cn: "非常抱歉听到这个。" },
      { role: "A", en: "Can I get a refund?", cn: "我能退款吗？" },
      { role: "B", en: "Of course. Would you prefer a refund or a replacement?", cn: "当然。您想要退款还是换货？" },
      { role: "A", en: "A refund, please.", cn: "退款吧。" },
      { role: "B", en: "No problem. I'll process the refund right away.", cn: "没问题。我马上处理退款。" },
      { role: "B", en: "The money will be back in your account in 3-5 days.", cn: "款项将在3-5天内退回您的账户。" },
      { role: "A", en: "Thank you. Do I need to return the damaged item?", cn: "谢谢。我需要退回损坏的商品吗？" },
      { role: "B", en: "No, you can keep it. Again, we apologize for the trouble.", cn: "不用，您可以留着。再次为不便致歉。" },
    ]
  },
  {
    id: "product-inquiry",
    title: "产品咨询",
    scene: "客服对话",
    lines: [
      { role: "A", en: "Hello, what material is this bag made of?", cn: "你好，这个包是什么材质的？" },
      { role: "B", en: "It's made of genuine leather.", cn: "是真皮的。" },
      { role: "A", en: "What are the dimensions?", cn: "尺寸是多少？" },
      { role: "B", en: "30 cm long, 20 cm wide, and 10 cm deep.", cn: "长30厘米，宽20厘米，深10厘米。" },
      { role: "A", en: "Is it waterproof?", cn: "防水吗？" },
      { role: "B", en: "Yes, it is water-resistant.", cn: "是的，防水的。" },
      { role: "A", en: "What colors are available?", cn: "有哪些颜色可选？" },
      { role: "B", en: "Black, brown, and dark blue.", cn: "黑色、棕色和深蓝色。" },
      { role: "A", en: "I'll take the black one. How much is it?", cn: "我要黑色的。多少钱？" },
      { role: "B", en: "It's $45.99. Would you like to place an order?", cn: "45.99美元。要下单吗？" },
    ]
  },
  {
    id: "price-negotiate",
    title: "价格协商",
    scene: "商务对话",
    lines: [
      { role: "A", en: "Your price is a bit high.", cn: "你们的价格有点高。" },
      { role: "B", en: "I understand. What price are you looking for?", cn: "我理解。您期望什么价格？" },
      { role: "A", en: "Can you do $3.00 per piece for 1000 units?", cn: "1000件的话，3美元一件可以吗？" },
      { role: "B", en: "Let me check... For 1000 units, we can do $3.20.", cn: "我算一下……1000件的话，我们可以做到3.20美元。" },
      { role: "A", en: "How about $3.10?", cn: "3.10美元怎么样？" },
      { role: "B", en: "OK, $3.10 is acceptable. But shipping is extra.", cn: "好，3.10美元可以接受。不过运费另算。" },
      { role: "A", en: "That's fair. Let's do it.", cn: "合理。就这么定了。" },
      { role: "B", en: "Great! I'll send you the invoice.", cn: "太好了！我会发发票给您。" },
    ]
  },
  {
    id: "phone-intro",
    title: "电话自我介绍",
    scene: "基础社交",
    lines: [
      { role: "A", en: "Hello, this is Li Ming speaking.", cn: "你好，我是李明。" },
      { role: "B", en: "Hi Li Ming, this is John from ABC Trading.", cn: "你好李明，我是ABC贸易的约翰。" },
      { role: "A", en: "Nice to meet you, John.", cn: "很高兴认识你，约翰。" },
      { role: "B", en: "Nice to meet you too. How are you?", cn: "我也很高兴。你好吗？" },
      { role: "A", en: "I'm fine, thank you. And you?", cn: "我很好，谢谢。你呢？" },
      { role: "B", en: "I'm doing well, thanks. I'm calling about your inquiry.", cn: "我也不错，谢谢。我打电话是关于您的询价。" },
      { role: "A", en: "Oh yes, thank you for calling back so quickly.", cn: "哦对，谢谢你这么快回电话。" },
      { role: "B", en: "No problem. Do you have a moment to talk?", cn: "没问题。您现在方便聊吗？" },
      { role: "A", en: "Yes, please go ahead.", cn: "方便，请说。" },
    ]
  },
  {
    id: "complaint-handle",
    title: "投诉处理",
    scene: "客服对话",
    lines: [
      { role: "A", en: "I ordered a blue shirt but received a red one.", cn: "我订了蓝色衬衫但收到了红色的。" },
      { role: "B", en: "I apologize for the mistake. Let me fix this for you.", cn: "很抱歉弄错了。我来帮您解决。" },
      { role: "A", en: "Can you send the correct one?", cn: "能寄正确的过来吗？" },
      { role: "B", en: "Absolutely. I'll ship the blue shirt today.", cn: "当然。我今天就发蓝色衬衫。" },
      { role: "B", en: "You don't need to return the red one.", cn: "红色的不用退回来了。" },
      { role: "A", en: "Really? That's very kind of you.", cn: "真的吗？你们太好了。" },
      { role: "B", en: "We want you to be happy with your purchase.", cn: "我们希望您购物满意。" },
      { role: "A", en: "Thank you. I appreciate it.", cn: "谢谢，我很感激。" },
      { role: "B", en: "You're very welcome. Sorry again for the error.", cn: "不客气。再次为错误道歉。" },
    ]
  },
  {
    id: "factory-visit",
    title: "工厂参观",
    scene: "商务对话",
    lines: [
      { role: "A", en: "Welcome to our factory!", cn: "欢迎来到我们工厂！" },
      { role: "B", en: "Thank you for having me. The factory looks great.", cn: "谢谢邀请。工厂看起来很棒。" },
      { role: "A", en: "Let me show you around.", cn: "我带你参观一下。" },
      { role: "A", en: "This is our production line.", cn: "这是我们的生产线。" },
      { role: "B", en: "How many units can you produce per day?", cn: "每天能生产多少件？" },
      { role: "A", en: "About 2000 units per day.", cn: "大约每天2000件。" },
      { role: "B", en: "That's impressive. What about quality control?", cn: "很厉害。质量控制怎么样？" },
      { role: "A", en: "We check every batch before shipping.", cn: "每批货发出前我们都会检查。" },
      { role: "B", en: "Good. I'd like to place a trial order.", cn: "好。我想先下一个试单。" },
      { role: "A", en: "Wonderful! Let's discuss the details in my office.", cn: "太好了！去我办公室谈细节吧。" },
    ]
  },
  {
    id: "payment-terms",
    title: "付款条件",
    scene: "商务对话",
    lines: [
      { role: "A", en: "What are your payment terms?", cn: "你们的付款条件是怎样的？" },
      { role: "B", en: "We require a 30% deposit to start production.", cn: "我们需要30%的定金才能开始生产。" },
      { role: "A", en: "And the remaining 70%?", cn: "剩下的70%呢？" },
      { role: "B", en: "The balance is due before shipping.", cn: "发货前付清余款。" },
      { role: "A", en: "Do you accept PayPal?", cn: "你们接受PayPal吗？" },
      { role: "B", en: "Yes, we accept PayPal, bank transfer, and Alibaba Trade Assurance.", cn: "是的，我们接受PayPal、银行转账和阿里信保。" },
      { role: "A", en: "Alibaba Trade Assurance sounds good.", cn: "阿里信保听起来不错。" },
      { role: "B", en: "Great choice. It protects both buyer and seller.", cn: "好选择。它保护买卖双方。" },
      { role: "A", en: "I'll arrange the deposit today.", cn: "我今天就安排定金。" },
    ]
  },
];

// 句型替换练习 - 针对跨境电商
const DIALOGUE_PATTERNS = [
  {
    pattern: "I'm interested in ____.",
    cn: "我对 ____ 感兴趣。",
    slots: ["your products", "this item", "the new collection", "your catalog", "buying in bulk"],
    category: "询价"
  },
  {
    pattern: "Could you please ____?",
    cn: "请问你能 ____ 吗？",
    slots: ["send me a quote", "give me more details", "check the stock", "lower the price", "send a sample"],
    category: "请求"
  },
  {
    pattern: "What is the ____ of this product?",
    cn: "这个产品的 ____ 是什么？",
    slots: ["price", "size", "weight", "material", "minimum order quantity"],
    category: "询问"
  },
  {
    pattern: "I would like to ____.",
    cn: "我想 ____。",
    slots: ["place an order", "cancel my order", "return this item", "get a refund", "change my address"],
    category: "表达意愿"
  },
  {
    pattern: "How long does ____ take?",
    cn: "____ 需要多长时间？",
    slots: ["shipping", "delivery", "production", "the refund process", "customs clearance"],
    category: "询问时间"
  },
  {
    pattern: "Please find ____ attached.",
    cn: "请查收附件中的 ____。",
    slots: ["the invoice", "the quotation", "the catalog", "the product photos", "the specification sheet"],
    category: "邮件用语"
  },
  {
    pattern: "We apologize for ____.",
    cn: "我们为 ____ 致歉。",
    slots: ["the delay", "the mistake", "the inconvenience", "the damaged item", "the confusion"],
    category: "道歉"
  },
  {
    pattern: "Do you offer ____?",
    cn: "你们提供 ____ 吗？",
    slots: ["free shipping", "a discount for bulk orders", "free samples", "a warranty", "custom packaging"],
    category: "询问服务"
  },
  {
    pattern: "I'm looking for ____.",
    cn: "我在找 ____。",
    slots: ["a reliable supplier", "a better price", "high-quality products", "a long-term partner", "custom designs"],
    category: "表达需求"
  },
  {
    pattern: "The ____ is too ____.",
    cn: "____ 太 ____ 了。",
    slots: ["price / high", "size / small", "color / dark", "material / thin", "delivery time / long"],
    category: "表达不满"
  },
];
