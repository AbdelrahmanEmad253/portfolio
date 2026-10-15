"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export type ShelfBook = { title: string; author: string; phase: number };
const colors = ["#6C7CFF", "#EEF1F7", "#93A0B8", "#FFC857", "#AEB8FF"];

export function Bookshelf({ books, phases }: { books: ShelfBook[]; phases: { n: number; title: string }[] }) {
  const [phase, setPhase] = useState(0);
  const [q, setQ] = useState("");
  const s = q.trim().toLowerCase();
  const shown = books.filter((b) => (!phase || b.phase === phase) && (!s || `${b.title} ${b.author}`.toLowerCase().includes(s)));
  return (
    <section aria-labelledby="shelf" className="mx-auto mt-24 max-w-6xl px-4">
      <h2 id="shelf" className="display text-4xl sm:text-5xl">Bookshelf</h2>
      <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter books by phase">
        {[{ n: 0, title: "All" }, ...phases].map((p) => (
          <button key={p.n} type="button" className="chip !px-3 !py-1 !text-sm" aria-pressed={phase === p.n} onClick={() => setPhase(p.n)}>
            {p.n ? `${p.n}. ` : ""}{p.title}
          </button>
        ))}
        <label className="relative ml-auto">
          <span className="sr-only">Search books by title or author</span>
          <Search size={14} aria-hidden className="muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title or author"
            className="w-56 rounded-lg border border-[var(--line)] bg-[var(--panel)] py-1.5 pl-8 pr-3 text-sm placeholder:text-[var(--muted)]" />
        </label>
      </div>
      <p role="status" className="muted mt-3 text-sm">{shown.length} of {books.length} books</p>
      {!shown.length && <p className="muted mt-6">No books match. Try another word.</p>}
      <ul className="mt-4 flex flex-wrap items-end gap-2 border-b-8 border-[var(--line)] pb-0">
        {shown.map((b) => (
          <li key={`${b.phase}|${b.title}`} className="spine px-1.5 py-3 text-xs"
            style={{ background: colors[(b.title.length + b.phase) % colors.length], height: 190 + ((b.title.length * 7 + b.phase * 13) % 5) * 14 }}>
            <span className="font-bold">{b.title}</span> <span className="opacity-80">· {b.author}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
