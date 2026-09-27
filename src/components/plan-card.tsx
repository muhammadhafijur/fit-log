"use client";

import { Check, Flame, Star, Timer, X } from "lucide-react";
import Link from "next/link";

import { PlanWorkout, Workout } from "@/types/workout";
import Image from "next/image";

interface PlanCardProps {
  workout: PlanWorkout | Workout;
  planned?: boolean;
  onDone?: () => void;
  onRemove: () => void;
}

export function PlanCard({
  workout,
  planned = false,
  onDone,
  onRemove,
}: PlanCardProps) {
  const completed = "completed" in workout && workout.completed;

  return (
    <article
      className={`grid gap-5 border bg-zinc-950 p-4 sm:grid-cols-[180px_1fr] ${
        completed ? "border-[#ccff00]/40" : "border-zinc-800"
      }`}
    >
      <Image
        src={workout.image}
        alt={workout.name}
        width={800}
        height={400}
        className="h-44 w-full object-cover grayscale sm:h-full"
      />

      <div className="flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="text-[10px] font-black uppercase tracking-wider text-[#ccff00]"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase">
            {workout.name}
          </h3>

          <p className="mt-2 text-sm text-zinc-500">{workout.equipment}</p>

          <div className="mt-5 flex flex-wrap gap-5 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <Timer size={14} />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-2">
              <Flame size={14} />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2">
              <Star size={14} />
              {workout.rating}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href={`/workout/${workout.id}`}
            className="border border-zinc-700 px-4 py-3 text-xs font-black uppercase tracking-wider transition hover:border-white"
          >
            View Details
          </Link>

          {planned && onDone && !completed && (
            <button
              type="button"
              onClick={onDone}
              className="flex items-center gap-2 bg-[#ccff00] px-4 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
            >
              <Check size={14} />
              Mark as Done
            </button>
          )}

          {completed && (
            <span className="flex items-center gap-2 border border-[#ccff00] px-4 py-3 text-xs font-black uppercase tracking-wider text-[#ccff00]">
              <Check size={14} />
              Done
            </span>
          )}

          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${workout.name}`}
            className="flex size-11 items-center justify-center border border-zinc-800 text-zinc-500 transition hover:border-red-500 hover:text-red-500"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
