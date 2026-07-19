"use client";

import { motion } from "framer-motion";

const items = [
  {
    label: "CPU",
    top: "50%",
    left: "-90px",
  },
  {
    label: "NETWORK",
    top: "-60px",
    left: "50%",
  },
  {
    label: "MEMORY",
    top: "50%",
    right: "-110px",
  },
  {
    label: "PROJECTS",
    bottom: "-60px",
    left: "50%",
  },
];

export default function HeroHUD() {
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: index * 0.3,
            repeat: Infinity,
          }}
          className="
            absolute
            text-[11px]
            font-mono
            tracking-[4px]
            text-cyan-300
          "
          style={item}
        >
          {item.label}
        </motion.div>
      ))}
    </>
  );
}