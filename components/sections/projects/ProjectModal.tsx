"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

type Project = {
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
};

type Props = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-xl
            p-6
          "
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-3xl
              border
              border-cyan-400/20
              bg-[#08101d]
            "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute
                right-5
                top-5
                z-20
                rounded-full
                bg-white/10
                p-2
                hover:bg-cyan-400/20
              "
            >
              <X size={20} />
            </button>

            {/* Image Slider Container */}
            <div className="relative">
              <Image
                src={project.images[currentImage]}
                alt={project.title}
                width={1200}
                height={700}
                className="h-80 w-full object-cover"
              />

              {/* Navigation Buttons (Only show if more than 1 image) */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImage((prev) =>
                        prev === 0 ? project.images.length - 1 : prev - 1
                      )
                    }
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-black/40
                      p-3
                      backdrop-blur
                      hover:bg-black/60
                      transition-all
                    "
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImage((prev) =>
                        prev === project.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="
                      absolute
                      right-5
                      top-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-black/40
                      p-3
                      backdrop-blur
                      hover:bg-black/60
                      transition-all
                    "
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Dots Indicator */}
            {project.images.length > 1 && (
              <div className="mt-5 flex justify-center gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`
                      h-2
                      rounded-full
                      transition-all
                      ${
                        currentImage === index
                          ? "w-10 bg-cyan-400"
                          : "w-2 bg-white/20"
                      }
                    `}
                  />
                ))}
              </div>
            )}

            <div className="p-8">
              <p className="font-mono text-xs tracking-[3px] text-cyan-400">
                {project.category}
              </p>

              <h2 className="mt-2 text-4xl font-black">
                {project.title}
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                {project.longDescription}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">
                  Features
                </h3>

                <div className="grid gap-3 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-4
                      "
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech */}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      px-4
                      py-2
                      text-sm
                      text-cyan-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-400/20
                    px-6
                    py-3
                    hover:bg-cyan-400/10
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-cyan-400
                      px-6
                      py-3
                      text-black
                      font-semibold
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}