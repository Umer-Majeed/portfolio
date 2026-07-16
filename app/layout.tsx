import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umer Majeed | AI Engineer & Full Stack Developer",

  description:
    "Portfolio of Umer Majeed showcasing Artificial Intelligence, Full Stack Development, Machine Learning, and modern web projects.",

  keywords: [
    "Umer Majeed",
    "Portfolio",
    "AI Engineer",
    "Machine Learning",
    "Next.js",
    "React",
    "Full Stack Developer",
    "Python",
    "Artificial Intelligence",
  ],

  authors: [
    {
      name: "Umer Majeed",
    },
  ],

  creator: "Umer Majeed",

  openGraph: {
    title: "Umer Majeed Portfolio",
    description:
      "AI Engineer • Full Stack Developer • Machine Learning Enthusiast",

    url: "https://your-domain.vercel.app",

    siteName: "Umer Majeed",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Umer Majeed Portfolio",

    description:
      "AI Engineer • Full Stack Developer • Machine Learning",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};