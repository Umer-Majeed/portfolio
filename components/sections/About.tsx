"use client";

import { container, section } from "@/lib/layout";
import SectionBackground from "@/components/ui/SectionBackground";

import SystemHeader from "./about/SystemHeader";
import ProfileCard from "./about/ProfileCard";
import InfoGrid from "./about/InfoGrid";
import TechDNA from "./about/TechDNA";

export default function About() {
  return (
    <section
      id="about"
      className={`${section} relative overflow-hidden bg-[#050816]`}
    >
      <SectionBackground />

      <div className="relative z-10">
        <div className={container}>
          <SystemHeader />

          <div className="grid gap-8 lg:grid-cols-2">
            <ProfileCard />

            <div className="space-y-8">
              <InfoGrid />

              <TechDNA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}