"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  Users,
  GitFork,
  Star,
} from "lucide-react";

import { useGithub } from "@/hooks/useGithub";

export default function GithubStats() {
  const { user, repos, loading } = useGithub("Umer-Majeed");

  if (loading || !user) return null;

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repos.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const stats = [
    {
      title: "Repositories",
      value: user.public_repos,
      icon: FolderGit2,
    },
    {
      title: "Followers",
      value: user.followers,
      icon: Users,
    },
    {
      title: "Stars",
      value: totalStars,
      icon: Star,
    },
    {
      title: "Forks",
      value: totalForks,
      icon: GitFork,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
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
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-xl
          "
        >
          <item.icon
            className="text-cyan-400"
            size={32}
          />

          <h3 className="mt-6 text-4xl font-black">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-400">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}