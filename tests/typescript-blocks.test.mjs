import test from 'node:test';
import assert from 'node:assert/strict';
import { load } from './helpers/load-typescript.mjs';
const { getTypeScriptBlocks, getBlockPractice } = load('src/learning/typescriptBlocks.ts');
const { createLearningLoader } = load('src/generator/learningLoader.ts');
const tasks = load('src/tasks/typescriptTasks.ts').typescriptTasks;
const snapshot = { masteredSkillIds: [], dueSkillIds: [], completedTaskIds: [], confirmedKnowledge: [] };

test('each TS exercise belongs to exactly one ordered block', () => {
  const blocks = getTypeScriptBlocks(tasks, snapshot);
  const assigned = blocks.flatMap(block => block.tasks.map(task => task.id));
  assert.equal(assigned.length, tasks.length);
  assert.equal(new Set(assigned).size, tasks.length);
  assert.ok(blocks.some(block => block.tasks.length === 0));
});

test('selected-block sessions never spill into another section', async () => {
  for (const block of getTypeScriptBlocks(tasks, snapshot)) {
    const practice = getBlockPractice(block.tasks, snapshot);
    const loader = createLearningLoader(practice.tasks, () => snapshot, practice.tasks[0]?.id, practice.repeat);
    const seen = new Set();
    for (let index = 0; index <= practice.tasks.length; index++) {
      const task = await loader(index);
      if (!task) break;
      assert.ok(block.tasks.some(item => item.id === task.id));
      assert.ok(!seen.has(task.id));
      seen.add(task.id);
    }
    assert.equal(seen.size, practice.tasks.length);
  }
});

test('completed blocks can be replayed without clearing progress or opening future reviews', async () => {
  const block = getTypeScriptBlocks(tasks, snapshot).find(block => block.tasks.length > 1);
  const done = { ...snapshot, completedTaskIds: block.tasks.map(task => task.id) };
  const practice = getBlockPractice(block.tasks, done);
  assert.equal(practice.repeat, true);
  assert.ok(practice.tasks.every(task => task.stage !== 'delayed-repetition'));
  const loader = createLearningLoader(practice.tasks, () => done, practice.tasks[0]?.id, true);
  for (let i = 0; i < practice.tasks.length; i++) assert.ok(await loader(i));
  assert.equal(await loader(practice.tasks.length), undefined);
  assert.equal(done.completedTaskIds.length, block.tasks.length);
});
