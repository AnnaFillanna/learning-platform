import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { load, plain } from "./helpers/load-typescript.mjs";

const { handleLearning } = load("server/learningHandler.ts");
const { typescriptTasks } = load("src/tasks/typescriptTasks.ts");
const { default: handler } = load("api/learning.ts");

test("public catalog contains no solutions or hidden tests", () => {
  const response = handleLearning({ action: "catalog" });
  assert.equal(response.status, 200);
  assert.equal(response.body.tasks.length, 18);
  for (const task of response.body.tasks) {
    assert.equal("solution" in task, false);
    assert.equal("hiddenTests" in task, false);
    assert.ok(task.visibleTests.length);
    assert.deepEqual(Object.keys(task.content).sort(), ["de", "en", "ru"]);
  }
  assert.equal(handleLearning({ action: "solution", taskId: typescriptTasks[0].id }).body.solution, typescriptTasks[0].solution);
});

for (const task of typescriptTasks) {
  test(`production checker accepts ${task.id} with strict types and isolated runtime payload`, () => {
    const response = handleLearning({ action: "check", taskId: task.id, code: task.solution });
    assert.equal(response.status, 200);
    assert.equal(response.body.ok, true, JSON.stringify(response.body));
    const result = vm.runInNewContext(response.body.runtimeScript, {}, { timeout: 500 });
    assert.deepEqual(plain(result), { success: true, status: "success" });
  });
}

test("checker rejects invalid types and redacts hidden-contract details", () => {
  const task = typescriptTasks.find((task) => task.id === "ts-readonly-user-010");
  const failed = handleLearning({ action: "check", taskId: task.id, code: task.solution.replace("readonly", "") });
  assert.equal(failed.body.ok, false);
  assert.ok(failed.body.diagnostics.some((line) => line.includes("type contract")));
  assert.equal(JSON.stringify(failed).includes("user.id ="), false);
  const price = typescriptTasks[1];
  assert.equal(handleLearning({ action: "check", taskId: price.id, code: "let price: any = 19.5;" }).body.ok, false);
  const wrong = handleLearning({ action: "check", taskId: price.id, code: "let price: number = 7;" });
  assert.equal(wrong.body.ok, true);
  assert.equal(vm.runInNewContext(wrong.body.runtimeScript, {}, { timeout: 500 }).status, "test-failed");
});

test("server compiles but never executes submitted JavaScript", () => {
  const task = typescriptTasks[0];
  const response = handleLearning({ action: "check", taskId: task.id, code: 'const result = "number"; while (true) {}' });
  assert.equal(response.body.ok, true);
  assert.throws(() => vm.runInNewContext(response.body.runtimeScript, {}, { timeout: 20 }), /timed out/);
});

test("compiler rejects imports, filesystem references, suppression, and oversized submissions", () => {
  for (const code of [
    'import fs from "node:fs"; const result = "number";',
    '/// <reference path="/etc/passwd" />\nconst result = "number";',
    '// @ts-nocheck\nconst result = "number";',
    'type Data = import("node:fs");',
    " ".repeat(20001),
  ]) {
    assert.equal(handleLearning({ action: "check", taskId: typescriptTasks[0].id, code }).body.ok, false);
  }
});

test("API returns controlled errors for malformed requests and methods", () => {
  assert.equal(handleLearning(null).status, 400);
  assert.equal(handleLearning({ action: "check", taskId: "missing", code: "" }).status, 404);
  let status, body;
  const res = { status(value) { status = value; return this; }, json(value) { body = value; } };
  handler({ method: "GET" }, res);
  assert.equal(status, 405);
  handler({ method: "POST", body: { action: "catalog" } }, res);
  assert.equal(status, 200);
  assert.equal(body.tasks.length, 18);
});
