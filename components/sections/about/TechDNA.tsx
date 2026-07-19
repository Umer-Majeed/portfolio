"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TailwindCSS",
  "Framer Motion",
  "GSAP",
  "Three.js",
  "OpenAI",
];

export default function TechDNA() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .6,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
      "
    >
      <h3
        className="
          mb-6
          font-mono
          text-sm
          tracking-[4px]
          text-cyan-400
        "
      >
        TECH DNA
      </h3>

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-4
              py-2
              text-sm
              text-white
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-400/10
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}