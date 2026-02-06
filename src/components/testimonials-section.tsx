import { Section } from "./section";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section id="testimonials" title="What people say">
      <div className="space-y-8">
        {TESTIMONIALS.map((t, i) => (
          <blockquote
            key={i}
            className="rounded-xl border border-white/10 bg-zinc-950/70 px-6 py-5"
          >
            <p
              className="text-base italic text-zinc-300"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-4">
              <p className="text-sm font-semibold text-zinc-100">{t.name}</p>
              <p className="text-sm text-zinc-400">
                {t.title}
                {t.company && ` · ${t.company}`}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
