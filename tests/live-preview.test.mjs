import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const transpile = (file) => ts.transpileModule(fs.readFileSync(new URL(`../src/runner/${file}`, import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const workerSource = transpile("livePreview.worker.ts");
const runnerSource = transpile("livePreviewRunner.ts").replace("export function", "function").replace("import.meta.url", '"https://example.test/runner.js"');

function harness(mode = "normal") {
  const workers = [];
  class Worker {
    constructor() { workers.push(this); }
    terminate() { this.terminated = true; }
    postMessage(data) {
      if (mode === "input-error") throw new Error("Cannot clone input");
      if (mode === "timeout") return;
      if (mode === "worker-error") { this.onerror(); return; }
      const self = { postMessage: (response) => this.onmessage({ data: response }) };
      vm.runInNewContext(workerSource, { self });
      self.onmessage({ data });
    }
  }
  const context = vm.createContext({ Worker, URL, setTimeout, clearTimeout });
  vm.runInContext(runnerSource, context);
  return { run: context.runLivePreview, workers };
}

test("live preview runs the worker with task inputs and terminates it", async () => {
  const box = harness();
  const result = await box.run("const result = values.filter(value => value > 2);", { values: [1, 3, 4] });
  assert.equal(result.status, "success");
  assert.deepEqual(Array.from(result.output), [3, 4]);
  assert.equal(box.workers[0].terminated, true);
});

test("live preview reports code errors and missing result variables", async () => {
  for (const code of ["const result = missing.value;", "const result = ;", "// no result"]) {
    const box = harness();
    const result = await box.run(code, {});
    assert.equal(result.status, "error");
    assert.ok(result.error.message);
    assert.equal(box.workers[0].terminated, true);
  }
});

for (const [mode, name] of [["timeout", "TimeoutError"], ["input-error", "InputError"], ["worker-error", "WorkerError"]]) {
  test(`live preview cleans up after ${mode}`, async () => {
    const box = harness(mode);
    const result = await box.run("const result = 1;", {}, 5);
    assert.equal(result.error.name, name);
    assert.equal(box.workers[0].terminated, true);
  });
}
