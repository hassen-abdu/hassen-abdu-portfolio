export type Language = 'en' | 'am';

export interface TranslationSchema {
  nav: {
    about: string;
    tech: string;
    projects: string;
    services: string;
    process: string;
    contact: string;
    hireMe: string;
    language: string;
  };
  hero: {
    statusBadge: string;
    headline: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCall: string;
    highlights: {
      admin: { title: string; desc: string };
      cloud: { title: string; desc: string };
      responsive: { title: string; desc: string };
      security: { title: string; desc: string };
    };
  };
  about: {
    badge: string;
    heading: string;
    subheading: string;
    p1: string;
    p2: string;
    p3: string;
    highlightsTitle: string;
    highlights: {
      ecommerce: { title: string; desc: string };
      dashboards: { title: string; desc: string };
      multilingual: { title: string; desc: string };
      cloud: { title: string; desc: string };
    };
    stats: {
      projects: string;
      satisfaction: string;
      tech: string;
    };
    cta: string;
  };
  tech: {
    badge: string;
    heading: string;
    subheading: string;
    categories: {
      frontend: string;
      backend: string;
      database: string;
      devops: string;
    };
  };
  projects: {
    badge: string;
    heading: string;
    subheading: string;
    categories: {
      all: string;
      ecommerce: string;
      cms: string;
      webapps: string;
    };
    card: {
      viewCaseStudy: string;
      architecture: string;
      keyFeatures: string;
    };
    modal: {
      overview: string;
      problemSolution: string;
      architecture: string;
      keyFeatures: string;
      techStack: string;
      impact: string;
      liveDemo: string;
      discussSimilar: string;
      close: string;
    };
    items: {
      mizan: {
        title: string;
        category: string;
        shortDescription: string;
        fullDescription: string;
        problem: string;
        solution: string;
        architecture: string;
        features: string[];
        impact: string[];
      };
      jenet: {
        title: string;
        category: string;
        shortDescription: string;
        fullDescription: string;
        problem: string;
        solution: string;
        architecture: string;
        features: string[];
        impact: string[];
      };
    };
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      description: string;
      deliverables: string[];
    }>;
  };
  process: {
    badge: string;
    heading: string;
    subheading: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  whyWork: {
    badge: string;
    heading: string;
    subheading: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    phoneLabel: string;
    emailLabel: string;
    telegramLabel: string;
    whatsappLabel: string;
    hoursLabel: string;
    hoursValue: string;
    availabilityBadge: string;
    form: {
      heading: string;
      subheading: string;
      fullNameLabel: string;
      fullNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      selectServicePlaceholder: string;
      servicesOptions: Array<{ value: string; label: string }>;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMessage: string;
      errorMessage: string;
      validation: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
      };
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    location: string;
    copyright: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      about: "About",
      tech: "Tech Stack",
      projects: "Projects",
      services: "Services",
      process: "Process",
      contact: "Contact",
      hireMe: "Hire Me",
      language: "Language",
    },
    hero: {
      statusBadge: "Available for New Projects & Contracts",
      headline: "Full-Stack Web Systems & High-Performance Web Applications",
      subtitle: "I design, build, and deploy complete web systems with modern frontend interfaces, secure cloud backends, databases, authentication, and custom admin dashboards.",
      ctaProjects: "Explore Selected Work",
      ctaContact: "Get in Touch",
      ctaCall: "Direct Call",
      highlights: {
        admin: { title: "Role-Based Admin Panels", desc: "Custom dashboards for managing inventory, users, and content." },
        cloud: { title: "Cloud Database & Auth", desc: "Firebase Firestore integration with strict security rules & custom claims." },
        responsive: { title: "Responsive Web Systems", desc: "Engineered for speed, cross-device compatibility, and smooth UX." },
        security: { title: "Performance & Security", desc: "Clean architecture optimized for fast loading and data privacy." },
      },
    },
    about: {
      badge: "About Hassen Abdu",
      heading: "Full-Stack Web Systems Engineer Focused on Real Business Results",
      subheading: "Combining modern frontend design with secure cloud infrastructure to build software that scales.",
      p1: "I am Hassen Abdu, a dedicated Web Developer and Full-Stack Web Systems Engineer based in Addis Ababa, Ethiopia. I specialize in building complete, production-grade web applications from concept to deployment.",
      p2: "My core expertise covers modern frontend user interfaces with React and TypeScript, coupled with secure backend architectures utilizing Firebase Firestore, authentication custom claims, and cloud infrastructure.",
      p3: "Whether building custom e-commerce storefronts with administrative dashboards or multilingual content management platforms for organizations, I focus on writing clean, maintainable code and delivering exceptional user experiences.",
      highlightsTitle: "Core Specialized Capabilities",
      highlights: {
        ecommerce: {
          title: "E-Commerce & Digital Storefronts",
          desc: "Full online shopping systems with inventory controls, order workflows, and payment gateway readiness.",
        },
        dashboards: {
          title: "Custom Admin Dashboards",
          desc: "Tailored management interfaces with role-based access control (RBAC) and real-time analytical reporting.",
        },
        multilingual: {
          title: "Multilingual Web Platforms",
          desc: "Complete multi-language localization (English, Amharic, Arabic) engineered for global and regional audiences.",
        },
        cloud: {
          title: "Cloud Backends & Data Security",
          desc: "Database schema design, granular Firestore security rules, serverless API routes, and cloud deployment.",
        },
      },
      stats: {
        projects: "Verified Production Projects",
        satisfaction: "Client Satisfaction Rate",
        tech: "Core Tech Competencies",
      },
      cta: "Let's Build Your System",
    },
    tech: {
      badge: "Technical Stack",
      heading: "Proven Technologies for Production Web Systems",
      subheading: "Selected tools and frameworks utilized to build secure, scalable, and responsive applications.",
      categories: {
        frontend: "Frontend Architecture",
        backend: "Backend & Cloud Services",
        database: "Database & Security",
        devops: "DevOps & Tools",
      },
    },
    projects: {
      badge: "Featured Portfolio",
      heading: "Selected Production Projects & Systems",
      subheading: "Real-world web applications built with custom admin controls, role-based security, and responsive design.",
      categories: {
        all: "All Projects",
        ecommerce: "E-Commerce",
        cms: "CMS & Non-Profit",
        webapps: "Web Applications",
      },
      card: {
        viewCaseStudy: "View Case Study",
        architecture: "Architecture",
        keyFeatures: "Key Features",
      },
      modal: {
        overview: "Project Overview",
        problemSolution: "Challenge & Solution",
        architecture: "Technical Architecture",
        keyFeatures: "Key Features & Workflows",
        techStack: "Technologies Used",
        impact: "Business Impact & Results",
        liveDemo: "Launch Application",
        discussSimilar: "Discuss Similar Project",
        close: "Close Case Study",
      },
      items: {
        mizan: {
          title: "MIZAN SHOP",
          category: "E-Commerce & Admin Dashboard",
          shortDescription: "A full-scale e-commerce platform with a role-based administrative dashboard, real-time product inventory tracking, order management, and secure Firebase custom claim authentication.",
          fullDescription: "MIZAN SHOP is a commercial e-commerce solution designed to handle end-to-end retail operations. The system incorporates a public customer storefront and a protected admin control panel.",
          problem: "The client needed an integrated digital storefront and inventory management system capable of handling product catalog updates, stock monitoring, order state tracking, and restricting administrative actions strictly to authorized managers.",
          solution: "Engineered a responsive React & TypeScript frontend paired with a Firebase Firestore database backend. Implemented custom Firebase Auth claims to enforce strict Role-Based Access Control (RBAC), ensuring normal shoppers cannot access sensitive inventory tools.",
          architecture: "Single Page Application (SPA) architecture built with React 18, Tailwind CSS, and Lucide React. Backend powered by Firebase Authentication and Firestore DB with atomic batch writes and granular security rules.",
          features: [
            "Protected Administrative Dashboard with Role-Based Access Control (RBAC)",
            "Real-time Inventory Management (Stock alerts, batch updates, price modifications)",
            "Dynamic Product Catalog with search, multi-category filtering, and sorting",
            "Shopping Cart & Checkout Order Processing workflow",
            "Order Status Tracking Dashboard for store managers",
            "Granular Firestore Security Rules preventing unauthorized client data mutation",
          ],
          impact: [
            "Streamlined store inventory management efficiency for administrative staff",
            "Eliminated unauthorized data modifications via backend security rules",
            "Sub-second page load speeds across desktop and mobile devices",
          ],
        },
        jenet: {
          title: "JENET ENGENAGN",
          category: "Charity Organization & CMS",
          shortDescription: "A multilingual web platform and custom CMS for a humanitarian organization, supporting English, Amharic, and Arabic languages with donation workflows and story publication.",
          fullDescription: "JENET ENGENAGN is an internationalized web portal for a non-profit organization dedicated to community support, child welfare, and emergency relief.",
          problem: "The organization required a modern web presence to reach regional and international supporters in English, Amharic, and Arabic, alongside a simple content management system for publishing success stories and impact reports.",
          solution: "Developed an internationalized web application with a translation management layer supporting LTR and RTL text formatting, integrated with a lightweight content management dashboard.",
          architecture: "React + TypeScript frontend structured with modular language contexts. Integrated Firebase Firestore for dynamically managed humanitarian stories and project announcements.",
          features: [
            "Complete Multilingual Support (English, Amharic, and Arabic)",
            "Custom Content Management System (CMS) for non-technical team members",
            "Humanitarian Impact Showcase with categorized community initiatives",
            "Donation & Support Inquiry Workflows",
            "Fast, mobile-optimized responsive layout for low-bandwidth connections",
            "Accessible design adhering to WCAG contrast and readability guidelines",
          ],
          impact: [
            "Expanded organization outreach across Amharic, Arabic, and English communities",
            "Empowered staff to publish impact stories independently without developer help",
            "Achieved 100% mobile accessibility across low-end mobile browsers",
          ],
        },
      },
    },
    services: {
      badge: "Services & Solutions",
      heading: "Professional Engineering Services for Your Business",
      subheading: "Tailored web development solutions designed for reliability, high speed, and long-term maintainability.",
      items: [
        {
          title: "E-Commerce Development",
          description: "Complete online store systems with product catalogs, shopping carts, order workflows, and administrative management tools.",
          deliverables: ["Custom Product Showcase", "Cart & Checkout Flow", "Inventory Control Panel", "Payment Gateway Integration"],
        },
        {
          title: "Custom Web Applications",
          description: "Full-stack web applications engineered for specific business workflows, high performance, and smooth user experiences.",
          deliverables: ["SPA Architecture", "Interactive Dashboards", "REST API Integration", "State Management Engine"],
        },
        {
          title: "Admin Dashboard & CMS",
          description: "Tailored management interfaces that give your team total control over platform content, users, and operational analytics.",
          deliverables: ["Role-Based Access Control", "Data Filtering & Export", "Content Editor Interface", "System Activity Logs"],
        },
        {
          title: "Database & API Architecture",
          description: "Structured database schema design, secure API endpoints, and efficient data query layers for web systems.",
          deliverables: ["Firestore Schema Optimization", "Security Rules Generation", "Data Models & Validation", "API Integration"],
        },
        {
          title: "Firebase & Cloud Integration",
          description: "Seamless setup of cloud backends including user authentication, real-time databases, custom claims, and cloud storage.",
          deliverables: ["Authentication Setup", "Firestore DB Configuration", "Custom User Claims", "Production Deployment"],
        },
        {
          title: "Performance & Security Tuning",
          description: "Audit and optimization of existing web applications to improve speed, mobile responsiveness, and security rules.",
          deliverables: ["Lighthouse Speed Optimization", "Security Vulnerability Audit", "Mobile Responsiveness Polish", "Code Refactoring"],
        },
      ],
    },
    process: {
      badge: "Development Methodology",
      heading: "A Structured & Transparent Engineering Approach",
      subheading: "From initial idea to production deployment, every step is executed with precision and clarity.",
      steps: [
        {
          title: "1. Requirements Discovery & Architecture",
          description: "Analyzing business requirements, target audience, technical constraints, and defining system architecture.",
        },
        {
          title: "2. UI/UX Design & Data Schema",
          description: "Designing responsive interfaces, user flows, database schemas, and role permissions.",
        },
        {
          title: "3. Frontend & Backend Core Engineering",
          description: "Writing clean, typed modular code with React, TypeScript, and cloud services following best practices.",
        },
        {
          title: "4. Security Rules & Auth Integration",
          description: "Implementing authentication, custom claims, Firestore security rules, and data access policies.",
        },
        {
          title: "5. Comprehensive Testing & Speed Optimization",
          description: "Testing cross-device responsiveness, form validations, data sync, load speeds, and edge cases.",
        },
        {
          title: "6. Production Deployment & Handover",
          description: "Deploying to production, verifying domain routing, SSL certificates, and providing clear documentation.",
        },
      ],
    },
    whyWork: {
      badge: "Why Work With Me",
      heading: "Committed to Quality, Security, and Client Satisfaction",
      subheading: "What sets my engineering process apart for commercial web applications.",
      points: [
        {
          title: "Direct & Clear Communication",
          description: "Regular project updates, clear milestones, and responsive technical consultation throughout development.",
        },
        {
          title: "Production-Ready Standards",
          description: "Code written with strict TypeScript safety, clean architecture, and long-term maintainability.",
        },
        {
          title: "Business-Driven Focus",
          description: "Building features that directly support your business goals, user acquisition, and operational speed.",
        },
        {
          title: "Security & Privacy First",
          description: "Proper backend authorization, environment variable security, and strict database protection rules.",
        },
      ],
    },
    contact: {
      badge: "Get In Touch",
      heading: "Let's Discuss Your Next Web Project",
      subheading: "Have a project in mind or need a reliable web systems engineer? Reach out directly via form, phone, or messaging.",
      phoneLabel: "Direct Phone Call",
      emailLabel: "Email Address",
      telegramLabel: "Telegram Messenger",
      whatsappLabel: "WhatsApp Message",
      hoursLabel: "Working Hours",
      hoursValue: "Mon – Sat: 8:00 AM – 8:00 PM (EAT)",
      availabilityBadge: "Open for New Projects",
      form: {
        heading: "Send a Project Inquiry",
        subheading: "Fill out the form below and I will respond within 24 hours.",
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "e.g., Abebe Kebede",
        emailLabel: "Email Address",
        emailPlaceholder: "e.g., abebe@example.com",
        phoneLabel: "Phone Number (Optional)",
        phonePlaceholder: "e.g., 0911223344",
        serviceLabel: "Service Needed",
        selectServicePlaceholder: "Select a service...",
        servicesOptions: [
          { value: "ecommerce", label: "E-Commerce Development" },
          { value: "webapp", label: "Custom Web Application" },
          { value: "admin", label: "Admin Dashboard & CMS" },
          { value: "cloud", label: "Firebase / Database Setup" },
          { value: "other", label: "Other Web Development Service" },
        ],
        messageLabel: "Project Details / Message",
        messagePlaceholder: "Briefly describe your project requirements, goals, and target timeline...",
        submitBtn: "Send Project Inquiry",
        submittingBtn: "Sending Message...",
        successMessage: "Thank you! Your message has been sent successfully. Hassen will contact you shortly.",
        errorMessage: "Something went wrong sending your message. Please try again or reach out directly by phone.",
        validation: {
          nameRequired: "Full name is required.",
          emailRequired: "Email address is required.",
          emailInvalid: "Please enter a valid email address.",
          messageRequired: "Please enter your project details or message.",
        },
      },
    },
    footer: {
      tagline: "Building high-performance web systems, custom admin panels, and cloud backends.",
      quickLinks: "Quick Navigation",
      contactInfo: "Direct Contact",
      location: "Addis Ababa, Ethiopia",
      copyright: "© 2026 Hassen Abdu. All rights reserved.",
      backToTop: "Back to top",
    },
  },
  am: {
    nav: {
      about: "ስለ እኔ",
      tech: "ቴክኖሎጂዎች",
      projects: "ሥራዎች",
      services: "አገልግሎቶች",
      process: "የሥራ ሂደት",
      contact: "ግንኙነት",
      hireMe: "ያነጋግሩኝ",
      language: "ቋንቋ",
    },
    hero: {
      statusBadge: "ለአዳዲስ ፕሮጀክቶች ዝግጁ ነኝ",
      headline: "ዘመናዊ የዌብ ሲስተሞች እና ከፍተኛ ብቃት ያላቸው የዌብ አፕሊኬሽኖች",
      subtitle: "ዘመናዊ የፊት-ገጽ (Frontend) በይነገጾች፣ ደህንነታቸው የተጠበቁ የደመና (Cloud) ባክኤንዶች፣ ዳታቤዞች፣ የተጠቃሚ ማረጋገጫ እና የአድሚን ዳሽቦርዶችን ያካተቱ ሙሉ የዌብ ሲስተሞችን እገነባለሁ።",
      ctaProjects: "የተሰሩ ሥራዎችን ይመልከቱ",
      ctaContact: "ያነጋግሩኝ",
      ctaCall: "በስልክ ይደውሉ",
      highlights: {
        admin: { title: "የአድሚን መቆጣጠሪያ ዳሽቦርድ", desc: "ዕቃዎችን፣ ተጠቃሚዎችን እና ይዘቶችን ለማስተዳደር የሚረዱ ዳሽቦርዶች።" },
        cloud: { title: "የደመና ዳታቤዝ እና ደህንነት", desc: "ከፍተኛ ደህንነት ያላቸው የ-Firebase Firestore እና Auth ሲስተሞች።" },
        responsive: { title: "በሁሉም ስልኮችና ኮምፒውተሮች የሚሰራ", desc: "በፍጥነት እና በሁሉም ስክሪኖች ላይ በጥራት የሚሰሩ የዌብ አፕሊኬሽኖች።" },
        security: { title: "ከፍተኛ ፍጥነት እና ደህንነት", desc: "ጥራት ባለው ኮድ የተገነቡ ፈጣን እና አስተማማኝ ሶፍትዌሮች።" },
      },
    },
    about: {
      badge: "ስለ ሐሰን አብዱ",
      heading: "ለንግድዎ ትክክለኛ ውጤት የሚያመጡ የዌብ ሲስተሞች መሃንዲስ",
      subheading: "ዘመናዊ ዲዛይን እና አስተማማኝ የደመና መዋቅርን በማቀናጀት የሚያድጉ ሶፍትዌሮችን መገንባት።",
      p1: "እኔ ሐሰን አብዱ እባላለሁ፤ አዲስ አበባ ኢትዮጵያ የምኖር የዌብ ዲቨሎፐር እና የሙሉ-ስ Stack የዌብ ሲስተሞች መሃንዲስ ነኝ። ሙሉ በሙሉ ለስራ ዝግጁ የሆኑ የዌብ አፕሊኬሽኖችን ከሃሳብ እስከ ትግበራ በጥራት እገነባለሁ።",
      p2: "ዋና ዋና የክህሎት ዘርፎቼ በ-React እና TypeScript የሚሰሩ ዘመናዊ የፊት-ገፆች፣ እንዲሁም በ-Firebase Firestore፣ የአድሚን ፍቃድ መቆጣጠሪያዎች (Custom Claims) እና የደመና መዋቅሮች የተገነቡ የባክኤንድ ሲስተሞች ናቸው።",
      p3: "የበይነመረብ የግብይት ድር ጣቢያዎችን (E-Commerce) ከአድሚን ዳሽቦርድ ጋር ወይም ለድርጅቶች የብዙ ቋንቋ ይዘት ማስተዳደሪያዎችን ስገነባ፣ ሁልጊዜም ትኩረቴ ንፁህ ኮድ መጻፍ እና ለተጠቃሚዎች ምቹ ተሞክሮ መስጠት ነው።",
      highlightsTitle: "ዋና ልዩ የሙያ መስኮች",
      highlights: {
        ecommerce: {
          title: "የበይነመረብ ግብይት (E-Commerce)",
          desc: "የዕቃዎችን ካታሎግ፣ የትዕዛዝ ሂደቶችን እና የክፍያ ዝግጅቶችን ያካተቱ ሙሉ የኦንላይን ሱቅ ሲስተሞች።",
        },
        dashboards: {
          title: "ልዩ የአድሚን ዳሽቦርዶች",
          desc: "የስራ ፍቃድ ደረጃዎችን (RBAC) እና ቀጥታ ሪፖርቶችን የያዙ የመቆጣጠሪያ ዳሽቦርዶች።",
        },
        multilingual: {
          title: "የብዙ ቋንቋ የዌብ ሲስተሞች",
          desc: "በአማርኛ፣ እንግሊዝኛ እና አረብኛ ቋንቋዎች ሙሉ በሙሉ የሚሰሩ የዌብ መድረኮች።",
        },
        cloud: {
          title: "የደመና ባክኤንድ እና ዳታ ደህንነት",
          desc: "የዳታቤዝ ዲዛይን፣ የ-Firestore ደህንነት ህጎች፣ የደመና ኤፒአይዎች እና የዌብ ማስተናገጃ።",
        },
      },
      stats: {
        projects: "የተጠናቀቁ ትክክለኛ ፕሮጀክቶች",
        satisfaction: "የደንበኞች እርካታ መጠን",
        tech: "ዋና የቴክኖሎጂ ክህሎቶች",
      },
      cta: "ሲስተምዎን አብረን እንገንባ",
    },
    tech: {
      badge: "የቴክኖሎጂ ክህሎቶች",
      heading: "ለዌብ ሲስተሞች የምጠቀምባቸው አስተማማኝ ቴክኖሎጂዎች",
      subheading: "ደህንነታቸው የተጠበቁ፣ ፈጣን እና ዘመናዊ አፕሊኬሽኖችን ለመገንባት የምጠቀምባቸው ዋና መሳሪያዎች።",
      categories: {
        frontend: "የፊት-ገፅ መዋቅር (Frontend)",
        backend: "የባክኤንድ እና ደመና አገልግሎት (Backend)",
        database: "ዳታቤዝ እና ደህንነት (Database)",
        devops: "የልማት መሳሪያዎች (DevOps)",
      },
    },
    projects: {
      badge: "የተሰሩ ሥራዎች",
      heading: "የተመረጡ የዌብ ሲስተሞች እና ፕሮጀክቶች",
      subheading: "የአድሚን መቆጣጠሪያ፣ ደረጃቸውን የጠበቁ የደህንነት ህጎች እና ማራኪ ዲዛይን ያላቸው ፕሮጀክቶች።",
      categories: {
        all: "ሁሉንም አሳይ",
        ecommerce: "የኦንላይን ሱቅ",
        cms: "በጎ አድራጎት እና CMS",
        webapps: "ዌብ አፕሊኬሽኖች",
      },
      card: {
        viewCaseStudy: "ዝርዝር ጥናት ይመልከቱ",
        architecture: "የሲስተም መዋቅር",
        keyFeatures: "ዋና ባህሪያት",
      },
      modal: {
        overview: "የፕሮጀክቱ አጠቃላይ መግለጫ",
        problemSolution: "ፈተና እና መፍትሔ",
        architecture: "ቴክኒካዊ መዋቅር",
        keyFeatures: "ዋና ዋና የሲስተም ባህሪያት",
        techStack: "የተጠቀሟቸው ቴክኖሎጂዎች",
        impact: "ለንግዱ ያስገኘው ውጤት",
        liveDemo: "ሲስተሙን ይክፈቱ",
        discussSimilar: "ተመሳሳይ ፕሮጀክት ለማዘዝ",
        close: "ዝጋ",
      },
      items: {
        mizan: {
          title: "ሚዛን ሾፕ (MIZAN SHOP)",
          category: "የበይነመረብ ግብይት እና የአድሚን ዳሽቦርድ",
          shortDescription: "የዕቃዎችን ክምችት ቀጥታ ለመቆጣጠር፣ ትዕዛዞችን ለማስተዳደር እና የደህንነት ፍቃዶችን የያዘ ሙሉ የበይነመረብ ግብይት ሲስተም እና የአድሚን ዳሽቦርድ።",
          fullDescription: "ሚዛን ሾፕ ለንግድ ተቋማት የተዘጋጀ የኦንላይን ግብይት ሶፍትዌር ሲሆን ለደንበኞች የሚታይ የሱቅ ገፅ እና ለአስተዳዳሪዎች የተጠበቀ መቆጣጠሪያ ዳሽቦርድ ያካተተ ነው።",
          problem: "ድርጅቱ የዕቃዎችን አይነት በቀላሉ ለማዘመን፣ የዕቃ ክምችትን ለመከታተል፣ የትዕዛዝ ሁኔታዎችን ለመከታተል እና የአድሚን ስራዎችን ለተፈቀደላቸው ሰዎች ብቻ ለመወሰን የሚያስችል ሲስተም ይፈልግ ነበር።",
          solution: "በ-React እና TypeScript የተገነባ የፊት-ገፅ ከ-Firebase Firestore ዳታቤዝ ጋር በማቀናጀት ተሰራ። የተጠቃሚዎችን የፍቃድ ደረጃ በመለየት ያልተፈቀዱ ሰዎች የአድሚን ቦታን እንዳያዩ ተደርጓል።",
          architecture: "በ-React 18፣ Tailwind CSS እና Lucide React የተሰራ Single Page Application (SPA)። የባክኤንድ ክፍሉ በ-Firebase Authentication እና Firestore DB የተገነባ ነው።",
          features: [
            "የአድሚን መቆጣጠሪያ ዳሽቦርድ ከፍቃድ ደረጃ መቆጣጠሪያ ጋር (RBAC)",
            "የዕቃዎችን ክምችት ቀጥታ መቆጣጠሪያ (የዕቃ እጥረት ማሳወቂያ፣ ዋጋ ማሻሻያ)",
            "የምርቶች ካታሎግ በፍለጋ እና በምድብ መለያዎች የተደራጀ",
            "የካርት (Shopping Cart) እና የትዕዛዝ ማጠናቀቂያ ሂደት",
            "የትዕዛዝ ሁኔታዎችን መከታተያ ዳሽቦርድ ለሱቅ ስራ አስኪያጆች",
            "የዳታቤዝ ደህንነት ህጎች የሲስተሙን መረጃ ከጠላፊዎች የሚጠብቁ",
          ],
          impact: [
            "ለሱቅ አስተዳዳሪዎች የዕቃ ክምችት ቁጥጥርን በጣም ቀላል እና ፈጣን አድርጓል",
            "ያልተፈቀዱ የመረጃ ለውጦችን በዳታቤዝ ደህንነት ህጎች ሙሉ በሙሉ አስቀርቷል",
            "በስልክና በኮምፒውተር ላይ በጣም ፈጣን የአሰራር ፍጥነት አስመዝግቧል",
          ],
        },
        jenet: {
          title: "ጀነት እንገናኝ (JENET ENGENAGN)",
          category: "የበጎ አድራጎት ድር ጣቢያ እና የይዘት ማስተዳደሪያ (CMS)",
          shortDescription: "ለሰብአዊ እርዳታ ድርጅት የተሰራ የብዙ ቋንቋ (አማርኛ፣ እንግሊዝኛ እና አረብኛ) የዌብ መድረክ እና የይዘት ማስተዳደሪያ ሲስተም።",
          fullDescription: "ጀነት እንገናኝ ማህበራዊ ድጋፎችን፣ የህፃናት እንክብካቤን እና የአደጋ ጊዜ እርዳታዎችን የሚያቀርብ የበጎ አድራጎት ድርጅት አለምአቀፍ ድር ጣቢያ ነው።",
          problem: "ድርጅቱ በኢትዮጵያ እና በውጭ ሀገር ያሉ ደጋፊዎቹን በአማርኛ፣ እንግሊዝኛ እና አረብኛ ቋንቋዎች ለመድረስ፣ እንዲሁም ያከናወናቸውን ተግባራት በቀላሉ ለህዝብ ለማሳወቅ የሚያስችል ድር ጣቢያ ይፈልግ ነበር።",
          solution: "የብዙ ቋንቋ አማራጮችን የያዘ እና ከቀኝ-ወደ-ግራ (RTL) እንዲሁም ከግራ-ወደ-ቀኝ (LTR) ጽሁፎችን በጥራት የሚያሳይ የዌብ አፕሊኬሽን ከቀሊል የይዘት ማስተዳደሪያ (CMS) ጋር ተገነባ።",
          architecture: "በ-React + TypeScript የተገነባ ሆኖ የቋንቋ ቅየራዎችን በቀላሉ የሚያስተናግድ ነው። መረጃዎችን በ-Firebase Firestore ላይ ያከማቻል።",
          features: [
            "ሙሉ የብዙ ቋንቋ ድጋፍ (አማርኛ፣ እንግሊዝኛ እና አረብኛ)",
            "ለድርጅቱ ሰራተኞች ቀላል የሆነ የይዘት ማስተዳደሪያ ሲስተም (CMS)",
            "የተከናወኑ የበጎ አድራጎት ስራዎች ማሳያ ገፅ",
            "የእርዳታ እና የድጋፍ መስጫ ቅጾች",
            "በዝቅተኛ የኢንተርኔት ፍጥነት እንኳን በፍጥነት የሚከፈት",
            "ለዓይነ ስውራን እና ለሁሉም ተጠቃሚዎች ምቹ የሆነ የዲዛይን ስታንዳርድ",
          ],
          impact: [
            "የድርጅቱን መልእክት በአማርኛ፣ አረብኛ እና እንግሊዝኛ ለብዙ ደጋፊዎች እንዲደርስ አድርጓል",
            "የድርጅቱ ሰራተኞች ያለ ቴክኒክ ባለሙያ እርዳታ አዳዲስ መረጃዎችን እንዲጭኑ አስችሏል",
            "በሁሉም የሞባይል ስልኮች ላይ 100% ተስማሚ ሆኖ እንዲሰራ ተደርጓል",
          ],
        },
      },
    },
    services: {
      badge: "አገልግሎቶች እና መፍትሔዎች",
      heading: "ለንግድዎ የተዘጋጁ የሙያ የዌብ ልማት አገልግሎቶች",
      subheading: "ለረጅም ጊዜ የሚያገለግሉ፣ ፈጣን እና አስተማማኝ የሆኑ የዌብ ሶፍትዌር ልማት አገልግሎቶች።",
      items: [
        {
          title: "የበይነመረብ ግብይት (E-Commerce)",
          description: "የምርቶች ካታሎግ፣ የዕቃ መግዣ ካርት፣ የትዕዛዝ ማስተናገጃ እና የአድሚን መቆጣጠሪያ ያላቸው ሙሉ የኦንላይን ሱቆች።",
          deliverables: ["የምርቶች ማሳያ ገፅ", "የካርት እና ትዕዛዝ ማጠናቀቂያ", "የዕቃ ክምችት መቆጣጠሪያ", "የክፍያ ሲስተም ዝግጅት"],
        },
        {
          title: "ልዩ የዌብ አፕሊኬሽኖች",
          description: "ለድርጅትዎ ልዩ የስራ እንቅስቃሴዎች የተበጁ፣ ፈጣን እና ለአጠቃቀም ምቹ የሆኑ የዌብ ሶፍትዌሮች።",
          deliverables: ["ዘመናዊ SPA መዋቅር", "በይነተገናኝ ዳሽቦርዶች", "የኤፒአይ (API) ግንኙነቶች", "የመረጃ ማቀናበሪያ ሲስተም"],
        },
        {
          title: "የአድሚን ዳሽቦርድ እና CMS",
          description: "የድርጅትዎን መረጃዎች፣ ተጠቃሚዎች እና የስራ እንቅስቃሴዎች ሙሉ በሙሉ ለመቆጣጠር የሚያስችሉ ዳሽቦርዶች።",
          deliverables: ["የስራ ፍቃድ ደረጃዎች (RBAC)", "መረጃዎችን መፈለጊያ እና ማውጫ", "የይዘት ማስተካከያ ገፅ", "የሲስተም እንቅስቃሴ ሪፖርት"],
        },
        {
          title: "የዳታቤዝ እና ኤፒአይ መዋቅር",
          description: "የተደራጁ የዳታቤዝ ዲዛይኖች፣ ደህንነታቸው የተጠበቁ ኤፒአይዎች እና ቀልጣፋ የመረጃ ማውጫ ሲስተሞች።",
          deliverables: ["የ-Firestore ዳታቤዝ ዲዛይን", "የደህንነት ህጎች ዝግጅት", "የመረጃ ሞዴሎች", "የኤፒአይ ማቀናጀት"],
        },
        {
          title: "የ-Firebase እና Cloud ማቀናጀት",
          description: "የተጠቃሚዎች ማረጋገጫ (Auth)፣ የደመና ዳታቤዝ፣ የፍቃድ ደረጃዎች እና የዌብ ማስተናገጃ ዝግጅት።",
          deliverables: ["የተጠቃሚዎች አካውንት ሲስተም", "የ-Firestore ዳታቤዝ ማስተካከያ", "የአድሚን ፍቃዶች", "በዌብ ላይ ማስተናገድ"],
        },
        {
          title: "የፍጥነት እና ደህንነት ማሻሻያ",
          description: "የነበሩ የዌብ አፕሊኬሽኖችን ፍጥነት፣ በስልክ ላይ የመከፈት ሁኔታ እና የደህንነት ህጎችን ማሻሻል።",
          deliverables: ["የዌብሳይት ፍጥነት መጨመር", "የደህንነት ክፍተቶች ፍተሻ", "የሞባይል ስክሪን ማስተካከያ", "የኮድ ጥራት ማሻሻል"],
        },
      ],
    },
    process: {
      badge: "የስራ ሂደት",
      heading: "የተደራጀ እና ግልጽነት ያለው የሶፍትዌር ልማት ሂደት",
      subheading: "ከመጀመሪያው ሀሳብ እስከ መጨረሻው ትግበራ፣ እያንዳንዱ ደረጃ በጥንቃቄ ይከናወናል።",
      steps: [
        {
          title: "1. የፍላጎት ጥናት እና የሲስተም ፕላን",
          description: "የንግዱን ፍላጎት፣ የደንበኞችን አይነት እና የሲስተሙን አጠቃላይ መዋቅር በጥ his ማቀድ።",
        },
        {
          title: "2. የዲዛይን እና ዳታቤዝ ቅጽበታዊ ንድፍ",
          description: "የስክሪን ዲዛይኖችን፣ የተጠቃሚ ሂደቶችን እና የዳታቤዝ መዋቅርን ማዘጋጀት።",
        },
        {
          title: "3. የፊት-ገፅ እና ባክኤንድ ልማት",
          description: "በ-React፣ TypeScript እና የደመና አገልግሎቶች አማካኝነት ንፁህ እና ጥራት ያለው ኮድ መጻፍ።",
        },
        {
          title: "4. የደህንነት ህጎች እና ፍቃዶች ማቀናጀት",
          description: "የተጠቃሚዎችን አካውንት፣ የአድሚን ፍቃዶችን እና የዳታቤዝ ደህንነት ህጎችን መተግበር።",
        },
        {
          title: "5. ሙሉ ፍተሻ እና የፍጥነት ማሻሻያ",
          description: "በሁሉም ስልኮችና ኮምፒውተሮች ላይ መሞከር፣ የቅጽ ስህተቶችን እና የፍጥነት ሁኔታዎችን ማስተካከል።",
        },
        {
          title: "6. በዌብ ላይ መጫን እና ማስረከብ",
          description: "ሶፍትዌሩን በዌብ ላይ መጫን፣ የዶሜይን እና የ-SSL ደህንነት ማስተካከል፣ እንዲሁም ማብራሪያ መስጠት።",
        },
      ],
    },
    whyWork: {
      badge: "ለምን እኔን ይመርጣሉ?",
      heading: "ለጥራት፣ ለደህንነት እና ለደንበኞች እርካታ የቆመ አገልግሎት",
      subheading: "የእኔ የሶፍትዌር ልማት አሰራር ለንግድዎ የሚሰጠው ልዩ ጥቅሞች።",
      points: [
        {
          title: "ቀጥተኛ እና ግልጽ ግንኙነት",
          description: "በየጊዜው የፕሮጀክት እድገት ሪፖርት፣ ግልጽ ቀናት እና ፈጣን የቴክኒክ ምክር መስጠት።",
        },
        {
          title: "ከፍተኛ የኮድ ጥራት",
          description: "በ-TypeScript ጥብቅ የደህንነት ስታንዳርድ እና ለረጅም ጊዜ በሚያገለግል መዋቅር የተጻፈ ኮድ።",
        },
        {
          title: "ለንግድዎ እድገት ያተኮረ",
          description: "የንግድዎን አላማ በቀጥታ የሚደግፉ እና የስራ ሂደትን የሚያፈጥኑ ባህሪያትን መገንባት።",
        },
        {
          title: "ለደህንነት እና ሚስጥራዊነት ቅድሚያ",
          description: "የባክኤንድ ፍቃዶችን መጠበቅ፣ ሚስጥራዊ ቁልፎችን መሸፈን እና የዳታቤዝ ደህንነት ህጎችን መተግበር።",
        },
      ],
    },
    contact: {
      badge: "ግንኙነት",
      heading: "ስለሚቀጥለው የዌብ ፕሮጀክትዎ እንነጋገር",
      subheading: "አዲስ የዌብ ፕሮጀክት አለዎት ወይስ አስተማማኝ የሶፍትዌር ባለሙያ ይፈልጋሉ? በቅጽ፣ በስልክ ወይም በቴሌግራም ያነጋግሩኝ።",
      phoneLabel: "በስልክ ለመደወል",
      emailLabel: "ኢሜይል አድራሻ",
      telegramLabel: "ቴሌግራም",
      whatsappLabel: "ዋትስአፕ",
      hoursLabel: "የስራ ሰዓት",
      hoursValue: "ሰኞ – ቅዳሜ፡ ከጠዋቱ 2:00 እስከ ማታ 2:00 (የኢትዮጵያ ሰዓት)",
      availabilityBadge: "ለአዳዲስ ፕሮጀክቶች ዝግጁ",
      form: {
        heading: "የፕሮጀክት ጥያቄ ይላኩ",
        subheading: "የሚከተለውን ቅጽ ይሙሉ፤ በ24 ሰዓት ውስጥ ምላሽ እሰጣለሁ።",
        fullNameLabel: "ሙሉ ስም",
        fullNamePlaceholder: "ምሳሌ፡ አበበ ከበደ",
        emailLabel: "ኢሜይል አድራሻ",
        emailPlaceholder: "ምሳሌ፡ abebe@example.com",
        phoneLabel: "ስልክ ቁጥር (አማራጭ)",
        phonePlaceholder: "ምሳሌ፡ 0911223344",
        serviceLabel: "የሚፈልጉት አገልግሎት",
        selectServicePlaceholder: "አገልግሎት ይምረጡ...",
        servicesOptions: [
          { value: "ecommerce", label: "የበይነመረብ ግብይት (E-Commerce)" },
          { value: "webapp", label: "ልዩ የዌብ አፕሊኬሽን" },
          { value: "admin", label: "የአድሚን ዳሽቦርድ እና CMS" },
          { value: "cloud", label: "የ-Firebase / ዳታቤዝ ዝግጅት" },
          { value: "other", label: "ሌላ የዌብ ልማት አገልግሎት" },
        ],
        messageLabel: "የፕሮጀክቱ ዝርዝር / መልእክት",
        messagePlaceholder: "ስለ ፕሮጀክትዎ ፍላጎት፣ አላማ እና የጊዜ ገደብ በአጭሩ ይግለጹ...",
        submitBtn: "የፕሮጀክት ጥያቄ ይላኩ",
        submittingBtn: "መልእክቱ እየተላከ ነው...",
        successMessage: "እናመሰግናለን! መልእክትዎ በተሳካ ሁኔታ ተልኳል። ሐሰን በቅርቡ ያነጋግርዎታል።",
        errorMessage: "መልእክቱን ለመላክ ችግር አጋጥሟል። እባክዎ እንደገና ይሞክሩ ወይም በስልክ ይደውሉ።",
        validation: {
          nameRequired: "እባክዎ ሙሉ ስምዎን ያስገቡ።",
          emailRequired: "እባክዎ ኢሜይል አድራሻዎን ያስገቡ።",
          emailInvalid: "እባክዎ ትክክለኛ ኢሜይል አድራሻ ያስገቡ።",
          messageRequired: "እባክዎ የፕሮጀክትዎን ዝርዝር ወይም መልእክት ያስገቡ።",
        },
      },
    },
    footer: {
      tagline: "ከፍተኛ ብቃት ያላቸውን የዌብ ሲስተሞች፣ የአድሚን ዳሽቦርዶችን እና የደመና ባክኤንዶችን መገንባት።",
      quickLinks: "ፈጣን ማውጫ",
      contactInfo: "ቀጥተኛ አድራሻ",
      location: "አዲስ አበባ፣ ኢትዮጵያ",
      copyright: "© 2026 ሐሰን አብዱ። መብቱ በህግ የተጠበቀ ነው።",
      backToTop: "ወደ ላይ ተመለስ",
    },
  },
};
