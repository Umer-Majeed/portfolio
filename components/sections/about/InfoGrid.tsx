"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "PROJECTS",
    value: "18+",
  },
  {
    title: "TECH STACK",
    value: "20+",
  },
  {
    title: "YEARS",
    value: "03+",
  },
  {
    title: "COMMITS",
    value: "1200+",
  },
];

export default function InfoGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * .1,
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
          <p className="font-mono text-xs tracking-[4px] text-[#BDBDBD]">
            {card.title}
          </p>

          <h3 className="mt-4 text-5xl font-black text-cyan-400">
            {card.value}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}