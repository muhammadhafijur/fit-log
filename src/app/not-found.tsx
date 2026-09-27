import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-194px)] items-center justify-center px-4 text-center">
      <div>
        <p className="text-sm font-black tracking-[0.3em] text-[#ccff00]">
          404
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-display)] text-7xl font-black uppercase">
          Page Not Found
        </h1>

        <p className="mt-4 text-zinc-500">
          The workout or page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex bg-[#ccff00] px-6 py-4 text-xs font-black uppercase tracking-wider text-black hover:bg-white"
        >
          Back to workouts
        </Link>
      </div>
    </section>
  );
}