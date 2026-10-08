import ts from "typescript";
import type { Task } from "../src/types/task.js";
import type { PreparedCheck } from "../src/types/learnerTask.js";

const options: ts.CompilerOptions = {
  strict: true,
  noEmit: true,
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.ESNext,
  types: [],
  lib: ["lib.es2022.d.ts"],
  skipLibCheck: true,
};
const baseHost = ts.createCompilerHost(options);
const libraries = new Map<string, ts.SourceFile>();
const assertions = `
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
`;

export function prepareTypeScriptCheck(task: Task, code: string): PreparedCheck {
  if (code.length > 20000) return { ok: false, diagnostics: ["Submission exceeds 20,000 characters."] };
  if (/@ts-(ignore|nocheck|expect-error)\b/.test(code)) {
    return { ok: false, diagnostics: ["Compiler-suppression directives are not allowed in submissions."] };
  }
  const parsed = ts.createSourceFile("submission.ts", code, ts.ScriptTarget.ES2022, true);
  let external = false;
  function inspect(node: ts.Node) {
    if (ts.isImportDeclaration(node) || ts.isImportEqualsDeclaration(node) || ts.isImportTypeNode(node)
      || (ts.isExportDeclaration(node) && node.moduleSpecifier)
      || (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword)
      || (ts.isModuleDeclaration(node) && ts.isStringLiteral(node.name))) external = true;
    ts.forEachChild(node, inspect);
  }
  inspect(parsed);
  if (external || parsed.referencedFiles.length || parsed.typeReferenceDirectives.length || parsed.libReferenceDirectives.length) {
    return { ok: false, diagnostics: ["These starter exercises are self-contained; external imports and references are not supported."] };
  }
  const checks = [...(task.visibleTests ?? []), ...(task.hiddenTests ?? [])];
  const file = "/pet-submission.ts";
  const checkSource = checks.map((check) => check.kind === "type" ? `{\n${check.code}\n}` : `void (${check.expression});`).join("\n");
  const source = `${code}\n${assertions}\n${checkSource}\nexport {};`;
  const host: ts.CompilerHost = {
    ...baseHost,
    fileExists: (name) => name === file || (name.startsWith(ts.getDefaultLibFilePath(options).replace(/[^/\\]+$/, "")) && baseHost.fileExists(name)),
    readFile: (name) => name === file ? source : undefined,
    getSourceFile(name, version, onError) {
      if (name === file) return ts.createSourceFile(name, source, version, true);
      const libRoot = ts.getDefaultLibFilePath(options).replace(/[^/\\]+$/, "");
      if (!name.startsWith(libRoot) || !/[/\\]lib\.[\w.]+\.d\.ts$/.test(name)) return undefined;
      if (!libraries.has(name)) {
        const library = baseHost.getSourceFile(name, version, onError);
        if (library) libraries.set(name, library);
      }
      return libraries.get(name);
    },
  };
  const diagnostics = ts.getPreEmitDiagnostics(ts.createProgram([file], options, host));
  if (diagnostics.length) {
    const lines = code.split("\n").length;
    return {
      ok: false,
      diagnostics: diagnostics.slice(0, 12).map((diagnostic) => {
        const position = diagnostic.file && diagnostic.start !== undefined
          ? diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start) : undefined;
        if (position && position.line >= lines) return `TS${diagnostic.code}: The submission does not satisfy a task type contract.`;
        const prefix = position ? `${position.line + 1}:${position.character + 1} ` : "";
        return `${prefix}TS${diagnostic.code}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")}`;
      }),
    };
  }
  const { outputText } = ts.transpileModule(code, { compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.None,
  } });
  const runtimeTests = checks.filter((check) => check.kind === "runtime");
  const runtimeScript = `(() => {
    const evaluate = Function;
    const stringify = JSON.stringify;
    const cases = ${JSON.stringify(runtimeTests.map((check) => ({
      source: `"use strict";\n${outputText}\nreturn (${check.expression});`,
      expected: JSON.stringify(check.expected),
    })))};
    for (let index = 0; index < cases.length; index++) {
      try {
        const actual = evaluate(cases[index].source)();
        if (stringify(actual) !== cases[index].expected) return { success: false, status: "test-failed" };
      } catch {
        return { success: false, status: "execution-error", error: { name: "RuntimeError", message: "A runtime check could not complete." } };
      }
    }
    return { success: true, status: "success" };
  })()`;
  return { ok: true, runtimeScript, runtimeTestCount: runtimeTests.length };
}
