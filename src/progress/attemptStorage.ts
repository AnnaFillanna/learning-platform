import type { Attempt } from "../types/attempt";

const STORAGE_KEY = "pet-attempts";

export function getAttempts(): Attempt[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(stored)) return [];
    return stored.filter((value): value is Attempt => value && typeof value === "object"
      && typeof value.taskId === "string" && typeof value.createdAt === "string"
      && typeof value.solved === "boolean" && Number.isFinite(value.hintsUsed)
      && value.hintsUsed >= 0 && Number.isFinite(value.attempts));
  } catch { return []; }
}

export function saveAttempt(attempt: Attempt): boolean {
  try {
    const attempts = getAttempts();
    if (attempt.id && attempts.some((item) => item.id === attempt.id)) return true;
    attempts.push(attempt);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
    return true;
  } catch { return false; }
}
