"use client";

import ExperienceHeader from "@/components/experience/ExperienceHeader";
import ExperienceStats from "@/components/experience/ExperienceStats";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import SectionBackground from "@/components/ui/SectionBackground";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        px-6
        py-24
      "
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ExperienceHeader />

        <ExperienceStats />

        <ExperienceTimeline />

    
      </div>
    </section>
  );
}