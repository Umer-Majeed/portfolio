"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
} from "react-icons/si";

import { Cpu } from "lucide-react";

const tech = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiPython, name: "Python" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiGit, name: "Git" },
  { icon: SiDocker, name: "Docker" },
  
  {
  icon: Cpu,
  name: "OpenAI",
                          },
];

export default function ProjectTechWall() {
  return (
    <div className="mb-20">
      <p className="mb-8 font-mono text-xs tracking-[4px] text-cyan-400">
        TECHNOLOGY STACK
      </p>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {tech.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.05,
                duration: 0.4,
              }}
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
                transition-all
              "
            >
              <Icon
                size={42}
                className="text-cyan-400"
              />

              <span className="mt-4 text-sm text-gray-300">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}