"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeClass =
  "rounded-full bg-zinc-100/10 px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-50 transition hover:bg-zinc-100/16";
const inactiveClass =
  "rounded-full px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-200/90 transition hover:bg-zinc-100/10 hover:text-white";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-40 flex justify-center sm:top-7">
      <div className="pointer-events-auto inline-flex rounded-full bg-gradient-to-tr from-zinc-700/35 via-zinc-600/20 to-zinc-600/45 p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
        <nav className="flex items-center gap-1 rounded-full bg-black/55 px-1 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
          <Link href="/" className={isActive("/") ? activeClass : inactiveClass}>
            Home
          </Link>
          <Link href="/work" className={isActive("/work") ? activeClass : inactiveClass}>
            Work
          </Link>
          <Link href="/playground" className={isActive("/playground") ? activeClass : inactiveClass}>
            Playground
          </Link>
          <Link href="/writing" className={isActive("/writing") ? activeClass : inactiveClass}>
            Writing
          </Link>
          <Link href="/about" className={isActive("/about") ? activeClass : inactiveClass}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
