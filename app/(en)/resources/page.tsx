import type { Metadata } from "next";
import ResourcesView from "@/components/ResourcesView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/resources",
  title: "Resources",
  description: "Product datasheets, downloads and frequently asked questions for Londeo Access smart parking and access control products.",
});

export default function ResourcesPage() {
  return <ResourcesView lang="en" />;
}
