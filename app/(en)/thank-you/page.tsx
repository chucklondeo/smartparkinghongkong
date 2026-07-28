import type { Metadata } from "next";
import ThankYouView from "@/components/ThankYouView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: "/thank-you",
  title: "Thank You",
  description: "Your enquiry has been received. Our Hong Kong team will be in touch within 1 business day.",
});

export default function ThankYouPage() {
  return <ThankYouView lang="en" />;
}
