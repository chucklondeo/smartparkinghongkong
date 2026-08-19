import type { Metadata } from "next";
import LegalPageView from "@/components/LegalPageView";
import { buildMetadata } from "@/lib/seo";
import { legalPages } from "@/lib/content/pages";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/terms-of-service",
  title: "Terms of Service",
  description: "Terms of service for the Londeo Access website.",
});

export default function TermsOfServicePage() {
  const t = legalPages.terms;
  return <LegalPageView lang="en" title={t.title} updated={t.updated} sections={t.sections} path="/terms-of-service" />;
}
