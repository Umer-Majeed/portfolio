"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mb-20"
    >
      <p
        className="
          font-mono
          text-sm
          tracking-[6px]
          text-cyan-400
        "
      >
        MISSION ARCHIVE
      </p>

      <h2
        className="
          mt-5
          text-5xl
          font-black
          text-white
        "
      >
        Selected
        <br />
        Missions.
      </h2>

      <p
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-[#BDBDBD]
        "
      >
        Every project represents a solved problem,
        not just another UI.
      </p>
    </motion.div>
  );
}