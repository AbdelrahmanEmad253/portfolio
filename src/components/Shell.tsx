import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { CommandPalette } from "./CommandPalette";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-head font-bold" aria-label={`${site.name}, home`}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--accent)] text-sm text-[var(--on-accent)]">{site.short}</span>
          <span className="hidden lg:inline">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="muted hidden min-w-0 flex-1 items-center gap-5 whitespace-nowrap px-1 py-1 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-[var(--fg)]">{n.label}</Link>
          ))}
          <a href={site.resumeAI} className="btn btn-ghost !px-3 !py-1.5 text-[var(--fg)]"><FileText size={14} aria-hidden />Resume</a>
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
          <CommandPalette />
          <MobileMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-28 border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="font-head font-bold">{site.name}</p>
          <p className="muted mt-1 text-sm">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap items-start gap-4 text-sm sm:justify-end">
          <a className="link inline-flex items-center gap-1.5" href={`mailto:${site.email}`}><Mail size={14} aria-hidden />Email</a>
          <a className="link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="muted text-xs sm:col-span-2">Copyright {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}

export function PageHead({ title, sub, aside, big = false }: { title: string; sub?: string; aside?: ReactNode; big?: boolean }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-4 pt-20 pb-10">
      <div className="min-w-0 flex-1 basis-80">
        <h1 className={`display ${big ? "text-6xl sm:text-8xl" : "max-w-4xl text-4xl sm:text-6xl"}`}>{title}</h1>
        {sub && <p className="muted mt-5 max-w-[65ch] text-lg">{sub}</p>}
      </div>
      {aside}
    </div>
  );
}
