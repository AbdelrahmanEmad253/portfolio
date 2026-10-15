"use client";
import { useEffect } from "react";

/* Magnetic hover on the primary CTA only ([data-magnetic]); hover-capable devices, motion allowed. */
export function Effects() {
  useEffect(() => {
    const ok = () => matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches;
    const find = (e: Event) => (e.target as HTMLElement).closest<HTMLElement>("[data-magnetic]");
    const move = (e: PointerEvent) => {
      const b = find(e);
      if (!b || !ok()) return;
      const r = b.getBoundingClientRect();
      b.style.translate = `${((e.clientX - r.left - r.width / 2) * 0.2).toFixed(1)}px ${((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)}px`;
    };
    const out = (e: PointerEvent) => { const b = find(e); if (b) b.style.translate = ""; };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerout", out);
    return () => { document.removeEventListener("pointermove", move); document.removeEventListener("pointerout", out); };
  }, []);
  return null;
}
