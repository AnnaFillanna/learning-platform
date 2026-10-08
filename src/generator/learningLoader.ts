import type { LearnerTask } from "../types/learnerTask";
import type { LearningSnapshot } from "../types/learning";
import { getTaskReadiness, selectNextTask } from "../learning/nextTask";

export function createLearningLoader(tasks: readonly LearnerTask[], readSnapshot: () => LearningSnapshot, initialTaskId?: string) {
  const cache = new Map<number, LearnerTask>();
  return async (index: number): Promise<LearnerTask | undefined> => {
    if (cache.has(index)) return cache.get(index);
    const snapshot = readSnapshot();
    const used = new Set([...cache.values()].map((task) => task.id));
    const initial = index === 0 ? tasks.find((task) => task.id === initialTaskId) : undefined;
    if (initial && (!getTaskReadiness(initial, snapshot).eligible ||
      (initial.stage === "delayed-repetition" && !initial.topics.some((id) => snapshot.dueSkillIds.includes(id))))) return undefined;
    const next = initial ?? selectNextTask(tasks.filter((task) => !used.has(task.id)), snapshot, "typescript");
    if (next) cache.set(index, next);
    return next;
  };
}
