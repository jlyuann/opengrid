import { notFound } from "next/navigation";
import { copy } from "@/lib/dictionary";
import { BoardView } from "@/components/BoardView";

// 有效板块 slug（用任一语言的板块列表即可，slug 与语言无关）。
const SLUGS = copy.zh.boards.map((b) => b.slug);

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

// Next 16：动态路由的 params 是 Promise，需 await。
export default async function BoardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <BoardView slug={slug} />;
}
