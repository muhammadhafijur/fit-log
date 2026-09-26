"use client";

import { useEffect, useState } from "react";

// import { Hero } from "@/components/hero";
import { Hero } from "@/components/Hero";
import { LoadingSpinner } from "@/components/loading-spinner";
import { WorkoutGrid } from "@/components/workout-grid";
import { getWorkouts } from "@/lib/api";
import { Workout } from "@/types/workout";

export default function HomePage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return (
    <>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
      >
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="flex min-h-80 items-center justify-center text-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase">
                Unable to load workouts
              </h2>

              <p className="mt-2 text-zinc-500">
                Please refresh the page and try again.
              </p>
            </div>
          </div>
        ) : (
          <WorkoutGrid workouts={workouts} />
        )}
      </section>
    </>
  );
}