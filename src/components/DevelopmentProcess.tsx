import React from "react";
import { processStepsData } from "../data/process";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const DevelopmentProcess: React.FC = () => {
  const { t, language } = useLanguage();

  const amharicProcessSteps: Record<string, { title: string; desc: string; deliverable: string }> = {
    "01": {
      title: "1. ውይይት እና መስፈርት ማሰባሰብ (Discovery)",
      desc: "የፕሮጀክትዎን አላማ፣ የንግድ ግቦች እና የሚያስፈልጉ ተግባራትን በጥልቀት መረዳትና ማቀድ።",
      deliverable: "የተረጋገጠ የፕሮጀክት ዝርዝር መግለጫ"
    },
    "02": {
      title: "2. አርክቴክቸር እና ዲዛይን (Architecture)",
      desc: "የድር ጣቢያውን መዋቅር፣ የፊት-ገፅ ስታይል፣ የዳታቤዝ ስኪማ እና የደህንነት ሞዴል መንደፍ።",
      deliverable: "የስርዓት አርክቴክቸር እና ዲዛይን ፕሮቶታይፕ"
    },
    "03": {
      title: "3. የፊት-ገፅ ልማት (Frontend Development)",
      desc: "በ React፣ TypeScript እና Tailwind CSS አማካኝነት ፈጣንና ምላሽ ሰጪ የፊት-ገፅ ገጾችን መገንባት።",
      deliverable: "ሙሉ በሙሉ ምላሽ ሰጪ የፊት-ገፅ በይነገጽ"
    },
    "04": {
      title: "4. ባክኤንድ እና ዳታቤዝ (Backend & Database)",
      desc: "በ Firebase Firestore፣ Auth እና Security Rules አማካኝነት ደህንነቱ የተጠበቀ ባክኤንድ ማዋቀር።",
      deliverable: "የነቃ የዳታቤዝ እና የደህንነት ህጎች"
    },
    "05": {
      title: "5. የጥራት ምርመራ እና ሙከራ (Testing)",
      desc: "የፍጥነት፣ የስክሪን ተስማሚነት፣ የደህንነት እና የዳታ ትክክለኛነት ሙከራዎችን ማካሄድ።",
      deliverable: "የተረጋገጠ የጥራት እና ሴኪዩሪቲ ሪፖርት"
    },
    "06": {
      title: "6. ማስመርቅ እና ቀጣይ ድጋፍ (Deployment)",
      desc: "ድር ጣቢያውን በቀጥታ ሰርቨር ላይ ማስተላለፍ፣ ዶሜይን ማያያዝ እና ቀጣይነት ያለው ቴክኒካል ድጋፍ መስጠት።",
      deliverable: "በቀጥታ የሚሰራ ድር ጣቢያ እና መመሪያ"
    }
  };

  return (
    <section id="process" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <span>{t.process.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.process.heading}
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            {t.process.subheading}
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processStepsData.map((step) => {
            const isAmharic = language === "am";
            const amData = amharicProcessSteps[step.step];

            const title = isAmharic && amData ? amData.title : step.title;
            const desc = isAmharic && amData ? amData.desc : step.description;
            const deliverable = isAmharic && amData ? amData.deliverable : step.deliverable;

            return (
              <div
                key={step.step}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                    {isAmharic ? "ውጤት (Deliverable):" : "Deliverable:"}
                  </span>
                  <p className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{deliverable}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

