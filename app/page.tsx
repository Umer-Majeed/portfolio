"use client";

import { useState } from "react";

import Navbarn from "@/components/navigation/Navbarn";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Github from "@/components/sections/Github";
import GithubCalendar from "@/components/sections/GithubCalendar";
import BootScreen from "@/components/ui/BootScreen";

export default function Home() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  if (!loadingFinished) {
    return (
      <BootScreen
        onComplete={() => setLoadingFinished(true)}
      />
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      {/* Premium AI Navbar */}
      <Navbarn />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />

<Github />
<GithubCalendar />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}