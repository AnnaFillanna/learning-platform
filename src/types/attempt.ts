import type { LearningStage, MasteryDimension, SkillId } from "./skill";
import type { ProgrammingLanguage } from "./task";

export type Attempt = {
  taskId: string;
  programmingLanguage?: ProgrammingLanguage;
  topics?: SkillId[];
  stage?: LearningStage;
  context?: string;
  dimensions?: Partial<Record<MasteryDimension, number>>;
  solutionViewed?: boolean;
  topic: string;
  difficulty: "easy" | "medium" | "hard";

  solved: boolean;
  attempts: number;
  hintsUsed: number;

  createdAt: string;
};
