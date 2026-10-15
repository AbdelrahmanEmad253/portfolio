"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, Search, X } from "lucide-react";
import { nav, site } from "@/data/site";

/* Disclosure menu below the md breakpoint. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const path = usePathname();

  useEffect(() => { setOpen(false); }, [path]);

  useEffect(() => {
    if (!open) return;
    wrap.current?.querySelector<HTMLElement>("#mobile-menu a, #mobile-menu button")?.focus();
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    const down = (e: PointerEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", down);
    return () => { document.removeEventListener("keydown", key); document.removeEventListener("pointerdown", down); };
  }, [open]);

  const item = "flex items-center gap-2 rounded-lg px-3 py-3 text-base hover:bg-[color-mix(in_srgb,var(--fg)_8%,transparent)]";
  return (
    <div ref={wrap} className="md:hidden">
      <button ref={btn} type="button" className="btn btn-ghost !p-2" aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
        {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
      </button>
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-[var(--line)] bg-[var(--panel)] p-3">
          <ul>
            {nav.map((n) => <li key={n.href}><Link href={n.href} className={item}>{n.label}</Link></li>)}
            <li><a href={site.resumeAI} className={item}><FileText size={16} aria-hidden />Open resume (AI Eng)</a></li>
            <li><a href={site.resumeDS} className={item}><FileText size={16} aria-hidden />Open resume (Data Sci)</a></li>
            <li><button type="button" className={`${item} w-full text-left`} onClick={() => { setOpen(false); window.dispatchEvent(new Event("open-palette")); }}><Search size={16} aria-hidden />Search / commands</button></li>
          </ul>
        </div>
      )}
    </div>
  );
}
