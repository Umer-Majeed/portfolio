"use client";

import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  ArrowUpRight,
} from "lucide-react";

import { useGithub } from "@/hooks/useGithub";

export default function GithubRepos() {
  const { repos, loading } = useGithub("Umer-Majeed");

  if (loading) return null;

  return (
    <section>

      <div className="mb-10">

        <h3 className="text-3xl font-black">
          Latest Repositories
        </h3>

        <p className="mt-3 text-gray-400">
          Recently updated open-source projects.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-400/5
            "
          >
            <div className="flex items-center justify-between">

              <h4 className="text-2xl font-bold">
                {repo.name}
              </h4>

              <ArrowUpRight
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </div>

            <p className="mt-5 text-gray-400">
              {repo.description || "No description available."}
            </p>

            <div className="mt-8 flex flex-wrap gap-6">

              {repo.language && (
                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  {repo.language}
                </span>
              )}

              <div className="flex items-center gap-2">
                <Star size={16} />
                {repo.stargazers_count}
              </div>

              <div className="flex items-center gap-2">
                <GitFork size={16} />
                {repo.forks_count}
              </div>

            </div>

          </motion.a>
        ))}

      </div>

    </section>
  );
}