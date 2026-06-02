// ============================================================
// 论坛站双语文案（中 / 英）。UI 文案与板块信息放这里（结构性内容）。
// 帖子 / 回帖等动态内容来自 Supabase（见 lib/forum-queries.ts）。
// ForumContent 类型确保中英两份结构对称，少写一项会报错。
// ============================================================

import type { Lang } from "@opengrid/ui";

type Board = { slug: string; name: string; desc: string };
// 侧边栏分类（Discord 式）：每个分类下挂若干板块（按 slug 引用 boards）。
type Category = { id: string; name: string; boards: string[] };

export type ForumContent = {
  brand: string;
  tagline: string;
  nav: { home: string; login: string; backToPortal: string };
  langToggle: string; // 切换到「另一种语言」时按钮显示的字
  loading: string; // 数据加载中的占位文字
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    boardsTitle: string;
    latestTitle: string;
    empty: string; // 还没有任何帖子时
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
    notFound: string; // 帖子不存在/已删除
  };
  // 登录 / 注册页与用户区文案
  auth: {
    loginTitle: string;
    loginSubtitle: string;
    registerTitle: string;
    registerSubtitle: string;
    usernameLabel: string;
    usernameHint: string; // 用户名要求提示
    emailLabel: string;
    passwordLabel: string;
    passwordHint: string; // 密码要求提示
    submitLogin: string;
    submitRegister: string;
    pendingLogin: string; // 登录中…
    pendingRegister: string; // 注册中…
    noAccount: string; // 还没有账号？
    haveAccount: string; // 已有账号？
    toRegister: string; // 去注册
    toLogin: string; // 去登录
    logout: string;
    checkEmail: string; // 注册后提示确认邮件
    backToForum: string;
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
    nav: { home: "首页", login: "登录", backToPortal: "返回主站" },
    langToggle: "EN",
    loading: "加载中……",
    home: {
      eyebrow: "卡丁车社区",
      title: "找到同好，一起下场",
      subtitle:
        "提问、约赛、聊场地、淘装备——卡丁车的一切，都在这里发生。挑一个板块，加入对话。",
      boardsTitle: "板块",
      latestTitle: "最新讨论",
      empty: "还没有任何讨论——去板块里发第一帖吧。",
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
      notFound: "这个帖子不存在，或已被删除。",
    },
    auth: {
      loginTitle: "登录",
      loginSubtitle: "欢迎回来，继续和大家聊卡丁车。",
      registerTitle: "注册",
      registerSubtitle: "加入 OpenGrid 社区，一起下场。",
      usernameLabel: "用户名",
      usernameHint: "2–20 位，发帖时显示的名字",
      emailLabel: "邮箱",
      passwordLabel: "密码",
      passwordHint: "至少 6 位",
      submitLogin: "登录",
      submitRegister: "注册",
      pendingLogin: "登录中……",
      pendingRegister: "注册中……",
      noAccount: "还没有账号？",
      haveAccount: "已有账号？",
      toRegister: "去注册",
      toLogin: "去登录",
      logout: "退出",
      checkEmail: "注册成功！如果开启了邮箱验证，请查收确认邮件；否则可直接登录。",
      backToForum: "返回论坛",
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
    nav: { home: "Home", login: "Log in", backToPortal: "Main site" },
    langToggle: "中",
    loading: "Loading…",
    home: {
      eyebrow: "Karting community",
      title: "Find your people. Hit the track.",
      subtitle:
        "Ask, race together, talk tracks, trade gear — everything karting happens here. Pick a board and join the conversation.",
      boardsTitle: "Boards",
      latestTitle: "Latest discussions",
      empty: "No discussions yet — head into a board and post the first one.",
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
      notFound: "This thread doesn't exist, or has been removed.",
    },
    auth: {
      loginTitle: "Log in",
      loginSubtitle: "Welcome back — let's talk karting.",
      registerTitle: "Sign up",
      registerSubtitle: "Join the OpenGrid community and hit the track.",
      usernameLabel: "Username",
      usernameHint: "2–20 chars, shown on your posts",
      emailLabel: "Email",
      passwordLabel: "Password",
      passwordHint: "At least 6 characters",
      submitLogin: "Log in",
      submitRegister: "Sign up",
      pendingLogin: "Logging in…",
      pendingRegister: "Signing up…",
      noAccount: "No account yet?",
      haveAccount: "Already have an account?",
      toRegister: "Sign up",
      toLogin: "Log in",
      logout: "Log out",
      checkEmail:
        "Account created! If email confirmation is on, check your inbox; otherwise just log in.",
      backToForum: "Back to forum",
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
