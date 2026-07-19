"use client";

import { container, section } from "@/lib/layout";

import GithubHeader from "./github/GithubHeader";
import GithubStats from "./github/GithubStats";
import GithubTerminal from "./github/GithubTerminal";
import GithubContribution from "./github/GithubContribution";

export default function Github() {
  return (
    <section
      id="github"
      className={section}
    >
      <div className={container}>
        <GithubHeader />

        {/* Top */}
        <div className="grid gap-8 lg:grid-cols-2">
          <GithubTerminal />

          <GithubStats />
        </div>

        {/* Contribution Graph */}
        <div className="mt-12">
          <GithubContribution />
        </div>
      </div>
    </section>
  );
}