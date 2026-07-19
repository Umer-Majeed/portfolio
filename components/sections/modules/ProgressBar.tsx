"use client";

import { motion } from "framer-motion";

export default function ProgressBar() {
  return (
    <div className="mt-8">
      <div className="mb-3 flex justify-between text-xs font-mono tracking-[3px] text-[#BDBDBD]">
        <span>INSTALLING MODULES</span>
        <span>100%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-cyan-400"
        />
      </div>
    </div>
  );
}