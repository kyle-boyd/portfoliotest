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

export function ConnectSection() {
  return (
    <Section id="connect" title="Connect">
      <p className="text-base text-zinc-50" style={{ fontFamily: "var(--font-outfit)" }}>
        You can get in touch with me at{" "}
        <a
          href="mailto:kyle.boyd@gmail.com"
          className="underline decoration-zinc-500 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-400"
        >
          kyle.boyd@gmail.com
        </a>
      </p>
    </Section>
  );
}
