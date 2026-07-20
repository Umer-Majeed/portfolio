"use client";

import { useEffect, useState } from "react";

export type GithubUser = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
  company: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
};

export function useGithub(username: string) {
  const [user, setUser] = useState<GithubUser | null>(null);

  const [repos, setRepos] = useState<GithubRepo[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGithub() {
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${username}`
        );

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );

        const userData = await userRes.json();

        const repoData = await repoRes.json();

        setUser(userData);

        setRepos(repoData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadGithub();
  }, [username]);

  return {
    user,
    repos,
    loading,
  };
}