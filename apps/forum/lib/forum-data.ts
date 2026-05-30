// 论坛假数据（原型阶段）。内容以中文为主，仅用于把界面与交互跑通。
// 第②步接入 Supabase 后，这里会被真实的数据库查询替换。
// 注：时间为示意字符串、点赞/回复数为假数据，切换语言不会翻译帖子正文。

export type Reply = {
  id: string;
  author: string;
  handle: string;
  time: string;
  body: string;
};

export type Thread = {
  id: string;
  board: string; // 对应 dictionary.boards[].slug
  title: string;
  author: string;
  handle: string;
  time: string;
  body: string;
  replies: Reply[];
};

export const THREADS: Thread[] = [
  // ── 问答区 qa ──────────────────────────────────────────────
  {
    id: "1",
    board: "qa",
    title: "第一次去卡丁车场，要注意什么？",
    author: "新手小李",
    handle: "@xiaoli",
    time: "2 小时前",
    body: "下周末打算第一次去室内卡丁车场，完全没经验。穿什么衣服合适？需要自己带头盔吗？大概要花多少时间？有点紧张又有点期待，求老哥们指点。",
    replies: [
      {
        id: "1-1",
        author: "弯心猎手",
        handle: "@apexhunter",
        time: "1 小时前",
        body: "穿长袖长裤、运动鞋就行，别穿裙子和拖鞋。头盔场地都会提供，第一次不用自己买。记得把围巾、连帽绳这类容易卷进去的东西收好。放轻松，第一圈先熟悉刹车点，别一上来就猛踩。",
      },
      {
        id: "1-2",
        author: "周末车手",
        handle: "@weekendracer",
        time: "48 分钟前",
        body: "补充一点：到场会先签免责协议、看一段安全讲解视频，然后教练带你认旗语。整个流程加上跑两组大概一个半小时。第一次别太在意圈速，享受过程最重要。",
      },
    ],
  },
  {
    id: "2",
    board: "qa",
    title: "出弯总是比别人慢，问题出在哪？",
    author: "进阶中",
    handle: "@onthelimit",
    time: "昨天",
    body: "跑了大概十次了，直道还行，但每次出弯加速都被人拉开。是不是我入弯太快、把速度都浪费在弯里了？想听听有经验的朋友怎么练出弯。",
    replies: [
      {
        id: "2-1",
        author: "教练老张",
        handle: "@coachzhang",
        time: "20 小时前",
        body: "十有八九是「慢进快出」没做到。试试入弯前把刹车点提前一点、把速度在直线上就降下来，过了弯心再果断给油。宁可入弯慢半拍，也要保证出弯能早开油门——直道才是真正拉开差距的地方。",
      },
    ],
  },
  // ── 约赛 · 组局 meetup ─────────────────────────────────────
  {
    id: "3",
    board: "meetup",
    title: "周六上午朝阳卡丁车场组局，缺 2 人",
    author: "组局狂魔",
    handle: "@letsgo",
    time: "刚刚",
    body: "本周六上午 10 点，朝阳那家室外场，已经约到 4 个人，再凑 2 个就能包场跑计时赛。新手老手都欢迎，AA 分摊费用。有兴趣的评论区扣 1，我拉群。",
    replies: [
      {
        id: "3-1",
        author: "新手小李",
        handle: "@xiaoli",
        time: "刚刚",
        body: "1！第一次跑计时赛有点怂，但想试试，能去！",
      },
    ],
  },
  {
    id: "4",
    board: "meetup",
    title: "有没有工作日晚上一起跑的？",
    author: "夜班车手",
    handle: "@nightshift",
    time: "3 天前",
    body: "周末场地太挤了，想找几个工作日晚上能跑的朋友。室内场晚上人少、价格也实惠。坐标海淀，有同好吗？",
    replies: [],
  },
  // ── 场地点评 tracks ────────────────────────────────────────
  {
    id: "5",
    board: "tracks",
    title: "「速境」室内场体验报告：赛道长、出租车况好",
    author: "场地猎人",
    handle: "@trackscout",
    time: "前天",
    body: "上周去了趟速境室内卡丁车场。优点：赛道比一般室内场长不少，有两个技术弯很过瘾；出租卡丁车维护得不错，没遇到打滑的。缺点：周末要排队，建议提前预约。综合体验 8/10，推荐给进阶玩家。",
    replies: [
      {
        id: "5-1",
        author: "弯心猎手",
        handle: "@apexhunter",
        time: "前天",
        body: "同感，那两个连续弯确实考验出弯衔接。补充一句：他们家电动卡丁车扭矩很线性，适合练油门控制。",
      },
    ],
  },
  // ── 装备交流 · 二手 gear ───────────────────────────────────
  {
    id: "6",
    board: "gear",
    title: "出一副二手手套（几乎全新），附选购小贴士",
    author: "装备党",
    handle: "@gearhead",
    time: "1 天前",
    body: "升级了装备，出一副只用过两次的卡丁车手套，码数偏大。顺便给新手提个醒：手套别买太厚的，要能清楚感受到方向盘的回馈；掌心防滑很关键。有需要的私信。",
    replies: [
      {
        id: "6-1",
        author: "周末车手",
        handle: "@weekendracer",
        time: "22 小时前",
        body: "顶一个。第一副手套真的不用追求贵，合手、防滑、能洗就够了。等真的入坑了再升级也不迟。",
      },
    ],
  },
];

// ── 取数据的小工具 ──────────────────────────────────────────
export const threadsByBoard = (slug: string): Thread[] =>
  THREADS.filter((t) => t.board === slug);

export const getThread = (id: string): Thread | undefined =>
  THREADS.find((t) => t.id === id);

export const threadCount = (slug: string): number => threadsByBoard(slug).length;

// 最新讨论：原型里直接按定义顺序取前 n 条
export const latestThreads = (n: number): Thread[] => THREADS.slice(0, n);
