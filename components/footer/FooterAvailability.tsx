"use client";

import { motion } from "framer-motion";
import { Clock3, Sparkles } from "lucide-react";

export default function FooterAvailability() {
  return (
    
    <motion.div
    
    
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        mt-10
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:bg-cyan-400/[0.05]
        hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
      "
      
    >
        <h3 className="mb-8 text-2xl font-bold">
        ---------------------------------
      </h3>
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
        </span>

        <h4 className="font-semibold text-white">
          Available for Work
        </h4>
      </div>

      <p className="mt-4 leading-7 text-gray-400">
        Currently available for freelance projects, AI solutions,
        Full Stack Development and exciting collaborations.
      </p>

      <div className="mt-6 space-y-3 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Clock3 size={16} className="text-cyan-400" />
          <span>Response Time: &lt; 24 Hours</span>
        </div>

        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-cyan-400" />
          <span>Open to Remote & On-site Projects</span>
        </div>
      </div>
    </motion.div>
  );
}