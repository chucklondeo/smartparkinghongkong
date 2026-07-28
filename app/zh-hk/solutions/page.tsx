import type { Metadata } from "next";
import SolutionsView from "@/components/SolutionsView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/solutions",
  title: "解決方案",
  description: "為香港商場、住宅屋苑、商業大廈、物業管理公司，以及政府及公共停車場提供的智慧停車及門禁解決方案。",
});

export default function SolutionsPageZh() {
  return <SolutionsView lang="zh" />;
}
