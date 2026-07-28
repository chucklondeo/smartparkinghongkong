import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPageView from "@/components/SolutionPageView";
import { solutions, getSolutionBySlug } from "@/lib/content/solutions";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  return buildMetadata({
    locale: "en",
    path: `/solutions/${solution.slug}`,
    title: solution.name.en,
    description: solution.heroSubtitle.en,
  });
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();
  return <SolutionPageView solution={solution} lang="en" />;
}
