import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { createLoader, plain } from "./helpers/load-typescript.mjs";

function memoryStorage() {
  const values = new Map();
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
}

test("catalog → prerequisite placement → check → persisted attempt → progress → next task", async () => {
  const localStorage = memoryStorage();
  const load = createLoader({ localStorage });
  const { handleLearning } = load("server/learningHandler.ts");
  const { getTaskRequirements } = load("src/learning/nextTask.ts");
  const { saveAttempt, getAttempts } = load("src/progress/attemptStorage.ts");
  const { savePlacement, loadLearningProgress } = load("src/progress/learningProgress.ts");
  const { createLearningLoader } = load("src/generator/learningLoader.ts");
  const tasks = handleLearning({ action: "catalog" }).body.tasks;
  const placement = [...new Set(tasks.slice(0, 2).flatMap((task) => getTaskRequirements(task).skills))];
  assert.equal(savePlacement(placement), true);
  const loader = createLearningLoader(tasks, () => loadLearningProgress(tasks).snapshot, tasks[0].id);
  const first = await loader(0);
  assert.equal(first.id, "ts-inferred-stock-001");
  const check = handleLearning({ action: "check", taskId: first.id, code: 'const result = "number";' });
  assert.equal(check.body.ok, true);
  const result = vm.runInNewContext(check.body.runtimeScript, {}, { timeout: 200 });
  assert.equal(result.success, true);
  const attempt = { id: "attempt-one", taskId: first.id, topic: first.topics[0], difficulty: first.difficulty, programmingLanguage: "typescript", solved: result.success, attempts: 1, hintsUsed: 0, solutionViewed: false, createdAt: new Date().toISOString() };
  assert.equal(saveAttempt(attempt), true);
  assert.equal(saveAttempt(attempt), true);
  assert.equal(getAttempts().length, 1);
  assert.ok(loadLearningProgress(tasks).snapshot.completedTaskIds.includes(first.id));
  assert.deepEqual(plain(loadLearningProgress(tasks).snapshot.masteredSkillIds), []);
  assert.equal((await loader(1)).id, "ts-price-declaration-002");
  const reloaded = createLoader({ localStorage });
  const afterReload = reloaded("src/progress/learningProgress.ts").loadLearningProgress(tasks);
  assert.ok(afterReload.snapshot.completedTaskIds.includes(first.id));
});

test("corrupt or unavailable storage fails gracefully and does not invent attempts", () => {
  const corrupt = memoryStorage();
  corrupt.setItem("pet-attempts", '{broken');
  corrupt.setItem("pet-placement-v1", '{}');
  const load = createLoader({ localStorage: corrupt });
  assert.deepEqual(plain(load("src/progress/attemptStorage.ts").getAttempts()), []);
  assert.deepEqual(plain(load("src/progress/learningProgress.ts").getPlacement()), []);
  const denied = createLoader({ localStorage: { getItem() { throw new Error("Denied"); }, setItem() { throw new Error("Denied"); } } });
  assert.deepEqual(plain(denied("src/progress/attemptStorage.ts").getAttempts()), []);
  assert.equal(denied("src/progress/attemptStorage.ts").saveAttempt({ id: "a" }), false);
  assert.equal(denied("src/progress/learningProgress.ts").savePlacement(["basics"]), false);
});

test("old JS attempts survive new TS writes without migration or loss", () => {
  const localStorage = memoryStorage();
  const legacy = { taskId: "js-arrays-filter-001", topic: "js-arrays-filtering", difficulty: "easy", solved: true, attempts: 1, hintsUsed: 0, createdAt: "2026-10-01T12:00:00Z" };
  localStorage.setItem("pet-attempts", JSON.stringify([legacy]));
  const load = createLoader({ localStorage });
  const { getAttempts, saveAttempt } = load("src/progress/attemptStorage.ts");
  saveAttempt({ ...legacy, id: "new-attempt", taskId: "ts-inferred-stock-001", programmingLanguage: "typescript" });
  assert.deepEqual(plain(getAttempts()[0]), legacy);
  assert.equal(getAttempts().length, 2);
});
