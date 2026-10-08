import test from "node:test";
import assert from "node:assert/strict";
import { load, plain } from "./helpers/load-typescript.mjs";

const { deriveProgress, REVIEW_DELAY_MS } = load("src/progress/learningProgress.ts");
const { getTaskRequirements } = load("src/learning/nextTask.ts");
const { createLearningLoader } = load("src/generator/learningLoader.ts");
const { typescriptTasks: tasks } = load("src/tasks/typescriptTasks.ts");
const now = Date.parse("2026-10-08T12:00:00Z");
function attempt(task, overrides = {}) {
  return { id: crypto.randomUUID(), taskId: task.id, topic: task.topics[0], solved: true, attempts: 1, hintsUsed: 0, createdAt: new Date(now).toISOString(), ...overrides };
}

test("placement and first success unlock practice without claiming mastery", () => {
  const task = tasks[0];
  const { snapshot, skills } = deriveProgress(tasks, [attempt(task)], ["basics"], now);
  assert.deepEqual(plain(snapshot.masteredSkillIds), []);
  assert.deepEqual(plain(snapshot.placementSkillIds), ["basics"]);
  assert.ok(snapshot.practicedSkillIds.includes("ts-foundations-inference"));
  assert.ok(snapshot.completedTaskIds.includes(task.id));
  assert.equal(skills.find((item) => item.skillId === "ts-foundations-inference").dimensions["type-inference-understanding"].score, 1);
});

test("100 identical successes, viewed solutions and failed attempts do not grant mastery", () => {
  const repetitions = Array.from({ length: 100 }, () => attempt(tasks[7]));
  const state = deriveProgress(tasks, repetitions, [], now);
  assert.deepEqual(plain(state.snapshot.masteredSkillIds), []);
  for (const change of [{ solutionViewed: true }, { solved: false }]) {
    const result = deriveProgress(tasks, [attempt(tasks[7], change)], [], now);
    assert.deepEqual(plain(result.snapshot.completedTaskIds), []);
    assert.deepEqual(plain(result.snapshot.practicedSkillIds), []);
  }
});

test("review becomes due after seven days and a new success reschedules it", () => {
  const first = attempt(tasks[7], { createdAt: new Date(now - REVIEW_DELAY_MS).toISOString() });
  assert.ok(deriveProgress(tasks, [first], [], now).snapshot.dueSkillIds.includes("ts-interfaces-basic"));
  assert.equal(deriveProgress(tasks, [first], [], now - 1).snapshot.dueSkillIds.includes("ts-interfaces-basic"), false);
  assert.equal(deriveProgress(tasks, [first, attempt(tasks[17])], [], now).snapshot.dueSkillIds.includes("ts-interfaces-basic"), false);
});

test("mastery needs independent, mixed, transfer and truly delayed evidence for every dimension", () => {
  const stages = ["independent-usage", "mixed-practice", "transfer-to-real-application", "delayed-repetition"];
  const fixtures = stages.map((stage, index) => ({ ...tasks[7], id: `fixture-${index}`, topics: ["ts-interfaces-basic"], stage, context: `context-${index}`, dimensions: ["syntax-knowledge", "type-modelling"] }));
  const attempts = fixtures.map((task, index) => attempt(task, { createdAt: new Date(index === 3 ? now : now - REVIEW_DELAY_MS).toISOString() }));
  assert.deepEqual(plain(deriveProgress(fixtures, attempts, [], now).snapshot.masteredSkillIds), ["ts-interfaces-basic"]);
  const tooSoon = attempts.map((value) => ({ ...value, createdAt: new Date(now).toISOString() }));
  assert.deepEqual(plain(deriveProgress(fixtures, tooSoon, [], now).snapshot.masteredSkillIds), []);
  const hinted = attempts.map((value) => ({ ...value, hintsUsed: 1 }));
  assert.deepEqual(plain(deriveProgress(fixtures, hinted, [], now).snapshot.masteredSkillIds), []);
  const partial = fixtures.map((task) => ({ ...task, dimensions: ["syntax-knowledge"] }));
  assert.deepEqual(plain(deriveProgress(partial, attempts, [], now).snapshot.masteredSkillIds), []);
});

test("duplicate, unknown and future attempts do not duplicate or fabricate evidence", () => {
  const valid = attempt(tasks[0]);
  const result = deriveProgress(tasks, [valid, valid, attempt(tasks[0], { createdAt: new Date(now + 1).toISOString() }), attempt({ ...tasks[0], id: "unknown" })], [], now);
  const evidence = result.skills.find((item) => item.skillId === "ts-foundations-inference").dimensions["type-inference-understanding"].evidence;
  assert.equal(evidence.length, 1);
});

test("TypeScript loader reads fresh progress, caches current task and ends when none is ready", async () => {
  const placement = [...new Set(tasks.flatMap((task) => getTaskRequirements(task).skills))];
  const attempts = [];
  const loader = createLearningLoader(tasks, () => deriveProgress(tasks, attempts, placement, now).snapshot, tasks[0].id);
  assert.equal((await loader(0)).id, tasks[0].id);
  attempts.push(attempt(tasks[0]));
  assert.equal((await loader(0)).id, tasks[0].id);
  assert.notEqual((await loader(1)).id, tasks[0].id);
  const locked = createLearningLoader(tasks, () => deriveProgress(tasks, [], [], now).snapshot);
  assert.equal(await locked(0), undefined);
  const earlyReview = createLearningLoader(tasks, () => deriveProgress(tasks, [], placement, now).snapshot, tasks[17].id);
  assert.equal(await earlyReview(0), undefined);
});
