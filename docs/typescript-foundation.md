# TypeScript foundation — этап 1

Исходник: `/Users/annafilippi/PET/pet`. Результат находится в отдельной папке
`pet-typescript` рядом с прежними рабочими копиями. Исходник и `sources/` не изменены.

## Фактическая архитектура исходника

В этой версии нет полноценной JavaScript Skill Map или Continue Algorithm.
Есть десять `learningBlocks` с демонстрационными процентами, три локальных
JavaScript-задания, генератор, жёстко привязанный к `js-arrays-filtering`,
JavaScript runner и хранилище Attempts. Поэтому результат этого этапа — общий
реестр данных и проверенные контракты для постепенного подключения к приложению.
Проценты и количество решённых заданий не преобразуются в освоенные навыки.

## Что готово

- Один `ProgrammingLanguage`: `javascript | typescript`.
- Общая Task расширена необязательными learning-полями для совместимости с JS.
  Все TS-задания в каталоге обязаны содержать полные метаданные.
- 26 разделов, 162 Skills и 54 Subskills: всего 216 TypeScript-узлов.
  Никакие из запрошенных тем не объединены в один огромный Skill.
- `parentSkillId` задаёт иерархию; `prerequisites` отдельно задаёт направленный граф.
  Родитель поднавыка также является его prerequisite.
- JS-адаптер сохраняет все десять существующих block-id и `js-arrays-filtering`.
  Он не создаёт новую конкурирующую карту JS и не меняет JavaScript content.
- Проверяемый реестр: уникальность, отсутствующие зависимости, иерархия, циклы,
  направление зависимостей. `forLanguage("typescript")` использует общий реестр,
  поэтому ссылки на JavaScript разрешаются.
- 18 различных TS-заданий на RU/DE/EN. Бизнес-данные, код и проверки общие.
  В каждом задании три постепенные подсказки; visible/hidden tests разделены.
- Стадии: recognition, guided-practice, independent-usage, mixed-practice,
  transfer-to-real-application, delayed-repetition.
- Десять dimensions: syntax, modelling, inference, narrowing, generics,
  error reading, JS+TS, API, React, architecture.
- SkillProgress хранит dimension-specific evidence с task-id, контекстом,
  стадией, временем, подсказками и фактом просмотра решения.
  Это контракт данных, а не готовый алгоритм вычисления mastery.
- Чистые функции readiness и Next Task принимают явный LearningSnapshot.
  Они проверяют транзитивные prerequisites, язык, stage, повторение по dueSkillIds
  и уже выполненные задания. Они не заменяют существующий JS-загрузчик.
- Старые Attempt-данные остаются совместимыми благодаря необязательным новым полям.
- Единственное изменение React-компонента удаляет из TrainingCard лишнее
  `true &&`, которое вызывало исходную lint-ошибку. Результат рендеринга тот же.

## JavaScript → TypeScript

Использованы реальные JS-id:

| JS-id | Связанные TS-направления |
| --- | --- |
| `basics` | Foundations и далее транзитивно вся карта |
| `arrays` | Arrays & Tuples, задачи с коллекциями |
| `objects` | Objects, моделирование, React, миграция |
| `functions` | Functions, React, миграция |
| `logic-loops` | Narrowing, Errors & Safe Code |
| `dom` | DOM + TypeScript и DOM assertions |
| `events-forms` | DOM events, FormData, Typed Event Bus |
| `async-api` | Async TypeScript, API & Data Modelling |
| `modules-oop` | Modules, Classes, instanceof |
| `js-arrays-filtering` | Преобразование API-данных и смешанные Tasks |

Блок `strings-data` сохранён, но искусственные зависимости к нему не добавлялись.
В исходнике нет самостоятельных JS skills для callbacks, React/useReducer и т. п.
Для callbacks используется существующий блок `functions`. Требования React
хранятся в `assumedKnowledge`, явно выдаются readiness как `missingKnowledge`
и не считаются выполненными молча. Когда появится реальная JS React-карта,
нужно заменить эти требования ссылками на её стабильные id.

## Точки входа

- `src/skills/registry.ts`: skillMap, skillRegistry, validateSkillMap.
- `src/learning/catalog.ts`: taskCatalog, programmingLanguages, getTasks.
- `src/learning/nextTask.ts`: getTaskRequirements, getTaskReadiness, selectNextTask.
- `src/learning/validateTasks.ts`: проверка метаданных каталога.
- `src/types/learning.ts`: stage/dimensions/test/progress/snapshot contracts.

`masteredSkillIds` нельзя заполнять из демонстрационных процентов UI или просто
из списка completedTaskIds. Отсутствие подходящего задания возвращается как
`undefined`: нельзя выдать заблокированный Skill или бесконечно повторять один
и тот же пример. Даты повторения должен рассчитывать будущий progress policy;
селектор принимает уже подготовленные dueSkillIds и сам даты не придумывает.

## Проверки

`npm test` запускает старые и новые проверки. Новые тесты проверяют граф,
готовность задач, разделение локализаций/тестов, регрессии JS и все TS-решения.
Для каждого TS-решения используется настоящий TypeScript Compiler API со
strict=true, ES2022, без глобальных Node-типов. Проверяются положительные и
отрицательные type contracts, затем runtime-проверки в тестовом VM-контексте.
Намеренно испорченные решения подтверждают обнаружение any, неверной
изменяемости, implicit any, граничных ошибок и подмены nullish-проверки truthiness.
Директивы `@ts-expect-error` в type tests нужны для отрицательных контрактов.

`tests/helpers/check-typescript-task.mjs` — проверка доверенных фикстур,
**не production sandbox для пользовательского кода**. Это не готовая
серверная точка проверки решений.

Доступные команды: `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`.

## Точная точка продолжения: этап 2

TypeScript пока **не подключён к пользовательскому экрану заданий**.
Нельзя передать TypeScript-код текущему `runJavaScript`: он не проверяет типы.
Поэтому на этом этапе приложение продолжает прежний JavaScript-сценарий.

Дальше нужно последовательно:

1. Добавить production-проверку TypeScript: strict diagnostics + type tests +
   runtime tests в изолированной среде с ограничением времени. Не использовать
   тестовый VM helper как песочницу для произвольного пользовательского кода.
2. Спроектировать публичную Task-проекцию: скрытые тесты и solution из авторского
   каталога не отправлять вместе с начальными данными задания. Visible tests
   показывать отдельно. Подсказки и решение открывать по существующим правилам.
3. Добавить выбор языка в существующий UI и передавать programmingLanguage в
   session/loader/runner, сохранив дизайн и JS-путь. Подключить общий каталог.
4. Связать реальные Attempt-результаты с dimension-specific evidence и persistence.
   Выбрать mastery/review policy, которая требует разнообразных контекстов,
   самостоятельного применения, переноса и отложенного повторения. Успешная серия
   однотипных упражнений сама по себе не должна давать mastery.
5. Начальные JS-знания определять диагностикой/существующим прогрессом,
   а не фиктивными процентами. Иначе cross-language prerequisites обоснованно
   заблокируют TS-задания для пустого LearningSnapshot.
6. Добавить браузерный end-to-end тест: выбор TS → задача → проверка → Attempt →
   обновление Progress → Next Task; отдельно повторить прежний JS-сценарий.

TS AI-генератор, переписывание Continue Algorithm, Python, изменение дизайна и
сотни заданий на этом этапе не добавлялись. Вызовов внешнего AI API не было.
