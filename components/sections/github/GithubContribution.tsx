"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubContribution() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8
        overflow-x-auto
      "
    >
      <div className="mb-8">
        <p className="font-mono text-sm tracking-[6px] text-cyan-400">
          GITHUB ACTIVITY
        </p>

        <h3 className="mt-3 text-4xl font-black text-white">
          Contribution Graph
        </h3>

        <p className="mt-4 max-w-2xl text-[#BDBDBD]">
          My GitHub contribution history reflects continuous learning,
          shipping products and improving every single day.
        </p>
      </div>

      <GitHubCalendar
        username="Umer-Majeed"
        blockSize={15}
        blockMargin={5}
        fontSize={14}
        colorScheme="dark"
      />
    </div>
  );
}