import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
      </div>

      <SiteFooter />
    </div>
  );
}
