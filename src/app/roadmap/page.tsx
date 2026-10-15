import Link from "next/link";
import { aiRoadmap, tips, tools } from "@/data/roadmap";
import { PageHead } from "@/components/Shell";

export const metadata = { title: "AI Engineer Roadmap" };

export default function Roadmap() {
  const cats = aiRoadmap.reduce((a, p) => a + p.categories.length, 0);
  const topics = aiRoadmap.reduce((a, p) => a + p.categories.reduce((b, c) => b + c.topics.length, 0), 0);
  const res = aiRoadmap.reduce((a, p) => a + p.categories.reduce((b, c) => b + c.resources.length, 0), 0);
  return (
    <>
      <PageHead eyebrow="Roadmap" title="AI Engineer Roadmap" sub="Software engineering first, then just enough AI to build reliable products, then the habits that keep you current. This is the route I walk and teach." />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 sm:grid-cols-4">
        {[["Phases", aiRoadmap.length], ["Categories", cats], ["Topics", topics], ["Resources", res]].map(([k, v]) => (
          <div key={k} className="panel p-4"><p className="text-3xl font-extrabold accent">{v}</p><p className="muted text-sm">{k}</p></div>
        ))}
      </div>
      <nav className="mx-auto mt-8 flex max-w-6xl flex-wrap gap-2 px-4">
        {aiRoadmap.map((p) => <a key={p.n} href={`#p${p.n}`} className="chip hover:text-[var(--fg)]">{p.n}. {p.title}</a>)}
      </nav>
      <div className="mx-auto max-w-6xl space-y-10 px-4 pt-10">
        {aiRoadmap.map((p) => (
          <section key={p.n} id={`p${p.n}`} className="scroll-mt-24 border-l-2 border-[var(--line)] pl-6">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-mono text-sm accent">PHASE {p.n}</span>
              <h2 className="text-2xl font-bold">{p.title}</h2>
              <span className="chip">{p.duration}</span>
            </div>
            <p className="muted mt-2 max-w-3xl">{p.why}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {p.categories.map((c) => (
                <div key={c.name} className="panel p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold">{c.name}</h3>
                    <span className={`chip lvl-${c.level}`}>{c.level}</span>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.topics.map((t) => <li key={t} className="rounded-md bg-[var(--bg)] px-2 py-1 text-xs">{t}</li>)}
                  </ul>
                  <ul className="mt-4 space-y-1 text-sm">
                    {c.resources.map((r) => (
                      <li key={r.label}>
                        {r.url ? <a className="link" href={r.url} target="_blank" rel="noreferrer">↗ {r.label}</a> : <span>📘 {r.label}</span>}
                        {r.note && <span className="muted"> ({r.note})</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm"><span className="accent font-semibold">Milestone: </span>{p.milestone}</p>
          </section>
        ))}
      </div>
      <section className="mx-auto mt-16 grid max-w-6xl gap-4 px-4 md:grid-cols-2">
        <div className="panel p-6">
          <h3 className="text-lg font-bold">Learning tips</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm muted">{tips.map((t) => <li key={t}>{t}</li>)}</ol>
        </div>
        <div className="panel p-6">
          <h3 className="text-lg font-bold">Essential tools</h3>
          <dl className="mt-3 space-y-2 text-sm">{tools.map((t) => <div key={t.k} className="flex gap-3"><dt className="w-16 shrink-0 accent">{t.k}</dt><dd className="muted">{t.v}</dd></div>)}</dl>
        </div>
      </section>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-3 px-4">
        <Link href="/projects" className="btn btn-primary">View my projects</Link>
        <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
      </div>
    </>
  );
}
