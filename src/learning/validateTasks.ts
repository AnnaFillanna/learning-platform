import { learningStages, masteryDimensions } from "../types/skill";
import type { Task } from "../types/task";
import { skillRegistry } from "../skills/registry";

export function validateTasks(tasks: readonly Task[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const task of tasks) {
    if (ids.has(task.id)) errors.push(`Duplicate task: ${task.id}`);
    ids.add(task.id);
    if (!task.topics.length) errors.push(`No topics: ${task.id}`);
    for (const id of [...task.topics, ...(task.prerequisites ?? [])]) {
      if (!skillRegistry.has(id)) errors.push(`Unknown skill in ${task.id}: ${id}`);
    }
    if (!task.topics.some((id) => skillRegistry.has(id) && skillRegistry.get(id).programmingLanguage === task.programmingLanguage)) {
      errors.push(`Task has no topics in its language: ${task.id}`);
    }
    for (const language of ["ru", "de", "en"] as const) {
      const content = task.content[language];
      if (!content?.title.trim() || !content.description.trim() || content.hints.length !== 3 || content.hints.some((hint) => !hint.trim())) {
        errors.push(`Incomplete ${language} content: ${task.id}`);
      }
    }
    if (task.programmingLanguage !== "typescript") continue;
    if (!task.prerequisites || !task.context?.trim() || !task.stage || !learningStages.includes(task.stage)) {
      errors.push(`Incomplete learning metadata: ${task.id}`);
    }
    if (!task.dimensions?.length || task.dimensions.some((dimension) => !masteryDimensions.includes(dimension))) {
      errors.push(`Invalid dimensions: ${task.id}`);
    }
    if (task.validation?.mode !== "typescript" || task.validation.strict !== true) {
      errors.push(`Missing strict TypeScript validation: ${task.id}`);
    }
    const testIds = new Set<string>();
    for (const tests of [task.visibleTests, task.hiddenTests]) {
      if (!tests?.length) errors.push(`Missing test partition: ${task.id}`);
      for (const check of tests ?? []) {
        if (testIds.has(check.id)) errors.push(`Repeated visible/hidden test: ${task.id}/${check.id}`);
        testIds.add(check.id);
        if (check.kind === "type" ? !check.code.trim() : !check.expression.trim()) {
          errors.push(`Empty test: ${task.id}/${check.id}`);
        }
      }
    }
  }
  return errors;
}
