import React from "react";
import { Project } from "../types";
import { ArrowUpRight, ExternalLink, Layers, Database } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const { t } = useLanguage();

  return (
    <div className="glass-card rounded-2xl border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group bg-zinc-900/60 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full group-hover:bg-emerald-500/10 transition-all" />

      <div>
        {/* Top Header & Badges */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Project Name & Description */}
        <div className="mt-6 space-y-3">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Cover Image Screenshot */}
        {project.images && project.images.length > 0 && (
          <div
            onClick={() => onOpenCaseStudy(project)}
            className="mt-6 relative rounded-xl overflow-hidden border border-zinc-800 group/img cursor-pointer bg-zinc-950 aspect-video"
          >
            <img
              src={project.images[0].url}
              alt={`${project.title} - ${project.images[0].caption}`}
              className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback SVG graphic if local file image is missing
                (e.target as HTMLImageElement).src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'><rect width='400' height='225' fill='%230f172a'/><text x='200' y='110' fill='%2310b981' font-family='sans-serif' font-size='16' font-weight='bold' text-anchor='middle'>" + project.title + " Screenshot</text><text x='200' y='135' fill='%2364748b' font-family='sans-serif' font-size='12' text-anchor='middle'>Click to View Case Study Gallery</text></svg>";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono text-zinc-300 backdrop-blur-sm truncate max-w-[80%]">
                📷 {project.images[0].caption}
              </span>
              <span className="px-2 py-1 rounded bg-emerald-500 text-zinc-950 text-[10px] font-bold">
                {project.images.length} Shots
              </span>
            </div>
          </div>
        )}

        {/* Key Full-Stack Capabilities Highlights */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
          <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400">
              <Layers className="w-3.5 h-3.5" />
              <span>Store / Web Frontend</span>
            </div>
            <p className="text-zinc-400 text-[11px] line-clamp-2">
              {project.frontendFeatures[0]} &amp; {project.frontendFeatures[1]}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-sky-400">
              <Database className="w-3.5 h-3.5" />
              <span>Firebase Backend &amp; Auth</span>
            </div>
            <p className="text-zinc-400 text-[11px] line-clamp-2">
              {project.backendFeatures[0]} &amp; {project.securityFeatures[0]}
            </p>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 font-mono text-[11px] text-zinc-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800 font-mono text-[11px] text-zinc-400">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs transition-all active:scale-95"
          id={`case-study-btn-${project.id}`}
        >
          <span>{t.projects.card.viewCaseStudy}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all"
          >
            <span>{t.projects.modal.liveDemo}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

    </div>
  );
};

