import { Service } from "../types";

export const servicesData: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    shortDesc: "High-impact, performance-oriented corporate and agency websites crafted to establish trust and drive inquiries.",
    fullDesc: "I build modern, responsive, and search-optimized business websites that present your company with authority. Every interface is custom-designed for clarity, mobile responsiveness, and high conversion.",
    deliverables: [
      "Custom responsive interface design",
      "Fast page load & SEO optimization",
      "Interactive inquiry & contact forms",
      "Brand-aligned design language"
    ],
    iconName: "Globe"
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    shortDesc: "Custom online storefronts engineered for smooth customer shopping, inventory browsing, and order processing.",
    fullDesc: "From product discovery to checkout and admin store management, I develop custom e-commerce solutions that make selling online straightforward, secure, and reliable.",
    deliverables: [
      "Product catalogs & multi-level categorization",
      "Interactive shopping cart workflows",
      "Secure payment & order handling design",
      "Integrated product & stock administration"
    ],
    iconName: "ShoppingBag"
  },
  {
    id: "web-applications",
    title: "Web Application Development",
    shortDesc: "Full-stack web applications tailored to solve specific business problems and automate operations.",
    fullDesc: "Engineered with modern frontend architectures and reliable backend services to deliver responsive, feature-rich web software that scales with your growth.",
    deliverables: [
      "Single-Page & Multi-Page App Architecture",
      "Real-time state management & API interaction",
      "Custom business logic & workflow automation",
      "Cross-browser and cross-device testing"
    ],
    iconName: "Code2"
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Development",
    shortDesc: "Intuitive, secure internal control panels for managing data, users, orders, and application content.",
    fullDesc: "Custom administrative dashboards designed to give business owners and operators complete control over their system's data without complex technical knowledge.",
    deliverables: [
      "Role-protected navigation and access",
      "Comprehensive CRUD operations for system data",
      "Data filtering, search, and CSV export",
      "Clean UI metrics and activity management"
    ],
    iconName: "LayoutDashboard"
  },
  {
    id: "backend-database",
    title: "Backend & Database Integration",
    shortDesc: "Scalable cloud databases and backend architectures designed for rapid data retrieval and reliable uptime.",
    fullDesc: "Architecting cloud database structures and serverless endpoints that process data efficiently, store assets safely, and ensure high availability for your applications.",
    deliverables: [
      "Firestore NoSQL database schema design",
      "Cloud Functions & API routing setup",
      "Secure file upload and media storage",
      "Real-time database triggers and hooks"
    ],
    iconName: "Database"
  },
  {
    id: "auth-authorization",
    title: "Authentication & Authorization",
    shortDesc: "Robust security models protecting sensitive business data, user accounts, and administrative features.",
    fullDesc: "Implementing reliable login flows and granular access controls to ensure every user has exact permissions suited to their role within your web application.",
    deliverables: [
      "Secure login & account registration flows",
      "Role-Based Access Control (RBAC)",
      "Firebase Custom Claims implementation",
      "Database security rule validation"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Ongoing technical support, performance monitoring, security checks, and content updates.",
    fullDesc: "Keeping your web applications updated, secure, and performing optimally over time so you can focus on running your business with peace of mind.",
    deliverables: [
      "Regular dependency & security audits",
      "Performance optimization & bug fixes",
      "Feature enhancements & layout tweaks",
      "Reliable backup and deployment management"
    ],
    iconName: "Wrench"
  }
];
