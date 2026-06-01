"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import type { Lang } from "@/lib/i18n";

// Above-fold: load immediately
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Below-fold: lazy-load to reduce initial JS bundle
const Solutions          = dynamic(() => import("@/components/Solutions"));
const PlatformFeatures   = dynamic(() => import("@/components/PlatformFeatures"));
const HardwareIntegration = dynamic(() => import("@/components/HardwareIntegration"));
const WhyHongKong        = dynamic(() => import("@/components/WhyHongKong"));
const ProductUI          = dynamic(() => import("@/components/ProductUI"));
const About              = dynamic(() => import("@/components/About"));
const Contact            = dynamic(() => import("@/components/Contact"));
const Footer             = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <main>
      <Navigation lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Solutions lang={lang} />
      <PlatformFeatures lang={lang} />
      <HardwareIntegration lang={lang} />
      <WhyHongKong lang={lang} />
      <ProductUI lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
