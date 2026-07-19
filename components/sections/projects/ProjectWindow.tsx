"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  stack: string[];
};

export default function ProjectWindow({
  title,
  description,
  stack,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: .95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#404040]/90
        backdrop-blur-2xl
        overflow-hidden
      "
    >
      {/* Window Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-4
        "
      >
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="font-mono text-xs tracking-[3px] text-[#BDBDBD]">
          MISSION FILE
        </span>
      </div>

      {/* Content */}

      <div className="space-y-8 p-8">
        <div>
          <p className="font-mono text-xs tracking-[4px] text-cyan-400">
            PROJECT
          </p>

          <h2 className="mt-2 text-4xl font-black text-white">
            {title}
          </h2>
        </div>

        <p className="leading-8 text-[#BDBDBD]">
          {description}
        </p>

        <div>
          <p className="mb-4 font-mono text-xs tracking-[4px] text-cyan-400">
            TECH STACK
          </p>

          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-4
                  py-2
                  text-sm
                  text-white
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            className="
              rounded-xl
              bg-cyan-400
              px-5
              py-3
              font-semibold
              text-black
            "
          >
            Live Demo
          </button>

          <button
            className="
              rounded-xl
              border
              border-white/10
              px-5
              py-3
              text-white
            "
          >
            GitHub
          </button>
        </div>
      </div>
    </motion.div>
  );
}