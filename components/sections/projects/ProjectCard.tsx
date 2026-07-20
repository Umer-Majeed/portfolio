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

export default function ProjectCard({
  project,
  onClick,
}: Props) {
  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer"
    >
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
    </motion.div>
  );
}