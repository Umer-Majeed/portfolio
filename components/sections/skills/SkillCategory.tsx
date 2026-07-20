"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

type Skill = {
  name: string;
  level: number;
};

type Props = {
  title: string;
  skills: Skill[];
};

export default function SkillCategory({
  title,
  skills,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .5,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      <div className="mb-8 flex items-center gap-4">

        <div className="h-[2px] w-12 bg-cyan-400" />

        <h3
          className="
            font-mono
            text-sm
            tracking-[4px]
            text-cyan-400
          "
        >
          {title.toUpperCase()}
        </h3>

      </div>

      <div className="space-y-5">

        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}

      </div>
    </motion.div>
  );
}