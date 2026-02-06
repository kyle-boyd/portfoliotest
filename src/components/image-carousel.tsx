"use client";

import { useRef, useState, useCallback } from "react";
import { CaseStudyImage } from "@/components/case-study-image";

export type ImageCarouselItem = {
  src: string;
  alt?: string;
};

type ImageCarouselProps = {
  items: ImageCarouselItem[] | string[];
  className?: string;
};

function normalizeItems(
  items: ImageCarouselItem[] | string[]
): ImageCarouselItem[] {
  return items.map((item) =>
    typeof item === "string" ? { src: item, alt: "" } : item
  );
}

const SLIDES_PER_VIEW = 1;

export function ImageCarousel({ items: rawItems, className = "" }: ImageCarouselProps) {
  const items = normalizeItems(rawItems);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, items.length - SLIDES_PER_VIEW);
  const canGoPrev = index > 0;
  const canGoNext = index < maxIndex;

  const goPrev = useCallback(() => {
    if (canGoPrev) setIndex((i) => Math.max(0, i - 1));
  }, [canGoPrev]);

  const goNext = useCallback(() => {
    if (canGoNext) setIndex((i) => Math.min(maxIndex, i + 1));
  }, [canGoNext, maxIndex]);

  if (items.length === 0) return null;

  const trackWidthPct = items.length * (100 / SLIDES_PER_VIEW);
  const slideWidthPct = 100 / items.length;
  const transformPct = index * slideWidthPct;

  return (
    <div
      className={`relative w-full ${className}`}
      role="region"
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden w-full">
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-out"
          style={{
            width: `${trackWidthPct}%`,
            transform: `translateX(-${transformPct}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.src + i}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${slideWidthPct}%` }}
              role="group"
              aria-roledescription="slide"
              aria-label={item.alt ? `Slide ${i + 1}: ${item.alt}` : `Slide ${i + 1}`}
            >
              <CaseStudyImage
                src={item.src}
                alt={item.alt ?? ""}
                className="shadow-lg max-w-full"
                lightbox
              />
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-700/95 text-zinc-100 shadow-lg transition hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#080808] disabled:pointer-events-none disabled:opacity-40"
            aria-label="Previous image"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-700/95 text-zinc-100 shadow-lg transition hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#080808] disabled:pointer-events-none disabled:opacity-40"
            aria-label="Next image"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
