type HeroProps = {
  name: string;
  title: string;
  location: string;
  currentlyAt: string;
};

export function Hero({ name, title, location, currentlyAt }: HeroProps) {
  return (
    <section className="relative z-10 mx-auto flex max-w-[800px] flex-col gap-8 px-6 pb-20 pt-24 sm:px-10 sm:pt-32">
      <div className="space-y-5 text-left">
        <h1
          className="mt-24 text-2xl font-extralight tracking-tight text-zinc-50 sm:text-3xl"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          Hello, I&apos;m Kyle Boyd.{" "}
          <span className="opacity-75">
            I&apos;m a <em>designer</em> building in product &amp; systems for
            enterprise solutions.
          </span>
        </h1>
        <div className="space-y-4 text-[0.98rem] leading-relaxed text-zinc-300/90" style={{ fontFamily: "var(--font-outfit)" }}>
          <p>
            I&apos;m a product designer based in Denver, Colorado with 10+ years
            of experience designing complex systems in both the physical and
            digital realm.
          </p>
          <p>
            I&apos;m currently the lead Designer at CoEnterprise, where I set
            product direction and strategy as well as build the nuts and bolts
            of supply chain analytics tools that are used daily by Fortune 500
            companies to track their goods and information.
          </p>
          <p>
            I specialize in crafting elegant, user-centric solutions for complex
            problems. I believe good design can and should make work feel faster
            and lighter. I thrive in collaborative environments creating systems
            and processes to work efficiently and effectively as a team.
          </p>
        </div>
      </div>
    </section>
  );
}
