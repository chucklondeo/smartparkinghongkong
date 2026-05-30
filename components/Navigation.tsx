"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LondeoLogo from "@/components/LondeoLogo";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Navigation({ lang, setLang }: Props) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.solutions, href: "#solutions" },
    { label: t.platform, href: "#platform" },
    { label: t.hardware, href: "#hardware" },
    { label: t.whyHK, href: "#why-hk" },
    { label: t.about, href: "#about" },
    { label: t.contact, href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
          >
            <LondeoLogo height={40} variant="light" />
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="px-3 py-1.5 text-xs font-medium text-white/50 hover:text-neon-blue border border-white/10 hover:border-neon-blue/40 rounded-lg transition-all duration-200"
            >
              {t.language}
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-neon-solid px-5 py-2 rounded-lg text-sm font-semibold"
            >
              {t.bookDemo}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="px-2 py-1 text-xs text-white/50 border border-white/10 rounded"
            >
              {t.language}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white/60 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-white/5 px-6 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="py-3 text-left text-white/70 hover:text-neon-blue transition-colors border-b border-white/5"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-neon-solid mt-3 px-5 py-3 rounded-lg text-sm font-semibold text-center"
              >
                {t.bookDemo}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
