"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";

interface Props { lang: Lang }

type Status = "idle" | "submitting" | "success";

type ContactSubmission = {
  name: string;
  company: string;
  email: string;
  whatsapp: string | null;
  project_type: string | null;
  message: string | null;
  lang: Lang;
};

const SALES_EMAIL = "sales@londeoaccess.com.hk";

export default function Contact({ lang }: Props) {
  const t = translations[lang].contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", company: "", email: "", whatsapp: "", projectType: "", message: "",
  });

  const getSubmission = (): ContactSubmission => ({
    name: form.name.trim(),
    company: form.company.trim(),
    email: form.email.trim(),
    whatsapp: form.whatsapp.trim() || null,
    project_type: form.projectType || null,
    message: form.message.trim() || null,
    lang,
  });

  const openEmailFallback = (submission = getSubmission()) => {
    const subject = encodeURIComponent(`Londeo enquiry from ${submission.company || submission.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${submission.name}`,
        `Company: ${submission.company}`,
        `Email: ${submission.email}`,
        `WhatsApp: ${submission.whatsapp || "-"}`,
        `Project type: ${submission.project_type || "-"}`,
        "",
        submission.message || "-",
      ].join("\n")
    );

    window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const submission = getSubmission();
      const supabase = createClient();
      if (!supabase) {
        openEmailFallback(submission);
        setStatus("success");
        return;
      }

      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: submission,
      });

      if (emailError) throw emailError;

      const { error: insertError } = await supabase.from("contact_submissions").insert(submission);
      if (insertError) {
        console.warn("Contact form database insert failed:", insertError);
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Contact form error:", err);
openEmailFallback();
setStatus("success");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-blue/6 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl border border-neon-blue/20 p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-neon-blue mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {lang === "en" ? "Message Sent!" : "訊息已發送！"}
                  </h3>
                  <p className="text-white/50">{t.form.success}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { key: "name",    label: t.form.name,    type: "text" },
                      { key: "company", label: t.form.company, type: "text" },
                    ].map(({ key, label, type }) => (
                      <div key={key}>
                        <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{label}</label>
                        <input
                          type={type}
                          required
                          disabled={status === "submitting"}
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-neon-blue/50 focus:outline-none focus:ring-0 transition-colors bg-transparent disabled:opacity-50"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.email}</label>
                      <input
                        type="email"
                        required
                        disabled={status === "submitting"}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-neon-blue/50 focus:outline-none transition-colors bg-transparent disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.whatsapp}</label>
                      <input
                        type="tel"
                        disabled={status === "submitting"}
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        placeholder="+852"
                        className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-neon-blue/50 focus:outline-none transition-colors bg-transparent disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.projectType}</label>
                    <select
                      required
                      disabled={status === "submitting"}
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white border border-white/10 focus:border-neon-blue/50 focus:outline-none transition-colors bg-dark-800 appearance-none disabled:opacity-50"
                    >
                      <option value="" disabled className="bg-dark-800">
                        {lang === "en" ? "Select project type..." : "請選擇項目類型..."}
                      </option>
                      {t.form.projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-dark-800">{pt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{t.form.message}</label>
                    <textarea
                      rows={4}
                      disabled={status === "submitting"}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 border border-white/10 focus:border-neon-blue/50 focus:outline-none transition-colors bg-transparent resize-none disabled:opacity-50"
                    />
                  </div>

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
              )}
            </div>
          </motion.div>

          {/* Right info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Why demo */}
            <div className="glass-card rounded-2xl border border-neon-purple/20 p-6">
              <h3 className="text-lg font-bold text-white mb-4">{t.info.title}</h3>
              <div className="space-y-3">
                {t.info.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/55 leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="glass-card rounded-2xl border border-white/8 p-6 space-y-4">
              <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest">
                {lang === "en" ? "Direct Contact" : "直接聯絡"}
              </h3>
              {[
                { label: "WhatsApp", value: "+852 XXXX XXXX" },
                { label: "Email",    value: SALES_EMAIL },
                { label: lang === "en" ? "Website" : "網站", value: "londeoaccess.com.hk" },
                { label: lang === "en" ? "Office"  : "辦公室", value: lang === "en" ? "Hong Kong SAR" : "香港特別行政區" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-xs text-white/30">{item.label}</span>
                  <span className="text-sm text-neon-blue font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="glass-card rounded-2xl border border-green-500/15 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-sm text-white/55 leading-relaxed">
                  {lang === "en"
                    ? "Response within 1 business day. No commitment required."
                    : "一個工作日內回覆，無需承擔任何責任。"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
