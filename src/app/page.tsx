import Link from "next/link";
import { ArrowUpRight, Bot, Briefcase, Database, FileText, School, ShieldCheck, Target, type LucideIcon } from "lucide-react";
import { site, roles, pillars } from "@/data/site";
import { projects } from "@/data/projects";
import { ProjectGrid } from "@/components/ProjectGrid";
import { RoleCycler } from "@/components/RoleCycler";
import { Portrait } from "@/components/Portrait";

const roleIcon: Record<string, LucideIcon> = { Cycls: Bot, "BB Strategy": Briefcase, "Arabian Academy": School };
const roleSpan = ["md:col-span-4", "md:col-span-2", "md:col-span-6"];
const pillarIcon: LucideIcon[] = [ShieldCheck, Database, Target];
const stack = [...new Set(projects.flatMap((p) => p.stack))];
const headline = "I build AI agents that understand the business.".split(" ");

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="blob" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-end gap-12 px-4 pt-16 pb-16 md:grid-cols-[1.7fr_1fr]">
          <div>
            <h1 className="display text-5xl sm:text-7xl lg:text-8xl" aria-label={headline.join(" ")}>
              {headline.map((w, i) => (
                <span key={i} aria-hidden className="rise mr-[.25em] inline-block" style={{ "--i": i } as React.CSSProperties}>{w}</span>
              ))}
            </h1>
            <div className="rise mt-8" style={{ "--i": 9 } as React.CSSProperties}><RoleCycler /></div>
            <p className="muted rise mt-6 max-w-[60ch] text-lg leading-relaxed" style={{ "--i": 10 } as React.CSSProperties}>{site.intro}</p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--i": 11 } as React.CSSProperties}>
              <Link href="/projects" data-magnetic className="btn btn-primary">See my work</Link>
              <a href={site.resumeAI} className="btn btn-ghost"><FileText size={16} aria-hidden />Open resume (AI Eng)</a>
              <a href={site.resumeDS} className="btn btn-ghost"><FileText size={16} aria-hidden />Open resume (Data Sci)</a>
            </div>
          </div>
          <div className="rise mx-auto w-full max-w-xs md:max-w-none" style={{ "--i": 4 } as React.CSSProperties}>
            <Portrait priority />
          </div>
        </div>
      </section>

      <div className="marquee">
        <ul className="marquee-track" aria-label="Tools and technologies used across my projects">
          {[0, 1].map((k) => stack.map((s) => (
            <li key={`${k}${s}`} aria-hidden={k ? true : undefined} className={`muted mx-5 my-4 whitespace-nowrap text-sm ${k ? "marq-dup" : ""}`}>{s}</li>
          )))}
        </ul>
      </div>

      <section className="mx-auto mt-20 grid max-w-6xl gap-4 px-4 md:grid-cols-6">
        {roles.map((r, i) => {
          const Icon = roleIcon[r.org] ?? Briefcase;
          return (
            <div key={r.org} className={`panel p-6 ${roleSpan[i % 3]}`}>
              <span className="ico"><Icon size={20} aria-hidden /></span>
              <p className="muted mt-4 text-xs">{r.when}</p>
              <h2 className="text-2xl font-bold">{r.org}</h2>
              <p className="accent text-sm">{r.title}</p>
              <p className="muted mt-3 max-w-[60ch] text-sm">{r.line}</p>
            </div>
          );
        })}
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <h2 className="display text-4xl sm:text-5xl">How I work</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = pillarIcon[i];
            return (
              <div key={p.title}>
                <Icon size={22} aria-hidden className="accent" />
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <h2 className="display text-4xl sm:text-5xl">Selected work</h2>
        <p className="muted mt-3 text-sm">Production work is under NDA, so it&apos;s described without client or product names.</p>
        <div className="mt-8">
          <ProjectGrid
            items={featured} bento
            extra={
              <Link href="/projects" className="panel flex flex-col justify-between gap-6 bg-[var(--accent)] p-6 text-[var(--on-accent)] md:col-span-3 [&]:border-transparent">
                <span className="text-2xl font-bold">All projects</span>
                <ArrowUpRight size={28} aria-hidden />
              </Link>
            }
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pt-24 md:grid-cols-5">
        <Link href="/roadmap" className="panel p-8 hover:border-[var(--fg)] md:col-span-3">
          <h3 className="display text-3xl">AI Engineer Roadmap</h3>
          <p className="muted mt-3 max-w-[50ch] text-sm">Software engineering first, then data, ML, LLMs and agents, and how to stay current without drowning.</p>
        </Link>
        <Link href="/founders" className="panel p-8 hover:border-[var(--fg)] md:col-span-2">
          <h3 className="display text-3xl">Founders Roadmap</h3>
          <p className="muted mt-3 text-sm">The 14 corners of business, 50+ books, and an AI lens on each: what to automate, what to measure, what to keep human.</p>
        </Link>
      </section>
    </>
  );
}
