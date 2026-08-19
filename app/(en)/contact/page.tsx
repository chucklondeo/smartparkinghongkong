import type { Metadata } from "next";
import ContactView from "@/components/ContactView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/contact",
  title: "Contact",
  description: "Book a demo, request a quote or request a site assessment from the Londeo Access team in Hong Kong.",
});

export default function ContactPage() {
  return <ContactView lang="en" />;
}
