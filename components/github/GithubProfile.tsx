"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { useGithub } from "@/hooks/useGithub";

export default function GithubProfile() {
  const { user, loading } = useGithub("Umer-Majeed");

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        Loading GitHub...
      </div>
    );
  }

  if (!user) return null;

  return (
    <motion.div
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
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      <div className="flex flex-col gap-8 md:flex-row">

        <Image
          src={user.avatar_url}
          alt={user.name}
          width={150}
          height={150}
          className="
            rounded-full
            border
            border-cyan-400/30
          "
        />

        <div className="flex-1">

          <h2 className="text-4xl font-black">
            {user.name}
          </h2>

          <p className="mt-2 text-cyan-400">
            @{user.login}
          </p>

          <p className="mt-6 max-w-2xl text-gray-400">
            {user.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-6">

            <div className="flex items-center gap-2">
              <Users size={18} />
              {user.followers} Followers
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              {user.following} Following
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {user.location}
            </div>

          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-cyan-400
              px-6
              py-3
              font-semibold
              text-black
            "
          >
            <FaGithub />

            View GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
}