"use client";

export default function ProjectStatus() {
  return (
    <div className="flex items-center gap-3">

      <div className="relative">

        <span className="absolute h-2 w-2 animate-ping rounded-full bg-green-400"/>

        <span className="relative block h-2 w-2 rounded-full bg-green-400"/>

      </div>

      <span
        className="
          font-mono
          text-xs
          uppercase
          tracking-[3px]
          text-green-400
        "
      >
        Running
      </span>

    </div>
  );
}