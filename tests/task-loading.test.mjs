import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

// Execute the real TypeScript module with the network dependency replaced.
function loadModule(path, dependencies) {
  const source = fs.readFileSync(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  vm.runInNewContext(outputText, {
    exports, require: (name) => {
      assert.ok(name in dependencies, `Unexpected dependency: ${name}`);
      return dependencies[name];
    }, console,
  });
  return exports;
}

const { createTaskLoader } = loadModule("../src/generator/taskLoader.ts", {
  "./taskGenerator": { generateTask: () => { throw new Error("Unexpected live request"); } },
});

test("initial effect replays and Next reuse the pending prefetch request", async () => {
  let calls = 0;
  let resolve;
  const loader = createTaskLoader(() => {
    calls++;
    return new Promise((done) => { resolve = done; });
  });
  const first = loader(0);
  assert.equal(loader(0), first);
  resolve({ id: "first" });
  await first;
  const prefetched = loader(1);
  assert.equal(loader(1), prefetched);
  resolve({ id: "second" });
  assert.equal((await prefetched).id, "second");
  assert.equal(calls, 2);
});

test("a failed first request or prefetch can be retried", async () => {
  for (const index of [0, 1]) {
    let calls = 0;
    const loader = createTaskLoader(async () => {
      if (++calls === 1) throw new Error("Temporary failure");
      return { id: "recovered" };
    });
    await assert.rejects(loader(index), /Temporary failure/);
    assert.equal((await loader(index)).id, "recovered");
    assert.equal(calls, 2);
  }
});

test("tasks 3 onward request business, including beyond the initial five", async () => {
  const types = [];
  const loader = createTaskLoader(async (request) => {
    types.push(request.taskType);
    return { id: String(types.length) };
  });
  for (let i = 0; i < 7; i++) await loader(i);
  assert.deepEqual(types, ["practice", "practice", "business", "business", "business", "business", "business"]);
});

test("the deployed route matches the client URL and forwards the task type", async () => {
  let request;
  const { default: handler } = loadModule("../api/tasks/generate.ts", {
    "../../server/generateTask.js": { generateTask: async (value) => {
      request = value; return { category: "Arrays" };
    } },
    "node:crypto": { randomUUID: () => "test-id" },
  });
  let status, body;
  const res = { status(code) { status = code; return this; }, json(value) { body = value; } };
  await handler({ method: "POST", body: {
    programmingLanguage: "javascript", topic: "js-arrays-filtering", difficulty: "easy", taskType: "business",
  } }, res);
  assert.equal(status, 200);
  assert.equal(request.taskType, "business");
  assert.equal(body.id, "test-id");
  await handler({ method: "POST" }, res);
  assert.equal(status, 400);
  await handler({ method: "GET" }, res);
  assert.equal(status, 405);
});
