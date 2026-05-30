import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AboutIntro } from "@/components/AboutIntro";
import { copy } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: `${copy.zh.sections.about.label} · OpenGrid`,
};

// 关于 OpenGrid：reference 式小板块，网站由来 / 介绍（内容稍后补充）
export default function AboutPage() {
  return (
    <main>
      <PageHeader section="about" />
      <AboutIntro />
    </main>
  );
}
