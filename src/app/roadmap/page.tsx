import Link from "next/link";
import { aiRoadmap, tips, tools } from "@/data/roadmap";
import { PageHead } from "@/components/Shell";
import { RoadmapTracker } from "@/components/RoadmapTracker";

export const metadata = { title: "AI Engineer Roadmap" };

export default function Roadmap() {
  const cats = aiRoadmap.reduce((a, p) => a + p.categories.length, 0);
  const topics = aiRoadmap.reduce((a, p) => a + p.categories.reduce((b, c) => b + c.topics.length, 0), 0);
  const res = aiRoadmap.reduce((a, p) => a + p.categories.reduce((b, c) => b + c.resources.length, 0), 0);
  const stats = (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[["Phases", aiRoadmap.length], ["Categories", cats], ["Topics", topics], ["Resources", res]].map(([k, v]) => (
        <div key={k} className="panel p-4"><p className="stat text-4xl font-bold">{v}</p><p className="muted text-sm">{k}</p></div>
      ))}
    </div>
  );
  return (
    <>
      <PageHead title="AI Engineer Roadmap" sub="Software engineering first, then just enough AI to build reliable products, then the habits that keep you current. This is the route I walk and teach." />
      <RoadmapTracker phases={aiRoadmap} stats={stats} />
      <section className="mx-auto mt-20 grid max-w-6xl gap-4 px-4 md:grid-cols-2">
        <div className="panel p-6">
          <h3 className="text-lg font-bold">Learning tips</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm muted">{tips.map((t) => <li key={t}>{t}</li>)}</ol>
        </div>
        <div className="panel p-6">
          <h3 className="text-lg font-bold">Essential tools</h3>
          <dl className="mt-3 space-y-2 text-sm">{tools.map((t) => <div key={t.k} className="flex gap-3"><dt className="w-16 shrink-0 font-semibold">{t.k}</dt><dd className="muted">{t.v}</dd></div>)}</dl>
        </div>
      </section>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-3 px-4">
        <Link href="/projects" className="btn btn-primary" data-magnetic>View my projects</Link>
        <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
      </div>
    </>
  );
}
