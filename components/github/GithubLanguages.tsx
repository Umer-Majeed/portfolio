"use client";

import { motion } from "framer-motion";
import { useGithub } from "@/hooks/useGithub";

export default function GithubLanguages() {
  const { repos, loading } = useGithub("Umer-Majeed");

  if (loading) return null;

  const counts: Record<string, number> = {};

  repos.forEach((repo) => {
    if (!repo.language) return;

    counts[repo.language] =
      (counts[repo.language] || 0) + 1;
  });

  const languages = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const total = languages.reduce(
    (sum, [, value]) => sum + value,
    0
  );

  return (
    <section>

      <h3 className="mb-8 text-3xl font-black">
        Top Languages
      </h3>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
        "
      >

        {languages.map(([language, value], index) => {

          const width = (value / total) * 100;

          return (

            <motion.div
              key={language}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="mb-6"
            >

              <div className="mb-2 flex justify-between">

                <span>{language}</span>

                <span>{Math.round(width)}%</span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${width}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-cyan-400
                  "
                />

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}