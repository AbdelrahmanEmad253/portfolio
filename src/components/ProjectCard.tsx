import { Briefcase, FlaskConical, Heart, Lightbulb, ExternalLink, type LucideIcon } from "lucide-react";
import type { Project } from "@/data/projects";

const kindIcon: Record<Project["kind"], LucideIcon> = {
  "Production · NDA": Briefcase,
  "Team project": Lightbulb,
  Research: FlaskConical,
  Personal: Heart,
};

export function ProjectCard({ p, full = false, className = "" }: { p: Project; full?: boolean; className?: string }) {
  const Icon = kindIcon[p.kind];
  return (
    <article className={`panel spot flex flex-col p-5 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="chip"><Icon size={12} aria-hidden />{p.kind}</span>
        <span className="muted text-xs">{p.when}</span>
      </div>
      <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
      <p className="muted mt-2 max-w-[65ch] text-sm leading-relaxed">{p.summary}</p>
      {full && (
        <details className="group mt-3 text-sm">
          <summary className="cursor-pointer font-semibold hover:text-[var(--accent)]">Role and details</summary>
          <p className="mt-3"><span className="font-semibold">My role: </span>{p.role}</p>
          <ul className="muted mt-3 list-disc space-y-1 pl-5">
            {p.points.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </details>
      )}
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
      </div>
      {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="link mt-3 inline-flex items-center gap-1.5 self-start text-sm">View repository <ExternalLink size={13} aria-hidden /></a>}
    </article>
  );
}
