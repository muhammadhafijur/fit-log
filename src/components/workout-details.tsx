"use client";

import {
    ArrowLeft,
    Bookmark,
    Check,
    Plus
} from "lucide-react";
import Link from "next/link";

import { usePlan } from "@/app/context/PlanContext";
import { Workout } from "@/types/workout";

export function WorkoutDetails({ workout }: { workout: Workout }) {
  const { plan, saved, addToPlan, saveForLater } = usePlan();

  const alreadyInPlan = plan.some((item) => item.id === workout.id);
  const alreadySaved = saved.some((item) => item.id === workout.id);
  const planFull = plan.length >= 5;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-white"
      >
        <ArrowLeft size={15} />
        Back to library
      </Link>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="h-fit overflow-hidden border border-zinc-800 bg-zinc-950 lg:sticky lg:top-28">
          <img
            src={workout.image}
            alt={workout.name}
            className="aspect-square w-full object-cover grayscale"
          />
        </div>

        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="border border-[#ccff00] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#ccff00]"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-none sm:text-6xl">
            {workout.name}
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
            {workout.description}
          </p>

          <div className="mt-10 border border-zinc-800">
            <div className="border-b border-zinc-800 px-5 py-4">
              <h2 className="text-sm font-black uppercase tracking-wider">
                Key Specs
              </h2>
            </div>

            <div className="divide-y divide-zinc-800">
              <SpecRow label="Equipment" value={workout.equipment} />
              <SpecRow label="Difficulty" value={workout.difficulty} />
              <SpecRow label="Sets" value={String(workout.sets)} />
              <SpecRow label="Reps" value={workout.reps} />
              <SpecRow
                label="Duration"
                value={`${workout.duration} min`}
              />
              <SpecRow
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
              />
              <SpecRow label="Rating" value={String(workout.rating)} />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-4 border-b border-zinc-900 pb-4"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center bg-[#ccff00] text-xs font-black text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-zinc-400">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => addToPlan(workout)}
              disabled={alreadyInPlan || planFull}
              className="flex items-center justify-center gap-2 bg-[#ccff00] px-5 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-white disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500"
            >
              {alreadyInPlan ? <Check size={17} /> : <Plus size={17} />}
              {alreadyInPlan
                ? "Already in plan"
                : planFull
                  ? "Plan is full"
                  : "Add to today's plan"}
            </button>

            <button
              type="button"
              onClick={() => saveForLater(workout)}
              disabled={alreadySaved}
              className="flex items-center justify-center gap-2 border border-zinc-700 px-5 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:border-white disabled:cursor-not-allowed disabled:text-zinc-500"
            >
              {alreadySaved ? <Check size={17} /> : <Bookmark size={17} />}
              {alreadySaved ? "Already saved" : "Save for later"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-2 px-5 py-4">
      <span className="text-xs font-bold uppercase tracking-wider text-zinc-600">
        {label}
      </span>

      <span className="text-right text-sm font-bold text-zinc-200">
        {value}
      </span>
    </div>
  );
}