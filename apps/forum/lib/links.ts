// 跨站链接：门户站是「另一个独立站点」（类比 chatgpt.com → openai.com）。
// 与门户站的 lib/links.ts 对称：用绝对地址而非站内路由。
// 开发期默认指向本地 3000；部署后用环境变量 NEXT_PUBLIC_PORTAL_URL 指向门户正式域名。
export const PORTAL_URL =
  process.env.NEXT_PUBLIC_PORTAL_URL ?? "http://localhost:3000";
