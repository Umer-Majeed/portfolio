"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function SectionObserver({
  id,
}: {
  id: string;
}) {
  const { setActive } = useActiveSection();

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActive(id);
    }
  }, [inView, id, setActive]);

  return <div ref={ref} className="absolute top-40" />;
}