"use client";

import { assetUrl } from "@/lib/base-path";
import Link from "next/link";
import { useRef, type RefObject } from "react";

export type ProjectCardProps = {
  title: string;
  client: string;
  description: string;
  year: string;
  scope: string;
  platform: string;
  href?: string;
  image?: string; // Per-project hero image for the card
  themeColor?: string; // Hex color for glow effect (e.g., "#ffa100")
};

// Figma image asset for the case study card.
// This is a temporary shared image until per-project artwork is wired up.
const CASE_STUDY_IMAGE = "/case-study-image.png";

export function ProjectCard({
  title,
  client,
  description,
  year,
  scope,
  platform,
  href,
  image,
  themeColor = "#ffa100",
}: ProjectCardProps) {
  const imageSrc = image ?? CASE_STUDY_IMAGE;

  // Convert hex to RGB for glow effect
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 255, g: 161, b: 0 };
  };

  const rgb = hexToRgb(themeColor);
  const outerGlowRef = useRef<HTMLDivElement>(null);
  const innerGlowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (outerGlowRef.current) {
      outerGlowRef.current.style.boxShadow = `0 0 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3), 0 0 40px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`;
    }
    if (innerGlowRef.current) {
      innerGlowRef.current.style.boxShadow = `0 0 15px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25), 0 0 30px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`;
    }
  };

  const handleMouseLeave = () => {
    if (outerGlowRef.current) {
      outerGlowRef.current.style.boxShadow = `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`;
    }
    if (innerGlowRef.current) {
      innerGlowRef.current.style.boxShadow = `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`;
    }
  };

  const cardClassName =
    "group relative flex flex-col gap-5 rounded-[24px] bg-zinc-950/70 p-0 shadow-[0_18px_60px_rgba(0,0,0,0.85)] transition-shadow duration-300 cursor-pointer";

  const content = (
    <>
      {/* Type pills row (right aligned) */}
      <div className="relative z-10 flex justify-end">
        <div className="flex flex-wrap gap-2 text-[0.65rem] font-medium tracking-[0.16em] text-zinc-200/90">
          {scope && (
            <span className="rounded-md bg-zinc-900/70 px-3 py-1">
              {scope}
            </span>
          )}
          {platform && (
            <span className="rounded-md bg-zinc-900/70 px-3 py-1">
              {platform}
            </span>
          )}
          {year && (
            <span className="rounded-md bg-zinc-900/70 px-3 py-1">
              {year}
            </span>
          )}
        </div>
      </div>

      {/* Image card */}
      <div
        ref={outerGlowRef}
        className="relative rounded-[18px] bg-zinc-900/60 p-2 border border-white/15 transition-[box-shadow] duration-300"
        style={{
          boxShadow: `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`,
        }}
      >
        <div
          ref={innerGlowRef}
          className="relative aspect-[2880/1808] rounded-[10px] transition-[box-shadow] duration-300"
          style={{
            boxShadow: `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`,
          }}
        >
          <img
            src={assetUrl(imageSrc)}
            alt={title}
            className="project-card-image size-full object-cover transition-all duration-300 border border-white/15 rounded-[10px]"
          />
        </div>
      </div>

      {/* Description block */}
      <div className="relative z-10 space-y-2 pt-1 text-zinc-200">
        <h3
          className="text-[24px] font-semibold text-zinc-50"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {title}
        </h3>
        <p className="text-xs text-zinc-300/90">{client}</p>
        <p className="text-[16px] text-zinc-300/70">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={cardRef as RefObject<HTMLAnchorElement>}
        className={cardClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Link>
    );
  }
  return (
    <div
      ref={cardRef as RefObject<HTMLDivElement>}
      className={cardClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
}

