import type { Metadata } from "next";
import ProductsView from "@/components/ProductsView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/products",
  title: "產品",
  description: "AI 車牌識別相機、24V 快速伺服道閘、停車場邊緣控制盒、自助繳費終端及人行通道閘，適用於香港停車場及樓宇。",
});

export default function ProductsPageZh() {
  return <ProductsView lang="zh" />;
}
