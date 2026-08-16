import React from "react";
import { contactConfig } from "../config/contact";
import { Code2, ArrowUpRight, Phone, Mail, Send, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {contactConfig.name}
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="pt-2 text-xs font-mono text-zinc-400">
              <span>{contactConfig.location}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">{t.nav.hireMe}</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#tech" className="hover:text-emerald-400 transition-colors">{t.nav.tech}</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">{t.nav.projects}</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">{t.nav.process}</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact Direct Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>0985001827 / 0922873878</span>
              </div>
              <a
                href={`mailto:${contactConfig.email}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{contactConfig.email}</span>
              </a>
              <a
                href={contactConfig.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-sky-400 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram {contactConfig.telegram.display}</span>
              </a>
              <a
                href={contactConfig.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn {contactConfig.linkedin.display}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>{t.footer.copyright}</p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>

      </div>
    </footer>
  );
};

