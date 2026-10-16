import test from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { createLoader } from "./helpers/load-typescript.mjs";
const load = createLoader({ crypto: { randomUUID } });
const { createInstantTaskLoader } = load("src/generator/instantTaskLoader.ts");
const { createInstantJavascriptTask } = load("src/tasks/instantJavascriptTask.ts");
const { runJavaScript } = load("src/runner/javascriptRunner.ts");
const tick = () => new Promise(setImmediate);

test("a stalled generator never blocks the first or subsequent task", async () => {
  const requested = [];
  const loader = createInstantTaskLoader((index) => {
    requested.push(index);
    return new Promise(() => {});
  }, (index) => ({ id: `local-${index}` }), 3);
  for (let i = 0; i < 3; i++) {
    const task = await loader(i);
    assert.equal(task.id, `local-${i}`);
    assert.equal(await loader(i), task);
  }
  assert.deepEqual(requested, [1, 2]);
});

test("ready background tasks are used; late tasks cannot replace displayed work", async () => {
  const resolvers = new Map();
  const loader = createInstantTaskLoader((i) => new Promise((resolve) => resolvers.set(i, resolve)), (i) => ({ id: `local-${i}` }));
  await loader(0);
  resolvers.get(1)({ id: "generated-1" });
  await tick();
  assert.equal((await loader(1)).id, "generated-1");
  const second = await loader(2);
  resolvers.get(2)({ id: "late-2" });
  await tick();
  assert.equal(await loader(2), second);
  assert.equal(second.id, "local-2");
});

test("generation errors leave navigation usable", async () => {
  const loader = createInstantTaskLoader(async () => { throw new Error("offline"); }, (i) => ({ id: `local-${i}` }));
  await loader(0);
  await tick();
  assert.equal((await loader(1)).id, "local-1");
});

test("local exercises have valid solutions, boundary cases, translations and unique IDs", () => {
  const ids = new Set();
  for (let i = 0; i < 30; i++) {
    const task = createInstantJavascriptTask(i);
    assert.equal(runJavaScript(task.solution, task).success, true);
    assert.equal(runJavaScript("const wrong = [];", task).success, false);
    assert.equal(task.starterCode, "");
    assert.equal(task.expectedResult.length, 3);
    for (const language of ["de", "en", "ru"]) {
      assert.ok(task.content[language].description);
      assert.equal(task.content[language].hints.length, 3);
    }
    ids.add(task.id);
  }
  assert.equal(ids.size, 30);
});
