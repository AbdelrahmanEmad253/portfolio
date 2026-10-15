"use client";
import { useEffect, useState, type ReactNode } from "react";
import { BookOpen, Check, ExternalLink, RotateCcw } from "lucide-react";
import type { Phase } from "@/data/roadmap";

const KEY = "roadmap-progress-v1";
const id = (n: number, cat: string, topic: string) => `${n}|${cat}|${topic}`;

export function RoadmapTracker({ phases, stats }: { phases: Phase[]; stats: ReactNode }) {
  const [done, setDone] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setDone(new Set(JSON.parse(raw) as string[]));
    } catch {}
    setMounted(true);
  }, []);

  const save = (s: Set<string>) => {
    setDone(s);
    try { localStorage.setItem(KEY, JSON.stringify([...s])); } catch {}
  };
  const toggle = (k: string) => { const s = new Set(done); if (!s.delete(k)) s.add(k); save(s); };

  const phaseIds = phases.map((p) => p.categories.flatMap((c) => c.topics.map((t) => id(p.n, c.name, t))));
  const total = phaseIds.reduce((a, x) => a + x.length, 0);
  const count = phaseIds.map((x) => x.filter((k) => done.has(k)).length);
  const n = count.reduce((a, b) => a + b, 0);
  const pct = total ? Math.round((n / total) * 100) : 0;
  const R = 44, C = 2 * Math.PI * R;

  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-4">
        <div className="panel flex items-center gap-4 p-4">
          <div className="relative h-28 w-28 shrink-0">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden>
              <circle cx="50" cy="50" r={R} fill="none" stroke="var(--line)" strokeWidth="9" />
              <circle cx="50" cy="50" r={R} fill="none" stroke="var(--accent2)" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={C} strokeDashoffset={C * (1 - (mounted ? n / total : 0))} style={{ transition: "stroke-dashoffset 400ms" }} />
            </svg>
            <span className="absolute inset-0 grid place-items-center stat text-2xl font-bold">{mounted ? `${pct}%` : "–"}</span>
          </div>
          <div className="text-sm">
            <p className="font-bold">Your progress</p>
            <p className="muted">{mounted ? n : "–"} of {total} topics checked</p>
            <p className="muted text-xs">Saved in this browser only.</p>
            <button type="button" onClick={() => save(new Set())} disabled={!mounted || n === 0} className="btn btn-ghost mt-2 !px-3 !py-1 text-xs disabled:opacity-50">
              <RotateCcw size={12} aria-hidden />Reset progress
            </button>
          </div>
        </div>
        <div className="min-w-0 flex-1 basis-72">{stats}</div>
      </div>

      <ul className="mx-auto mt-8 grid max-w-6xl gap-2 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map((p, i) => (
          <li key={p.n}>
            <a href={`#p${p.n}`} className="block rounded-xl border border-[var(--line)] bg-[var(--panel)] p-3 text-sm hover:border-[var(--fg)]">
              <span className="flex justify-between gap-2"><span>{p.n}. {p.title}</span><span className="muted stat text-xs">{mounted ? count[i] : "–"}/{phaseIds[i].length}</span></span>
              <span className="mt-2 block h-2 overflow-hidden rounded-full bg-[var(--line)]">
                <span className="block h-full rounded-full bg-[var(--accent2)]" style={{ width: mounted ? `${(count[i] / phaseIds[i].length) * 100}%` : 0, transition: "width 400ms" }} />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mx-auto max-w-6xl space-y-10 px-4 pt-10">
        {phases.map((p) => (
          <section key={p.n} id={`p${p.n}`} className="scroll-mt-24 border-l border-[var(--line)] pl-6">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="muted stat text-sm">Phase {p.n}</span>
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
                    {c.topics.map((t) => {
                      const k = id(p.n, c.name, t);
                      return (
                        <li key={t}>
                          <label className="group inline-flex cursor-pointer items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1 text-xs transition-colors duration-150 hover:border-[var(--fg)] has-[:checked]:border-[var(--accent2)] has-[:checked]:bg-[color-mix(in_srgb,var(--accent2)_16%,transparent)] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--accent)]">
                            <input type="checkbox" className="sr-only" checked={done.has(k)} onChange={() => toggle(k)} />
                            <Check size={12} aria-hidden className="hidden text-[var(--accent2)] group-has-[:checked]:block" />
                            {t}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="mt-4 space-y-1 text-sm">
                    {c.resources.map((r) => (
                      <li key={r.label} className="flex items-start gap-1.5">
                        {r.url
                          ? <a className="link inline-flex items-center gap-1.5" href={r.url} target="_blank" rel="noreferrer"><ExternalLink size={13} aria-hidden />{r.label}</a>
                          : <span className="inline-flex items-center gap-1"><BookOpen size={13} aria-hidden className="accent" />{r.label}</span>}
                        {r.note && <span className="muted"> ({r.note})</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm"><span className="font-semibold">Milestone: </span>{p.milestone}</p>
          </section>
        ))}
      </div>
    </>
  );
}
