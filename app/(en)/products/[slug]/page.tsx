import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageView from "@/components/ProductPageView";
import { products, getProductBySlug } from "@/lib/content/products";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return buildMetadata({
    locale: "en",
    path: `/products/${product.slug}`,
    title: product.name.en,
    description: product.tagline.en,
  });
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return <ProductPageView product={product} lang="en" />;
}
