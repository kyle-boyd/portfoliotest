import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CASE_STUDY_SLUGS, getCaseStudy } from "@/data/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Work" };
  return {
    title: `${study.hero.title} | Kyle Boyd`,
    description: study.hero.description,
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const currentIndex = CASE_STUDY_SLUGS.indexOf(slug as (typeof CASE_STUDY_SLUGS)[number]);
  const nextSlug =
    currentIndex >= 0 && currentIndex < CASE_STUDY_SLUGS.length - 1
      ? CASE_STUDY_SLUGS[currentIndex + 1]
      : null;
  const nextStudy = nextSlug ? getCaseStudy(nextSlug) : null;
  const nextProject =
    nextStudy && nextSlug
      ? { slug: nextSlug, title: nextStudy.hero.title }
      : undefined;

  return (
    <div className="relative min-h-screen bg-[#080808] text-zinc-100">
      <SiteHeader />
      <CaseStudyView study={study} nextProject={nextProject} />
      <SiteFooter />
    </div>
  );
}
