import type { Product } from "./types";

/**
 * Product data for the five hardware/software lines called out in the
 * upgrade brief. No model numbers, cycle counts, accuracy percentages or
 * certifications are stated as fact unless they were already verifiable in
 * this repository — everything else is intentionally left as `undefined`
 * (renders a "Content required" row) rather than invented. See
 * docs/content-required.md for the exact list of what's missing per product.
 */
export const products: Product[] = [
  {
    slug: "fast-servo-barrier-gate",
    category: "parking-hardware",
    name: { en: "24V Fast Servo Barrier Gate", zh: "24V 快速伺服道閘" },
    tagline: {
      en: "A 24V low-voltage servo boom gate engineered for smooth, responsive, high-cycle operation at busy Hong Kong entrances and exits.",
      zh: "24V 低壓伺服道閘，專為香港高流量出入口而設，運行順暢、反應快速，適合高頻率通行場景。",
    },
    gallery: [],
    keyPoints: {
      en: [
        "24V low-voltage servo motor for smooth, quiet start/stop",
        "Designed for high-frequency, high-traffic car park lanes",
        "Integrates with Londeo's LPR cameras, radar, LED displays and parking platform",
      ],
      zh: [
        "24V 低壓伺服馬達，啟停平順、噪音低",
        "為高流量、高頻率通行的停車場出入口而設計",
        "可與 Londeo 車牌識別相機、雷達、LED 顯示屏及停車平台整合",
      ],
    },
    highlights: [
      {
        title: { en: "Smooth, responsive motion control", zh: "運行順暢、反應靈敏" },
        desc: {
          en: "Servo-driven control is engineered for smooth, responsive and high-cycle operation rather than the jerky start/stop typical of basic single-phase motors.",
          zh: "伺服驅動控制經過設計，提供順暢、靈敏及耐高頻次的運作表現，避免一般單相馬達常見的頓挫啟停問題。",
        },
      },
      {
        title: { en: "Built for continuous duty", zh: "適合持續高頻運作" },
        desc: {
          en: "Suited to entrances and exits that see continuous vehicle movement throughout the day, not just occasional light use.",
          zh: "適用於全日持續有車輛進出的出入口，而非僅供偶爾輕度使用的場所。",
        },
      },
      {
        title: { en: "Open integration", zh: "開放式整合" },
        desc: {
          en: "Connects to Londeo's Parking Edge Controller for coordinated control alongside LPR cameras, LED displays and payment kiosks.",
          zh: "可連接 Londeo 停車場邊緣控制盒，與車牌識別相機、LED 顯示屏及繳費終端協同運作。",
        },
      },
    ],
    specs: [
      { label: { en: "Motor type", zh: "馬達類型" }, value: { en: "24V DC servo motor", zh: "24V 直流伺服馬達" } },
      { label: { en: "Open/close speed", zh: "開閘/關閘速度" } },
      { label: { en: "Rated duty cycle", zh: "額定使用壽命" } },
      { label: { en: "Boom arm length options", zh: "閘桿長度選項" } },
      { label: { en: "Ingress protection (IP) rating", zh: "防護等級 (IP)" } },
      { label: { en: "Operating temperature range", zh: "工作溫度範圍" } },
      { label: { en: "Digital I/O", zh: "數碼輸入/輸出" } },
      { label: { en: "Anti-crush / obstacle detection", zh: "防砸/障礙偵測方式" } },
      { label: { en: "Warranty", zh: "保養期限" } },
    ],
    compatibility: {
      en: "Designed to work with Londeo's Parking Edge Controller, AI LPR Camera and LED display systems as part of one coordinated lane. OEM/ODM configurations can be discussed for project-specific requirements.",
      zh: "可與 Londeo 停車場邊緣控制盒、AI 車牌識別相機及 LED 顯示屏系統協同運作，組成完整的出入口方案。亦可按項目需要洽談 OEM/ODM 定制方案。",
    },
    applications: {
      en: ["Shopping mall entrances/exits", "Residential estate car parks", "Commercial building car parks", "Government and public car parks"],
      zh: ["商場出入口", "住宅屋苑停車場", "商業大廈停車場", "政府及公共停車場"],
    },
    faqs: [
      {
        q: { en: "Can this barrier gate integrate with our existing LPR camera or payment system?", zh: "此道閘能否與我們現有的車牌識別相機或收費系統整合？" },
        a: {
          en: "Integration is assessed per project — our engineers review your existing equipment and confirm compatibility during a site assessment before proposing an integration plan.",
          zh: "整合方案須按項目個別評估——我們的工程師會於現場勘察時檢視您現有設備，確認兼容性後再提出整合方案。",
        },
      },
      {
        q: { en: "Is OEM/ODM customisation available?", zh: "是否提供 OEM/ODM 定制服務？" },
        a: {
          en: "Yes — OEM/ODM and custom integration requests can be discussed with our team; scope and terms depend on the specific project.",
          zh: "可以——歡迎與我們的團隊洽談 OEM/ODM 及定制整合方案，具體範圍及條款須視乎個別項目而定。",
        },
      },
    ],
    relatedSlugs: ["ai-lpr-camera", "parking-edge-controller", "payment-kiosk"],
  },
  {
    slug: "ai-lpr-camera",
    category: "parking-hardware",
    name: { en: "AI LPR Camera", zh: "AI 車牌識別相機" },
    tagline: {
      en: "AI-powered licence plate recognition tuned for Hong Kong plate formats, with local edge recognition and cloud-linked reporting.",
      zh: "AI 車牌識別相機，針對香港車牌格式優化，支援本地邊緣識別及雲端數據聯動。",
    },
    gallery: [],
    keyPoints: {
      en: [
        "Local, on-device recognition with cloud-linked reporting",
        "Supports day and night operation with multi-lane deployment",
        "Direct integration with Londeo's parking platform and barrier gates",
      ],
      zh: [
        "本地邊緣識別，並支援雲端數據聯動及報表",
        "支援日夜間運作及多車道部署",
        "可直接與 Londeo 停車平台及道閘整合",
      ],
    },
    highlights: [
      {
        title: { en: "Tuned for Hong Kong plates", zh: "針對香港車牌優化" },
        desc: {
          en: "Recognition is tuned for the plate formats used in Hong Kong, rather than a generic international model applied without adaptation.",
          zh: "識別引擎針對香港本地車牌格式進行優化，而非未經調整的通用國際車牌識別模型。",
        },
      },
      {
        title: { en: "Edge + cloud architecture", zh: "邊緣 + 雲端雙架構" },
        desc: {
          en: "Recognition runs locally at the camera/edge controller, with results synced to the cloud platform for multi-site reporting.",
          zh: "識別運算於相機/邊緣控制盒本地進行，結果同步至雲端平台以支援多場地報表管理。",
        },
      },
      {
        title: { en: "Multi-lane, multi-trigger", zh: "多車道、多觸發模式" },
        desc: {
          en: "Supports multiple lanes and trigger methods (loop detector, radar, or continuous capture) depending on site layout.",
          zh: "支援多車道及多種觸發方式（地感線圈、雷達或連續拍攝），可按現場佈局選用。",
        },
      },
    ],
    specs: [
      { label: { en: "Recognition method", zh: "識別方式" }, value: { en: "On-device AI recognition, cloud-synced", zh: "本地 AI 識別，雲端同步" } },
      { label: { en: "Supported plate types", zh: "支援車牌類型" } },
      { label: { en: "Capture distance / lane width", zh: "拍攝距離／車道寬度" } },
      { label: { en: "Night vision / IR", zh: "夜視／紅外線功能" } },
      { label: { en: "Video interface", zh: "視訊介面" } },
      { label: { en: "Power requirements", zh: "電源要求" } },
      { label: { en: "Operating temperature range", zh: "工作溫度範圍" } },
      { label: { en: "Ingress protection (IP) rating", zh: "防護等級 (IP)" } },
    ],
    compatibility: {
      en: "Integrates with Londeo's Parking Edge Controller, barrier gates, LED displays and payment kiosk for a complete entry/exit lane. Recognition performance depends on installation distance, angle, lighting, vehicle speed and plate condition.",
      zh: "可與 Londeo 停車場邊緣控制盒、道閘、LED 顯示屏及繳費終端整合，組成完整出入口方案。識別表現會受安裝距離、角度、光線、車速及車牌狀況影響。",
    },
    applications: {
      en: ["Shopping mall entrances/exits", "Residential estate access control", "Commercial building car parks", "Multi-lane public car parks"],
      zh: ["商場出入口", "住宅屋苑門禁", "商業大廈停車場", "多車道公共停車場"],
    },
    faqs: [
      {
        q: { en: "What recognition accuracy can we expect?", zh: "識別準確率大概是多少？" },
        a: {
          en: "Recognition performance depends on installation distance, angle, lighting, vehicle speed and plate condition — we assess and tune this on site rather than quoting a single generic figure.",
          zh: "識別表現視乎安裝距離、角度、光線、車速及車牌狀況而定——我們會於現場評估及調校，而非提供單一通用數字。",
        },
      },
      {
        q: { en: "Does the camera work without an internet connection?", zh: "相機在無網絡連接時能否運作？" },
        a: {
          en: "Recognition runs locally on-device; the cloud connection is used for multi-site reporting and management, not for the recognition itself.",
          zh: "識別運算於本機進行；雲端連接主要用於多場地報表及管理，並非用於識別過程本身。",
        },
      },
    ],
    relatedSlugs: ["fast-servo-barrier-gate", "parking-edge-controller", "payment-kiosk"],
  },
  {
    slug: "parking-edge-controller",
    category: "parking-software",
    name: { en: "Parking Edge Controller", zh: "停車場邊緣控制盒" },
    tagline: {
      en: "An on-site Linux edge computing box that keeps a car park running through cloud connectivity and local, offline fallback.",
      zh: "本地 Linux 邊緣運算控制盒，結合雲端連接與本地離線備援，確保停車場持續穩定運作。",
    },
    gallery: [],
    keyPoints: {
      en: [
        "Cloud + edge hybrid architecture with local offline fallback",
        "Coordinates LPR cameras, barrier gates, LED displays and payment kiosks on site",
        "Remote maintenance and monitoring from the Londeo cloud platform",
      ],
      zh: [
        "雲端 + 邊緣混合架構，具備本地離線備援",
        "於現場協調車牌識別相機、道閘、LED 顯示屏及繳費終端",
        "透過 Londeo 雲端平台進行遠端維護及監控",
      ],
    },
    highlights: [
      {
        title: { en: "Keeps working when the network drops", zh: "斷網仍可繼續運作" },
        desc: {
          en: "Core entry/exit logic runs locally, so vehicles can still be processed if the internet connection is temporarily unavailable.",
          zh: "核心出入場邏輯於本地執行，即使網絡暫時中斷，車輛仍可正常進出。",
        },
      },
      {
        title: { en: "One box, one lane, coordinated", zh: "一機統籌一條車道" },
        desc: {
          en: "Acts as the local coordination point between the LPR camera, barrier gate, LED display and payment kiosk at a single lane or entrance.",
          zh: "作為單一車道／出入口的本地協調中樞，統籌車牌識別相機、道閘、LED 顯示屏及繳費終端。",
        },
      },
      {
        title: { en: "Remotely maintainable", zh: "支援遠端維護" },
        desc: {
          en: "Connects back to the Londeo cloud platform for remote configuration, monitoring and maintenance across multiple sites.",
          zh: "連接至 Londeo 雲端平台，支援跨場地的遠端設定、監控及維護。",
        },
      },
    ],
    specs: [
      { label: { en: "Operating system", zh: "作業系統" }, value: { en: "Linux-based edge computing platform", zh: "Linux 邊緣運算平台" } },
      { label: { en: "Connectivity options", zh: "連接方式" }, value: { en: "Ethernet, with optional 4G", zh: "以太網，可選配 4G" } },
      { label: { en: "Supported I/O", zh: "支援介面" } },
      { label: { en: "Offline / local-fallback behaviour", zh: "離線／本地備援行為" } },
      { label: { en: "Storage", zh: "儲存容量" } },
      { label: { en: "Power input", zh: "電源輸入" } },
      { label: { en: "Operating temperature range", zh: "工作溫度範圍" } },
      { label: { en: "Enclosure / IP rating", zh: "外殼防護等級" } },
    ],
    compatibility: {
      en: "Built to coordinate Londeo's own LPR cameras, barrier gates, LED displays and payment kiosks, and to expose an API for integration with building management or ERP systems.",
      zh: "設計用於協調 Londeo 車牌識別相機、道閘、LED 顯示屏及繳費終端，並提供 API 以整合樓宇管理或 ERP 系統。",
    },
    applications: {
      en: ["Single-lane installations", "Multi-lane car parks", "Sites with unreliable internet connectivity", "Multi-site property portfolios"],
      zh: ["單車道場地", "多車道停車場", "網絡連接不穩定的場地", "多場地物業組合"],
    },
    faqs: [
      {
        q: { en: "What happens if the internet connection goes down?", zh: "若網絡連接中斷會發生什麼情況？" },
        a: {
          en: "Core entry/exit control continues to run locally on the edge controller; data syncs to the cloud once connectivity is restored.",
          zh: "核心出入場控制會繼續於邊緣控制盒本地運作；待網絡恢復後，數據會自動同步至雲端。",
        },
      },
    ],
    relatedSlugs: ["ai-lpr-camera", "fast-servo-barrier-gate", "payment-kiosk"],
  },
  {
    slug: "payment-kiosk",
    category: "payment-control",
    name: { en: "Payment Kiosk", zh: "自助繳費終端" },
    tagline: {
      en: "A self-service payment terminal for ticket and licence-plate lookup, built to support Hong Kong's mix of payment methods.",
      zh: "自助繳費終端，支援票據及車牌查詢，配合香港多元化支付方式而設計。",
    },
    gallery: [],
    keyPoints: {
      en: [
        "Self-service payment by ticket number or licence plate lookup",
        "Architecture designed to support Hong Kong's common payment methods",
        "Remote management and integration with the Londeo parking platform",
      ],
      zh: [
        "支援按票號或車牌查詢自助繳費",
        "架構設計可支援香港常見支付方式",
        "支援遠端管理，並與 Londeo 停車平台整合",
      ],
    },
    highlights: [
      {
        title: { en: "Ticket or plate lookup", zh: "票號或車牌查詢" },
        desc: {
          en: "Drivers can pay by scanning a ticket or looking up their vehicle by licence plate, reducing manual cashier handling.",
          zh: "車主可透過掃描票據或輸入車牌號碼查詢繳費，減少人手收費作業。",
        },
      },
      {
        title: { en: "Built for Hong Kong's payment mix", zh: "配合香港支付生態" },
        desc: {
          en: "Designed to support Hong Kong payment integration requirements, including Octopus, FPS, card and mobile wallet options.",
          zh: "系統架構可按項目需要對接香港本地支付方式，包括八達通、轉數快、信用卡及流動支付。",
        },
      },
      {
        title: { en: "Remotely managed", zh: "遠端管理" },
        desc: {
          en: "Tariffs, receipts and terminal status can be managed centrally from the Londeo parking platform.",
          zh: "收費標準、收據及終端狀態可於 Londeo 停車平台集中管理。",
        },
      },
    ],
    specs: [
      { label: { en: "Payment interfaces", zh: "支付介面" } },
      { label: { en: "Display", zh: "顯示屏" } },
      { label: { en: "Receipt printing", zh: "收據列印" } },
      { label: { en: "Connectivity", zh: "連接方式" } },
      { label: { en: "Remote management", zh: "遠端管理" }, value: { en: "Managed from the Londeo parking platform", zh: "透過 Londeo 停車平台管理" } },
      { label: { en: "Operating temperature range", zh: "工作溫度範圍" } },
      { label: { en: "Enclosure / IP rating", zh: "外殼防護等級" } },
    ],
    compatibility: {
      en: "Designed to support Hong Kong payment integration requirements. Availability of a specific payment method is subject to project scope, payment-provider approval and certification requirements.",
      zh: "系統架構可按項目需要對接香港本地支付方式。實際接入範圍須視項目要求、支付機構審批及認證條件而定。",
    },
    applications: {
      en: ["Shopping mall pay stations", "Commercial building lobbies", "Public car park self-service points", "Unstaffed / reduced-staff car parks"],
      zh: ["商場繳費站", "商業大廈大堂", "公共停車場自助繳費點", "無人／減人手停車場"],
    },
    faqs: [
      {
        q: { en: "Is Octopus payment already certified and live on this kiosk?", zh: "此終端機是否已正式取得八達通認證並上線？" },
        a: {
          en: "The system architecture is designed to support Octopus integration. Whether Octopus (or any other payment method) is certified and live for a given project depends on that project's scope and the payment provider's approval process — please ask our team for the current status.",
          zh: "系統架構設計上可支援八達通整合。個別項目是否已取得八達通（或其他支付方式）認證並正式上線，須視乎該項目範圍及支付機構的審批進度而定——歡迎向我們的團隊查詢最新狀態。",
        },
      },
    ],
    relatedSlugs: ["parking-edge-controller", "ai-lpr-camera", "fast-servo-barrier-gate"],
  },
  {
    slug: "pedestrian-access-gates",
    category: "pedestrian-access",
    name: { en: "Pedestrian Access Gates", zh: "人行通道閘" },
    tagline: {
      en: "Swing, flap and fast-lane pedestrian gates with 24V servo control, for commercial buildings, estates and public facilities.",
      zh: "擺閘、翼閘及快速通道閘，配備 24V 伺服控制，適用於商業大廈、屋苑及公共設施。",
    },
    gallery: [],
    keyPoints: {
      en: [
        "Swing gate, flap barrier and fast-lane options",
        "24V servo control shared with Londeo's vehicle barrier gate line",
        "RFID, QR code and visitor-system integration",
      ],
      zh: [
        "提供擺閘、翼閘及快速通道閘選項",
        "採用與 Londeo 車輛道閘系列相同的 24V 伺服控制技術",
        "支援 RFID、二維碼及訪客系統整合",
      ],
    },
    highlights: [
      {
        title: { en: "Multiple gate formats", zh: "多種閘機形式" },
        desc: {
          en: "Swing gates, flap barriers and fast-lane gates cover a range of throughput and security requirements.",
          zh: "擺閘、翼閘及快速通道閘可滿足不同人流量及保安需求。",
        },
      },
      {
        title: { en: "Shared servo control platform", zh: "共用伺服控制平台" },
        desc: {
          en: "Uses the same 24V servo control approach as Londeo's vehicle barrier gates, for consistent maintenance across a site.",
          zh: "採用與 Londeo 車輛道閘相同的 24V 伺服控制方案，方便同一場地統一維護。",
        },
      },
      {
        title: { en: "Credential-flexible", zh: "支援多種通行憑證" },
        desc: {
          en: "Supports RFID cards, QR codes and can interface with third-party facial recognition or visitor management terminals.",
          zh: "支援 RFID 卡、二維碼，並可與第三方人臉識別或訪客管理終端對接。",
        },
      },
    ],
    specs: [
      { label: { en: "Gate formats available", zh: "可選閘機形式" }, value: { en: "Swing gate, flap barrier, fast-lane gate", zh: "擺閘、翼閘、快速通道閘" } },
      { label: { en: "Control", zh: "控制方式" }, value: { en: "24V servo control", zh: "24V 伺服控制" } },
      { label: { en: "Credential support", zh: "支援憑證" }, value: { en: "RFID, QR code; third-party facial recognition interface available", zh: "RFID、二維碼；可對接第三方人臉識別終端" } },
      { label: { en: "Lane width", zh: "通道寬度" } },
      { label: { en: "Throughput", zh: "通行速度" } },
      { label: { en: "Operating temperature range", zh: "工作溫度範圍" } },
    ],
    compatibility: {
      en: "Integrates with RFID and QR-based visitor management systems, and can interface with third-party facial recognition terminals where a project requires it.",
      zh: "可與 RFID 及二維碼訪客管理系統整合，並可按項目需要對接第三方人臉識別終端。",
    },
    applications: {
      en: ["Commercial building lobbies", "Residential estate pedestrian entrances", "Public facilities", "Staff-only access points"],
      zh: ["商業大廈大堂", "住宅屋苑行人入口", "公共設施", "員工專用出入口"],
    },
    faqs: [
      {
        q: { en: "Can these gates integrate with our existing visitor management or facial recognition system?", zh: "這些閘機能否與我們現有的訪客管理或人臉識別系統整合？" },
        a: {
          en: "Integration with third-party visitor management and facial recognition terminals is assessed per project during a site assessment.",
          zh: "與第三方訪客管理及人臉識別終端的整合方案，須於現場勘察後按項目個別評估。",
        },
      },
    ],
    relatedSlugs: ["parking-edge-controller", "fast-servo-barrier-gate"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}
