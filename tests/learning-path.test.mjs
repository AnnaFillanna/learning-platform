import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const { outputText } = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  });
  const exports = {};
  cache.set(file, exports);
  vm.runInNewContext(outputText, {
    exports,
    require: (name) => {
      if (!name.startsWith('.')) return require(name);
      const base = path.resolve(path.dirname(file), name);
      const resolved = ['.ts', '.tsx'].map(ext => base + ext).find(fs.existsSync);
      assert.ok(resolved, `Missing module: ${name}`);
      return load(resolved);
    },
  });
  return exports;
}
const { default: LearningPath } = load(path.join(root, 'src/components/LearningPath.tsx'));
const { default: TrainingCard } = load(path.join(root, 'src/components/TrainingCard.tsx'));
const { learningBlocks } = load(path.join(root, 'src/progress/currentBlock.ts'));
function findElements(element, type) {
  if (!element || typeof element !== 'object') return [];
  if (Array.isArray(element)) return element.flatMap(item => findElements(item, type));
  return [...(element.type === type ? [element] : []), ...findElements(element.props?.children, type)];
}

test('every row selects its own block and only the selected row is pressed', () => {
  let selected;
  const tree = LearningPath({ blocks: learningBlocks, selectedBlockId: 'arrays', language: 'de', onSelectBlock: id => { selected = id; } });
  const buttons = findElements(tree, 'button');
  assert.equal(buttons.length, 10);
  buttons.forEach((button, index) => {
    button.props.onClick();
    assert.equal(selected, learningBlocks[index].id);
    assert.equal(button.props['aria-pressed'], selected === 'arrays');
  });
});

test('both displays use independent skill percent, not completed / estimated tasks', () => {
  const block = { ...learningBlocks[2], completedTasks: 9, estimatedTasks: 200, progressPercent: 63 };
  const card = renderToStaticMarkup(createElement(TrainingCard, {
    language: 'de', block, taskCount: 15, onTaskCountChange() {}, onContinue() {},
  }));
  assert.match(card, /value="63" max="100"/);
  assert.match(card, /9.*200/);
  assert.match(card, /checked="" value="15"|value="15" checked=""/);
  const overview = renderToStaticMarkup(createElement(LearningPath, {
    language: 'de', blocks: [block], selectedBlockId: block.id, onSelectBlock() {},
  }));
  assert.match(overview, /63%/);
  assert.match(overview, /width:63%/);
});
