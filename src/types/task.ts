import type { LearningMetadata } from "./learning";

export type ProgrammingLanguage = "javascript" | "typescript";

export type TaskType = "write-code" | "function" | "debug" | "predict";

export type Difficulty = "easy" | "medium" | "hard";
export type Language = "de" | "en" | "ru";
export type LocalizedContent = {
  title: string;
  description: string;
  hints: string[];
};

export type Task = Partial<LearningMetadata> & {
  id: string;
  programmingLanguage: ProgrammingLanguage;
  type: TaskType;
  topics: string[];
  difficulty: Difficulty;
  category: string;
  expectedResult: unknown;
  content: Record<Language, LocalizedContent>;
  starterCode: string;
  solution: string;
  input: Record<string, unknown>;
  displayCode: string;
};
