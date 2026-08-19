import type { Metadata } from "next";
import AboutView from "@/components/AboutView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/about",
  title: "About Londeo Access",
  description: "Londeo Access designs and integrates smart parking and access control systems for Hong Kong, with local installation, commissioning, maintenance and support.",
});

export default function AboutPage() {
  return <AboutView lang="en" />;
}
