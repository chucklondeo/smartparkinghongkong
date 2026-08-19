import type { Bi, BiList } from "./types";

export const metaDefaults = {
  titleSuffix: { en: " | Londeo Access", zh: " | Londeo Access" } as Bi,
};

export const capabilityBar: BiList = {
  en: [
    "Hong Kong Local Support",
    "Hardware + Software Integration",
    "Cloud + Edge Architecture",
    "OEM & Custom Integration",
  ],
  zh: [
    "香港本地支援",
    "軟硬件整合",
    "雲端 + 邊緣架構",
    "OEM 及定制整合",
  ],
};

export const implementationProcess: { title: Bi; desc: Bi }[] = [
  {
    title: { en: "Site Assessment", zh: "實地勘察" },
    desc: {
      en: "Our engineers review your site layout, existing equipment and requirements.",
      zh: "我們的工程師會實地勘察場地佈局、現有設備及需求。",
    },
  },
  {
    title: { en: "Solution Design", zh: "方案設計" },
    desc: {
      en: "A tailored architecture is proposed, covering hardware, software and payment integration.",
      zh: "根據評估結果，提出涵蓋硬件、軟件及支付整合的定制方案。",
    },
  },
  {
    title: { en: "Integration & Installation", zh: "系統整合及安裝" },
    desc: {
      en: "Hardware is installed and integrated with the parking platform and any existing systems.",
      zh: "安裝硬件並與停車平台及現有系統整合。",
    },
  },
  {
    title: { en: "Testing & Handover", zh: "測試及移交" },
    desc: {
      en: "The full system is tested end-to-end before being handed over to your operations team.",
      zh: "系統經全面測試後，方正式移交予您的營運團隊。",
    },
  },
  {
    title: { en: "Local Support", zh: "本地支援" },
    desc: {
      en: "Ongoing maintenance, troubleshooting and training are provided by our Hong Kong-based team.",
      zh: "由香港本地團隊提供持續維護、故障排除及培訓支援。",
    },
  },
];

export const advantages: { title: Bi; desc: Bi }[] = [
  {
    title: { en: "Hong Kong Local Service", zh: "香港本地服務" },
    desc: {
      en: "Installation, commissioning, maintenance and support are delivered locally in Hong Kong.",
      zh: "安裝、調試、維護及支援均由香港本地團隊提供。",
    },
  },
  {
    title: { en: "In-House Control Engineering", zh: "自研控制能力" },
    desc: {
      en: "Barrier gate and access control motion control is engineered in-house, not simply re-badged third-party hardware.",
      zh: "道閘及門禁的運動控制技術為自主研發，並非單純轉售第三方設備。",
    },
  },
  {
    title: { en: "Hardware + Software Integration", zh: "軟硬件整合" },
    desc: {
      en: "Cameras, barrier gates, edge controllers, kiosks and the cloud platform are designed to work together as one system.",
      zh: "相機、道閘、邊緣控制盒、繳費終端及雲端平台均設計為互相協同運作的單一系統。",
    },
  },
  {
    title: { en: "Installation & Commissioning", zh: "安裝及調試" },
    desc: {
      en: "From site assessment through to go-live, installation and commissioning are handled end to end.",
      zh: "由實地勘察至系統上線，安裝及調試工作一手包辦。",
    },
  },
  {
    title: { en: "Maintenance & Training", zh: "維修及培訓" },
    desc: {
      en: "Ongoing maintenance and operator training are provided after go-live.",
      zh: "系統上線後，提供持續維修及操作人員培訓。",
    },
  },
  {
    title: { en: "OEM / ODM", zh: "OEM / ODM" },
    desc: {
      en: "OEM/ODM and custom integration requests can be discussed for project-specific requirements.",
      zh: "歡迎按項目需要洽談 OEM/ODM 及定制整合方案。",
    },
  },
];

export const applicationsPage = {
  intro: {
    en: "Londeo Access hardware and software are designed for the range of venues below. We do not yet have published, permission-cleared case studies to share — as soon as a real, named reference project is available, it will appear here rather than an invented example.",
    zh: "Londeo Access 的軟硬件方案適用於以下各類場所。我們目前尚未有已獲授權公開的實際案例可供分享——一旦有真實、具名的參考項目獲准公開，將於此頁面更新，而非以虛構案例代替。",
  } as Bi,
  scenarios: [
    {
      title: { en: "Shopping Malls", zh: "商場" },
      desc: {
        en: "High-throughput entry/exit lanes with shopper validation and merchant integration.",
        zh: "高流量出入口車道，支援購物優惠驗証及商戶整合。",
      },
      href: "/solutions/shopping-malls",
    },
    {
      title: { en: "Residential Estates", zh: "住宅屋苑" },
      desc: {
        en: "Monthly permit management, visitor registration and barrier control for residents.",
        zh: "為住戶提供月租管理、訪客登記及道閘控制。",
      },
      href: "/solutions/residential-estates",
    },
    {
      title: { en: "Commercial Buildings", zh: "商業大廈" },
      desc: {
        en: "Tenant allocation, visitor pre-booking and automated billing for office towers.",
        zh: "租戶車位分配、訪客預約及自動賬單。",
      },
      href: "/solutions/commercial-buildings",
    },
    {
      title: { en: "Property Managers", zh: "物業管理公司" },
      desc: {
        en: "A single cloud dashboard across every property in a portfolio.",
        zh: "以單一雲端後台管理整個物業組合。",
      },
      href: "/solutions/property-managers",
    },
    {
      title: { en: "Government & Public Car Parks", zh: "政府及公共停車場" },
      desc: {
        en: "Concession management, audit trails and transparent reporting.",
        zh: "優惠票種管理、審計追蹤及透明報表。",
      },
      href: "/solutions/government-public",
    },
  ],
} as const;

