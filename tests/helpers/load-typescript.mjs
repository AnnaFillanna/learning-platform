import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, "../..");

export function createLoader(globals = {}) {
  const cache = new Map();
  function load(relativePath) {
    const file = path.resolve(root, relativePath);
    if (cache.has(file)) return cache.get(file);
    const { outputText } = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true, jsx: ts.JsxEmit.ReactJSX },
    });
    const exports = {};
    cache.set(file, exports);
    vm.runInNewContext(outputText, {
      ...globals,
      exports,
      require: (name) => {
        if (!name.startsWith(".")) return require(name);
        const base = path.resolve(path.dirname(file), name.replace(/\.js$/, ""));
        return load([`${base}.ts`, `${base}.tsx`].find(fs.existsSync));
      },
    }, { filename: file });
    return exports;
  }
  return load;
}

export const load = createLoader();
export const plain = (value) => JSON.parse(JSON.stringify(value));
