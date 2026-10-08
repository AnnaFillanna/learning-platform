import { skillRegistry } from "../skills/registry";
import type { Attempt } from "../types/attempt";
import type { LearningSnapshot, SkillProgress, SkillEvidence } from "../types/learning";
import type { LearnerTask } from "../types/learnerTask";
import { getAttempts } from "./attemptStorage";

const PLACEMENT_KEY = "pet-placement-v1";
export const REVIEW_DELAY_MS = 7 * 24 * 60 * 60 * 1000;
const requiredStages = ["independent-usage", "mixed-practice", "transfer-to-real-application", "delayed-repetition"] as const;

export function getPlacement(): string[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(PLACEMENT_KEY) ?? "[]");
    return Array.isArray(stored) ? stored.filter((id): id is string => typeof id === "string" && skillRegistry.has(id)) : [];
  } catch { return []; }
}

export function savePlacement(ids: readonly string[]): boolean {
  try {
    localStorage.setItem(PLACEMENT_KEY, JSON.stringify([...new Set(ids.filter((id) => skillRegistry.has(id)))]));
    return true;
  } catch { return false; }
}

export function deriveProgress(tasks: readonly LearnerTask[], attempts: readonly Attempt[], placement: readonly string[], now = Date.now()) {
  const byTask = new Map(tasks.map((task) => [task.id, task]));
  const skills = new Map<string, SkillProgress>();
  const completed = new Set<string>();
  const practiced = new Set<string>();
  const lastSuccess = new Map<string, number>();
  const seen = new Set<string>();
  for (const attempt of [...attempts].sort((a, b) => a.createdAt.localeCompare(b.createdAt))) {
    const task = byTask.get(attempt.taskId);
    const timestamp = Date.parse(attempt.createdAt);
    if (!task || !task.stage || !task.context || !Number.isFinite(timestamp) || timestamp > now) continue;
    const identity = attempt.id ?? `${attempt.taskId}:${attempt.createdAt}`;
    if (seen.has(identity)) continue;
    seen.add(identity);
    if (attempt.solved && !attempt.solutionViewed) completed.add(task.id);
    for (const id of task.topics) {
      if (!skillRegistry.has(id)) continue;
      const skill = skillRegistry.get(id);
      if (attempt.solved && !attempt.solutionViewed) {
        practiced.add(id);
        lastSuccess.set(id, timestamp);
      }
      const progress = skills.get(id) ?? { skillId: id, programmingLanguage: skill.programmingLanguage, dimensions: {} };
      for (const dimension of task.dimensions ?? []) {
        if (!skill.dimensions.includes(dimension)) continue;
        const previous = progress.dimensions[dimension];
        const score = attempt.solved && !attempt.solutionViewed ? 1 : 0;
        const evidence: SkillEvidence = {
          taskId: task.id, stage: task.stage, context: task.context, dimension, score,
          hintsUsed: attempt.hintsUsed, solutionViewed: attempt.solutionViewed ?? false, recordedAt: attempt.createdAt,
        };
        progress.dimensions[dimension] = {
          score, evidence: [...(previous?.evidence ?? []), evidence], lastPracticedAt: attempt.createdAt,
          ...(score ? { nextReviewAt: new Date(timestamp + REVIEW_DELAY_MS).toISOString() } : {}),
        };
      }
      skills.set(id, progress);
    }
  }
  const mastered: string[] = [];
  for (const progress of skills.values()) {
    const dimensions = skillRegistry.get(progress.skillId).dimensions;
    if (!dimensions.length) continue;
    const isMastered = dimensions.every((dimension) => {
      const assessment = progress.dimensions[dimension];
      if (!assessment || assessment.score !== 1) return false;
      const evidence = assessment.evidence.filter((item) => item.score === 1 && item.hintsUsed === 0 && !item.solutionViewed);
      const contexts = new Set(evidence.map((item) => item.context));
      const tasks = new Set(evidence.map((item) => item.taskId));
      const delayed = evidence.some((item) => item.stage === "delayed-repetition" && evidence.some((earlier) =>
        earlier.stage !== "delayed-repetition" && Date.parse(item.recordedAt) - Date.parse(earlier.recordedAt) >= REVIEW_DELAY_MS,
      ));
      return contexts.size >= 3 && tasks.size >= 4 && delayed && requiredStages.every((stage) => evidence.some((item) => item.stage === stage));
    });
    if (isMastered) mastered.push(progress.skillId);
  }
  const snapshot: LearningSnapshot = {
    masteredSkillIds: mastered,
    placementSkillIds: [...new Set(placement.filter((id) => skillRegistry.has(id)))],
    practicedSkillIds: [...practiced],
    dueSkillIds: [...lastSuccess].filter(([, timestamp]) => now - timestamp >= REVIEW_DELAY_MS).map(([id]) => id),
    completedTaskIds: [...completed],
    confirmedKnowledge: [],
  };
  return { skills: [...skills.values()], snapshot };
}

export function loadLearningProgress(tasks: readonly LearnerTask[]) {
  return deriveProgress(tasks, getAttempts(), getPlacement());
}
