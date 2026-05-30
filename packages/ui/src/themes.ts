// 2026 赛季 F1 全部 11 支车队 + OpenGrid 默认白。
// 每个主题提供一个色值 accent；两种渲染模式：
//   - 默认（fill）：accent 写入 --page-bg，整页满色铺底，文字按亮度自动黑/白。
//   - glow：高饱和红等大面积铺满会晃眼，改为「近黑底 + accent 辉光」（白字）。
// 注：Audi（接手 Sauber）用黑白配（近黑底 + 白字，贴合其钛黑涂装）；
//     Cadillac（2026 全新第 11 队）金色为新涂装的最接近近似色，可随时微调。

export type Theme = {
  id: string;
  label: string; // 车队名（专有名词，中英一致）
  accent: string; // 品牌识别色：满色主题作背景；glow 主题作辉光；始终作取色块颜色
  mode?: "glow"; // 省略 = 满色铺底；"glow" = 近黑底 + 辉光
  bg?: string; // 显式背景色（覆盖由 accent 自动推导）
  fg?: string; // 显式文字色（覆盖自动黑/白反差）—— bg + fg 成对使用
};

export const DEFAULT_THEME_ID = "opengrid";

export const THEMES: Theme[] = [
  { id: "opengrid", label: "OpenGrid", accent: "#ffffff" },
  { id: "mclaren", label: "McLaren", accent: "#ff8000" },
  { id: "ferrari", label: "Ferrari", accent: "#e8002d", mode: "glow" },
  { id: "mercedes", label: "Mercedes", accent: "#00d2be" },
  { id: "redbull", label: "Red Bull", accent: "#2747b0" },
  { id: "williams", label: "Williams", accent: "#00a3e0" },
  { id: "astonmartin", label: "Aston Martin", accent: "#229971" },
  { id: "alpine", label: "Alpine", accent: "#ff87bc" },
  { id: "racingbulls", label: "Racing Bulls", accent: "#6692ff" },
  { id: "haas", label: "Haas", accent: "#e03a3e", bg: "#0a0a0c", fg: "#c4202c" },
  { id: "audi", label: "Audi", accent: "#0c0c0e" },
  { id: "cadillac", label: "Cadillac", accent: "#b8893b" },
];

export const getTheme = (id: string): Theme =>
  THEMES.find((t) => t.id === id) ?? THEMES[0];
