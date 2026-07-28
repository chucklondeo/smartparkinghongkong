import type { Metadata } from "next";
import ApplicationsView from "@/components/ApplicationsView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/applications",
  title: "Application Scenarios",
  description: "Where Londeo Access smart parking and access control products fit — shopping malls, residential estates, commercial buildings, property managers and government car parks.",
});

export default function ApplicationsPage() {
  return <ApplicationsView lang="en" />;
}
