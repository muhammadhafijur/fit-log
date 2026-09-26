"use client";

import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { getStoredPlan, getStoredSaved, savePlan, saveSaved } from "@/lib/storage";
import { PlanWorkout, Workout } from "@/types/workout";

interface AppContextValue {
  plan: PlanWorkout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;

  showToast: (message: string) => void;

  planCount: number;
  savedCount: number;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanWorkout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const [hydrated, setHydrated] = useState(false);

  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    setPlan(getStoredPlan());
    setSaved(getStoredSaved());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    savePlan(plan);
  }, [plan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    saveSaved(saved);
  }, [saved, hydrated]);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);

    window.setTimeout(() => {
      setToastMessage("");
    }, 2500);
  }, []);

  const addToPlan = useCallback(
    (workout: Workout) => {
      if (plan.some((item) => item.id === workout.id)) {
        showToast("Already in today's plan");
        return;
      }

      if (plan.length >= 5) {
        showToast("Today's plan is full");
        return;
      }

      setPlan((current) => [
        ...current,
        {
          ...workout,
          completed: false,
        },
      ]);

      showToast("Added to today's plan");
    },
    [plan, showToast],
  );

  const saveForLater = useCallback(
    (workout: Workout) => {
      if (saved.some((item) => item.id === workout.id)) {
        showToast("Already saved");
        return;
      }

      setSaved((current) => [...current, workout]);

      showToast("Saved for later");
    },
    [saved, showToast],
  );

  const removeFromPlan = useCallback(
    (id: number) => {
      setPlan((current) => current.filter((item) => item.id !== id));

      showToast("Removed from today's plan");
    },
    [showToast],
  );

  const removeFromSaved = useCallback(
    (id: number) => {
      setSaved((current) => current.filter((item) => item.id !== id));

      showToast("Removed from saved");
    },
    [showToast],
  );

  const markAsDone = useCallback(
    (id: number) => {
      setPlan((current) =>
        current.map((item) =>
          item.id === id
            ? {
                ...item,
                completed: true,
              }
            : item,
        ),
      );

      showToast("Workout marked as done");
    },
    [showToast],
  );

  const value = useMemo(
    () => ({
      plan,
      saved,
      addToPlan,
      saveForLater,
      removeFromPlan,
      removeFromSaved,
      markAsDone,
      showToast,
      planCount: plan.length,
      savedCount: saved.length,
    }),
    [
      plan,
      saved,
      addToPlan,
      saveForLater,
      removeFromPlan,
      removeFromSaved,
      markAsDone,
      showToast,
    ],
  );

  return (
    <AppContext.Provider value={value}>
      {children}

      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-2xl">
            {toastMessage}
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}