"use client";

import { motion } from "framer-motion";

import SkillTimeline from "@/components/sections/skills/SkillTimeline";
import SkillRadar from "@/components/sections/skills/SkillRadar";
import SectionBackground from "@/components/ui/SectionBackground";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816]"
    >
      <SectionBackground />

      <div className="relative z-10">

        {/* Sticky Container */}
        <div className="sticky top-0 flex h-screen items-center">

          <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-20 px-6">

            {/* LEFT */}
            <div>

              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-4
                  py-2
                  font-mono
                  text-xs
                  tracking-[4px]
                  text-cyan-400
                "
              >
                AI SKILL MATRIX
              </motion.span>

              <h2 className="mt-8 text-6xl font-black md:text-7xl">
                Skills
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
                Technologies, frameworks and tools used to build AI systems,
                full-stack applications and premium user experiences.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              <SkillRadar />
            </div>

          </div>

        </div>

        {/* Scroll Animation */}
        <SkillTimeline />

      </div>
    </section>
  );
}