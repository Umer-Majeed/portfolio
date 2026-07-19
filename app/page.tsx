"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero"; // ✅ New Hero

import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Github from "@/components/sections/Github";

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
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--text)]">
      {/* Navbar */}
      <Navbar />

      {/* AI Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />

      {/* Github */}
      <Github />
      

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}