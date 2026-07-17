"use client";

import { motion } from "framer-motion";
import TechCard from "@/components/ui/TechCard";
import { skills } from "@/data/skills";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
} from "react-icons/si";

import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaBrain,
  FaPalette,
} from "react-icons/fa";

const techIcons: Record<string, React.ReactNode> = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  Tailwind: <SiTailwindcss />,
  Python: <FaPython />,
  AI: <FaBrain />,
  "Machine Learning": <FaBrain />,
  GitHub: <FaGithub />,
  Photoshop: <FaPalette />,
  Illustrator: <FaPalette />,
  "C++": <SiCplusplus />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#050816] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            SKILLS
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Technologies I Work With
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I enjoy building modern web applications, Artificial Intelligence
            solutions, machine learning projects, and beautiful user
            interfaces while continuously learning new technologies.
          </p>

          <div className="mt-6 h-1 w-28 rounded-full bg-cyan-400"></div>
        </motion.div>

        {/* Tech Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill) => (
            <TechCard
              key={skill}
              name={skill}
              icon={techIcons[skill] ?? <FaBrain />}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,.2)]"
          >
            <h3 className="text-5xl font-black text-cyan-400">
              {skills.length}+
            </h3>
            <p className="mt-3 text-gray-400">
              Technologies
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,.2)]"
          >
            <h3 className="text-5xl font-black text-cyan-400">
              AI
            </h3>
            <p className="mt-3 text-gray-400">
              Machine Learning Focus
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,.2)]"
          >
            <h3 className="text-5xl font-black text-cyan-400">
              100%
            </h3>
            <p className="mt-3 text-gray-400">
              Passion for Learning
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}