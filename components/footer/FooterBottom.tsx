"use client";

export default function FooterBottom() {
  return (
    <div
      className="
        mt-20
        border-t
        border-white/10
        pt-8
        text-center
        text-gray-500
      "
    >
      © {new Date().getFullYear()} Umer Majeed.
      Built with Next.js, Tailwind CSS & Framer Motion.
    </div>
  );
}