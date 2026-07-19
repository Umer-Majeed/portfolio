"use client";

import { container, section } from "@/lib/layout";

import ProgressBar from "./ProgressBar";
import InstallTerminal from "./InstallTerminal";
import ModuleCard from "./ModuleCard";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
];

export default function Modules() {
  return (
    <section
      id="modules"
      className={`${section} relative overflow-hidden`}
    >
      <div className={container}>
        {/* Heading */}

        <div className="mb-20">
          <p className="font-mono text-sm tracking-[6px] text-cyan-400">
            MODULES INSTALLED
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Development
            <br />
            Environment
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#BDBDBD]">
            Every technology is treated as a system module inside
            UMER.OS.
          </p>

          <ProgressBar />
        </div>

        {/* Content */}

        <div className="grid gap-10 lg:grid-cols-2">
          <InstallTerminal />

          <div className="space-y-5">
            {tech.map((item, index) => (
              <ModuleCard
                key={item}
                name={item}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}