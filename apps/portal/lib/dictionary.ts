// ============================================================
// 全站双语文案（中 / 英）。要改文字，只改这里就够了。
// Content 类型确保中英两份文案结构完全一致，少写一项会报错。
// 多页面结构：首页(理念) + 赛车知识 / 车友社区 / 关于。
// 社区 = Discord 频道式 + Instagram 动态式 融合：约赛 / 装备转让 / 驾驶技巧 / 日常 都是其中的频道。
// sections.*.label 同时用于顶部导航与首页入口卡片 —— 改板块名只改这一处。
// ============================================================

export type Lang = "zh" | "en";

type Pillar = { title: string; body: string };
// 一张入门卡：卡面 tag/title/body；点开后全屏阅读 read（正文逐段）。
type Card = { tag: string; title: string; body: string; read: string[] };
type Source = { label: string; url: string };
// 一个赛事门类：卡面只露 name + full；点开后展示概念 / 规则 / 亮点 / 来源。
type RacingType = {
  name: string; // 卡面主词（标志性术语）：F1 / MotoGP / WRC …
  full: string; // 卡面下方小字全称
  concept: string; // 赛事概念
  rules: string[]; // 赛事规则要点
  extra: string; // 补充 / 亮点
  sources: Source[]; // 官方来源
};
// 每个板块：label(导航/卡片短名) · headline(页面大标题) · intro(页面副标题/简介)
type SectionMeta = { label: string; headline: string; intro: string };
// 社区频道（Discord 式）与动态（Instagram 式）
type Channel = { id: string; name: string; desc: string };
type Post = {
  channel: string; // 对应 Channel.id
  author: string;
  handle: string;
  time: string;
  text: string;
  likes: number;
  comments: number;
};

export type Content = {
  nav: {
    brand: string;
    join: string;
  };
  sections: {
    knowledge: SectionMeta;
    community: SectionMeta;
    about: SectionMeta;
  };
  hero: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  vision: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: Pillar[];
  };
  home: {
    exploreEyebrow: string;
    exploreTitle: string;
    exploreSubtitle: string;
    enter: string;
  };
  guide: {
    eyebrow: string;
    title: string;
    subtitle: string;
    readMore: string; // 卡片底部「展开阅读」提示
    close: string; // 全屏阅读器关闭按钮 aria
    cards: Card[];
  };
  racing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    detail: {
      conceptLabel: string;
      rulesLabel: string;
      extraLabel: string;
      sourceLabel: string;
      close: string;
    };
    types: RacingType[];
  };
  community: {
    previewBadge: string;
    allLabel: string;
    channelsTitle: string;
    composer: string;
    composerNote: string;
    post: string;
    mediaLabel: string;
    likes: string;
    comments: string;
    channels: Channel[];
    posts: Post[];
  };
  about: {
    body: string;
    note: string;
  };
  join: {
    eyebrow: string;
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    note: string;
    thanks: string;
  };
  footer: {
    tagline: string;
    rights: string;
    madeWith: string;
  };
  theme: {
    title: string;
    subtitle: string;
    hint: string;
    aria: string;
    defaultLabel: string;
  };
};

