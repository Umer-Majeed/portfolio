"use client";

import { motion } from "framer-motion";

import SkillGrid from "@/components/sections/skills/SkillGrid";
import SkillRadar from "@/components/sections/skills/SkillRadar";
import SkillTerminal from "@/components/sections/skills/SkillTerminal";
import FloatingIcons from "@/components/sections/skills/FloatingIcons";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      <FloatingIcons />

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span
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
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">
            Skills
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-gray-400">
            Technologies, frameworks and tools used to build
            AI systems, full-stack applications and premium user experiences.
          </p>
        </motion.div>

        <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
          <SkillGrid />
          <SkillRadar />
        </div>

        <SkillTerminal />

      </div>
    </section>
  );
}