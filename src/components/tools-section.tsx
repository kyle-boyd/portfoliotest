import { assetUrl } from "@/lib/base-path";
import { Section } from "./section";

const TOOLS = [
  { name: "Figma", src: "https://cdn.simpleicons.org/figma/F24E1E", href: "https://figma.com" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg", href: "https://chat.openai.com" },
  { name: "Gemini", src: "https://cdn.simpleicons.org/googlegemini/4285F4", href: "https://gemini.google.com" },
  { name: "Cursor", src: "https://cdn.simpleicons.org/cursor/d4d4d8", href: "https://cursor.com" },
  { name: "v0", src: "https://cdn.simpleicons.org/v0/d4d4d8", href: "https://v0.dev" },
  { name: "Loom", src: "https://cdn.simpleicons.org/loom/625df5", href: "https://loom.com" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion/d4d4d8", href: "https://notion.so" },
] as const;

function ToolLogo({ name, src, href }: (typeof TOOLS)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/70 p-2.5 transition-colors hover:border-white/20 hover:bg-zinc-900/60"
      title={name}
      aria-label={name}
    >
      <img
        src={assetUrl(src)}
        alt={name}
        className="h-full w-full object-contain opacity-90"
      />
    </a>
  );
}

export function ToolsSection() {
  return (
    <Section id="tools" title="Tools">
      <div className="flex flex-wrap gap-3">
        {TOOLS.map((tool) => (
          <ToolLogo key={tool.name} {...tool} />
        ))}
      </div>
    </Section>
  );
}
