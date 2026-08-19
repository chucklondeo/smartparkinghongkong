import type { ReactNode } from "react";
import type { Locale } from "@/lib/site-config";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Bi } from "@/lib/content/types";

interface Crumb {
  label: Bi;
  href: string;
}

interface Props {
  locale: Locale;
  crumbs: Crumb[];
  eyebrow?: Bi;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHero({ locale, crumbs, eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-dark-900 pb-16">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-glow/8 rounded-full blur-[120px] pointer-events-none" />

      <Breadcrumbs locale={locale} items={crumbs} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-6">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-gold-glow/20">
            <span className="w-2 h-2 bg-gold-glow rounded-full animate-pulse" />
            <span className="text-xs font-medium text-gold-400/90 tracking-widest uppercase">{eyebrow[locale]}</span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
          <span className="text-gradient-silver">{title}</span>
        </h1>
        {subtitle && <p className="max-w-2xl text-white/50 text-lg leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
