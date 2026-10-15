import { BookOpen, Bot, Briefcase, Database, School, type LucideIcon } from "lucide-react";
import { PageHead } from "@/components/Shell";
import { Portrait } from "@/components/Portrait";
import { roles } from "@/data/site";

export const metadata = { title: "About" };

const story: [string, string, LucideIcon][] = [
  ["The degree", "I studied at Alexandria University's Faculty of Science in the SIM program, a department built around games and UI/UX. I spent three years of it pulled toward data instead.", School],
  ["The books", "Before I had business experience, I had a reading list: 40+ books across 14 corners of business, from strategy to finance to HR. They gave me the language of business before I sat in a business room.", BookOpen],
  ["The data years", "Internships in ML and data science, then LearNova, where I led a team of four as Scrum Master and owned all of the data work and the documentation.", Database],
  ["The business", "I co-founded BB Strategy (Build Bold), a strategy consultancy for KSA, where I do pricing, market entry and growth. It taught me to ask what a wrong answer costs before I pick a model.", Briefcase],
  ["The AI engineering", "Today I co-build production LLM agents for the Saudi market and build the data pipelines they run on. I also teach Data and AI to working professionals.", Bot],
];

export default function About() {
  return (
    <>
      <PageHead
        title="An engineer who reads the business books"
        sub="Most AI projects fail on a business question nobody asked. I sit on both sides of that table."
        aside={<div className="w-40 shrink-0"><Portrait caption={false} /></div>}
      />
      <ol className="relative mx-auto max-w-4xl space-y-10 px-4 before:absolute before:bottom-4 before:left-[35px] before:top-4 before:w-px before:bg-[var(--line)] before:content-['']">
        {story.map(([h, t, Icon], i) => (
          <li key={h} className="relative flex gap-5">
            <span className="ico relative z-10 shrink-0 border border-[var(--line)] bg-[var(--bg)]"><Icon size={20} aria-hidden /></span>
            <div><h2 className="text-xl font-bold"><span className="muted stat mr-2 text-base">{i + 1}</span>{h}</h2><p className="muted mt-1 max-w-[65ch] leading-relaxed">{t}</p></div>
          </li>
        ))}
      </ol>
      <section className="mx-auto mt-20 grid max-w-6xl gap-4 px-4 sm:grid-cols-3">
        {roles.map((r) => (
          <div key={r.org} className="panel p-5"><p className="font-bold">{r.org}</p><p className="accent text-sm">{r.title}</p><p className="muted mt-2 text-sm">{r.line}</p></div>
        ))}
      </section>
    </>
  );
}
