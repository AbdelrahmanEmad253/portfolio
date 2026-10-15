import Link from "next/link";
import { foundersRoadmap } from "@/data/founders";
import { PageHead } from "@/components/Shell";
import { Bookshelf } from "@/components/Bookshelf";

export const metadata = { title: "Founders Roadmap" };

export default function Founders() {
  const books = foundersRoadmap.reduce((a, p) => a + p.books.length, 0);
  const shelf = foundersRoadmap.flatMap((p) => p.books.map((b) => ({ ...b, phase: p.n })));
  return (
    <>
      <PageHead title="Thinking Like a Business Person in the AI Era" sub="Before I had business experience, I had books. These are the 14 corners of business I studied, merged into 7 phases. Each one gets an AI lens: what to automate, what to measure, and what to keep human." />
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-4">
        {[["Phases", foundersRoadmap.length], ["Aspects", 14], ["Books", books]].map(([k, v]) => (
          <div key={k} className="panel p-4"><p className="stat text-4xl font-bold">{v}</p><p className="muted text-sm">{k}</p></div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl space-y-6 px-4 pt-10">
        {foundersRoadmap.map((p) => (
          <section key={p.n} className="panel p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="muted stat text-sm">Phase {p.n}</span>
              <h2 className="text-2xl font-bold">{p.title}</h2>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">{p.aspects.map((a) => <span key={a} className="chip">{a}</span>)}</div>
            <p className="muted mt-3 max-w-[65ch]">{p.why}</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold">Key lessons</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{p.lessons.map((l) => <li key={l}>{l}</li>)}</ul>
              </div>
              <div className="rounded-lg bg-[var(--bg)] p-4 text-sm">
                <h3 className="accent text-sm font-semibold">AI lens</h3>
                <p className="mt-2"><b>Automate:</b> <span className="muted">{p.ai.automate}</span></p>
                <p className="mt-1"><b>Measure:</b> <span className="muted">{p.ai.measure}</span></p>
                <p className="mt-1"><b>Keep human:</b> <span className="muted">{p.ai.keepHuman}</span></p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Bookshelf books={shelf} phases={foundersRoadmap.map((p) => ({ n: p.n, title: p.title }))} />
      <div className="mx-auto mt-16 max-w-6xl px-4">
        <div className="panel p-6">
          <p className="font-bold">I write one of these lessons every week on LinkedIn.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/abdelrahmanelsheriff" target="_blank" rel="noreferrer" className="btn btn-primary" data-magnetic>Follow on LinkedIn</a>
            <Link href="/contact" className="btn btn-ghost">Work with me</Link>
          </div>
        </div>
      </div>
    </>
  );
}
