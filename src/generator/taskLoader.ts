import { generateTask } from "./taskGenerator";
import type { Task } from "../types/task";

const trainingPlan = ["practice", "practice", "business", "business", "business"] as const;

// Share a pending request between prefetch and Weiter, and React effect replays.
// Each training screen owns its own cache; failed requests remain retryable.
export function createTaskLoader(requestTask = generateTask) {
  const requests = new Map<number, Promise<Task>>();
  return (index: number): Promise<Task> => {
    const existing = requests.get(index);
    if (existing) return existing;
    const request = requestTask({
      programmingLanguage: "javascript",
      topic: "js-arrays-filtering",
      difficulty: "easy",
      taskType: trainingPlan[index] ?? "business",
    }).catch((error: unknown) => {
      requests.delete(index);
      throw error;
    });
    requests.set(index, request);
    return request;
  };
}
