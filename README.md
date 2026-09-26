# FitLog — Workout Tracker & Exercise Planner

**Live Site:** https://fitlog-io.vercel.app/

FitLog is a modern workout management web application built with Next.js and TypeScript. It provides a simple way to explore exercises, view detailed workout information, build a daily workout plan, and save exercises for future sessions. The app is designed with a focused dark interface and responsive layout for different screen sizes.

---

## Technologies Used

* **Next.js 16 (App Router)** — Handles application routing, page rendering, and server-side data fetching.
* **TypeScript** — Provides strongly typed components, API responses, and application state.
* **Tailwind CSS** — Used to build the responsive interface and dark fitness-focused visual design.
* **React Context API** — Manages workout plans and saved exercises across the application.
* **LocalStorage** — Stores the user's plan and saved workouts locally so they remain available after a page refresh.
* **REST API** — Provides the workout and exercise information used throughout the application.
* **Lucide React** — Provides lightweight icons for navigation, actions, and workout information.
* **Sonner** — Displays feedback messages when users add, save, complete, or remove workouts.

---

## Key Features

1. **Workout Library**: Explore a collection of 12 workouts displayed in a responsive card-based layout with useful exercise information.

2. **Detailed Workout Information**: Open any workout to see its description, target muscle groups, equipment, difficulty, duration, calories, sets, reps, and instructions.

3. **Today's Workout Plan**: Add exercises to a personal daily plan with a maximum limit of 5 workouts to keep the routine focused.

4. **Save Workouts**: Save exercises separately for later so they can be easily found and added to a future workout plan.

5. **Dynamic Workout Summary**: The My Plan page automatically updates the number of exercises, total workout time, and estimated calories based on the current plan.

6. **Workout Sorting**: Organize the workout library by duration, calories burned, or rating to quickly find exercises based on different criteria.

7. **Persistent User Data**: Plan and saved workout data are stored in the browser using LocalStorage, allowing the information to remain after refreshing the application.

8. **Responsive User Interface**: The application adapts to mobile, tablet, and desktop screens with responsive navigation, workout grids, cards, loading states, empty states, and a custom 404 page.