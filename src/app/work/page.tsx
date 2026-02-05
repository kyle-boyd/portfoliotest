import { getSelectedWork } from "@/data/case-studies";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function WorkPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] text-zinc-100">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-260px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.32),_transparent_60%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[800px] flex-col pb-16">
        <SiteHeader />

        <Section
          id="work"
          title="Work"
          subtitle="See case studies of some projects that I have worked on."
          heroStyle
        >
          <div className="grid grid-cols-1 gap-24 md:grid-cols-1">
            {getSelectedWork().map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Section>
      </div>

      <SiteFooter />
    </div>
  );
}
