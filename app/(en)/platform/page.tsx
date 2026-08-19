import type { Metadata } from "next";
import PlatformView from "@/components/PlatformView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/platform",
  title: "Parking Management Platform",
  description:
    "Cloud parking management platform with vehicle entry/exit records, revenue reporting, monthly permits, visitor management, black/white lists and multi-site management, backed by local edge resilience.",
});

export default function PlatformPage() {
  return <PlatformView lang="en" />;
}
