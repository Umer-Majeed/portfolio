"use client";

export default function GithubTerminal() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#0b1120]/80
        backdrop-blur-xl
        overflow-hidden
      "
    >
      <div className="border-b border-white/10 px-6 py-4">
        <span className="font-mono text-cyan-400">
          AI TERMINAL
        </span>
      </div>

      <div className="space-y-3 p-6 font-mono text-sm">
        <p className="text-cyan-400">
          &gt; Connecting GitHub...
        </p>

        <p className="text-white">
          ✓ API Connected
        </p>

        <p className="text-white">
          ✓ Repository Index Loaded
        </p>

        <p className="text-white">
          ✓ Contribution Graph Ready
        </p>

        <p className="text-cyan-400">
          SYSTEM READY_
        </p>
      </div>
    </div>
  );
}