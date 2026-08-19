"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, GitBranch, MonitorCheck, CreditCard, Phone, KeyRound, Cpu } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

const icons = [Camera, GitBranch, MonitorCheck, CreditCard, Phone, KeyRound, Cpu];

interface Props { lang: Lang }

export default function HardwareIntegration({ lang }: Props) {
  const t = translations[lang].hardware;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hardware" className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-neon-cyan/20">
            <span className="w-2 h-2 bg-neon-cyan rounded-full" />
            <span className="text-xs font-medium text-neon-cyan/90 tracking-widest uppercase">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient-silver">{t.title} </span>
            <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Central hub diagram */}
        <div className="relative">
          {/* Center hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="glass-card border border-neon-blue/30 rounded-2xl px-10 py-6 text-center relative glow-blue-sm">
              <div className="absolute inset-0 bg-neon-blue/5 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-neon-blue/30">
                  <Cpu className="w-6 h-6 text-neon-blue" />
                </div>
                <p className="font-bold text-white text-lg">Londeo Platform</p>
                <p className="text-xs text-neon-blue mt-1">Cloud + Edge Controller</p>
              </div>
            </div>
          </motion.div>

          {/* Hardware cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {t.items.slice(0, -1).map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card rounded-2xl p-5 border border-neon-cyan/15 hover:border-neon-cyan/35 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>

                  {/* Connector dot */}
                  <div className="mt-4 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400/70">Compatible</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Integration note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-neon-blue/15">
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            <span className="text-sm text-white/50">
              {lang === "en"
                ? "Open API for integration with existing equipment. Compatibility is confirmed per project during a site assessment."
                : "開放 API 可與現有設備整合，具體兼容性須經現場勘察後確認。"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
