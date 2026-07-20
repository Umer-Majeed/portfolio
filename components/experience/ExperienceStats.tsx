"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "3+",
    label: "Years Learning",
  },
  {
    value: "30+",
    label: "Projects",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "AI",
    label: "Engineer",
  },
];

export default function ExperienceStats() {
  return (
    <div className="grid gap-6 md:grid-cols-4">

      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -8,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-8
            text-center
            backdrop-blur-xl
          "
        >
          <h3 className="text-4xl font-black text-cyan-400">
            {item.value}
          </h3>

          <p className="mt-3 text-gray-400">
            {item.label}
          </p>

        </motion.div>
      ))}

    </div>
  );
}