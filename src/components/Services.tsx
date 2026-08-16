import React from "react";
import { servicesData } from "../data/services";
import { Globe, ShoppingBag, Code2, LayoutDashboard, Database, ShieldCheck, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const amharicServices: Record<string, { title: string; desc: string; deliverables: string[] }> = {
    "web-apps": {
      title: "ሙሉ ዌብ አፕሊኬሽኖች (Full-Stack Web Apps)",
      desc: "ሁሉንም የዌብ ሲስተም አካላት (የፊት-ገፅ፣ ባክኤንድ፣ ዳታቤዝ እና የአስተዳደር ሰሌዳ) ያካተቱ ሙሉ ዌብ አፕሊኬሽኖችን መገንባት።",
      deliverables: ["ብጁ ፍሮንትኤንድ እና ባክኤንድ", "የዳታቤዝ መዋቅር እና ኤፒአይ", "ደህንነቱ የተጠበቀ የመግቢያ እና ፍቃድ ስርዓት"]
    },
    "custom-websites": {
      title: "ዘመናዊ ድር ጣቢያዎች (Custom Websites)",
      desc: "ለንግድዎ፣ ድርጅትዎ ወይም ግል አገልግሎቶችዎ ፈጣን፣ ውብ እና በሁሉም ስክሪኖች ላይ በሚገባ የሚሰሩ ዘመናዊ ድር ጣቢያዎች።",
      deliverables: ["ምላሽ ሰጪ (Responsive) ዲዛይን", "ፈጣን የመጫን ፍጥነት", "የፍለጋ ሞተር ማሻሻያ (SEO Ready)"]
    },
    "dashboards": {
      title: "የአስተዳደር ሰሌዳዎች (Admin Dashboards)",
      desc: "የድር ጣቢያዎን ምርቶች፣ ትዕዛዞች፣ ይዘቶች እና ተጠቃሚዎች በቀላሉ የሚያስተዳድሩበት ብጁ የአስተዳደር ፓነሎች።",
      deliverables: ["የምርት እና ይዘት መቆጣጠሪያ", "የተጠቃሚዎች ፍቃድ እና ሚናዎች", "የመረጃ እና ስታቲስቲክስ ማጠቃለያ"]
    },
    "backend-api": {
      title: "ባክኤንድ እና ዳታቤዝ (Backend & Database)",
      desc: "በፋየርቤዝ (Firebase Cloud) ላይ የተገነቡ ፈጣን፣ አስተማማኝ እና ደህንነታቸው የተጠበቀ የዳታቤዝ እና ኤፒአይ ሲስተሞች።",
      deliverables: ["የ Firestore ዳታቤዝ መዋቅር", "የደህንነት ህጎች (Security Rules)", "ቀጥታ የዳታ ማመሳሰል (Real-time Sync)"]
    },
    "multilingual": {
      title: "ሁለት ቋንቋ ድር ጣቢያዎች (Bilingual Websites)",
      desc: "በእንግሊዝኛ እና በአማርኛ (ወይም በሌሎች ቋንቋዎች) በተሟላ ሁኔታ የሚሰሩ ድር ጣቢያዎችን ማዘጋጀት።",
      deliverables: ["ለስላሳ የቋንቋ መቀየሪያ (EN | አማ)", "የአማርኛ ፊደላት ተስማሚ ስታይል", "የተሟላ የጽሁፍ ትርጉም"]
    },
    "maintenance": {
      title: "ጥገና እና ማሻሻያ (Maintenance & Optimization)",
      desc: "ነባር ድር ጣቢያዎችን ማደስ፣ ፍጥነታቸውን መጨመር፣ ደህንነታቸውን ማጠናከር እና አዳዲስ ባህሪያትን መጨመር።",
      deliverables: ["የፍጥነት እና አፈፃፀም ማሻሻል", "የኮድ እና ሴኪዩሪቲ ኦዲት", "የአዳዲስ ገፅታዎች ትግበራ"]
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe": return Globe;
      case "ShoppingBag": return ShoppingBag;
      case "Code2": return Code2;
      case "LayoutDashboard": return LayoutDashboard;
      case "Database": return Database;
      case "ShieldCheck": return ShieldCheck;
      case "Wrench": return Wrench;
      default: return Code2;
    }
  };

  return (
    <section id="services" className="py-24 bg-zinc-950/90 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <span>{t.services.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.services.heading}
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isAmharic = language === "am";
            const amData = amharicServices[service.id];

            const title = isAmharic && amData ? amData.title : service.title;
            const desc = isAmharic && amData ? amData.desc : service.shortDesc;
            const deliverables = isAmharic && amData ? amData.deliverables : service.deliverables;

            return (
              <div
                key={service.id}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-zinc-400 font-semibold bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {desc}
                  </p>

                  <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      {isAmharic ? "ዋና ዋና አገልግሎቶች:" : "Key Deliverables:"}
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    <span>{language === "am" ? "የፕሮጀክት ጥያቄ ይላኩ" : "Request This Service"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

