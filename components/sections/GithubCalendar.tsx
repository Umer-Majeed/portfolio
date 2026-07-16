"use client";

import Reveal from "@/components/ui/Reveal";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubCalendar() {
  return (
    <Reveal>
      <section
        id="github-calendar"
        className="bg-[#050816] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-medium">
            GITHUB ACTIVITY
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black">
            Contribution Graph
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My GitHub contribution history reflects my passion for
            continuous learning, building projects, and exploring new
            technologies.
          </p>

          <div className="mt-16 overflow-x-auto rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl">

            <GitHubCalendar
              username="Umer-Majeed"
              colorScheme="dark"
              fontSize={16}
              blockSize={15}
              blockMargin={5}
            />

          </div>

        </div>
      </section>
    </Reveal>
  );
}