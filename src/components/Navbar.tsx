"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { usePlan } from "@/app/context/PlanContext";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { planCount, savedCount } = usePlan();

  const workoutActive = pathname === "/";
  const planActive = pathname.startsWith("/my-plan");

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-black/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={closeMenu}
        >
          <div className="flex size-9 items-center justify-center text-black">
            <Image src="/logo.png" width={24} height={24} alt="logo" />
          </div>

          <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition ${
              workoutActive
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition ${
              planActive
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop counters */}
          <div className="items-center gap-2 flex">
            <Link
              href="/my-plan?tab=plan"
              className="flex items-center gap-2 sm:border border-zinc-600 sm:px-3 sm:py-2 text-xs font-black uppercase text-white focus:border-[#ccff00] focus:bg-[#ccff00] focus:text-black"
            >
              <span>Plan</span>
              <span>{planCount}</span>
            </Link>

            <Link
              href="/my-plan?tab=saved"
              className="flex items-center gap-2 sm:border border-zinc-600 sm:px-3 sm:py-2 text-xs font-black uppercase text-white focus:border-[#ccff00] focus:bg-[#ccff00] focus:text-black"
            >
              <span>Saved</span>
              <span>{savedCount}</span>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex size-9 sm:size-10 items-center justify-center border border-zinc-700 text-white transition hover:border-zinc-400 md:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-white transition-transform duration-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full bg-white transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full bg-white transition-transform duration-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-zinc-900 transition-all duration-200 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          <Link
            href="/"
            onClick={closeMenu}
            className={`border-b border-zinc-900 px-5 py-4 text-sm font-bold uppercase tracking-wider ${
              workoutActive
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            onClick={closeMenu}
            className={`border-b border-zinc-900 px-5 py-4 text-sm font-bold uppercase tracking-wider ${
              planActive
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>

          {/* Mobile counters */}
          <div className="flex gap-2 p-4 sm:hidden">
            <Link
              href="/my-plan?tab=plan"
              onClick={closeMenu}
              className="flex flex-1 items-center justify-between bg-[#ccff00] px-2 sm:px-3 py-3 text-xs font-black uppercase text-black"
            >
              <span>Plan</span>
              <span>{planCount}</span>
            </Link>

            <Link
              href="/my-plan?tab=saved"
              onClick={closeMenu}
              className="flex flex-1 items-center justify-between border border-zinc-600 px-2 sm:px-3 py-3 text-xs font-black uppercase text-white"
            >
              <span>Saved</span>
              <span>{savedCount}</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}