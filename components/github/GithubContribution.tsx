"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
export default function GithubContribution() {
  // Custom cyan color theme to match your UI
  const cyanTheme = {
    dark: [
      "#0e1726", // 0 contributions (empty box background)
      "#083344", // Level 1
      "#155e75", // Level 2
      "#0891b2", // Level 3
      "#22d3ee", // Level 4 (highest)
    ],
  };

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
          flex
          justify-center
          overflow-x-auto
          rounded-3xl
          border
          border-cyan-400/20
          bg-[#08101d]
          p-8
        "
      >
        <GitHubCalendar
          username="Umer-Majeed"
          colorScheme="dark"
          theme={cyanTheme}
          blockSize={14}
          blockMargin={5}
          fontSize={14}
        />
      </div>
    </motion.section>
  );
}