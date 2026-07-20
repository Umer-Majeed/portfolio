"use client";

import { motion } from "framer-motion";

type Props = {
  item: {
    year: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
  };
};

export default function ExperienceCard({
  item,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
      "
    >
      <span className="font-mono text-xs tracking-[3px] text-cyan-400">
        {item.year}
      </span>

      <h3 className="mt-3 text-2xl font-bold">
        {item.title}
      </h3>

      <p className="mt-2 text-cyan-300">
        {item.company}
      </p>

      <p className="mt-5 leading-8 text-gray-400">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-3
              py-2
              text-xs
              text-cyan-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}