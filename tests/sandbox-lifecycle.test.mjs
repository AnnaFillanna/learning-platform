import test from "node:test";
import assert from "node:assert/strict";
import { createLoader } from "./helpers/load-typescript.mjs";

function sandbox() {
  const listeners = new Set();
  const frames = [];
  const document = {
    createElement() {
      return { contentWindow: {}, attributes: {}, setAttribute(key, value) { this.attributes[key] = value; }, remove() { this.removed = true; } };
    },
    body: { append(frame) { frames.push(frame); } },
  };
  const window = { setTimeout, clearTimeout, addEventListener(_, callback) { listeners.add(callback); }, removeEventListener(_, callback) { listeners.delete(callback); } };
  const load = createLoader({ document, window, crypto: { randomUUID: () => "private-token" } });
  const { runIsolatedScript } = load("src/runner/typescriptRunner.ts");
  return { runIsolatedScript, frames, listeners, send(data, source = frames[0].contentWindow) { for (const callback of listeners) callback({ data, source }); } };
}

test("sandbox requires matching frame and nonce, then cleans up", async () => {
  const box = sandbox();
  const pending = box.runIsolatedScript('({status: "success"})', 1000);
  box.send({ nonce: "private-token", result: { status: "success" } }, {});
  box.send({ nonce: "wrong", result: { status: "success" } });
  assert.equal(box.frames[0].removed, undefined);
  box.send({ nonce: "private-token", ready: true });
  box.send({ nonce: "private-token", result: { status: "test-failed", success: true } });
  const result = await pending;
  assert.equal(result.success, false);
  assert.equal(result.status, "test-failed");
  assert.equal(box.frames[0].removed, true);
  assert.equal(box.listeners.size, 0);
});

test("startup failure rejects instead of counting an incorrect learner attempt", async () => {
  const box = sandbox();
  const pending = box.runIsolatedScript('({status: "success"})', 1000);
  box.send({ nonce: "private-token", unavailable: true });
  await assert.rejects(pending, /unavailable/);
  assert.equal(box.listeners.size, 0);
  assert.equal(box.frames[0].removed, true);
  const timeout = sandbox();
  await assert.rejects(timeout.runIsolatedScript("0", 5), /unavailable/);
});

test("timeout after worker startup is a runtime failure with cleanup", async () => {
  const box = sandbox();
  const pending = box.runIsolatedScript("0", 5);
  box.send({ nonce: "private-token", ready: true });
  const result = await pending;
  assert.equal(result.error.name, "TimeoutError");
  assert.equal(result.success, false);
  assert.equal(box.frames[0].removed, true);
});

test("generated sandbox excludes same-origin privileges and escapes submitted HTML", async () => {
  const box = sandbox();
  const pending = box.runIsolatedScript('(() => { const text = "</script><img src=x>"; return {status:"success"}; })()', 1000);
  const frame = box.frames[0];
  assert.equal(frame.attributes.sandbox, "allow-scripts");
  assert.match(frame.srcdoc, /connect-src 'none'/);
  assert.equal((frame.srcdoc.match(/<\/script>/g) ?? []).length, 1);
  assert.equal(frame.srcdoc.includes("<img src=x>"), false);
  box.send({ nonce: "private-token", result: { status: "success" } });
  await pending;
});
