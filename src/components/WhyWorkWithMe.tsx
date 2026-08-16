import React from "react";
import { CheckCircle2, ShieldCheck, Cpu, Layout, Code2, Database, LayoutDashboard, Sparkles, Layers } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const WhyWorkWithMe: React.FC = () => {
  const { t, language } = useLanguage();

  const reasons = [
    {
      titleEn: "Complete Full-Stack Engineering",
      descEn: "One point of contact for both visually strong interfaces and reliable cloud backends.",
      titleAm: "የተሟላ የፍሮንትኤንድ እና ባክኤንድ ልማት",
      descAm: "ለፊት-ገፅ ውበት እና ለባክኤንድ ጥንካሬ አንድ አስተማማኝ ባለሙያ።",
      icon: Layers
    },
    {
      titleEn: "Custom Tailored Solutions",
      descEn: "No rigid templates or restrictive page builders — every line of code is tailored to your business needs.",
      titleAm: "የብጁ ድር ጣቢያ ልማት",
      descAm: "ለእርስዎ ንግድ ፍላጎት ተብሎ በከፍተኛ ጥራት በኮድ የሚገነባ ብጁ ድር ጣቢያ።",
      icon: Code2
    },
    {
      titleEn: "Flawless Responsive Design",
      descEn: "Architected specifically for fluid display across mobile phones, tablets, laptops, and ultra-wide screens.",
      titleAm: "በሁሉም ስክሪኖች ላይ የሚሰራ (Responsive)",
      descAm: "በስልክ፣ በታብሌት እና በኮምፒውተር ስክሪን ላይ በጥራት እና በፍጥነት የሚሰሩ ገፆች።",
      icon: Layout
    },
    {
      titleEn: "Secure Authentication & Authorization",
      descEn: "Protected user sign-ins and custom claim-based administrative permissions.",
      titleAm: "አስተማማኝ የደህንነት ስርዓት",
      descAm: "የተጠበቀ የተጠቃሚዎች መግቢያ እና የተጠቃሚ ፍቃዶች ቁጥጥር።",
      icon: ShieldCheck
    },
    {
      titleEn: "Database-Driven Web Systems",
      descEn: "Structured Firestore collections and serverless APIs engineered for speed and data synchronization.",
      titleAm: "የተደራጀ የዳታቤዝ አሰራር",
      descAm: "ፈጣን እና ቀጥታ (Real-time) መረጃዎችን የሚያመሳስሉ የዳታቤዝ መዋቅሮች።",
      icon: Database
    },
    {
      titleEn: "Custom Admin Dashboards",
      descEn: "Empowering business owners to manage store items, articles, orders, and content effortlessly.",
      titleAm: "ቀላል የአስተዳደር ሰሌዳ (Admin Panel)",
      descAm: "ምርቶችን፣ ትዕዛዞችን እና የድር ጣቢያ ይዘቶችን በቀላሉ የመቆጣጠር እድል።",
      icon: LayoutDashboard
    },
    {
      titleEn: "Clean & Maintainable Code",
      descEn: "Structured TypeScript components following strict standards for long-term scalability.",
      titleAm: "ፅሩይ እና ለማሻሻል ቀላል ኮድ",
      descAm: "በዘመናዊ የቴክኖሎጂ ስታንዳርዶች የተጻፈ እና ወደፊት ለማደግ ዝግጁ የሆነ ኮድ።",
      icon: Cpu
    },
    {
      titleEn: "Production-Focused Delivery",
      descEn: "Thoroughly tested, search-optimized, and ready for real clients from day one.",
      titleAm: "ለደንበኞች ዝግጁ የሆነ ጥራት",
      descAm: "ተፈትኖ የተረጋገጠ፣ ለፍለጋ ሞተሮች የተዘጋጀ እና ለስራ ዝግጁ የሆነ ድር ጣቢያ።",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-24 bg-zinc-950/90 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <span>{t.whyWork.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.whyWork.heading}
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            {t.whyWork.subheading}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            const isAmharic = language === "am";
            const title = isAmharic ? r.titleAm : r.titleEn;
            const desc = isAmharic ? r.descAm : r.descEn;

            return (
              <div
                key={r.titleEn}
                className="glass-card p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAmharic ? "የተረጋገጠ ብቃት" : "Verified Capability"}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

