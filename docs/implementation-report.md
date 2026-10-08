# Результаты этапа 1

> Исторический отчёт первого этапа. Актуальное подключение приложения описано в [typescript-integration.md](typescript-integration.md).

Проверки: **42/42 tests, typecheck, lint, build — успешно**.
Добавлено 36 тестов; 6 прежних тестов сохранены и проходят.

TypeScript: **26 sections, 162 skills, 54 subskills (216 узлов)**.
Стартовые задания: **18**, локализация RU/DE/EN.

TypeScript пока не подключён к экрану тренировки. Полная граница этапа и план
продолжения описаны в [typescript-foundation.md](typescript-foundation.md).

## Созданные файлы

- `docs/typescript-foundation.md`
- `src/learning/catalog.ts`
- `src/learning/nextTask.ts`
- `src/learning/validateTasks.ts`
- `src/skills/javascriptSkillMap.ts`
- `src/skills/registry.ts`
- `src/skills/typescriptSkillMap.ts`
- `src/tasks/typescriptTasks.ts`
- `src/types/learning.ts`
- `src/types/skill.ts`
- `tests/helpers/check-typescript-task.mjs`
- `tests/helpers/load-typescript.mjs`
- `tests/javascript-regression.test.mjs`
- `tests/next-task.test.mjs`
- `tests/skill-map.test.mjs`
- `tests/typescript-tasks.test.mjs`
- `docs/implementation-report.md`

## Изменённые файлы

- `package.json`
- `src/components/TrainingCard.tsx`
- `src/types/attempt.ts`
- `src/types/task.ts`

## Прямые JavaScript prerequisites

`arrays`, `async-api`, `basics`, `dom`, `events-forms`, `functions`, `js-arrays-filtering`, `logic-loops`, `modules-oop`, `objects`.

Исходник `/Users/annafilippi/PET/pet` не изменён. Все изменения находятся в
рабочей копии `pet-typescript`. Файл `pet-typescript-foundation.patch` рядом с ней
содержит только новые и изменённые файлы этапа, без зависимостей и секретов.
