"use client";

import { motion } from "framer-motion";

export default function GithubHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mb-20"
    >
      <p className="font-mono text-sm tracking-[6px] text-cyan-400">
        AI DASHBOARD
      </p>

      <h2 className="mt-5 text-5xl font-black text-white">
        GitHub
        <br />
        Analytics
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#BDBDBD]">
        Real development activity visualized through the Umer.OS
        monitoring system.
      </p>
    </motion.div>
  );
}