"use client";

import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

import { Workout } from "@/types/workout";
import { WorkoutCard } from "./workout-card";

interface WorkoutGridProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

export function WorkoutGrid({ workouts }: WorkoutGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });
  }, [workouts, sortBy]);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-5xl font-black uppercase">
            The Library
          </h2>

          <p className="mt-2 text-sm text-zinc-500 sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <label className="relative shrink-0">
          <span className="sr-only">Sort By</span>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value as SortOption)
            }
            className="appearance-none border border-zinc-700 bg-black py-3 pl-4 pr-10 text-xs font-bold uppercase tracking-wider text-white outline-none focus:border-[#ccff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>

          <ChevronDown
            size={15}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}