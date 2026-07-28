"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import LondeoLogo from "@/components/LondeoLogo";
import { primaryNav, bookDemoLabel } from "@/lib/content/nav";
import { translations } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import { toOtherLocalePath } from "@/lib/locale-switch";
import { trackEvent } from "@/lib/analytics";

interface Props {
  locale: Locale;
}

export default function SiteHeader({ locale }: Props) {
  const t = translations[locale].nav;
  const pathname = usePathname() || (locale === "zh" ? "/zh-hk" : "/");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  const otherLocalePath = toOtherLocalePath(pathname, locale);
  const homeHref = localeHref(locale, "/");
  const contactHref = localeHref(locale, "/contact");

  const isActive = (href: string) => {
    const full = localeHref(locale, href);
    if (href === "/") return pathname === full;
    return pathname === full || pathname.startsWith(`${full}/`);
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={homeHref} className="flex items-center group" aria-label={locale === "zh" ? "回到首頁" : "Back to homepage"}>
            <LondeoLogo height={40} variant="light" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {primaryNav.map((item) => {
              const href = localeHref(locale, item.href);
              const active = isActive(item.href);
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={href}
                    className={`px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-white/5 ${
                      active ? "text-gold-400" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label[locale]}
                  </Link>
                );
              }
              const isOpen = openDropdown === item.href;
              return (
                <div key={item.href} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(isOpen ? null : item.href);
                    }}
                    className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-white/5 ${
                      active ? "text-gold-400" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label[locale]}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 min-w-[240px] glass-strong border border-white/10 rounded-xl overflow-hidden py-2 shadow-2xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={localeHref(locale, child.href)}
                            onClick={() => {
                              trackEvent("nav_product_click", { href: child.href });
                              setOpenDropdown(null);
                            }}
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-gold-400 hover:bg-white/5 transition-colors"
                          >
                            {child.label[locale]}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={otherLocalePath}
              onClick={() => trackEvent("language_switch", { to: locale === "en" ? "zh" : "en" })}
              className="px-3 py-1.5 text-xs font-medium text-white/50 hover:text-gold-400 border border-white/10 hover:border-gold-400/40 rounded-lg transition-all duration-200"
            >
              {t.language}
            </Link>
            <Link href={contactHref} className="btn-neon-solid px-5 py-2 rounded-lg text-sm font-semibold">
              {bookDemoLabel[locale]}
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <Link href={otherLocalePath} className="px-2 py-1 text-xs text-white/50 border border-white/10 rounded">
              {t.language}
            </Link>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white/60 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-white/5 px-6 py-4 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <div key={item.href} className="border-b border-white/5">
                  <Link
                    href={localeHref(locale, item.href)}
                    className={`block py-3 text-left ${isActive(item.href) ? "text-gold-400" : "text-white/70 hover:text-gold-400"}`}
                  >
                    {item.label[locale]}
                  </Link>
                  {item.children && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link key={child.href} href={localeHref(locale, child.href)} className="py-1.5 text-sm text-white/50 hover:text-gold-400">
                          {child.label[locale]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href={contactHref} className="btn-neon-solid mt-3 px-5 py-3 rounded-lg text-sm font-semibold text-center">
                {bookDemoLabel[locale]}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
