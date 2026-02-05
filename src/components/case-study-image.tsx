type CaseStudyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function CaseStudyImage({
  src,
  alt,
  className = "",
}: CaseStudyImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/15 bg-zinc-900 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block w-full max-w-full h-auto object-contain"
      />
    </div>
  );
}
