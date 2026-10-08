import { javascriptTasks } from "../tasks/javascriptTasks";
import { typescriptTasks } from "../tasks/typescriptTasks";
import type { ProgrammingLanguage, Task } from "../types/task";
import { validateTasks } from "./validateTasks";

export const programmingLanguages: readonly ProgrammingLanguage[] = ["javascript", "typescript"];
export const taskCatalog: readonly Task[] = [...javascriptTasks, ...typescriptTasks];

const errors = validateTasks(taskCatalog);
if (errors.length) throw new Error(errors.join("\n"));

export function getTasks(programmingLanguage: ProgrammingLanguage): readonly Task[] {
  return taskCatalog.filter((task) => task.programmingLanguage === programmingLanguage);
}
