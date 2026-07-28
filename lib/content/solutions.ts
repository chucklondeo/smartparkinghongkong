import type { Solution } from "./types";

export const solutions: Solution[] = [
  {
    slug: "shopping-malls",
    name: { en: "Shopping Malls", zh: "商場停車場" },
    heroSubtitle: {
      en: "High-throughput entry/exit lanes, shopper validation and merchant integration for busy retail car parks.",
      zh: "為高流量商場停車場提供快速出入口、購物優惠驗証及商戶整合方案。",
    },
    painPoints: {
      en: [
        "Long queues at peak shopping hours and event days",
        "Manual shopper-validation stamping slows down exits",
        "Multiple merchant validation schemes are hard to reconcile",
        "Owners need real-time occupancy and revenue visibility across levels",
      ],
      zh: [
        "繁忙時段及活動日容易出現長時間排隊",
        "人手蓋章驗証優惠拖慢離場速度",
        "多個商戶優惠計劃難以統一核對",
        "業主需要實時掌握各樓層車位及收入狀況",
      ],
    },
    architecture: {
      en: "A cloud-managed platform coordinates AI LPR cameras and fast servo barrier gates at every lane, backed by a Parking Edge Controller at each entrance for local resilience if the network drops. Payment kiosks and LED guidance displays connect into the same architecture.",
      zh: "雲端管理平台統籌各車道的 AI 車牌識別相機及快速伺服道閘，並於每個出入口設置邊緣控制盒，確保網絡中斷時仍可本地運作。繳費終端及 LED 車位指示牌同樣接入此架構。",
    },
    recommendedProductSlugs: ["ai-lpr-camera", "fast-servo-barrier-gate", "parking-edge-controller", "payment-kiosk"],
    paymentMethods: {
      en: "Architecture designed to support Hong Kong's common payment methods (Octopus, FPS, card, mobile wallets) alongside merchant shopper-validation integration. Availability of a specific method depends on project scope and provider approval.",
      zh: "架構設計可支援香港常見支付方式（八達通、轉數快、信用卡、流動支付），並可整合商戶購物優惠驗証。個別支付方式的實際接入須視項目範圍及支付機構審批而定。",
    },
    vehicleFlow: {
      en: "LPR captures the plate on entry, the barrier opens, and on exit the system checks payment status or shopper validation before opening the gate — with a payment kiosk available for drivers who prefer to pay before returning to their vehicle.",
      zh: "車輛進場時由車牌識別相機拍攝，道閘隨即開啟；離場時系統會核實繳費狀態或購物優惠後方開閘，亦可透過繳費終端提前繳費，減少離場等候時間。",
    },
    permitsAndVisitors: {
      en: "Monthly tenant/staff parking, merchant validation codes, and visitor or event parking can all be managed from the same cloud dashboard.",
      zh: "月租租戶／員工車位、商戶優惠碼，以及訪客或活動泊車，均可於同一雲端後台統一管理。",
    },
    compatibility: {
      en: "Compatibility with an existing barrier gate, LPR camera or payment kiosk brand is assessed during a site assessment before any equipment is replaced.",
      zh: "現有道閘、車牌識別相機或繳費終端品牌的兼容性，須經現場勘察後評估，並非必然需要更換設備。",
    },
    implementationSteps: {
      en: ["Site assessment of every lane and existing equipment", "Solution design and lane-by-lane architecture", "Integration and installation", "Testing and handover", "Ongoing local support"],
      zh: ["實地勘察每條車道及現有設備", "制定解決方案及各車道架構", "系統整合及安裝", "測試及移交", "持續本地支援"],
    },
    localSupport: {
      en: "Installation, commissioning, and ongoing maintenance are supported locally in Hong Kong.",
      zh: "安裝、調試及後續維護均由香港本地團隊提供支援。",
    },
    relatedSlugs: ["commercial-buildings", "property-managers"],
  },
  {
    slug: "residential-estates",
    name: { en: "Residential Estates", zh: "住宅屋苑" },
    heroSubtitle: {
      en: "Monthly permit management, visitor registration and intercom-style barrier control for private residential car parks.",
      zh: "為住宅屋苑停車場提供月租管理、訪客登記及對講式道閘控制方案。",
    },
    painPoints: {
      en: [
        "Monthly permit renewals and billing handled manually",
        "Visitors need a simple, secure way to be let in",
        "Residents expect fast, low-friction entry with their own vehicle",
        "Management office needs an audit trail of who entered and when",
      ],
      zh: [
        "月租續期及收費依賴人手處理",
        "訪客需要簡單而安全的登記入場方式",
        "住戶期望快速、順暢的車輛出入體驗",
        "管理處需要清晰記錄車輛進出時間",
      ],
    },
    architecture: {
      en: "AI LPR cameras recognise resident vehicles for automatic entry, fast servo barrier gates handle high-frequency daily traffic, and a Parking Edge Controller keeps the estate's entrance working even if the internet connection drops.",
      zh: "AI 車牌識別相機自動辨識住戶車輛以便直接進出，快速伺服道閘應付日常高頻通行，邊緣控制盒則確保即使網絡中斷，出入口仍可正常運作。",
    },
    recommendedProductSlugs: ["ai-lpr-camera", "fast-servo-barrier-gate", "parking-edge-controller", "pedestrian-access-gates"],
    paymentMethods: {
      en: "Monthly parking fees are typically billed to residents directly by the management office; the platform can support on-site payment kiosks for visitor or casual parking where required.",
      zh: "月租車位費用一般由管理處直接向住戶收取；如有需要，平台亦可支援訪客或臨時泊車的現場繳費終端。",
    },
    vehicleFlow: {
      en: "A registered resident vehicle is recognised automatically at the barrier; visitors register with the management office or a visitor kiosk and are issued a time-limited access credential.",
      zh: "已登記的住戶車輛可於道閘自動識別通行；訪客則須向管理處或訪客登記機登記，並獲發限時通行憑證。",
    },
    permitsAndVisitors: {
      en: "Monthly resident permits, visitor pre-registration, and black/white list management are handled from the same cloud dashboard, with instant sync to every barrier on site.",
      zh: "月租住戶許可、訪客預先登記，以及黑白名單管理，均可於同一雲端後台處理，並即時同步至場內所有道閘。",
    },
    compatibility: {
      en: "Where an estate already has intercom or access-control equipment, compatibility is reviewed during a site assessment rather than assumed.",
      zh: "如屋苑已設有對講機或門禁設備，兼容性須於現場勘察後確認，而非預先假設。",
    },
    implementationSteps: {
      en: ["Site assessment", "Solution design for resident, visitor and staff flows", "Integration and installation", "Testing and handover", "Ongoing local support"],
      zh: ["實地勘察", "為住戶、訪客及員工流程制定方案", "系統整合及安裝", "測試及移交", "持續本地支援"],
    },
    localSupport: {
      en: "Installation, commissioning, and ongoing maintenance are supported locally in Hong Kong.",
      zh: "安裝、調試及後續維護均由香港本地團隊提供支援。",
    },
    relatedSlugs: ["property-managers", "commercial-buildings"],
  },
  {
    slug: "commercial-buildings",
    name: { en: "Commercial Buildings", zh: "商業大廈" },
    heroSubtitle: {
      en: "Tenant space allocation, visitor pre-booking and automated billing for office tower car parks.",
      zh: "為商業大廈停車場提供租戶車位分配、訪客預約及自動賬單方案。",
    },
    painPoints: {
      en: [
        "Tenant parking allocations change as leases turn over",
        "Visitors and clients need a professional, pre-booked entry experience",
        "Billing and invoicing across many tenants is time-consuming",
        "Building management wants a single system across parking and lobby access",
      ],
      zh: [
        "租戶車位分配會隨租約變動而需要調整",
        "訪客及客戶期望有專業、可預約的入場體驗",
        "多租戶賬單及發票處理需要大量人手",
        "物業管理希望停車場與大堂門禁使用同一系統",
      ],
    },
    architecture: {
      en: "AI LPR cameras and fast servo barrier gates manage vehicle entry/exit, pedestrian access gates cover lobby and lift-lobby access, and a Parking Edge Controller ties the building's car park into one coordinated system with cloud-based reporting.",
      zh: "AI 車牌識別相機及快速伺服道閘負責車輛出入管理，人行通道閘則用於大堂及電梯大堂出入口，邊緣控制盒將整座大廈的停車場整合為一個系統，並提供雲端報表。",
    },
    recommendedProductSlugs: ["ai-lpr-camera", "fast-servo-barrier-gate", "pedestrian-access-gates", "parking-edge-controller"],
    paymentMethods: {
      en: "Supports automated monthly tenant billing alongside on-site payment kiosks for visitor parking, with architecture designed to support Hong Kong's common payment methods.",
      zh: "支援自動化月租租戶賬單，並可透過現場繳費終端處理訪客泊車，架構設計上可支援香港常見支付方式。",
    },
    vehicleFlow: {
      en: "Tenant vehicles are recognised automatically at entry; visitor vehicles can be pre-registered by the tenant they're visiting, or pay on exit via the payment kiosk.",
      zh: "租戶車輛於入口自動識別；訪客車輛可由受訪租戶預先登記，或於離場時透過繳費終端付款。",
    },
    permitsAndVisitors: {
      en: "Tenant space allocation, visitor pre-booking and automated tenant invoicing are all managed from one dashboard.",
      zh: "租戶車位分配、訪客預約及自動生成租戶賬單，均可於同一後台管理。",
    },
    compatibility: {
      en: "Integration with existing building management systems or access-control equipment is reviewed during a site assessment, with an open API available for building/ERP integration.",
      zh: "與現有樓宇管理系統或門禁設備的整合，須經現場勘察評估，並提供開放 API 以配合樓宇管理或 ERP 系統。",
    },
    implementationSteps: {
      en: ["Site assessment", "Solution design covering tenants, visitors and lobby access", "Integration and installation", "Testing and handover", "Ongoing local support"],
      zh: ["實地勘察", "為租戶、訪客及大堂出入口制定方案", "系統整合及安裝", "測試及移交", "持續本地支援"],
    },
    localSupport: {
      en: "Installation, commissioning, and ongoing maintenance are supported locally in Hong Kong.",
      zh: "安裝、調試及後續維護均由香港本地團隊提供支援。",
    },
    relatedSlugs: ["property-managers", "shopping-malls"],
  },
  {
    slug: "property-managers",
    name: { en: "Property Managers", zh: "物業管理公司" },
    heroSubtitle: {
      en: "One cloud dashboard to manage parking across every property in a portfolio, instead of a patchwork of disconnected systems.",
      zh: "以單一雲端後台管理旗下所有物業的停車場，取代各自獨立、互不相通的分散系統。",
    },
    painPoints: {
      en: [
        "Different properties run different, disconnected parking systems",
        "Consolidated reporting across sites is manual and slow",
        "Staff need to log into multiple systems to manage day-to-day operations",
        "Owners want one source of truth for occupancy and revenue",
      ],
      zh: [
        "不同物業使用各自獨立、互不相通的停車系統",
        "跨場地整合報表需要大量人手，耗時緩慢",
        "員工需要登入多個系統才能處理日常運作",
        "業主希望有統一數據來源掌握車位使用及收入情況",
      ],
    },
    architecture: {
      en: "Every site runs the same core stack — AI LPR camera, fast servo barrier gate and a Parking Edge Controller — so the property management company operates one unified cloud dashboard across the portfolio, regardless of site size.",
      zh: "每個場地均採用相同核心架構——AI 車牌識別相機、快速伺服道閘及邊緣控制盒——讓物業管理公司無論物業規模大小，均可透過統一雲端後台管理整個組合。",
    },
    recommendedProductSlugs: ["parking-edge-controller", "ai-lpr-camera", "fast-servo-barrier-gate", "payment-kiosk"],
    paymentMethods: {
      en: "Payment configuration can be set per property while still rolling up into consolidated, portfolio-wide reporting.",
      zh: "各物業可獨立設定收費方式，同時仍能匯總成整個組合的統一報表。",
    },
    vehicleFlow: {
      en: "Vehicle entry/exit logic is consistent across every site in the portfolio, so staff trained on one property can operate any other.",
      zh: "整個組合內每個場地的車輛進出流程保持一致，員工只需在一個物業受訓，即可操作其他場地。",
    },
    permitsAndVisitors: {
      en: "Monthly permits, black/white lists and visitor management are configured per site but visible centrally, giving head office oversight without losing site-level control.",
      zh: "月租許可、黑白名單及訪客管理可按各場地設定，同時集中顯示，讓總部掌握全局而不失個別場地的控制權。",
    },
    compatibility: {
      en: "For portfolios with a mix of legacy and modern equipment, compatibility is assessed site by site rather than assumed across the whole portfolio.",
      zh: "若組合內同時存在舊式及新式設備，兼容性須逐一場地評估，而非假設整個組合適用同一方案。",
    },
    implementationSteps: {
      en: ["Portfolio-wide site assessment", "Phased solution design across properties", "Rolling integration and installation", "Testing and handover per site", "Centralised local support"],
      zh: ["整個組合的實地勘察", "分階段為各物業制定方案", "分批進行系統整合及安裝", "各場地個別測試及移交", "集中式本地支援"],
    },
    localSupport: {
      en: "A single Hong Kong-based support relationship covers every site in the portfolio.",
      zh: "整個組合的所有場地均由同一支香港本地團隊提供支援。",
    },
    relatedSlugs: ["commercial-buildings", "government-public"],
  },
  {
    slug: "government-public",
    name: { en: "Government & Public Car Parks", zh: "政府及公共停車場" },
    heroSubtitle: {
      en: "Concession management, full audit trails and transparent reporting for government and public car park operators.",
      zh: "為政府及公共停車場營運商提供優惠票種管理、完整審計追蹤及透明報表方案。",
    },
    painPoints: {
      en: [
        "Concession and discount schemes need clear, auditable records",
        "Public-facing operations need consistent, reliable uptime",
        "Reporting must be transparent enough for audits and public accountability",
        "Cash handling and reconciliation carry operational risk",
      ],
      zh: [
        "優惠及折扣計劃需要清晰、可審計的記錄",
        "公共服務性質的運作需要穩定可靠",
        "報表須具透明度，以配合審計及公眾問責要求",
        "現金處理及對賬存在營運風險",
      ],
    },
    architecture: {
      en: "AI LPR cameras and fast servo barrier gates handle entry/exit, payment kiosks reduce reliance on cashiers, and a Parking Edge Controller keeps operations running with local fallback if connectivity is interrupted — with every transaction logged for reporting.",
      zh: "AI 車牌識別相機及快速伺服道閘負責出入場控制，繳費終端減少對人手收費的依賴，邊緣控制盒則確保網絡中斷時仍具本地備援能力，並記錄每筆交易以供報表使用。",
    },
    recommendedProductSlugs: ["ai-lpr-camera", "fast-servo-barrier-gate", "payment-kiosk", "parking-edge-controller"],
    paymentMethods: {
      en: "Architecture designed to support Hong Kong's common payment methods, reducing cash handling; concession and discount codes are tracked alongside standard payments for audit purposes.",
      zh: "架構設計可支援香港常見支付方式，減少現金處理；優惠及折扣代碼會連同一般繳費記錄一併追蹤，以供審計之用。",
    },
    vehicleFlow: {
      en: "Standard, concession and permit vehicles are each recognised and processed according to their assigned category, with every entry and exit logged.",
      zh: "標準、優惠及許可證車輛會按其所屬類別分別識別及處理，每次進出均會被記錄。",
    },
    permitsAndVisitors: {
      en: "Concession schemes, permit categories and visitor/event parking are configured centrally with a full audit trail of changes.",
      zh: "優惠計劃、許可證類別及訪客／活動泊車均可集中設定，並具備完整的變更審計記錄。",
    },
    compatibility: {
      en: "Compatibility with existing government-approved equipment or procurement requirements is reviewed on a per-project basis.",
      zh: "與現有政府認可設備或採購要求的兼容性，須按個別項目評估。",
    },
    implementationSteps: {
      en: ["Site assessment against project/procurement requirements", "Solution design with audit and reporting requirements in mind", "Integration and installation", "Testing and handover", "Ongoing local support"],
      zh: ["按項目／採購要求進行實地勘察", "制定方案時兼顧審計及報表需求", "系統整合及安裝", "測試及移交", "持續本地支援"],
    },
    localSupport: {
      en: "Installation, commissioning, and ongoing maintenance are supported locally in Hong Kong.",
      zh: "安裝、調試及後續維護均由香港本地團隊提供支援。",
    },
    relatedSlugs: ["property-managers", "shopping-malls"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
