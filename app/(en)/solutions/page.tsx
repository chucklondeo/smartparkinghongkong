import type { Metadata } from "next";
import SolutionsView from "@/components/SolutionsView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/solutions",
  title: "Solutions",
  description:
    "Smart parking and access control solutions for shopping malls, residential estates, commercial buildings, property managers, and government and public car parks in Hong Kong.",
});

export default function SolutionsPage() {
  return <SolutionsView lang="en" />;
}
