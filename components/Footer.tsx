"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LondeoLogo from "@/components/LondeoLogo";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

interface Props { lang: Lang }

export default function Footer({ lang }: Props) {
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const sections = [
    { title: t.solutions, links: t.links.solutions, href: "#solutions" },
    { title: t.platform, links: t.links.platform, href: "#platform" },
    { title: t.company, links: t.links.company, href: "#about" },
  ];

  return (
    <footer className="relative overflow-hidden bg-dark-900 border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-neon-blue/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-start mb-5 group hover:opacity-90 transition-opacity"
            >
              <LondeoLogo height={38} variant="light" />
            </button>
            <p className="text-sm text-white/35 leading-relaxed max-w-[220px] mb-6">
              {t.tagline}
            </p>
            {/* Website */}
            <p className="text-xs text-neon-blue/50 mb-4 font-mono">www.londeoaccess.com.hk</p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {["Octopus 八達通", "FPS 轉數快", "ISO 27001"].map((badge) => (
                <span key={badge} className="text-xs glass px-2 py-1 rounded border border-white/10 text-white/30">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">{sec.title}</h4>
              <ul className="space-y-3">
                {sec.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(sec.href)}
                      className="text-sm text-white/45 hover:text-neon-blue transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl border border-neon-blue/20 p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {lang === "en" ? "Ready to modernise your car park?" : "準備好為您的停車場升級了嗎？"}
            </h3>
            <p className="text-white/40 text-sm">
              {lang === "en" ? "Most clients go live in 4–6 weeks." : "大多數客戶可在 4–6 週內正式上線。"}
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-neon-solid px-7 py-3 rounded-xl font-bold whitespace-nowrap flex items-center gap-2 text-sm"
          >
            {lang === "en" ? "Book a Demo" : "預約示範"}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/20">
            © {year} Londeo Smart Parking Limited. {t.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.londeoaccess.com.hk" className="text-xs text-white/20 hover:text-neon-blue transition-colors font-mono">
              londeoaccess.com.hk
            </a>
            <button className="text-xs text-white/20 hover:text-white/50 transition-colors">{t.privacy}</button>
            <button className="text-xs text-white/20 hover:text-white/50 transition-colors">{t.terms}</button>
            <span className="text-xs text-white/10">🇭🇰 Hong Kong</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
