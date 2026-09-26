import Link from "next/link";

export function EmptyState() {
  return (
    <div className="border border-dashed border-zinc-800 px-6 py-20 text-center">
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-black uppercase">
        Nothing Here Yet
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex bg-[#ccff00] px-6 py-4 text-xs font-black uppercase tracking-wider text-black hover:bg-white"
      >
        Go to workouts
      </Link>
    </div>
  );
}