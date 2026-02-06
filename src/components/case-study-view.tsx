import Link from "next/link";
import type { CaseStudy, CaseStudyMeta, CaseStudySection } from "@/data/case-studies";
import { BeforeAfterImage } from "@/components/before-after-image";
import { CaseStudyImage } from "@/components/case-study-image";
import { ImageCarousel } from "@/components/image-carousel";

function BodyWithBold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((segment, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-zinc-100">
            {segment}
          </strong>
        ) : (
          segment
        )
      )}
    </>
  );
}

type CaseStudyViewProps = {
  study: CaseStudy;
  nextProject?: { slug: string; title: string };
};

function MetaGrid({ meta }: { meta: CaseStudyMeta }) {
  const items = [
    { label: "Role", value: meta.role },
    meta.client && { label: "Client", value: meta.client },
    meta.employer && { label: "Employer", value: meta.employer },
    { label: "Focus areas", value: meta.areas },
    meta.teamScope && { label: "Team scope", value: meta.teamScope },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {items.map(({ label, value }) => (
        <div
          key={label}
          className={label === "Team scope" ? "col-span-2 sm:col-span-4" : undefined}
        >
          <div className="space-y-1">
            <p className="text-sm font-medium tracking-wider text-zinc-400">
              {label}
            </p>
            <p className="text-base font-medium text-zinc-200">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Red screenshot: light pink rounded square, dark red circled X inside */
function ProblemXIcon() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFEEEE] mt-3 mb-3"
      aria-hidden
    >
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#b91c1c] text-[rgba(255,194,194,1)]">
        <svg
          width="10"
          height="10"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M2 2l10 10M12 2L2 12" />
        </svg>
      </span>
    </span>
  );
}

/* Green screenshot: light green rounded square, darker green circle + checkmark inside */
function OutcomeCheckIcon() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40"
      aria-hidden
    >
      <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-emerald-600 text-emerald-600 dark:border-emerald-500 dark:text-emerald-500">
        <svg
          width="10"
          height="10"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 7l3.5 3.5L12 3" />
        </svg>
      </span>
    </span>
  );
}

const itemGridClasses =
  "grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 max-w-[900px]";

const itemRowClasses = "flex gap-4";

function isTitleOnlySection(section: CaseStudySection): boolean {
  return (
    section.body === "" &&
    !section.image &&
    !section.problems?.length &&
    !section.outcomes?.length &&
    !section.beforeAfter &&
    !section.images?.length
  );
}

