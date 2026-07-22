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
            {/* Step 2 — Animated Background Glow */}
            <div
              className="
                absolute
                -left-40
                top-20
                h-96
                w-96
                rounded-full
                bg-cyan-400/10
                blur-[130px]
              "
            />
            <div
              className="
                absolute
                -right-40
                bottom-0
                h-80
                w-80
                rounded-full
                bg-blue-500/10
                blur-[120px]
              "
            />

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
              {/* Step 6 — Animate Image Change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={project.images[currentImage]}
                    alt={project.title}
                    width={1200}
                    height={700}
                    className="h-80 w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

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

            {/* Step 5 — Thumbnail Gallery */}
            {project.images.length > 1 && (
              <div className="mt-5 flex justify-center gap-3 px-6 pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`
                      overflow-hidden
                      rounded-xl
                      border-2
                      transition-all
                      duration-300
                      ${
                        currentImage === index
                          ? "border-cyan-400 scale-105"
                          : "border-white/10 opacity-70 hover:opacity-100"
                      }
                    `}
                  >
                    <Image
                      src={image}
                      alt=""
                      width={90}
                      height={60}
                      className="h-16 w-24 object-cover"
                    />
                  </button>
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

              {/* Step 1 — Status Badges */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span
                  className="
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    px-4
                    py-1
                    text-xs
                    font-mono
                    tracking-[3px]
                    text-cyan-300
                  "
                >
                  {project.category}
                </span>

                <span
                  className="
                    rounded-full
                    border
                    px-4
                    py-1
                    text-xs
                    font-mono
                    tracking-[3px]
                    border-green-400/20
                    bg-green-400/10
                    text-green-400
                  "
                >
                  {project.status}
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-1
                    text-xs
                    font-mono
                    tracking-[3px]
                    text-gray-300
                  "
                >
                  {project.year}
                </span>
              </div>

              <p className="mt-6 leading-8 text-gray-400">
                {project.longDescription}
              </p>

              {/* Features */}
              <div className="mt-8">
                {/* Step 4 — Features Header */}
                <h3
                  className="
                    mb-5
                    font-mono
                    text-sm
                    tracking-[4px]
                    text-cyan-400
                  "
                >
                  FEATURES
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

              {/* Step 3 — Tech Section Header & Tech Stack */}
              <h3
                className="
                  mb-4
                  mt-10
                  font-mono
                  text-sm
                  tracking-[4px]
                  text-cyan-400
                "
              >
                TECH STACK
              </h3>

              <div className="flex flex-wrap gap-3">
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

              {/* Step 7 — Premium Hover Buttons */}
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
                    hover:border-cyan-400
                    hover:scale-105
                    transition-all
                    duration-300
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
                      hover:scale-105
                      hover:shadow-[0_0_25px_rgba(0,255,255,.45)]
                      transition-all
                      duration-300
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Project Terminal */}
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}