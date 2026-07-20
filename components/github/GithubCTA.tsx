"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function GithubCTA() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="
        rounded-3xl
        border
        border-cyan-400/20
        bg-cyan-400/5
        p-12
        text-center
      "
    >
      <h2 className="text-4xl font-black">
        Explore My Open Source Work
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-gray-400">
        Browse all repositories, contributions,
        AI experiments, full-stack applications,
        and ongoing projects on GitHub.
      </p>

      <a
        href="https://github.com/Umer-Majeed"
        target="_blank"
        rel="noreferrer"
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-cyan-400
          px-8
          py-4
          font-semibold
          text-black
        "
      >
        Visit GitHub

        <ArrowUpRight size={20} />
      </a>
    </motion.div>
  );
}