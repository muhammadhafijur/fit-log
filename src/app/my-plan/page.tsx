"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { EmptyState } from "@/components/empty-state";
import { LoadingSpinner } from "@/components/loading-spinner";
import { PlanCard } from "@/components/plan-card";
import { PlanMetrics } from "@/components/plan-metrics";
import { usePlan } from "../context/PlanContext";

type Tab = "plan" | "saved";

function MyPlanContent() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();

  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab: Tab =
    searchParams.get("tab") === "saved" ? "saved" : "plan";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
          YOUR LOG
        </p>

        <h1 className="mt-3 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-none">
          My Plan
        </h1>

        <p className="mt-4 text-zinc-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <PlanMetrics plan={plan} />

      <div className="mt-12">
        <div className="flex border-b border-zinc-800">
          <button
            type="button"
            onClick={() => router.push("/my-plan?tab=plan")}
            className={`px-5 py-4 text-xs font-black uppercase tracking-wider ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-white"
                : "text-zinc-600"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => router.push("/my-plan?tab=saved")}
            className={`px-5 py-4 text-xs font-black uppercase tracking-wider ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-white"
                : "text-zinc-600"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="mt-6">
          {loading ? (
            <LoadingSpinner />
          ) : activeTab === "plan" ? (
            plan.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-4">
                {plan.map((workout) => (
                  <PlanCard
                    key={workout.id}
                    workout={workout}
                    planned
                    onDone={() => markAsDone(workout.id)}
                    onRemove={() => removeFromPlan(workout.id)}
                  />
                ))}
              </div>
            )
          ) : saved.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {saved.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout}
                  onRemove={() => removeFromSaved(workout.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function MyPlanPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MyPlanContent />
    </Suspense>
  );
}