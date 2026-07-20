"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GithubContribution() {
  return (
    <motion.section
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
    >
      <h3 className="mb-8 text-3xl font-black">
        Contribution Activity
      </h3>

      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
        "
      >
        <Image
          src="https://github-readme-activity-graph.vercel.app/graph?username=Umer-Majeed&theme=github-dark&hide_border=true&bg_color=050816&color=22d3ee&line=22d3ee&point=ffffff"
          alt="GitHub Contribution Graph"
          width={1200}
          height={500}
          className="w-full rounded-xl"
        />
      </div>
    </motion.section>
  );
}