import type { Lang } from "@/lib/i18n";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import Hero from "@/components/Hero";
import CapabilityBar from "@/components/CapabilityBar";
import ProductsOverview from "@/components/ProductsOverview";
import HardwareIntegration from "@/components/HardwareIntegration";
import PlatformTeaser from "@/components/PlatformTeaser";
import Solutions from "@/components/Solutions";
import WhyHongKong from "@/components/WhyHongKong";
import AdvantagesSection from "@/components/AdvantagesSection";
import ApplicationsTeaser from "@/components/ApplicationsTeaser";
import ImplementationProcess from "@/components/ImplementationProcess";
import FinalCTA from "@/components/FinalCTA";

export default function HomeView({ lang }: { lang: Lang }) {
  return (
    <main>
      <SiteHeader locale={lang} />
      <Hero lang={lang} />
      <CapabilityBar lang={lang} />
      <ProductsOverview lang={lang} />
      <HardwareIntegration lang={lang} />
      <PlatformTeaser lang={lang} />
      <Solutions lang={lang} />
      <WhyHongKong lang={lang} />
      <AdvantagesSection lang={lang} />
      <ApplicationsTeaser lang={lang} />
      <ImplementationProcess lang={lang} />
      <FinalCTA lang={lang} />
      <SiteFooter locale={lang} />
    </main>
  );
}
