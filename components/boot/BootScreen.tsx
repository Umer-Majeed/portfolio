"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BootScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setVisible(false);
          }, 800);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712]"
        >
          <div className="w-full max-w-xl px-8">

            <h1 className="text-center text-5xl font-black tracking-[0.3em] text-cyan-400">
              UMER OS
            </h1>

            <p className="mt-3 text-center text-gray-400">
              Version 2090
            </p>

            <div className="mt-16 space-y-8">

              <div>
                <div className="mb-2 flex justify-between text-sm text-gray-400">
                  <span>Initializing AI Core</span>
                  <span>{progress}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-cyan-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm text-gray-400">
                  <span>Loading Neural Interface</span>
                  <span>{progress}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-cyan-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

            </div>

            <p className="mt-12 text-center text-cyan-400 animate-pulse">
              {progress === 100
                ? "Access Granted"
                : "Booting System..."}
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}