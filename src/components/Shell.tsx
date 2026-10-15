import Link from "next/link";
import { nav, site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--accent)] text-sm text-black">{site.short}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm muted">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-[var(--fg)]">{n.label}</Link>
          ))}
          <a href={site.resumeAI} className="btn btn-ghost !py-1.5 !px-3 text-[var(--fg)]">Resume</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="font-bold">{site.name}</p>
          <p className="muted mt-1 text-sm">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap items-start gap-4 text-sm sm:justify-end">
          <a className="link" href={`mailto:${site.email}`}>Email</a>
          <a className="link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="muted text-xs sm:col-span-2">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}

export function PageHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 pb-8">
      <p className="h-eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
      {sub && <p className="muted mt-4 max-w-3xl text-lg">{sub}</p>}
    </div>
  );
}
