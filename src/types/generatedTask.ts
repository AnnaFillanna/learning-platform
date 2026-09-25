import type {
  Difficulty,
  Language,
  LocalizedContent,
  TaskType,
} from "./task";

export type GeneratedTask = {
  programmingLanguage: "javascript";
  type: TaskType;
  topics: string[];
  difficulty: Difficulty;
  category: string;

  displayCode: string;
  starterCode: string;

  expectedResult: unknown;
  solution: string;

  input: Record<string, unknown>;

  content: Record<Language, LocalizedContent>;
};