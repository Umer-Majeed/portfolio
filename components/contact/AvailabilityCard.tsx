"use client";

import { motion } from "framer-motion";
import { Clock3, CheckCircle2 } from "lucide-react";

export default function AvailabilityCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-cyan-400/10
            text-cyan-400
          "
        >
          <Clock3 size={28} />
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            Availability
          </h3>

          <p className="text-gray-400">
            Current Status
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="relative flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

          <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400"></span>
        </span>

        <span className="font-semibold text-green-400">
          Available for Freelance & Collaboration
        </span>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle2
            size={18}
            className="text-cyan-400"
          />

          <span className="text-gray-300">
            AI & Machine Learning Projects
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2
            size={18}
            className="text-cyan-400"
          />

          <span className="text-gray-300">
            Full Stack Web Development
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2
            size={18}
            className="text-cyan-400"
          />

          <span className="text-gray-300">
            UI/UX & Graphic Design
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2
            size={18}
            className="text-cyan-400"
          />

          <span className="text-gray-300">
            Open Source Collaboration
          </span>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
        <p className="text-sm leading-7 text-gray-300">
          I usually reply within <span className="font-semibold text-cyan-400">24 hours</span>.
          Feel free to contact me for internships, freelance work, collaborations,
          or exciting AI projects.
        </p>
      </div>
    </motion.div>
  );
}