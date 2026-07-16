"use client";

import { useEffect, useState } from "react";

type GithubUser = {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  avatar_url: string;
  html_url: string;
  name: string;
};

export default function Github() {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Umer-Majeed")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return null;

  return (
    <section
      id="github"
      className="bg-[#050816] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="uppercase tracking-[0.35em] text-cyan-400">
          GitHub
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Live Developer Profile
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-5">

          <div className="rounded-3xl border border-cyan-400/20 bg-[#0b1120] p-8">
            <p className="text-gray-400">Repositories</p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              {user.public_repos}
            </h3>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-[#0b1120] p-8">
            <p className="text-gray-400">Followers</p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              {user.followers}
            </h3>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-[#0b1120] p-8">
            <p className="text-gray-400">Following</p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              {user.following}
            </h3>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-[#0b1120] p-8">
            <p className="text-gray-400">Public Gists</p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              {user.public_gists}
            </h3>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            className="flex items-center justify-center rounded-3xl bg-cyan-400 text-xl font-bold text-black transition hover:scale-105"
          >
            Open GitHub →
          </a>

        </div>
      </div>
    </section>
  );
}