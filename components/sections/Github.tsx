"use client";

import GithubBackground from "@/components/github/GithubBackground";
import GithubGrid from "@/components/github/GithubGrid";
import GithubHeader from "@/components/github/GithubHeader";
import GithubProfile from "@/components/github/GithubProfile";
import GithubStats from "@/components/github/GithubStats";
import GithubRepos from "@/components/github/GithubRepos";
import GithubLanguages from "@/components/github/GithubLanguages";
import GithubContribution from "@/components/github/GithubContribution";
import GithubCTA from "@/components/github/GithubCTA";

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
      <GithubBackground />

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

    </section>
  );
}