export const resourcesPage = {
  intro: {
    en: "Downloadable datasheets, installation guides and case studies are being prepared. Until a document is confirmed and available, its section below is marked accordingly rather than linking to a placeholder file.",
    zh: "產品資料下載、安裝指南及案例文件正在準備中。文件確認及可供下載前，相關部分將標示為暫缺，而非提供空白或虛假連結。",
  } as Bi,
  faqTitle: { en: "Frequently Asked Questions", zh: "常見問題" } as Bi,
};

export const legalPages = {
  privacy: {
    title: { en: "Privacy Policy", zh: "私隱政策" } as Bi,
    updated: "2026-07-28",
    sections: [
      {
        heading: { en: "Information we collect", zh: "我們收集的資料" },
        body: {
          en: "When you submit an enquiry through this website, we collect the information you provide in the contact form: your name, company/property name, email address and/or WhatsApp number, enquiry type, and any optional details such as product interest, project location, quantity or message content.",
          zh: "當您透過本網站提交查詢時，我們會收集您於聯絡表格中提供的資料，包括姓名、公司／物業名稱、電郵地址及／或 WhatsApp 號碼、查詢類型，以及任何選填資料，例如產品興趣、項目地點、數量或訊息內容。",
        },
      },
      {
        heading: { en: "How we use it", zh: "資料用途" },
        body: {
          en: "Information submitted through the contact form is used solely to respond to your enquiry, including preparing a quotation, arranging a site assessment or demo, and following up by email or WhatsApp.",
          zh: "透過聯絡表格提交的資料，僅用於回覆您的查詢，包括準備報價、安排實地勘察或示範，以及透過電郵或 WhatsApp 跟進。",
        },
      },
      {
        heading: { en: "Third-party form processing", zh: "第三方表格處理" },
        body: {
          en: "Contact form submissions are processed via a Supabase Edge Function and delivered by email through the Resend service. These providers process data on our behalf solely to deliver your enquiry to our team; they do not independently market to you using this data.",
          zh: "聯絡表格的提交內容經由 Supabase Edge Function 處理，並透過 Resend 電郵服務發送。以上服務供應商僅代表我們處理資料，將您的查詢傳送至我們的團隊，不會自行使用該等資料向您進行推廣。",
        },
      },
      {
        heading: { en: "Analytics", zh: "數據分析" },
        body: {
          en: "If website analytics (such as Google Analytics) are enabled in the future, they will be used only to understand aggregate site usage and improve the website; no analytics tracking ID is currently configured on this site.",
          zh: "若日後啟用網站數據分析工具（例如 Google Analytics），僅會用於了解整體網站使用情況及改善網站體驗；本網站目前尚未設定任何數據分析追蹤編號。",
        },
      },
      {
        heading: { en: "Data handling principles", zh: "數據處理原則" },
        body: {
          en: "We aim to collect only the information needed to respond to your enquiry and to handle it in a manner consistent with Hong Kong's Personal Data (Privacy) Ordinance (PDPO). This policy describes our current practice and has not been reviewed by external legal counsel — see docs/production-deployment-checklist.md for the recommended legal review before launch.",
          zh: "我們致力只收集回覆查詢所需的資料，並按照香港《個人資料（私隱）條例》的原則處理有關資料。本政策僅為目前實際做法的說明，尚未經外部法律顧問審核——建議上線前的法律審核事項，請參閱 docs/production-deployment-checklist.md。",
        },
      },
      {
        heading: { en: "Contacting us", zh: "聯絡我們" },
        body: {
          en: "For any question about how your information is handled, contact us at sales@londeoaccess.com.hk or via WhatsApp at +852 9041 6433.",
          zh: "如對資料處理方式有任何疑問，歡迎電郵至 sales@londeoaccess.com.hk 或透過 WhatsApp（+852 9041 6433）聯絡我們。",
        },
      },
    ],
  },
  terms: {
    title: { en: "Terms of Service", zh: "服務條款" } as Bi,
    updated: "2026-07-28",
    sections: [
      {
        heading: { en: "About this website", zh: "關於本網站" },
        body: {
          en: "This website describes Londeo Access's smart parking and access control products and services for Hong Kong. Content is provided for informational purposes; specifications, availability and pricing are confirmed on a per-project basis and may be updated as products evolve.",
          zh: "本網站介紹 Londeo Access 為香港市場提供的智慧停車及門禁產品與服務。網站內容僅供參考，具體規格、供應情況及價格須按個別項目確認，並可能隨產品發展而更新。",
        },
      },
      {
        heading: { en: "Enquiries and quotations", zh: "查詢及報價" },
        body: {
          en: "Submitting an enquiry or requesting a quote through this website does not create a binding contract. A formal proposal or agreement will be issued separately once project scope is confirmed.",
          zh: "透過本網站提交查詢或索取報價，並不構成具約束力的合約。正式建議書或協議將於確認項目範圍後另行發出。",
        },
      },
      {
        heading: { en: "Intellectual property", zh: "知識產權" },
        body: {
          en: "The Londeo Access name, logo and website content are the property of Londeo Access and may not be reproduced without permission.",
          zh: "Londeo Access 名稱、標誌及網站內容均屬 Londeo Access 所有，未經許可不得轉載。",
        },
      },
      {
        heading: { en: "Limitation of liability", zh: "責任限制" },
        body: {
          en: "This website is provided on an as-is basis. While we aim for accuracy, product specifications and availability are subject to change and should be confirmed directly with our team before purchase.",
          zh: "本網站內容按現況提供。我們力求資料準確，惟產品規格及供應情況可能有所變動，購買前應直接向我們的團隊確認。",
        },
      },
      {
        heading: { en: "Governing law", zh: "適用法律" },
        body: {
          en: "These terms are governed by the laws of the Hong Kong Special Administrative Region. This is a working draft and has not yet been reviewed by external legal counsel — see docs/production-deployment-checklist.md.",
          zh: "本條款受香港特別行政區法律管轄。本條款屬工作草稿，尚未經外部法律顧問審核——詳見 docs/production-deployment-checklist.md。",
        },
      },
    ],
  },
};

