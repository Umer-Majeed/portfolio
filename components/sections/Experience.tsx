"use client";

import ExperienceHeader from "@/components/experience/ExperienceHeader";
import ExperienceStats from "@/components/experience/ExperienceStats";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ExperienceTerminal from "@/components/experience/ExperienceTerminal";
import ExperienceBackground from "@/components/experience/ExperienceBackground";

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
      <ExperienceBackground />

      <div className="relative mx-auto max-w-7xl">

        <ExperienceHeader />

        <ExperienceStats />

        <ExperienceTimeline />

        <ExperienceTerminal />

      </div>
    </section>
  );
}