import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { localeHref } from "@/lib/site-config";

export default function ApplicationsTeaser({ lang }: { lang: Lang }) {
  return (
    <section className="bg-dark-900 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-white/40 text-sm leading-relaxed mb-4">
          {lang === "en"
            ? "We don't yet have published, permission-cleared case studies to share. As real reference projects become available, they'll appear on our Application Scenarios page."
            : "我們目前尚未有已獲授權公開的實際案例可供分享。當有真實參考項目獲准公開時，將於「應用場景」頁面更新。"}
        </p>
        <Link
          href={localeHref(lang, "/applications")}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:gap-2.5 transition-all"
        >
          {lang === "en" ? "View Application Scenarios" : "查看應用場景"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
