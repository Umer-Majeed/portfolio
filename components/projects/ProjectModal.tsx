"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import ProjectGallery from "./ProjectGallery";
import ProjectButtons from "./ProjectButtons";
import TechBadge from "./TechBadge";

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>;
          {/* Background */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[100]
              max-h-[90vh]
              w-[95%]
              max-w-5xl
              -translate-x-1/2
              -translate-y-1/2
              overflow-y-auto
              rounded-3xl
              border
              border-cyan-400/20
              bg-[#07111f]
              p-8
              shadow-[0_0_60px_rgba(0,245,255,.15)]
            "
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="
                absolute
                right-6
                top-6
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/20
                text-xl
                transition
                hover:border-cyan-400
                hover:text-cyan-400
              "
            >
              ✕
            </button>

            {/* Top Info */}

            <div className="flex flex-wrap items-center gap-4">
              <span
                className="
                  rounded-full
                  bg-cyan-400
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-black
                "
              >
                {project.status}
              </span>

              <span className="text-cyan-400 font-medium">
                {project.category}
              </span>

              <span className="text-gray-500">
                {project.year}
              </span>
            </div>

            {/* Title */}

            <h2 className="mt-6 text-5xl font-black">
              {project.title}
            </h2>

            {/* Description */}

            <p className="mt-6 leading-8 text-gray-400">
              {project.longDescription}
            </p>

            {/* Gallery */}

            <div className="mt-10">
              <ProjectGallery images={project.images} />
            </div>

            {/* Technologies */}

            <div className="mt-10">
              <h3 className="mb-4 text-2xl font-bold">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <TechBadge
                    key={item}
                    name={item}
                  />
                ))}
              </div>
            </div>

            {/* Features */}

            <div className="mt-12">
              <h3 className="mb-5 text-2xl font-bold">
                Features
              </h3>

              <div className="grid gap-3 md:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-cyan-400/10
                      bg-white/5
                      p-4
                    "
                  >
                    <span className="text-cyan-400">
                      ✓
                    </span>

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-12">
              <ProjectButtons
                github={project.github}
                demo={project.demo}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}