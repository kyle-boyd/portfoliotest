"use client";

import { useState } from "react";
import { assetUrl } from "@/lib/base-path";
import { Lightbox } from "@/components/lightbox";

type CaseStudyImageProps = {
  src: string;
  alt: string;
  className?: string;
  lightbox?: boolean;
};

export function CaseStudyImage({
  src,
  alt,
  className = "",
  lightbox = false,
}: CaseStudyImageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const resolvedSrc = assetUrl(src);

  const wrapper = (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/15 bg-zinc-900 ${className} ${lightbox ? "cursor-zoom-in" : ""}`}
      {...(lightbox && {
        role: "button",
        tabIndex: 0,
        onClick: () => setLightboxOpen(true),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setLightboxOpen(true);
          }
        },
        "aria-label": `View full size: ${alt}`,
      })}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolvedSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block w-full max-w-full h-auto object-contain"
      />
    </div>
  );

  return (
    <>
      {wrapper}
      {lightbox && lightboxOpen && (
        <Lightbox
          src={resolvedSrc}
          alt={alt}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
