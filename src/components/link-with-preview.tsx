"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type PreviewVariant = "linkedin" | "resume";

type LinkWithPreviewProps = {
  href: string;
  label: string;
  variant: PreviewVariant;
  className?: string;
};

function LinkedInPreview() {
  return (
    <div className="relative w-[200px] overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-zinc-200/80">
      {/* Banner */}
      <div className="h-12 bg-gradient-to-br from-[#0a66c2] to-[#004182]" />
      <div className="px-3 pb-3 pt-1">
        {/* Avatar */}
        <div className="-mt-6 flex justify-center">
          <Image
            src="/images/headshot.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-md"
          />
        </div>
        <div className="mt-2 text-center">
          <p className="text-xs font-semibold text-zinc-900">Kyle Boyd</p>
          <p className="mt-0.5 line-clamp-2 text-[10px] text-zinc-600">
            Lead Designer | Product & systems for enterprise
          </p>
          <p className="mt-1 text-[10px] text-zinc-500">Denver, Colorado</p>
        </div>
      </div>
      {/* LinkedIn logo badge overlapping */}
      <div
        className="absolute -right-2 -top-1 flex h-10 w-10 items-center justify-center rounded bg-[#0a66c2] text-white shadow-lg"
        style={{ transform: "rotate(12deg)" }}
      >
        <span className="text-lg font-bold leading-none">in</span>
      </div>
    </div>
  );
}

function ResumePreview() {
  return (
    <div className="relative w-[180px] overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-zinc-200/80">
      <div className="border-b border-zinc-200 bg-zinc-50 px-3 py-2">
        <p className="text-xs font-semibold text-zinc-800">Kyle Boyd</p>
        <p className="text-[10px] text-zinc-500">Product Designer · Resume</p>
      </div>
      <div className="space-y-1.5 px-3 py-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-1.5 w-full rounded bg-zinc-200/80" style={{ width: `${100 - i * 8}%` }} />
        ))}
      </div>
      <div className="absolute -right-1 -top-1 rounded bg-zinc-100 p-1.5 shadow" style={{ transform: "rotate(-8deg)" }}>
        <svg className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
    </div>
  );
}

export function LinkWithPreview({ href, label, variant, className = "" }: LinkWithPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState<"above" | "below">("above");
  const linkRef = useRef<HTMLAnchorElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      setPosition(spaceBelow >= 220 || spaceAbove < spaceBelow ? "below" : "above");
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsHovered(false), 150);
  };

  const rotation = variant === "linkedin" ? "-3deg" : "2deg";

  return (
    <span className="relative inline-block">
      <a
        ref={linkRef}
        href={href}
        target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`inline-block underline decoration-zinc-500 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-400 ${className}`}
        style={{ fontFamily: "var(--font-outfit)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </a>
      {isHovered && (
        <span
          className={`absolute z-50 flex transition-opacity duration-150 ${
            position === "above" ? "bottom-full left-1/2 mb-2" : "left-1/2 top-full mt-2"
          }`}
          style={{
            transform: `translateX(-50%) rotate(${rotation})`,
          }}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
            setIsHovered(true);
          }}
          onMouseLeave={handleMouseLeave}
        >
          {variant === "linkedin" ? <LinkedInPreview /> : <ResumePreview />}
        </span>
      )}
    </span>
  );
}
