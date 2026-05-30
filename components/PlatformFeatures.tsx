"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CreditCard, Smartphone, QrCode, Wifi, Car, Calendar,
  Clock, Shield, LayoutDashboard, BarChart3, Cloud, Monitor, Code2
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

const paymentIcons = [QrCode, Smartphone, CreditCard, Smartphone, Smartphone];
const opsIcons = [Car, Calendar, Clock, Shield, LayoutDashboard, BarChart3, Cloud, Monitor, Code2];

interface Props { lang: Lang }

export default function PlatformFeatures({ lang }: Props) {
  const t = translations[lang].platform;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="platform" className="section-padding relative overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-neon-blue/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-neon-purple/8 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-neon-blue/20">
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            <span className="text-xs font-medium text-neon-blue/90 tracking-widest uppercase">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient-silver">{t.title} </span>
            <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Payment integration block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl border border-neon-blue/20 p-8 mb-8 relative overflow-hidden"
        >
          {/* Decorative glow inside */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-white">{t.payments.title}</h3>
              <span className="glass px-3 py-1 rounded-full text-xs text-neon-blue border border-neon-blue/20 w-fit">
                {t.payments.subtitle}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
              {t.payments.items.map((item, i) => {
                const Icon = paymentIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.04 }}
                    className="glass rounded-xl p-4 border border-white/5 hover:border-neon-blue/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center mb-3 group-hover:bg-neon-blue/20 transition-colors">
                      <Icon className="w-5 h-5 text-neon-blue" />
                    </div>
                    <p className="text-sm font-semibold text-white mb-1">{item.name}</p>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Ops features grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="glass-card rounded-3xl border border-neon-purple/20 p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
              <h3 className="text-2xl font-bold text-white">{t.ops.title}</h3>
              <span className="glass px-3 py-1 rounded-full text-xs text-neon-purple border border-neon-purple/20 w-fit">
                {t.ops.subtitle}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.ops.items.map((item, i) => {
                const Icon = opsIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/3 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-purple/20 transition-colors">
                      <Icon className="w-5 h-5 text-neon-purple" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{item.name}</p>
                      <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
