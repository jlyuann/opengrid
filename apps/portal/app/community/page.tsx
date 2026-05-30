import { redirect } from "next/navigation";
import { FORUM_URL } from "@/lib/links";

// 车友社区 = 论坛站（独立站点）。直接命中 /community 时，重定向到论坛。
export default function CommunityPage() {
  redirect(FORUM_URL);
}
