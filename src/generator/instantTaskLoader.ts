import type { Task } from "../types/task";

// Never wait for generation during navigation. Once shown, a task stays stable.
export function createInstantTaskLoader(
  request: (index: number) => Promise<Task>,
  local: (index: number) => Task,
  taskCount = Infinity,
) {
  const shown = new Map<number, Task>();
  const ready = new Map<number, Task>();
  const pending = new Set<number>();
  function prefetch(index: number) {
    if (pending.has(index) || ready.has(index) || shown.has(index)) return;
    pending.add(index);
    void Promise.resolve().then(() => request(index)).then((task) => {
      if (!shown.has(index)) ready.set(index, task);
    }).catch(() => {}).finally(() => pending.delete(index));
  }
  return async (index: number): Promise<Task> => {
    const existing = shown.get(index);
    if (existing) return existing;
    const task = ready.get(index) ?? local(index);
    ready.delete(index);
    shown.set(index, task);
    if (index + 1 < taskCount) prefetch(index + 1);
    return task;
  };
}
