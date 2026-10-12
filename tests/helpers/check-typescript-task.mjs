import ts from "typescript";
import vm from "node:vm";
import assert from "node:assert/strict";

const options = {
  strict: true,
  noEmit: true,
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.ESNext,
  types: [],
  lib: ["lib.es2022.d.ts"],
  skipLibCheck: true,
};
const baseHost = ts.createCompilerHost(options);
const libraries = new Map();
const assertions = `
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
`;

export function diagnostics(task, code) {
  const file = `/pet-learning-tests/${task.id}.ts`;
  const checks = [...task.visibleTests, ...task.hiddenTests].map((check) =>
    check.kind === "type" ? `{\n${check.code}\n}` : `void (${check.expression});`,
  ).join("\n");
  const source = `${assertions}\n${code}\n${checks}\nexport {};`;
  const host = {
    ...baseHost,
    getSourceFile(name, version, onError) {
      if (name === file) return ts.createSourceFile(name, source, version, true);
      if (!libraries.has(name)) libraries.set(name, baseHost.getSourceFile(name, version, onError));
      return libraries.get(name);
    },
  };
  return ts.getPreEmitDiagnostics(ts.createProgram([file], options, host))
    .map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
}

export function checkReference(task) {
  assert.deepEqual(diagnostics(task, task.solution), [], `${task.id}: reference type errors`);
  const { outputText } = ts.transpileModule(task.solution, { compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.None,
  } });
  for (const check of [...task.visibleTests, ...task.hiddenTests]) {
    if (check.kind !== "runtime") continue;
    const result = vm.runInNewContext(`${outputText}\n(${check.expression})`, {}, { timeout: 200 });
    assert.deepEqual(JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(check.expected)), `${task.id}/${check.id}`);
  }
}
