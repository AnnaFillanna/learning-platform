import type { LearningStage, MasteryDimension, SkillId } from "./skill";
import type { ProgrammingLanguage } from "./task";

export type TestCase =
  | { id: string; kind: "runtime"; expression: string; expected: unknown }
  | { id: string; kind: "type"; code: string };

export type TaskValidation = {
  mode: "typescript";
  strict: true;
  target: "ES2022";
};

export type LearningMetadata = {
  prerequisites: SkillId[];
  stage: LearningStage;
  dimensions: MasteryDimension[];
  context: string;
  visibleTests: TestCase[];
  hiddenTests: TestCase[];
  validation: TaskValidation;
};

export type SkillEvidence = {
  taskId: string;
  stage: LearningStage;
  context: string;
  dimension: MasteryDimension;
  score: number;
  hintsUsed: number;
  solutionViewed: boolean;
  recordedAt: string;
};

export type SkillProgress = {
  skillId: SkillId;
  programmingLanguage: ProgrammingLanguage;
  dimensions: Partial<Record<MasteryDimension, {
    score: number;
    evidence: SkillEvidence[];
    lastPracticedAt: string;
    nextReviewAt?: string;
  }>>;
};

export type LearningSnapshot = {
  masteredSkillIds: readonly SkillId[];
  placementSkillIds?: readonly SkillId[];
  practicedSkillIds?: readonly SkillId[];
  dueSkillIds: readonly SkillId[];
  completedTaskIds: readonly string[];
  confirmedKnowledge: readonly string[];
};
