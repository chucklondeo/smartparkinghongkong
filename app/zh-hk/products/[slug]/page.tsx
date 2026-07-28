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
    locale: "zh",
    path: `/products/${product.slug}`,
    title: product.name.zh,
    description: product.tagline.zh,
  });
}

export default function ProductDetailPageZh({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return <ProductPageView product={product} lang="zh" />;
}
