import Link from "next/link";
import { assetUrl } from "@/lib/base-path";
import { Section } from "./section";
import { LinkWithPreview } from "./link-with-preview";

export function ConnectLinks() {
  return (
    <p className="flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 text-base text-zinc-50 sm:px-10" style={{ fontFamily: "var(--font-outfit)" }}>
      <LinkWithPreview
        href="https://www.linkedin.com/in/kyle-boyd-design/"
        label="LinkedIn"
        variant="linkedin"
      />
      <LinkWithPreview
        href={assetUrl("/images/kyleboyd_resume.pdf")}
        label="Resume"
        variant="resume"
      />
    </p>
  );
}

const DEFAULT_AVAILABILITY = "Open to Senior and Lead Product Designer roles.";
const DEFAULT_PRIMARY_CTA = { label: "View resume", href: "/images/kyleboyd_resume.pdf" };

type ConnectSectionProps = {
  availabilityStatement?: string;
  primaryCta?: { label: string; href: string };
};

export function ConnectSection({
  availabilityStatement = DEFAULT_AVAILABILITY,
  primaryCta = DEFAULT_PRIMARY_CTA,
}: ConnectSectionProps = {}) {
  const primaryHref = primaryCta.href.startsWith("/") ? assetUrl(primaryCta.href) : primaryCta.href;

  return (
    <Section id="connect" title="Connect">
      <div className="space-y-6">
        <p
          className="text-base font-medium text-zinc-100"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {availabilityStatement}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {primaryCta.label}
          </Link>
          <a
            href="mailto:kyle.boyd@gmail.com"
            className="inline-flex items-center rounded-full border border-zinc-500/60 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-400 hover:bg-zinc-800/50"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Get in touch
          </a>
        </div>
        <p className="text-base text-zinc-400" style={{ fontFamily: "var(--font-outfit)" }}>
          Or reach me at{" "}
          <a
            href="mailto:kyle.boyd@gmail.com"
            className="underline decoration-zinc-500 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-400"
          >
            kyle.boyd@gmail.com
          </a>
        </p>
      </div>
    </Section>
  );
}
