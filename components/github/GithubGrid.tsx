"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GithubGrid({
  children,
}: Props) {
  return (
    <div className="relative mx-auto max-w-7xl">
      {children}
    </div>
  );
}