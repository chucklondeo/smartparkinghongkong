"use client";
import Link from "next/link";
import { ArrowRight, Download, MessageCircle, FileWarning } from "lucide-react";
import type { Product } from "@/lib/content/types";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import { products, getProductBySlug } from "@/lib/content/products";
import { buildWhatsAppLink, whatsAppEngineerMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import ContentRequired from "@/components/ContentRequired";
import JsonLd from "@/components/JsonLd";
import { productJsonLd, faqJsonLd } from "@/lib/structured-data";

export default function ProductDetailView({ product, locale }: { product: Product; locale: Locale }) {
  const related = product.relatedSlugs.map(getProductBySlug).filter((p): p is Product => Boolean(p));

  return (
    <div className="bg-dark-900">
      <JsonLd data={productJsonLd(product, locale)} />
      {product.faqs.length > 0 && <JsonLd data={faqJsonLd(product.faqs, locale)} />}

      {/* Hero */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black mb-2 text-gradient-silver">{product.name[locale]}</h1>
            {product.model && <p className="text-sm text-gold-400 font-mono mb-4">{product.model}</p>}
            <p className="text-lg text-white/50 leading-relaxed mb-8">{product.tagline[locale]}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={localeHref(locale, `/contact?product=${product.slug}&type=quote`)}
                onClick={() => trackEvent("quote_start", { product: product.slug })}
                className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
              >
                {locale === "en" ? "Request a Quote" : "索取報價"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {product.datasheetUrl ? (
                <a
                  href={product.datasheetUrl}
                  download
                  onClick={() => trackEvent("datasheet_download", { product: product.slug })}
                  className="btn-neon px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {locale === "en" ? "Download Datasheet" : "下載產品資料"}
                </a>
              ) : (
                <span className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 border border-white/10 text-white/30 italic">
                  <FileWarning className="w-4 h-4" />
                  {locale === "en" ? "Datasheet coming soon" : "產品資料籌備中"}
                </span>
              )}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center">
            <span className="text-sm text-white/25 italic px-6 text-center">
              {locale === "en" ? "Product photo required" : "產品圖片籌備中"}
            </span>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">{locale === "en" ? "Core Advantages" : "核心優勢"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.highlights.map((h) => (
              <div key={h.title[locale]} className="glass-card rounded-2xl p-6 border border-white/8">
                <h3 className="text-base font-bold text-white mb-2">{h.title[locale]}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{h.desc[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding bg-dark-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">{locale === "en" ? "Technical Specifications" : "技術規格"}</h2>
          <div className="glass-card rounded-2xl border border-white/8 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((row, i) => (
                  <tr key={row.label[locale]} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="px-5 py-3 text-white/50 w-1/2 sm:w-2/5 align-top">{row.label[locale]}</td>
                    <td className="px-5 py-3 text-white font-medium align-top">
                      {row.value ? row.value[locale] : <ContentRequired locale={locale} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-base font-bold text-white mb-2">{locale === "en" ? "System Compatibility" : "系統兼容性"}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{product.compatibility[locale]}</p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">{locale === "en" ? "Application Scenarios" : "應用場景"}</h2>
          <div className="flex flex-wrap gap-3">
            {product.applications[locale].map((a) => (
              <span key={a} className="glass px-4 py-2 rounded-full text-sm text-white/60 border border-white/10">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Video slot */}
      <section className="section-padding bg-dark-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">{locale === "en" ? "Installation & Operation" : "安裝及操作示範"}</h2>
          {product.videoUrl ? (
            <video controls className="w-full rounded-2xl border border-white/10" src={product.videoUrl} />
          ) : (
            <div className="aspect-video rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center">
              <span className="text-sm text-white/25 italic">
                {locale === "en" ? "Installation/operation video coming soon" : "安裝／操作示範影片籌備中"}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {product.faqs.length > 0 && (
        <section className="section-padding bg-dark-800">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-6">{locale === "en" ? "Frequently Asked Questions" : "常見問題"}</h2>
            <div className="space-y-4">
              {product.faqs.map((faq) => (
                <div key={faq.q[locale]} className="glass-card rounded-xl p-5 border border-white/8">
                  <p className="font-semibold text-white mb-2">{faq.q[locale]}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{faq.a[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="section-padding bg-dark-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-6">{locale === "en" ? "Related Products" : "相關產品"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={localeHref(locale, `/products/${p.slug}`)}
                  className="glass-card rounded-xl p-5 border border-white/8 hover:border-gold-glow/30 transition-colors"
                >
                  <p className="font-semibold text-white mb-1">{p.name[locale]}</p>
                  <p className="text-xs text-white/45">{p.tagline[locale]}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-4xl mx-auto px-6 glass-card rounded-2xl border border-gold-glow/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {locale === "en" ? `Ready to discuss ${product.name.en}?` : `準備好查詢 ${product.name.zh} 了嗎？`}
            </h3>
            <p className="text-white/40 text-sm">
              {locale === "en" ? "Talk to our engineering team about your project." : "歡迎與我們的工程團隊查詢您的項目需要。"}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href={localeHref(locale, `/contact?product=${product.slug}&type=quote`)}
              className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold"
            >
              {locale === "en" ? "Request a Quote" : "索取報價"}
            </Link>
            <a
              href={buildWhatsAppLink(whatsAppEngineerMessage(locale, product.name[locale]))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { source: "product_detail", product: product.slug })}
              className="btn-neon px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {locale === "en" ? "WhatsApp Engineer" : "WhatsApp 查詢"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function getAllProductSlugs() {
  return products.map((p) => ({ slug: p.slug }));
}
