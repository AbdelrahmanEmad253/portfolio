import { projects, consulting } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { PageHead } from "@/components/Shell";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <PageHead eyebrow="Projects" title="Work I've built" sub="Production agents and pipelines (under NDA, so described without names), my graduation project, and personal and teaching work." />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} full />)}
      </section>
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <div className="panel p-6">
          <span className="chip">Consulting</span>
          <h3 className="mt-4 text-xl font-bold">{consulting.title}</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm muted">
            {consulting.points.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
