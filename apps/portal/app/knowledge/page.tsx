import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Guide } from "@/components/Guide";
import { RacingTypes } from "@/components/RacingTypes";
import { copy } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: `${copy.zh.sections.knowledge.label} · OpenGrid`,
};

// 赛车知识：页头 + F1 基础（复用 Guide）+ 其他赛车类型（RacingTypes，占位）
export default function KnowledgePage() {
  return (
    <main>
      <PageHeader section="knowledge" />
      <Guide />
      <RacingTypes />
    </main>
  );
}
