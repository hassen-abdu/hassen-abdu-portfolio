import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "mizan-shop",
    number: "01",
    title: "MIZAN SHOP",
    category: "E-Commerce Platform",
    description: "A modern e-commerce platform designed for product discovery, customer ordering, business management, and secure administration.",
    fullDescription: "MIZAN SHOP is a full-stack digital storefront engineered for seamless customer purchasing and comprehensive backend store operations. It features a high-performance customer-facing interface combined with a secure, role-restricted administrative dashboard for inventory, order tracking, and content orchestration.",
    objective: "To deliver a robust, fast, and easily manageable e-commerce web platform that bridges customer shopping experiences with streamlined back-office business operations.",
    solution: "Architected a responsive storefront optimized for quick product discovery paired with Firebase cloud infrastructure. Built custom access controls for business administrators to securely manage product inventories, categories, customer orders, and shop configurations in real-time.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Cloud Functions"
    ],
    frontendFeatures: [
      "Product browsing",
      "Product categories",
      "Product details",
      "Customer ordering",
      "Responsive design",
      "Modern storefront",
      "Multilingual UI dropdown",
      "Bulk quotes (RFQ) & sourcing request forms"
    ],
    backendFeatures: [
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Firebase Storage where implemented",
      "Firebase Cloud Functions where implemented",
      "Real-time customer checkout syncing"
    ],
    dashboardFeatures: [
      "Protected admin dashboard",
      "Product management",
      "Category management",
      "Order management",
      "Administrative management where implemented",
      "Real-time revenue & order statistics",
      "Bulk quotes & custom sourcing request tracking"
    ],
    securityFeatures: [
      "Administrative access uses Firebase Authentication and administrator authorization.",
      "Protected admin routes with strict session verification",
      "Firestore security rules enforcing role-based read/write permissions"
    ],
    images: [
      {
        url: `${import.meta.env.BASE_URL}images/projects/mizan-shop/01-storefront.jpg`,
        caption: "MIZAN SHOP Homepage - B2B Marketplace & Mobile Phones Sourcing Storefront",
        category: "Storefront",
        isCover: true
      },
      {
       url: `${import.meta.env.BASE_URL}images/projects/mizan-shop/02-megamenu.jpg`,
        caption: "Storefront Navigation - Goods, Building Materials & Electronics Megamenu with Sourcing Modal",
        category: "Megamenu"
      },
      {
        url: `${import.meta.env.BASE_URL}images/projects/mizan-shop/03-admin-login.jpg`,
        caption: "Firebase Admin Portal - Secure Administrator Sign-In Interface",
        category: "Authentication"
      },
      {
        url: `${import.meta.env.BASE_URL}images/projects/mizan-shop/04-admin-dashboard.jpg`,
        caption: "Admin Control Center - Real-Time Dashboard Metrics, Total Orders & Revenue Stats",
        category: "Dashboard"
      },
      {
        url: `${import.meta.env.BASE_URL}images/projects/mizan-shop/05-product-manager.jpg`,
        caption: "Product Catalog Management - Multilingual Product Entry & Firebase Storage Image Uploader",
        category: "Dashboard"
      },
      {
        url: `${import.meta.env.BASE_URL}images/projects/mizan-shop/06-order-management.jpg`,
        caption: "Customer Orders Dashboard - Real-time Checkout Order Processing & Shipping Fulfillment Table",
        category: "Dashboard"
      }
    ],
    status: "Completed / Deployed",
    featured: true,
    liveUrl: "https://jenetengenagh.web.app",
    accentColor: "emerald"
  },
  {
    id: "jenet-engenagn",
    number: "02",
    title: "JENET ENGENAGN",
    category: "Charity Organization Website & CMS",
    description: "A multilingual charity organization website supported by a Firebase-powered content management system.",
    fullDescription: "JENET ENGENAGN is a charity web system crafted to communicate the organization's mission, publish community news, showcase upcoming humanitarian events, display project galleries, and provide transparent donation instructions across multiple languages.",
    objective: "To provide a credible, transparent, multilingual digital presence for a charity organization along with a custom content management dashboard so staff can publish updates without developer intervention.",
    solution: "Designed an expressive, accessible public website supporting English, Amharic, and Arabic language switches. Connected the frontend to a custom Firebase CMS dashboard allowing administrative staff to publish news, manage events, upload photo galleries, and update donation directives in real time.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Multilingual i18n"
    ],
    frontendFeatures: [
      "Responsive website",
      "News",
      "Events",
      "Announcements",
      "Gallery",
      "Donation information",
      "English",
      "Amharic",
      "Arabic"
    ],
    backendFeatures: [
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Firebase Storage where implemented"
    ],
    dashboardFeatures: [
      "Protected admin dashboard",
      "News management",
      "Events management",
      "Announcements management",
      "Image management",
      "Multilingual content management"
    ],
    securityFeatures: [
      "Administrative functionality is protected through Firebase Authentication and authorization.",
      "Granular Firestore rules restricting content edits to verified admin roles"
    ],
    images: [
      {
        url: `${import.meta.env.BASE_URL}images/projects/jenet-engenagn/01-homepage.jpg`,
        caption: "Jenet Engenagn Public Website - Empowering Communities Hero Section & Impact Stats",
        category: "Website",
        isCover: true
      },
      {
        url: `${import.meta.env.BASE_URL}images/projects/jenet-engenagn/02-projects-amharic.jpg`,
        caption: "Development Projects Page - Community Initiatives in Amharic Interface (የልማት ፕሮጀክቶቻችን)",
        category: "Projects"
      },
      {
        url: `${import.meta.env.BASE_URL}images/projects/jenet-engenagn/03-cms-dashboard.jpg`,
        caption: "Jenet Charity CMS Dashboard - Multilingual News Manager (English, Amharic, Arabic)",
        category: "CMS"
      }
    ],
    status: "Completed / Deployed",
    featured: true,
    liveUrl: "https://jemjenet.web.app/",
    accentColor: "sky"
  }
];

// To add Project 3 or Project 4 in the future, append new objects to the projectsData array above.
