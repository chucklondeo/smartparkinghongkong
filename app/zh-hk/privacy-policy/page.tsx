import type { Metadata } from "next";
import LegalPageView from "@/components/LegalPageView";
import { buildMetadata } from "@/lib/seo";
import { legalPages } from "@/lib/content/pages";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/privacy-policy",
  title: "私隱政策",
  description: "Londeo Access 如何收集、使用及處理透過本網站提交的資料。",
});

export default function PrivacyPolicyPageZh() {
  const p = legalPages.privacy;
  return <LegalPageView lang="zh" title={p.title} updated={p.updated} sections={p.sections} path="/privacy-policy" />;
}
