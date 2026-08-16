import React, { useState } from "react";
import { projectsData } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { Project } from "../types";
import { PlusCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to map project data with active language translations
  const localizedProjects: Project[] = projectsData.map((project) => {
    if (project.id === "mizan-shop") {
      const item = t.projects.items.mizan;
      return {
        ...project,
        title: item.title,
        category: item.category,
        description: item.shortDescription,
        fullDescription: item.fullDescription,
        objective: item.problem,
        solution: item.solution,
      };
    }
    if (project.id === "jenet-engenagn") {
      const item = t.projects.items.jenet;
      return {
        ...project,
        title: item.title,
        category: item.category,
        description: item.shortDescription,
        fullDescription: item.fullDescription,
        objective: item.problem,
        solution: item.solution,
      };
    }
    return project;
  });

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.projects.heading}
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            {t.projects.subheading}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {localizedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Extensibility Info */}
        <div className="mt-12 p-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/50 text-center flex flex-col items-center justify-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
            <PlusCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <h4 className="font-display text-sm font-bold text-zinc-200">
            {t.projects.badge}
          </h4>
          <p className="text-xs text-zinc-400 max-w-md">
            {t.projects.subheading}
          </p>
        </div>

      </div>

      {/* Case Study Modal Overlay */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