function SectionBlock({
  section,
  isGroupTitle,
  compactTop,
}: {
  section: CaseStudySection;
  isGroupTitle?: boolean;
  compactTop?: boolean;
}) {
  const hasProblems = section.problems && section.problems.length > 0;
  const hasOutcomes = section.outcomes && section.outcomes.length > 0;
  const isDesignResponse = section.layout === "design-response";
  const imageOnRight = section.imagePosition !== "left";

  if (isGroupTitle) {
    return (
      <section className="pb-4 pt-12 sm:pt-16">
        <h2
          className="text-[28px] font-semibold leading-tight text-zinc-50 sm:text-[24px]"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {section.title}
        </h2>
      </section>
    );
  }

  const sectionPadding = compactTop ? "pt-6 sm:pt-8 pb-12 sm:pb-16" : "py-12 sm:py-16";

  return (
    <section className={`space-y-4 ${sectionPadding}`}>
      <div className="space-y-3">
        {!isDesignResponse && (
          <h3
            className="text-[24px] font-semibold text-zinc-50 mt-6 mb-6"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            {section.title}
          </h3>
        )}
        {isDesignResponse ? (
          <div
            className={`flex flex-col gap-8 sm:gap-12 max-w-[900px] sm:flex-row sm:items-start ${
              imageOnRight ? "" : "sm:flex-row-reverse"
            }`}
          >
            <div className="min-w-0 flex-1 space-y-4">
              <h3
                className="text-[24px] font-semibold text-zinc-50"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                {section.title}
              </h3>
              <p className="text-base leading-relaxed text-zinc-300 whitespace-pre-line">
                <BodyWithBold text={section.body} />
              </p>
            </div>
            <div className="min-w-0 flex-1 space-y-2">
              {section.image && (
                <CaseStudyImage
                  src={section.image}
                  alt={section.caption || section.title}
                  lightbox
                />
              )}
              {section.caption && (
                <p className="text-sm text-zinc-400">{section.caption}</p>
              )}
            </div>
          </div>
        ) : hasProblems ? (
          <>
            {section.intro && (
              <p className="text-base leading-relaxed text-zinc-300 max-w-[900px]">
                {section.intro}
              </p>
            )}
            <div className={itemGridClasses}>
              {section.problems!.map((problem, i) => (
                <div key={i} className={itemRowClasses}>
                  <ProblemXIcon />
                  <div className="min-w-0 space-y-1">
                    <p className="font-bold text-zinc-100">{problem.title}</p>
                    <p className="text-base leading-relaxed text-zinc-300">
                      {problem.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {section.bodyTail && (
              <p className="text-base leading-relaxed text-zinc-300 max-w-[900px] pt-2">
                {section.bodyTail}
              </p>
            )}
          </>
        ) : hasOutcomes ? (
          <div className={itemGridClasses}>
            {section.outcomes!.map((outcome, i) => (
              <div key={i} className={itemRowClasses}>
                <OutcomeCheckIcon />
                <div className="min-w-0 space-y-1">
                  <p className="font-bold text-zinc-100">{outcome.title}</p>
                  <p className="text-base leading-relaxed text-zinc-300">
                    {outcome.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-base leading-relaxed text-zinc-300 whitespace-pre-line max-w-[900px]">
            <BodyWithBold text={section.body} />
          </p>
        )}
      </div>
      {!isDesignResponse &&
        (section.beforeAfter ||
          (section.images && section.images.length > 1) ||
          section.image) && (
          <div className="space-y-2 pt-6">
            {section.beforeAfter ? (
              <BeforeAfterImage
                oldSrc={section.beforeAfter.old}
                newSrc={section.beforeAfter.new}
                alt={section.caption || section.title}
              />
            ) : section.images && section.images.length > 1 ? (
              <div className="relative left-1/2 w-[75vw] max-w-[1200px] -translate-x-1/2 px-4 sm:px-6">
                <ImageCarousel
                  items={section.images.map((src) => ({
                    src,
                    alt: section.caption || section.title,
                  }))}
                />
              </div>
            ) : section.image ? (
              <CaseStudyImage
                src={section.image}
                alt={section.caption || section.title}
                lightbox
              />
            ) : null}
            {section.caption && (
              <p className="text-sm text-zinc-400">{section.caption}</p>
            )}
          </div>
        )}
    </section>
  );
}

export function CaseStudyView({ study, nextProject }: CaseStudyViewProps) {
  const { hero, meta, sections } = study;

  return (
    <article className="min-h-screen overflow-x-hidden bg-[#080808] text-zinc-100">
      <div className="mx-auto max-w-[900px] px-6 pb-24 pt-28 sm:px-10 sm:pt-32">
        {/* Back link */}
        <Link
          href="/#work"
          className="mb-12 inline-flex items-center text-xs font-medium tracking-wider text-zinc-400 transition hover:text-zinc-200"
        >
          <span className="mr-2">←</span>
          Home
        </Link>

        {/* Hero */}
        <header className="space-y-4 pb-0">
          <h1
            className="my-16 text-[32px] font-semibold leading-tight text-zinc-50"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            {hero.subtitle}
          </h1>
          {study.impact && (study.impact.outcomes?.length || study.impact.measurement) ? (
            <div className="max-w-[900px] space-y-4">
              <h3
                className="text-[20px] font-semibold text-zinc-50"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Impact & measurement
              </h3>
              {study.impact.outcomes && study.impact.outcomes.length > 0 && (
                <div className={`${itemGridClasses}`}>
                  {study.impact.outcomes.map((outcome, i) => (
                    <div key={i} className={itemRowClasses}>
                      <OutcomeCheckIcon />
                      <div className="min-w-0 space-y-1">
                        <p className="font-bold text-zinc-100">{outcome.title}</p>
                        <p className="text-base leading-relaxed text-zinc-300">
                          {outcome.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {study.impact.measurement && (
                <p className="text-sm text-zinc-400">
                  <em>{study.impact.measurement}</em>
                </p>
              )}
            </div>
          ) : null}
        </header>

        {/* Meta */}
        <div className="border-t border-white/10 py-8">
          <MetaGrid meta={meta} />
        </div>

        {/* Sections */}
        <div>
          {sections.map((section, i) => {
            const prev = sections[i - 1];
            const next = sections[i + 1];
            const isGroupTitle =
              isTitleOnlySection(section) && next?.layout === "design-response";
            const showTopDivider =
              i > 0 &&
              !(
                section.layout === "design-response" &&
                (prev?.layout === "design-response" || isTitleOnlySection(prev))
              );
            const compactTop =
              section.layout === "design-response" &&
              !showTopDivider &&
              i > 0;

            return (
              <div
                key={i}
                className={showTopDivider ? "border-t border-white/10" : undefined}
              >
                <SectionBlock
                  section={section}
                  isGroupTitle={isGroupTitle}
                  compactTop={compactTop}
                />
              </div>
            );
          })}
        </div>

        {/* Go to next project */}
        {nextProject && (
          <div className="mt-16 flex justify-end">
            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center text-sm font-medium tracking-wider text-zinc-400 transition hover:text-zinc-200"
            >
              Go to next project ({nextProject.title})
              <span className="ml-2">→</span>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
