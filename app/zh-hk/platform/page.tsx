import type { Metadata } from "next";
import PlatformView from "@/components/PlatformView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/platform",
  title: "停車管理平台",
  description: "雲端停車管理平台，涵蓋車輛出入記錄、收入報表、月租管理、訪客管理、黑白名單及多場地管理，並具備本地邊緣備援能力。",
});

export default function PlatformPageZh() {
  return <PlatformView lang="zh" />;
}
