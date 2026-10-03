import type { LearningBlock } from "../types/training";

// Independent mock fields: task counts describe activity; percent will describe
// skill mastery. Neither is calculated from the other, and 100 is not a limit.
export const learningBlocks: LearningBlock[] = [
  {
    "id": "basics",
    "title": "JS Basics",
    "description": {
      "de": "Variablen, Datentypen, Operatoren, Vergleiche, if/else, switch",
      "en": "Variables, data types, operators, comparisons, if/else, switch",
      "ru": "Переменные, типы данных, операторы, сравнения, if/else, switch"
    },
    "progressPercent": 100,
    "completedTasks": 100,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "logic-loops",
    "title": "Logic & Loops",
    "description": {
      "de": "Logik, Bedingungen, for, while, Zähler",
      "en": "Logic, conditions, for, while, counters",
      "ru": "Логика, условия, for, while, счётчики"
    },
    "progressPercent": 82,
    "completedTasks": 82,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "arrays",
    "title": "Arrays",
    "description": {
      "de": "Indexing, Methoden, Suchen, Filtern, Transformieren",
      "en": "Indexing, methods, searching, filtering, transforming",
      "ru": "Индексы, методы, поиск, фильтрация, преобразование"
    },
    "progressPercent": 37,
    "completedTasks": 37,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "functions",
    "title": "Functions",
    "description": {
      "de": "Parameter, return, Callbacks, Scope",
      "en": "Parameters, return, callbacks, scope",
      "ru": "Параметры, return, колбэки, область видимости"
    },
    "progressPercent": 0,
    "completedTasks": 0,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "objects",
    "title": "Objects",
    "description": {
      "de": "Properties, Methoden, verschachtelte Daten, Arrays mit Objekten",
      "en": "Properties, methods, nested data, arrays of objects",
      "ru": "Свойства, методы, вложенные данные, массивы объектов"
    },
    "progressPercent": 0,
    "completedTasks": 0,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "strings-data",
    "title": "Strings & Data",
    "description": {
      "de": "Strings, Zahlen, Konvertierung und Datenverarbeitung",
      "en": "Strings, numbers, conversion and data processing",
      "ru": "Строки, числа, преобразование типов и обработка данных"
    },
    "progressPercent": 0,
    "completedTasks": 0,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "dom",
    "title": "DOM",
    "description": {
      "de": "Selektoren, Elemente, Klassen und Änderungen auf der Seite",
      "en": "Selectors, elements, classes and page updates",
      "ru": "Селекторы, элементы, классы и изменения на странице"
    },
    "progressPercent": 0,
    "completedTasks": 0,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "events-forms",
    "title": "Events & Forms",
    "description": {
      "de": "Events, Inputs, Validierung und Submit",
      "en": "Events, inputs, validation and submit",
      "ru": "События, поля ввода, валидация и отправка форм"
    },
    "progressPercent": 0,
    "completedTasks": 0,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "async-api",
    "title": "Async & API",
    "description": {
      "de": "Promises, async/await, fetch, APIs und Fehlerbehandlung",
      "en": "Promises, async/await, fetch, APIs and error handling",
      "ru": "Промисы, async/await, fetch, API и обработка ошибок"
    },
    "progressPercent": 0,
    "completedTasks": 0,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  },
  {
    "id": "modules-oop",
    "title": "Modules & OOP",
    "description": {
      "de": "Module, Klassen, Vererbung und Architektur-Grundlagen",
      "en": "Modules, classes, inheritance and architecture basics",
      "ru": "Модули, классы, наследование и основы архитектуры"
    },
    "progressPercent": 0,
    "completedTasks": 0,
    "estimatedTasks": 100,
    "assessment": {
      "kind": "mixed-skills"
    }
  }
];

export const currentBlock = learningBlocks[2]; // Start with Arrays.
