// ============================================================
// 全站双语文案（中 / 英）。要改文字，只改这里就够了。
// Content 类型确保中英两份文案结构完全一致，少写一项会报错。
// 多页面结构：首页(理念) + 赛车知识 / 车友社区 / 关于。
// 社区 = Discord 频道式 + Instagram 动态式 融合：约赛 / 装备转让 / 驾驶技巧 / 日常 都是其中的频道。
// sections.*.label 同时用于顶部导航与首页入口卡片 —— 改板块名只改这一处。
// ============================================================

export type Lang = "zh" | "en";

type Pillar = { title: string; body: string };
type Source = { label: string; url: string };
// 一张入门卡：卡面 tag/title/body；点开后全屏阅读 read（正文逐段）+ sources（资料来源）。
type Card = {
  tag: string;
  title: string;
  body: string;
  read: string[];
  sources: Source[];
};
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
    sourceLabel: string; // 全屏阅读「资料来源」小标题
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
    body: string[];
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
        intro: "聊聊我自己，和这个网站是怎么来的。",
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
      exploreTitle: "从这里进入",
      exploreSubtitle: "知识、社区，还有我自己的故事——挑一个开始吧。",
      enter: "进入",
    },
    guide: {
      eyebrow: "F1 入门",
      title: "你一定想知道",
      subtitle: "没看过也没关系，花几分钟，先迈过最开始的那道坎。",
      readMore: "展开阅读",
      close: "关闭",
      sourceLabel: "资料来源",
      cards: [
        {
          tag: "基础",
          title: "什么是 F1？",
          body: "一级方程式是单座、开轮式赛车的最高级别：由 FIA 监管，每年在全球二十余条赛道上、由车手与车队争夺两项世界冠军。",
          read: [
            "一级方程式（Formula 1，简称 F1）是由国际汽车联合会（FIA）制定与监管竞赛规则、商业上由 Formula One 集团推广的单座、开轮式赛车最高级别赛事。名称中的「方程式」并不是数学公式，而是指所有参赛车队都必须共同遵守的一整套技术规则——它规定了车身尺寸、空气动力学、动力单元形式、最低重量等边界。各车队在同一套规则下自行设计、制造并运营自己的赛车，因此 F1 比拼的既是车手，也是车队背后成百上千名工程师的水平。",
            "每个赛季同时进行两项世界锦标：颁给积分最高车手的「车手世界锦标赛」，以及把同队两位车手积分相加的「车队世界锦标赛」。正赛只有前十名得分，依次为 25、18、15、12、10、8、6、4、2、1 分；自 2025 赛季起，原本给最快圈速的 1 分附加分已被取消。",
            "现行赛车采用 1.6 升 V6 涡轮增压内燃机，搭配能量回收系统（ERS）构成混合动力单元；车身以碳纤维单体壳为核心，在追求极限性能的同时保护车手。过弯时产生的巨大下压力，让赛车能以远超日常想象的速度通过弯角，而车手要在长达一两个小时的比赛里持续承受接近运动员极限的体能负荷。",
            "一个标准比赛周末通常为周五两节自由练习、周六一节自由练习加排位赛、周日正赛；部分分站还设有周六的短程「冲刺赛（Sprint）」。现代规则中还有两项影响深远的设计：限制车队年度开支的「预算帽（cost cap）」，用以缩小大小车队的差距；以及辅助超车的 DRS（可调式尾翼）。",
            "F1 世界锦标赛自 1950 年起举办，是历史最悠久、商业规模最大的赛车系列之一。对刚入门的人，不必被这些参数吓退——先记住一点即可：F1 是「最快的车 + 最强的车手 + 最强的工程团队」在同一套规则下的较量；看懂了这一层，后面的排位赛、进站、轮胎策略，都只是这场较量展开的不同侧面。",
          ],
          sources: [
            { label: "Formula 1 官方（formula1.com）", url: "https://www.formula1.com" },
            {
              label: "FIA 竞赛规则（fia.com）",
              url: "https://www.fia.com/regulation/category/110",
            },
          ],
        },
        {
          tag: "观赛",
          title: "一场比赛怎么看？",
          body: "一个比赛周末分为练习、排位赛和正赛；看点集中在排位、起跑、轮胎与进站策略，以及毫秒之间的超车。",
          read: [
            "一个 F1 比赛周末不止周日那一场，通常分三步：先是「自由练习」，车队借此调校赛车、试不同轮胎；接着是「排位赛」，逐节淘汰、用最快单圈决定周日的发车顺序；最后才是周日的「正赛」。理解了这三步，就不会再被周五的「没在比赛」搞糊涂——那是在为周日做准备。",
            "排位赛分 Q1、Q2、Q3 三节：每节淘汰当时最慢的若干车手，最终由最快的十位在 Q3 争夺「杆位（Pole）」，即周日发车第一位，其余车手按各自最快圈速排定发车顺序。发车顺序往往决定半场比赛的走势，但起跑只是开始：灯灭瞬间与第一个弯的卡位，常在几秒内改写排位赛辛苦排好的次序。",
            "正赛真正的暗线是「轮胎」与「进站」。干地比赛中每位车手必须至少使用两种不同配方的干胎，因此通常至少进站一次。轮胎越软越快、但磨耗越快；何时进站、换哪种胎，是贯穿全程的博弈。一次干净的进站只花两三秒，慢一秒就可能把领先拱手让人——这也衍生出「提前进站（undercut）」「延后进站（overcut）」等抢位套路。",
            "最直观的看点是超车，它多发生在直道尽头的重刹车区，或借助前车尾流贴近的一瞬。规则也提供辅助：DRS 允许后车在指定区域、与前车足够接近时打开尾翼以减小风阻、提高直线速度。此外，赛会用旗语、安全车（Safety Car）与虚拟安全车（VSC）在危险路段统一压低车速。",
            "天气是另一个变量：下雨时车手会换上中性胎或全雨胎，雨量突变时「赌哪种胎」往往直接决定胜负。安全车出动整队时，原本拉开的车距会重新归零，让比赛回到几乎同一起跑线——这既可能毁掉领先者苦心经营的优势，也可能给落后者送上反超的良机，因此它常是一场比赛的重要转折。",
            "给新手的看法建议：不必盯着每一辆车。挑两三个你喜欢的车手，跟着他们的节奏看——他在追谁、被谁追、轮胎还剩多少、什么时候进站。几场下来，一场比赛就会从「一堆车在转圈」变成一盘看得见的棋。",
          ],
          sources: [
            { label: "Formula 1 官方（formula1.com）", url: "https://www.formula1.com" },
            {
              label: "FIA 竞赛规则（fia.com）",
              url: "https://www.fia.com/regulation/category/110",
            },
          ],
        },
        {
          tag: "起点",
          title: "卡丁车：最好的开始",
          body: "几乎每位顶级车手都从卡丁车起步。它相对便宜、安全、上手快，是普通人离真正赛车最近的入口。",
          read: [
            "如果说方程式赛车是金字塔顶端，卡丁车就是几乎所有人的塔基。翻开顶级车手的履历，绝大多数人的第一辆「赛车」都是卡丁车，许多人从七八岁就开始。原因很直接：卡丁车把赛车最核心的东西——走线、刹车点、出弯加速、轮对轮的攻防——浓缩进了一台便宜又安全的小车里。",
            "卡丁车贴地而坐、几乎没有悬挂，速度的「体感」被放大：实际时速并不算高，但坐在离地几厘米的座椅里，每个弯都惊心动魄。正是这种诚实的反馈让它成为最好的老师——做错一个动作，车会立刻告诉你，没有电子辅助替你掩盖。",
            "卡丁车本身也是正式竞技项目，由 FIA Karting（前身 CIK-FIA）监管，设有世界锦标赛与欧洲锦标赛。其级别分为三大类：直驱组（成人顶级 OK、青少年 OK-Junior，均为 125cc）、带变速箱的 KZ 组，以及带整流罩、双缸 250cc 的最快级别 Superkart。许多现代顶级车手——如维斯塔潘、汉密尔顿、舒马赫——都是从卡丁车一路打上来的。",
            "它也是真正的「平民入口」。相比动辄天价的方程式赛车，卡丁车场可按时段租用，一身基础护具加一顶头盔就能下场，很多城市的商场或郊区都有场地。换句话说，你不需要先成为车手，才能体验当车手的感觉。",
            "对中国的新手来说，室内电动卡丁车场近年在不少城市普及，按时段计费、无需自备装备，是体验门槛最低的一种方式；想认真练习的人，则可以进入有计时与排位的业余赛事，逐步熟悉真实比赛的节奏，再考虑沿 OK-Junior、OK 等正式级别向上走。",
            "所以无论目标是认真沿阶梯往上走，还是单纯想尝一口赛车的滋味，卡丁车都是「迈出第一步」成本最低、反馈最直接的地方。先去开一次，你对这项运动的所有想象都会变得具体起来。",
          ],
          sources: [
            { label: "FIA Karting 官方（fiakarting.com）", url: "https://www.fiakarting.com" },
            {
              label: "FIA Karting 级别（官方）",
              url: "https://www.fiakarting.com/page/fia-karting-categories",
            },
          ],
        },
        {
          tag: "装备",
          title: "需要哪些装备？",
          body: "头盔、赛服、手套是基础，且多有 FIA 认证标准。但新手不必一次买齐——先租用体验，确定喜欢再逐步添置。",
          read: [
            "赛车装备的存在只有一个目的：在意外发生时保护你。最核心的是头盔——它保护最不能受伤的部位，也是唯一强烈建议优先拥有自己那顶的装备（出于卫生与贴合度考虑）。其余护具，多数卡丁车场都能现场租借。",
            "在正式比赛中，关键装备大多有 FIA 的认证（homologation）标准：例如赛车头盔需符合 FIA 8859 或更高等级的 8860 标准；防火连体赛服需符合 FIA 8856 标准；用于减轻撞击时颈部受力的 HANS 头颈支撑装置则对应 FIA 8858 标准。这些标准是「装备能否用于正式比赛」的硬门槛，也是它们价格不一的原因之一。",
            "一套常见清单大致是：头盔、连体赛服、手套（防滑、保护手掌）、合脚的赛车鞋，以及颈部护具；进入更快的车种后再加上防火内衣、HANS 等。但请注意——这是一份「随着你越走越深才逐渐补齐」的清单，而不是入门当天的购物车。卡丁车入门所需远比方程式简单：很多场地只要求头盔（可租）加上长袖长裤与运动鞋即可下场。此外还有一些容易被忽略但实用的小件——头套（保持头盔卫生、吸汗）、护肋背心（卡丁车没有悬挂，颠簸时保护肋骨）等，可以等熟悉之后再按需添置。",
            "给新手最实在的建议是：别一次买齐。第一次下场，租来的装备完全够用；真正爱上之后，再按「头盔 → 手套 → 赛服」的顺序慢慢添置自己的。这样既不会为一时兴起花一大笔钱，又能在确定喜欢后买到真正合身、合用的东西。",
            "还需提醒的是，这些安全认证多有有效期：过期的头盔、赛服在正式比赛中可能不再被接受，需要更换或重新认证。不过这是「等你认真参赛后才要操心」的事——对刚开始的卡丁车体验者，场地提供的租赁装备已完全够用，不必为这些标准提前花钱。",
            "这也正是社区存在的意义之一：二手装备转让、新手借用都是常事，很多人的第一顶头盔、第一副手套都是从同好手里接过来的。先体验、再拥有，让门槛低到「这个周末就能开始」。",
          ],
          sources: [
            { label: "FIA 官方（fia.com）", url: "https://www.fia.com" },
            {
              label: "FIA Karting 官方（fiakarting.com）",
              url: "https://www.fiakarting.com",
            },
          ],
        },
        {
          tag: "术语",
          title: "听懂赛场黑话",
          body: "DRS、Pole、Pit、Apex…这些词第一次听像天书，但只要掌握十来个高频词，整场比赛的语言就通了大半。",
          read: [
            "第一次看比赛，最劝退的往往不是规则，而是解说嘴里一连串听不懂的「黑话」。其实只要掌握十来个高频词，整场比赛的语言就通了大半。下面按出现频率挑出最值得先记住的。",
            "Pole（杆位）：排位赛最快、周日发车第一位。Grid（发车格）：起跑时各车排定的位置。Apex（弯心）：一个弯里最靠内的那个点，车手过弯追求的「最佳走线」就是奔它而去——走得准，出弯就更快。Stint（一段轮胎周期）：从换上一套胎到换下为止的连续行驶段。",
            "Pit / Pit stop（进站）：赛车驶入维修区换胎、调整的过程，是策略核心；无线电里常用「Box, box」下达进站指令，因为「box」比「pit」更不易听错。Undercut / Overcut（提前 / 延后进站）：两种靠进站时机抢位置的套路——前者赌新胎的瞬时优势，后者赌多跑几圈的空当。",
            "DRS（可调式尾翼）：后车在指定区域、与前车足够接近时打开尾翼以减小风阻、辅助超车。Slipstream / Tow（尾流借力）：紧跟前车以减小风阻、提高直线速度。Formation lap（暖胎圈）：正赛起跑前的整队圈。Safety Car / VSC（安全车 / 虚拟安全车）：用于在危险路段统一压低车速。Parc fermé（围场封闭）：排位后赛车被封存、不得再做实质改动。",
            "再补几个解说里几乎每场都会出现的：Lap（圈）与 Lap time（单圈时间）；Backmarker（被套圈的慢车）；Pit lane（维修道）与 Pit wall（车队指挥墙）；Tyre degradation（轮胎衰退）；Lock-up（刹车抱死，常伴随轮胎冒烟与平点）；Dirty air（前车搅乱的乱流，会削弱后车的下压力，使其更难紧跟）。",
            "你不必一次全记住。挑三五个，下次看比赛时留意它们出现的时机，几场下来，解说的话就会从噪音变成剧情。",
          ],
          sources: [
            { label: "Formula 1 官方（formula1.com）", url: "https://www.formula1.com" },
            { label: "FIA 官方（fia.com）", url: "https://www.fia.com" },
          ],
        },
        {
          tag: "行动",
          title: "找到你的入口",
          body: "模拟器、卡丁车场、社区活动——三条路任你选，成本都不高。最重要的一步，永远是迈出的第一步。",
          read: [
            "看了这么多，最后只剩一个问题：从哪儿开始？好消息是，离赛车最近的入口几乎人人触手可及，而且都不贵。下面三条路，可以从任意一条起步。",
            "第一条，模拟器。一套像样的方向盘加一台电脑，就能在家里跑遍世界名赛道。别小看它——许多职业车手也用模拟器练走线、记赛道。它几乎零风险，让你在花钱去真实场地前，先把「赛车的语言」练熟：走线、刹车点、入弯出弯的节奏。",
            "第二条，卡丁车场。这是从「看」到「开」最关键的一跃。租一台卡丁车、戴上头盔下场，你会第一次真切体会到刹车点与出弯加速到底是什么感觉。卡丁车相对便宜、安全、上手快，哪怕只是和朋友去玩一次，那种体感也会彻底改变你看比赛的方式。",
            "第三条，社区。一个人入门容易卡在「下一步做什么」，而一群同好就不同：有人带你认识规则，有人约你一起去卡丁车场，有人把闲置装备借给你。赛车不只是个人的速度游戏，社区能显著降低门槛、让你少走弯路——这也正是 OpenGrid 想做的事。",
            "具体怎么迈第一步？模拟器可以从一套入门级力反馈方向盘起步，配合常见的赛车游戏即可上路；卡丁车场建议先选室内场、按时段租赁，跟着工作人员把安全讲解与流程走一遍；至于社区，最简单的方式就是加入一个本地或线上的同好群，先看别人怎么玩、再约一次线下活动。三步里任意一步，今天就能开始。",
            "不必等「准备好了」再开始：挑一条最顺手的路，这个周末就迈出第一步。三条路并不互斥，很多人是先在模拟器上手，再去卡丁车场，最后在社区里找到长期一起玩的人。也不必给自己设时间表——有人一年只去两三次卡丁车场，纯粹图个开心；有人则把它当作认真的爱好，逐年往更高级别走。无论哪一种，重要的都是先开始、再慢慢找到属于自己的节奏；当你回头看，会发现真正难的从来不是技术，而是迈出第一步的那一下。",
          ],
          sources: [
            { label: "FIA Karting 官方（fiakarting.com）", url: "https://www.fiakarting.com" },
            { label: "Formula 1 官方（formula1.com）", url: "https://www.formula1.com" },
          ],
        },
      ],
    },
    racing: {
      eyebrow: "赛车门类",
      title: "赛车，远不止 F1",
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
            "卡丁车是场地赛车的入门基石——小巧轻量、几乎无悬挂、贴地而坐的单座小车，发动机以两冲程为主。它被公认为通往职业赛车的「起跑线」：相对便宜、易上手，又能在最纯粹的层面教会走线、刹车点、起步、超车与贴身防守等一切基本功。由于贴地、没有悬挂，速度的「体感」被放大，对操作的反馈极其诚实——做错一个动作，车会立刻告诉你。卡丁车同时也是有自己 FIA 世界锦标赛与欧洲锦标赛的正式竞技项目，由 FIA Karting（前身为 CIK-FIA）监管，并非只是娱乐设施。",
          rules: [
            "三大类别：FIA Karting 的世界锦标赛级别分为三大家族——直驱卡丁、带变速箱卡丁与 Superkart，它们都以两冲程发动机为共同技术基础。",
            "直驱组：顶级为 OK（成人，14 岁起，125cc，2016 年起改用推车起步、简化电子设备）；青少年组为 OK-Junior（12–14 岁，125cc 水冷、带离合与电启动，并设转速上限），另有为降低成本而设的简化版 OKN-Junior。",
            "变速箱组（KZ）：125cc、簧片进气、六前速序列变速箱；KZ1 与 KZ2 技术几乎一致，主要按车手资历与成绩区分，近年还增设面向 35 岁以上的 KZ2-Masters。",
            "Superkart：最特殊的一类——带整流罩、双缸 250cc、近 100 马力，车手近乎躺姿驾驶，只能在长赛道充分发挥，单圈速度可媲美不少高级方程式。",
            "赛事：FIA 主办世界锦标赛与欧洲锦标赛，另有通常在法国勒芒举办的 CIK-FIA 耐力锦标赛，以及亚太等各洲锦标赛。",
          ],
          extra:
            "几乎每位现代顶级车手都从卡丁车起步：维斯塔潘、汉密尔顿、舒马赫都是一路从卡丁车打上来的，维斯塔潘更在 2013 年一年之内连夺多项 CIK-FIA 大赛冠军，是卡丁车时代的统治级表现。正因为它把赛车最核心的东西浓缩进一台便宜又安全的小车，卡丁车既是冠军的摇篮，也是普通人离「真正的赛车」最近、成本最低的入口——这个周末就能去开一次。",
          sources: [
            { label: "FIA Karting 官方（fiakarting.com）", url: "https://www.fiakarting.com" },
            {
              label: "FIA Karting 级别与竞赛规则（官方）",
              url: "https://www.fiakarting.com/page/fia-karting-categories",
            },
          ],
        },
        {
          name: "GT",
          full: "GT3 / 房车赛",
          concept:
            "GT（Grand Touring）赛事让基于量产跑车开发的赛车同场竞技——法拉利、保时捷、宝马、奔驰 AMG、奥迪、兰博基尼、迈凯伦等品牌的「街车赛车版」。其中 GT3 是当今全球统一、最主流的「客户赛车（customer racing）」级别：厂商把赛车造好出售，私人车队买来即可下场，无需自研。GT3 这一级别本身就源于 SRO 摩托运动集团向 FIA 提出的框架，如今技术规则由 FIA 定义；要取得 GT3 认证，厂商通常须先量产足够数量的对应公路车型，赛车再经台架、风洞与赛道测试。全球最具代表性的平台是 SRO 运营的 GT World Challenge，覆盖欧洲、亚洲、美洲、澳洲多个洲际系列。",
          rules: [
            "性能平衡（BoP）：前置、中置、后置发动机、不同品牌的车同场竞争，SRO 依据 ECU 数据、GPS、台架与风洞测试，调整重量、涡轮增压/进气限制、离地高度与油箱等，让各车势均力敌；BoP 在赛前公布，且不随比赛结果变化。",
            "车手分级：SRO 把车手分为铂金/金/银/铜等级，并据此把车组划入 Pro、Gold、Silver、Bronze、Pro-Am 等组别，让职业车手与业余「绅士车手」能按规则搭配、同场竞争。",
            "两种赛制：分「Sprint（短程冲刺）」与「Endurance（耐力）」两个系列，各约五站；Sprint 每个周末为两场约一小时、双人共驾、含强制换人的短程赛，Endurance 多为 3 至 6 小时、三人共驾。",
            "总冠军：把 Sprint 与 Endurance 两个系列的积分合并，决出 GT World Challenge 的年度车手与车队总冠军。",
          ],
          extra:
            "「斯帕 24 小时」是 GT World Challenge 乃至全世界规模最大的 GT 耐力赛，也是全年分量最重的一站——它把计分分成 6 小时、12 小时、24 小时三段，每段按 25-18-15 计分，单站最多可拿 75 分。正是 BoP 与车手分级的存在，才让一辆前置宝马、一辆中置法拉利、一辆后置保时捷，以及职业与业余车手，能在同一条赛道上真刀真枪地缠斗——这正是「客户赛车」普及全球的关键。",
          sources: [
            {
              label: "GT World Challenge 官方（gt-world-challenge.com）",
              url: "https://www.gt-world-challenge.com",
            },
            { label: "SRO Motorsports 官方", url: "https://www.sro-motorsports.com" },
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
      body: [
        "2021 年的阿布扎比，维斯塔潘和汉密尔顿把一整个赛季的胜负，压进了最后一圈。那年我还小，挤在电视机前，整个人都看傻了。绷到让人喘不过气的策略，引擎那种几乎要把空气撕开的轰鸣，还有赛车划过弯角时利落得像一支箭的线条。我说不上来心里到底是什么感觉，只知道从那一晚起，我的眼睛就再也离不开赛车了。",
        "那点着迷，很快就成了戒不掉的习惯。卡塔尔世界杯开幕的前一晚，我熬夜看完了那年最后一站阿布扎比；天亮后眯了没多久，又爬起来守世界杯的开幕式。整整两天，基本没怎么合眼。没人逼我，我也不觉得累，反倒觉得这两天过得特别值。后来我才明白，这大概就是青春最真实的样子：为了真正喜欢的东西，可以一连熬上两天，就因为舍不得错过。",
        "在所有让我熬夜的理由里，维斯塔潘是最特别的一个。吸引我的从来不只是他快，而是他对赛车那股近乎偏执的劲儿——在他眼里，除了赢，好像什么都不重要。看他比赛看久了，我慢慢也把这股劲儿，变成了自己对待热爱的态度：一旦认准，就别给自己留退路，能押上的都押上去。",
        "也正是这份热爱，把我从看台推上了赛道。从 F1 到卡丁车，我开得越来越多，也越来越快。那种贴着地面飞出去、风灌进头盔里嗡嗡作响的感觉，这辈子都忘不掉。可热闹是赛场的，孤独是我的。每次下场，赛道上都只有我一个人，一圈一圈地刷圈速，没有对手，也没人陪我为那零点几秒较劲。开到后来我才发现，我想要的根本不只是更快——我想比赛。哪怕就一次，我也想像真正的车手那样，站上发车格，跟人正面拼一回。",
        "带着这股不甘心，我开始往四周看，这才发现有这种念头的远不止我一个。有人跟我一样，喜欢赛车喜欢得发烫，却不知道第一步该迈去哪；有人咬牙买齐了装备，却凑不到一起下场的人；还有人只是夜里守在屏幕前，觉得这项运动离自己隔着一整个世界。说到底，挡在我们面前的就那么几样东西：高得吓人的门槛、散得到处都是又分不清真假的信息，还有那种「好像只有我一个人这么上头」的孤单。",
        "OpenGrid 就是我想为这些人做的事——也是为当年那个一个人刷圈的自己。我想把这项老被人说成「又远又贵」的运动，拆成普通人也能看懂、也敢上手的样子；让每个刚动心的人，都能在这儿找到方向、找到装备，更重要的是，找到一起玩的人。",
        "而我最想做成的，是和大家一起，办起真正属于我们自己的「民间比赛」。它不用是职业赛场那种遥不可及的舞台。可以就是一个普通的周末：一群本来谁也不认识、却一样上头的人，约在同一片场地，戴上头盔，排好发车顺序。然后灯一灭，真正的较量才开始——在大弯道里贴着彼此缠斗，你守住内线，我从外线绕出去，前一刻还领着，下一刻位置就被抢了回去，此消彼长，谁都不肯松一脚油门。有计时，有圈速，有名次，也有冲线那一下真实的心跳。说到底，重要的从来不是奖杯多大，而是你终于不再是一个人——身边坐满了和你一样、肯为热爱拼命的人。",
        "偶尔也有人问我，赛车还能走多远。环保的要求确实在一点点改写它：发动机要混动，赛道要电动，连轰鸣都在变小。可在我看来，赛车从来就不只是一项运动，它更像一种精神——是想把每一个弯都逼到极限的那股冲动。只要这股劲儿还在，无论车子烧的是油还是电，赛车都不会真的老去。它只是换一副样子，继续往前冲。",
        "所以，如果你也曾在某个深夜，为一场比赛激动到睡不着；如果你也相信，真心热爱的东西就值得被当回事——那这里，就是为你留的。我把灯一直亮着，等你进来，我们一起把它办成真的。",
      ],
      note: "—— 源",
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
        intro: "A bit about me, and how this whole thing started.",
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
      exploreTitle: "Where to start",
      exploreSubtitle: "Knowledge, community — and my own story. Pick one to begin.",
      enter: "Enter",
    },
    guide: {
      eyebrow: "F1 basics",
      title: "You'll want to know this",
      subtitle:
        "Never watched it? No problem. A few minutes to clear that very first hurdle.",
      readMore: "Read more",
      close: "Close",
      sourceLabel: "Sources",
      cards: [
        {
          tag: "Basics",
          title: "What is F1?",
          body: "Formula 1 is the top class of single-seater, open-wheel racing: FIA-governed, with drivers and teams contesting two world titles across 20-plus circuits a year.",
          read: [
            "Formula 1 (F1) is the highest class of single-seater, open-wheel racing, with its sporting and technical rules set and governed by the FIA and the championship promoted commercially by the Formula One group. The word \"formula\" isn't math — it's the shared set of technical rules every team must obey, defining car dimensions, aerodynamics, the type of power unit and minimum weight. Within those rules each team designs and builds its own car, so the contest is as much between hundreds of engineers as between drivers.",
            "Two world titles run in parallel each season: the Drivers' Championship, for the driver with the most points, and the Constructors' Championship, which sums a team's two drivers' points. Only the top ten score in a race: 25, 18, 15, 12, 10, 8, 6, 4, 2, 1. From 2025 the bonus point for fastest lap was removed.",
            "Current cars use a 1.6-litre V6 turbo-hybrid power unit with energy recovery (ERS), built around a carbon-fibre monocoque that protects the driver. The downforce generated in corners lets the car take them far faster than everyday intuition suggests, while the driver sustains near-athlete physical loads for a race lasting an hour or two.",
            "A standard weekend is usually two Friday practices, a third practice plus qualifying on Saturday, and the race on Sunday; some rounds add a short Saturday 'Sprint'. Two modern rules also shape the order: a cost cap that limits each team's annual spend to narrow the gap between big and small teams, and DRS (the adjustable rear wing) to aid overtaking.",
            "The F1 World Championship has run since 1950 and is one of the oldest and largest racing series in the world. If you're just starting out, hold on to one idea: F1 is the fastest cars, the finest drivers and the strongest engineering teams competing under one set of rules — once that clicks, qualifying, pit stops and tyre strategy are just facets of the same contest.",
          ],
          sources: [
            { label: "Formula 1 official (formula1.com)", url: "https://www.formula1.com" },
            {
              label: "FIA regulations (fia.com)",
              url: "https://www.fia.com/regulation/category/110",
            },
          ],
        },
        {
          tag: "Watching",
          title: "How do you watch a race?",
          body: "A weekend splits into practice, qualifying and the race; the drama lives in qualifying, the start, tyres and pit strategy, and millisecond overtakes.",
          read: [
            "An F1 weekend isn't just Sunday. It usually unfolds in three steps: practice, where teams dial in the car and test tyres; qualifying, run in knock-out segments, where a single fastest lap sets Sunday's grid; and only then the race. Understand those three steps and you'll never again be confused by Friday's 'non-racing' — it is preparation for Sunday.",
            "Qualifying runs as Q1, Q2 and Q3: each segment eliminates the slowest drivers, and the ten fastest contest pole position (first on the grid) in Q3, with everyone else gridded by their best lap. The starting order often shapes the first half of the race, but the start is only the beginning: the instant the lights go out, the scramble into turn one can rewrite it in seconds.",
            "The real undercurrent of a race is tyres and pit stops. In a dry race each driver must use at least two different dry compounds, so a stop is normally required. Softer tyres are faster but wear sooner; when to pit and which compound to fit is a season-long gamble, and a flawless stop takes only two or three seconds. This is where 'undercut' (pitting earlier) and 'overcut' (pitting later) come from.",
            "The most visible thrill, overtaking, happens in the heavy braking zones at the end of straights or as a car slips into the slipstream of the one ahead. The rules help: DRS lets a following car open its rear wing in designated zones, when close enough, to cut drag and gain speed. Flags, the Safety Car and the Virtual Safety Car (VSC) are used to slow the field through hazards.",
            "Weather is another variable: in the rain drivers switch to intermediate or full wet tyres, and gambling on the right tyre as conditions change can decide the result. When the Safety Car bunches the field, hard-won gaps reset to almost nothing, putting the race back on a near-equal footing — which can both wipe out a leader's advantage and hand a chaser the chance to pounce, making it a frequent turning point.",
            "A tip for newcomers: don't watch every car. Pick two or three drivers and follow their rhythm — who they're chasing, who's chasing them, how much tyre they have left, when they pit. Over a few races, a Grand Prix turns from 'cars going in circles' into a chess game you can actually read.",
          ],
          sources: [
            { label: "Formula 1 official (formula1.com)", url: "https://www.formula1.com" },
            {
              label: "FIA regulations (fia.com)",
              url: "https://www.fia.com/regulation/category/110",
            },
          ],
        },
        {
          tag: "Start",
          title: "Karting: the best start",
          body: "Almost every top driver began in karts. Relatively cheap, safe and quick to learn, it's the closest ordinary people get to real racing.",
          read: [
            "If formula cars are the top of the pyramid, karting is the base almost everyone stands on. Read any top driver's biography and their first 'race car' was almost always a kart, many starting at seven or eight. The reason is simple: karting distils the core of racing — lines, braking points, corner exits, wheel-to-wheel combat — into a machine that's cheap and safe.",
            "A kart sits low to the ground with almost no suspension, so the sense of speed is amplified: the actual velocity isn't high, yet a few centimetres off the tarmac every corner is heart-in-mouth. That honest feedback makes it the best teacher — do something wrong and the kart tells you instantly, with no electronics to cover for you.",
            "Karting is also a serious sport in its own right, governed by FIA Karting (formerly CIK-FIA) with World and European Championships. Its classes fall into three families: direct-drive (the senior OK and junior OK-Junior, both 125cc), gearbox karts (KZ) and the fastest of all, the twin-cylinder 250cc Superkart. Many modern stars — Verstappen, Hamilton, Schumacher — came up through karts.",
            "It is also genuinely accessible. Compared with the eye-watering cost of formula cars, a kart can be rented by the session; basic gear and a helmet are enough to get on track, and many cities have venues at malls or just outside town. You don't have to become a driver before you can feel like one.",
            "For a complete beginner, indoor electric kart venues — now common in many cities, billed by the session with gear provided — are the lowest-barrier way to try it. Those who want to practise seriously can move into amateur events with timing and qualifying to learn the rhythm of real racing, then consider climbing the formal ladder through classes like OK-Junior and OK.",
            "So whether your goal is to climb the ladder for real or just to taste what racing feels like, karting is where the first step costs least and rewards you most directly. Go drive one once, and every idea you've had about the sport becomes concrete.",
          ],
          sources: [
            { label: "FIA Karting official (fiakarting.com)", url: "https://www.fiakarting.com" },
            {
              label: "FIA Karting categories (official)",
              url: "https://www.fiakarting.com/page/fia-karting-categories",
            },
          ],
        },
        {
          tag: "Gear",
          title: "What gear do you need?",
          body: "Helmet, suit and gloves are the basics, most carrying FIA homologation standards. But don't buy it all at once — rent first, then add your own.",
          read: [
            "Racing gear exists for one purpose: to protect you when something goes wrong. The most essential piece is the helmet — it guards the part you can least afford to injure, and is the one item worth owning yourself sooner rather than later, for hygiene and fit. Most of the rest can be rented right at the track.",
            "In formal competition, key gear carries FIA homologation standards: race helmets must meet FIA 8859 or the higher 8860; a fireproof one-piece suit must meet FIA 8856; and the HANS head-and-neck device, which reduces neck loads in an impact, corresponds to FIA 8858. These standards are the hard gate for whether kit can be used in real racing — and part of why prices vary so widely.",
            "A typical list runs: helmet, one-piece suit, gloves (grip and palm protection), proper boots and a neck brace; faster categories add fireproof underlayers, a HANS device and more. But this is a list you fill in gradually as you go deeper, not a shopping cart for day one — karting entry needs far less than formula racing: many venues only require a helmet (rentable) plus long sleeves, long trousers and trainers to get on track. There are also small but useful items that are easy to overlook — a balaclava (keeps the helmet hygienic and wicks sweat) and a rib protector (a kart has no suspension, so it shields the ribs over bumps) — which you can add later as needed.",
            "The most practical beginner advice: don't buy it all at once. For your first time on track, rented gear is plenty. Once you've genuinely fallen for it, add your own in the order helmet → gloves → suit, so you neither blow money on a whim nor miss out on gear that truly fits.",
            "It's also worth knowing that these safety certifications have expiry dates: an out-of-date helmet or suit may no longer be accepted in formal competition and will need replacing or re-certifying. But that's a concern for once you're racing seriously — for a first karting outing, the venue's rental gear is more than enough, with no need to spend on these standards up front.",
            "This is also exactly what a community is for: passing on second-hand gear and lending kit to newcomers is routine, and plenty of people's first helmet or gloves came from a fellow enthusiast. Try first, own later, and keep the barrier low enough that 'this weekend' is a real answer.",
          ],
          sources: [
            { label: "FIA official (fia.com)", url: "https://www.fia.com" },
            {
              label: "FIA Karting official (fiakarting.com)",
              url: "https://www.fiakarting.com",
            },
          ],
        },
        {
          tag: "Jargon",
          title: "Crack the race-day slang",
          body: "DRS, Pole, Pit, Apex… gibberish at first, but learn a dozen high-frequency terms and most of the race's language opens up.",
          read: [
            "The first time you watch a race, what puts people off usually isn't the rules — it's the stream of slang from the commentary. Master a dozen or so high-frequency terms and most of the race's language opens up. Here are the ones worth learning first, picked by how often they come up.",
            "Pole: fastest in qualifying and first on the grid. Grid: the starting positions. Apex: the innermost point of a corner, which the 'ideal line' is aimed at — hit it well and you exit faster. Stint: a continuous run on one set of tyres, from fitting to removal.",
            "Pit / pit stop: coming into the lane to change tyres and adjust the car — the heart of strategy; the radio call is often 'Box, box', because 'box' is harder to mishear than 'pit'. Undercut / overcut: stealing a position through pit timing — pitting earlier to use fresh-tyre grip, or later to run a few laps in clear air.",
            "DRS (the adjustable rear wing): opened in designated zones, when close enough behind, to cut drag and aid overtaking. Slipstream / tow: tucking behind a car to reduce drag and gain straight-line speed. Formation lap: the lap that forms up the grid before the start. Safety Car / VSC: used to slow the field through hazards. Parc fermé: the car is sealed after qualifying and may not be significantly changed.",
            "A few more you'll hear almost every race: lap and lap time; backmarker (a slower, lapped car); pit lane and pit wall (the team's command stand); tyre degradation (tyres losing grip as they wear); lock-up (a braking wheel that locks, often smoking and flat-spotting the tyre); and dirty air (the turbulent wake off a leading car that cuts the following car's downforce and makes it harder to follow closely).",
            "You don't have to memorise them all at once. Pick three to five, watch for when they show up next time, and over a few races the commentary turns from noise into story.",
          ],
          sources: [
            { label: "Formula 1 official (formula1.com)", url: "https://www.formula1.com" },
            { label: "FIA official (fia.com)", url: "https://www.fia.com" },
          ],
        },
        {
          tag: "Action",
          title: "Find your way in",
          body: "Sims, karting tracks, community — three low-cost paths in. The one that matters most is always the first step.",
          read: [
            "After all of this, one question remains: where do you start? The good news is that the closest entry to racing is within almost anyone's reach, and none of it is expensive. Here are three paths — you can begin with any one.",
            "Path one: the simulator. A decent wheel and a computer let you lap the world's great circuits from home. Don't underestimate it — many professional drivers use sims to learn lines and memorise tracks. It's nearly risk-free, and it lets you master the language of racing — lines, braking points, the rhythm of corners — before spending a cent at a real venue.",
            "Path two: the karting track. This is the crucial leap from watching to driving. Rent a kart, put on a helmet, get on track, and you'll feel for the first time what braking points and corner exits really are. Karting is relatively cheap, safe and quick to learn, and even a single outing with friends will change how you watch a race.",
            "Path three: the community. Alone, it's easy to get stuck on 'what's the next step'; with a group of fellow fans everything changes — someone walks you through the rules, someone invites you to the kart track, someone lends you gear they no longer use. A community noticeably lowers the barrier and saves you wrong turns, which is exactly what OpenGrid is for.",
            "How do you actually take that first step? For a sim, start with an entry-level force-feedback wheel and a common racing game. For a kart track, pick an indoor venue, rent by the session, and walk through the safety briefing and procedure with the staff. For the community, the simplest move is to join a local or online group of fellow fans — watch how others do it, then turn up to one in-person outing. Any of the three can begin today.",
            "Don't wait until you're 'ready' to begin: pick the path that suits you best and take the first step this weekend. The three paths aren't mutually exclusive — many people start on a sim, then visit a kart track, and finally find their regular crew in a community. And don't put yourself on a schedule — some people visit a kart track a couple of times a year purely for fun, while others treat it as a serious hobby and climb the classes over time. Either way, what matters is starting first and finding your own pace; looking back, the hard part was never the skill, but taking that first step.",
          ],
          sources: [
            { label: "FIA Karting official (fiakarting.com)", url: "https://www.fiakarting.com" },
            { label: "Formula 1 official (formula1.com)", url: "https://www.formula1.com" },
          ],
        },
      ],
    },
    racing: {
      eyebrow: "Racing categories",
      title: "Far more than F1",
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
            "Karting is the entry-level foundation of circuit motorsport — small, light, near-suspension-less single-seaters you sit low to the ground in, mostly two-stroke. It is universally seen as the gateway to pro racing: relatively cheap and accessible, it teaches every fundamental — racing lines, braking points, starts, overtaking and wheel-to-wheel defending — at the purest level. Because it sits so low with no suspension, the sense of speed is amplified and the feedback is brutally honest: do something wrong and the kart tells you instantly. It is also a serious sport in its own right, with FIA World and European Championships, governed by FIA Karting (formerly CIK-FIA) — not just a leisure attraction.",
          rules: [
            "Three families: FIA Karting's championship classes fall into direct-drive karts, gearbox karts and Superkarts, all sharing two-stroke engines.",
            "Direct-drive: the top class is OK (senior, from age 14, 125cc, push-started and simplified since 2016); the junior class is OK-Junior (ages 12–14, 125cc water-cooled, with clutch, electric start and an rpm limit), with a simplified, lower-cost OKN-Junior also offered.",
            "Gearbox (KZ): 125cc, reed-valve intake, six-speed sequential gearbox; KZ1 and KZ2 are technically near-identical, split mainly by driver experience, with a recent KZ2-Masters for drivers 35 and over.",
            "Superkart: the most unusual class — full bodywork, a twin-cylinder 250cc engine near 100 hp, driven almost lying down, suited only to long circuits, with lap times rivalling far more sophisticated single-seaters.",
            "Events: the FIA runs World and European Championships, plus a CIK-FIA Endurance Championship usually held at Le Mans, France, and continental titles such as the Asia-Pacific Championship.",
          ],
          extra:
            "Almost every modern top driver started in karts: Verstappen, Hamilton and Schumacher all came up this way, and in 2013 Verstappen won several CIK-FIA titles in a single year — a dominant karting-era run. Because it distils the core of racing into a cheap, safe little machine, karting is both the cradle of champions and the closest, lowest-cost way for an ordinary person to reach 'real' racing — something you can go and try this weekend.",
          sources: [
            { label: "FIA Karting official (fiakarting.com)", url: "https://www.fiakarting.com" },
            {
              label: "FIA Karting categories & rules (official)",
              url: "https://www.fiakarting.com/page/fia-karting-categories",
            },
          ],
        },
        {
          name: "GT",
          full: "GT3 / GT Racing",
          concept:
            "GT (Grand Touring) racing pits production-derived sports cars against each other — the race versions of road cars from Ferrari, Porsche, BMW, Mercedes-AMG, Audi, Lamborghini and McLaren. GT3 is today's globally standardized, mainstream 'customer racing' class: manufacturers build the cars and sell them, so a private team can buy one and race without developing its own. The GT3 category itself grew from a framework the SRO Motorsports Group proposed to the FIA, which now defines the technical rules; to be homologated, a manufacturer typically must first build enough of the matching road car, and the racer is then tested on dynos, in wind tunnels and on track. The flagship global platform is SRO's GT World Challenge, spanning continental series in Europe, Asia, America and Australia.",
          rules: [
            "Balance of Performance (BoP): because front-, mid- and rear-engined cars from different brands race together, SRO uses ECU data, GPS, dyno and wind-tunnel tests to adjust weight, turbo boost/air restrictors, ride height and fuel to keep them evenly matched; BoP is published before each event and does not react to race results.",
            "Driver grading: SRO grades drivers Platinum/Gold/Silver/Bronze and sorts crews into classes such as Pro, Gold, Silver, Bronze and Pro-Am, letting professionals and amateur 'gentleman drivers' compete together by rule.",
            "Two formats: the season splits into Sprint and Endurance disciplines of about five rounds each; Sprint weekends are two ~1-hour, two-driver races with a mandatory driver change, while Endurance races run 3–6 hours, shared by three drivers.",
            "Overall title: points from the Sprint and Endurance cups combine to crown the GT World Challenge overall drivers' and teams' champions.",
          ],
          extra:
            "The 24 Hours of Spa is GT World Challenge's crown jewel — the biggest GT race in the world and the season's most valuable round: it splits scoring into 6-, 12- and 24-hour stages, each on the 25-18-15 scale, for up to 75 points. It is BoP and driver grading together that let a front-engined BMW, a mid-engined Ferrari and a rear-engined Porsche — and professionals alongside amateurs — genuinely fight in the same race, which is exactly why 'customer racing' has spread worldwide.",
          sources: [
            {
              label: "GT World Challenge official (gt-world-challenge.com)",
              url: "https://www.gt-world-challenge.com",
            },
            { label: "SRO Motorsports official", url: "https://www.sro-motorsports.com" },
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
      body: [
        "Abu Dhabi, 2021. Verstappen and Hamilton, a whole season boiled down to one final lap. I was a kid, glued to the TV, completely stunned. Strategy strung so tight it was hard to breathe, an engine note that seemed to rip the air apart, and a car that cut through the corner clean as an arrow. I couldn't have told you what I was feeling. I just knew that from that night on, I couldn't take my eyes off racing.",
        "That little spark quickly became a habit I couldn't shake. The night before the Qatar World Cup kicked off, I stayed up to the end of that year's Abu Dhabi finale; I dozed for a bit after sunrise, then dragged myself back up for the World Cup's opening. Two days, barely any sleep. Nobody made me do it, and I wasn't even tired — those two days just felt completely worth it. Only later did I get it: that's what being young really looks like — staying up two days straight for something you love, just because you can't stand to miss it.",
        "Of all the things that cost me sleep, Verstappen mattered most. It was never just his speed that pulled me in — it was that almost obsessive edge to him, like nothing but winning was worth his time. The more of his races I watched, the more that drive became my own way of caring about things: once you're sure, don't leave yourself a way out, and put up everything you can.",
        "And it was that love that pushed me off the grandstand and onto the track. From F1 to karting, I drove more and more, and faster and faster. That feeling of flying just off the ground, the wind roaring inside the helmet — I'll never forget it. But the buzz belonged to the track; the loneliness was mine. Every time out, it was just me, circling alone, chasing my own lap times with no one to race and no one to sweat those few tenths with. Eventually I realized that what I wanted wasn't only to go faster — I wanted to race. Even once, I wanted to line up on a grid and go at it with someone, the way a real driver does.",
        "Carrying that frustration, I started looking around, and that's when I saw I was nowhere near alone. Some people love racing as much as I do but have no clue where to start. Some scrape together the money for gear and then can't find anyone to hit the track with. Some just sit behind a screen at night, sure the whole thing is a world away from them. When you get down to it, the same handful of things block all of us: a barrier that's frighteningly high, information that's scattered everywhere and impossible to trust, and that lonely sense that you're 'the only one who's this into it.'",
        "OpenGrid is what I want to build for those people — and for the kid I used to be, lapping alone. I want to take this sport everyone calls distant and expensive and break it down into something an ordinary person can actually follow, and actually try. I want anyone who's just caught the bug to find direction here, to find gear here, and most of all, to find people to do it with.",
        "What I want most of all is for us to build our own grassroots races, together. It doesn't have to be some untouchable professional stage. It can be an ordinary weekend: a bunch of people who didn't know each other but are all just as hooked, meeting at the same track, pulling on helmets, lining up to start. And the moment the lights go out, the real fight begins — running wheel-to-wheel through the long corner, you holding the inside, me sweeping around the outside, leading one second and losing the place the next, neither of us willing to lift off the throttle. Real timing, real lap times, real positions, and that real thump in your chest as you cross the line. In the end it was never about how big the trophy is. It's that you're finally not alone — surrounded by people who'll lay it all on the line for the same thing you love.",
        "People sometimes ask me how much further racing can go. The push for sustainability really is rewriting it bit by bit: engines going hybrid, tracks going electric, even the roar getting quieter. But the way I see it, racing was never just a sport — it's more like a spirit, the urge to take every single corner to its absolute limit. As long as that drive is alive, it won't matter whether the car burns fuel or runs on a battery; racing won't truly grow old. It'll just take a new shape and keep charging forward.",
        "So if you've ever lain awake some night, too worked up over a race to sleep; if you believe, like I do, that something you truly love deserves to be taken seriously — then this place is here for you. I've kept the light on. Come in, and let's make it real, together.",
      ],
      note: "— Yuan",
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
