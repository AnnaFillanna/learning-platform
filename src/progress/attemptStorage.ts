import type { Attempt } from "../types/attempt";

const STORAGE_KEY = "pet-attempts";

export function getAttempts(): Attempt[] {
  const storedAttempts = localStorage.getItem(STORAGE_KEY);

  if (!storedAttempts) {
    return [];
  }

  try {
    return JSON.parse(storedAttempts) as Attempt[];
  } catch {
    return [];
  }
}

export function saveAttempt(attempt: Attempt) {
  const attempts = getAttempts();

  attempts.push(attempt);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
}