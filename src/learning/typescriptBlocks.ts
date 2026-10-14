import { skillRegistry } from '../skills/registry';
import type { LearnerTask } from '../types/learnerTask';
import type { LearningSnapshot } from '../types/learning';
import type { LearningBlock } from '../types/training';

const descriptions: Record<string, LearningBlock['description']> = {
  'ts-section-foundations': { ru: 'Проверка типов, вывод типов, отличие от JavaScript', de: 'Typprüfung, Typinferenz, Unterschiede zu JavaScript', en: 'Type checking, inference, differences from JavaScript' },
  'ts-section-primitives': { ru: 'Строки, числа, логические и литеральные типы', de: 'Strings, Zahlen, Booleans und Literaltypen', en: 'Strings, numbers, booleans and literal types' },
  'ts-section-arrays': { ru: 'Типизированные массивы и кортежи', de: 'Typisierte Arrays und Tupel', en: 'Typed arrays and tuples' },
  'ts-section-objects': { ru: 'Свойства объектов, необязательные поля, словари', de: 'Objekteigenschaften, optionale Felder, Dictionaries', en: 'Object properties, optional fields, dictionaries' },
  'ts-section-functions': { ru: 'Типы параметров, возвращаемые значения, void', de: 'Parametertypen, Rückgabewerte, void', en: 'Parameter types, return values, void' },
  'ts-section-interfaces': { ru: 'Описание структуры объектов, interface и type', de: 'Objektstrukturen beschreiben, interface und type', en: 'Describing object shapes, interface and type' },
  'ts-section-special': { ru: 'any, unknown, never и безопасная проверка данных', de: 'any, unknown, never und sichere Datenprüfung', en: 'any, unknown, never and safe data checks' },
  'ts-section-application': { ru: 'Моделирование данных и практические задачи', de: 'Datenmodellierung und praktische Aufgaben', en: 'Data modelling and practical exercises' },
};

export function getTypeScriptBlocks(tasks: readonly LearnerTask[], snapshot: LearningSnapshot): (LearningBlock & { tasks: LearnerTask[] })[] {
  const map = skillRegistry.forLanguage('typescript');
  return [...map.sections].sort((a, b) => a.order - b.order).map((section) => {
    // One primary section per task; secondary topics do not duplicate exercises.
    const exercises = tasks.filter((task) => task.programmingLanguage === 'typescript' && task.topics.length > 0 && skillRegistry.get(task.topics[0]).sectionId === section.id);
    const skills = map.skills.filter((skill) => skill.sectionId === section.id);
    const description = skills.filter((skill) => skill.kind !== 'subskill').slice(0, 3).map((skill) => skill.title.replace(/^TS\s*[-·]\s*/, '')).join(' · ');
    return { id: section.id, title: section.title, description: descriptions[section.id] ?? { ru: description, de: description, en: description },
      tasks: exercises, completedTasks: exercises.filter((task) => snapshot.completedTaskIds.includes(task.id)).length,
      progressPercent: skills.length ? Math.round(100 * skills.filter((skill) => snapshot.masteredSkillIds.includes(skill.id)).length / skills.length) : 0 };
  });
}

export function getBlockPractice(tasks: readonly LearnerTask[], snapshot: LearningSnapshot) {
  const available = tasks.filter((task) => task.stage === 'delayed-repetition'
    ? task.topics.some((id) => snapshot.dueSkillIds.includes(id))
    : !snapshot.completedTaskIds.includes(task.id));
  const repeat = available.length === 0;
  return { tasks: repeat ? getBlockRepeatTasks(tasks) : available, repeat };
}

/** Manual practice does not reset evidence or unlock scheduled review tasks. */
export function getBlockRepeatTasks(tasks: readonly LearnerTask[]) {
  return tasks.filter((task) => task.stage !== "delayed-repetition");
}
