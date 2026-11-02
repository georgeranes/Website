/* Context notes: how a word is used, from George's own research.
   Keyed by the word exactly as it appears on a card ("学习", or either form of "哪儿／哪里"); a word
   that appears in several decks shares one entry. A card shows a small "context" tag only when it
   has an entry here. Each entry:
     { "notes": ["One short paragraph per idea."],
       "examples": [{"hz":"…","py":"…","en":"…"}] }
   Notes that apply to several words are written once below and attached to each of them. */
const CONTEXT = (() => {
  const AND_WITH = {
    "notes": [
      "和 and 跟 both mean 'and' or 'with', and most of the time you can swap them: 我和你 = 我跟你.",
      "和 is the neutral choice for joining two nouns: 我和你, 猫和狗. 跟 sounds more conversational, especially in northern China, and is the usual choice for 'with' before a verb: 我跟他说 'I'll tell him', 跟我来 'Come with me'."
    ],
    "examples": [
      {"hz":"我和你是好朋友。","py":"Wǒ hé nǐ shì hǎo péngyou.","en":"You and I are good friends."},
      {"hz":"我跟他一起吃饭。","py":"Wǒ gēn tā yìqǐ chīfàn.","en":"I'm eating with him."}
    ]
  };

  const FOR_PURPOSE = {
    "notes": [
      "为 (wèi) means 'for' or 'for the sake of': 我为你高兴 'I'm happy for you.' It doesn't mean 'because'; that's 因为 (yīnwèi).",
      "为了 (wèile) gives a purpose, 'in order to', and usually opens the sentence: 为了学好中文，我每天练习.",
      "When they mean 'for (someone)', 为 and 为了 can often swap: 为你 / 为了你. On its own 为 sounds a little more formal and written; 为了 is the everyday choice for a purpose."
    ],
    "examples": [
      {"hz":"我为你高兴。","py":"Wǒ wèi nǐ gāoxìng.","en":"I'm happy for you."},
      {"hz":"为了学好中文，我每天练习。","py":"Wèile xuéhǎo Zhōngwén, wǒ měitiān liànxí.","en":"To get good at Chinese, I practice every day."}
    ]
  };

  const PLURAL = {
    "notes": [
      "Chinese nouns usually don't change for the plural: 一本书, 三本书. Most of the time, just leave plurals unmarked.",
      "们 only goes on pronouns and words for people: 我们, 他们, 朋友们. Never use it with a number: 三个学生, not 三个学生们.",
      "些 means an unspecified number of something, people included, and comes after 这, 那 or 一: 这些书 'these books', 一些人 'some people'. For 'many', use 很多: 很多人."
    ],
    "examples": [
      {"hz":"这些书是我的。","py":"Zhèxiē shū shì wǒ de.","en":"These books are mine."},
      {"hz":"我有很多朋友。","py":"Wǒ yǒu hěn duō péngyou.","en":"I have a lot of friends."}
    ]
  };

  const BUT = {
    "notes": [
      "但是, 可是 and 但 all mean 'but'.",
      "但是 is the neutral, all-purpose choice. It often pairs with 虽然 'although': 虽然很贵，但是很好吃.",
      "可是 is more conversational and often signals something unexpected getting in the way: 我想去，可是没有时间. It can pair with 虽然 too.",
      "但 is the short form of 但是, more common in writing."
    ],
    "examples": [
      {"hz":"虽然很贵，但是很好吃。","py":"Suīrán hěn guì, dànshì hěn hǎochī.","en":"It's expensive, but it's delicious."},
      {"hz":"我想去，可是没有时间。","py":"Wǒ xiǎng qù, kěshì méiyǒu shíjiān.","en":"I want to go, but I don't have time."}
    ]
  };

  const SAY_TALK = {
    "notes": [
      "说 takes what's said as its object: 说中文 'speak Chinese', 他说他很忙 'He says he's busy.'",
      "说话 means 'to talk' and doesn't take an object: 他不说话 'He isn't talking', 别说话 'Don't talk.' It isn't the noun 'a speech'; that's 演讲 (yǎnjiǎng)."
    ],
    "examples": [
      {"hz":"你会说中文吗？","py":"Nǐ huì shuō Zhōngwén ma?","en":"Can you speak Chinese?"},
      {"hz":"上课的时候别说话。","py":"Shàngkè de shíhou bié shuōhuà.","en":"Don't talk during class."}
    ]
  };

  return {
    "我和你合得来": {
      "notes": [
        "合得来 (hédelái) means two people get along well. The pattern is A 和 B 合得来, or A 跟 B 合得来. The opposite is 合不来 (hébulái): 我和他合不来 'He and I don't get along.'",
        "相处 (xiāngchǔ) is the plain verb 'to get along with, to spend time with', usually followed by how well: 我们相处得很好 'We get along really well.' 相处得来 means the same as 合得来."
      ],
      "examples": [
        {"hz":"我和你合得来。","py":"Wǒ hé nǐ hédelái.","en":"You and I get along well."},
        {"hz":"我们相处得很好。","py":"Wǒmen xiāngchǔ de hěn hǎo.","en":"We get along really well."},
        {"hz":"我跟他合不来。","py":"Wǒ gēn tā hébulái.","en":"He and I don't get along."}
      ]
    },
    "等到最后一分钟": {
      "notes": [
        "等到 means 'wait until'. 等到最后一分钟 goes right after the subject, and the thing you finally do comes after it, usually with 才 'only then': 我总是等到最后一分钟才写作业.",
        "临时 (línshí) is a different word: 'temporary' or 'at short notice'. It goes before the verb: 他临时改变了计划 'He changed his plans at the last minute.' 临时工 is a temp worker."
      ],
      "examples": [
        {"hz":"我等到最后一分钟。","py":"Wǒ děngdào zuìhòu yì fēnzhōng.","en":"I waited until the last minute."},
        {"hz":"我总是等到最后一分钟才写作业。","py":"Wǒ zǒngshì děngdào zuìhòu yì fēnzhōng cái xiě zuòyè.","en":"I always wait until the last minute to do my homework."},
        {"hz":"他临时改变了计划。","py":"Tā línshí gǎibiànle jìhuà.","en":"He changed his plans at the last minute."}
      ]
    },
    "等": {
      "notes": ["等 comes before whoever or whatever you're waiting for: 我等你 'I'll wait for you.' 等一下 means 'wait a moment'."],
      "examples": [{"hz":"等我一下！","py":"Děng wǒ yíxià!","en":"Wait for me a sec!"}]
    },
    "经常": {
      "notes": ["经常 means 'often' and goes after the subject, before the verb: 我经常去图书馆. 常常 (chángcháng) means the same and is a little more casual."],
      "examples": [{"hz":"我经常去图书馆。","py":"Wǒ jīngcháng qù túshūguǎn.","en":"I often go to the library."}]
    },
    "为": FOR_PURPOSE,
    "为了": FOR_PURPOSE,
    "因为": {
      "notes": ["因为 means 'because'. It often pairs with 所以 'so': 因为下雨，所以我不去. Don't confuse it with 为, which means 'for'."],
      "examples": [{"hz":"因为下雨，所以我不去。","py":"Yīnwèi xià yǔ, suǒyǐ wǒ bú qù.","en":"Because it's raining, I'm not going."}]
    },
    "然后": {
      "notes": ["然后 'then' links steps in order and starts the second part of the sentence. It often pairs with 先 'first': 我先吃饭，然后去上课."],
      "examples": [
        {"hz":"我先吃饭，然后去上课。","py":"Wǒ xiān chīfàn, ránhòu qù shàngkè.","en":"I'll eat first, then go to class."},
        {"hz":"我六点半起床，然后去跑步。","py":"Wǒ liù diǎn bàn qǐchuáng, ránhòu qù pǎobù.","en":"I get up at 6:30, then go for a run."}
      ]
    },
    "或许": {
      "notes": ["或许 'maybe' goes right after the subject, before the verb: 他或许不来. It can also start the sentence: 或许他很忙. It's a little more formal than 可能 (kěnéng), the everyday 'maybe'."],
      "examples": [{"hz":"他或许不来了。","py":"Tā huòxǔ bù lái le.","en":"He might not come after all."}]
    },
    "吵架": {
      "notes": ["吵架 is a verb plus its object, so other words can go in the middle: 吵了一架 'had a fight'. Use 跟 or 和 for the other person: 我跟我哥哥吵架了."],
      "examples": [{"hz":"我跟我哥哥吵架了。","py":"Wǒ gēn wǒ gēge chǎojià le.","en":"I had an argument with my brother."}]
    },
    "应该": {
      "notes": ["应该 'should' goes after the subject, before the verb: 你应该多休息. The negative is 不应该. It can also mean 'probably': 他应该到了 'He should be there by now.'"],
      "examples": [
        {"hz":"你应该多休息。","py":"Nǐ yīnggāi duō xiūxi.","en":"You should rest more."},
        {"hz":"他应该到了。","py":"Tā yīnggāi dào le.","en":"He should be there by now."}
      ]
    },
    "和": AND_WITH,
    "跟": AND_WITH,
    "水瓶": {
      "notes": ["水瓶 sounds exactly like 水平 (shuǐpíng) 'level, standard', as in 你的中文水平很高 'Your Chinese is really good.' Only the characters tell them apart."],
      "examples": [{"hz":"我的水瓶在哪儿？","py":"Wǒ de shuǐpíng zài nǎr?","en":"Where's my water bottle?"}]
    },
    "些": PLURAL,
    "我们": PLURAL,
    "他们": PLURAL,
    "很": {
      "notes": [
        "很 goes before adjectives: 我很忙, 天气很好. Here it mostly just links the subject to the adjective, so 我很高兴 is simply 'I'm happy', not 'I'm very happy'.",
        "It also goes before verbs of feeling or wanting: 我很喜欢, 我很想你. It doesn't go before ordinary action verbs: say 我常常跑步, not 我很跑步."
      ],
      "examples": [
        {"hz":"今天天气很好。","py":"Jīntiān tiānqì hěn hǎo.","en":"The weather is nice today."},
        {"hz":"我很喜欢中国菜。","py":"Wǒ hěn xǐhuan Zhōngguó cài.","en":"I really like Chinese food."}
      ]
    },
    "但是": BUT,
    "可是": BUT,
    "说": SAY_TALK,
    "说话": SAY_TALK,
    "关于": {
      "notes": ["关于 means 'about' or 'regarding' and introduces a topic. It goes at the start of the sentence, or before a noun with 的: 关于这个问题… 'Regarding this question…', 一本关于中国的书 'a book about China'."],
      "examples": [
        {"hz":"关于这个问题，我有一个想法。","py":"Guānyú zhège wèntí, wǒ yǒu yí ge xiǎngfǎ.","en":"About this question, I have an idea."},
        {"hz":"我在看一本关于中国的书。","py":"Wǒ zài kàn yì běn guānyú Zhōngguó de shū.","en":"I'm reading a book about China."}
      ]
    },
    "里": {
      "notes": [
        "Put 里 after a noun to mean 'in' or 'inside': 房间里 'in the room', 包里 'in the bag'. Here it's usually said lightly, li.",
        "To ask what's inside, name the thing first: 包里有什么？ On its own, 'inside' is 里面 (lǐmiàn): 里面有什么？",
        "Don't add 里 after a country or city: 在中国, not 在中国里."
      ],
      "examples": [
        {"hz":"包里有什么？","py":"Bāo li yǒu shénme?","en":"What's in the bag?"},
        {"hz":"他在房间里。","py":"Tā zài fángjiān li.","en":"He's in the room."}
      ]
    },
    "什么": {
      "notes": ["Chinese question words sit where the answer would go. 什么 usually takes the object's place, which is often the end: 你吃什么？ (answer: 我吃饭). Before a noun it means 'what kind of': 你看什么书？ 'What book are you reading?'"],
      "examples": [{"hz":"你吃什么？","py":"Nǐ chī shénme?","en":"What are you eating?"}]
    },
    "怎么": {
      "notes": ["怎么 'how' goes before the verb, not at the end: 你怎么去学校？ 'How do you get to school?' 怎么了？ means 'What's wrong?', and 怎么样？ asks 'How is it?'"],
      "examples": [{"hz":"你怎么去学校？","py":"Nǐ zěnme qù xuéxiào?","en":"How do you get to school?"}]
    },
    "什么时候": {
      "notes": ["什么时候 'when' goes after the subject, before the verb: 你什么时候来？ It can also start the sentence: 什么时候开始？ 'When does it start?'"],
      "examples": [{"hz":"你什么时候来？","py":"Nǐ shénme shíhou lái?","en":"When are you coming?"}]
    },
    "为什么": {
      "notes": ["为什么 'why' goes after the subject, before the verb: 你为什么学中文？ It can also start the sentence: 为什么你不去？"],
      "examples": [{"hz":"你为什么学中文？","py":"Nǐ wèishénme xué Zhōngwén?","en":"Why are you learning Chinese?"}]
    },
    "谁": {
      "notes": [
        "谁 sits wherever the person in the answer would sit.",
        "Asking about the subject, it comes first: 谁去商店？ 'Who's going to the store?' (张三去商店.)",
        "Asking about the object, it comes after the verb: 你喜欢谁？ 'Who do you like?' (你喜欢李四.)",
        "Asking whose, it goes before 的: 这是谁的书？ 'Whose book is this?'",
        "Everyday speech says shéi; shuí is also correct."
      ],
      "examples": [
        {"hz":"谁去商店？","py":"Shéi qù shāngdiàn?","en":"Who's going to the store?"},
        {"hz":"你喜欢谁？","py":"Nǐ xǐhuan shéi?","en":"Who do you like?"},
        {"hz":"这是谁的书？","py":"Zhè shì shéi de shū?","en":"Whose book is this?"}
      ]
    },
    "哪儿": {
      "notes": ["哪儿 (or 哪里, more common in the south) asks 'where' and sits where the place would go: after 在 or 去, often at the end: 你在哪儿？, 你去哪儿？ If there's another verb, it comes after: 你在哪儿工作？ 'Where do you work?'"],
      "examples": [
        {"hz":"你去哪儿？","py":"Nǐ qù nǎr?","en":"Where are you going?"},
        {"hz":"你在哪里工作？","py":"Nǐ zài nǎlǐ gōngzuò?","en":"Where do you work?"}
      ]
    }
  };
})();
