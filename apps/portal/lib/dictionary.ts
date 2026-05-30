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
            "一级方程式（Formula 1，简称 F1）是由国际汽车联合会（FIA）制定与监管竞赛规则、商业上由 Formula One 集团推广的单座、开轮式赛车最高级别赛事，被广泛视为场地赛车在速度、工程与商业规模上的顶点。F1 世界锦标赛自 1950 年起举办，是 FIA 设立的最高级别年度世界单座方程式锦标赛。名称中的「方程式」并不是数学公式，而是指所有参赛车队都必须共同遵守的一整套技术规则——它规定了车身尺寸、空气动力学、动力单元形式、最低重量等边界；各车队在同一套规则下自行设计、制造并运营自己的赛车，因此比拼的既是车手，也是车队背后成百上千名工程师的水平。每个赛季同时进行两项世界锦标：颁给积分最高车手的「车手世界锦标赛」，以及把同队两位车手积分相加的「车队世界锦标赛」。现行赛车采用 1.6 升 V6 涡轮增压内燃机搭配能量回收系统（ERS）的混合动力单元，车身以碳纤维单体壳为核心，在追求极限性能的同时保护车手安全。",
          rules: [
            "比赛周末结构：标准（非冲刺）周末通常为周五两节自由练习、周六一节自由练习加排位赛、周日正赛。",
            "排位赛分 Q1、Q2、Q3 三节逐节淘汰：每节按当时最快单圈淘汰最慢的若干车手，最终由最快的十位在 Q3 争夺「杆位」（发车第一位），其余车手按各自最快圈速排定发车顺序。",
            "正赛积分仅取前十名，依次为 25、18、15、12、10、8、6、4、2、1 分；自 2025 赛季起，原本给最快圈速的 1 分附加分已被取消。",
            "发车：正赛在暖胎圈后以「站立起步」开始；若起步条件不安全，则可由安全车带队改为滚动发车。",
            "轮胎规则：干地比赛中每位车手必须至少使用两种不同配方的干胎，因此通常至少要进站换胎一次；比赛中禁止加油（自 2010 年起），每辆车须靠起步携带的燃油跑完全程。",
            "部件配额：动力单元、变速箱等关键部件每赛季设有使用数量上限，超额更换将受发车位罚退处罚。",
            "安全控制：赛会以旗语、安全车（Safety Car）与虚拟安全车（VSC）在危险路段统一压低车速。",
            "冲刺赛（Sprint）：部分分站为冲刺周末，加设一场约为正赛距离三分之一、不强制进站的短程冲刺赛，并配有独立的冲刺排位；冲刺赛前八名得分，依次为 8、7、6、5、4、3、2、1 分。",
            "完赛距离规则：若正赛因故提前结束，须完成至少 75% 的预定距离才颁发全额积分，否则按规则规定的递减积分方式计分。",
            "围场封闭（Parc fermé）：排位赛开始后赛车进入封闭状态，车队不得再对其作实质性设定改动，以确保排位与正赛使用基本相同的设定。",
          ],
          extra:
            "F1 的看点在于「人、车、队」三者叠加：最快的赛车、长时间承受接近运动员极限负荷的车手，以及背后持续博弈的工程团队。现代规则中还有两项深刻影响竞争格局的设计——其一是「预算帽」（cost cap），为车队每年可投入赛车研发与运营的开支设定上限，意在缩小大小车队的资源差距；其二是 DRS（可调式尾翼），允许后车在指定区域、且与前车足够接近时打开尾翼以减小风阻、辅助超车。轮胎方面，全场由单一供应商统一提供，各队条件一致。此外，冠亚军 25 比 18 分的较大落差是规则刻意拉开的，意在奖励「赢得比赛」而非「稳拿前排」。",
          sources: [
            {
              label: "Formula 1 官方（formula1.com）",
              url: "https://www.formula1.com",
            },
            {
              label: "FIA 竞赛规则（fia.com）",
              url: "https://www.fia.com/regulation/category/110",
            },
          ],
        },
        {
          name: "MotoGP",
          full: "摩托车大奖赛",
          concept:
            "摩托车大奖赛（MotoGP）是由国际摩托车运动联合会（FIM）制定规则、由 Dorna 体育公司商业推广的两轮公路赛车最高级别赛事，可视作摩托车版的 F1。顶级组车手骑着杜卡迪、阿普利亚、KTM、雅马哈、本田等厂商专门打造的「原型车」（prototype，非量产车）竞速。一个大奖赛周末通常同场进行三个级别：作为顶级组的 MotoGP，以及作为晋级阶梯的 Moto2、Moto3，部分赛季还设有纯电动的 MotoE 杯。赛季中积分最高的车手加冕世界冠军，厂商之间另设车厂锦标。摩托车公路赛世界锦标赛的历史可追溯到 1949 年，是历史最悠久的机动车世界锦标赛之一；如今的四冲程「MotoGP」级别自 2002 年取代昔日的 500cc 二冲程而来。现代顶级组使用排量约 1000 毫升的四缸原型车，在部分赛道的极速可超过每小时 360 公里。与 F1 之于四轮场地赛类似，MotoGP 是两轮公路赛在速度、技术与声望上的顶点。",
          rules: [
            "周末结构：自 2023 年起，顶级组周五设自由练习与一节计时「Practice」（其前十名直接晋级 Q2），周六上午跑 FP2 与排位（Q1、Q2 两节），周六下午为冲刺赛，周日为正赛。",
            "排位：Q1 决定第 13 位往后的发车位，Q2 决定杆位与前列；同一套排位结果同时决定冲刺赛与周日正赛的发车顺序（冲刺赛成绩不影响周日发车）。",
            "冲刺赛（Tissot Sprint，2023 年起）：约为正赛一半圈数、约 20 分钟，取前九名积分，依次为 12、9、7、6、5、4、3、2、1 分。",
            "正赛积分：取前十五名，依次为 25、20、16、13、11、10、9、8、7、6、5、4、3、2、1 分。单站最高分为冲刺 12 + 正赛 25 = 37 分。",
            "冲刺赛胜利不计入「分站冠军」次数；年终积分相同时，也不以冲刺胜场数作为并列打破依据。",
            "轮胎：顶级组由米其林统一供胎，Moto2 / Moto3 由倍耐力统一供胎；每站提供软、硬两种配方，每位车手可用轮胎的数量与规格相同，冲刺赛不另设专用胎。",
            "天气突变时可采用「flag-to-flag」规则：车手驶入维修区、换上另一辆装有不同轮胎的赛车继续比赛，无需中断赛事；周日正赛前通常还设一节简短的热身（warm-up）。",
            "燃油与引擎：正赛单车油量上限约 22 升、冲刺赛约 12 升；每位车手每赛季可用引擎数量受限，并设有面向落后厂商放宽研发与用量的「特许（concessions）」机制。",
            "处罚：由 FIM MotoGP 干事裁决，手段包括警告、罚款、调整名次、长弯道（long lap）处罚、穿行（ride through）、加时与发车位罚退，严重者可取消成绩乃至禁赛。",
          ],
          extra:
            "MotoGP 与四轮赛车最大的不同，在于车手身体几乎完全暴露、靠移动重心把身体「挂」出车身，过弯时膝盖甚至手肘擦地——观赏性极强，风险也更高。Moto2、Moto3 作为晋级阶梯，让年轻车手沿清晰路径一步步升上顶级组。冲刺赛虽计入年度积分、话题度很高，但官方明确它不等于一场正式大奖赛胜利：分归分，「赢一场 GP」仍是另一回事。",
          sources: [
            { label: "MotoGP 官方（motogp.com）", url: "https://www.motogp.com" },
            {
              label: "MotoGP 规则总览（官方）",
              url: "https://www.motogp.com/en/blog-articles/what-are-the-motogp-rules-a-complete-overview/521386",
            },
          ],
        },
        {
          name: "WRC",
          full: "世界拉力锦标赛",
          concept:
            "世界拉力锦标赛（WRC）是由国际汽车联合会（FIA）拥有并监管的世界顶级拉力赛，创办于 1973 年，是历史最悠久的 FIA 世界锦标赛之一。比赛由「车手 + 领航员」两人一组，驾驶基于量产车开发的赛车，在封闭的公路、林道与砂石路上与时间赛跑。与场地赛不同，赛车按固定时间间隔逐辆发车，全部计时路段累计用时最短者获胜。每个赛季约十三站、每站为期三到四天，路面跨越砂石、柏油与雪地/冰面（如蒙特卡洛的冰雪混合）。锦标分别颁给车手、领航员与制造商；同场还设有 WRC2、WRC3 等性能与成本更低的支援组别，以及面向年轻车手的 Junior WRC。顶级组赛车自 2022 赛季起改用「Rally1」规格（曾在 2022–2024 年配备混合动力系统，因维修成本过高于 2025 年取消）；近年长期参赛的厂商为丰田、现代与福特（M-Sport）。日历上既有蒙特卡洛的冰雪、肯尼亚 Safari 的砂石泥泞，也有以高速飞跃著称的芬兰站，对人车都是极端考验。",
          rules: [
            "特殊赛段（Special Stage）：比赛被切分为多个计时的封闭赛段，计时精确到十分之一秒；赛段之间的转场路段不计时，但设有到达时限，迟到要罚时。一条赛段每站最多使用两次。",
            "全程里程：一站 WRC 的所有计时赛段总长须达到至少 300 公里。Rally1 顶级车以三分钟间隔发车，Rally2/Rally3 以一分钟间隔发车。",
            "发车顺序：前两天按车手积分排序、领先者先跑（先跑者要为后车「扫开」赛道上的浮砂，反成劣势）；最后一天则按当前排名倒序出发。",
            "领航员：坐在副驾，按赛前「勘路（recce）」时低速记下的「pace notes」逐弯念出路况与危险，并掌管记录赛段与时间控制的「时间卡」。",
            "积分（近赛季）：最终成绩前十名按 25-17-15-12-10-8-6-4-2-1 计分；最后一天另设「Super Sunday」按周日赛段成绩取前五（5-4-3-2-1），收官的「Power Stage」再按最快五名给 5-4-3-2-1 的额外分，其计时精确到千分之一秒。",
            "维修与封闭：所有维修须在限定时间内于「维修区（Service Park）」完成，超时罚时；每天结束后赛车锁进封闭车库（parc fermé），车队不得接触。",
          ],
          extra:
            "拉力赛最硬核之处在于「自救」：离开维修区后，途中只有车手与领航员两人能动手修车，且仅限使用车上自带的工具与零件——爆胎、撞坏悬挂，常常要在荒野里靠两人自行抢修。即便某天因故退赛，按现行规则车组通常也可在次日带罚时重新出发，让一次失误不至于葬送整场比赛。",
          sources: [
            { label: "WRC 官方（wrc.com）", url: "https://www.wrc.com" },
            {
              label: "FIA 世界拉力锦标赛规则",
              url: "https://www.fia.com/regulation/category/119",
            },
          ],
        },
        {
          name: "WEC",
          full: "世界耐力锦标赛 · 勒芒",
          concept:
            "世界耐力锦标赛（FIA WEC）由国际汽车联合会（FIA）与法国西部汽车俱乐部（ACO）共同创办与主办，是世界顶级的长距离耐力赛。多个级别的封闭式原型车与量产衍生的 GT 车同场竞速数小时，比拼的是速度、可靠性与油、胎、驾驶轮换的综合策略——一辆车由 2 至 3 名车手轮流驾驶。现行分为两大级别：顶级的 Hypercar，以及量产衍生的 LMGT3（2024 年起取代原 LMGTE，基于 FIA GT3 平台）。系列赛的皇冠赛事是创办逾百年的「勒芒 24 小时」，与摩纳哥大奖赛、印地 500 并称世界三大赛车赛事，也是众多厂商投入耐力赛的终极目标。",
          rules: [
            "Hypercar 两套技术规则并存：LMH（勒芒 Hypercar，厂商在发动机、是否混动、驱动形式上自由度较大）与 LMDh（基于四家指定供应商的统一底盘等通用件）。两者通过性能平衡（BoP）同场竞争。",
            "性能上限：规则把 Hypercar 的最大功率与最低重量限定在统一范围（约 500 千瓦、1030 公斤一级），缩小不同架构间的差距。",
            "性能平衡（BoP）：以重量、功率等技术参数的微调，让设计迥异的赛车保持相近竞争力，从而降低军备竞赛、吸引众多厂商参赛；Hypercar 在传动轴上加装「扭矩传感器」，实时监控并限制其输出不超过 BoP 分配的功率。",
            "车手分级：FIA 按成绩把车手评为铂金、金、银、铜四级；Hypercar 不接受铜级车手，LMGT3 则要求车组中至少有一名铜级车手，以平衡职业与非职业选手。",
            "赛程长度：单场比赛至少 6 小时，最长即勒芒的 24 小时；设有对单人最短/最长连续与累计驾驶时间的强制规定，保证轮换与车手状态。",
            "勒芒的特殊性：勒芒 24 小时的 BoP 会参考上一年的比赛数据单独制定，因而不一定与同年其他分站（如斯帕 6 小时）的 BoP 直接挂钩。",
            "成功压重（success handicap）：LMGT3 另设基于近期成绩的「成功压重」——按前两场名次与积分位次折算成单圈时间损失，再换算为加重或减功率，但勒芒站不适用；2026 规则也为 Hypercar 预留了启用这一机制的空间。",
            "轮胎与混动：Hypercar 由米其林、LMGT3 由固特异供胎；按 2026 技术规则，新认证的 LMH 赛车必须配备能量回收系统（ERS），即不再允许全新的非混动 LMH。",
          ],
          extra:
            "耐力赛的魅力在于「快」之外还要「久」：一辆车要在昼夜更替、气温与赛道状态不断变化中连续奔跑，任何一个零件、一次进站失误都可能让数小时的领先付诸东流。正因 BoP 把军备竞赛压了下来，近年涌入的厂商数量空前——仅 2024 赛季就有多达十四家厂商同场。BoP 与车手分级让厂商原型车与私人 GT 车、职业与业余车手能在同一条赛道上同场较量，这正是 WEC 区别于单一级别赛事的独特之处。",
          sources: [
            { label: "FIA WEC 官方（fiawec.com）", url: "https://www.fiawec.com" },
            {
              label: "勒芒 24 小时官方（24h-lemans.com）",
              url: "https://www.24h-lemans.com",
            },
          ],
        },
        {
          name: "IndyCar",
          full: "印地赛车 · Indy 500",
          concept:
            "NTT IndyCar 系列赛是北美最高级别的单座、开轮式赛车赛事。它采用「统一规格（spec）」理念：全场使用同一款 Dallara IR-18 底盘，发动机为本田或雪佛兰供应的 2.2 升双涡轮 V6（峰值逾 700 马力），以此压低成本、拉近差距、突出车手实力。与 F1 不同，IndyCar 在三类截然不同的赛道上比赛——超级椭圆/短椭圆、永久性公路赛道、临时街道赛道——对车手的全能性要求极高，因此可调的空气动力学套件会按椭圆、超级速道、公路分别配置。系列赛的皇冠赛事「印地安纳波利斯 500」是赛车运动「三大赛」之一，也是全球规模最大的单日体育赛事之一。",
          rules: [
            "赛道类型：一个赛季横跨超级椭圆、短椭圆、永久公路赛道与临时街道赛道四种场地，对车手与车队的适应力是极大考验。",
            "动力调校：发动机功率由赛会按赛道类型经「增压（boost）」调整——超级速道增压较低（约 575 马力），公路/街道更高（约 675 马力）。",
            "混合动力：2024 年赛季中引入了基于超级电容、约 60 马力的混动单元，可回收制动能量、辅助再加速，必要时还能重启发动机。",
            "「推杆超车（push-to-pass）」：仅在公路/街道赛道可用，按住方向盘按钮临时增加功率，每站有「单次时长」与「全场总时长」上限，何时用是策略关键；椭圆赛道不设此功能。",
            "印地 500：在 2.5 英里椭圆上跑 200 圈、共 500 英里，传统上 33 辆车以每排三辆、共十一排发车。",
            "印地 500 排位：单独的排位周末，每辆车独自跑四圈（共 10 英里）计平均速度，经逐日淘汰最终决出杆位（Firestone Fast Six 争夺杆位）。",
          ],
          extra:
            "IndyCar 最独特之处在于「全地形」：同一个赛季里，车手既要在椭圆赛道上以接近每小时 380 公里的均速贴着墙壁高速奔跑，又要在狭窄街道赛道上不断重刹入弯——这种横跨多种场地的考验，在顶级方程式赛车里独此一家，对车手的适应力与勇气都是极限挑战。印地 500 与摩纳哥大奖赛、勒芒 24 小时并称赛车运动的「三大赛事」，能同时拿下三者的车手屈指可数。现代 IndyCar 还配有名为 Aeroscreen 的环形挡风/防护装置以保护车手头部；而印地 500 的胜者在终点饮下一瓶牛奶，则是延续近百年的经典传统。",
          sources: [
            { label: "IndyCar 官方（indycar.com）", url: "https://www.indycar.com" },
            {
              label: "印地安纳波利斯赛道官方",
              url: "https://www.indianapolismotorspeedway.com",
            },
          ],
        },
        {
          name: "NASCAR",
          full: "全美改装车赛",
          concept:
            "NASCAR 库普系列赛（Cup Series）是美国改装车（stock car）赛的最高级别——外形仿照雪佛兰、福特、丰田量产车型、但底盘为专门打造的封闭式赛车。比赛以椭圆赛道为主（从不到一英里的短赛道到超过两英里的超级速道），近年也加入公路赛与街道赛，以高速「集团贴身缠斗」闻名，是美国收视最高的赛车运动之一。现役赛车为 2022 年引入的「Next Gen」平台：底盘更标准化、外观更贴近展厅车型，并统一了大量通用部件以控制成本、拉近竞争。整个赛季约三十余站，分为常规赛与赛季末的「季后赛（Playoffs / Chase）」两段。揭幕战「戴通纳 500」是其皇冠赛事，被称作「伟大的美国赛车（The Great American Race）」，往往是全年最受瞩目的一场；NASCAR 旗下还设有 Xfinity 与卡车（Truck）两个低一级的全国系列赛，构成晋级阶梯。",
          rules: [
            "阶段赛（stage）：多数比赛分为三个阶段（戴通纳 500、可口可乐 600 为四个），前面的阶段结束时按当时名次给「阶段积分」（取前十：10-9-8-…-1），叠加到该站总成绩上。",
            "单站积分：以 2026 赛季为例，分站冠军得 55 分，其后名次依次递减；全场最快单圈另加 1 分（但中途进过修车间者不能靠最后低油量冲一圈来抢这一分）。",
            "进站：比赛中可多次进站换四条轮胎、加油并微调赛车，一次干净的进站约十余秒；何时进站、用谁进站是贯穿全程的重要策略。",
            "黄旗与加时：赛道出现事故或散落物时出动安全车（黄旗）整理车群、降低车速；若临近收尾才出黄旗，则以「绿—白—格旗」加时，力求比赛在竞速状态中冲线结束。",
            "常规赛与季后赛：前 26 站为常规赛，最后 10 站为季后赛；2026 起改回按常规赛积分确定季后赛席位与种子，取消了过去「赢一场即晋级」的规则。",
            "季后赛淘汰制：库普系列赛季后赛 16 人，经「16 强→12 强→8 强」逐轮淘汰，最后一站由剩下的冠军候选人现场决出年度总冠军。",
            "赛道：以椭圆赛道为主，兼有公路赛与街道赛；超级速道上的高速贴身缠斗是其最具标志性的画面。",
          ],
          extra:
            "在戴通纳、塔拉迪加这样的超级速道上，几十辆车会以极近的车距高速「抱团」行驶，利用彼此尾流互相借力（drafting）——场面极其壮观，也最容易引发牵连大半个车群的连环事故（俗称「the Big One」）。正因如此，NASCAR 的看点不只在最快的那辆车，更在整群车贴着彼此、寸土必争的集团博弈。",
          sources: [
            { label: "NASCAR 官方（nascar.com）", url: "https://www.nascar.com" },
          ],
        },
        {
          name: "Formula E",
          full: "电动方程式",
          concept:
            "电动方程式（ABB FIA Formula E World Championship）是国际汽联（FIA）旗下全电动单座赛车的最高级别赛事，定位为电动车技术与城市可持续出行的展示舞台。首场比赛于 2014 年 9 月在北京举行，并自 2020 年起获得 FIA「世界锦标赛」地位。比赛称为 E-Prix，多在大城市市中心临时围出的街道赛道举行，而非专用赛车场，以贴近城市观众。现役赛车为 Gen3 Evo：可四轮驱动，加速极猛——官方称其 0–100 km/h 约 1.82 秒，是目前加速最快的 FIA 单座赛车。比赛禁止中途充电，赛车依靠制动能量回收补充电量，因此「省电」与「冲刺」的取舍贯穿全场。",
          rules: [
            "排位赛：先分两组、各以 300 千瓦在限定时间内刷圈，每组最快四名晋级；随后八人以满功率 350 千瓦进行一对一「对决（Duels）」，经四分之一决赛、半决赛、决赛争夺杆位。",
            "攻击模式（Attack Mode）：正赛常规功率为 300 千瓦、后驱；车手须驶离最佳走线、经过场外「激活区」，换取一段 350 千瓦、四驱的额外功率——绕远换取更强动力，是超车与防守的博弈。",
            "进站增能（Pit Boost，第 11 赛季起）：在指定比赛中强制进站一次，于维修区用约 30 秒、600 千瓦快速补入约 10% 电量；每队仅一套设备，无法叠站。",
            "能量管理：全程不能一直全功率，350 千瓦比 300 千瓦更费电；若「攻击」阶段用力过猛，可能在最后几圈前耗尽可用电量——精打细算地把电量分配到终点是核心。",
            "积分：前十名为 25、18、15、12、10、8、6、4、2、1；杆位另加 3 分、最快圈另加 1 分。比赛为固定圈数、站立起步，遇安全车/全场黄旗可加圈。",
          ],
          extra:
            "Formula E 把「赛车」与「能量管理」揉在一起：它不是单纯比谁踩得猛，而是比谁能在有限电量里把速度、攻击模式与回收用到极致。Attack Mode、Pit Boost 这些机制让比赛充满临场取舍与变数，加上市中心街道赛的近距离缠斗，让它在观赏性与「电动化叙事」上都自成一派。捷豹、保时捷、日产、玛莎拉蒂等厂商均有参与，把它当作量产电动车技术的试验场；新一代赛车 Gen4 已于 2025 年发布，功率与四驱能力将进一步提升，标志着这项年轻赛事仍在快速进化。",
          sources: [
            {
              label: "FIA Formula E 官方（fiaformulae.com）",
              url: "https://www.fiaformulae.com",
            },
            {
              label: "Formula E 规则与竞赛规程（官方）",
              url: "https://www.fiaformulae.com/en/championship/rules-and-regulations",
            },
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
            "Formula 1 (F1) is the highest class of single-seater, open-wheel racing, with its sporting and technical rules set and governed by the FIA and the championship promoted commercially by the Formula One group. It is widely regarded as the summit of circuit racing in terms of speed, engineering and commercial scale. The FIA Formula One World Championship has run since 1950 as the governing body's premier single-seater world series. The word \"formula\" refers not to mathematics but to the shared set of technical rules every team must obey — defining car dimensions, aerodynamics, the type of power unit, minimum weight and more. Within those rules each team designs, builds and runs its own car, so the contest is as much between hundreds of engineers as between drivers. Two world titles run in parallel each season: the World Drivers' Championship, for the driver with the most points, and the World Constructors' Championship, which sums the points of a team's two drivers. Current cars use a 1.6-litre V6 turbo-hybrid power unit with energy recovery (ERS), built around a carbon-fibre monocoque that balances extreme performance with driver safety.",
          rules: [
            "Weekend structure: a standard (non-sprint) weekend usually has two practice sessions on Friday, a third practice plus qualifying on Saturday, and the race on Sunday.",
            "Qualifying runs as three knockout segments — Q1, Q2, Q3 — each eliminating the slowest drivers on their best lap; the ten fastest contest pole position in Q3, with everyone else gridded by their best time.",
            "Race points go to the top ten only: 25, 18, 15, 12, 10, 8, 6, 4, 2, 1. From 2025 the bonus point for fastest lap was removed.",
            "Start: the race begins with a standing start after the formation lap; if conditions are unsafe it can instead be started rolling behind the safety car.",
            "Tyre rule: in a dry race each driver must use at least two different dry-tyre compounds, so a pit stop is normally required; refuelling during the race has been banned since 2010, so each car must complete the distance on the fuel it starts with.",
            "Component allocation: power units, gearboxes and other key parts have per-season usage limits, and exceeding them brings grid penalties.",
            "Safety control: the race uses flags, the Safety Car and the Virtual Safety Car (VSC) to slow the field through hazards.",
            "Sprint: some rounds are sprint weekends, adding a short race of about one-third distance (no mandatory stop) with its own sprint qualifying; the sprint scores its top eight as 8, 7, 6, 5, 4, 3, 2, 1.",
            "Distance rule: if a race is stopped early, at least 75% of the planned distance must be completed for full points; otherwise a reduced-points scale defined in the rules applies.",
            "Parc fermé: once qualifying begins the car is sealed and teams may no longer make significant setup changes, ensuring qualifying and the race run essentially the same configuration.",
          ],
          extra:
            "F1's appeal is the stacking of driver, car and team: the fastest cars, drivers sustaining near-athlete physical loads for a full race distance, and the engineering teams behind them in constant competition. Two modern rules shape the competitive order: the cost cap, which limits how much a team may spend each year on car development and operations to narrow the gap between large and small teams; and DRS (the adjustable rear wing), which lets a following car open its wing in designated zones, when close enough, to cut drag and aid overtaking. Tyres are supplied by a single control supplier, so every team runs the same rubber. The deliberately steep 25-to-18 gap between first and second is designed to reward winning over merely banking steady podiums.",
          sources: [
            { label: "Formula 1 official (formula1.com)", url: "https://www.formula1.com" },
            {
              label: "FIA regulations (fia.com)",
              url: "https://www.fia.com/regulation/category/110",
            },
          ],
        },
        {
          name: "MotoGP",
          full: "Grand Prix Motorcycle Racing",
          concept:
            "MotoGP is the highest class of two-wheeled Grand Prix road racing, with rules set by the FIM and the championship promoted commercially by Dorna — effectively the motorcycle equivalent of F1. Premier-class riders compete on purpose-built prototypes (not production bikes) from Ducati, Aprilia, KTM, Yamaha and Honda. A Grand Prix weekend usually runs three classes together: MotoGP as the top tier, plus the feeder ladder of Moto2 and Moto3, and in some seasons the all-electric MotoE cup. The rider with the most points over the season is crowned World Champion, with a separate constructors' title for the manufacturers. Grand Prix motorcycle road racing dates back to 1949, making it one of the oldest motorsport world championships; the current four-stroke 'MotoGP' class replaced the old 500cc two-strokes in 2002. Today's premier bikes are roughly 1000cc four-cylinder prototypes that top 360 km/h at some circuits. As F1 is to four-wheel circuit racing, MotoGP is the summit of two-wheeled road racing for speed, technology and prestige.",
          rules: [
            "Weekend structure (since 2023): Friday has free practice plus a timed 'Practice' (its top ten go straight to Q2); Saturday morning has FP2 and qualifying (Q1, Q2); Saturday afternoon is the Sprint; Sunday is the Grand Prix.",
            "Qualifying: Q1 sets the grid from 13th back, Q2 sets pole and the front; the same qualifying result fixes the grid for both the Sprint and Sunday's race (the Sprint result does not affect Sunday's grid).",
            "Sprint (Tissot Sprint, since 2023): about half the laps of the race, around 20 minutes, scoring its top nine as 12, 9, 7, 6, 5, 4, 3, 2, 1.",
            "Race points: the top fifteen score 25, 20, 16, 13, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1. The most a rider can score at one round is Sprint 12 + race 25 = 37.",
            "A Sprint win does not count as a Grand Prix victory, nor is the number of Sprint wins used as a championship tiebreaker.",
            "Tyres: the premier class runs on a spec Michelin supply, Moto2/Moto3 on spec Pirelli; each round offers a softer and a harder compound, with identical allocations for every rider and no special Sprint tyres.",
            "In changeable weather a 'flag-to-flag' rule lets a rider pit and switch to a second bike fitted with different tyres without stopping the race; a short warm-up usually precedes Sunday's Grand Prix.",
            "Fuel and engines: race fuel is capped at about 22 litres per bike (about 12 for the Sprint); each rider's season engine allocation is limited, with a 'concessions' system easing development and allocation for trailing manufacturers.",
            "Penalties: ruled on by the FIM MotoGP Stewards — warnings, fines, position changes, long-lap penalties, ride-throughs, time penalties and grid penalties, up to disqualification or a ban for serious offences.",
          ],
          extra:
            "What sets MotoGP apart from four-wheel racing is that the rider's body is almost fully exposed and hangs off the bike to shift weight through corners — knees and even elbows skim the tarmac. It is spectacular, and riskier. Moto2 and Moto3 form a clear ladder that carries young riders up to the premier class. The Sprint scores championship points and draws big audiences, but the series is explicit that it is not a Grand Prix win: points are points, and winning a GP is something else.",
          sources: [
            { label: "MotoGP official (motogp.com)", url: "https://www.motogp.com" },
            {
              label: "MotoGP rules overview (official)",
              url: "https://www.motogp.com/en/blog-articles/what-are-the-motogp-rules-a-complete-overview/521386",
            },
          ],
        },
        {
          name: "WRC",
          full: "World Rally Championship",
          concept:
            "The World Rally Championship (WRC) is the FIA's top-level rally series, founded in 1973 and one of the oldest FIA world championships. A driver-and-co-driver crew races a production-based car against the clock on closed public, forest and gravel roads. Unlike circuit racing, cars start one at a time at fixed intervals, and the shortest cumulative time across all timed sections wins. A season has around thirteen events of three to four days each, run on surfaces from gravel and tarmac to snow and ice (Monte-Carlo famously mixes both). Titles go to drivers, co-drivers and manufacturers, with lower-cost support classes WRC2 and WRC3 on the same stages, plus a Junior WRC for younger crews. The top tier has used 'Rally1' cars since 2022 (which carried a hybrid system in 2022–2024, dropped for 2025 as it proved costly to repair); the manufacturers competing in recent years are Toyota, Hyundai and Ford (M-Sport). The calendar ranges from the ice of Monte-Carlo to the rough gravel of Safari Rally Kenya and the high-speed jumps of Rally Finland — an extreme test of both car and crew.",
          rules: [
            "Special stages: an event is split into many timed, closed-road stages, timed to a tenth of a second; the public-road links between them aren't timed but have arrival deadlines, with penalties for lateness. A single stage may be used at most twice per rally.",
            "Distance: the total of all timed stages must be at least 300 km. Top Rally1 cars start at three-minute intervals; Rally2/Rally3 at one-minute intervals.",
            "Running order: for the first two days crews start in championship order, leader first — so the leader sweeps loose gravel for those behind, a real disadvantage; the final day runs in reverse classification order.",
            "Co-driver: sitting alongside, they read the 'pace notes' written during a slow pre-event 'recce', calling every corner and hazard, and manage the time card that logs stage and control times.",
            "Points (recent seasons): the final top ten score 25-17-15-12-10-8-6-4-2-1; a 'Super Sunday' awards 5-4-3-2-1 for the last day's classification, and the closing 'Power Stage' (timed to a thousandth of a second) gives a further 5-4-3-2-1 to its fastest five.",
            "Service and parc fermé: all servicing must happen within strict time limits in the Service Park (overruns are penalised); each night the cars are locked in parc fermé with no team access.",
          ],
          extra:
            "Rallying's hardcore edge is self-reliance: away from the Service Park only the driver and co-driver may work on the car, using only the tools and parts they carry — a blown tyre or bent suspension often means a roadside repair in the wilderness. Even a crew forced to retire on one day can usually restart the next under a time penalty, so a single mistake need not end the whole event.",
          sources: [
            { label: "WRC official (wrc.com)", url: "https://www.wrc.com" },
            {
              label: "FIA World Rally Championship regulations",
              url: "https://www.fia.com/regulation/category/119",
            },
          ],
        },
        {
          name: "WEC",
          full: "World Endurance Championship · Le Mans",
          concept:
            "The FIA World Endurance Championship (WEC) is created and run jointly by the FIA and France's Automobile Club de l'Ouest (ACO), and is the world's premier long-distance sports-car series. Multiple classes of closed-cockpit prototypes and production-derived GT cars race together for hours, rewarding a blend of speed, reliability and fuel/tyre/driver-rotation strategy — each car is shared by two or three drivers. There are two current classes: the top Hypercar, and the production-derived LMGT3 (introduced in 2024 to replace LMGTE, based on the FIA GT3 platform). The series' crown jewel is the 24 Hours of Le Mans, run for over a century and counted — alongside the Monaco Grand Prix and the Indy 500 — among motorsport's greatest races, and the ultimate goal for many manufacturers in endurance racing.",
          rules: [
            "Hypercar runs two rulebooks side by side: LMH (Le Mans Hypercar, giving makers more freedom over engine, hybrid or not, and drivetrain) and LMDh (built on a common chassis from four approved suppliers). The two compete together via Balance of Performance.",
            "Performance ceiling: the rules cap Hypercar maximum power and minimum weight within a common band (on the order of 500 kW and 1030 kg) to narrow gaps between architectures.",
            "Balance of Performance (BoP): small adjustments to weight, power and more keep very different cars closely matched, cutting an arms race and drawing many manufacturers; Hypercars carry driveshaft torque sensors that monitor and limit output to the BoP-allocated power in real time.",
            "Driver grading: the FIA rates drivers Platinum, Gold, Silver or Bronze; Hypercar admits no Bronze drivers, while LMGT3 requires at least one Bronze in each crew, balancing professionals and amateurs.",
            "Race length: events run from a minimum of 6 hours up to the 24 Hours of Le Mans, with mandatory minimum/maximum drive-time rules per driver to enforce rotation.",
            "Le Mans is special: its Hypercar BoP factors in data from the previous year's race, so it is not necessarily tied directly to the BoP used at other rounds the same season (such as the 6 Hours of Spa).",
            "Success handicap: LMGT3 carries an additional results-based handicap — recent finishes and championship position convert into a lap-time penalty, then into added weight or reduced power — applied at every round except Le Mans; the 2026 rules also leave room to apply it to Hypercar.",
            "Tyres and hybrid: Hypercar runs on Michelin and LMGT3 on Goodyear; under the 2026 technical rules a newly homologated LMH car must carry energy recovery (ERS), so no new non-hybrid LMH cars are allowed.",
          ],
          extra:
            "Endurance racing demands not just speed but stamina: a car must run through day and night as temperature and track conditions shift, where a single failed component or a botched pit stop can erase hours of lead. Because BoP holds back an arms race, manufacturer interest has surged in recent years — the 2024 season alone fielded as many as fourteen manufacturers. BoP and driver grading let manufacturer prototypes and privateer GT cars, professionals and amateurs, all compete on the same track — exactly what sets WEC apart from single-class series.",
          sources: [
            { label: "FIA WEC official (fiawec.com)", url: "https://www.fiawec.com" },
            { label: "24h Le Mans official (24h-lemans.com)", url: "https://www.24h-lemans.com" },
          ],
        },
        {
          name: "IndyCar",
          full: "IndyCar · Indy 500",
          concept:
            "The NTT IndyCar Series is North America's premier open-wheel, single-seater championship. It is built on a 'spec' philosophy: every car uses the same Dallara IR-18 chassis, with a 2.2-litre twin-turbo V6 from either Honda or Chevrolet (over 700 hp), to control costs, close the field up and put the focus on driver skill. Unlike F1, IndyCar races across three very different track types — super/short ovals, permanent road courses and temporary street circuits — so its adjustable aero package is configured differently for ovals, superspeedways and road courses, demanding real all-round versatility. Its crown jewel, the Indianapolis 500, is one of motorsport's three greatest races and among the largest single-day sporting events on Earth.",
          rules: [
            "Track types: a season spans superspeedways, short ovals, permanent road courses and temporary street circuits — a huge test of adaptability for drivers and teams.",
            "Power tuning: engine output is set by the series per track type via turbo 'boost' — lower on superspeedways (~575 hp), higher on road/street courses (~675 hp).",
            "Hybrid: a supercapacitor-based hybrid of about 60 hp was introduced mid-2024, recovering braking energy to aid acceleration and even restart the engine.",
            "Push-to-pass: available only on road/street courses, a steering-wheel button gives a temporary power boost with a per-push and a per-race time limit, making its timing a strategic weapon; ovals have no push-to-pass.",
            "The Indy 500: 200 laps of the 2.5-mile oval for 500 miles, traditionally a 33-car field lined up three-wide across eleven rows.",
            "Indy 500 qualifying: a separate weekend where each car runs four laps (10 miles) alone for an average speed, with day-by-day knockouts deciding pole (the Firestone Fast Six).",
          ],
          extra:
            "IndyCar's signature is its all-terrain demand: in a single season a driver runs inches from the wall at oval speeds near 380 km/h, then brakes hard into the corners of a tight street circuit. No other top-flight single-seater spans such different track types, testing a driver's adaptability and nerve to the limit. The Indy 500 stands alongside the Monaco Grand Prix and the 24 Hours of Le Mans as one of motorsport's three greatest races, a treble only a handful of drivers have ever completed. Modern IndyCars carry the Aeroscreen, a wraparound head-protection device, and the winner of the Indy 500 drinks a bottle of milk in victory lane — a tradition nearly a century old.",
          sources: [
            { label: "IndyCar official (indycar.com)", url: "https://www.indycar.com" },
            {
              label: "Indianapolis Motor Speedway (official)",
              url: "https://www.indianapolismotorspeedway.com",
            },
          ],
        },
        {
          name: "NASCAR",
          full: "NASCAR Cup Series",
          concept:
            "The NASCAR Cup Series is the top division of American stock-car racing — closed cars styled after production Chevrolets, Fords and Toyotas but built on a purpose-made chassis. Racing is mostly on ovals (from sub-one-mile short tracks to superspeedways over two miles long), with road and street courses added in recent years, and is famous for high-speed pack racing — the most-watched motorsport in the U.S. The current car is the 'Next Gen' platform introduced in 2022, more standardized and showroom-like, with many common parts to control costs and tighten competition. A season of around three dozen races splits into a regular season and a season-ending playoff (the 'Chase'). The season-opening Daytona 500 is the crown jewel — 'The Great American Race' — usually the year's biggest event; NASCAR also runs the Xfinity and Truck national series one rung below as a ladder.",
          rules: [
            "Stages: most races are split into three stages (the Daytona 500 and Coca-Cola 600 have four); the earlier stages award stage points to the top ten (10-9-8-…-1) on top of the finishing result.",
            "Race points: in the 2026 season a race win is worth 55 points, scaling down by position, with one extra point for the fastest lap (a car that has been to the garage cannot grab it on a late low-fuel run).",
            "Pit stops: cars pit repeatedly during a race to change four tyres, refuel and adjust the car; a clean stop takes around twelve seconds, and when and with whom to pit is a running strategic battle.",
            "Cautions and overtime: a safety car (yellow flag) bunches the field and slows it after an incident or debris; if a caution falls near the end, a 'green-white-checkered' overtime aims to finish the race under racing conditions.",
            "Regular season and playoffs: the first 26 races are the regular season and the final 10 the playoffs; from 2026 the playoff field and seeding are set by regular-season points, ending the old 'win-and-you're-in' rule.",
            "Elimination playoffs: the Cup playoff field is 16, cut through rounds of 16 → 12 → 8, with the title decided on the final race among the remaining contenders.",
            "Tracks: predominantly ovals, plus road and street courses; the high-speed pack on superspeedways is its signature image.",
          ],
          extra:
            "On superspeedways like Daytona and Talladega, dozens of cars run nose-to-tail in a high-speed pack, drafting off one another — spectacular, and the most likely trigger for a multi-car 'Big One' that can collect half the field. That is why NASCAR's appeal isn't just the fastest car, but the pack-racing chess of cars running inches apart, fighting for every position.",
          sources: [
            { label: "NASCAR official (nascar.com)", url: "https://www.nascar.com" },
          ],
        },
        {
          name: "Formula E",
          full: "Formula E",
          concept:
            "The ABB FIA Formula E World Championship is the FIA's top class of all-electric single-seater racing, conceived as a showcase for EV technology and sustainable city mobility. The first race was held in Beijing in September 2014, and the series gained FIA World Championship status in 2020. Its races — called E-Prix — are held mostly on temporary street circuits in the heart of major cities rather than dedicated tracks, to reach urban audiences. The current car is the Gen3 Evo: all-wheel-drive capable and ferociously quick — officially 0–100 km/h in about 1.82 seconds, the fastest-accelerating FIA single-seater. Charging is banned mid-event, so cars top up via regenerative braking, making the trade-off between saving energy and attacking central to every race.",
          rules: [
            "Qualifying: drivers first split into two groups, lapping at 300 kW against the clock; the fastest four from each group advance to one-on-one 'Duels' at the full 350 kW through quarter-finals, semis and a final for pole.",
            "Attack Mode: the race runs at 300 kW and rear-wheel drive; to unlock a burst of 350 kW and all-wheel drive, a driver must leave the racing line and pass through an off-line activation zone — trading a slower line for more power.",
            "Pit Boost (since Season 11): in designated races a mandatory pit stop adds about 10% energy via a ~30-second, 600 kW top-up; each team has only one rig, so cars cannot double-stack.",
            "Energy management: you can't run flat-out, as 350 kW drains the battery far faster than 300 kW; push too hard in an attack phase and you may run short before the final laps — rationing energy to the finish is the core skill.",
            "Points: the top ten score 25, 18, 15, 12, 10, 8, 6, 4, 2, 1, with three bonus points for pole and one for fastest lap. Races are a fixed number of laps from a standing start, with laps added for safety-car/full-course-yellow periods.",
          ],
          extra:
            "Formula E fuses racing with energy management: it isn't simply about who pushes hardest, but who best deploys limited energy across speed, Attack Mode and regeneration. Mechanics like Attack Mode and Pit Boost fill races with split-second trade-offs and swings, and combined with close-quarters city-street racing, give the series both its spectacle and its distinctive electric-era story. Manufacturers such as Jaguar, Porsche, Nissan and Maserati take part, treating it as a proving ground for road-EV technology; the next-generation Gen4 car, unveiled in 2025, raises power and all-wheel-drive capability further — a sign this young series is still evolving fast.",
          sources: [
            {
              label: "FIA Formula E official (fiaformulae.com)",
              url: "https://www.fiaformulae.com",
            },
            {
              label: "Formula E rules & regulations (official)",
              url: "https://www.fiaformulae.com/en/championship/rules-and-regulations",
            },
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
