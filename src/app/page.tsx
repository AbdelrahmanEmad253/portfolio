import Link from "next/link";
import { site, roles, pillars } from "@/data/site";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-12">
        <p className="h-eyebrow">{site.role} · Business background · Educator</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          I build AI agents that <span className="accent">understand the business.</span>
        </h1>
        <p className="muted mt-6 max-w-2xl text-lg leading-relaxed">{site.intro}</p>
        <p className="muted mt-2 text-sm">{site.location}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="btn btn-primary">See my work</Link>
          <a href={site.resumeAI} className="btn btn-ghost">Resume (AI Eng)</a>
          <a href={site.resumeDS} className="btn btn-ghost">Resume (Data Sci)</a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3">
        {roles.map((r) => (
          <div key={r.org} className="panel p-5">
            <p className="text-xs muted">{r.when}</p>
            <p className="mt-1 font-bold">{r.org}</p>
            <p className="accent text-sm">{r.title}</p>
            <p className="muted mt-3 text-sm">{r.line}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20">
        <p className="h-eyebrow">How I work</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className="panel p-6">
              <p className="font-mono text-sm accent">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
              <p className="muted mt-2 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="h-eyebrow">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold">Featured projects</h2>
          </div>
          <Link href="/projects" className="link text-sm">All projects →</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featured.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
        <p className="muted mt-3 text-xs">Production work is under NDA, so it&apos;s described without client or product names.</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pt-20 md:grid-cols-2">
        <Link href="/roadmap" className="panel block p-8 hover:border-[var(--accent)]">
          <p className="h-eyebrow">For engineers</p>
          <h3 className="mt-3 text-2xl font-bold">AI Engineer Roadmap →</h3>
          <p className="muted mt-2 text-sm">Software engineering first, then data, ML, LLMs and agents, and how to stay current without drowning.</p>
        </Link>
        <Link href="/founders" className="panel block p-8 hover:border-[var(--accent2)]">
          <p className="h-eyebrow" style={{ color: "var(--accent2)" }}>For founders & CEOs</p>
          <h3 className="mt-3 text-2xl font-bold">Founders Roadmap →</h3>
          <p className="muted mt-2 text-sm">The 14 corners of business, 50+ books, and an AI lens on each: what to automate, what to measure, what to keep human.</p>
        </Link>
      </section>
    </>
  );
}
