"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type ContextType = {
  active: string;
  setActive: (id: string) => void;
};

const ActiveSectionContext =
  createContext<ContextType | null>(null);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("home");

  return (
    <ActiveSectionContext.Provider
      value={{ active, setActive }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (!context)
    throw new Error("Provider missing");

  return context;
}