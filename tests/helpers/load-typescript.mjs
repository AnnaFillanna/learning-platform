import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, "../..");
const cache = new Map();

export function load(relativePath) {
  const file = path.resolve(root, relativePath);
  if (cache.has(file)) return cache.get(file);
  const { outputText } = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  cache.set(file, exports);
  vm.runInNewContext(outputText, {
    exports,
    require: (name) => name.startsWith(".")
      ? load(path.resolve(path.dirname(file), `${name}.ts`))
      : require(name),
  }, { filename: file });
  return exports;
}

export const plain = (value) => JSON.parse(JSON.stringify(value));
