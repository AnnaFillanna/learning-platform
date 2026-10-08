import type { Language, ProgrammingLanguage } from "./task";

export const SESSION_SIZES = [5, 10, 15] as const;
export type SessionSize = (typeof SESSION_SIZES)[number];

export type LearningBlock = {
  id: string;
  title: string;
  description: Record<Language, string>;
  // Independent skill-progress estimate; never derived from task counts in the UI.
  progressPercent: number;
  completedTasks: number;
  // An estimate for orientation, never a hard limit or a mastery threshold.
  estimatedTasks?: number;
  assessment?: { kind: "mixed-skills" };
};

export type TrainingSession = {
  programmingLanguage?: ProgrammingLanguage;
  initialTaskId?: string;
  blockId: LearningBlock["id"];
  taskCount: SessionSize;
};
