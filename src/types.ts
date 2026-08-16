export interface ProjectImage {
  url: string;
  caption: string;
  category?: string;
  isCover?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  frontendFeatures: string[];
  backendFeatures: string[];
  dashboardFeatures: string[];
  securityFeatures: string[];
  images: ProjectImage[];
  status: "Completed / Deployed" | "In Progress" | "Upcoming";
  featured: boolean;
  liveUrl: string; // Configurable live project button URL ("" if none)
  objective?: string;
  solution?: string;
  accentColor?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend / Cloud" | "Development Tools";
  description: string;
  iconName: string;
}
