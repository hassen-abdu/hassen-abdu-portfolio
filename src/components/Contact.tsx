import React from "react";
import { contactConfig } from "../config/contact";
import { ContactForm } from "./ContactForm";
import { Phone, Mail, Send, MessageSquare, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Direct Info */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Phone Numbers Card */}
            <div className="glass-card p-6 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{t.contact.phoneLabel}</h3>
                  <p className="text-xs text-zinc-400">{t.contact.hoursValue}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-3">
                {contactConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-mono text-zinc-200 hover:text-white hover:border-emerald-500/50 transition-all inline-flex items-center gap-2"
                  >
                    <span>{phone}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Email Me Card */}
            <div className="glass-card p-6 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-emerald-400">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{t.contact.emailLabel}</h3>
                    <p className="text-xs text-zinc-400">{t.contact.availabilityBadge}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80">
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-mono text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/50 transition-all flex items-center justify-between"
                  id="contact-email-link"
                >
                  <span className="truncate">{contactConfig.email}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Social & Messaging Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Telegram Card */}
              <a
                href={contactConfig.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-zinc-800 hover:border-sky-500/50 transition-all group flex flex-col justify-between"
                id="contact-telegram-card"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-mono text-zinc-400">Telegram</span>
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                    {contactConfig.telegram.display}
                  </h4>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={contactConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all group flex flex-col justify-between"
                id="contact-whatsapp-card"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-mono text-zinc-400">WhatsApp</span>
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {contactConfig.whatsapp.display}
                  </h4>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={contactConfig.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all group flex flex-col justify-between"
                id="contact-linkedin-card"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-mono text-zinc-400">LinkedIn</span>
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    {contactConfig.linkedin.display}
                  </h4>
                </div>
              </a>

              {/* GitHub Card */}
              {contactConfig.github.url ? (
                <a
                  href={contactConfig.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 rounded-2xl border border-zinc-800 hover:border-zinc-500 transition-all group flex flex-col justify-between"
                  id="contact-github-card"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-mono text-zinc-400">GitHub</span>
                    <h4 className="font-display text-sm font-bold text-white">
                      {contactConfig.github.display}
                    </h4>
                  </div>
                </a>
              ) : (
                <div className="glass-card p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between opacity-80">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-400 flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Configurable
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-mono text-zinc-400">GitHub Profile</span>
                    <h4 className="font-display text-sm font-bold text-zinc-300">
                    
                    </h4>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

