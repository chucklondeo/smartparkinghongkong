import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/content/products";
import type { ProductCategory } from "@/lib/content/types";

const categories: { key: ProductCategory; label: { en: string; zh: string } }[] = [
  { key: "parking-hardware", label: { en: "Parking Hardware", zh: "停車硬件" } },
  { key: "parking-software", label: { en: "Parking Software", zh: "停車軟件" } },
  { key: "payment-control", label: { en: "Payment & Control", zh: "支付與控制" } },
  { key: "pedestrian-access", label: { en: "Pedestrian Access", zh: "人行門禁" } },
];

export default function ProductsView({ lang }: { lang: Lang }) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <PageHero
        locale={locale}
        crumbs={[{ label: { en: "Products", zh: "產品" }, href: "/products" }]}
        eyebrow={{ en: "Product Center", zh: "產品中心" }}
        title={lang === "en" ? "Hardware & Software for Hong Kong Car Parks" : "為香港停車場而設的軟硬件產品"}
        subtitle={
          lang === "en"
            ? "Every product is designed to work together as one system, and can also integrate with your existing equipment."
            : "每項產品均設計為協同運作的單一系統，同時可與您現有設備整合。"
        }
      />
      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat.key);
        if (items.length === 0) return null;
        return (
          <section key={cat.key} className="section-padding bg-dark-800 odd:bg-dark-800 even:bg-dark-900">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-white mb-8">{cat.label[lang]}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <SiteFooter locale={locale} />
    </main>
  );
}
