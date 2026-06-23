// @opengrid/ui —— 跨站共享的设计系统（门户站 / 论坛站 / 未来小程序·App 共用）。
// 只放「与具体内容无关」的设计与机制：动效、语言状态机、通用原语组件。
// 各站自己的文案（dictionary）与 useCopy 留在各 app，不进这里。

// 统一动效手感
export { springSnappy, buttonMotion } from "./motion";

// 语言状态机（仅状态，不含文案）
export { LanguageProvider, useLanguage, type Lang } from "./i18n";

// 通用原语组件
export { Reveal } from "./Reveal";
export {
  Reader,
  ArticleEyebrow,
  ArticleTitle,
  ArticleLead,
  SectionLabel,
  ArticleP,
} from "./Reader";
