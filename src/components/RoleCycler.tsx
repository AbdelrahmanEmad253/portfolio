"use client";
import { useEffect, useState } from "react";

const roles = ["AI agents", "data pipelines", "applied ML", "growth strategy", "teaching Data & AI"];

/* Cycles in every motion mode; CSS turns the entrance into a plain crossfade under reduced motion. */
export function RoleCycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <p className="font-head text-2xl font-semibold sm:text-4xl">
      <span className="sr-only">Right now: {roles.join(", ")}</span>
      <span aria-hidden className="block whitespace-nowrap">
        <span className="muted">Right now: </span>
        <span key={i} className="pop-in text-[var(--accent)]">{roles[i]}</span>
      </span>
    </p>
  );
}
