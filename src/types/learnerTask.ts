import type { Task } from "./task";

export type LearnerTask = Omit<Task, "solution" | "hiddenTests">;

export type CheckResult = {
  success: boolean;
  status: "success" | "test-failed" | "execution-error";
  output?: unknown;
  expected?: unknown;
  error?: { name: string; message: string };
};

export type PreparedCheck =
  | { ok: false; diagnostics: string[] }
  | { ok: true; runtimeScript: string; runtimeTestCount: number };
