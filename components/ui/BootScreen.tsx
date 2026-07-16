"use client";

import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 500);

          return 100;
        }

        return prev + 4;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">
      <div className="w-[500px] max-w-[90%]">

        <h1 className="text-cyan-400 text-5xl font-bold mb-2">
          UMER OS
        </h1>

        <p className="text-gray-400 mb-10">
          Version 2090.1
        </p>

        <div className="space-y-3 text-gray-300 font-mono">

          <p>Initializing Neural Engine...</p>

          <p>Loading AI Modules...</p>

          <p>Authenticating Visitor...</p>

          <p className="text-cyan-400">
            Access Granted
          </p>

        </div>

        <div className="mt-10 h-2 bg-gray-800 rounded-full overflow-hidden">

          <div
            className="bg-cyan-400 h-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p className="mt-4 text-right text-gray-500">
          {progress}%
        </p>

      </div>
    </div>
  );
}