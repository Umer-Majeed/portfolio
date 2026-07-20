"use client";

import { motion } from "framer-motion";
import { CalendarDays, FolderOpen } from "lucide-react";

type Props = {
  title: string;
  year: string;
  category: string;
};

export default function ProjectHeader({
  title,
  year,
  category,
}: Props) {
  return (
    <div className="mb-6">

      {/* Top Row */}
      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <span
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-3
              py-1
              font-mono
              text-[11px]
              tracking-[2px]
              text-cyan-400
            "
          >
            {category}
          </span>

        </div>

        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            text-gray-400
          "
        >
          <CalendarDays size={14} />

          {year}
        </div>

      </div>

      {/* Title */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .4,
        }}
        className="
          text-3xl
          font-black
          leading-tight
          text-white
        "
      >
        {title}
      </motion.h2>

      {/* Divider */}
      <div className="mt-5 flex items-center gap-3">

        <FolderOpen
          size={16}
          className="text-cyan-400"
        />

        <div
          className="
            h-px
            flex-1
            bg-gradient-to-r
            from-cyan-400
            to-transparent
          "
        />

      </div>

    </div>
  );
}