import type { LearnerTask, PreparedCheck } from "../types/learnerTask";

async function request<T>(body: object): Promise<T> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch("/api/learning", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Learning request failed (${response.status})`);
    return await response.json() as T;
  } finally {
    window.clearTimeout(timeout);
  }
}

export const fetchLearningCatalog = () => request<{ tasks: LearnerTask[] }>({ action: "catalog" });
export const prepareCheck = (taskId: string, code: string) => request<PreparedCheck>({ action: "check", taskId, code });
export const fetchSolution = (taskId: string) => request<{ solution: string }>({ action: "solution", taskId });
