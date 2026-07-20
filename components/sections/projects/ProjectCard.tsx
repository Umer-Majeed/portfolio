"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ProjectWindow from "./ProjectWindow";
import ProjectHeader from "./ProjectHeader";
import ProjectStatus from "./ProjectStatus";

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  images: string[];
  tech: string[];
  github: string;
  demo: string;
  status: string;
};

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden"
    >
      {/* Animated Scan Line */}
      <motion.div
        animate={{
          y: ["-100%", "200%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          z-10
          h-24
          bg-gradient-to-b
          from-transparent
          via-cyan-400/10
          to-transparent
          blur-xl
        "
      />

      <ProjectWindow>
        <ProjectHeader
          title={project.title}
          year={project.year}
          category={project.category}
        />

        {/* Preview */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1200}
            height={700}
            className="
              h-56
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#08101d]
              via-transparent
              to-transparent
            "
          />
        </div>

        {/* Description */}
        <p
          className="
            mt-5
            text-sm
            leading-7
            text-gray-400
          "
        >
          {project.shortDescription}
        </p>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-3
                py-1
                text-xs
                text-cyan-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Status */}
        <ProjectStatus
          status={project.status}
          github={project.github}
          demo={project.demo}
        />
      </ProjectWindow>

      {/* Bottom Right ONLINE Badge */}
      <div
        className="
          absolute
          bottom-5
          right-5
          z-20
          rounded-full
          border
          border-green-400/20
          bg-green-400/10
          px-3
          py-1
          font-mono
          text-[10px]
          tracking-[2px]
          text-green-400
        "
      >
        ONLINE
      </div>
    </motion.div>
  );
}