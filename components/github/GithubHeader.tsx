"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function GithubHeader() {
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
      viewport={{
        once: true,
      }}
      transition={{
        duration: .7,
      }}
      className="mb-20"
    >
      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/10
          px-5
          py-2
          font-mono
          text-xs
          tracking-[4px]
          text-cyan-400
        "
      >
        <FaGithub />

        OPEN SOURCE
      </span>

      <h2 className="mt-8 text-5xl font-black md:text-7xl">
        GitHub
      </h2>

      <p
        className="
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-gray-400
        "
      >
        Explore my open-source work,
        repositories,
        coding activity,
        latest projects,
        and technologies I'm building with.
      </p>

      <div className="mt-8 flex items-center gap-4">

        <div className="h-[2px] w-24 bg-cyan-400"/>

        <span
          className="
            font-mono
            text-xs
            tracking-[4px]
            text-cyan-400
          "
        >
          LIVE API
        </span>

      </div>

    </motion.div>
  );
}