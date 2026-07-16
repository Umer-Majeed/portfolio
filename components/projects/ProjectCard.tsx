"use client";

import { motion } from "framer-motion";
interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  features: string[];
  tech: string[];
  github: string;
  demo: string;
  status: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={onClick}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/5
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-[0_0_40px_rgba(0,245,255,.25)]
      "
    >
      {/* Top */}

      <div className="flex items-center justify-between">
        <span
          className="
            rounded-full
            bg-cyan-400
            px-4
            py-1
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-black
          "
        >
          {project.status}
        </span>

        <span
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.25em]
            text-gray-500
          "
        >
          {project.year}
        </span>
      </div>

      {/* Title */}

      <h3
        className="
          mt-6
          text-3xl
          font-black
          text-white
          transition-colors
          duration-300
          group-hover:text-cyan-400
        "
      >
        {project.title}
      </h3>

      {/* Category */}

      <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
        {project.category}
      </p>

      {/* Description */}

      <p
        className="
          mt-5
          line-clamp-4
          leading-8
          text-gray-400
        "
      >
        {project.shortDescription}
      </p>

      {/* Technologies */}

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-3
              py-1.5
              text-sm
              text-cyan-300
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom */}

      <div className="mt-10 flex items-center justify-between">
        <span
          className="
            text-sm
            uppercase
            tracking-[0.25em]
            text-gray-500
          "
        >
          View Details
        </span>

        <motion.div
          whileHover={{
            x: 6,
          }}
          className="
            text-2xl
            font-bold
            text-cyan-400
          "
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
}