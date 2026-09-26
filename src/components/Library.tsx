// import { getWorkouts } from "@/lib/api";

import { getWorkouts } from "../app/lib/api";

export default async function Library() {
  const workouts = await getWorkouts();

  return (
    <div>
      <h1>Workout Library</h1>

      {workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.name}</h2>
        </div>
      ))}
    </div>
  );
}
