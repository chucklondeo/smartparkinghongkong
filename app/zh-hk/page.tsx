import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/",
  title: "Londeo Access | 香港智慧停車及門禁解決方案",
  description:
    "智慧停車管理平台、AI 車牌識別相機、24V 快速伺服道閘、邊緣控制盒、自助繳費終端及人行通道閘——為香港停車場及樓宇提供完整整合方案。",
});

export default function HomeZh() {
  return <HomeView lang="zh" />;
}
