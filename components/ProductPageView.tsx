import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDetailView from "@/components/ProductDetailView";
import type { Product } from "@/lib/content/types";

export default function ProductPageView({ product, lang }: { product: Product; lang: Lang }) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: { en: "Products", zh: "產品" }, href: "/products" },
          { label: product.name, href: `/products/${product.slug}` },
        ]}
      />
      <ProductDetailView product={product} locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
