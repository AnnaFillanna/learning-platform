import { typescriptTasks } from "../src/tasks/typescriptTasks.js";
import type { LearnerTask } from "../src/types/learnerTask.js";
import { prepareTypeScriptCheck } from "./typescriptCheck.js";

export function publicTask(task: (typeof typescriptTasks)[number]): LearnerTask {
  const { solution, hiddenTests, ...publicFields } = task;
  void solution;
  void hiddenTests;
  return publicFields;
}

export function handleLearning(body: unknown): { status: number; body: unknown } {
  if (!body || typeof body !== "object") return { status: 400, body: { error: "Invalid request" } };
  const request = body as Record<string, unknown>;
  if (request.action === "catalog") return { status: 200, body: { tasks: typescriptTasks.map(publicTask) } };
  const task = typescriptTasks.find((item) => item.id === request.taskId);
  if (!task) return { status: 404, body: { error: "Unknown task" } };
  if (request.action === "solution") return { status: 200, body: { solution: task.solution } };
  if (request.action === "check" && typeof request.code === "string") {
    return { status: 200, body: prepareTypeScriptCheck(task, request.code) };
  }
  return { status: 400, body: { error: "Invalid action" } };
}
