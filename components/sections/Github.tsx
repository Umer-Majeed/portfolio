"use client";

import GithubGrid from "@/components/github/GithubGrid";
import GithubHeader from "@/components/github/GithubHeader";
import GithubProfile from "@/components/github/GithubProfile";
import GithubStats from "@/components/github/GithubStats";
import GithubRepos from "@/components/github/GithubRepos";
import GithubLanguages from "@/components/github/GithubLanguages";
import GithubContribution from "@/components/github/GithubContribution";
import GithubCTA from "@/components/github/GithubCTA";
import SectionBackground from "@/components/ui/SectionBackground";

export default function Github() {
  return (
    <section
      id="github"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        px-6
        py-24
      "
    >
      <SectionBackground />

      <div className="relative z-10">
        <GithubGrid>
          <GithubHeader />

          <div className="grid gap-8">
            <GithubProfile />

            <GithubStats />

            <GithubRepos />

            <GithubLanguages />

            <GithubContribution />

            <GithubCTA />
          </div>
        </GithubGrid>
      </div>
    </section>
  );
}