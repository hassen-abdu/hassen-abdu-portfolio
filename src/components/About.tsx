import React, { useState } from "react";
import { Monitor, Server, ShieldCheck, Database, LayoutDashboard, Smartphone, Cloud, Wrench, CheckCircle, ArrowRight, Maximize2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ProfileModal } from "./ProfileModal";

export const About: React.FC = () => {
  const { t } = useLanguage();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const highlights = [
    {
      title: t.about.highlights.ecommerce.title,
      description: t.about.highlights.ecommerce.desc,
      icon: LayoutDashboard,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: t.about.highlights.dashboards.title,
      description: t.about.highlights.dashboards.desc,
      icon: Monitor,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    },
    {
      title: t.about.highlights.multilingual.title,
      description: t.about.highlights.multilingual.desc,
      icon: Server,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: t.about.highlights.cloud.title,
      description: t.about.highlights.cloud.desc,
      icon: Database,
      color: "text-teal-400 bg-teal-500/10 border-teal-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <span>{t.about.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.about.heading}
          </h2>
          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed italic border-l-2 border-emerald-500 pl-4 py-1">
            "{t.about.subheading}"
          </p>
        </div>

        {/* Narrative & Bio Paragraphs */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Profile Card & Bio Column */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-zinc-800/80">
              <div
                onClick={() => setIsProfileModalOpen(true)}
                className="relative shrink-0 group cursor-pointer"
                title="Click to enlarge profile photo"
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-300" />
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Hassen Abdu"
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-zinc-800 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230f172a'/><circle cx='50' cy='35' r='20' fill='%2310b981'/><path d='M20 90 Q50 60 80 90' stroke='%2310b981' stroke-width='8' fill='none'/></svg>";
                  }}
                />
                <span className="absolute bottom-1 right-1 p-1 bg-zinc-900/90 border border-zinc-700 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase">
                  Full-Stack Web Developer
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Hassen Abdu
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
                  Specializing in modern digital storefronts, CMS platforms, real-time cloud backends, and administrative operations portals.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {t.about.p2}
              </p>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {t.about.p3}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Production-Ready Systems</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Verified UX Standards</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Role-Based Security</span>
            </div>
          </div>

          <div className="lg:col-span-5 glass-card p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between bg-gradient-to-br from-zinc-900/90 to-zinc-950 space-y-6">
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                {t.about.highlightsTitle}
              </h4>
              <div className="space-y-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className={`p-2 rounded-lg shrink-0 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white">{item.title}</h5>
                        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all"
              >
                <span>{t.about.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </section>
  );
};

