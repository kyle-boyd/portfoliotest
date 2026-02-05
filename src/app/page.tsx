import { ConnectSection, ConnectLinks } from "@/components/connect-section";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ToolsSection } from "@/components/tools-section";
import { getSelectedWork } from "@/data/case-studies";
import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: "Kyle Boyd — Product Designer",
  description:
    "Product designer based in Denver, Colorado. Building in product & systems for enterprise solutions.",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] text-zinc-100">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-260px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.32),_transparent_60%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[800px] flex-col pb-16">
        <SiteHeader />

        <Hero
          name="Kyle Boyd"
          title="Product Designer"
          location="Denver, Colorado"
          currentlyAt="CoEnterprise"
        />

        <ConnectLinks />

        <Section
          id="work"
          title="Work"
          subtitle="See case studies of some projects that I have worked on."
          viewAllHref="/work"
          heroStyle
        >
          <div className="grid grid-cols-1 gap-24 md:grid-cols-1">
            {getSelectedWork().slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Section>

        <ToolsSection />

        <ConnectSection />
      </div>

      <SiteFooter />
    </div>
  );
}
