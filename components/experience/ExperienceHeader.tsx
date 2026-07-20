"use client";

import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
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
        CAREER TIMELINE
      </span>

      <h2 className="mt-6 text-5xl font-black md:text-7xl">
        Experience
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        My journey from Computer Science student
        to Artificial Intelligence & Full Stack Developer.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-[2px] w-24 bg-cyan-400" />

        <span className="font-mono text-xs tracking-[3px] text-cyan-400">
          AI JOURNEY
        </span>
      </div>
    </motion.div>
  );
}