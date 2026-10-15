"use client";
import { useState, type PointerEvent, type ReactNode } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

const canTilt = () =>
  matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches;

function onMove(e: PointerEvent<HTMLDivElement>) {
  if (!canTilt()) return;
  const card = (e.target as HTMLElement).closest<HTMLElement>(".spot");
  if (!card) return;
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
  card.style.setProperty("--rx", `${((x - 0.5) * 4).toFixed(2)}deg`);
  card.style.setProperty("--ry", `${((0.5 - y) * 4).toFixed(2)}deg`);
}

// bento: spans on a 5-column grid, repeating 3/2 then 2/3
const bentoSpans = ["md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-3"];

export function ProjectGrid({ items, full = false, filters = false, bento = false, extra }: { items: Project[]; full?: boolean; filters?: boolean; bento?: boolean; extra?: ReactNode }) {
  const kinds = [...new Set(items.map((p) => p.kind))];
  const [kind, setKind] = useState<string>("All");
  const shown = kind === "All" ? items : items.filter((p) => p.kind === kind);
  return (
    <>
      {filters && (
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects by kind">
          {["All", ...kinds].map((k) => (
            <button key={k} type="button" className="chip !px-3 !py-1 !text-sm" aria-pressed={kind === k} onClick={() => setKind(k)}>
              {k} ({k === "All" ? items.length : items.filter((p) => p.kind === k).length})
            </button>
          ))}
        </div>
      )}
      <div className={`grid gap-4 ${bento ? "md:grid-cols-5" : "md:grid-cols-2"}`} onPointerMove={onMove}>
        {shown.map((p, i) => <ProjectCard key={p.slug} p={p} full={full} className={bento ? bentoSpans[i % 4] : ""} />)}
        {kind === "All" && extra}
      </div>
    </>
  );
}
