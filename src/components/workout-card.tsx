import { Flame, Star, Timer } from "lucide-react";
import Link from "next/link";

import { Workout } from "@/types/workout";
import Image from "next/image";

interface WorkoutCardProps {
  workout: Workout;
}

export function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden border border-zinc-800 bg-zinc-950 transition hover:border-[#ccff00]"
    >
      <div className="relative overflow-hidden bg-zinc-900">
        <Image
          src={workout.image}
          alt={workout.name}
          width={800}
          height={500}
          className="h-64 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>

      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="border border-zinc-700 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-zinc-300"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase leading-none">
          {workout.name}
        </h3>

        <p className="mt-3 text-sm text-zinc-500">{workout.equipment}</p>

        <div className="mt-6 grid grid-cols-3 border-t border-zinc-800 pt-4">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Timer size={14} />
            {workout.duration} min
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Star size={14} />
            {workout.rating}
          </div>
        </div>
      </div>
    </Link>
  );
}
