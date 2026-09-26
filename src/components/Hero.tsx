import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-zinc-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-6xl font-black uppercase  tracking-tight sm:text-7xl ">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-white"
          >
            Browse Workouts
            <ArrowDownRight size={18} />
          </Link>
        </div>

        <div className="relative overflow-hidden flex justify-end">
          {/* <div className="absolute inset-0 bg-[#ccff00]/10" /> */}

          <Image src="/banner.png" width={334} height={334} alt="Hero image" />
        </div>
      </div>
    </section>
  );
}