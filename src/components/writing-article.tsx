import Link from "next/link";

export type WritingArticleProps = {
  date: string;
  title: string;
  description: string;
  href?: string;
};

export function WritingArticle({ date, title, description, href }: WritingArticleProps) {
  const content = (
    <div className="space-y-2">
      <h3
        className={`text-lg font-semibold text-zinc-100 leading-tight ${
          href ? "transition-colors group-hover:text-zinc-50" : ""
        }`}
        style={{ fontFamily: "var(--font-crimson)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
  );

  const wrapperClassName = `group flex-1 rounded-lg px-4 py-3 transition-colors ${
    href ? "cursor-pointer" : ""
  } hover:bg-zinc-900/60`;

  return (
    <div className="flex gap-8 items-center">
      <div className="flex w-24 flex-shrink-0 items-center self-stretch text-sm text-zinc-400">
        {date}
      </div>
      {href ? (
        <Link href={href} className={wrapperClassName}>
          {content}
        </Link>
      ) : (
        <div className={wrapperClassName}>{content}</div>
      )}
    </div>
  );
}
