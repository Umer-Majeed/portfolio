"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
 
  Globe,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Props = {
  status: string;
  github: string;
  demo: string;
};

export default function ProjectStatus({
  status,
  github,
  demo,
}: Props) {
  const completed = status === "Completed";

  return (
    <div
      className="
        mt-6
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, .4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className={`h-3 w-3 rounded-full ${
              completed ? "bg-green-400" : "bg-yellow-400"
            }`}
          />

          <span className="font-semibold text-white">
            {status}
          </span>

        </div>

        <span
          className="
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-3
            py-1
            text-xs
            font-mono
            tracking-[2px]
            text-cyan-400
          "
        >
          BUILD
        </span>

      </div>

      <div className="mt-5 h-2 rounded-full bg-white/5 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: completed ? "100%" : "70%",
          }}
          transition={{ duration: 1 }}
          className={`h-full ${
            completed
              ? "bg-green-400"
              : "bg-cyan-400"
          }`}
        />

      </div>

      <div className="mt-6 flex items-center justify-between">

        <div className="flex gap-5">

          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400"
          >
           <FaGithub size={18} />
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400"
            >
              <Globe size={18}/>
              Live
            </a>
          )}

        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">

          {completed ? (
            <>
              <CheckCircle2
                size={15}
                className="text-green-400"
              />
              Stable
            </>
          ) : (
            <>
              <Clock3
                size={15}
                className="text-yellow-400"
              />
              Developing
            </>
          )}

        </div>

      </div>

    </div>
  );
}