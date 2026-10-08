import { javascriptSkillMap } from "./javascriptSkillMap";
import { typescriptSkillMap } from "./typescriptSkillMap";
import type { Skill, SkillId, SkillMap } from "../types/skill";
import type { ProgrammingLanguage } from "../types/task";

export function validateSkillMap(map: SkillMap): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const sections = new Map(map.sections.map((section) => [section.id, section]));
  const skills = new Map(map.skills.map((skill) => [skill.id, skill]));
  for (const node of [...map.sections, ...map.skills]) {
    if (ids.has(node.id)) errors.push(`Duplicate id: ${node.id}`);
    ids.add(node.id);
    if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(node.id)) {
      errors.push(`Invalid id: ${node.id}`);
    }
  }
  for (const skill of map.skills) {
    const section = sections.get(skill.sectionId);
    if (!section || section.programmingLanguage !== skill.programmingLanguage) {
      errors.push(`Invalid section for ${skill.id}: ${skill.sectionId}`);
    }
    if (new Set(skill.prerequisites).size !== skill.prerequisites.length) {
      errors.push(`Duplicate prerequisites: ${skill.id}`);
    }
    if (skill.kind === "subskill" && !skill.parentSkillId) {
      errors.push(`Missing parent: ${skill.id}`);
    }
    if (skill.parentSkillId) {
      const parent = skills.get(skill.parentSkillId);
      if (!parent || parent.sectionId !== skill.sectionId) {
        errors.push(`Invalid parent for ${skill.id}: ${skill.parentSkillId}`);
      }
      if (!skill.prerequisites.includes(skill.parentSkillId)) {
        errors.push(`Parent must be a prerequisite: ${skill.id}`);
      }
    }
    for (const prerequisite of skill.prerequisites) {
      const target = skills.get(prerequisite);
      if (!target) errors.push(`Missing prerequisite for ${skill.id}: ${prerequisite}`);
      if (target?.programmingLanguage === "typescript" && skill.programmingLanguage === "javascript") {
        errors.push(`JavaScript must not require TypeScript: ${skill.id}`);
      }
    }
  }
  const visited = new Set<SkillId>();
  const visiting = new Set<SkillId>();
  function visit(id: SkillId, path: SkillId[]) {
    if (visiting.has(id)) {
      errors.push(`Dependency cycle: ${[...path, id].join(" -> ")}`);
      return;
    }
    if (visited.has(id)) return;
    visiting.add(id);
    for (const prerequisite of skills.get(id)?.prerequisites ?? []) {
      visit(prerequisite, [...path, id]);
    }
    visiting.delete(id);
    visited.add(id);
  }
  for (const skill of map.skills) visit(skill.id, []);
  return errors;
}

export function createSkillRegistry(map: SkillMap) {
  const errors = validateSkillMap(map);
  if (errors.length) throw new Error(errors.join("\n"));
  const byId = new Map(map.skills.map((skill) => [skill.id, skill]));

  function get(id: SkillId): Skill {
    const skill = byId.get(id);
    if (!skill) throw new Error(`Unknown skill: ${id}`);
    return skill;
  }

  function prerequisites(id: SkillId): SkillId[] {
    const result = new Set<SkillId>();
    function collect(current: SkillId) {
      for (const prerequisite of get(current).prerequisites) {
        if (result.has(prerequisite)) continue;
        collect(prerequisite);
        result.add(prerequisite);
      }
    }
    collect(id);
    return [...result];
  }

  return {
    get,
    has: (id: SkillId) => byId.has(id),
    prerequisites,
    forLanguage: (programmingLanguage: ProgrammingLanguage): SkillMap => ({
      sections: map.sections.filter((section) => section.programmingLanguage === programmingLanguage),
      skills: map.skills.filter((skill) => skill.programmingLanguage === programmingLanguage),
    }),
  };
}

export const skillMap: SkillMap = {
  sections: [...javascriptSkillMap.sections, ...typescriptSkillMap.sections],
  skills: [...javascriptSkillMap.skills, ...typescriptSkillMap.skills],
};

export const skillRegistry = createSkillRegistry(skillMap);
