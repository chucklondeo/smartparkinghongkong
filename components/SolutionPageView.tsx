import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionDetailView from "@/components/SolutionDetailView";
import type { Solution } from "@/lib/content/types";

export default function SolutionPageView({ solution, lang }: { solution: Solution; lang: Lang }) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: { en: "Solutions", zh: "解決方案" }, href: "/solutions" },
          { label: solution.name, href: `/solutions/${solution.slug}` },
        ]}
      />
      <SolutionDetailView solution={solution} locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
