"use client";

import { motion } from "framer-motion";

const stats = [
  ["Repositories", "32"],
  ["Commits", "1250+"],
  ["Pull Requests", "85"],
  ["Followers", "150+"],
];

export default function GithubStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {stats.map(([title, value], index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * .1 }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-8
            backdrop-blur-xl
          "
        >
          <p className="font-mono text-xs tracking-[4px] text-[#BDBDBD]">
            {title}
          </p>

          <h3 className="mt-4 text-5xl font-black text-cyan-400">
            {value}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}