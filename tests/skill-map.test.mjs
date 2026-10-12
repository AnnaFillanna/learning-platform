import test from "node:test";
import assert from "node:assert/strict";
import { load, plain } from "./helpers/load-typescript.mjs";

const { skillMap, skillRegistry, validateSkillMap, createSkillRegistry } = load("src/skills/registry.ts");
const { learningBlocks } = load("src/progress/currentBlock.ts");
const { javascriptTasks } = load("src/tasks/javascriptTasks.ts");
const { masteryDimensions } = load("src/types/skill.ts");

const expectedSections = {
  foundations: 8, primitives: 8, arrays: 9, objects: 7, functions: 10,
  aliases: 6, interfaces: 8, unions: 6, special: 6, narrowing: 9,
  assertions: 6, enums: 6, generics: 11, operators: 5, utilities: 12,
  advanced: 6, classes: 13, dom: 10, async: 8, api: 8, modules: 7,
  errors: 6, react: 14, architecture: 8, debugging: 9, application: 10,
};

test("all 26 sections and all 216 requested concepts have stable independent IDs", () => {
  const ts = skillRegistry.forLanguage("typescript");
  assert.equal(ts.sections.length, 26);
  assert.equal(ts.skills.length, 216);
  assert.equal(ts.skills.filter((skill) => skill.kind === "subskill").length, 54);
  assert.deepEqual(plain(ts.sections.map((section) => section.order)), Array.from({ length: 26 }, (_, index) => index + 1));
  for (const [section, count] of Object.entries(expectedSections)) {
    assert.equal(ts.skills.filter((skill) => skill.sectionId === `ts-section-${section}`).length, count, section);
  }
  assert.equal(new Set([...skillMap.sections, ...skillMap.skills].map((node) => node.id)).size, skillMap.sections.length + skillMap.skills.length);
  assert.deepEqual(plain(validateSkillMap(skillMap)), []);
});

test("JavaScript IDs are adapters of existing blocks and topics, without invented React skills", () => {
  const js = skillRegistry.forLanguage("javascript");
  const known = new Set([...learningBlocks.map((block) => block.id), ...javascriptTasks.flatMap((task) => task.topics)]);
  assert.deepEqual(new Set(js.skills.map((skill) => skill.id)), known);
  assert.equal(js.skills.length, 11);
  assert.equal(skillRegistry.get("js-arrays-filtering").parentSkillId, "arrays");
  assert.equal(js.skills.some((skill) => skill.id.includes("react")), false);
});

test("cross-language prerequisites resolve transitively to existing JavaScript nodes", () => {
  for (const skill of skillRegistry.forLanguage("typescript").skills) {
    const dependencies = skillRegistry.prerequisites(skill.id);
    assert.ok(dependencies.includes("basics"), skill.id);
    for (const dependency of dependencies) assert.ok(skillRegistry.has(dependency));
  }
  assert.ok(skillRegistry.prerequisites("ts-arrays-number").includes("arrays"));
  assert.ok(skillRegistry.prerequisites("ts-functions-types").includes("functions"));
  assert.ok(skillRegistry.prerequisites("ts-application-api-transform").includes("js-arrays-filtering"));
  assert.ok(skillRegistry.prerequisites("ts-async-fetch").includes("async-api"));
  assert.ok(skillRegistry.prerequisites("ts-dom-handlers").includes("events-forms"));
});

test("generic constraints and React reducers have specific conceptual prerequisites", () => {
  const keyof = skillRegistry.get("ts-generics-keyof-constraints");
  assert.equal(keyof.parentSkillId, "ts-generics-constraints");
  assert.ok(keyof.prerequisites.includes("ts-operators-keyof"));
  const reducer = skillRegistry.prerequisites("ts-react-use-reducer");
  for (const id of ["ts-unions-discriminated", "ts-aliases-objects", "ts-interfaces-basic", "ts-functions-types"]) {
    assert.ok(reducer.includes(id), id);
  }
  assert.ok(skillRegistry.get("ts-react-use-reducer").assumedKnowledge.length);
});

test("map supports all ten mastery dimensions, independently of difficulty", () => {
  assert.equal(masteryDimensions.length, 10);
  assert.deepEqual(new Set(skillRegistry.forLanguage("typescript").skills.flatMap((skill) => skill.dimensions)), new Set(masteryDimensions));
  for (const skill of skillMap.skills) assert.equal("difficulty" in skill, false);
});

test("registry rejects duplicates, dangling references and cyclic dependencies", () => {
  const duplicate = plain(skillMap);
  duplicate.skills.push(duplicate.skills[0]);
  assert.throws(() => createSkillRegistry(duplicate), /Duplicate id/);
  const dangling = plain(skillMap);
  dangling.skills[0].prerequisites = ["does-not-exist"];
  assert.throws(() => createSkillRegistry(dangling), /Missing prerequisite/);
  const cyclic = plain(skillMap);
  cyclic.skills[0].prerequisites = [cyclic.skills[1].id];
  cyclic.skills[1].prerequisites = [cyclic.skills[0].id];
  assert.throws(() => createSkillRegistry(cyclic), /Dependency cycle/);
  const self = plain(skillMap);
  self.skills[0].prerequisites = [self.skills[0].id];
  assert.throws(() => createSkillRegistry(self), /Dependency cycle/);
});

test("registry rejects invalid hierarchy and accidental JS to TS migration", () => {
  const wrongParent = plain(skillMap);
  const child = wrongParent.skills.find((skill) => skill.id === "ts-generics-keyof-constraints");
  child.parentSkillId = "ts-primitives-number";
  assert.throws(() => createSkillRegistry(wrongParent), /Invalid parent/);
  const changedJS = plain(skillMap);
  changedJS.skills[0].prerequisites = ["ts-foundations-purpose"];
  assert.throws(() => createSkillRegistry(changedJS), /JavaScript must not require TypeScript/);
  assert.throws(() => skillRegistry.prerequisites("unknown"), /Unknown skill/);
});
