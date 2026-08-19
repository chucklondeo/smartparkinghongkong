import type { Metadata } from "next";
import ApplicationsView from "@/components/ApplicationsView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/applications",
  title: "應用場景",
  description: "Londeo Access 智慧停車及門禁產品的應用場景——商場、住宅屋苑、商業大廈、物業管理公司及政府停車場。",
});

export default function ApplicationsPageZh() {
  return <ApplicationsView lang="zh" />;
}
