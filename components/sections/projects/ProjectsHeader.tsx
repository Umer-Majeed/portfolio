"use client";

import {
  Circle
} from "lucide-react";

export default function ProjectHeader() {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b
        border-white/10
        px-6
        py-4
      "
    >
      <div className="flex gap-2">

        <div className="h-3 w-3 rounded-full bg-red-500"/>

        <div className="h-3 w-3 rounded-full bg-yellow-400"/>

        <div className="h-3 w-3 rounded-full bg-green-500"/>

      </div>

      <div
        className="
          font-mono
          text-xs
          tracking-[3px]
          text-white/50
        "
      >
        PROJECT.EXE
      </div>

      <Circle
        size={12}
        className="text-cyan-400"
        fill="currentColor"
      />

    </div>
  );
}