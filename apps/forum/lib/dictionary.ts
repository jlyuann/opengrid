// ============================================================
// 论坛站双语文案（中 / 英）。UI 文案与板块信息放这里（结构性内容）。
// 帖子 / 回帖等「假数据」放 forum-data.ts（原型阶段以中文为主）。
// ForumContent 类型确保中英两份结构对称，少写一项会报错。
// ============================================================

import type { Lang } from "@opengrid/ui";

type Board = { slug: string; name: string; desc: string };
// 侧边栏分类（Discord 式）：每个分类下挂若干板块（按 slug 引用 boards）。
type Category = { id: string; name: string; boards: string[] };

export type ForumContent = {
  brand: string;
  tagline: string;
  nav: { home: string; login: string };
  langToggle: string; // 切换到「另一种语言」时按钮显示的字
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    boardsTitle: string;
    latestTitle: string;
  };
  boards: Board[]; // 4 个板块（结构性，双语）
  categories: Category[]; // 侧边栏分类分组
  board: {
    threadsLabel: string;
    repliesLabel: string;
    newThread: string;
    newThreadHint: string;
    back: string;
    empty: string;
  };
  thread: {
    repliesTitle: string;
    replyPlaceholder: string;
    replyButton: string;
    loginNote: string;
    backToBoard: string;
  };
  meta: { by: string; replies: string };
  footer: { madeWith: string; rights: string };
  // 取色器文案（传给共享 ThemePicker）
  theme: {
    title: string;
    subtitle: string;
    hint: string;
    aria: string;
    defaultLabel: string;
  };
};

export const copy: Record<Lang, ForumContent> = {
  zh: {
    brand: "OpenGrid 社区",
    tagline: "卡丁车爱好者的聚集地——从第一次下场，到赛道上的老朋友。",
    nav: { home: "首页", login: "登录" },
    langToggle: "EN",
    home: {
      eyebrow: "卡丁车社区",
      title: "找到同好，一起下场",
      subtitle:
        "提问、约赛、聊场地、淘装备——卡丁车的一切，都在这里发生。挑一个板块，加入对话。",
      boardsTitle: "板块",
      latestTitle: "最新讨论",
    },
    boards: [
      {
        slug: "qa",
        name: "问答区",
        desc: "提问与解答，新手到老手都欢迎——任何关于卡丁车的疑问都能在这里聊。",
      },
      {
        slug: "meetup",
        name: "约赛 · 组局",
        desc: "约人一起下场跑卡丁车，发起或报名身边的活动。",
      },
      {
        slug: "tracks",
        name: "场地点评",
        desc: "各地卡丁车场的位置、价格与真实体验，帮你找到「去哪儿开」。",
      },
      {
        slug: "gear",
        name: "装备交流 · 二手",
        desc: "头盔、赛服、手套的讨论与二手转让，先体验再拥有。",
      },
    ],
    categories: [
      { id: "discuss", name: "讨论", boards: ["qa", "meetup"] },
      { id: "field", name: "场地 · 装备", boards: ["tracks", "gear"] },
    ],
    board: {
      threadsLabel: "帖",
      repliesLabel: "回复",
      newThread: "发帖",
      newThreadHint: "登录后即可发帖",
      back: "返回全部板块",
      empty: "这个板块还没有帖子——成为第一个发帖的人吧。",
    },
    thread: {
      repliesTitle: "全部回复",
      replyPlaceholder: "写下你的回复……",
      replyButton: "回复",
      loginNote: "登录后即可参与讨论（功能开发中）",
      backToBoard: "返回板块",
    },
    meta: { by: "由", replies: "回复" },
    footer: {
      madeWith: "由一群卡丁车爱好者用热爱搭建。",
      rights: "OpenGrid 社区 · 原型演示",
    },
    theme: {
      title: "车队配色",
      subtitle: "选一支车队，整页随之换色。",
      hint: "你的选择会被记住。",
      aria: "打开车队配色选择器",
      defaultLabel: "默认",
    },
  },
  en: {
    brand: "OpenGrid Community",
    tagline:
      "Where karting fans gather — from your very first session to old friends on track.",
    nav: { home: "Home", login: "Log in" },
    langToggle: "中",
    home: {
      eyebrow: "Karting community",
      title: "Find your people. Hit the track.",
      subtitle:
        "Ask, race together, talk tracks, trade gear — everything karting happens here. Pick a board and join the conversation.",
      boardsTitle: "Boards",
      latestTitle: "Latest discussions",
    },
    boards: [
      {
        slug: "qa",
        name: "Q&A",
        desc: "Questions and answers — beginners and veterans alike. Anything karting goes here.",
      },
      {
        slug: "meetup",
        name: "Meetups",
        desc: "Find people to hit the track with; start or join an outing near you.",
      },
      {
        slug: "tracks",
        name: "Track Reviews",
        desc: "Locations, prices and honest reviews of kart tracks — find where to drive.",
      },
      {
        slug: "gear",
        name: "Gear & Trade",
        desc: "Helmet, suit and glove talk plus second-hand trading — try before you own.",
      },
    ],
    categories: [
      { id: "discuss", name: "Discussion", boards: ["qa", "meetup"] },
      { id: "field", name: "Tracks & Gear", boards: ["tracks", "gear"] },
    ],
    board: {
      threadsLabel: "threads",
      repliesLabel: "replies",
      newThread: "New thread",
      newThreadHint: "Log in to post",
      back: "Back to all boards",
      empty: "No threads here yet — be the first to post.",
    },
    thread: {
      repliesTitle: "All replies",
      replyPlaceholder: "Write your reply…",
      replyButton: "Reply",
      loginNote: "Log in to join the discussion (coming soon)",
      backToBoard: "Back to board",
    },
    meta: { by: "by", replies: "replies" },
    footer: {
      madeWith: "Built by a few karting fans, out of love for the sport.",
      rights: "OpenGrid Community · Prototype demo",
    },
    theme: {
      title: "Team colours",
      subtitle: "Pick a team; the whole page recolours.",
      hint: "Your choice is remembered.",
      aria: "Open team colour picker",
      defaultLabel: "Default",
    },
  },
};
