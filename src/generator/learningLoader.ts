import type { LearnerTask } from "../types/learnerTask";
import type { LearningSnapshot } from "../types/learning";
import { getPracticeReadiness, selectNextTask } from "../learning/nextTask";

export function createLearningLoader(tasks: readonly LearnerTask[], readSnapshot: () => LearningSnapshot, initialTaskId?: string, repeatCompleted = false) {
  const cache = new Map<number, LearnerTask>();
  return async (index: number): Promise<LearnerTask | undefined> => {
    if (cache.has(index)) return cache.get(index);
    const current = readSnapshot();
    const snapshot = repeatCompleted ? { ...current, completedTaskIds: [] } : current;
    const used = new Set([...cache.values()].map((task) => task.id));
    const initial = index === 0 ? tasks.find((task) => task.id === initialTaskId) : undefined;
    if (initial && initial.programmingLanguage !== "typescript") return undefined;
    const next = initial ?? selectNextTask(tasks.filter((task) => !used.has(task.id)), snapshot, "typescript", undefined, getPracticeReadiness);
    if (next) cache.set(index, next);
    return next;
  };
}
