import React, { useState } from "react";
import { techStackData } from "../data/tech";
import { Atom, FileCode2, Binary, Layout, Palette, Sparkles, Flame, Database, KeyRound, FolderGit2, Cpu, Zap, GitBranch, Github, Terminal, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Technologies: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryMap: Record<string, { en: string; am: string }> = {
    All: { en: "All", am: "ሁሉም" },
    Frontend: { en: "Frontend Architecture", am: "የፊት-ገፅ" },
    "Backend / Cloud": { en: "Backend & Cloud", am: "ባክኤንድ እና ደመና" },
    "Development Tools": { en: "DevOps & Tools", am: "የልማት መሳሪያዎች" },
  };

  const categories = ["All", "Frontend", "Backend / Cloud", "Development Tools"];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Atom": return Atom;
      case "FileCode2": return FileCode2;
      case "Binary": return Binary;
      case "Layout": return Layout;
      case "Palette": return Palette;
      case "Sparkles": return Sparkles;
      case "Flame": return Flame;
      case "Database": return Database;
      case "KeyRound": return KeyRound;
      case "FolderGit2": return FolderGit2;
      case "Cpu": return Cpu;
      case "Zap": return Zap;
      case "GitBranch": return GitBranch;
      case "Github": return Github;
      case "Terminal": return Terminal;
      default: return CodeIcon;
    }
  };

  const CodeIcon = ({ className }: { className?: string }) => (
    <span className={className}>&lt;/&gt;</span>
  );

  const filteredTech = selectedCategory === "All"
    ? techStackData
    : techStackData.filter(item => item.category === selectedCategory);

  return (
    <section id="tech" className="py-24 bg-zinc-950/90 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>{t.tech.badge}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.tech.heading}
            </h2>
            <p className="text-zinc-400 text-base">
              {t.tech.subheading}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-zinc-900/90 p-1.5 rounded-xl border border-zinc-800">
            {categories.map((cat) => {
              const label = categoryMap[cat]?.[language] || cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-950/30 font-bold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.name}
                className="glass-card p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider bg-zinc-900/80 px-2.5 py-1 rounded-full border border-zinc-800">
                      {categoryMap[item.category]?.[language] || item.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between font-mono text-[11px] text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Production Verified
                  </span>
                  <span className="text-zinc-300">Active Stack</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

