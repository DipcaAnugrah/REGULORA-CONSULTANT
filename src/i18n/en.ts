import type { Dict } from "./id";

const en: Dict = {
  site: {
    title: "REGULORA CONSULTANT | Licensing Support in Indonesia",
    description:
      "Consulting and licensing support for medical devices, PKRT, food, and cosmetics in Indonesia.",
    ogAlt: "REGULORA CONSULTANT — Licensing support",
    skipLink: "Skip to content",
    devNotice:
      "Development: WhatsApp number is not configured yet. CTAs point to the contact page.",
  },
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    allServices: "All Services",
    articles: "Articles",
    contact: "Contact",
    consultNow: "Consult Now",
    mainLabel: "Main navigation",
    mobileLabel: "Mobile navigation",
    open: "Open navigation",
    close: "Close navigation",
    logoLabel: "Regulora Consultant — Home",
    language: "Choose language",
  },
  whatsapp: {
    generalMessage:
      "Hello REGULORA CONSULTANT, I would like to consult about product and business licensing.",
    serviceMessage: (service: string) =>
      `Hello REGULORA CONSULTANT, I would like to consult about ${service}.`,
    button: "Consult via WhatsApp",
    fallback: "Consult now",
    floating: "WhatsApp Chat",
    refLine: "Ref",
  },
  cookie: {
    label: "Analytics preferences",
    title: "Your privacy choices",
    body: "Allow analytics and ad measurement to help us understand how the site is used. The form remains available without consent.",
    policyLink: "Read the privacy policy",
    accept: "Allow",
    reject: "Decline",
    settings: "Cookie preferences",
  },
  footer: {
    taglineA: "Clear guidance.",
    taglineB: "More focused business steps.",
    note: "Licensing consulting & support",
    servicesTitle: "Our services",
    aboutTitle: "Get to know Regulora",
    aboutLink: "About us",
    articlesLink: "Articles & insights",
    faqLink: "Frequently asked questions",
    contactLink: "Contact us",
    talkTitle: "Let's start a conversation",
    talkBody: "Tell us about your product and business needs.",
    talkButton: "Contact us",
    disclaimer:
      "REGULORA CONSULTANT is an independent support service provider. We do not issue licenses and are not officially affiliated with any government agency.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    disclaimerLink: "Disclaimer",
  },
  common: {
    exploreService: "Explore service",
    trustA: "Focused guidance",
    trustB: "Transparent communication",
    breadcrumbLabel: "Breadcrumb",
    ctaImageAlt: "Visual representation of Regulora in a welcoming pose",
    ctaEyebrow: "THE FIRST STEP STARTS HERE",
    ctaTitle: "Not sure which licenses you need?",
    ctaBody:
      "Discuss your business and product needs with REGULORA CONSULTANT.",
    ctaButton: "Contact our consultants",
  },
  home: {
    metaTitle: "BPOM, PIRT & Medical Device Licensing in Indonesia | REGULORA CONSULTANT",
    metaDescription:
      "REGULORA CONSULTANT: BPOM cosmetic, BPOM MD/ML, PIRT, medical device and PKRT licensing services in Indonesia. Initial consultation via WhatsApp.",
    schemaDescription:
      "Consulting and licensing support for medical devices, PKRT, food, and cosmetics in Indonesia.",
    offerCatalog: "Licensing Services",
    eyebrow: "BPOM, PIRT & MEDICAL DEVICE LICENSING",
    titleA: "Surer steps.",
    titleB: "A business",
    titleHighlight: "better prepared.",
    introBefore: "Handle product and business licensing more easily with",
    introAfter:
      "Clear, focused guidance, from understanding your needs to going through the process.",
    exploreServices: "Explore services",
    heroImageAlt: "Visual representation of Regulora with arms folded",
    captionA: "Every business has its own path.",
    captionB: "We help guide your steps.",
    verticalLabel: "CLARITY IN EVERY STEP",
    scrollCue: "DISCOVER OUR SERVICES",
    sectorLabel: "AREAS OF SUPPORT",
    sectors: ["Medical Devices", "PKRT", "Food", "Cosmetics"],
    servicesEyebrow: "OUR SERVICES",
    servicesTitle: "Different needs. The right support.",
    servicesDescription:
      "Find the service that fits the stage your product and business are at.",
    allServices: "All services",
    aboutEyebrow: "ABOUT REGULORA",
    aboutTitleA: "Behind every business ready to move forward,",
    aboutTitleB: "is a process that is understood.",
    aboutLabel: "MEET YOUR LICENSING PARTNER",
    aboutP1:
      "Going through the licensing process does not have to be confusing. We are here to help you understand what is needed and the steps to take.",
    aboutP2:
      "REGULORA CONSULTANT provides consulting and support services for product and business licensing, with an approach tailored to your needs.",
    aboutLink: "Get to know Regulora",
    approachEyebrow: "HOW WE SUPPORT YOU",
    approachTitle: "Not just a process. It's about clarity.",
    features: [
      [
        "Focused guidance",
        "Mapping the needs and steps relevant to your business.",
      ],
      [
        "Clear communication",
        "Information delivered in language that is easy to understand.",
      ],
      [
        "Tailored to your needs",
        "An approach that considers your product type and business situation.",
      ],
      [
        "Transparent process",
        "Scope and stages are discussed from the start of the engagement.",
      ],
    ],
    processEyebrow: "HOW THE SUPPORT WORKS",
    processTitle: "Step by step, alongside you.",
    processDescription:
      "Get an overview of the process before starting your licensing journey.",
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Let's clarify before you start.",
    faqDescription:
      "Initial answers to questions you may have in mind.",
    faqLink: "See all questions",
  },
  about: {
    metaTitle: "About Us",
    metaDescription:
      "Get to know REGULORA CONSULTANT, a provider of consulting and support services for product and business licensing in Indonesia.",
    breadcrumb: "About us",
    eyebrow: "GET TO KNOW REGULORA",
    titleA: "A partner in understanding the process.",
    titleB: "A companion for every step.",
    intro:
      "We believe the licensing journey starts with a clear understanding of your business needs.",
    sectionA: "Support that stays close to your business",
    p1: "REGULORA CONSULTANT is a provider of consulting and support services for product and business licensing in Indonesia. Our services focus on medical devices, PKRT (household health supplies), food, and cosmetics.",
    p2: "We help SMEs, brand owners, manufacturers, distributors, and importers map their needs before going through the application process. Every business activity has a different context, so our support starts with a conversation.",
    sectionB: "Clarity from the start",
    p3: "Scope, division of responsibilities, and fees are discussed based on your needs and document readiness. We make no promise that a license will be issued or completed within a certain time.",
    principlesTitle: "Our principles",
    principles: [
      "Focused guidance",
      "Communication that is easy to understand",
      "An approach tailored to your needs",
      "Transparent process and scope",
    ],
    independence:
      "REGULORA CONSULTANT is an independent service provider, not a licensing authority.",
  },
  servicesPage: {
    metaTitle: "Licensing Services in Indonesia",
    metaDescription:
      "Find support for PKRT, IDAK/IPAK, medical device marketing authorization, SPP-IRT, cosmetics, and BPOM MD/ML.",
    breadcrumb: "Services",
    eyebrow: "REGULORA SERVICES",
    titleA: "One first step.",
    titleB: "Many business needs.",
    intro:
      "Choose a service to see its focus. Not sure yet? We will help map your needs during the consultation.",
  },
  serviceDetail: {
    relatedTitle: "Related services",
    introSuffix:
      "Start with a needs review so your next steps are more focused.",
    consult: (short: string) => `Consult on ${short}`,
    formButton: "Consultation form",
    needsTitle: "Support for your needs",
    audienceTitle: "Who is this service for?",
    helpTitle: "What do we help with?",
    helpBody:
      "We help map your needs, review the readiness of your information, and explain the follow-up steps. The scope of work and the quotation are agreed before the engagement begins.",
    prepEyebrow: "CONSULTATION PREPARATION",
    prepTitle: "Let's start with the information you have.",
    prepNote:
      "This is material for an initial discussion, not an official list of requirements. The list of application documents is determined after the product type and business activity have been reviewed.",
    stepsTitle: "Support stages",
    faqTitle: (short: string) => `Questions about ${short}`,
    notice:
      "License issuance is the authority of the relevant agency. Our support does not guarantee the outcome or the duration of the evaluation.",
    steps: (short: string, firstTopic: string) => [
      `Mapping your ${short} needs`,
      `Review of ${firstTopic.toLowerCase()}`,
      "Defining the scope and document list",
      "Application support and follow-up",
      "Updates based on the agency's evaluation",
    ],
  },
  articlesPage: {
    metaTitle: "Articles & Insights",
    metaDescription:
      "Consultation preparation guides and licensing support insights for business owners.",
    breadcrumb: "Articles",
    eyebrow: "REGULORA NOTES",
    titleA: "Understand the process.",
    titleB: "Prepare your steps.",
    intro:
      "Practical reading to start a conversation about your business needs.",
    readMore: "Read article ↗",
    articleNote:
      "This article is general information, not a determination of requirements for any specific product.",
  },
  faqPage: {
    metaTitle: "Frequently Asked Questions",
    metaDescription:
      "Answers about consultation, fees, process, and licensing support at Regulora.",
    breadcrumb: "FAQ",
    titleA: "Your questions,",
    titleB: "our first step together.",
    intro: "Learn how our support works before you begin.",
  },
  contactPage: {
    metaTitle: "Contact & Consultation",
    metaDescription:
      "Tell us about your product and business licensing needs through a Regulora consultation.",
    breadcrumb: "Contact",
    eyebrow: "LET'S START A CONVERSATION",
    titleA: "Your first step,",
    titleB: "we're listening.",
    intro:
      "Tell us about your business needs. We'll map out the next steps together.",
    directTitle: "Prefer to talk directly?",
    directBody:
      "Choose an available channel. There is no need to send sensitive documents in the first conversation.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    topicsTitle: "What do we discuss?",
    topics: [
      "Product type and business activity",
      "Where your licensing process currently stands",
      "Documents you already have",
      "Scope of support",
    ],
    noCommitment:
      "The initial consultation does not bind you to a service agreement.",
  },
  legalPage: {
    contactLink: "Contact REGULORA CONSULTANT →",
  },
  notFound: {
    eyebrow: "404 · PAGE NOT FOUND",
    titleA: "Let's go back",
    titleB: "to the first step.",
    body: "This page is not available. Find the service you need from the home page.",
    button: "Back to home ↗",
  },
  form: {
    title: "Tell us what you need",
    intro:
      "Fields marked * are required. Please avoid including sensitive documents or information. The button below opens a message in WhatsApp; you need to tap Send in WhatsApp.",
    name: "Full name *",
    phone: "WhatsApp number *",
    phonePlaceholder: "+62… or 08…",
    email: "Email (optional)",
    service: "Service type *",
    servicePlaceholder: "Choose a service",
    serviceUnsure: "I'm not sure yet",
    description: "Description of your needs *",
    descriptionPlaceholder:
      "Tell us about your product type, business activity, and the help you need…",
    consentBefore: "I agree to the",
    consentLink: "Privacy Policy",
    consentAfter:
      "and the processing of my data to respond to my consultation request. *",
    submit: "Continue to WhatsApp ↗",
    noWhatsapp: "WhatsApp is not available yet. Please contact us by email.",
    opened:
      "Continue by tapping Send in WhatsApp. Opening WhatsApp does not send your message yet.",
    messageIntro: "Hello REGULORA CONSULTANT, I would like a consultation.",
    messageName: "Name",
    messagePhone: "WhatsApp",
    messageEmail: "Email",
    messageService: "Service",
    messageNeeds: "Needs",
    messageUnsure: "Not sure yet",
  },
  validation: {
    name: "Name must be at least 2 characters.",
    phone: "Enter a valid WhatsApp number.",
    email: "Invalid email.",
    emailLong: "Email is too long.",
    service: "Choose a service type.",
    descriptionShort: "Describe your needs in at least 20 characters.",
    descriptionLong: "Maximum 2,000 characters.",
    consent: "Agreement to the privacy policy is required.",
  },
  content: {
    steps: [
      "Initial consultation",
      "Needs identification",
      "Document review & quotation",
      "Licensing process support",
      "Status updates & completion",
    ],
    generalFaq: [
      [
        "Can I consult before choosing a service?",
        "Yes. Tell us about your product type, business activity, and challenges. We will help map your needs before you decide on a service.",
      ],
      [
        "Is license issuance guaranteed?",
        "No. REGULORA CONSULTANT supports the process; the decision to issue a license rests with the relevant authority, based on its evaluation.",
      ],
      [
        "What are the fees and timeline for the support?",
        "Scope, fees, and estimated stages are discussed after your needs and document readiness have been reviewed. The agency's evaluation time may differ for each application.",
      ],
      [
        "Can the service be done online?",
        "Consultation and initial document review can be discussed online. Any need for visits or other inspections depends on the type of service.",
      ],
      [
        "How do I start a consultation?",
        "Choose the relevant service, then contact us through an available contact channel. Prepare an overview of your product and business; there is no need to send sensitive documents in your first message.",
      ],
    ],
    services: {
      pkrt: {
        name: "PKRT Licensing",
        short: "PKRT",
        category: "Medical devices & PKRT",
        summary:
          "Licensing support for PKRT (household health supplies) products.",
        audience:
          "Manufacturers, brand owners, and importers of household health supply products.",
        focus:
          "Identifying the product's function, usage claims, and category is the starting point of a PKRT review.",
        topics: [
          "Product function and claims",
          "Composition and manufacturer information",
          "Label and packaging design",
        ],
        question: "Are all household products classified as PKRT?",
        answer:
          "Classification needs to be reviewed based on the product's function, claims, and characteristics. A trade name alone is not enough to determine its licensing pathway.",
        seoTitle: "PKRT Registration Service Indonesia",
        h1: "PKRT Marketing Authorization Service in Indonesia",
        metaDescription:
          "PKRT (household health supplies) marketing authorization for manufacturers, brands, and importers: category, claim, and label checks. Consult via WhatsApp.",
        sections: [["What is PKRT?", "PKRT (Perbekalan Kesehatan Rumah Tangga, or household health supplies) covers products such as cleaners, antiseptics, air fresheners, and wet wipes, whose marketing authorization is issued by the Ministry of Health. The right category is determined by the product's function and claims."], ["PKRT risk classes", "PKRT products are also grouped by risk, which affects the documents and testing required. Claims on the label need to match the product category to avoid corrections during evaluation."]],
        faq: [] as string[][],
        related: ["izin-edar-alat-kesehatan", "notifikasi-kosmetik"],
      },
      "idak-ipak": {
        name: "IDAK / IPAK Distribution Licensing",
        short: "IDAK / IPAK",
        category: "Medical devices & PKRT",
        summary:
          "Support with licensing requirements for medical device distribution activities (IDAK / IPAK).",
        audience:
          "Businesses planning or running medical device distribution in Indonesia.",
        focus:
          "The review focuses on distribution activities, facility readiness, and business organization. License terms and current pathways are checked against your activities.",
        topics: [
          "Distribution activities and coverage",
          "Readiness of business facilities",
          "Organization and responsible person",
        ],
        question:
          "Is a distribution license the same as a product marketing authorization?",
        answer:
          "Licensing requirements for distribution activities and for products need to be reviewed separately. A consultation helps map both according to your business activities.",
        seoTitle: "IDAK / IPAK Licensing Service",
        h1: "Medical Device Distribution Licensing Service (IDAK / IPAK)",
        metaDescription:
          "Medical device distribution licensing support (IDAK/IPAK): business activity, facilities, technical responsible person, and CDAKB. Consult via WhatsApp.",
        sections: [["IDAK and IPAK", "IPAK (Izin Penyalur Alat Kesehatan, or medical device distributor license) is the long-established term for medical device distributor licensing. Under the risk-based business licensing system, the terms and pathways may differ, so they need to be checked against your business activities."], ["Preparing for distribution", "Preparation generally covers the business entity and business licensing, storage facilities, a technical responsible person, and implementation of good distribution practice for medical devices (CDAKB)."]],
        faq: [] as string[][],
        related: ["izin-edar-alat-kesehatan", "pkrt"],
      },
      "izin-edar-alat-kesehatan": {
        name: "Medical Device Marketing Authorization",
        short: "Medical Devices",
        category: "Medical devices & PKRT",
        summary:
          "Support in preparing marketing authorization applications for medical device products in Indonesia.",
        audience:
          "Manufacturers, distributors, and importers with licensing needs for medical device products.",
        focus:
          "The review covers intended use, product characteristics, and place of manufacture to map the application requirements.",
        topics: [
          "Intended use of the device",
          "Specifications and place of manufacture",
          "Product documents you already have",
        ],
        question: "Does every device have the same document requirements?",
        answer:
          "No. Product characteristics, intended use, and category can affect the document requirements. The final list is determined after the review.",
        seoTitle: "Medical Device Registration Indonesia",
        h1: "Medical Device Marketing Authorization Service (AKD/AKL)",
        metaDescription:
          "AKD/AKL medical device marketing authorization for manufacturers, distributors, and importers: risk class and technical file checks. Consult via WhatsApp.",
        sections: [["What is a medical device marketing authorization?", "A medical device marketing authorization, namely AKD for locally made products and AKL for imported products, is issued by the Ministry of Health before a medical device can be distributed in Indonesia. Document requirements depend heavily on the device's risk class."], ["Risk classification", "Medical devices are grouped by their level of risk. The higher the class, the more detailed the technical documents and evaluation required. Determining the correct class is an important first step before preparing documents."]],
        faq: [] as string[][],
        related: ["idak-ipak", "pkrt"],
      },
      "spp-irt": {
        name: "SPP-IRT Home-Industry Food Permit",
        short: "SPP-IRT",
        category: "Food & cosmetics",
        summary:
          "Support with fulfilling the commitments for SPP-IRT (home-industry food production permit), the permit for certain food products produced at household-industry scale.",
        audience:
          "Home-based food businesses that want to check whether their product's licensing pathway is suitable.",
        focus:
          "The suitability of the food type and production process needs to be assessed first. SPP-IRT does not apply to all food products.",
        topics: [
          "Food type and processing method",
          "Production location and scale",
          "Packaging and storage method",
        ],
        question: "Can all food products use SPP-IRT?",
        answer:
          "No. The food type and production process affect which pathway is suitable. Your product needs to be reviewed before choosing SPP-IRT or another pathway.",
        seoTitle: "PIRT (SPP-IRT) Permit Service",
        h1: "PIRT (SPP-IRT) Permit Service for Home-Based Food Businesses",
        metaDescription:
          "PIRT (SPP-IRT) permit service for home-based food businesses: food type check, document preparation, and application via OSS. Consult via WhatsApp.",
        sections: [["What is PIRT (SPP-IRT)?", "SPP-IRT, more commonly called PIRT, is the Home-Industry Food Production Certificate (Sertifikat Produksi Pangan Industri Rumah Tangga). It is the basis for household-scale food businesses to distribute certain processed foods, with a P-IRT number printed on the label. It is issued by the regency/city government through the business licensing system (OSS)."], ["Which products can use PIRT?", "PIRT is intended for relatively low-risk processed foods produced at household scale, such as cookies, chips, crackers, or powdered drinks. The list of permitted food types is set by regulation and may change. Certain products generally cannot use PIRT, for example foods that must be stored frozen or chilled, milk and dairy products, baby food, and sterile canned food. Products like these usually need to go through the BPOM MD pathway."], ["What is generally needed", "Before applying, businesses usually need to prepare a Business Identification Number (NIB), product and composition information, and a label design, and attend food safety training. Production facilities may also be inspected to assess the application of good food production practices. The exact list depends on the product type and local regulations."], ["Common mistakes", "Some common issues: choosing PIRT for a product that should go through BPOM MD, labels missing mandatory information, exaggerated claims on packaging, or OSS data that does not match the business activity. An early review helps avoid having to reapply."], ["PIRT or BPOM MD?", "PIRT suits household-scale production and certain food types. If the product is a higher-risk food, is produced at industrial scale, or will be marketed more widely, for example to modern retail chains that require a BPOM license, the BPOM MD pathway may be an option. We help assess the most suitable pathway for your product."]],
        faq: [["How long does the PIRT process take?", "The timing depends on document readiness, the training schedule, and facility inspection in your area. We help prepare your data from the start so the process is not delayed by missing documents."], ["Can PIRT be handled online?", "Applications are submitted through the OSS system, while training and facility inspection follow the rules of the local office. Consultation with us can be done entirely online."]] as string[][],
        related: ["bpom-md-ml", "notifikasi-kosmetik"],
      },
      "notifikasi-kosmetik": {
        name: "BPOM Cosmetic Notification",
        short: "Cosmetic Notification",
        category: "Food & cosmetics",
        summary:
          "Support with the notification approval from BPOM (Indonesia's food and drug authority) that must be obtained before cosmetic products are distributed in Indonesia.",
        audience:
          "Cosmetic brand owners, contract manufacturing businesses, manufacturers, and importers of cosmetics.",
        focus:
          "The review considers the applicant's role, the production or import model, formula information, and product claims.",
        topics: [
          "Production or import model",
          "Formula and manufacturer information",
          "Claims and label design",
        ],
        question: "Can brands that use contract manufacturing consult?",
        answer:
          "Yes. Explain your relationship with the manufacturer and the documents already available so the applicant and product requirements can be mapped.",
        seoTitle: "BPOM Cosmetic Notification Service",
        h1: "BPOM Cosmetic Registration: Cosmetic Notification Support",
        metaDescription:
          "BPOM cosmetic notification for skincare brands, contract manufacturing, and importers: formula, claim, and label checks. Initial consultation via WhatsApp.",
        sections: [["What is BPOM cosmetic notification?", "Cosmetic notification is a mandatory notice to BPOM (Indonesia's food and drug authority) before a cosmetic product is distributed in Indonesia. Products whose notification is approved receive a notification number that is printed on the label. Without this number, a product cannot be legally distributed, including through online marketplaces."], ["Who can apply?", "The notification applicant is a registered business entity, for example a cosmetic manufacturer, an importer, or a brand owner working with a cosmetic manufacturer under a contract manufacturing (maklon) arrangement. Contract-manufactured brand owners need to understand how roles and documents are divided with the factory before applying."], ["Information and documents usually prepared", "Preparation generally includes business entity data, the formula or ingredient composition, manufacturer information, a label design, and the product information file (DIP, Dokumen Informasi Produk) kept by the applicant. Ingredients used must comply with the applicable cosmetic ingredient regulations."], ["Claims and labels to watch", "Cosmetic claims must not lead to drug claims, such as curing acne or treating skin diseases. Unsuitable claims are one of the common reasons a notification needs to be corrected. The label also needs to include mandatory information in Indonesian."], ["After the notification number is issued", "A notification has a validity period and needs to be renewed before it expires. Changes to the formula, size, or product name may also require a new notification or a data change. We help map these needs from the start."]],
        faq: [["Can contract-manufactured skincare be registered under my brand?", "Yes, as long as the applicant meets the requirements and has a clear agreement with the cosmetic manufacturer. We help map the documents that need to be prepared together with the factory."], ["What about imported cosmetics?", "Imported cosmetics are notified by a registered importer. Documents from the manufacturer in the country of origin are usually needed, such as a letter of appointment and formula information."]] as string[][],
        related: ["bpom-md-ml", "pkrt"],
      },
      "bpom-md-ml": {
        name: "BPOM MD / ML Food Registration",
        short: "BPOM MD / ML",
        category: "Food & cosmetics",
        summary:
          "Support with BPOM (Indonesia's food and drug authority) registration of processed food, whether locally produced (MD) or imported (ML).",
        audience:
          "Processed food manufacturers, brand owners, and food product importers.",
        focus:
          "Place of production, food type, processing method, and label information are the initial focus of the review.",
        topics: [
          "Origin and type of food product",
          "Composition and production process",
          "Packaging and label information",
        ],
        question: "What is the difference between MD and ML?",
        answer:
          "MD relates to processed food produced in Indonesia, while ML relates to imported processed food. The suitability of the pathway and requirements still needs to be reviewed for your product.",
        seoTitle: "BPOM MD/ML Food Registration",
        h1: "BPOM MD / ML Registration for Food and Beverages",
        metaDescription:
          "BPOM MD/ML registration for local and imported food and beverages: registration pathway, documents, lab testing, and labels. Consult via WhatsApp.",
        sections: [["What are BPOM MD and ML?", "A BPOM MD marketing authorization number is given to processed food produced in Indonesia, while ML is for imported processed food. The number is printed on the label and shows that the product has gone through BPOM's assessment of safety, quality, and labeling."], ["When does a product need BPOM MD?", "Generally when food is produced at industrial scale, including food types that cannot use PIRT such as frozen food, milk and dairy products, or certain beverages, or when the product will be marketed widely. Brand owners who use another party's production services may also take this pathway, subject to the regulations."], ["Registration preparation", "Preparation generally includes business licensing and production facility data, composition and production process, product laboratory test results, and a label design that complies with the regulations. For MD, the production facility needs to apply good manufacturing practice for processed food (CPPOB). For ML, the importer prepares documents from the manufacturer in the country of origin."], ["Processed food labels", "The label must include information such as the product name, composition, net weight, name and address of the manufacturer or importer, expiry date, and marketing authorization number. Label non-compliance is often a reason for corrections during evaluation."], ["From PIRT to BPOM MD", "Businesses that grow beyond household scale often need to move from PIRT to BPOM MD. We help map what needs to be prepared, from production facilities to labels, so the transition is more focused."]],
        faq: [["How long does BPOM MD registration take?", "The duration depends on the product's risk category, document completeness, and BPOM's evaluation results. We do not promise a specific duration, but we help make sure your documents are complete from the start."], ["Is laboratory testing required?", "Generally, yes. Test parameters are determined by the food type. We help map the relevant parameters before you carry out testing."]] as string[][],
        related: ["spp-irt", "notifikasi-kosmetik"],
      },
    },
    articles: {
      "persiapan-konsultasi-perizinan": {
        title: "Before a consultation, prepare 5 pieces of information about your business",
        category: "Business guide",
        description:
          "A more focused first conversation starts with simple information.",
        sections: [
          [
            "Start with an overview of your business",
            "Describe your main activities, business location, and your role as a manufacturer, brand owner, distributor, or importer. This information helps set the focus of the discussion.",
          ],
          [
            "Know your product",
            "Note the product name, function, place of manufacture, and how it is marketed. If there are several variants, explain the main differences.",
          ],
          [
            "Map the documents you have",
            "List the documents you already have and their status. At the initial stage, simply share the types of documents; avoid sending personal identification or confidential files without an agreed channel.",
          ],
          [
            "Share your challenges and plans",
            "Describe the steps you have already taken, unanswered questions, and your launch plans. Internal targets are not a guarantee of when a license will be issued.",
          ],
          [
            "Agree on the next steps",
            "Ask for an explanation of the scope of support, the division of responsibilities, and a written quotation before work begins.",
          ],
        ],
      },
      "memahami-ruang-lingkup-pendampingan": {
        title: "What should be discussed in licensing support?",
        category: "Regulora Notes",
        description:
          "Understand the scope, responsibilities, and communication before you begin.",
        sections: [
          [
            "A clear scope",
            "Support can include needs mapping, completeness review, and follow-up assistance. The agreed services should be set out in the quotation.",
          ],
          [
            "Documents remain the applicant's responsibility",
            "The accuracy and validity of the information come from the business owner. The consultant helps review readiness based on the information provided.",
          ],
          [
            "Process updates",
            "Agree on the communication channel and how status updates are shared. Additional requests from the agency may require documents or action from the applicant.",
          ],
          [
            "The agency's decision",
            "Support does not guarantee that a license will be issued. The evaluation result remains the authority of the relevant agency.",
          ],
        ],
      },
    },
    legal: {
      "kebijakan-privasi": {
        title: "Privacy Policy",
        intro:
          "How consultation data and privacy preferences are processed on this site.",
        sections: [
          [
            "Data you provide",
            "The form asks for your name, WhatsApp number, optional email, service, description of needs, and privacy consent. The data is used to respond to consultation requests. Do not enter identity numbers, personal health data, or confidential documents into the form.",
          ],
          [
            "Storage and security",
            "The form composes a message on your device and opens WhatsApp with that message. The site does not store the form in a database. You need to tap Send in WhatsApp to deliver the message to us. The message content is passed to the WhatsApp service when the link is opened.",
          ],
          [
            "Analytics and ad measurement",
            "The site uses Google Tag Manager with Consent Mode. Before you choose Allow, analytics and advertising cookies are not stored; Google only receives cookieless signals to measure visits and conversions in aggregate. If you choose Decline, measurement tools are not loaded. Your preference is stored in the browser and can be changed via the Cookie preferences button. Measured events include page views, service views, form start, and WhatsApp clicks. Names, contact details, consultation content, and URL parameters are not sent as analytics event parameters. Tracking providers may process device and network information in accordance with their policies.",
          ],
          [
            "WhatsApp and third parties",
            "WhatsApp links open a third-party service. Messages may include a short reference code if you arrived from an ad. Information you send on WhatsApp is processed in accordance with that service's policies.",
          ],
          [
            "Your choices and requests",
            "You can decline tracking or change your choice via the Cookie preferences button when tracking is available. Declining does not prevent you from using the form. For requests to access, correct, or delete consultation data, use the channels on the Contact page. Data is retained for as long as needed for follow-up and applicable obligations; the site operator needs to review and delete data that is no longer needed.",
          ],
        ],
      },
      "syarat-ketentuan": {
        title: "Terms & Conditions",
        intro: "Basic terms for using the site and requesting a consultation.",
        sections: [
          [
            "Information and consultation",
            "The site content provides a general overview of the services. Submitting the form is a request to be contacted, not a service agreement or a payment.",
          ],
          [
            "Service agreement",
            "Work begins based on a scope, fees, and division of responsibilities agreed separately. Users are responsible for the accuracy and validity of the documents they provide.",
          ],
          [
            "Evaluation and results",
            "License issuance and the evaluation process fall under the authority of the relevant agency. There is no guarantee of license issuance, a specific duration, or commercial results from using the service.",
          ],
          [
            "Use of the site",
            "Do not use the form for spam, provide other people's data without authorization, or interfere with the site's security. Questions about the services can be submitted through the Contact page.",
          ],
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        intro: "The limits of REGULORA CONSULTANT's role and the information on this site.",
        sections: [
          [
            "Independent service provider",
            "REGULORA CONSULTANT is a provider of consulting and support services, not a licensing authority. There is no claim of official affiliation with BPOM, the Ministry of Health, or any other government agency.",
          ],
          [
            "General information",
            "Service information and articles are not a substitute for an assessment of a specific activity or product. Regulations may change; pathways and document lists need to be checked against official sources at the time of application.",
          ],
          [
            "No guarantee of issuance",
            "Application outcomes are determined by the agency based on its evaluation. Fees and estimated stages can only be discussed after your needs and document readiness have been reviewed.",
          ],
        ],
      },
    },
  },
};

export default en;
