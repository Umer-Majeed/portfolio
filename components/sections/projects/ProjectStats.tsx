"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  Code2,
  Rocket,
  Cpu,
} from "lucide-react";

const stats = [
  {
    icon: FolderGit2,
    value: "06",
    label: "Projects",
    color: "text-cyan-400",
  },
  {
    icon: Code2,
    value: "15+",
    label: "Technologies",
    color: "text-green-400",
  },
  {
    icon: Rocket,
    value: "04",
    label: "Live Apps",
    color: "text-purple-400",
  },
  {
    icon: Cpu,
    value: "100%",
    label: "Performance",
    color: "text-orange-400",
  },
];

export default function ProjectStats() {
  return (
    <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-6
              backdrop-blur-xl
            "
          >
            <Icon
              className={`${item.color} mb-5`}
              size={30}
            />

            <h3 className="text-4xl font-black">
              {item.value}
            </h3>

            <p className="mt-2 text-gray-400">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}