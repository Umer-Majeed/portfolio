"use client";

import SkillCategory from "./SkillCategory";
import { skillCategories } from "./skillsData";

export default function SkillReveal() {
  return (
    <div
      id="skill-reveal"
      className="
      mt-32
      grid
      gap-8
      lg:grid-cols-5
    "
    >
      {skillCategories.map((category, index) => (
        <div
          key={category.title}
          className={`reveal-card reveal-${index}`}
        >
          <SkillCategory
            title={category.title}
            skills={category.skills}
          />
        </div>
      ))}
    </div>
  );
}