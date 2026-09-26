import { Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center bg-[#ccff00] text-black">
            <Dumbbell size={17} strokeWidth={3} />
          </div>

          <span className="font-[family-name:var(--font-display)] text-xl font-bold">
            FITLOG
          </span>
        </div>

        <p className="text-xs text-zinc-600">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}