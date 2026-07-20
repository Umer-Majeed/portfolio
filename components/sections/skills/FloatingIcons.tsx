"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const icons = [
  FaReact,
  SiNextdotjs,
  FaNodeJs,
  FaPython,
  SiMongodb,
  FaGitAlt,
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className="absolute text-cyan-400/20"
          style={{
            left: `${10 + index * 15}%`,
            top: `${10 + (index % 2) * 60}%`,
          }}
        >
          <Icon size={38} />
        </motion.div>
      ))}
    </>
  );
}