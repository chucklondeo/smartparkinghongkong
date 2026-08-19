import { SITE_URL, OFFICE_ADDRESS_EN, WHATSAPP_NUMBER } from "./site-config";
import type { Locale } from "./site-config";
import type { FAQItem, Product } from "./content/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Londeo Access",
    url: SITE_URL,
    logo: `${SITE_URL}/londeo-logo-transparent.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_ADDRESS_EN,
      addressCountry: "HK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "sales@londeoaccess.com.hk",
      telephone: WHATSAPP_NUMBER,
      areaServed: "HK",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function productJsonLd(product: Product, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[locale],
    description: product.tagline[locale],
    ...(product.model ? { model: product.model } : {}),
    brand: { "@type": "Brand", name: "Londeo Access" },
    ...(product.heroImage ? { image: `${SITE_URL}${product.heroImage.src}` } : {}),
  };
}

export function faqJsonLd(faqs: FAQItem[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a[locale],
      },
    })),
  };
}
