import { notFound } from "next/navigation";
import { THREADS, getThread } from "@/lib/forum-data";
import { ThreadView } from "@/components/ThreadView";

export function generateStaticParams() {
  return THREADS.map((thread) => ({ id: thread.id }));
}

// Next 16：动态路由的 params 是 Promise，需 await。
export default async function ThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const thread = getThread(id);
  if (!thread) notFound();
  return <ThreadView thread={thread} />;
}
