import { PageHead } from "@/components/Shell";
import { site } from "@/data/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  const items = [
    ["Email", site.email, `mailto:${site.email}`],
    ["LinkedIn", "abdelrahmanelsheriff", site.linkedin],
    ["GitHub", "AbdelrahmanEmad253", site.github],
  ];
  return (
    <>
      <PageHead eyebrow="Contact" title="Let's talk" sub="Open to AI Engineer and Data Scientist roles (KSA/GCC, Egypt, remote), and to conversations with founders building with AI." />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3">
        {items.map(([k, v, href]) => (
          <a key={k} href={href} target="_blank" rel="noreferrer" className="panel block p-6 hover:border-[var(--accent)]">
            <p className="muted text-sm">{k}</p><p className="mt-1 break-all font-semibold">{v}</p>
          </a>
        ))}
      </section>
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap gap-3 px-4">
        <a href={site.resumeAI} className="btn btn-primary">Download resume (AI Engineer)</a>
        <a href={site.resumeDS} className="btn btn-ghost">Download resume (Data Scientist)</a>
      </div>
    </>
  );
}
