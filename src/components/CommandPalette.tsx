"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Command, CornerDownLeft } from "lucide-react";
import { nav, site } from "@/data/site";
import { toggleTheme } from "./ThemeToggle";
import { toast, toggleParty } from "@/lib/ui";

type Cmd = { label: string; hint: string; run: () => void };

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export function CommandPalette() {
  const router = useRouter();
  const dlg = useRef<HTMLDialogElement>(null);
  const opener = useRef<Element | null>(null);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  const ext = (u: string) => window.open(u, "_blank", "noopener,noreferrer");
  const cmds: Cmd[] = [
    { label: "Home", hint: "page", run: () => router.push("/") },
    ...nav.map((n) => ({ label: n.label, hint: "page", run: () => router.push(n.href) })),
    { label: "Resume (AI Engineer, PDF)", hint: "file", run: () => ext(site.resumeAI) },
    { label: "Resume (Data Scientist, PDF)", hint: "file", run: () => ext(site.resumeDS) },
    { label: "Copy email", hint: "action", run: async () => {
      try { await navigator.clipboard.writeText(site.email); toast("email copied"); } catch { toast(site.email); }
    } },
    { label: "Toggle dark / light theme", hint: "action", run: toggleTheme },
    { label: "LinkedIn", hint: "link", run: () => ext(site.linkedin) },
    { label: "GitHub", hint: "link", run: () => ext(site.github) },
    { label: "Party mode", hint: "secret", run: toggleParty },
  ];
  const shown = cmds.filter((c) => c.label.toLowerCase().includes(q.trim().toLowerCase()));

  const open = useCallback(() => {
    if (dlg.current?.open) return;
    opener.current = document.activeElement;
    setQ(""); setSel(0);
    dlg.current?.showModal();
  }, []);
  const close = () => dlg.current?.close();
  const run = (c?: Cmd) => { if (!c) return; close(); c.run(); };

  useEffect(() => {
    document.getElementById(`cmd-${sel}`)?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  useEffect(() => {
    let buf: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      const key = e.key?.toLowerCase();
      if (!key) return;
      if ((e.ctrlKey || e.metaKey) && key === "k") { e.preventDefault(); open(); return; }
      if (dlg.current?.open) return;
      buf = [...buf, key].slice(-KONAMI.length);
      if (buf.join("|") === KONAMI.map((x) => x.toLowerCase()).join("|")) { buf = []; toggleParty(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" onClick={open} aria-label="Open command palette (Ctrl K)" aria-keyshortcuts="Control+K Meta+K" className="btn btn-ghost !px-3 !py-1.5 text-xs">
        <Command size={14} aria-hidden /> <span>Ctrl K</span>
      </button>
      <dialog
        ref={dlg}
        aria-label="Command palette"
        onClose={() => { if (opener.current instanceof HTMLElement) opener.current.focus(); }}
        onClick={(e) => { if (e.target === dlg.current) close(); }}
        className="mx-auto mt-[12vh] w-[min(560px,92vw)] rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-0 text-[var(--fg)]"
      >
        <input
          autoFocus
          value={q}
          onChange={(e) => { setQ(e.target.value); setSel(0); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, shown.length - 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
            else if (e.key === "Enter") { e.preventDefault(); run(shown[sel]); }
          }}
          role="combobox" aria-expanded="true" aria-controls="cmd-list" aria-activedescendant={shown[sel] ? `cmd-${sel}` : undefined}
          aria-label="Type a command" placeholder="Type a command or page..."
          className="w-full rounded-t-2xl border-b border-[var(--line)] bg-transparent px-4 py-3 outline-none placeholder:text-[var(--muted)]"
        />
        <ul id="cmd-list" role="listbox" className="max-h-72 overflow-y-auto p-2">
          {shown.map((c, i) => (
            <li
              key={c.label} id={`cmd-${i}`} role="option" aria-selected={i === sel}
              onMouseEnter={() => setSel(i)} onClick={() => run(c)}
              className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm ${i === sel ? "bg-[color-mix(in_srgb,var(--accent)_20%,transparent)]" : ""}`}
            >
              <span>{c.label}</span>
              <span className={`flex items-center gap-1 text-xs ${i === sel ? "" : "muted"}`}>
                {c.hint} {i === sel && <CornerDownLeft size={12} aria-hidden />}
              </span>
            </li>
          ))}
          {!shown.length && <li className="muted px-3 py-2 text-sm">No matches</li>}
        </ul>
      </dialog>
    </>
  );
}
