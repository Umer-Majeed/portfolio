"use client";

import SkillCategory from "./SkillCategory";
import { skillCategories } from "./skillsData";

export default function SkillGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {skillCategories.map((category) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
}