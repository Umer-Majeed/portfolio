"use client";

import { motion } from "framer-motion";

export default function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-mono text-xs tracking-[6px] text-cyan-400">
        UMER MAJEED
      </p>

      <h2 className="mt-5 text-5xl font-black leading-none">
        AI
        <br />
        Engineer
      </h2>

      <p className="mt-8 max-w-sm leading-8 text-gray-400">
        Passionate about Artificial Intelligence, Full Stack
        Development and crafting modern digital experiences with
        clean architecture and beautiful interfaces.
      </p>
    </motion.div>
  );
}