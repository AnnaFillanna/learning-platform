import test from "node:test";
import assert from "node:assert/strict";
import { load, plain } from "./helpers/load-typescript.mjs";

const { javascriptTasks } = load("src/tasks/javascriptTasks.ts");
const { runJavaScript } = load("src/runner/javascriptRunner.ts");

test("all original JavaScript reference solutions still run without TS metadata", () => {
  for (const task of javascriptTasks) {
    assert.equal(task.validation, undefined);
    const result = runJavaScript(task.solution, task);
    assert.equal(result.success, true, task.id);
    assert.deepEqual(plain(result.output), plain(task.expectedResult));
    assert.equal(runJavaScript("const wrong = []", task).status, "test-failed");
  }
});
