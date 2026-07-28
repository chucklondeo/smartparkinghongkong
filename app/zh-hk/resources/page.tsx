import type { Metadata } from "next";
import ResourcesView from "@/components/ResourcesView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/resources",
  title: "資源中心",
  description: "Londeo Access 智慧停車及門禁產品的產品資料、下載及常見問題。",
});

export default function ResourcesPageZh() {
  return <ResourcesView lang="zh" />;
}
