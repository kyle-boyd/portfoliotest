"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/base-path";

type BeforeAfterImageProps = {
  oldSrc: string;
  newSrc: string;
  alt?: string;
  className?: string;
};

export function BeforeAfterImage({
  oldSrc,
  newSrc,
  alt = "Before and after comparison",
  className = "",
}: BeforeAfterImageProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging.current) handleMove(e.clientX);
    },
    [handleMove]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (touch) handleMove(touch.clientX);
    },
    [handleMove]
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`group relative cursor-ew-resize overflow-hidden rounded-xl border border-white/15 bg-zinc-900 ${className}`}
      onMouseDown={(e) => {
        handleMouseDown(e);
        if (!(e.target as HTMLElement).closest("[data-slider-handle]")) {
          handleMove(e.clientX);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={position}
      aria-label={alt}
      tabIndex={0}
    >
      <div className="relative aspect-[4/3] w-full">
        {/* After (new) - full background */}
        <div className="absolute inset-0">
          <Image
            src={assetUrl(newSrc)}
            alt={`${alt} (after)`}
            fill
            className="object-contain"
            sizes="900px"
          />
        </div>

        {/* Before (old) - clipped by slider position */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={assetUrl(oldSrc)}
            alt={`${alt} (before)`}
            fill
            className="object-contain object-left"
            sizes="900px"
          />
        </div>

        {/* Slider track and handle */}
        <div
          data-slider-handle
          className="absolute inset-y-0 w-10 cursor-ew-resize select-none touch-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white/80 transition group-hover:bg-white" />
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-zinc-900 shadow-lg transition group-hover:scale-110">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
          Before
        </div>
        <div className="pointer-events-none absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
          After
        </div>
      </div>
    </div>
  );
}
