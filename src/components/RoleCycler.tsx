"use client";
import { useEffect, useState } from "react";
import { reducedMotion } from "@/lib/ui";

const roles = ["AI agents", "data pipelines", "applied ML", "growth strategy", "teaching Data & AI"];

export function RoleCycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reducedMotion()) return;
    const t = setInterval(() => {
      if (!reducedMotion()) setI((x) => (x + 1) % roles.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <p className="font-head text-2xl font-semibold sm:text-4xl">
      <span className="sr-only">Right now: {roles.join(", ")}</span>
      <span aria-hidden className="block min-h-[2.4em] sm:min-h-[1.3em]">
        <span className="muted">Right now: </span>
        <span key={i} className="pop-in text-[var(--accent)]">{roles[i]}</span>
      </span>
    </p>
  );
}
