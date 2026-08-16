import { TechItem } from "../types";

export const techStackData: TechItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven library for building reactive, fast, and maintainable user interfaces.",
    iconName: "Atom"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Strongly typed JavaScript preventing runtime errors and enforcing clear system contracts.",
    iconName: "FileCode2"
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Core language powering interactive client web applications and dynamic logic.",
    iconName: "Binary"
  },
  {
    name: "HTML",
    category: "Frontend",
    description: "Semantic web markup structured for accessibility, SEO, and document standards.",
    iconName: "Layout"
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Modern CSS layout engines including Flexbox, CSS Grid, and custom animations.",
    iconName: "Palette"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first CSS framework for rapid, consistent, and responsive visual styling.",
    iconName: "Sparkles"
  },

  // Backend / Cloud
  {
    name: "Firebase",
    category: "Backend / Cloud",
    description: "Google's suite of cloud services for rapid, production-ready web application backends.",
    iconName: "Flame"
  },
  {
    name: "Firestore",
    category: "Backend / Cloud",
    description: "Flexible, scalable NoSQL document database with real-time data sync capability.",
    iconName: "Database"
  },
  {
    name: "Firebase Authentication",
    category: "Backend / Cloud",
    description: "Secure user authentication support across email, custom claims, and session tokens.",
    iconName: "KeyRound"
  },
  {
    name: "Firebase Storage",
    category: "Backend / Cloud",
    description: "Scalable cloud object storage for managing high-resolution images, documents, and media.",
    iconName: "FolderGit2"
  },
  {
    name: "Firebase Cloud Functions",
    category: "Backend / Cloud",
    description: "Event-driven serverless compute environment for running secure backend business logic.",
    iconName: "Cpu"
  },

  // Development
  {
    name: "Vite",
    category: "Development Tools",
    description: "Next-generation frontend tooling providing instant server start and fast builds.",
    iconName: "Zap"
  },
  {
    name: "Git",
    category: "Development Tools",
    description: "Distributed version control system tracking clean, incremental codebase history.",
    iconName: "GitBranch"
  },
  {
    name: "GitHub",
    category: "Development Tools",
    description: "Cloud repository hosting for collaboration, code reviews, and versioned backups.",
    iconName: "Github"
  },
  {
    name: "VS Code",
    category: "Development Tools",
    description: "Primary development workspace configured with strict linters and formatters.",
    iconName: "Terminal"
  }
];
