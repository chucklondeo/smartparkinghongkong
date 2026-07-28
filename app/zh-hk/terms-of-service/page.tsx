import type { Metadata } from "next";
import LegalPageView from "@/components/LegalPageView";
import { buildMetadata } from "@/lib/seo";
import { legalPages } from "@/lib/content/pages";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/terms-of-service",
  title: "服務條款",
  description: "Londeo Access 網站的服務條款。",
});

export default function TermsOfServicePageZh() {
  const t = legalPages.terms;
  return <LegalPageView lang="zh" title={t.title} updated={t.updated} sections={t.sections} path="/terms-of-service" />;
}
