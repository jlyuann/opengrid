import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Explore } from "@/components/Explore";
import { Join } from "@/components/Join";

// 首页 = 理念/开篇：首屏 + 理念三支柱 + 四大板块入口 + 加入。
// 导航 / 页脚 / 取色器在 app/layout.tsx，全站共享。
export default function Home() {
  return (
    <main>
      <Hero />
      <Vision />
      <Explore />
      <Join />
    </main>
  );
}
