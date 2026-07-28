import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { products } from "@/lib/content/products";
import { localeHref } from "@/lib/site-config";
import ProductCard from "@/components/ProductCard";

export default function ProductsOverview({ lang }: { lang: Lang }) {
  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-2 text-gradient-silver">
              {lang === "en" ? "Hardware & Software Built as One System" : "軟硬件合一的完整系統"}
            </h2>
            <p className="text-white/45 max-w-xl">
              {lang === "en"
                ? "Cameras, barrier gates, edge controllers, kiosks and pedestrian gates — all designed to work together."
                : "相機、道閘、邊緣控制盒、繳費終端及人行通道閘——全部設計為協同運作。"}
            </p>
          </div>
          <Link
            href={localeHref(lang, "/products")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:gap-2.5 transition-all flex-shrink-0"
          >
            {lang === "en" ? "View All Products" : "查看所有產品"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} locale={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
