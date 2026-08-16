import React, { useState } from "react";
import { ArrowRight, Terminal, ShieldCheck, Database, LayoutDashboard, Layers, Server, CheckCircle2, PhoneCall, Maximize2 } from "lucide-react";
import { contactConfig } from "../config/contact";
import { useLanguage } from "../context/LanguageContext";
import { ProfileModal } from "./ProfileModal";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [activeNode, setActiveNode] = useState<"frontend" | "auth" | "database" | "admin">("frontend");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const architectureNodes = [
    {
      id: "frontend" as const,
      label: t.hero.highlights.responsive.title,
      subLabel: "React & Tailwind",
      icon: Layers,
      color: "border-emerald-500/50 text-emerald-400 bg-emerald-500/10",
      description: t.hero.highlights.responsive.desc,
    },
    {
      id: "auth" as const,
      label: t.hero.highlights.security.title,
      subLabel: "Custom Claims & RBAC",
      icon: ShieldCheck,
      color: "border-sky-500/50 text-sky-400 bg-sky-500/10",
      description: t.hero.highlights.security.desc,
    },
    {
      id: "database" as const,
      label: t.hero.highlights.cloud.title,
      subLabel: "Firestore & Cloud Ops",
      icon: Database,
      color: "border-indigo-500/50 text-indigo-400 bg-indigo-500/10",
      description: t.hero.highlights.cloud.desc,
    },
    {
      id: "admin" as const,
      label: t.hero.highlights.admin.title,
      subLabel: "Full CMS & Operations",
      icon: LayoutDashboard,
      color: "border-amber-500/50 text-amber-400 bg-amber-500/10",
      description: t.hero.highlights.admin.desc,
    },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Mesh Grids & Glow Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Developer Identity Header with Profile Photo */}
            <div className="flex items-center gap-4">
              <div
                onClick={() => setIsProfileModalOpen(true)}
                className="relative group cursor-pointer"
                title="Click to enlarge profile photo"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-300" />
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Hassen Abdu - Web Developer & Full-Stack Web Application Developer"
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-zinc-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback avatar if local image is being exported
                    (e.target as HTMLImageElement).src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230f172a'/><circle cx='50' cy='35' r='20' fill='%2310b981'/><path d='M20 90 Q50 60 80 90' stroke='%2310b981' stroke-width='8' fill='none'/></svg>";
                  }}
                />
                <span className="absolute bottom-0 right-0 p-1 bg-zinc-900/90 border border-zinc-700 rounded-full text-emerald-400 group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-3 h-3" />
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-400 font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold flex items-center gap-1.5">
                  <span className="text-emerald-400">&gt;</span> Hassen Abdu
                </div>
                <div className="text-xs text-zinc-300 font-medium">
                  {contactConfig.title}
                </div>
              </div>
            </div>

            <ProfileModal
              isOpen={isProfileModalOpen}
              onClose={() => setIsProfileModalOpen(false)}
            />

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t.hero.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-950/40 active:scale-95 group"
                id="hero-cta-primary"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 text-zinc-200 hover:text-white font-semibold text-sm border border-zinc-800 transition-all duration-200 active:scale-95"
                id="hero-cta-secondary"
              >
                <span>{t.hero.ctaContact}</span>
              </a>

              <a
                href={`tel:${contactConfig.phones[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-emerald-400 hover:text-emerald-300 font-mono text-xs border border-zinc-800 transition-all duration-200 active:scale-95"
                id="hero-cta-phone"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t.hero.ctaCall}</span>
              </a>
            </div>

            {/* Core Architectural Pillars */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                t.hero.highlights.admin.title,
                t.hero.highlights.cloud.title,
                t.hero.highlights.responsive.title,
                t.hero.highlights.security.title
              ].map((title, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{title}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Full-Stack System Interactive Architecture Visual */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 relative border border-zinc-800/90 shadow-2xl bg-zinc-900/80">
              
              {/* Studio Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">system-architecture.config</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Server className="w-3 h-3" />
                  <span>Full-Stack Ready</span>
                </div>
              </div>

              {/* Architecture Node Grid */}
              <div className="space-y-3">
                {architectureNodes.map((node) => {
                  const Icon = node.icon;
                  const isSelected = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3.5 focus:outline-none ${
                        isSelected
                          ? `bg-zinc-800/90 ${node.color} shadow-md`
                          : "bg-zinc-950/50 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isSelected ? node.color : "bg-zinc-900 text-zinc-400"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-zinc-100">{node.label}</h4>
                          <span className="font-mono text-[10px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                            {node.subLabel}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 leading-normal">
                          {node.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Code/Flow Context Footer */}
              <div className="mt-5 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/90 font-mono text-xs text-zinc-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-zinc-300 font-sans text-xs">Production Grade System</span>
                </div>
                <span className="text-emerald-400 text-[10px] uppercase tracking-wider font-semibold">100% Verified</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

