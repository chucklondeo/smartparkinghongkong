import type { Bi } from "./types";

export interface NavLink {
  label: Bi;
  href: string;
}

export const primaryNav: { label: Bi; href: string; children?: NavLink[] }[] = [
  { label: { en: "Platform", zh: "平台功能" }, href: "/platform" },
  {
    label: { en: "Products", zh: "產品" },
    href: "/products",
    children: [
      { label: { en: "Fast Servo Barrier Gate", zh: "快速伺服道閘" }, href: "/products/fast-servo-barrier-gate" },
      { label: { en: "AI LPR Camera", zh: "AI 車牌識別相機" }, href: "/products/ai-lpr-camera" },
      { label: { en: "Parking Edge Controller", zh: "停車場邊緣控制盒" }, href: "/products/parking-edge-controller" },
      { label: { en: "Payment Kiosk", zh: "自助繳費終端" }, href: "/products/payment-kiosk" },
      { label: { en: "Pedestrian Access Gates", zh: "人行通道閘" }, href: "/products/pedestrian-access-gates" },
      { label: { en: "View All Products", zh: "查看所有產品" }, href: "/products" },
    ],
  },
  {
    label: { en: "Solutions", zh: "解決方案" },
    href: "/solutions",
    children: [
      { label: { en: "Shopping Malls", zh: "商場停車場" }, href: "/solutions/shopping-malls" },
      { label: { en: "Residential Estates", zh: "住宅屋苑" }, href: "/solutions/residential-estates" },
      { label: { en: "Commercial Buildings", zh: "商業大廈" }, href: "/solutions/commercial-buildings" },
      { label: { en: "Property Managers", zh: "物業管理公司" }, href: "/solutions/property-managers" },
      { label: { en: "Government & Public", zh: "政府及公共停車場" }, href: "/solutions/government-public" },
    ],
  },
  { label: { en: "Applications", zh: "應用場景" }, href: "/applications" },
  { label: { en: "Resources", zh: "資源中心" }, href: "/resources" },
  {
    label: { en: "Company", zh: "公司" },
    href: "/about",
    children: [
      { label: { en: "About Londeo", zh: "關於 Londeo" }, href: "/about" },
      { label: { en: "Contact", zh: "聯絡我們" }, href: "/contact" },
    ],
  },
];

export const footerNav = {
  solutions: [
    { label: { en: "Shopping Malls", zh: "商場停車場" }, href: "/solutions/shopping-malls" },
    { label: { en: "Residential Estates", zh: "住宅屋苑" }, href: "/solutions/residential-estates" },
    { label: { en: "Commercial Buildings", zh: "商業大廈" }, href: "/solutions/commercial-buildings" },
    { label: { en: "Property Managers", zh: "物業管理公司" }, href: "/solutions/property-managers" },
    { label: { en: "Government & Public", zh: "政府及公共停車場" }, href: "/solutions/government-public" },
  ] as NavLink[],
  products: [
    { label: { en: "Fast Servo Barrier Gate", zh: "快速伺服道閘" }, href: "/products/fast-servo-barrier-gate" },
    { label: { en: "AI LPR Camera", zh: "AI 車牌識別相機" }, href: "/products/ai-lpr-camera" },
    { label: { en: "Parking Edge Controller", zh: "停車場邊緣控制盒" }, href: "/products/parking-edge-controller" },
    { label: { en: "Payment Kiosk", zh: "自助繳費終端" }, href: "/products/payment-kiosk" },
    { label: { en: "Pedestrian Access Gates", zh: "人行通道閘" }, href: "/products/pedestrian-access-gates" },
  ] as NavLink[],
  company: [
    { label: { en: "About Londeo", zh: "關於我們" }, href: "/about" },
    { label: { en: "Applications", zh: "應用場景" }, href: "/applications" },
    { label: { en: "Resources", zh: "資源中心" }, href: "/resources" },
    { label: { en: "Contact", zh: "聯絡我們" }, href: "/contact" },
  ] as NavLink[],
};

export const bookDemoLabel: Bi = { en: "Book a Demo", zh: "預約示範" };
export const homeLabel: Bi = { en: "Home", zh: "首頁" };
