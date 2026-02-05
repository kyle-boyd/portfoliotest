import { WRITING_ARTICLES } from "@/data/writing";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WritingArticle } from "@/components/writing-article";

export default function WritingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] text-zinc-100">
      <div className="pointer-events-none absolute inset-x-[-10%] top-[-260px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.32),_transparent_60%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[800px] flex-col pb-16">
        <SiteHeader />

        <Section
          id="writing"
          title="Writing"
          subtitle="I find writing to be another way to express creative ideas. I am not a natural writer, but the process of pen to paper is a process that helps to unlock other elements of my design brain."
          heroStyle
        >
          <div className="space-y-2">
            {WRITING_ARTICLES.map((article) => (
              <WritingArticle key={article.title} {...article} />
            ))}
          </div>
        </Section>
      </div>

      <SiteFooter />
    </div>
  );
}
