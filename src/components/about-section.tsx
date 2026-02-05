import Image from "next/image";
import { Section } from "./section";

export type CareerEntry = {
  role: string;
  company: string;
  year: string;
  isCurrent?: boolean;
};

export type AboutSectionProps = {
  /** Big statement lines (one per item, displayed as headlines) */
  narrative: string[];
  /** Optional image (e.g. personal photo) */
  imageSrc?: string;
  /** Caption for the image */
  imageCaption?: string;
  /** Career timeline entries */
  career: CareerEntry[];
};

export function AboutSection({
  narrative,
  imageSrc,
  imageCaption,
  career,
}: AboutSectionProps) {
  return (
    <Section id="about" title="About" heroStyle>
      <div className="space-y-10 sm:space-y-14">
        {/* Narrative + image: text left, image right */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex-1 space-y-6 sm:space-y-8">
            {narrative.map((line, i) => (
              <p
                key={i}
                className="text-base text-zinc-50"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {line}
              </p>
            ))}
          </div>

          {imageSrc && (
            <figure className="shrink-0 space-y-2 sm:w-[280px]">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70">
                <Image
                  src={imageSrc}
                  alt={imageCaption ?? "Personal photo"}
                  width={400}
                  height={267}
                  className="w-full object-cover"
                  sizes="280px"
                />
              </div>
              {imageCaption && (
                <figcaption className="text-sm text-zinc-400">
                  {imageCaption}
                </figcaption>
              )}
            </figure>
          )}
        </div>

        {/* Career timeline */}
        <div>
          <p
            className="mb-6 text-lg font-extralight text-zinc-400/90 sm:text-xl"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Though I&apos;ve been working for a while, here&apos;s a quick glance
            at the last few years.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {career.map((entry, i) => (
              <div
                key={i}
                className="group flex flex-col gap-1 rounded-[18px] border border-white/10 bg-zinc-950/70 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.5)] transition-colors hover:bg-zinc-900/60 hover:border-white/15"
              >
                <span className="text-[0.65rem] font-medium tracking-[0.14em] text-zinc-400">
                  {entry.year}
                  {entry.isCurrent ? " - Present" : ""}
                </span>
                <span
                  className="text-base font-semibold text-zinc-100 sm:text-lg"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  {entry.role}
                </span>
                <span className="text-sm text-zinc-300/90">{entry.company}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
