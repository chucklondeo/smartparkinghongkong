"use client";
import { useState } from "react";
import type { Lang } from "@/lib/i18n";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import PlatformFeatures from "@/components/PlatformFeatures";
import HardwareIntegration from "@/components/HardwareIntegration";
import WhyHongKong from "@/components/WhyHongKong";
import ProductUI from "@/components/ProductUI";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
