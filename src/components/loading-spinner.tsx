export function LoadingSpinner({ text = "Loading workouts…" }: { text?: string }) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center gap-5">
      <div className="size-10 animate-spin border-4 border-zinc-800 border-t-[#ccff00]" />

      <p className="text-sm font-bold uppercase tracking-wider text-zinc-500">
        {text}
      </p>
    </div>
  );
}