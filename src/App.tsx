import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { DevelopmentProcess } from "./components/DevelopmentProcess";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Services />
          <DevelopmentProcess />
          <WhyWorkWithMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
