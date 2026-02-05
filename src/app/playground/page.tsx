import { PLAYGROUND_PROJECTS } from "@/data/playground";
import { MiniProjectCard } from "@/components/mini-project-card";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PlaygroundPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] text-zinc-100">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-260px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.32),_transparent_60%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[800px] flex-col pb-16">
        <SiteHeader />

        <Section
          id="playground"
          title="Exploration & Side Projects"
          subtitle="Snapshots, explorations, and side-projects."
          heroStyle
        >
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {PLAYGROUND_PROJECTS.map((project) => (
              <MiniProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>
      </div>

      <SiteFooter />
    </div>
  );
}
