"use client";

import Link from "next/link";
import { useRef } from "react";

export type MiniProjectCardProps = {
  title: string;
  client: string;
  description: string;
  year: string;
  scope: string;
  platform: string;
  href?: string;
  image?: string;
  themeColor?: string; // Hex color for glow effect (e.g., "#ffa100")
};

export function MiniProjectCard({
  title,
  client,
  description,
  year,
  scope,
  platform,
  href,
  image = "/case-study-image.png",
  themeColor = "#ffa100",
}: MiniProjectCardProps) {
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
      outerGlowRef.current.style.boxShadow = `0 0 15px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3), 0 0 30px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`;
    }
    if (innerGlowRef.current) {
      innerGlowRef.current.style.boxShadow = `0 0 10px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25), 0 0 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`;
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

  const sharedProps = {
    ref: cardRef,
    className:
      "group relative flex flex-col gap-3 rounded-[16px] bg-zinc-950/70 p-0 shadow-[0_12px_40px_rgba(0,0,0,0.85)] transition-shadow duration-300 cursor-pointer",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const content = (
    <>
      {/* Image card */}
      <div
        ref={outerGlowRef}
        className="relative rounded-[12px] bg-zinc-900/60 p-1.5 border border-white/15 transition-[box-shadow] duration-300"
        style={{
          boxShadow: `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`,
        }}
      >
        <div
          ref={innerGlowRef}
          className="relative aspect-[2880/1808] rounded-[8px] transition-[box-shadow] duration-300"
          style={{
            boxShadow: `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`,
          }}
        >
          <img
            src={image}
            alt={title}
            className="project-card-image size-full object-cover transition-all duration-300 border border-white/15 rounded-[8px]"
          />
        </div>
      </div>

      {/* Description block */}
      <div className="relative z-10 space-y-1 pt-0.5 text-zinc-200">
        <h3
          className="text-[20px] font-semibold text-zinc-50 leading-tight"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {title}
        </h3>
        <p className="text-xs text-zinc-300/90 line-clamp-2 leading-snug">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={cardRef as React.RefObject<HTMLAnchorElement>}
        className={sharedProps.className}
        onMouseEnter={sharedProps.onMouseEnter}
        onMouseLeave={sharedProps.onMouseLeave}
      >
        {content}
      </Link>
    );
  }
  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={sharedProps.className}
      onMouseEnter={sharedProps.onMouseEnter}
      onMouseLeave={sharedProps.onMouseLeave}
    >
      {content}
    </div>
  );
}
