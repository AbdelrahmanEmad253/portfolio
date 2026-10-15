import type { Project } from "@/data/projects";

export function ProjectCard({ p, full = false }: { p: Project; full?: boolean }) {
  return (
    <article className="panel flex flex-col p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="chip">{p.kind}</span>
        <span className="muted text-xs">{p.when}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
      <p className="muted mt-2 text-sm leading-relaxed">{p.summary}</p>
      {full && (
        <>
          <p className="mt-4 text-sm"><span className="accent font-semibold">My role: </span>{p.role}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm muted">
            {p.points.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </>
      )}
      <div className="mt-auto pt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
      </div>
      {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="link mt-4 text-sm">View repository →</a>}
    </article>
  );
}
