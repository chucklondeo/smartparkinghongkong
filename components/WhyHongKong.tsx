"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Layers, DollarSign, Wallet, FileBarChart, ShieldCheck } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

const icons = [MapPin, Layers, DollarSign, Wallet, FileBarChart, ShieldCheck];

interface Props { lang: Lang }

export default function WhyHongKong({ lang }: Props) {
  const t = translations[lang].whyHK;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-hk" className="section-padding relative overflow-hidden bg-dark-900">
      {/* HK Skyline silhouette (CSS only) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 200" className="absolute bottom-0 w-full opacity-[0.04]" preserveAspectRatio="none">
          <path d="M0,200 L0,140 L40,140 L40,100 L60,100 L60,120 L80,120 L80,60 L100,60 L100,40 L120,40 L120,70 L140,70 L140,50 L160,50 L160,80 L180,80 L180,30 L200,30 L200,50 L220,50 L220,90 L240,90 L240,70 L260,70 L260,110 L280,110 L280,80 L300,80 L300,100 L320,100 L320,60 L340,60 L340,40 L360,40 L360,55 L380,55 L380,70 L400,70 L400,50 L420,50 L420,100 L440,100 L440,80 L460,80 L460,110 L480,110 L480,60 L500,60 L500,80 L520,80 L520,90 L540,90 L540,50 L560,50 L560,30 L580,30 L580,55 L600,55 L600,80 L620,80 L620,100 L640,100 L640,70 L660,70 L660,90 L680,90 L680,110 L700,110 L700,80 L720,80 L720,50 L740,50 L740,65 L760,65 L760,85 L780,85 L780,110 L800,110 L800,75 L820,75 L820,55 L840,55 L840,90 L860,90 L860,70 L880,70 L880,100 L900,100 L900,80 L920,80 L920,50 L940,50 L940,30 L960,30 L960,50 L980,50 L980,70 L1000,70 L1000,90 L1020,90 L1020,110 L1040,110 L1040,80 L1060,80 L1060,55 L1080,55 L1080,75 L1100,75 L1100,100 L1120,100 L1120,80 L1140,80 L1140,60 L1160,60 L1160,40 L1180,40 L1180,65 L1200,65 L1200,85 L1220,85 L1220,105 L1240,105 L1240,80 L1260,80 L1260,100 L1280,100 L1280,120 L1300,120 L1300,140 L1440,140 L1440,200 Z"
            fill="white" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-neon-blue/8 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-neon-silver/20">
            <span className="text-xs">🇭🇰</span>
            <span className="text-xs font-medium text-neon-silver/90 tracking-widest uppercase">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient-silver">{t.title} </span>
            <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7 border border-white/8 hover:border-neon-blue/25 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue/20 transition-colors">
                    <Icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
