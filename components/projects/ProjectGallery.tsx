"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <div className="space-y-6">
      {/* Main Image */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-400/20
          bg-white/5
        "
      >
        <Image
          src={images[0] || "/projects/placeholder.png"}
          alt="Project Preview"
          width={1200}
          height={700}
          className="
            h-[450px]
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#050816]
            via-transparent
            to-transparent
          "
        />
      </motion.div>

      {/* Thumbnail Gallery */}

      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-cyan-400/20
                bg-white/5
              "
            >
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                width={400}
                height={250}
                className="
                  h-36
                  w-full
                  object-cover
                  transition-transform
                  duration-300
                  hover:scale-110
                "
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}