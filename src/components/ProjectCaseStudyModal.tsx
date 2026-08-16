import React, { useState, useEffect } from "react";
import { X, Shield, Database, LayoutDashboard, Layers, CheckCircle2, Server, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from "lucide-react";
import { Project } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Reset index when project changes
  useEffect(() => {
    setSelectedImageIndex(0);
    setIsLightboxOpen(false);
  }, [project]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !project?.images?.length) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> next image
        setSelectedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
      } else {
        // Swipe right -> prev image
        setSelectedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
      }
    }
    setTouchStartX(null);
  };

  // Handle keyboard navigation for modal & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
      if (isLightboxOpen && project.images && project.images.length > 0) {
        if (e.key === "ArrowLeft") {
          setSelectedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
        } else if (e.key === "ArrowRight") {
          setSelectedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
        }
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, isLightboxOpen, onClose]);

  if (!project) return null;

  const currentImage = project.images && project.images[selectedImageIndex];

  return (
    <>
      {/* Main Case Study Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-zinc-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
        <div
          className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 px-5 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                PROJECT {project.number}
              </span>
              <span className="text-zinc-400 font-mono text-xs hidden sm:inline-block">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content Body */}
          <div className="p-5 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
            
            {/* Header Title & Status */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h2>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{project.status}</span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Project Screenshots Gallery System */}
            {project.images && project.images.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-emerald-400" />
                    <span>Project Screenshots &amp; UI Evidence</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {selectedImageIndex + 1} of {project.images.length}
                  </span>
                </div>

                {/* Active Main Screenshot Viewer */}
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group">
                  <div className="aspect-video relative overflow-hidden bg-zinc-950 flex items-center justify-center">
                    <img
                      src={currentImage?.url}
                      alt={currentImage?.caption}
                      className="w-full h-full object-cover object-top transition-all duration-300 cursor-pointer"
                      onClick={() => setIsLightboxOpen(true)}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'><rect width='400' height='225' fill='%230f172a'/><text x='200' y='110' fill='%2310b981' font-family='sans-serif' font-size='16' font-weight='bold' text-anchor='middle'>${project.title} Screenshot</text><text x='200' y='135' fill='%2394a3b8' font-family='sans-serif' font-size='12' text-anchor='middle'>${currentImage?.caption}</text></svg>`;
                      }}
                    />
                  </div>

                  {/* Caption Bar */}
                  <div className="p-3 bg-zinc-950/90 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-300 font-mono">
                    <span className="truncate pr-4">📷 {currentImage?.caption}</span>
                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      className="shrink-0 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-emerald-400 text-[11px] font-sans font-semibold inline-flex items-center gap-1"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Enlarge</span>
                    </button>
                  </div>
                </div>

                {/* Thumbnails Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border aspect-video transition-all ${
                        selectedImageIndex === idx
                          ? "border-emerald-500 ring-2 ring-emerald-500/40 opacity-100 scale-105"
                          : "border-zinc-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'><rect width='100' height='60' fill='%230f172a'/><text x='50' y='35' fill='%2310b981' font-size='10' text-anchor='middle'>${idx + 1}</text></svg>`;
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            <div className="glass-card rounded-xl border border-zinc-800 p-5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-zinc-300">{project.id}.app.internal</span>
                </div>
                <span className="text-emerald-400">Full-Stack Verified</span>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <Layers className="w-4 h-4" />
                    <span>Frontend Interface</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">Responsive UI with state management and optimized rendering.</p>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                    <Server className="w-4 h-4" />
                    <span>Backend &amp; Cloud DB</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">Cloud database, authentication, and secure rule authorization.</p>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Admin Panel &amp; RBAC</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">Protected dashboard for system management and analytics.</p>
                </div>
              </div>
            </div>

            {/* Objective & Solution */}
            {project.objective && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <h3 className="font-display text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Project Challenge
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <h3 className="font-display text-xs font-bold text-sky-400 uppercase tracking-wider">
                    Implemented Solution
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Feature Breakdown Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Frontend Features */}
              <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-white pb-2 border-b border-zinc-800">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Frontend Features</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {project.frontendFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend Features */}
              <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-white pb-2 border-b border-zinc-800">
                  <Database className="w-4 h-4 text-sky-400" />
                  <span>Backend Architecture</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {project.backendFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admin Dashboard Features */}
              <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-white pb-2 border-b border-zinc-800">
                  <LayoutDashboard className="w-4 h-4 text-amber-400" />
                  <span>Admin Dashboard</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {project.dashboardFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security Features */}
              <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 font-display text-sm font-bold text-white pb-2 border-b border-zinc-800">
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span>Security &amp; Authorization</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {project.securityFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Technologies Used */}
            <div className="space-y-3 pt-2">
              <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="sticky bottom-0 z-20 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-mono">
              Status: <span className="text-emerald-400 font-bold">{project.status}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.liveUrl && project.liveUrl.trim() !== "" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-all"
                >
                  <span>View Live Website</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Screenshot Lightbox */}
      {isLightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Top Control Bar */}
          <div className="flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
            <div className="text-xs font-mono text-zinc-300 bg-zinc-900/80 px-3 py-1.5 rounded border border-zinc-800">
              {project.title} — {selectedImageIndex + 1} / {project.images.length}
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-lg bg-zinc-800/90 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image & Arrows */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden select-none"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-zinc-900/90 border border-zinc-800 text-white hover:bg-emerald-500 hover:text-zinc-950 transition-all shadow-xl"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={currentImage.url}
              alt={currentImage.caption}
              className="max-h-[82vh] max-w-full object-contain rounded-xl border border-zinc-800 shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><rect width='800' height='450' fill='%230f172a'/><text x='400' y='220' fill='%2310b981' font-family='sans-serif' font-size='20' font-weight='bold' text-anchor='middle'>${project.title} Screenshot</text><text x='400' y='250' fill='%2394a3b8' font-family='sans-serif' font-size='14' text-anchor='middle'>${currentImage.caption}</text></svg>`;
              }}
            />

            <button
              onClick={() => setSelectedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-zinc-900/90 border border-zinc-800 text-white hover:bg-emerald-500 hover:text-zinc-950 transition-all shadow-xl"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption */}
          <div className="text-center z-10" onClick={(e) => e.stopPropagation()}>
            <div className="inline-block bg-zinc-900/90 px-4 py-2 rounded-xl border border-zinc-800 text-xs sm:text-sm font-mono text-zinc-200">
              📷 {currentImage.caption}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