export const copy: Record<Lang, Content> = {
  zh: {
    nav: {
      brand: "OpenGrid",
      join: "加入",
    },
    sections: {
      knowledge: {
        label: "赛车知识",
        headline: "看懂每一种赛车",
        intro:
          "从 F1 基础到世界各地的赛车门类——一处入口，带你看懂这项运动。",
      },
      community: {
        label: "车友社区",
        headline: "车友的聚集地",
        intro:
          "像刷动态一样分享你的赛道日常，像逛频道一样找到同好——驾驶技巧、约赛、装备转让，都在这里。",
      },
      about: {
        label: "关于",
        headline: "关于 OpenGrid",
        intro: "一个关于热爱如何开始的故事。",
      },
    },
    hero: {
      eyebrow: "社区驱动 · 让赛车不再遥远",
      titleTop: "把赛车",
      titleBottom: "带回你的街区",
      subtitle:
        "让热爱变得触手可及。从认识 F1 到走进卡丁车，我们用一个社区，把曾经遥远又昂贵的赛车，变成你身边就能开始的事。",
      ctaPrimary: "加入社区",
      ctaSecondary: "了解 F1",
      scroll: "向下滚动",
    },
    vision: {
      eyebrow: "我们为什么做这件事",
      title: "门槛越低，热爱越多",
      subtitle: "一项运动，只有越来越多人参与，才会越来越好。我们从三件事做起。",
      pillars: [
        {
          title: "降低门槛",
          body: "装备共享、二手流通、信息透明——让“太贵”不再是你远离赛道的理由。",
        },
        {
          title: "凝聚邻里",
          body: "把线上的热情带到线下的赛道，一起约赛、观赛，从新手一路成长。",
        },
        {
          title: "让运动生长",
          body: "每多一个人参与，这项运动在中国的未来就更明亮一分。改变，从街区开始。",
        },
      ],
    },
    home: {
      exploreEyebrow: "三大板块",
      exploreTitle: "从这里进入",
      exploreSubtitle: "知识、社区，还有我们的故事——挑一个开始。",
      enter: "进入",
    },
    guide: {
      eyebrow: "F1 入门",
      title: "从这里，看懂赛车",
      subtitle: "没接触过也没关系。几分钟，带你迈过认识这项运动的第一道坎。",
      readMore: "展开阅读",
      close: "关闭",
      cards: [
        {
          tag: "基础",
          title: "什么是 F1？",
          body: "一级方程式是赛车运动的最高殿堂：最快的车、最强的车手，每年在全球二十余条赛道上争夺冠军。",
          read: [
            "「一级方程式」里的「方程式」，指的并不是数学，而是一套所有车队都必须遵守的统一技术规则——车身尺寸、引擎形式、空气动力学的边界，全部写在国际汽联（FIA）的规则书里。大家在同一套「公式」下各自造车，于是比的既是车手，也是背后成百上千名工程师的智慧。这就是 F1 被称为赛车运动「最高殿堂」的原因：它把人类在速度上的工程极限，浓缩成了一项运动。",
            "一支 F1 车队同时追逐两座奖杯。一座是「车手世界冠军」，颁给整个赛季积分最高的那名车手；另一座是「车队世界冠军」，把车队两位车手的积分合在一起算。所以你常会看到队友之间既并肩作战、又暗自较劲——他们既要一起帮车队拿下车队冠军，又都想成为那个登顶的人。",
            "赛车本身是一件极致的作品：碳纤维车身轻到不可思议，混合动力单元把内燃机和电能回收揉在一起，每个弯道产生的下压力能让车「吸」在地面上。但再快的车，也要靠人在两三个小时里一刻不松地驾驭——心率长时间逼近运动员极限，还要在时速几百公里下做出毫秒级的判断。",
            "对刚入门的人，不必被这些参数吓退。你只需要先记住一件事：F1 是「最快的车 + 最强的人 + 最聪明的工程」三者的同场较量。看懂了这一层，后面的排位赛、进站、轮胎策略，都只是这场较量展开的不同侧面而已。",
          ],
        },
        {
          tag: "观赛",
          title: "一场比赛怎么看？",
          body: "一个比赛周末分为练习、排位赛和正赛。看点在于进站策略、轮胎选择，和毫秒之间的超车较量。",
          read: [
            "一个 F1 比赛周末不是只有周日那场。它通常分三步走：先是「自由练习」，车队借此调校赛车、试不同的轮胎；接着是「排位赛」，逐节淘汰，最快的一圈决定你周日从第几位发车；最后才是周日的「正赛」，真正的争冠时刻。理解了这三步，你就不会再被周五的「没在比赛」搞糊涂——那是在为周日埋伏笔。",
            "排位赛决定「发车顺序」，而发车顺序往往就决定了半场比赛的走势。最前排的位置叫「杆位（Pole）」，是一圈极限的奖赏。但起跑只是开始：灯灭的瞬间、第一个弯的卡位，常常在几秒钟里就改写排位赛辛苦排好的次序。",
            "正赛真正的暗线，是「轮胎」和「进站」。轮胎越软越快，但也磨得越快；什么时候进站换胎、换哪种胎，是一场贯穿全程的博弈。一次完美的进站只花两三秒，慢一秒就可能把领先拱手让人。所以当解说开始喊「该进站了吗」，往往就是胜负的转折点。",
            "至于最直观的看点——超车，它发生在直道尽头的重刹车区，或是借着尾流贴近前车的一瞬。看比赛时不必盯着每一辆车，挑两三个你喜欢的车手，跟着他们的节奏看：他在追谁、被谁追、轮胎还剩多少，一场比赛就会从「一堆车在转圈」变成一盘看得见的棋。",
          ],
        },
        {
          tag: "起点",
          title: "卡丁车：最好的开始",
          body: "几乎每位 F1 车手都从卡丁车起步。它便宜、安全、上手快——是普通人离赛车最近的入口。",
          read: [
            "如果说 F1 是金字塔的顶端，那卡丁车就是几乎所有人的塔基。翻开顶级车手的履历，绝大多数人的第一辆「赛车」都是卡丁车，很多人从七八岁就开始。原因很简单：卡丁车把赛车最核心的东西——走线、刹车点、出弯加速、轮对轮的攻防——浓缩进了一台便宜又安全的小车里。",
            "卡丁车贴地、没有悬挂，速度的「体感」被放大了：明明时速不算很高，坐在离地几厘米的座椅里，每个弯都惊心动魄。正是这种诚实的反馈，让它成为最好的老师——你做错了一个动作，车会立刻告诉你，没有电子辅助替你掩盖。",
            "它也是真正的「平民入口」。相比动辄天价的方程式赛车，卡丁车场按时段就能租，一身基础护具加一顶头盔就能下场，很多城市的商场、郊区都有场地。换句话说，你不需要先成为车手，才能体验当车手的感觉——这个周末就可以。",
            "所以无论你的目标是认真往上走，还是单纯想尝一口赛车的滋味，卡丁车都是那个「迈出第一步」成本最低、回报最直接的地方。先去开一次，你对这项运动的所有想象，都会变得具体起来。",
          ],
        },
        {
          tag: "装备",
          title: "需要哪些装备？",
          body: "头盔、赛服、手套是基础。但新手完全不必一次买齐——社区里就能借到，先体验再说。",
          read: [
            "赛车装备的存在只有一个目的：在意外发生时保护你。最核心的是头盔——它保护的是最不能受伤的部位，也是唯一一件强烈建议优先拥有自己那顶的装备（卫生与贴合度的考虑）。其余的护具，多数卡丁车场都能现场租借。",
            "往下数，常见的还有：连体赛服（耐磨、抗撕裂）、手套（防滑、保护手掌）、合适的赛车鞋，以及越来越被重视的颈部护具。进入更快的车种后，还会加上防火内衣、HANS 头颈支撑系统等。但请注意——这是一份「随着你越走越深才逐渐补齐」的清单，不是入门当天的购物车。",
            "给新手最实在的建议是：别一次买齐。第一次下场，租来的装备完全够用；真正爱上之后，再按「头盔 → 手套 → 赛服」的顺序慢慢添置自己的。这样你既不会为一时兴起花一大笔钱，又能在确定喜欢后买到真正合身、合用的东西。",
            "这也正是社区存在的意义之一。在我们的社群里，二手装备转让、新手借用都是常事——很多人的第一顶头盔、第一副手套，都是从邻居手里接过来的。先体验，再拥有，让门槛低到「这个周末就能开始」。",
          ],
        },
        {
          tag: "术语",
          title: "听懂赛场黑话",
          body: "DRS、Pole、Pit、Apex……这些词第一次听像天书，懂了之后，比赛会瞬间精彩起来。",
          read: [
            "第一次看比赛，最劝退的往往不是规则，而是解说嘴里一连串听不懂的「黑话」。但其实只要掌握几个高频词，整场比赛的语言就通了大半。下面这几个，是最值得先记住的。",
            "Pole（杆位）：排位赛最快、周日发车第一名的位置。Pit / Pit stop（进站）：赛车驶入维修区换胎、调整的过程，是策略的核心。Apex（弯心）：一个弯里最靠内的那个点，车手过弯追求的「最佳走线」就是奔着它去的——走得准，出弯就更快。",
            "DRS（可调式尾翼）：在指定路段、且与前车足够接近时，后车可以打开尾翼减少风阻、提高直线速度，专门用来帮助超车。Undercut / Overcut（提前进站 / 延后进站）：两种靠进站时机抢位置的经典套路——前者赌新胎的瞬时优势，后者赌多跑几圈的空当。",
            "Box, box（进站指令）：车队让车手进站的暗号，因为无线电里「box」比「pit」更不容易听错。还有 Formation lap（暖胎圈）、Safety Car（安全车）、Stint（一段轮胎的使用周期）……你不必一次全记住。挑三五个，下次看比赛时留意它们出现的时机，几场下来，解说的话就会从噪音变成剧情。",
          ],
        },
        {
          tag: "行动",
          title: "找到你的入口",
          body: "模拟器、卡丁车场、社区活动——三条路任你选。最重要的一步，永远是迈出的第一步。",
          read: [
            "看了这么多，最后只剩一个问题：从哪儿开始？好消息是，离赛车最近的入口，几乎每个人触手可及，而且都不贵。",
            "第一条路，模拟器。一套像样的方向盘加一台电脑，就能在客厅里跑遍世界名赛道。别小看它——很多职业车手也用模拟器练走线、记赛道。它几乎零风险，让你在花一分钱去真实场地前，先把「赛车的语言」练熟。",
            "第二条路，卡丁车场。这是从「看」到「开」最关键的一跃。租一台卡丁车，戴上头盔下场，你会第一次真切体会到刹车点、出弯加速到底是什么感觉。哪怕只是和朋友去玩一次，那种体感也会彻底改变你看比赛的方式。",
            "第三条路，也是我们最想邀请你走的——社区。一个人入门容易卡在「下一步做什么」，但一群人就不一样了：有人带你认识规则，有人约你一起去卡丁车场，有人把闲置的装备借给你。赛车从来不只是个人的速度游戏，它也是一群同好彼此点燃的热爱。",
            "所以，别等「准备好了」再开始——没有人是先准备好才出发的。挑一条最顺手的路，这个周末就迈出第一步。我们在终点，也在起点，等你。",
          ],
        },
      ],
    },
    racing: {
      eyebrow: "赛车门类",
      title: "赛车的大千世界",
      subtitle: "从 F1 到拉力、耐力、电动……点开任意一个，看懂它的概念、规则与魅力。",
      detail: {
        conceptLabel: "概念",
        rulesLabel: "赛制与规则",
        extraLabel: "亮点",
        sourceLabel: "资料来源",
        close: "关闭",
      },
      types: [
        {
          name: "F1",
          full: "Formula 1 一级方程式",
          concept:
            "由国际汽联（FIA）监管的单座、开轮式赛车最高殿堂，被公认为赛车运动在速度、技术与声望上的顶点。车手争夺「车手世界冠军」，车队争夺「车队世界冠军」。",
          rules: [
            "一个标准比赛周末：三节自由练习 → 排位赛（Q1/Q2/Q3 逐节淘汰，决定发车顺序）→ 周日正赛。",
            "正赛积分取前十：25-18-15-12-10-8-6-4-2-1。",
            "干地比赛强制进站，且必须用上至少两种不同的干胎配方。",
            "部分分站为「冲刺（Sprint）」周末，周六加跑一场约三分之一距离的短程冲刺赛，另计前八名积分。",
          ],
          extra:
            "冠亚军 25 比 18 的 7 分落差是刻意拉开的——奖励「赢」远胜于「稳拿前排」，逼着车手去争胜。",
          sources: [
            { label: "Formula1.com 官方", url: "https://www.formula1.com" },
            { label: "FIA（国际汽联）", url: "https://www.fia.com" },
          ],
        },
        {
          name: "MotoGP",
          full: "摩托车大奖赛",
          concept:
            "由国际摩联（FIM）监管、Dorna 推广的两轮公路赛最高级别，可视作摩托车版的 F1。车手骑着杜卡迪、阿普利亚、KTM、雅马哈、本田等厂商的原型赛车竞速。",
          rules: [
            "同一周末还包含 Moto2、Moto3 两个晋级级别与纯电的 MotoE 杯。",
            "顶级组周六设「冲刺赛（Sprint）」，约为正赛一半距离，单独计前九名积分。",
            "周日正赛取前十五名积分：25-20-16-13-11-10-9-8-7-6-5-4-3-2-1。",
            "顶级组用米其林轮胎，Moto2/Moto3 用倍耐力统一供胎。",
          ],
          extra:
            "冲刺赛的胜利不计入「分站冠军」次数，也不作为年度排名的并列打破依据——它有分、有热度，但不算一场正式 GP 胜利。",
          sources: [
            { label: "MotoGP.com 官方", url: "https://www.motogp.com" },
            { label: "FIM（国际摩联）", url: "https://www.fim-live.com" },
          ],
        },
        {
          name: "WRC",
          full: "世界拉力锦标赛",
          concept:
            "国际汽联（FIA）旗下的世界顶级拉力赛。由「车手 + 领航员」两人一组,驾驶基于量产车改装的赛车,在封闭的公路与林道上与时间赛跑。和场地赛不同,赛车按时间间隔逐辆发车,所有计时路段累计用时最短者获胜。",
          rules: [
            "比赛被切分为多个计时的「特殊赛段（Special Stage）」;赛段之间的转场路段不计时,但有到达时限,迟到要罚时。",
            "路面跨度极大:砂石、柏油、雪地/冰面（如蒙特卡洛的冰雪混合）都要应对。",
            "赛前可低速「勘路」记笔记;维修区时间被严格限制,赛车每晚锁进封闭车库（parc fermé）。",
            "每站最后一个赛段为「Power Stage」,另给最快的几名车手额外积分。",
          ],
          extra:
            "途中只有车组两人能动手修车、且只能用车上自带的工具与零件——爆胎、撞坏悬挂,常常得靠两人在荒野里自救。",
          sources: [
            { label: "WRC.com 官方", url: "https://www.wrc.com" },
            { label: "FIA（国际汽联）", url: "https://www.fia.com" },
          ],
        },
        {
          name: "WEC",
          full: "世界耐力锦标赛 · 勒芒",
          concept:
            "由国际汽联（FIA）与西部汽车俱乐部（ACO）共同主办的世界顶级耐力赛,多个级别的封闭式原型车与 GT 车同场竞速数小时。皇冠赛事「勒芒 24 小时」是世界上最著名的耐力赛。",
          rules: [
            "比拼的是速度、可靠性与油胎策略的综合——一辆车由 2–3 名车手轮流驾驶。",
            "现行两大级别:顶级的 Hypercar（含 LMH 与 LMDh 两套技术规则,靠 BoP 性能平衡同场竞争）与面向私人车队的 LMGT3。",
            "Hypercar 的发动机加混动总输出被限制在约 520 千瓦上限。",
            "单场至少 6 小时,最长就是勒芒的 24 小时;有强制的单人最短/最长驾驶时间规则。",
          ],
          extra:
            "Hypercar 在传动轴上装有「扭矩传感器」,实时监控赛车输出是否超过 BoP 分配的功率——这是现代赛车里相当聪明的技术管控手段。",
          sources: [
            { label: "FIA WEC 官方", url: "https://www.fiawec.com" },
            { label: "勒芒 24 小时官方", url: "https://www.24h-lemans.com" },
          ],
        },
        {
          name: "IndyCar",
          full: "印地赛车 · Indy 500",
          concept:
            "北美最高级别的单座、开轮式赛车系列。赛车采用接近统一的规格,但赛道类型极其多样,对车手的全能要求很高。皇冠赛事「印地 500」是赛车运动「三冠王」之一,也是全球规模最大的单日体育赛事之一。",
          rules: [
            "在三类赛道上比赛:超级椭圆/短椭圆、永久性公路赛道、临时街道赛道。",
            "底盘由 Dallara 统一供应;近年起引入混合动力系统。",
            "排位赛因赛道而异:公路/街道用类似 F1 的分段淘汰制,椭圆赛道多为单车计时跑。",
            "印地 500:2.5 英里椭圆,跑 200 圈共 500 英里,传统上 33 辆车发车。",
          ],
          extra:
            "同一个赛季里,车手既要在椭圆赛道上以接近 380 km/h 的均速贴墙狂奔,又要在街道赛道上不断刹车入弯——这种「全地形」考验在顶级赛车里独此一家。",
          sources: [
            { label: "IndyCar.com 官方", url: "https://www.indycar.com" },
            {
              label: "印地车速场官方",
              url: "https://www.indianapolismotorspeedway.com",
            },
          ],
        },
        {
          name: "NASCAR",
          full: "全美改装车赛",
          concept:
            "美国改装车（stock car）赛的最高级别——外形仿照雪佛兰、福特、丰田量产车型的专用赛车。比赛以椭圆赛道为主（从短赛道到超级速道）,辅以公路与街道赛,以高速「集团贴身缠斗」闻名,是美国收视最高的赛车运动。",
          rules: [
            "现役为 Next Gen 平台:更标准化的底盘,外观更接近展厅车型。",
            "多数比赛分成若干「阶段（stage）」,每个阶段结束都计分,阶段冠军另有奖励分。",
            "赛季分常规赛与季末「季后赛」,以季后赛积分逐轮决出年度总冠军。",
            "以椭圆赛道为主,近年也加入了公路赛与街道赛。",
          ],
          extra:
            "超级速道上,几十辆车以极近车距高速「抱团」行驶,利用尾流互相借力（drafting）——壮观,也最容易引发连环大事故,这正是它的标志性看点。",
          sources: [{ label: "NASCAR.com 官方", url: "https://www.nascar.com" }],
        },
        {
          name: "Formula E",
          full: "电动方程式",
          concept:
            "国际汽联（FIA）认证的全电动单座赛车世界锦标赛,定位为电动车技术与可持续发展的展示舞台。比赛（称 E-Prix）多在大城市市中心的临时街道赛道举行,而非专用赛车场。",
          rules: [
            "采用统一规格的纯电单座赛车;比赛是固定圈数、站立起步。",
            "核心玩法是「能量管理」:车手不能全程全功率,必须把电量精打细算地分配到终点。",
            "「攻击模式（Attack Mode）」:车手须驶离常规走线、经过场外的激活区,以换取一段额外功率。",
            "积分同为前十 25-…-1,另设杆位与最快圈奖励分。",
          ],
          extra:
            "最新一代赛车（Gen3 Evo）0–100 km/h 加速约 1.8 秒,比现款 F1 还快,是目前加速最猛的单座赛车。",
          sources: [
            { label: "FIA Formula E 官方", url: "https://www.fiaformulae.com" },
            { label: "FIA（国际汽联）", url: "https://www.fia.com" },
          ],
        },
        {
          name: "Karting",
          full: "卡丁车",
          concept:
            "场地赛车的入门基石——小巧轻量、无悬挂、多为两冲程发动机的单座小车。它被公认为通往职业赛车的「起跑线」:相对便宜、易上手,又能教会走线、起步、超车、贴身防守等所有基本功。它本身也是有 FIA 世界与欧洲锦标赛的正式竞技项目。",
          rules: [
            "由 FIA Karting（原 CIK-FIA）监管,大类分为直驱卡丁、带变速箱卡丁与 Superkart。",
            "职业阶梯按年龄/排量分级:Mini（少儿）→ OK-Junior（青少年,125cc 水冷）→ OK（成人顶级,125cc）。",
            "KZ 为带变速箱的 125cc 级别（KZ1 / KZ2）;Superkart 为双缸 250cc、近 100 马力的最快级别,只在长赛道跑。",
            "几乎每位现代顶级车手都从卡丁车起步。",
          ],
          extra:
            "维斯塔潘、汉密尔顿、舒马赫都是从卡丁车一路打上来的;维斯塔潘更在 2013 一年内连夺三项 CIK-FIA 大赛冠军,堪称卡丁车时代的统治级表现。",
          sources: [
            { label: "FIA Karting 官方", url: "https://www.fiakarting.com" },
            { label: "FIA（国际汽联）", url: "https://www.fia.com" },
          ],
        },
        {
          name: "GT",
          full: "GT3 / 房车赛",
          concept:
            "GT（Grand Touring）赛事让基于量产车改装的双座跑车同场竞技——法拉利、保时捷、宝马、奔驰 AMG、奥迪、兰博基尼、迈凯伦等品牌的「街车赛车版」。其中 GT3 是当今全球统一、最主流的「客户赛车」级别,让私人车队也能买来厂商造好的赛车下场。",
          rules: [
            "GT3 技术规则由 FIA 定义;全球最具代表性的平台是 SRO 运营的 GT World Challenge。",
            "因前置、中置、后置发动机的车同场竞争,靠「性能平衡（BoP)」调整重量、功率、空气动力,让各品牌势均力敌。",
            "赛季分「Sprint（短程冲刺）」与「Endurance（耐力)」两类,各有冠军。",
            "车手按铂金/金/银/铜分级,通过等级搭配规则,让业余「绅士车手」也能与职业车手同场竞争。",
          ],
          extra:
            "「斯帕 24 小时」是 GT World Challenge 的皇冠耐力赛;正是 BoP 的存在,才让一辆前置宝马、一辆中置法拉利、一辆后置保时捷能在同一场里真刀真枪地缠斗。",
          sources: [
            {
              label: "GT World Challenge 官方",
              url: "https://www.gt-world-challenge.com",
            },
            { label: "SRO Motorsports", url: "https://www.sro-motorsports.com" },
          ],
        },
      ],
    },
    community: {
      previewBadge: "预览 · 社区即将上线",
      allLabel: "全部动态",
      channelsTitle: "频道",
      composer: "分享你的赛道日常……",
      composerNote: "登录后即可发布 · 即将开放",
      post: "发布",
      mediaLabel: "示意图片",
      likes: "赞",
      comments: "评论",
      channels: [
        { id: "daily", name: "日常分享", desc: "晒训练、赛道日、装备" },
        { id: "tips", name: "驾驶技巧", desc: "走线、刹车点、雨战" },
        { id: "meetups", name: "约赛", desc: "组局下场，一起跑" },
        { id: "gear", name: "装备转让", desc: "二手流通，互通有无" },
      ],
      posts: [
        {
          channel: "daily",
          author: "小林",
          handle: "@kart_lin",
          time: "2 小时前",
          text: "第一次下赛道，腿还在抖但太爽了！求大佬指点走线 🏎️",
          likes: 24,
          comments: 6,
        },
        {
          channel: "tips",
          author: "老周",
          handle: "@coach_zhou",
          time: "昨天",
          text: "雨战刹车点比干地提前半个车身：先稳后快，出弯再给油。",
          likes: 41,
          comments: 12,
        },
        {
          channel: "meetups",
          author: "Mia",
          handle: "@mia_gp",
          time: "3 天前",
          text: "周六上午卡丁车场约起？现在 4 人，差 2 个凑一组！",
          likes: 18,
          comments: 9,
        },
        {
          channel: "gear",
          author: "阿凯",
          handle: "@kai_gear",
          time: "上周",
          text: "出一套 OMP 卡丁手套，9 成新，M 码，同城自提。",
          likes: 7,
          comments: 3,
        },
        {
          channel: "daily",
          author: "Tina",
          handle: "@tina_drives",
          time: "上周",
          text: "周末观赛聚会的合影，下次一定要更多人来！📸",
          likes: 33,
          comments: 5,
        },
      ],
    },
    about: {
      body: "这里将讲述 OpenGrid 的由来——它为什么出现，想为这项运动和这片街区做些什么。完整故事即将补充。",
      note: "内容即将补充",
    },
    join: {
      eyebrow: "加入我们",
      title: "成为第一批街区赛车手",
      subtitle: "留下联系方式，论坛和首场活动上线时，第一时间通知你。",
      placeholder: "你的邮箱或微信",
      button: "抢先加入",
      note: "我们不会发送垃圾信息。",
      thanks: "收到啦！我们会尽快与你联系 🏁",
    },
    footer: {
      tagline: "降低门槛，凝聚邻里，让这项运动越来越好。",
      rights: "© 2026 OpenGrid 社区 · 一个由学生发起的非营利项目",
      madeWith: "由热爱驱动",
    },
    theme: {
      title: "选择你的车队主题",
      subtitle: "挑选您偏向的车队主题色",
      hint: "点一下即时切换 · 自动记住",
      aria: "打开主题配色",
      defaultLabel: "OpenGrid 白",
    },
  },

  en: {
    nav: {
      brand: "OpenGrid",
      join: "Join",
    },
    sections: {
      knowledge: {
        label: "Racing 101",
        headline: "Make sense of every kind of racing",
        intro:
          "From F1 basics to the great racing categories around the world — one place to understand the sport.",
      },
      community: {
        label: "Community",
        headline: "Where racers gather",
        intro:
          "Share your track-day moments like a feed, browse channels like a hangout — driving tips, meetups and gear, all in one place.",
      },
      about: {
        label: "About",
        headline: "About OpenGrid",
        intro: "A short story about how the passion began.",
      },
    },
    hero: {
      eyebrow: "Community-driven · Racing, made reachable",
      titleTop: "Bring racing",
      titleBottom: "home to your block",
      subtitle:
        "Putting the passion within reach. From discovering F1 to stepping into karting, we use a community to turn motorsport — once distant and expensive — into something you can start right where you are.",
      ctaPrimary: "Join the community",
      ctaSecondary: "Learn about F1",
      scroll: "Scroll",
    },
    vision: {
      eyebrow: "Why we do this",
      title: "Lower the barrier, grow the love",
      subtitle:
        "A sport only gets better when more people take part. We start with three things.",
      pillars: [
        {
          title: "Lower the barrier",
          body: "Shared gear, a second-hand market and honest info — so “too expensive” no longer keeps you off the track.",
        },
        {
          title: "Bring neighbors together",
          body: "Take the online passion to a real circuit — race, watch, and grow from beginner to regular, together.",
        },
        {
          title: "Help the sport grow",
          body: "Every new participant makes motorsport's future in China a little brighter. Change starts on your block.",
        },
      ],
    },
    home: {
      exploreEyebrow: "Three areas",
      exploreTitle: "Where to start",
      exploreSubtitle: "Knowledge, community — and our story. Pick one to begin.",
      enter: "Enter",
    },
    guide: {
      eyebrow: "F1 basics",
      title: "Start here. Get the sport.",
      subtitle:
        "Never followed it? No problem. A few minutes to clear the very first hurdle.",
      readMore: "Read more",
      close: "Close",
      cards: [
        {
          tag: "Basics",
          title: "What is F1?",
          body: "Formula 1 is the pinnacle of motorsport: the fastest cars and finest drivers, racing for the title across 20-plus circuits worldwide.",
          read: [
            "The \"formula\" in Formula 1 isn't math — it's a single rulebook every team must obey. The size of the car, the kind of engine, the limits of its aerodynamics: all of it is written down by the FIA, the sport's governing body. Everyone builds under the same formula, which means the contest is as much between hundreds of engineers as it is between drivers. That's why F1 is called the pinnacle of motorsport: it distills the engineering limits of human speed into a single sport.",
            "An F1 team chases two trophies at once. One is the Drivers' Championship, awarded to the single driver with the most points across the season. The other is the Constructors' Championship, which adds up the points of a team's two drivers. So you'll often see teammates both fighting side by side and quietly fighting each other — they need each other to win the team title, yet each wants to be the one who stands on top.",
            "The car itself is an extreme object: a carbon-fibre body that's almost impossibly light, a hybrid power unit that marries a combustion engine to energy recovery, and downforce in the corners strong enough to glue the car to the track. But no matter how fast the car, a human has to wrestle it for two or three hours without a break — heart rate near an athlete's limit, making millisecond decisions at hundreds of kilometres per hour.",
            "If you're just starting out, don't let the numbers scare you off. Hold on to one idea: F1 is the fastest cars, the finest humans, and the smartest engineering, all racing on the same track. Once that clicks, qualifying, pit stops and tyre strategy are just different faces of that same contest.",
          ],
        },
        {
          tag: "Watching",
          title: "How do you watch a race?",
          body: "A race weekend splits into practice, qualifying and the race. The drama lives in pit strategy, tire choices and millisecond overtakes.",
          read: [
            "An F1 weekend isn't just Sunday. It usually unfolds in three steps. First comes practice, where teams dial in the car and test different tyres. Then qualifying, run in knock-out segments, where a single fastest lap decides where you start on Sunday. Only then comes the race itself — the moment that actually settles the title. Understand those three steps and you'll never again be confused by Friday's \"non-racing\": it's laying the traps for Sunday.",
            "Qualifying decides the starting order, and the starting order often shapes the first half of the race. The very front spot is called pole position, the reward for one perfect lap. But the start is only the beginning: the instant the lights go out, the scramble into turn one can rewrite that hard-won order in a matter of seconds.",
            "The real undercurrent of a race is tyres and pit stops. Softer tyres are faster but wear out sooner; when to pit and which compound to fit is a gamble that runs the whole race. A flawless stop takes only two or three seconds — lose one, and you can hand the lead away. So when the commentators start asking \"should they box now?\", that's usually the hinge the race turns on.",
            "As for the most visible thrill — overtaking — it happens in the heavy braking zones at the end of straights, or in the instant a car slips into the slipstream of the one ahead. You don't need to watch every car. Pick two or three drivers you like and follow their rhythm: who they're chasing, who's chasing them, how much tyre they have left. Do that, and a race turns from \"cars going in circles\" into a chess game you can actually read.",
          ],
        },
        {
          tag: "Start",
          title: "Karting: the best start",
          body: "Almost every F1 driver began in karts. Cheap, safe and quick to learn — it's the closest ordinary people get to racing.",
          read: [
            "If F1 is the top of the pyramid, karting is the base almost everyone stands on. Read any top driver's biography and their first \"race car\" was almost always a kart, many of them starting at seven or eight years old. The reason is simple: karting distils the core of racing — lines, braking points, corner exits, wheel-to-wheel combat — into a machine that's cheap and safe.",
            "A kart sits low to the ground and has no suspension, so the sensation of speed is amplified. The actual velocity isn't that high, yet strapped into a seat a few centimetres off the tarmac, every corner is heart-in-mouth. That honest feedback is exactly what makes it the best teacher — do something wrong and the kart tells you instantly, with no electronics to paper over your mistake.",
            "It's also a genuinely accessible entry point. Compared with the eye-watering cost of formula cars, a kart can be rented by the session; basic protective gear and a helmet are enough to get on track, and many cities have venues at malls or just outside town. In other words, you don't have to become a driver before you can feel like one — you can do it this weekend.",
            "So whether your goal is to climb the ladder for real or simply to taste what racing feels like, karting is where \"the first step\" costs the least and rewards you most directly. Go drive one once, and every idea you've ever had about this sport suddenly becomes concrete.",
          ],
        },
        {
          tag: "Gear",
          title: "What gear do you need?",
          body: "Helmet, suit and gloves are the basics. But you needn't buy it all at once — borrow from the community and just try it first.",
          read: [
            "Racing gear exists for one purpose: to protect you when something goes wrong. The most essential piece is the helmet — it guards the part you can least afford to injure, and it's the one item worth owning yourself sooner rather than later, for hygiene and fit. Most of the rest can be rented right at the track.",
            "Beyond that, the usual list runs: a one-piece suit (abrasion- and tear-resistant), gloves (grip and palm protection), proper racing boots, and — increasingly valued — a neck brace. Move up to faster categories and you'll add fireproof underlayers, a HANS head-and-neck device, and more. But note: this is a list you fill in gradually as you go deeper, not a shopping cart for day one.",
            "The most practical advice for a beginner is: don't buy it all at once. For your first time on track, rented gear is plenty. Once you've genuinely fallen for it, add your own in the order helmet → gloves → suit. That way you neither blow a pile of money on a passing whim, nor miss out on gear that actually fits once you know you love it.",
            "And this is exactly one of the things a community is for. In our circles, passing on second-hand gear and lending kit to newcomers is routine — plenty of people's first helmet or first pair of gloves came from a neighbour. Try first, own later, and keep the barrier low enough that \"this weekend\" is a real answer.",
          ],
        },
        {
          tag: "Jargon",
          title: "Crack the race-day slang",
          body: "DRS, Pole, Pit, Apex… gibberish the first time, but once they click the race comes alive.",
          read: [
            "The first time you watch a race, what puts people off usually isn't the rules — it's the stream of slang pouring out of the commentary. But master just a handful of high-frequency terms and most of the race's language opens up. These are the ones worth learning first.",
            "Pole: the fastest spot in qualifying and first on the grid for Sunday. Pit / pit stop: when a car comes into the lane to change tyres and make adjustments — the heart of strategy. Apex: the innermost point of a corner; the \"ideal line\" a driver chases is aimed right at it, because hit it well and you exit faster.",
            "DRS (the adjustable rear wing): in designated zones, and when close enough behind the car ahead, the following car can open its wing to cut drag and gain straight-line speed — built specifically to help overtaking. Undercut / overcut (pitting earlier / later): two classic ways to steal a position through pit timing — one bets on the instant grip of fresh tyres, the other on running a few extra laps in clear air.",
            "\"Box, box\": the call telling a driver to pit, used because over the radio \"box\" is harder to mishear than \"pit\". Then there's the formation lap, the safety car, a stint (one tyre's life cycle)… you don't have to memorise them all at once. Pick three to five, watch for when they show up next time, and over a few races the commentary turns from noise into story.",
          ],
        },
        {
          tag: "Action",
          title: "Find your way in",
          body: "Sims, karting tracks, community events — three paths in. The one that matters most is always the first step.",
          read: [
            "After all of this, one question remains: where do you start? The good news is that the closest entry to racing is within almost anyone's reach — and none of it is expensive.",
            "Path one: the simulator. A decent wheel and a computer let you lap the world's great circuits from your living room. Don't underestimate it — plenty of professional drivers use sims to learn lines and memorise tracks. It's nearly risk-free, and it lets you master the language of racing before you spend a cent at a real venue.",
            "Path two: the karting track. This is the crucial leap from watching to driving. Rent a kart, put on a helmet, get on track, and you'll feel for the first time what braking points and corner exits actually are. Even a single outing with friends will change the way you watch a race forever.",
            "Path three — and the one we most want to invite you to take — is the community. Alone, it's easy to get stuck on \"what's the next step\"; with a group of people, everything changes. Someone walks you through the rules, someone invites you to the kart track, someone lends you the gear they no longer use. Racing was never only a solitary game of speed — it's also a shared passion that people light in one another.",
            "So don't wait until you're \"ready\" to begin — nobody ever sets off fully ready. Pick the path that suits you best, and take the first step this weekend. We'll be waiting for you at the finish, and at the start.",
          ],
        },
      ],
    },
    racing: {
      eyebrow: "Racing categories",
      title: "The wide world of racing",
      subtitle:
        "From F1 to rally, endurance and electric — tap any one to get its concept, rules and what makes it great.",
      detail: {
        conceptLabel: "Overview",
        rulesLabel: "Format & rules",
        extraLabel: "Highlights",
        sourceLabel: "Sources",
        close: "Close",
      },
      types: [
        {
          name: "F1",
          full: "Formula 1",
          concept:
            "The pinnacle of single-seater, open-wheel racing, governed by the FIA. Widely regarded as the summit of motorsport for speed, technology and prestige. Drivers chase the Drivers' World Championship; teams contest the Constructors' title.",
          rules: [
            "A standard weekend: three practice sessions → knockout qualifying (Q1/Q2/Q3) to set the grid → the race on Sunday.",
            "Race points go to the top ten: 25-18-15-12-10-8-6-4-2-1.",
            "In a dry race a pit stop is mandatory, and drivers must use at least two different dry-tyre compounds.",
            "Some rounds are 'Sprint' weekends: a short, ~one-third-distance race on Saturday scoring its own top-eight points.",
          ],
          extra:
            "The steep 25-to-18 gap between 1st and 2nd is deliberate — it rewards winning over merely collecting steady podiums.",
          sources: [
            { label: "Formula1.com (official)", url: "https://www.formula1.com" },
            { label: "FIA", url: "https://www.fia.com" },
          ],
        },
        {
          name: "MotoGP",
          full: "Grand Prix Motorcycle Racing",
          concept:
            "The top tier of two-wheeled Grand Prix road racing, governed by the FIM and promoted by Dorna — effectively the motorcycle equivalent of F1. Riders compete on prototype machines from Ducati, Aprilia, KTM, Yamaha and Honda.",
          rules: [
            "The same weekend also hosts the feeder classes Moto2 and Moto3, plus the all-electric MotoE cup.",
            "The premier class runs a Saturday Sprint at about half race distance, scoring its own top-nine points.",
            "Sunday's Grand Prix scores the top fifteen: 25-20-16-13-11-10-9-8-7-6-5-4-3-2-1.",
            "The premier class runs on Michelin tyres; Moto2/Moto3 use a spec Pirelli supply.",
          ],
          extra:
            "A Sprint win does not count as a Grand Prix victory, nor as a championship tiebreaker — it scores points and buzz, but isn't a 'real' GP win.",
          sources: [
            { label: "MotoGP.com (official)", url: "https://www.motogp.com" },
            { label: "FIM", url: "https://www.fim-live.com" },
          ],
        },
        {
          name: "WRC",
          full: "World Rally Championship",
          concept:
            "The FIA's premier rally championship. A driver-and-co-driver crew races a production-based car against the clock on closed public and forest roads. Unlike circuit racing, cars start individually at timed intervals — the shortest cumulative time across all timed sections wins.",
          rules: [
            "An event is split into many timed 'special stages'; the public-road links between them aren't timed but have arrival deadlines, with time penalties for being late.",
            "Surfaces vary enormously: gravel, tarmac and snow/ice (Monte-Carlo famously mixes ice and tarmac).",
            "Crews do a slow 'recce' to write pace notes; service time is tightly capped and cars are locked in overnight parc fermé.",
            "Each event ends with a 'Power Stage' awarding bonus points to the fastest few crews.",
          ],
          extra:
            "Out on the route only the two crew members may work on the car, using only the tools and parts they carry — a blown tyre or bent suspension often means a roadside rescue in the wilderness.",
          sources: [
            { label: "WRC.com (official)", url: "https://www.wrc.com" },
            { label: "FIA", url: "https://www.fia.com" },
          ],
        },
        {
          name: "WEC",
          full: "World Endurance Championship · Le Mans",
          concept:
            "The world's premier sports-car endurance series, run by the FIA together with the Automobile Club de l'Ouest (ACO). Multiple classes of closed-cockpit prototypes and GT cars race together for hours. Its crown jewel is the 24 Hours of Le Mans, the most famous endurance race in the world.",
          rules: [
            "It rewards a blend of speed, reliability and fuel/tyre strategy — each car is shared by 2–3 drivers.",
            "Two current classes: the top Hypercar (LMH and LMDh rulesets racing together under Balance of Performance) and the privateer-focused LMGT3.",
            "Combined engine-plus-hybrid output in Hypercar is capped at around 520 kW.",
            "Races run from a minimum of 6 hours up to the 24 Hours of Le Mans, with mandatory minimum/maximum drive-time rules per driver.",
          ],
          extra:
            "Hypercars carry torque sensors on the driveshafts to police their BoP-allocated power output in real time — one of the cleverest technical-control measures in modern racing.",
          sources: [
            { label: "FIA WEC (official)", url: "https://www.fiawec.com" },
            { label: "24h Le Mans (official)", url: "https://www.24h-lemans.com" },
          ],
        },
        {
          name: "IndyCar",
          full: "IndyCar · Indy 500",
          concept:
            "North America's premier open-wheel, single-seater series. The cars are near-identical spec machines, but the track types are wildly varied, demanding real all-round versatility. Its centerpiece, the Indianapolis 500, is one of motorsport's Triple Crown and among the largest single-day sporting events on Earth.",
          rules: [
            "It races on three track types: super-/short ovals, permanent road courses and temporary street circuits.",
            "A spec Dallara chassis; a hybrid energy-recovery powertrain was introduced in recent seasons.",
            "Qualifying varies by track: road/street use an F1-style knockout, ovals typically use single-car timed runs.",
            "The Indy 500: a 2.5-mile oval, 200 laps for 500 miles, traditionally a 33-car field.",
          ],
          extra:
            "In one season a driver must run inches from the wall at oval speeds near 380 km/h, then brake-and-turn through a tight street circuit — an all-terrain test unique among top-flight racing.",
          sources: [
            { label: "IndyCar.com (official)", url: "https://www.indycar.com" },
            {
              label: "Indianapolis Motor Speedway",
              url: "https://www.indianapolismotorspeedway.com",
            },
          ],
        },
        {
          name: "NASCAR",
          full: "NASCAR Cup Series",
          concept:
            "The top division of American stock-car racing — purpose-built cars styled after production Chevrolets, Fords and Toyotas. Racing is mostly on ovals (from short tracks to superspeedways), plus some road and street courses, and is famous for high-speed pack racing. It's the most-watched motorsport in the U.S.",
          rules: [
            "The current car is the standardized 'Next Gen' platform, styled to look more like showroom models.",
            "Most races split into 'stages'; each stage end scores points, with a bonus for the stage winner.",
            "The season runs a regular phase then a season-ending playoff that decides the champion on playoff points.",
            "Predominantly oval racing, with road and street courses added in recent years.",
          ],
          extra:
            "On superspeedways dozens of cars run nose-to-tail in a high-speed pack, drafting off each other — spectacular, and the most likely trigger for a 'Big One' multi-car crash. That's the signature appeal.",
          sources: [{ label: "NASCAR.com (official)", url: "https://www.nascar.com" }],
        },
        {
          name: "Formula E",
          full: "Formula E",
          concept:
            "The FIA-sanctioned all-electric single-seater World Championship, conceived as a showcase for EV technology and sustainability. Its races — called E-Prix — are held mostly on temporary street circuits in major city centres rather than dedicated racetracks.",
          rules: [
            "Spec all-electric single-seaters; races are a fixed number of laps from a standing start.",
            "The core skill is energy management — you can't run flat-out, you must ration the battery to the finish.",
            "'Attack Mode': drivers must leave the racing line through an off-line activation zone to collect a burst of extra power.",
            "Points follow the same 25-…-1 top-ten scale, with bonus points for pole and fastest lap.",
          ],
          extra:
            "The latest car (Gen3 Evo) does 0–100 km/h in about 1.8 seconds — quicker than a current F1 car, making it the fastest-accelerating single-seater there is.",
          sources: [
            { label: "FIA Formula E (official)", url: "https://www.fiaformulae.com" },
            { label: "FIA", url: "https://www.fia.com" },
          ],
        },
        {
          name: "Karting",
          full: "Karting",
          concept:
            "The entry-level foundation of circuit motorsport — small, light, suspension-less single-seaters, mostly two-stroke. Universally seen as the gateway to pro racing: relatively cheap and accessible, it teaches every fundamental — racing lines, starts, overtaking, wheel-to-wheel defending. It's also a serious sport with its own FIA World and European Championships.",
          rules: [
            "Governed by FIA Karting (formerly CIK-FIA); broad families are direct-drive karts, gearbox karts and Superkarts.",
            "The career ladder is age/displacement-tiered: Mini (kids) → OK-Junior (teens, 125cc water-cooled) → OK (senior top class, 125cc).",
            "KZ is the 125cc gearbox class (KZ1 / KZ2); Superkart is the fastest — twin-cylinder 250cc, near 100 hp, long circuits only.",
            "Almost every modern top driver started in karts.",
          ],
          extra:
            "Verstappen, Hamilton and Schumacher all came up through karting — and in 2013 Verstappen won three CIK-FIA titles in a single year, a dominant karting-era run.",
          sources: [
            { label: "FIA Karting (official)", url: "https://www.fiakarting.com" },
            { label: "FIA", url: "https://www.fia.com" },
          ],
        },
        {
          name: "GT",
          full: "GT3 / GT Racing",
          concept:
            "GT (Grand Touring) racing pits production-derived two-seat sports cars against each other — the race versions of road cars from Ferrari, Porsche, BMW, Mercedes-AMG, Audi, Lamborghini and McLaren. GT3 is today's globally standardized, mainstream 'customer racing' class, letting private teams buy and race manufacturer-built cars.",
          rules: [
            "GT3 technical rules are defined by the FIA; the flagship global platform is SRO's GT World Challenge.",
            "Because front-, mid- and rear-engined cars race together, Balance of Performance (BoP) adjusts weight, power and aero to keep brands evenly matched.",
            "The season splits into Sprint and Endurance disciplines, each with its own title.",
            "Drivers are graded Platinum/Gold/Silver/Bronze, and lineup rules let amateur 'gentleman drivers' race alongside pros.",
          ],
          extra:
            "The 24 Hours of Spa is GT World Challenge's crown-jewel endurance event — and it's BoP that lets a front-engined BMW, a mid-engined Ferrari and a rear-engined Porsche genuinely fight in the same race.",
          sources: [
            {
              label: "GT World Challenge (official)",
              url: "https://www.gt-world-challenge.com",
            },
            { label: "SRO Motorsports", url: "https://www.sro-motorsports.com" },
          ],
        },
      ],
    },
    community: {
      previewBadge: "Preview · Community coming soon",
      allLabel: "All posts",
      channelsTitle: "Channels",
      composer: "Share your track day…",
      composerNote: "Sign in to post · coming soon",
      post: "Post",
      mediaLabel: "Sample image",
      likes: "likes",
      comments: "comments",
      channels: [
        { id: "daily", name: "Daily", desc: "Training, track days, gear" },
        { id: "tips", name: "Driving Tips", desc: "Lines, braking, wet craft" },
        { id: "meetups", name: "Meetups", desc: "Group up and hit the track" },
        { id: "gear", name: "Gear Exchange", desc: "Second-hand, passed on" },
      ],
      posts: [
        {
          channel: "daily",
          author: "Lin",
          handle: "@kart_lin",
          time: "2h",
          text: "First time on track — legs still shaking but what a rush. Tips on the racing line? 🏎️",
          likes: 24,
          comments: 6,
        },
        {
          channel: "tips",
          author: "Zhou",
          handle: "@coach_zhou",
          time: "Yesterday",
          text: "In the wet, brake half a car-length earlier than dry: settle first, then power out.",
          likes: 41,
          comments: 12,
        },
        {
          channel: "meetups",
          author: "Mia",
          handle: "@mia_gp",
          time: "3d",
          text: "Karting Saturday morning? 4 of us so far, need 2 more for a group!",
          likes: 18,
          comments: 9,
        },
        {
          channel: "gear",
          author: "Kai",
          handle: "@kai_gear",
          time: "Last week",
          text: "Selling an OMP karting glove set, like new, size M, local pickup.",
          likes: 7,
          comments: 3,
        },
        {
          channel: "daily",
          author: "Tina",
          handle: "@tina_drives",
          time: "Last week",
          text: "Group photo from the watch party — more of us next time! 📸",
          likes: 33,
          comments: 5,
        },
      ],
    },
    about: {
      body: "This is where OpenGrid's story will live — why it started, and what it hopes to do for the sport and the neighborhood. The full story is coming soon.",
      note: "Story coming soon",
    },
    join: {
      eyebrow: "Join us",
      title: "Be one of the first block racers",
      subtitle:
        "Leave your contact and we'll ping you the moment the forum and first event go live.",
      placeholder: "Your email or WeChat",
      button: "Get early access",
      note: "No spam, ever.",
      thanks: "Got it! We'll be in touch soon 🏁",
    },
    footer: {
      tagline: "Lower the barrier, unite the neighborhood, grow the sport.",
      rights:
        "© 2026 OpenGrid Community · A non-profit project started by a student",
      madeWith: "Driven by passion",
    },
    theme: {
      title: "Pick your team color",
      subtitle: "Choose the team color you lean toward",
      hint: "Tap to switch · saved automatically",
      aria: "Open theme picker",
      defaultLabel: "OpenGrid White",
    },
  },
};
