/**
 * Shared bilingual content model for products, solutions and static pages.
 * Every string field is { en, zh }. Fields the site cannot yet back with a
 * verified fact (model number, exact spec, real photo) are left undefined /
 * empty rather than filled with invented data — see docs/content-required.md
 * and docs/content-claims-review.md for the tracked gaps.
 */

export interface Bi {
  en: string;
  zh: string;
}

export interface BiList {
  en: string[];
  zh: string[];
}

export type ProductCategory =
  | "parking-hardware"
  | "parking-software"
  | "payment-control"
  | "pedestrian-access";

export interface SpecRow {
  label: Bi;
  /** undefined -> the spec row renders a "Content required" state instead of a fabricated value */
  value?: Bi;
}

export interface FAQItem {
  q: Bi;
  a: Bi;
}

export interface ProductImage {
  src: string;
  alt: Bi;
}

export interface Product {
  slug: string;
  category: ProductCategory;
  name: Bi;
  /** undefined -> exact model number not yet confirmed against a spec sheet */
  model?: string;
  tagline: Bi;
  heroImage?: ProductImage;
  gallery: ProductImage[];
  keyPoints: BiList;
  highlights: { title: Bi; desc: Bi }[];
  specs: SpecRow[];
  compatibility: Bi;
  applications: BiList;
  datasheetUrl?: string;
  videoUrl?: string;
  faqs: FAQItem[];
  relatedSlugs: string[];
}

export interface Solution {
  slug: string;
  name: Bi;
  heroSubtitle: Bi;
  painPoints: BiList;
  architecture: Bi;
  recommendedProductSlugs: string[];
  paymentMethods: Bi;
  vehicleFlow: Bi;
  permitsAndVisitors: Bi;
  compatibility: Bi;
  implementationSteps: BiList;
  localSupport: Bi;
  relatedSlugs: string[];
}
