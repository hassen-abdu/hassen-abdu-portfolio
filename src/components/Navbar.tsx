import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Code2, Globe } from "lucide-react";
import { contactConfig } from "../config/contact";
import { useLanguage } from "../context/LanguageContext";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "tech", "projects", "services", "process", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: "#about", id: "about" },
    { name: t.nav.tech, href: "#tech", id: "tech" },
    { name: t.nav.projects, href: "#projects", id: "projects" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.process, href: "#process", id: "process" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="relative flex items-center w-full min-w-0">
          {/* Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 pr-28 min-w-0"
            id="nav-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-zinc-800/80 transition-all shadow-inner">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-lg tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                {contactConfig.name}
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider font-mono uppercase">
                Full-Stack Systems
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-zinc-800 text-emerald-400 font-semibold shadow-sm border border-zinc-700/50"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Premium Language Switcher */}
            <div className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-lg p-1 text-xs font-medium shadow-inner">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded transition-all duration-200 ${
                  language === "en"
                    ? "bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
                aria-label="Switch to English"
                title="English"
              >
                EN
              </button>
              <span className="text-zinc-700 px-0.5 select-none">|</span>
              <button
                onClick={() => setLanguage("am")}
                className={`px-2.5 py-1 rounded transition-all duration-200 ${
                  language === "am"
                    ? "bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
                aria-label="Switch to Amharic"
                title="አማርኛ"
              >
                አማ
              </button>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs tracking-wide transition-all shadow-md shadow-emerald-950/20 active:scale-95"
              id="nav-cta-desktop"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
            {/* Mobile Actions: Language + Menu Toggle */}
<div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 md:hidden z-10">
  {/* Mobile Language Toggle */}
  <div className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-lg p-0.5 text-xs font-medium shrink-0">
    <button
      onClick={() => setLanguage("en")}
      className={`px-2 py-1 rounded transition-all ${
        language === "en"
          ? "bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30"
          : "text-zinc-400"
      }`}
    >
      EN
    </button>

    <button
      onClick={() => setLanguage("am")}
      className={`px-2 py-1 rounded transition-all ${
        language === "am"
          ? "bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30"
          : "text-zinc-400"
      }`}
    >
      አማ
    </button>
  </div>

  {/* Mobile Hamburger */}
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 shrink-0"
    aria-label="Toggle mobile menu"
    id="nav-mobile-toggle"
  >
    {mobileMenuOpen ? (
      <X className="w-5 h-5" />
    ) : (
      <Menu className="w-5 h-5" />
    )}
  </button>
</div>
         
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-2 transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2">
            <div className="flex items-center justify-between bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>{t.nav.language}:</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded text-xs ${
                    language === "en"
                      ? "bg-emerald-500 text-zinc-950 font-bold"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("am")}
                  className={`px-3 py-1 rounded text-xs ${
                    language === "am"
                      ? "bg-emerald-500 text-zinc-950 font-bold"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  አማርኛ
                </button>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

