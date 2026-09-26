"use client";

import { useEffect, useState } from "react";

import { useApp } from "@/components/app-provider";
import { EmptyState } from "@/components/empty-state";
import { LoadingSpinner } from "@/components/loading-spinner";
import { PlanCard } from "@/components/plan-card";
import { PlanMetrics } from "@/components/plan-metrics";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useApp();

  const [activeTab, setActiveTab] = useState<Tab>("plan");
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
            onClick={() => setActiveTab("plan")}
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
            onClick={() => setActiveTab("saved")}
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