"use client";
import { useRef, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Send, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";
import { products } from "@/lib/content/products";
import { SALES_EMAIL, WHATSAPP_NUMBER, OFFICE_ADDRESS_EN, OFFICE_ADDRESS_ZH, localeHref } from "@/lib/site-config";
import { buildWhatsAppLink, whatsAppEngineerMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface Props {
  lang: Lang;
}

const enquiryTypeFromQueryParam: Record<string, number> = {
  demo: 0, // "Book a Demo"
  quote: 1, // "Request a Quote"
  assessment: 2, // "Request Site Assessment"
};

type Status = "idle" | "submitting" | "error";

const initialForm = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  enquiryType: "",
  product: "",
  projectLocation: "",
  quantity: "",
  currentSystem: "",
  message: "",
  website: "", // honeypot
};

export default function Contact({ lang }: Props) {
  const t = translations[lang].contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();
  const pathname = usePathname() || "/contact";

  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [form, setForm] = useState({ ...initialForm });
  const [utm, setUtm] = useState({ source: "", medium: "", campaign: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      source: params.get("utm_source") || "",
      medium: params.get("utm_medium") || "",
      campaign: params.get("utm_campaign") || "",
    });

    const typeParam = params.get("type");
    const productParam = params.get("product");
    setForm((f) => ({
      ...f,
      enquiryType:
        typeParam && typeParam in enquiryTypeFromQueryParam
          ? t.form.enquiryTypes[enquiryTypeFromQueryParam[typeParam]]
          : f.enquiryType,
      product: productParam || f.product,
    }));
    // Only meant to run once on mount to read the initial URL — intentionally excludes `t`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldError(null);

    if (!form.name.trim() || !form.company.trim() || !form.enquiryType.trim()) {
      setFieldError(lang === "en" ? "Please fill in all required fields." : "請填寫所有必填欄位。");
      return;
    }
    if (!form.email.trim() && !form.whatsapp.trim()) {
      setFieldError(t.form.emailOrWhatsapp);
      return;
    }
    if (form.website.trim() !== "") {
      // Honeypot triggered — silently pretend success without sending anything.
      router.push(localeHref(lang, "/thank-you"));
      return;
    }

    setStatus("submitting");
    trackEvent("quote_start", { enquiry_type: form.enquiryType });

    const supabase = createClient();
    if (!supabase) {
      setStatus("error");
      trackEvent("form_submit_error", { reason: "no_supabase_client" });
      return;
    }

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name,
          company: form.company,
          email: form.email,
          whatsapp: form.whatsapp,
          enquiry_type: form.enquiryType,
          product: form.product,
          project_location: form.projectLocation,
          quantity: form.quantity,
          current_system: form.currentSystem,
          message: form.message,
          lang,
          source_page: pathname,
          utm_source: utm.source,
          utm_medium: utm.medium,
          utm_campaign: utm.campaign,
          website: form.website,
        },
      });

      if (error) throw error;

      trackEvent("form_submit_success", { enquiry_type: form.enquiryType, product: form.product });
      const productParam = form.product ? `?product=${encodeURIComponent(form.product)}` : "";
      router.push(`${localeHref(lang, "/thank-you")}${productParam}`);
    } catch (err) {
      console.error("Contact form submission failed", err);
      setStatus("error");
      trackEvent("form_submit_error", { reason: "request_failed" });
    }
  };

  const officeAddress = lang === "en" ? OFFICE_ADDRESS_EN : OFFICE_ADDRESS_ZH;

  return (
    <section className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-glow/6 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-gold-glow/20">
            <span className="w-2 h-2 bg-gold-glow rounded-full animate-pulse" />
            <span className="text-xs font-medium text-gold-400/90 tracking-widest uppercase">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient-silver">{t.title} </span>
            <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg leading-relaxed">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl border border-gold-glow/20 p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot — visually hidden, never seen or filled by real visitors */}
                <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={set("website")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.name}</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.company}</label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={set("company")}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.email}</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.whatsapp}</label>
                    <input
                      id="whatsapp"
                      type="tel"
                      value={form.whatsapp}
                      onChange={set("whatsapp")}
                      placeholder="+852"
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>
                <p className="text-xs text-white/30 -mt-3">{t.form.emailOrWhatsapp}</p>

                <div>
                  <label htmlFor="enquiryType" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.enquiryType}</label>
                  <select
                    id="enquiryType"
                    required
                    value={form.enquiryType}
                    onChange={set("enquiryType")}
                    className="w-full glass px-4 py-3 rounded-xl text-sm text-white border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-dark-800 appearance-none"
                  >
                    <option value="" disabled className="bg-dark-800">
                      {lang === "en" ? "Select enquiry type..." : "請選擇查詢類型..."}
                    </option>
                    {t.form.enquiryTypes.map((et) => (
                      <option key={et} value={et} className="bg-dark-800">{et}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="product" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.product}</label>
                    <select
                      id="product"
                      value={form.product}
                      onChange={set("product")}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-dark-800 appearance-none"
                    >
                      <option value="" className="bg-dark-800">{t.form.productPlaceholder}</option>
                      {products.map((p) => (
                        <option key={p.slug} value={p.slug} className="bg-dark-800">{p.name[lang]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectLocation" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.projectLocation}</label>
                    <input
                      id="projectLocation"
                      type="text"
                      value={form.projectLocation}
                      onChange={set("projectLocation")}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quantity" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.quantity}</label>
                    <input
                      id="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={set("quantity")}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="currentSystem" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.currentSystem}</label>
                    <input
                      id="currentSystem"
                      type="text"
                      value={form.currentSystem}
                      onChange={set("currentSystem")}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.message}</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-gold-glow/50 focus:outline-none transition-colors bg-transparent resize-none"
                  />
                </div>

                {(fieldError || status === "error") && (
                  <div className="flex items-start gap-2 text-sm text-fire-400 bg-fire-500/10 border border-fire-500/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{fieldError || t.form.error}</span>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
                  whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                  className="btn-neon-solid w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {lang === "en" ? "Sending…" : "發送中…"}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t.form.submit}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl border border-fire-500/20 p-6">
              <h3 className="text-lg font-bold text-white mb-4">{t.info.title}</h3>
              <div className="space-y-3">
                {t.info.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-gold-glow flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/55 leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl border border-white/8 p-6 space-y-4">
              <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest">
                {lang === "en" ? "Direct Contact" : "直接聯絡"}
              </h3>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-white/30">WhatsApp</span>
                <a
                  href={buildWhatsAppLink(whatsAppEngineerMessage(lang, "your project"))}
                  onClick={() => trackEvent("whatsapp_click", { source: "contact_page" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-[70%] text-right text-sm text-gold-400 font-medium hover:underline"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-white/30">Email</span>
                <a
                  href={`mailto:${SALES_EMAIL}`}
                  onClick={() => trackEvent("email_click", { source: "contact_page" })}
                  className="max-w-[70%] text-right text-sm text-gold-400 font-medium hover:underline break-all"
                >
                  {SALES_EMAIL}
                </a>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-white/30">{lang === "en" ? "Website" : "網站"}</span>
                <span className="max-w-[70%] text-right text-sm text-gold-400 font-medium">londeoaccess.com.hk</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-white/30">{lang === "en" ? "Office" : "辦公地址"}</span>
                <span className="max-w-[70%] text-right text-sm text-white/70 break-words">{officeAddress}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
