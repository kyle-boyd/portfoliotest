import { AboutSection } from "@/components/about-section";
import { ConnectSection, ConnectLinks } from "@/components/connect-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ToolsSection } from "@/components/tools-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assetUrl } from "@/lib/base-path";

export const metadata = {
  title: "About — Kyle Boyd",
  description: "A bit about who I am, my path in design, and how to get in touch.",
};

const ABOUT_NARRATIVE = [
  "I'm Kyle! With over a decade of design experience spanning digital applications to architecture, I specialize in crafting elegant, user-centric solutions for complex problems. I thrive in collaborative environments creating systems and processes to work efficiently and effectively as a team.",
  "In my free time I enjoy soccer, bike packing, spending time with my young family, and trying to escape the ever-present glowing screens by heading outside.",
];

const ABOUT_CAREER = [
  { role: "Lead Designer", company: "CoEnterprise", year: "2025", isCurrent: true },
  { role: "Sr. Product Designer", company: "Acelab", year: "2024-2025" },
  { role: "Senior Product Designer", company: "Google x Outer Labs", year: "2022-2024" },
  { role: "Experience Designer - Physical Environments", company: "Various architecture firms", year: "2015-2022" },
];

const ABOUT_OPERATING_SYSTEM = [
  "Design review cadence: I run regular design critiques to align on craft and direction, and use async feedback loops so distributed teams stay in sync.",
  "Collaboration model: I partner closely with PM and engineering from discovery through launch—sharing Figma early, documenting decisions, and aligning on tradeoffs.",
  "Mentoring & onboarding: I create design documentation and component libraries that help new designers ramp quickly and maintain consistency across the product.",
  "Raising team quality: At Acelab I advocated for and built a design system that reduced handoff friction and scaled design quality across the application.",
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] text-zinc-100">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-260px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.32),_transparent_60%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[800px] flex-col pb-16">
        <SiteHeader />

        <AboutSection
          narrative={ABOUT_NARRATIVE}
          imageSrc={assetUrl("/images/hiking.jpeg")}
          imageCaption="Hiking in the Rockies (I'm the one on the right)"
          career={ABOUT_CAREER}
          operatingSystem={ABOUT_OPERATING_SYSTEM}
        />

        <ConnectLinks />

        <ToolsSection />

        <TestimonialsSection />

        <ConnectSection />
      </div>

      <SiteFooter />
    </div>
  );
}
