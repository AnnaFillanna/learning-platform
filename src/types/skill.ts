import type { ProgrammingLanguage } from "./task";

export const masteryDimensions = [
  "syntax-knowledge",
  "type-modelling",
  "type-inference-understanding",
  "type-narrowing",
  "generic-thinking",
  "error-reading",
  "js-ts-combination",
  "api-typing",
  "react-typing",
  "architecture",
] as const;

export type MasteryDimension = (typeof masteryDimensions)[number];

export const learningStages = [
  "recognition",
  "guided-practice",
  "independent-usage",
  "mixed-practice",
  "transfer-to-real-application",
  "delayed-repetition",
] as const;

export type LearningStage = (typeof learningStages)[number];
export type SkillId = string;

export type SkillSection = {
  id: string;
  programmingLanguage: ProgrammingLanguage;
  order: number;
  title: string;
};

export type Skill = {
  id: SkillId;
  sectionId: SkillSection["id"];
  programmingLanguage: ProgrammingLanguage;
  title: string;
  kind: "skill" | "subskill";
  parentSkillId?: SkillId;
  prerequisites: readonly SkillId[];
  dimensions: readonly MasteryDimension[];
  assumedKnowledge?: readonly string[];
  source?: "existing-learning-block" | "existing-task-topic";
};

export type SkillMap = {
  sections: readonly SkillSection[];
  skills: readonly Skill[];
};
