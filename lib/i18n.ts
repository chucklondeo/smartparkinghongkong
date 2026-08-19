export type Lang = "en" | "zh";

export const translations = {
  en: {
    nav: {
      solutions: "Solutions",
      platform: "Platform",
      hardware: "Hardware",
      whyHK: "Why HK",
      about: "About",
      contact: "Contact",
      bookDemo: "Book a Demo",
      language: "繁中",
    },
    hero: {
      badge: "Hong Kong's Smart Parking Platform",
      title: "Smart Parking Platform",
      titleAccent: "Built for Hong Kong",
      subtitle:
        "Integrating Octopus, FPS, credit cards, mobile payments, LPR cameras, LED displays, barriers and cloud management — all in one platform.",
      cta1: "Book a Demo",
    },
    solutions: {
      badge: "Our Solutions",
      title: "Built for Every",
      titleAccent: "Hong Kong Venue",
      subtitle:
        "From bustling shopping malls to private residential estates, our platform adapts to the unique demands of Hong Kong's diverse property landscape.",
      items: [
        {
          title: "Shopping Malls",
          desc: "High-throughput systems for retail complexes. Shopper validation, merchant integration, and real-time space guidance.",
          points: ["Shopper parking validation", "Multi-level management", "Peak hour analytics"],
        },
        {
          title: "Residential Estates",
          desc: "Seamless monthly permit management for residents. Visitor registration, intercom integration, and 24/7 barrier control.",
          points: ["Resident permit system", "Visitor management", "Intercom integration"],
        },
        {
          title: "Commercial Buildings",
          desc: "Enterprise-grade access control for office towers. Tenant allocation, visitor booking, and automated billing.",
          points: ["Tenant space allocation", "Visitor pre-booking", "Automated invoicing"],
        },
        {
          title: "Government & Public",
          desc: "Compliant solutions for government car parks and public facilities. Audit trails, concession management, and transparent reporting.",
          points: ["Concession management", "Full audit trails", "Public usage reporting"],
        },
        {
          title: "Property Managers",
          desc: "Unified dashboard for managing multiple properties across Hong Kong. One backend, full visibility, centralised control.",
          points: ["Multi-site dashboard", "Centralised reporting", "Portfolio analytics"],
        },
      ],
    },
    platform: {
      badge: "Platform Features",
      title: "Every Feature Your",
      titleAccent: "Operation Needs",
      subtitle:
        "A comprehensive suite of tools engineered specifically for Hong Kong's payment ecosystem, regulatory environment and operational complexity.",
      payments: {
        title: "Hong Kong Payment Integration",
        subtitle: "Every payment method Hong Kong drivers use",
        items: [
          { name: "Octopus 八達通", desc: "Full Octopus card reader integration with real-time balance deduction" },
          { name: "FPS 轉數快", desc: "Instant QR payment via Faster Payment System" },
          { name: "Visa / Mastercard", desc: "EMV chip & contactless credit and debit cards" },
          { name: "Apple Pay / Google Pay", desc: "NFC mobile payment for frictionless exit" },
          { name: "WeChat Pay / Alipay", desc: "Cross-border digital wallets for mainland visitors" },
        ],
      },
      ops: {
        title: "Operations & Management",
        subtitle: "Complete operational control",
        items: [
          { name: "LPR Camera Recognition", desc: "AI-powered licence plate recognition, tuned for Hong Kong plate formats" },
          { name: "Monthly Permit Management", desc: "Automated renewal, billing and notification for monthly tenants" },
          { name: "Transient Vehicle Charging", desc: "Flexible hourly, daily and event-based tariff configurations" },
          { name: "Black & White Lists", desc: "Instant vehicle access control with real-time list sync" },
          { name: "Multi-site Central Management", desc: "Manage all properties from one unified cloud dashboard" },
          { name: "Real-time Revenue Reports", desc: "Live dashboards, scheduled reports and financial reconciliation" },
          { name: "Cloud + Edge Control", desc: "Hybrid architecture: cloud management with local offline fallback" },
          { name: "LED & Barrier Control", desc: "Direct integration with display panels and boom gate controllers" },
          { name: "Property System API", desc: "Open API for integration with building management and ERP systems" },
        ],
      },
    },
    hardware: {
      badge: "Hardware Integration",
      title: "Works With Your",
      titleAccent: "Existing Infrastructure",
      subtitle:
        "Londeo integrates with leading hardware brands already deployed across Hong Kong. No rip-and-replace — our software connects to your existing equipment.",
      items: [
        { name: "LPR Camera", desc: "High-speed licence plate recognition cameras, supports night vision and multi-lane capture" },
        { name: "Barrier Gate", desc: "24V servo boom gate controllers engineered for smooth, responsive, high-cycle operation" },
        { name: "LED Display", desc: "Full-colour guidance signs and vacancy counters, remotely managed" },
        { name: "Payment Kiosk", desc: "Self-service pay stations with multi-payment hardware integration" },
        { name: "Intercom System", desc: "IP intercom for remote operator assistance and visitor management" },
        { name: "Access Control", desc: "RFID, QR and mobile-based entry systems for residential and commercial" },
        { name: "Edge Controller", desc: "On-premise cloud box for offline resilience and local data processing" },
      ],
    },
    whyHK: {
      badge: "Why Hong Kong",
      title: "Solving Real",
      titleAccent: "Hong Kong Challenges",
      subtitle:
        "Hong Kong's parking market is uniquely complex. We built Londeo from the ground up to address challenges that generic platforms simply cannot handle.",
      items: [
        {
          title: "Acute Space Scarcity",
          desc: "With one of the world's highest vehicle-to-space ratios, Hong Kong car parks need intelligent occupancy management and dynamic pricing to maximise revenue per bay.",
        },
        {
          title: "Multi-property Complexity",
          desc: "Property groups managing dozens of sites across the territory need a single platform — not a patchwork of disconnected systems with separate logins and reports.",
        },
        {
          title: "Legacy Cash Operations",
          desc: "Many car parks still rely on manual cashiers and paper receipts. Londeo automates collection, eliminates cash handling risk and reduces staffing costs overnight.",
        },
        {
          title: "Local Payment Requirements",
          desc: "Hong Kong commuters expect Octopus and FPS as standard. Our platform architecture is designed to support Hong Kong payment integration requirements, alongside international card and mobile wallet methods.",
        },
        {
          title: "Unified Reporting for Owners",
          desc: "Property owners and accountants need consolidated P&L, occupancy and compliance data. Londeo delivers automated, auditor-ready reports across all sites.",
        },
        {
          title: "Regulatory Compliance",
          desc: "Our platform is designed with Hong Kong's data privacy requirements (PDPO) and transport-sector conventions in mind from the outset.",
        },
      ],
    },
    dashboard: {
      badge: "Product UI",
      title: "Powerful Dashboard,",
      titleAccent: "Simple to Operate",
      subtitle:
        "Purpose-built for parking operators. Real-time intelligence at a glance — no training required.",
      todayRevenue: "Today's Revenue",
      vehicleIn: "Vehicle Entries",
      vehicleOut: "Vehicle Exits",
      occupancy: "Occupancy Rate",
      alerts: "Active Alerts",
      paymentBreakdown: "Payment Breakdown",
      liveActivity: "Live Activity",
      sites: "Sites Overview",
    },
    about: {
      badge: "About Londeo",
      title: "Hong Kong's Smart",
      titleAccent: "Parking Partner",
      desc1:
        "Londeo provides smart parking software and full-stack integration solutions for Hong Kong property owners, shopping malls, commercial buildings and operators.",
      desc2:
        "Our team combines deep expertise in parking technology, Hong Kong regulatory compliance and local payment infrastructure. We don't just sell software — we deliver a complete, end-to-end transformation of how your car park operates.",
      desc3:
        "Whether you manage a single residential estate or a large portfolio of commercial car parks, Londeo's architecture is designed to scale with your business.",
      values: [
        { title: "Local Expertise", desc: "Built by a team that understands Hong Kong's parking market inside out" },
        { title: "Enterprise-Grade Architecture", desc: "Built for high-availability operation, with enterprise security practices" },
        { title: "Full Integration", desc: "Hardware, payment, reporting — one platform, zero silos" },
        { title: "Dedicated Support", desc: "Cantonese and English-speaking local support team" },
      ],
    },
    contact: {
      badge: "Get in Touch",
      title: "Start Your Smart Parking",
      titleAccent: "Project in Hong Kong",
      subtitle:
        "Tell us about your property and we will design a custom solution — from site assessment through to go-live.",
      form: {
        name: "Your Name",
        company: "Company / Property Name",
        email: "Email Address",
        whatsapp: "WhatsApp Number",
        emailOrWhatsapp: "Provide an email address or WhatsApp number",
        enquiryType: "Enquiry Type",
        enquiryTypes: [
          "Book a Demo",
          "Request a Quote",
          "Request Site Assessment",
          "Product Question",
          "Support",
          "General Enquiry",
        ],
        product: "Product (optional)",
        productPlaceholder: "Select a product…",
        projectLocation: "Project Location (optional)",
        quantity: "Quantity (optional)",
        currentSystem: "Current System (optional)",
        message: "Tell us about your project",
        submit: "Send Enquiry",
        success: "Thank you! We'll be in touch within 1 business day.",
        error: "Something went wrong sending your enquiry. Please try WhatsApp or email us directly below.",
      },
      info: {
        title: "Why Book a Demo?",
        points: [
          "See the full platform live — dashboard, payments, LPR and hardware",
          "Get a custom proposal tailored to your property type",
          "Meet our Hong Kong-based technical team",
          "Understand integration requirements and go-live timeline",
        ],
      },
    },
    footer: {
      tagline: "Smart Parking for Hong Kong",
      solutions: "Solutions",
      platform: "Platform",
      company: "Company",
      links: {
        solutions: ["Shopping Malls", "Residential", "Commercial", "Government", "Property Managers"],
        platform: ["Payment Integration", "LPR System", "Hardware", "Dashboard", "API Docs"],
        company: ["About Us", "Careers", "Press", "Contact"],
      },
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  zh: {
    nav: {
      solutions: "解決方案",
      platform: "平台功能",
      hardware: "硬件整合",
      whyHK: "為何選擇我們",
      about: "關於我們",
      contact: "聯絡我們",
      bookDemo: "預約示範",
      language: "EN",
    },
    hero: {
      badge: "香港智慧停車管理平台",
      title: "智慧停車平台",
      titleAccent: "專為香港而設",
      subtitle:
        "整合八達通、轉數快、信用卡、流動支付、車牌識別、LED 顯示屏、道閘及雲端管理——一個平台，全面覆蓋。",
      cta1: "預約示範",
    },
    solutions: {
      badge: "解決方案",
      title: "覆蓋香港各類",
      titleAccent: "物業場所",
      subtitle:
        "無論是大型商場、私人屋苑、還是商業大廈，我們的平台均能適應香港多元化物業市場的獨特需求。",
      items: [
        {
          title: "商場停車場",
          desc: "高流量商場停車系統，支援購物優惠驗証、商戶整合及實時車位引導。",
          points: ["購物優惠驗証", "多層停車場管理", "繁忙時段數據分析"],
        },
        {
          title: "屋苑 / 住宅停車場",
          desc: "為住戶提供流暢的月租管理，支援訪客登記、對講機整合及全天候道閘控制。",
          points: ["住戶月租系統", "訪客登記管理", "對講機整合"],
        },
        {
          title: "商業大廈",
          desc: "為寫字樓提供企業級門禁管理，包括租戶車位分配、訪客預約及自動賬單。",
          points: ["租戶車位分配", "訪客預約系統", "自動生成賬單"],
        },
        {
          title: "政府及公共停車場",
          desc: "符合政府規範的停車解決方案，具備完整審計追蹤、優惠管理及透明報表功能。",
          points: ["優惠票種管理", "完整審計追蹤", "公眾使用報表"],
        },
        {
          title: "物業管理公司",
          desc: "統一管理多個物業的後台，一個系統、全面監控、集中控制。",
          points: ["多場地儀表板", "集中報表管理", "物業組合分析"],
        },
      ],
    },
    platform: {
      badge: "平台功能",
      title: "您的業務所需",
      titleAccent: "每一項功能",
      subtitle:
        "專為香港支付生態系統、監管環境及運營複雜性而設計的全面功能套件。",
      payments: {
        title: "香港本地支付整合",
        subtitle: "支援香港車主使用的每種付款方式",
        items: [
          { name: "Octopus 八達通", desc: "完整的八達通讀卡器整合，即時扣款" },
          { name: "FPS 轉數快", desc: "透過轉數快即時掃碼付款" },
          { name: "Visa / Mastercard", desc: "EMV 晶片及非接觸式信用卡與扣賬卡" },
          { name: "Apple Pay / Google Pay", desc: "NFC 流動支付，快速離場" },
          { name: "WeChat Pay / Alipay", desc: "支援內地訪客使用的跨境電子錢包" },
        ],
      },
      ops: {
        title: "運營管理功能",
        subtitle: "全面的運營控制能力",
        items: [
          { name: "車牌識別 LPR", desc: "AI 智能車牌識別，針對香港車牌格式優化" },
          { name: "月租車管理", desc: "自動續期、扣款及通知，輕鬆管理月租用戶" },
          { name: "臨時車收費管理", desc: "靈活配置按時、按日及活動收費方案" },
          { name: "黑白名單管理", desc: "即時同步黑白名單，精確控制車輛進出" },
          { name: "多停車場集中管理", desc: "一個雲端後台，管理旗下所有物業" },
          { name: "實時收入報表", desc: "即時儀表板、定期報表及財務對賬" },
          { name: "雲端 + 本地邊緣控制", desc: "混合架構：雲端管理配合本地離線備援" },
          { name: "LED 顯示屏及道閘控制", desc: "直接整合顯示屏及道閘控制器" },
          { name: "物業系統 API 對接", desc: "開放 API，可整合樓宇管理及 ERP 系統" },
        ],
      },
    },
    hardware: {
      badge: "硬件整合",
      title: "兼容現有",
      titleAccent: "基礎設施",
      subtitle:
        "Londeo 支援香港已廣泛部署的主流硬件品牌，無需全面更換設備，我們的軟件直接對接現有設備。",
      items: [
        { name: "車牌識別攝影機", desc: "高速車牌識別攝影機，支援夜視及多車道捕捉" },
        { name: "道閘控制器", desc: "24V 伺服道閘控制器，運行順暢、反應靈敏，適合高頻次運作" },
        { name: "LED 顯示屏", desc: "全彩引導指示牌及車位計數器，可遠端管理" },
        { name: "自助繳費機", desc: "自助付款終端，整合多種支付硬件" },
        { name: "對講系統", desc: "IP 對講機，支援遠端協助及訪客管理" },
        { name: "門禁系統", desc: "RFID、二維碼及流動設備門禁，適用住宅及商業" },
        { name: "邊緣控制盒", desc: "本地雲端盒子，提供離線韌性及本地數據處理" },
      ],
    },
    whyHK: {
      badge: "為何選擇我們",
      title: "解決香港停車",
      titleAccent: "真實痛點",
      subtitle:
        "香港停車市場複雜獨特。我們從零開始構建 Londeo，專門解決通用平台無法應對的挑戰。",
      items: [
        {
          title: "車位嚴重短缺",
          desc: "香港車輛與車位比例全球最高之一，停車場需要智能車位管理及動態定價，以最大化每個車位的收益。",
        },
        {
          title: "多物業管理複雜",
          desc: "管理全港多個物業的物業集團，需要一個統一平台，而非各自獨立、需要分別登入的拼湊系統。",
        },
        {
          title: "傳統現金作業",
          desc: "許多停車場仍依賴人工收費及紙本收據。Londeo 自動化收費，消除現金處理風險，即時降低人手成本。",
        },
        {
          title: "本地支付需求",
          desc: "香港市民視八達通及轉數快為標準付款方式。我們的平台架構設計上可支援香港本地支付整合需求，並兼容國際信用卡及流動支付方式。",
        },
        {
          title: "業主統一報表需求",
          desc: "物業業主及會計師需要跨物業的綜合損益、佔用率及合規數據。Londeo 提供自動生成、審計就緒的全面報表。",
        },
        {
          title: "監管合規要求",
          desc: "我們的平台從設計之初已考慮香港《個人資料（私隱）條例》及運輸業界慣例。",
        },
      ],
    },
    dashboard: {
      badge: "產品介面",
      title: "功能強大的儀表板，",
      titleAccent: "操作簡單直覺",
      subtitle:
        "專為停車場營運商而設，實時數據一目了然——無需培訓即可上手。",
      todayRevenue: "今日收入",
      vehicleIn: "車輛進場",
      vehicleOut: "車輛離場",
      occupancy: "佔用率",
      alerts: "活躍告警",
      paymentBreakdown: "付款方式分佈",
      liveActivity: "即時動態",
      sites: "場地總覽",
    },
    about: {
      badge: "關於 Londeo",
      title: "香港智慧停車",
      titleAccent: "最佳夥伴",
      desc1:
        "Londeo 為香港物業業主、商場、商業大廈及營運商提供智慧停車軟件及全棧整合解決方案。",
      desc2:
        "我們的團隊在停車技術、香港法規合規及本地支付基礎設施方面擁有深厚專業知識。我們不只是銷售軟件——我們提供完整的端到端停車場運營轉型方案。",
      desc3:
        "無論您管理的是單一住宅屋苑，還是規模龐大的商業停車場組合，Londeo 的架構均設計為可隨業務發展而擴展。",
      values: [
        { title: "本地專業", desc: "由深了解香港停車場市場的團隊打造" },
        { title: "企業級架構", desc: "為高可用性運作而設計，並採用企業級安全實踐" },
        { title: "全面整合", desc: "硬件、支付、報表——一個平台，零數據孤島" },
        { title: "專屬支援", desc: "廣東話及英語本地支援團隊" },
      ],
    },
    contact: {
      badge: "聯絡我們",
      title: "在香港啟動您的",
      titleAccent: "智慧停車項目",
      subtitle:
        "告訴我們您的物業詳情，我們將為您設計定制方案——由實地勘察到正式上線，全程支援。",
      form: {
        name: "您的姓名",
        company: "公司 / 物業名稱",
        email: "電郵地址",
        whatsapp: "WhatsApp 號碼",
        emailOrWhatsapp: "請提供電郵地址或 WhatsApp 號碼",
        enquiryType: "查詢類型",
        enquiryTypes: [
          "預約示範",
          "索取報價",
          "申請現場勘察",
          "產品查詢",
          "技術支援",
          "一般查詢",
        ],
        product: "產品（選填）",
        productPlaceholder: "請選擇產品…",
        projectLocation: "項目地點（選填）",
        quantity: "數量（選填）",
        currentSystem: "現有系統（選填）",
        message: "請簡述您的項目",
        submit: "發送查詢",
        success: "感謝您的查詢！我們將在一個工作日內與您聯絡。",
        error: "發送查詢時發生問題，請直接透過下方 WhatsApp 或電郵聯絡我們。",
      },
      info: {
        title: "預約示範的好處",
        points: [
          "現場體驗完整平台——儀表板、支付、車牌識別及硬件",
          "獲取針對您物業類型的定制建議書",
          "與我們的香港本地技術團隊直接溝通",
          "了解整合要求及上線時間表",
        ],
      },
    },
    footer: {
      tagline: "香港智慧停車解決方案",
      solutions: "解決方案",
      platform: "平台功能",
      company: "公司",
      links: {
        solutions: ["商場停車場", "住宅屋苑", "商業大廈", "政府公共", "物業管理"],
        platform: ["支付整合", "車牌識別", "硬件整合", "管理後台", "API 文件"],
        company: ["關於我們", "招聘", "媒體查詢", "聯絡我們"],
      },
      rights: "版權所有。",
      privacy: "私隱政策",
      terms: "服務條款",
    },
  },
};

export type Translations = typeof translations.en;
