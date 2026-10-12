import test from "node:test";
import assert from "node:assert/strict";
import { load, plain } from "./helpers/load-typescript.mjs";

const { taskCatalog, getTasks } = load("src/learning/catalog.ts");
const { skillMap } = load("src/skills/registry.ts");
const { getTaskRequirements, getTaskReadiness, selectNextTask } = load("src/learning/nextTask.ts");
const empty = { masteredSkillIds: [], dueSkillIds: [], completedTaskIds: [], confirmedKnowledge: [] };
const fullyReady = { ...empty, masteredSkillIds: skillMap.skills.map((skill) => skill.id) };
const tasks = getTasks("typescript");

test("demo progress and completed tasks never bypass mastery prerequisites", () => {
  assert.equal(selectNextTask(tasks, empty, "typescript"), undefined);
  assert.equal(selectNextTask(tasks, { ...empty, completedTaskIds: tasks.map((task) => task.id) }, "typescript"), undefined);
  const arrays = tasks.find((task) => task.id === "ts-typed-prices-005");
  const withoutJSArrays = { ...fullyReady, masteredSkillIds: fullyReady.masteredSkillIds.filter((id) => id !== "arrays") };
  assert.equal(getTaskReadiness(arrays, withoutJSArrays).eligible, false);
  assert.ok(getTaskReadiness(arrays, withoutJSArrays).missingSkills.includes("arrays"));
  assert.equal(getTaskReadiness(arrays, fullyReady).eligible, true);
});

test("one task can assess TypeScript modelling and existing JS filtering together", () => {
  const task = tasks.find((task) => task.id === "ts-affordable-products-015");
  assert.ok(task.topics.includes("js-arrays-filtering"));
  assert.ok(task.topics.includes("ts-interfaces-basic"));
  const requirements = getTaskRequirements(task);
  for (const id of ["arrays", "objects", "functions"]) assert.ok(requirements.skills.includes(id));
  assert.equal(selectNextTask([task], fullyReady, "javascript"), undefined);
  assert.equal(selectNextTask([task], fullyReady, "typescript"), task);
});

test("stage and language filters preserve difficulty as a task property", () => {
  assert.equal(selectNextTask(taskCatalog, fullyReady, "javascript").programmingLanguage, "javascript");
  const direct = tasks.find((task) => task.id === "ts-product-interface-008");
  const mixed = tasks.find((task) => task.id === "ts-affordable-products-015");
  assert.ok(direct.topics.includes("ts-interfaces-basic"));
  assert.ok(mixed.topics.includes("ts-interfaces-basic"));
  assert.notEqual(direct.difficulty, mixed.difficulty);
  assert.equal(selectNextTask(tasks, fullyReady, "typescript", "mixed-practice").stage, "mixed-practice");
  assert.notEqual(selectNextTask(tasks, { ...fullyReady, completedTaskIds: [tasks[0].id] }, "typescript").id, tasks[0].id);
});

test("delayed repetition is scheduled only when a topic is due", () => {
  const delayed = tasks.find((task) => task.stage === "delayed-repetition");
  assert.equal(selectNextTask([delayed], fullyReady, "typescript"), undefined);
  const snapshot = { ...fullyReady, dueSkillIds: ["ts-interfaces-basic"], completedTaskIds: [delayed.id] };
  assert.equal(selectNextTask(tasks, snapshot, "typescript"), delayed);
  assert.equal(selectNextTask(tasks, { ...snapshot, dueSkillIds: ["ts-generics-basic"] }, "typescript")?.stage === "delayed-repetition", false);
});

test("missing React knowledge stays explicit until a real JS React map exists", () => {
  const task = { ...tasks[0], topics: ["ts-react-use-reducer"] };
  const readiness = getTaskReadiness(task, fullyReady);
  assert.equal(readiness.eligible, false);
  assert.ok(readiness.missingKnowledge.includes("React useReducer and dispatch"));
  assert.equal(getTaskReadiness(task, { ...fullyReady, confirmedKnowledge: readiness.missingKnowledge }).eligible, true);
});

test("unknown topic IDs fail closed instead of unlocking a task", () => {
  assert.throws(() => getTaskReadiness({ ...tasks[0], topics: ["missing"] }, fullyReady), /Unknown skill/);
  const before = plain(empty);
  selectNextTask(tasks, empty, "typescript");
  assert.deepEqual(empty, before);
});
