"use client";

import { motion } from "framer-motion";

interface ProjectButtonsProps {
  github: string;
  demo: string;
}

export default function ProjectButtons({
  github,
  demo,
}: ProjectButtonsProps) {
  return (
    <div className="flex flex-wrap gap-5">
      {/* GitHub */}

      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.97,
        }}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          rounded-2xl
          bg-cyan-400
          px-8
          py-4
          font-semibold
          text-black
          transition-all
          duration-300
          hover:shadow-[0_0_35px_rgba(0,245,255,.35)]
        "
      >
        💻 GitHub
      </motion.a>

      {/* Live Demo */}

      {demo ? (
        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-400
            px-8
            py-4
            font-semibold
            text-cyan-400
            transition-all
            duration-300
            hover:bg-cyan-400
            hover:text-black
          "
        >
          🚀 Live Demo
        </motion.a>
      ) : (
        <button
          disabled
          className="
            rounded-2xl
            border
            border-gray-700
            px-8
            py-4
            font-semibold
            text-gray-500
            cursor-not-allowed
          "
        >
          🚧 Coming Soon
        </button>
      )}
    </div>
  );
}