import { ExternalLink, FileText, Mail, type LucideIcon } from "lucide-react";
import { PageHead } from "@/components/Shell";
import { site } from "@/data/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  const items: [string, string, string, LucideIcon, string][] = [
    ["Email", site.email, `mailto:${site.email}`, Mail, "sm:col-span-3"],
    ["LinkedIn", "abdelrahmanelsheriff", site.linkedin, ExternalLink, "sm:col-span-2"],
    ["GitHub", "AbdelrahmanEmad253", site.github, ExternalLink, "sm:col-span-2"],
  ];
  return (
    <>
      <PageHead big title="Let's talk" sub="Open to AI Engineer and Data Scientist roles (KSA/GCC, Egypt, remote), and to conversations with founders building with AI." />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-7">
        {items.map(([k, v, href, Icon, span]) => (
          <a key={k} href={href} target="_blank" rel="noreferrer" className={`panel block p-6 hover:border-[var(--fg)] ${span}`}>
            <span className="ico"><Icon size={20} aria-hidden /></span>
            <p className="muted mt-4 text-sm">{k}</p><p className="mt-1 break-all font-semibold">{v}</p>
          </a>
        ))}
      </section>
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap gap-3 px-4">
        <a href={site.resumeAI} className="btn btn-primary" data-magnetic><FileText size={16} aria-hidden />Download resume (AI Engineer)</a>
        <a href={site.resumeDS} className="btn btn-ghost"><FileText size={16} aria-hidden />Download resume (Data Scientist)</a>
      </div>
    </>
  );
}
