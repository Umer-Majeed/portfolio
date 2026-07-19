"use client";

import { container, section } from "@/lib/layout";

import ExperienceHeader from "./experience/ExperienceHeader";
import SystemTimeline from "./experience/SystemTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className={section}
    >
      <div className={container}>
        <ExperienceHeader />

        <SystemTimeline />
      </div>
    </section>
  );
}