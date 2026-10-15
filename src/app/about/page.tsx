import { PageHead } from "@/components/Shell";
import { roles } from "@/data/site";

export const metadata = { title: "About" };

const story = [
  ["The degree", "I studied at Alexandria University's Faculty of Science in the SIM program, a department built around games and UI/UX. I spent three years of it pulled toward data instead."],
  ["The books", "Before I had business experience, I had a reading list: 40+ books across 14 corners of business, from strategy to finance to HR. They gave me the language of business before I sat in a business room."],
  ["The data years", "Internships in ML and data science, then my graduation project LearNova, where I led a team of four as Scrum Master and owned all of the data work and the documentation."],
  ["The business", "I co-founded BB Strategy (Build Bold), a strategy consultancy for KSA, where I do pricing, market entry and growth. It taught me to ask what a wrong answer costs before I pick a model."],
  ["The AI engineering", "Today I co-build production LLM agents for the Saudi market and build the data pipelines they run on. I also teach Data and AI to working professionals."],
];

export default function About() {
  return (
    <>
      <PageHead eyebrow="About" title="An engineer who reads the business books" sub="Most AI projects fail on a business question nobody asked. I sit on both sides of that table." />
      <section className="mx-auto max-w-4xl space-y-6 px-4">
        {story.map(([h, t], i) => (
          <div key={h} className="flex gap-5">
            <span className="font-mono accent">0{i + 1}</span>
            <div><h2 className="text-xl font-bold">{h}</h2><p className="muted mt-1 leading-relaxed">{t}</p></div>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-14 grid max-w-6xl gap-4 px-4 sm:grid-cols-3">
        {roles.map((r) => (
          <div key={r.org} className="panel p-5"><p className="font-bold">{r.org}</p><p className="accent text-sm">{r.title}</p><p className="muted mt-2 text-sm">{r.line}</p></div>
        ))}
      </section>
    </>
  );
}
