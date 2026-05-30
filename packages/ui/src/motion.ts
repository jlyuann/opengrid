// 全站统一的按钮交互动效。
// 目标手感：跟手（高刚度 → 快速响应）、有弹性（spring）、但不 Q 弹（阻尼压住过度回弹）。
// 所有可点击按钮共用这一套，想整体调手感只改这里。

import type { Transition } from "framer-motion";

// 弹性但克制的 spring：松开后轻轻弹回，几乎不来回晃。
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 26,
  mass: 0.7,
};

// 按钮通用交互：悬停轻微放大，按下明显回缩（跟手的"按下去"反馈）。
export const buttonMotion = {
  whileHover: { scale: 1.045 },
  whileTap: { scale: 0.94 },
  transition: springSnappy,
} as const;
