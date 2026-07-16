"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
}

export default function LoadingScreen({
  loading,
}: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-[#050816]
          "
        >
          <div className="text-center">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                text-5xl
                font-black
                tracking-[0.35em]
                text-cyan-400
              "
            >
              UMER OS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-6 text-gray-400"
            >
              Initializing Portfolio...
            </motion.p>

            <div className="mt-8 h-2 w-72 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-cyan-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}