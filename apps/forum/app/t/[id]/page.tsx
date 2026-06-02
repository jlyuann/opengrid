import { ThreadView } from "@/components/ThreadView";

// 帖子 id 来自数据库、随发帖动态产生，不预生成静态参数。
// Next 16：动态路由的 params 是 Promise，需 await。
export default async function ThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ThreadView id={id} />;
}
