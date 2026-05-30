// 跨站链接。论坛是「另一个独立站点」（类比 openai.com → chatgpt.com），
// 因此用绝对地址而非站内路由。开发期默认指向本地 3001；
// 部署后通过环境变量 NEXT_PUBLIC_FORUM_URL 指向论坛正式域名即可。
export const FORUM_URL =
  process.env.NEXT_PUBLIC_FORUM_URL ?? "http://localhost:3001";
