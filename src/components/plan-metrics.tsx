import { Dumbbell, Flame, Timer } from "lucide-react";

import { PlanWorkout } from "@/types/workout";

export function PlanMetrics({ plan }: { plan: PlanWorkout[] }) {
  const exercises = plan.length;

  const minutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const calories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Metric
        icon={<Dumbbell size={20} />}
        label="Exercises"
        value={exercises}
      />

      <Metric
        icon={<Timer size={20} />}
        label="Minutes"
        value={minutes}
      />

      <Metric
        icon={<Flame size={20} />}
        label="Calories"
        value={calories}
      />
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-center gap-3 text-[#ccff00]">
        {icon}

        <span className="text-xs font-black uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black">
        {value}
      </p>
    </div>
  );
}