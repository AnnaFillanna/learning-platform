import test from "node:test";
import assert from "node:assert/strict";
import { load, plain } from "./helpers/load-typescript.mjs";
import { checkReference, diagnostics } from "./helpers/check-typescript-task.mjs";

const { taskCatalog, getTasks, programmingLanguages } = load("src/learning/catalog.ts");
const { validateTasks } = load("src/learning/validateTasks.ts");
const { learningStages } = load("src/types/skill.ts");
const tasks = getTasks("typescript");

test("one catalog supports unchanged JS tasks and 18 localized TS tasks", () => {
  assert.deepEqual(plain(programmingLanguages), ["javascript", "typescript"]);
  assert.equal(getTasks("javascript").length, 3);
  assert.equal(tasks.length, 18);
  assert.deepEqual(plain(validateTasks(taskCatalog)), []);
  assert.deepEqual(new Set(tasks.map((task) => task.stage)), new Set(learningStages));
  assert.equal(new Set(tasks.map((task) => task.context)).size, 18);
  for (const task of tasks) {
    assert.ok(task.topics.length > 1);
    assert.ok(task.visibleTests.length && task.hiddenTests.length);
    assert.equal(new Set([...task.visibleTests, ...task.hiddenTests].map((check) => check.id)).size, task.visibleTests.length + task.hiddenTests.length);
    for (const language of ["ru", "de", "en"]) {
      assert.ok(task.content[language].description);
      assert.equal(task.content[language].hints.length, 3);
      assert.equal("starterCode" in task.content[language], false);
      assert.equal("input" in task.content[language], false);
    }
  }
});

for (const task of tasks) {
  test(`${task.id}: reference passes strict typechecking, visible and hidden tests`, () => checkReference(task));
}

test("type contracts catch incorrect typings even when runtime results match", () => {
  const price = tasks.find((task) => task.id === "ts-price-declaration-002");
  assert.ok(diagnostics(price, "let price: any = 19.5;").length);
  assert.ok(diagnostics(price, 'let price: string = "19.5";').length);
  const product = tasks.find((task) => task.id === "ts-product-interface-008");
  assert.ok(diagnostics(product, product.solution.replace("price: number", "price: any")).length);
  const readonly = tasks.find((task) => task.id === "ts-readonly-user-010");
  assert.ok(diagnostics(readonly, readonly.solution.replace("readonly ", "")).length);
  const migration = tasks.find((task) => task.id === "ts-migrate-cart-017");
  assert.ok(diagnostics(migration, migration.starterCode).length);
});

test("hidden cases reject boundary errors and falsy fallbacks", () => {
  const optional = tasks.find((task) => task.id === "ts-optional-nickname-009");
  assert.throws(() => checkReference({ ...optional, solution: optional.solution.replace("??", "||") }), /empty-nickname/);
  const filtering = tasks.find((task) => task.id === "ts-affordable-products-015");
  assert.throws(() => checkReference({ ...filtering, solution: filtering.solution.replace("< 50", "<= 50") }), /boundary/);
});

test("catalog validation catches broken topics, translations and test partitions", () => {
  const broken = plain(tasks);
  broken[0].topics = ["missing-skill"];
  broken[1].content.ru.hints = [];
  broken[2].hiddenTests.push(broken[2].visibleTests[0]);
  broken[3].validation.strict = false;
  const errors = validateTasks(broken);
  assert.ok(errors.some((message) => message.includes("Unknown skill")));
  assert.ok(errors.some((message) => message.includes("Incomplete ru")));
  assert.ok(errors.some((message) => message.includes("Repeated visible/hidden")));
  assert.ok(errors.some((message) => message.includes("Missing strict")));
});
