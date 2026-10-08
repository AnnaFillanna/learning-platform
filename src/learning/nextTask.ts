import { skillRegistry } from "../skills/registry";
import type { LearningSnapshot } from "../types/learning";
import type { LearningStage } from "../types/skill";
import type { ProgrammingLanguage, Task } from "../types/task";

export function getTaskRequirements(task: Pick<Task, "topics" | "prerequisites">) {
  const skills = new Set(task.prerequisites ?? []);
  for (const id of [...task.topics, ...skills]) {
    skillRegistry.get(id);
    for (const prerequisite of skillRegistry.prerequisites(id)) skills.add(prerequisite);
  }
  const knowledge = new Set<string>();
  for (const id of [...task.topics, ...skills]) {
    for (const item of skillRegistry.get(id).assumedKnowledge ?? []) knowledge.add(item);
  }
  return { skills: [...skills], knowledge: [...knowledge] };
}

export function getTaskReadiness(task: Pick<Task, "topics" | "prerequisites">, snapshot: LearningSnapshot) {
  const requirements = getTaskRequirements(task);
  const mastered = new Set([...snapshot.masteredSkillIds, ...(snapshot.placementSkillIds ?? []), ...(snapshot.practicedSkillIds ?? [])]);
  const confirmed = new Set(snapshot.confirmedKnowledge);
  const missingSkills = requirements.skills.filter((id) => !mastered.has(id));
  const missingKnowledge = requirements.knowledge.filter((item) => !confirmed.has(item));
  return {
    eligible: missingSkills.length === 0 && missingKnowledge.length === 0,
    missingSkills,
    missingKnowledge,
  };
}

export function selectNextTask<T extends Pick<Task, "id" | "topics" | "prerequisites" | "programmingLanguage" | "stage">>(
  tasks: readonly T[],
  snapshot: LearningSnapshot,
  programmingLanguage: ProgrammingLanguage,
  stage?: LearningStage,
): T | undefined {
  const due = new Set(snapshot.dueSkillIds);
  const completed = new Set(snapshot.completedTaskIds);
  const candidates = tasks.filter((task) => {
    if (task.programmingLanguage !== programmingLanguage || (stage && task.stage !== stage)) return false;
    if (!getTaskReadiness(task, snapshot).eligible) return false;
    if (task.stage === "delayed-repetition") return task.topics.some((id) => due.has(id));
    return !completed.has(task.id);
  });
  return candidates.find((task) => task.stage === "delayed-repetition") ?? candidates[0];
}