export const thankYouPage = {
  title: { en: "Thank You", zh: "多謝您的查詢" } as Bi,
  body: {
    en: "We've received your enquiry and a member of our Hong Kong team will be in touch within 1 business day.",
    zh: "我們已收到您的查詢，香港本地團隊將於一個工作天內與您聯絡。",
  } as Bi,
  urgent: {
    en: "For urgent projects, message us directly on WhatsApp.",
    zh: "如屬緊急項目，歡迎直接透過 WhatsApp 與我們聯絡。",
  } as Bi,
  backToProducts: { en: "Browse Products", zh: "瀏覽產品" } as Bi,
};

export const aboutPageExtra = {
  positioningTitle: { en: "Smart Parking & Access Solutions for Hong Kong", zh: "香港智慧停車及門禁解決方案" } as Bi,
  positioningBody: {
    en: "Londeo Access designs and integrates smart parking and automated access control systems for Hong Kong — combining AI LPR cameras, servo barrier gates, edge computing controllers, payment kiosks and pedestrian access gates with a cloud parking management platform.",
    zh: "Londeo Access 專為香港市場設計及整合智慧停車與自動門禁系統——結合 AI 車牌識別相機、伺服道閘、邊緣運算控制盒、繳費終端及人行通道閘，並配以雲端停車管理平台。",
  } as Bi,
  crossBorderTitle: { en: "Where our products are engineered and delivered", zh: "產品研發及交付地點" } as Bi,
  crossBorderBody: {
    en: "Product engineering and hardware assembly draw on our cross-border supply chain and R&D capability in the Greater Bay Area, while project delivery, installation, commissioning, maintenance and customer support for Hong Kong projects are handled locally by our Hong Kong-based team. Not every team member is based in Hong Kong, but every Hong Kong project is delivered and supported locally.",
    zh: "產品研發及硬件組裝倚賴我們於大灣區的跨境供應鏈及研發能力，而香港項目的實施、安裝、調試、維修及客戶支援則由我們的香港本地團隊負責。並非所有團隊成員均常駐香港，惟每個香港項目均由本地團隊負責交付及支援。",
  } as Bi,
  targetCustomersTitle: { en: "Who we work with", zh: "服務對象" } as Bi,
  targetCustomers: {
    en: [
      "Property management companies",
      "Shopping malls",
      "Residential estates",
      "Commercial buildings",
      "Car park operators",
      "Government and public car parks",
      "Systems integrators",
      "Engineering contractors",
    ],
    zh: [
      "物業管理公司",
      "商場",
      "住宅屋苑",
      "商業大廈",
      "停車場營運商",
      "政府及公共停車場",
      "系統集成商",
      "工程承包商",
    ],
  } as BiList,
};
