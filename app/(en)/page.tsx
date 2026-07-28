import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/",
  title: "Londeo Access | Smart Parking & Access Solutions for Hong Kong",
  description:
    "Smart parking management platform, AI LPR cameras, 24V servo barrier gates, edge controllers, payment kiosks and pedestrian access gates — integrated for Hong Kong car parks and buildings.",
});

export default function Home() {
  return <HomeView lang="en" />;
}
