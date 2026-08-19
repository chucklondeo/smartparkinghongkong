import type { Metadata } from "next";
import LegalPageView from "@/components/LegalPageView";
import { buildMetadata } from "@/lib/seo";
import { legalPages } from "@/lib/content/pages";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/privacy-policy",
  title: "Privacy Policy",
  description: "How Londeo Access collects, uses and handles information submitted through this website.",
});

export default function PrivacyPolicyPage() {
  const p = legalPages.privacy;
  return <LegalPageView lang="en" title={p.title} updated={p.updated} sections={p.sections} path="/privacy-policy" />;
}
