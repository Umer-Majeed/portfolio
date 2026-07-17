import type { Metadata } from "next";
import "./globals.css";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

export const metadata: Metadata = {
  title: "Umer Majeed",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ActiveSectionProvider>
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}