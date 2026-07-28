import type { Metadata } from "next";
import ProductsView from "@/components/ProductsView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/products",
  title: "Products",
  description:
    "AI LPR cameras, 24V fast servo barrier gates, parking edge controllers, payment kiosks and pedestrian access gates for Hong Kong car parks and buildings.",
});

export default function ProductsPage() {
  return <ProductsView lang="en" />;
}
