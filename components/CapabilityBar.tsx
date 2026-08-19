import { CheckCircle2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { capabilityBar } from "@/lib/content/pages";

export default function CapabilityBar({ lang }: { lang: Lang }) {
  return (
    <section className="relative bg-dark-800 border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {capabilityBar[lang].map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-gold-glow flex-shrink-0" />
            <span className="text-sm text-white/60">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
