import Link from "next/link";
import { ArrowRight, Download, FileWarning } from "lucide-react";
import type { Product } from "@/lib/content/types";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";

export default function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <div className="glass-card rounded-2xl border border-white/10 hover:border-gold-glow/30 transition-colors p-6 flex flex-col">
      <div className="aspect-[4/3] rounded-xl bg-dark-700 border border-white/5 mb-5 flex items-center justify-center">
        <span className="text-xs text-white/25 italic px-4 text-center">
          {locale === "zh" ? "產品圖片籌備中" : "Product photo required"}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-1">{product.name[locale]}</h3>
      {product.model && <p className="text-xs text-gold-400 font-mono mb-2">{product.model}</p>}
      <p className="text-sm text-white/45 leading-relaxed mb-4">{product.tagline[locale]}</p>

      <ul className="space-y-1.5 mb-5">
        {product.keyPoints[locale].slice(0, 3).map((point) => (
          <li key={point} className="text-xs text-white/50 flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-gold-glow mt-1.5 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
        <Link
          href={localeHref(locale, `/products/${product.slug}`)}
          className="text-sm font-semibold text-gold-400 hover:gap-2.5 inline-flex items-center gap-1.5 transition-all"
        >
          {locale === "en" ? "View Details" : "查看詳情"}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        {product.datasheetUrl ? (
          <a href={product.datasheetUrl} className="text-xs text-white/40 hover:text-white/70 inline-flex items-center gap-1" download>
            <Download className="w-3 h-3" />
            {locale === "en" ? "Datasheet" : "產品資料"}
          </a>
        ) : (
          <span className="text-xs text-white/25 inline-flex items-center gap-1 italic">
            <FileWarning className="w-3 h-3" />
            {locale === "en" ? "Datasheet coming soon" : "產品資料籌備中"}
          </span>
        )}
        <Link
          href={localeHref(locale, `/contact?product=${product.slug}`)}
          className="text-xs text-white/40 hover:text-gold-400 ml-auto"
        >
          {locale === "en" ? "Request a Quote" : "索取報價"}
        </Link>
      </div>
    </div>
  );
}
