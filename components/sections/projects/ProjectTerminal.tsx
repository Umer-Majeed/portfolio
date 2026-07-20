"use client";

import { motion } from "framer-motion";

type Props = {
  project: string;
};

const lines = [
  "$ npm install",
  "✓ Packages installed",
  "$ npm run build",
  "✓ Build successful",
  "$ npm run deploy",
  "✓ Deployment completed",
];

export default function ProjectTerminal({ project }: Props) {
  return (
    <div
      className="
        mt-10
        overflow-hidden
        rounded-2xl
        border
        border-cyan-400/20
        bg-black
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          gap-2
          border-b
          border-white/10
          bg-white/[0.04]
          px-4
          py-3
        "
      >
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-3 font-mono text-xs tracking-[3px] text-cyan-400">
          TERMINAL
        </span>
      </div>

      <div className="space-y-2 p-5 font-mono text-sm">
        <p className="text-cyan-400">
          ~/projects/{project.toLowerCase().replace(/\s+/g, "-")}
        </p>

        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            className="text-green-400"
          >
            {line}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
          className="text-cyan-300"
        >
          ✓ {project} deployed successfully.
        </motion.p>
      </div>
    </div>
  );
}