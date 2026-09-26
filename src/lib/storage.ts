import { PlanWorkout, Workout } from "@/types/workout";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

export function getStoredPlan(): PlanWorkout[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const data = localStorage.getItem(PLAN_KEY);

    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getStoredSaved(): Workout[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const data = localStorage.getItem(SAVED_KEY);

    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function savePlan(plan: PlanWorkout[]) {
  localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
}

export function saveSaved(saved: Workout[]) {
  localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
}