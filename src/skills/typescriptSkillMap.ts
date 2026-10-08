import type { SkillMap } from "../types/skill";

export const typescriptSkillMap: SkillMap = {
  "sections": [
    {
      "id": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "order": 1,
      "title": "TypeScript Foundations"
    },
    {
      "id": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "order": 2,
      "title": "Primitive Types"
    },
    {
      "id": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "order": 3,
      "title": "Arrays & Tuples"
    },
    {
      "id": "ts-section-objects",
      "programmingLanguage": "typescript",
      "order": 4,
      "title": "Objects"
    },
    {
      "id": "ts-section-functions",
      "programmingLanguage": "typescript",
      "order": 5,
      "title": "Functions"
    },
    {
      "id": "ts-section-aliases",
      "programmingLanguage": "typescript",
      "order": 6,
      "title": "Type Aliases"
    },
    {
      "id": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "order": 7,
      "title": "Interfaces"
    },
    {
      "id": "ts-section-unions",
      "programmingLanguage": "typescript",
      "order": 8,
      "title": "Union & Intersection Types"
    },
    {
      "id": "ts-section-special",
      "programmingLanguage": "typescript",
      "order": 9,
      "title": "Special Types"
    },
    {
      "id": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "order": 10,
      "title": "Type Narrowing"
    },
    {
      "id": "ts-section-assertions",
      "programmingLanguage": "typescript",
      "order": 11,
      "title": "Type Assertions"
    },
    {
      "id": "ts-section-enums",
      "programmingLanguage": "typescript",
      "order": 12,
      "title": "Enums & Literal Modelling"
    },
    {
      "id": "ts-section-generics",
      "programmingLanguage": "typescript",
      "order": 13,
      "title": "Generics"
    },
    {
      "id": "ts-section-operators",
      "programmingLanguage": "typescript",
      "order": 14,
      "title": "keyof / typeof / Indexed Access"
    },
    {
      "id": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "order": 15,
      "title": "Utility Types"
    },
    {
      "id": "ts-section-advanced",
      "programmingLanguage": "typescript",
      "order": 16,
      "title": "Advanced Type Manipulation"
    },
    {
      "id": "ts-section-classes",
      "programmingLanguage": "typescript",
      "order": 17,
      "title": "Classes & OOP"
    },
    {
      "id": "ts-section-dom",
      "programmingLanguage": "typescript",
      "order": 18,
      "title": "DOM + TypeScript"
    },
    {
      "id": "ts-section-async",
      "programmingLanguage": "typescript",
      "order": 19,
      "title": "Async TypeScript"
    },
    {
      "id": "ts-section-api",
      "programmingLanguage": "typescript",
      "order": 20,
      "title": "API & Data Modelling"
    },
    {
      "id": "ts-section-modules",
      "programmingLanguage": "typescript",
      "order": 21,
      "title": "Modules"
    },
    {
      "id": "ts-section-errors",
      "programmingLanguage": "typescript",
      "order": 22,
      "title": "Errors & Safe Code"
    },
    {
      "id": "ts-section-react",
      "programmingLanguage": "typescript",
      "order": 23,
      "title": "React + TypeScript"
    },
    {
      "id": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "order": 24,
      "title": "Architecture"
    },
    {
      "id": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "order": 25,
      "title": "Debugging TypeScript"
    },
    {
      "id": "ts-section-application",
      "programmingLanguage": "typescript",
      "order": 26,
      "title": "Real Application TypeScript"
    }
  ],
  "skills": [
    {
      "id": "ts-foundations-purpose",
      "sectionId": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "title": "Why TypeScript: prevent errors before execution",
      "kind": "skill",
      "prerequisites": [
        "basics"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-foundations-js-vs-ts",
      "sectionId": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "title": "TypeScript vs JavaScript: erased types and runtime",
      "kind": "skill",
      "prerequisites": [
        "basics",
        "ts-foundations-purpose"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-foundations-static-typing",
      "sectionId": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "title": "Static typing",
      "kind": "skill",
      "prerequisites": [
        "basics",
        "ts-foundations-js-vs-ts"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-foundations-inference",
      "sectionId": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "title": "Type inference",
      "kind": "skill",
      "prerequisites": [
        "basics",
        "ts-foundations-static-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-foundations-explicit-typing",
      "sectionId": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "title": "Explicit typing",
      "kind": "skill",
      "prerequisites": [
        "basics",
        "ts-foundations-static-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-foundations-compilation",
      "sectionId": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "title": "Compilation and emitted JavaScript",
      "kind": "skill",
      "prerequisites": [
        "basics",
        "ts-foundations-js-vs-ts"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-foundations-tsconfig",
      "sectionId": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "title": "tsconfig and compiler options",
      "kind": "skill",
      "prerequisites": [
        "basics",
        "ts-foundations-compilation"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-foundations-strict-mode",
      "sectionId": "ts-section-foundations",
      "programmingLanguage": "typescript",
      "title": "Strict mode",
      "kind": "skill",
      "prerequisites": [
        "basics",
        "ts-foundations-tsconfig",
        "ts-foundations-explicit-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-primitives-string",
      "sectionId": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "title": "string",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-inference",
        "ts-foundations-explicit-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-primitives-number",
      "sectionId": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "title": "number",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-inference",
        "ts-foundations-explicit-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-primitives-boolean",
      "sectionId": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "title": "boolean",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-inference",
        "ts-foundations-explicit-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-primitives-null",
      "sectionId": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "title": "null",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-inference",
        "ts-foundations-explicit-typing",
        "ts-foundations-strict-mode"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-primitives-undefined",
      "sectionId": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "title": "undefined",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-inference",
        "ts-foundations-explicit-typing",
        "ts-foundations-strict-mode"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-primitives-bigint",
      "sectionId": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "title": "bigint",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-inference",
        "ts-foundations-explicit-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-primitives-symbol",
      "sectionId": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "title": "symbol",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-inference",
        "ts-foundations-explicit-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-primitives-literals",
      "sectionId": "ts-section-primitives",
      "programmingLanguage": "typescript",
      "title": "Literal types",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-inference",
        "ts-foundations-explicit-typing",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-primitives-boolean"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-arrays-typed",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "Typed arrays (Array values, not binary TypedArray)",
      "kind": "skill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-primitives-number",
        "ts-primitives-string"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-arrays-number",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "number[]",
      "kind": "subskill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-arrays-typed"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-arrays-typed"
    },
    {
      "id": "ts-arrays-string",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "string[]",
      "kind": "subskill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-arrays-typed"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-arrays-typed"
    },
    {
      "id": "ts-arrays-generic-syntax",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "Array<T> notation",
      "kind": "subskill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-arrays-typed"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-arrays-typed"
    },
    {
      "id": "ts-arrays-objects",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "Arrays of objects",
      "kind": "subskill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-objects-typing",
        "ts-arrays-typed"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-arrays-typed"
    },
    {
      "id": "ts-arrays-readonly",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "Readonly arrays",
      "kind": "subskill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-arrays-typed"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-arrays-typed"
    },
    {
      "id": "ts-arrays-tuples",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "Tuples",
      "kind": "skill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-arrays-typed"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-arrays-tuples-optional",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "Optional tuple elements",
      "kind": "subskill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-primitives-undefined",
        "ts-arrays-tuples"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-arrays-tuples"
    },
    {
      "id": "ts-arrays-tuples-readonly",
      "sectionId": "ts-section-arrays",
      "programmingLanguage": "typescript",
      "title": "Readonly tuples",
      "kind": "subskill",
      "prerequisites": [
        "arrays",
        "ts-foundations-explicit-typing",
        "ts-foundations-inference",
        "ts-arrays-readonly",
        "ts-arrays-tuples"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-arrays-tuples"
    },
    {
      "id": "ts-objects-typing",
      "sectionId": "ts-section-objects",
      "programmingLanguage": "typescript",
      "title": "Object typing",
      "kind": "skill",
      "prerequisites": [
        "objects",
        "ts-foundations-explicit-typing",
        "ts-primitives-string",
        "ts-primitives-number"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-objects-property-types",
      "sectionId": "ts-section-objects",
      "programmingLanguage": "typescript",
      "title": "Property types",
      "kind": "subskill",
      "prerequisites": [
        "objects",
        "ts-foundations-explicit-typing",
        "ts-objects-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-objects-typing"
    },
    {
      "id": "ts-objects-optional",
      "sectionId": "ts-section-objects",
      "programmingLanguage": "typescript",
      "title": "Optional properties",
      "kind": "subskill",
      "prerequisites": [
        "objects",
        "ts-foundations-explicit-typing",
        "ts-primitives-undefined",
        "ts-objects-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-objects-typing"
    },
    {
      "id": "ts-objects-readonly",
      "sectionId": "ts-section-objects",
      "programmingLanguage": "typescript",
      "title": "Readonly properties",
      "kind": "subskill",
      "prerequisites": [
        "objects",
        "ts-foundations-explicit-typing",
        "ts-objects-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-objects-typing"
    },
    {
      "id": "ts-objects-nested",
      "sectionId": "ts-section-objects",
      "programmingLanguage": "typescript",
      "title": "Nested objects",
      "kind": "subskill",
      "prerequisites": [
        "objects",
        "ts-foundations-explicit-typing",
        "ts-objects-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-objects-typing"
    },
    {
      "id": "ts-objects-index-signatures",
      "sectionId": "ts-section-objects",
      "programmingLanguage": "typescript",
      "title": "Index signatures",
      "kind": "skill",
      "prerequisites": [
        "objects",
        "ts-foundations-explicit-typing",
        "ts-objects-property-types"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-objects-record",
      "sectionId": "ts-section-objects",
      "programmingLanguage": "typescript",
      "title": "Record for dictionaries",
      "kind": "skill",
      "prerequisites": [
        "objects",
        "ts-foundations-explicit-typing",
        "ts-objects-index-signatures",
        "ts-primitives-literals"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-parameters",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Parameter types",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-foundations-explicit-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-returns",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Return types",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-parameters",
        "ts-foundations-inference"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-void",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "void return types",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-returns"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-optional",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Optional parameters",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-parameters",
        "ts-primitives-undefined"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-defaults",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Default parameters",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-parameters",
        "ts-foundations-inference"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-rest",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Rest parameters",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-parameters",
        "ts-arrays-typed"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-types",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Function types",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-parameters",
        "ts-functions-returns"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-callbacks",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Typed callbacks",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-types"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-arrows",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Arrow functions and contextual typing",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-callbacks",
        "ts-foundations-inference"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-functions-overloads",
      "sectionId": "ts-section-functions",
      "programmingLanguage": "typescript",
      "title": "Overloads",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "ts-primitives-string",
        "ts-primitives-number",
        "ts-functions-types",
        "ts-unions-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-aliases-basic",
      "sectionId": "ts-section-aliases",
      "programmingLanguage": "typescript",
      "title": "Type aliases",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-primitives-string"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ]
    },
    {
      "id": "ts-aliases-reusable",
      "sectionId": "ts-section-aliases",
      "programmingLanguage": "typescript",
      "title": "Reusable types",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-aliases-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-aliases-basic"
    },
    {
      "id": "ts-aliases-objects",
      "sectionId": "ts-section-aliases",
      "programmingLanguage": "typescript",
      "title": "Object aliases",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-objects-typing",
        "ts-aliases-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-aliases-basic"
    },
    {
      "id": "ts-aliases-functions",
      "sectionId": "ts-section-aliases",
      "programmingLanguage": "typescript",
      "title": "Function aliases",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-functions-types",
        "ts-aliases-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-aliases-basic"
    },
    {
      "id": "ts-aliases-unions",
      "sectionId": "ts-section-aliases",
      "programmingLanguage": "typescript",
      "title": "Union aliases",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-unions-basic",
        "ts-aliases-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-aliases-basic"
    },
    {
      "id": "ts-aliases-composition",
      "sectionId": "ts-section-aliases",
      "programmingLanguage": "typescript",
      "title": "Type composition",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-aliases-objects",
        "ts-unions-intersection"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ]
    },
    {
      "id": "ts-interfaces-basic",
      "sectionId": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "title": "interface declarations",
      "kind": "skill",
      "prerequisites": [
        "ts-objects-typing"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ]
    },
    {
      "id": "ts-interfaces-properties",
      "sectionId": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "title": "Interface properties",
      "kind": "subskill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-interfaces-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-interfaces-basic"
    },
    {
      "id": "ts-interfaces-optional",
      "sectionId": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "title": "Optional interface properties",
      "kind": "subskill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-objects-optional",
        "ts-interfaces-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-interfaces-basic"
    },
    {
      "id": "ts-interfaces-readonly",
      "sectionId": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "title": "Readonly interface properties",
      "kind": "subskill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-objects-readonly",
        "ts-interfaces-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-interfaces-basic"
    },
    {
      "id": "ts-interfaces-methods",
      "sectionId": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "title": "Interface methods",
      "kind": "subskill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-functions-types",
        "ts-interfaces-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-interfaces-basic"
    },
    {
      "id": "ts-interfaces-extends",
      "sectionId": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "title": "Extending interfaces",
      "kind": "subskill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-interfaces-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-interfaces-basic"
    },
    {
      "id": "ts-interfaces-multiple-inheritance",
      "sectionId": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "title": "Multiple interface inheritance",
      "kind": "subskill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-interfaces-extends"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-interfaces-extends"
    },
    {
      "id": "ts-interfaces-vs-type",
      "sectionId": "ts-section-interfaces",
      "programmingLanguage": "typescript",
      "title": "Interface vs type",
      "kind": "skill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-interfaces-extends",
        "ts-aliases-objects"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ]
    },
    {
      "id": "ts-unions-basic",
      "sectionId": "ts-section-unions",
      "programmingLanguage": "typescript",
      "title": "Union types",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-primitives-string",
        "ts-primitives-number"
      ],
      "dimensions": [
        "type-modelling",
        "type-narrowing"
      ]
    },
    {
      "id": "ts-unions-intersection",
      "sectionId": "ts-section-unions",
      "programmingLanguage": "typescript",
      "title": "Intersection types",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-objects-typing",
        "ts-unions-basic"
      ],
      "dimensions": [
        "type-modelling",
        "type-narrowing"
      ]
    },
    {
      "id": "ts-unions-literals",
      "sectionId": "ts-section-unions",
      "programmingLanguage": "typescript",
      "title": "Literal unions",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-primitives-literals",
        "ts-unions-basic"
      ],
      "dimensions": [
        "type-modelling",
        "type-narrowing"
      ],
      "parentSkillId": "ts-unions-basic"
    },
    {
      "id": "ts-unions-objects",
      "sectionId": "ts-section-unions",
      "programmingLanguage": "typescript",
      "title": "Object unions",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-objects-typing",
        "ts-unions-basic"
      ],
      "dimensions": [
        "type-modelling",
        "type-narrowing"
      ],
      "parentSkillId": "ts-unions-basic"
    },
    {
      "id": "ts-unions-discriminated",
      "sectionId": "ts-section-unions",
      "programmingLanguage": "typescript",
      "title": "Discriminated unions",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-unions-literals",
        "ts-unions-objects"
      ],
      "dimensions": [
        "type-modelling",
        "type-narrowing"
      ],
      "parentSkillId": "ts-unions-objects"
    },
    {
      "id": "ts-unions-data-modelling",
      "sectionId": "ts-section-unions",
      "programmingLanguage": "typescript",
      "title": "Practical data modelling",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-unions-discriminated",
        "ts-aliases-objects",
        "ts-objects-optional"
      ],
      "dimensions": [
        "type-modelling",
        "type-narrowing"
      ]
    },
    {
      "id": "ts-special-any",
      "sectionId": "ts-section-special",
      "programmingLanguage": "typescript",
      "title": "any and loss of checking",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-static-typing",
        "ts-foundations-strict-mode"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-special-unknown",
      "sectionId": "ts-section-special",
      "programmingLanguage": "typescript",
      "title": "unknown at data boundaries",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-static-typing",
        "ts-special-any"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-special-never",
      "sectionId": "ts-section-special",
      "programmingLanguage": "typescript",
      "title": "never and impossible states",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-static-typing",
        "ts-unions-basic",
        "ts-functions-returns"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-special-void",
      "sectionId": "ts-section-special",
      "programmingLanguage": "typescript",
      "title": "void assignability and callbacks",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-static-typing",
        "ts-functions-void",
        "ts-functions-callbacks"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-special-object",
      "sectionId": "ts-section-special",
      "programmingLanguage": "typescript",
      "title": "object vs primitive values and object shapes",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-static-typing",
        "ts-objects-typing"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-special-avoid-any",
      "sectionId": "ts-section-special",
      "programmingLanguage": "typescript",
      "title": "Avoiding unnecessary any",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-static-typing",
        "ts-special-any",
        "ts-special-unknown",
        "ts-foundations-inference"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-narrowing-typeof",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "typeof guards",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-narrowing-instanceof",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "instanceof guards",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown",
        "modules-oop"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-narrowing-in",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "in guards",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown",
        "ts-unions-objects"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-narrowing-equality",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "Equality narrowing",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown",
        "ts-primitives-literals"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-narrowing-truthiness",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "Truthiness narrowing and falsy values",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown",
        "ts-primitives-null",
        "ts-primitives-undefined"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-narrowing-control-flow",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "Control-flow analysis",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown",
        "ts-narrowing-typeof",
        "ts-narrowing-equality"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-narrowing-custom-guards",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "Custom type guards",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown",
        "ts-functions-types",
        "ts-narrowing-control-flow"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-narrowing-predicates",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "Type predicates",
      "kind": "subskill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown",
        "ts-narrowing-custom-guards"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-narrowing-custom-guards"
    },
    {
      "id": "ts-narrowing-exhaustive",
      "sectionId": "ts-section-narrowing",
      "programmingLanguage": "typescript",
      "title": "Exhaustive checks",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-unions-basic",
        "ts-special-unknown",
        "ts-unions-discriminated",
        "ts-special-never",
        "ts-narrowing-control-flow"
      ],
      "dimensions": [
        "type-narrowing",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-assertions-as",
      "sectionId": "ts-section-assertions",
      "programmingLanguage": "typescript",
      "title": "as assertions",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-special-unknown"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-assertions-dom",
      "sectionId": "ts-section-assertions",
      "programmingLanguage": "typescript",
      "title": "DOM assertions",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-special-unknown",
        "dom",
        "ts-dom-elements",
        "ts-dom-query-selector",
        "ts-assertions-as"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ],
      "parentSkillId": "ts-assertions-as"
    },
    {
      "id": "ts-assertions-non-null",
      "sectionId": "ts-section-assertions",
      "programmingLanguage": "typescript",
      "title": "Non-null assertion",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-special-unknown",
        "ts-primitives-null",
        "ts-primitives-undefined",
        "ts-narrowing-truthiness"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-assertions-const",
      "sectionId": "ts-section-assertions",
      "programmingLanguage": "typescript",
      "title": "const assertions",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-special-unknown",
        "ts-primitives-literals",
        "ts-objects-readonly",
        "ts-arrays-tuples"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-assertions-satisfies",
      "sectionId": "ts-section-assertions",
      "programmingLanguage": "typescript",
      "title": "satisfies",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-special-unknown",
        "ts-objects-typing",
        "ts-foundations-inference",
        "ts-aliases-basic"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-assertions-unsafe",
      "sectionId": "ts-section-assertions",
      "programmingLanguage": "typescript",
      "title": "Unsafe assertions and when not to use them",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-explicit-typing",
        "ts-special-unknown",
        "ts-assertions-as",
        "ts-assertions-non-null",
        "ts-narrowing-custom-guards"
      ],
      "dimensions": [
        "type-modelling",
        "error-reading"
      ]
    },
    {
      "id": "ts-enums-basic",
      "sectionId": "ts-section-enums",
      "programmingLanguage": "typescript",
      "title": "enum declarations",
      "kind": "skill",
      "prerequisites": [
        "ts-primitives-literals",
        "ts-unions-literals"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ]
    },
    {
      "id": "ts-enums-numeric",
      "sectionId": "ts-section-enums",
      "programmingLanguage": "typescript",
      "title": "Numeric enums",
      "kind": "subskill",
      "prerequisites": [
        "ts-primitives-literals",
        "ts-unions-literals",
        "ts-enums-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-enums-basic"
    },
    {
      "id": "ts-enums-string",
      "sectionId": "ts-section-enums",
      "programmingLanguage": "typescript",
      "title": "String enums",
      "kind": "subskill",
      "prerequisites": [
        "ts-primitives-literals",
        "ts-unions-literals",
        "ts-enums-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-enums-basic"
    },
    {
      "id": "ts-enums-const",
      "sectionId": "ts-section-enums",
      "programmingLanguage": "typescript",
      "title": "const enum concept and compilation tradeoffs",
      "kind": "subskill",
      "prerequisites": [
        "ts-primitives-literals",
        "ts-unions-literals",
        "ts-foundations-compilation",
        "ts-modules-resolution",
        "ts-enums-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ],
      "parentSkillId": "ts-enums-basic"
    },
    {
      "id": "ts-enums-literal-modelling",
      "sectionId": "ts-section-enums",
      "programmingLanguage": "typescript",
      "title": "Modelling enum-like values with literal unions",
      "kind": "skill",
      "prerequisites": [
        "ts-primitives-literals",
        "ts-unions-literals",
        "ts-assertions-const"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ]
    },
    {
      "id": "ts-enums-vs-union",
      "sectionId": "ts-section-enums",
      "programmingLanguage": "typescript",
      "title": "Enum vs union",
      "kind": "skill",
      "prerequisites": [
        "ts-primitives-literals",
        "ts-unions-literals",
        "ts-enums-numeric",
        "ts-enums-string",
        "ts-enums-literal-modelling"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling"
      ]
    },
    {
      "id": "ts-generics-basic",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Generic functions",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-generics-type-parameter",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Type parameter <T>",
      "kind": "subskill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-generics-basic"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-generics-basic"
    },
    {
      "id": "ts-generics-multiple-parameters",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Multiple generic parameters",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-generics-type-parameter"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-generics-arrays",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Generic arrays",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-arrays-generic-syntax",
        "ts-generics-type-parameter"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-generics-objects",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Generic objects",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-generics-type-parameter"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-generics-interfaces",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Generic interfaces",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-generics-objects"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-generics-aliases",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Generic type aliases",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-generics-type-parameter",
        "ts-aliases-reusable"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-generics-constraints",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Generic constraints",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-generics-type-parameter"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-generics-keyof-constraints",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "keyof constraints",
      "kind": "subskill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-operators-keyof",
        "ts-generics-constraints"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-generics-constraints"
    },
    {
      "id": "ts-generics-defaults",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Default generic types",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-generics-aliases",
        "ts-generics-constraints"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-generics-utilities",
      "sectionId": "ts-section-generics",
      "programmingLanguage": "typescript",
      "title": "Reusable generic utilities",
      "kind": "skill",
      "prerequisites": [
        "ts-functions-types",
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-interfaces-basic",
        "ts-generics-multiple-parameters",
        "ts-generics-keyof-constraints",
        "ts-generics-arrays"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-operators-keyof",
      "sectionId": "ts-section-operators",
      "programmingLanguage": "typescript",
      "title": "keyof",
      "kind": "skill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-aliases-basic"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-operators-typeof",
      "sectionId": "ts-section-operators",
      "programmingLanguage": "typescript",
      "title": "typeof in type positions",
      "kind": "skill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-foundations-inference"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-operators-indexed-access",
      "sectionId": "ts-section-operators",
      "programmingLanguage": "typescript",
      "title": "Indexed access T[K]",
      "kind": "skill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-operators-keyof",
        "ts-arrays-typed"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-operators-keyof-typeof",
      "sectionId": "ts-section-operators",
      "programmingLanguage": "typescript",
      "title": "keyof typeof",
      "kind": "skill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-operators-keyof",
        "ts-operators-typeof"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-operators-dynamic-access",
      "sectionId": "ts-section-operators",
      "programmingLanguage": "typescript",
      "title": "Dynamic property access",
      "kind": "skill",
      "prerequisites": [
        "ts-objects-typing",
        "ts-aliases-basic",
        "ts-operators-indexed-access",
        "ts-generics-keyof-constraints"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-partial",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Partial",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-objects-optional"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-required",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Required",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-objects-optional"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-readonly",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Readonly",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-objects-readonly"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-pick",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Pick",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-operators-keyof"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-omit",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Omit",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-operators-keyof"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-record",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Record",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-objects-record",
        "ts-operators-keyof"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-exclude",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Exclude",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-unions-basic"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-extract",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Extract",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-unions-basic"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-non-nullable",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "NonNullable",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-unions-basic",
        "ts-primitives-null",
        "ts-primitives-undefined"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-return-type",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "ReturnType",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-functions-returns"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-parameters",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Parameters",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-functions-parameters",
        "ts-arrays-tuples"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-utilities-awaited",
      "sectionId": "ts-section-utilities",
      "programmingLanguage": "typescript",
      "title": "Awaited",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-aliases",
        "ts-generics-constraints",
        "ts-async-promise"
      ],
      "dimensions": [
        "type-modelling",
        "generic-thinking"
      ]
    },
    {
      "id": "ts-advanced-mapped",
      "sectionId": "ts-section-advanced",
      "programmingLanguage": "typescript",
      "title": "Mapped types",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-constraints",
        "ts-operators-indexed-access",
        "ts-operators-keyof",
        "ts-utilities-partial"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling"
      ]
    },
    {
      "id": "ts-advanced-conditional",
      "sectionId": "ts-section-advanced",
      "programmingLanguage": "typescript",
      "title": "Conditional types and distribution",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-constraints",
        "ts-operators-indexed-access",
        "ts-unions-basic",
        "ts-generics-aliases"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling"
      ]
    },
    {
      "id": "ts-advanced-infer",
      "sectionId": "ts-section-advanced",
      "programmingLanguage": "typescript",
      "title": "infer",
      "kind": "subskill",
      "prerequisites": [
        "ts-generics-constraints",
        "ts-operators-indexed-access",
        "ts-utilities-return-type",
        "ts-advanced-conditional"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling"
      ],
      "parentSkillId": "ts-advanced-conditional"
    },
    {
      "id": "ts-advanced-template-literals",
      "sectionId": "ts-section-advanced",
      "programmingLanguage": "typescript",
      "title": "Template literal types",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-constraints",
        "ts-operators-indexed-access",
        "ts-unions-literals",
        "ts-primitives-string"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling"
      ]
    },
    {
      "id": "ts-advanced-recursive",
      "sectionId": "ts-section-advanced",
      "programmingLanguage": "typescript",
      "title": "Recursive types",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-constraints",
        "ts-operators-indexed-access",
        "ts-aliases-objects",
        "ts-advanced-conditional"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling"
      ]
    },
    {
      "id": "ts-advanced-constraints",
      "sectionId": "ts-section-advanced",
      "programmingLanguage": "typescript",
      "title": "Advanced generic constraints",
      "kind": "skill",
      "prerequisites": [
        "ts-generics-constraints",
        "ts-operators-indexed-access",
        "ts-generics-keyof-constraints",
        "ts-advanced-mapped",
        "ts-advanced-conditional"
      ],
      "dimensions": [
        "generic-thinking",
        "type-modelling"
      ]
    },
    {
      "id": "ts-classes-properties",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "Typed class properties",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-foundations-strict-mode"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-classes-constructors",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "Typed constructors",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-properties"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-classes-public",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "public members",
      "kind": "subskill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-properties"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ],
      "parentSkillId": "ts-classes-properties"
    },
    {
      "id": "ts-classes-private",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "private members and runtime privacy",
      "kind": "subskill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-properties"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ],
      "parentSkillId": "ts-classes-properties"
    },
    {
      "id": "ts-classes-protected",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "protected members",
      "kind": "subskill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-inheritance",
        "ts-classes-properties"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ],
      "parentSkillId": "ts-classes-properties"
    },
    {
      "id": "ts-classes-readonly",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "readonly class properties",
      "kind": "subskill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-objects-readonly",
        "ts-classes-properties"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ],
      "parentSkillId": "ts-classes-properties"
    },
    {
      "id": "ts-classes-inheritance",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "Class inheritance",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-constructors"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-classes-abstract",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "Abstract classes",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-inheritance"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-classes-implements",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "implements",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-interfaces-basic",
        "ts-classes-constructors"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-classes-interfaces",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "Interfaces with classes",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-implements",
        "ts-interfaces-methods"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-classes-static",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "Static members",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-constructors"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-classes-accessors",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "Getters and setters",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-properties",
        "ts-functions-returns"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-classes-generic",
      "sectionId": "ts-section-classes",
      "programmingLanguage": "typescript",
      "title": "Generic classes",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-classes-constructors",
        "ts-generics-interfaces"
      ],
      "dimensions": [
        "syntax-knowledge",
        "type-modelling",
        "architecture"
      ]
    },
    {
      "id": "ts-dom-elements",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "HTMLElement",
      "kind": "skill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-dom-input",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "HTMLInputElement",
      "kind": "subskill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-dom-elements"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-dom-elements"
    },
    {
      "id": "ts-dom-button",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "HTMLButtonElement",
      "kind": "subskill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-dom-elements"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-dom-elements"
    },
    {
      "id": "ts-dom-query-selector",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "querySelector typing",
      "kind": "skill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-dom-elements",
        "ts-primitives-null"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-dom-null-handling",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "DOM null handling",
      "kind": "skill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-dom-query-selector",
        "ts-narrowing-equality"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-dom-event",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "Event",
      "kind": "skill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "events-forms"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-dom-mouse-event",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "MouseEvent",
      "kind": "subskill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-dom-event"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-dom-event"
    },
    {
      "id": "ts-dom-keyboard-event",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "KeyboardEvent",
      "kind": "subskill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-dom-event"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ],
      "parentSkillId": "ts-dom-event"
    },
    {
      "id": "ts-dom-form-data",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "FormData",
      "kind": "skill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "events-forms",
        "ts-dom-input",
        "ts-unions-basic",
        "ts-narrowing-instanceof"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-dom-handlers",
      "sectionId": "ts-section-dom",
      "programmingLanguage": "typescript",
      "title": "Typed event handlers",
      "kind": "skill",
      "prerequisites": [
        "dom",
        "ts-objects-typing",
        "ts-functions-types",
        "ts-dom-event",
        "ts-dom-null-handling",
        "ts-functions-callbacks"
      ],
      "dimensions": [
        "type-narrowing",
        "js-ts-combination"
      ]
    },
    {
      "id": "ts-async-promise",
      "sectionId": "ts-section-async",
      "programmingLanguage": "typescript",
      "title": "Promise types",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-functions-returns",
        "ts-arrays-generic-syntax"
      ],
      "dimensions": [
        "api-typing",
        "js-ts-combination",
        "type-modelling"
      ]
    },
    {
      "id": "ts-async-return-types",
      "sectionId": "ts-section-async",
      "programmingLanguage": "typescript",
      "title": "Async return types",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-functions-returns",
        "ts-async-promise"
      ],
      "dimensions": [
        "api-typing",
        "js-ts-combination",
        "type-modelling"
      ]
    },
    {
      "id": "ts-async-fetch",
      "sectionId": "ts-section-async",
      "programmingLanguage": "typescript",
      "title": "Typed fetch boundaries",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-functions-returns",
        "ts-async-return-types",
        "ts-special-unknown"
      ],
      "dimensions": [
        "api-typing",
        "js-ts-combination",
        "type-modelling"
      ]
    },
    {
      "id": "ts-async-responses",
      "sectionId": "ts-section-async",
      "programmingLanguage": "typescript",
      "title": "API response types",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-functions-returns",
        "ts-async-fetch",
        "ts-interfaces-basic",
        "ts-objects-nested"
      ],
      "dimensions": [
        "api-typing",
        "js-ts-combination",
        "type-modelling"
      ]
    },
    {
      "id": "ts-async-error-handling",
      "sectionId": "ts-section-async",
      "programmingLanguage": "typescript",
      "title": "Async error handling",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-functions-returns",
        "ts-async-return-types",
        "ts-narrowing-instanceof"
      ],
      "dimensions": [
        "api-typing",
        "js-ts-combination",
        "type-modelling"
      ]
    },
    {
      "id": "ts-async-unknown-errors",
      "sectionId": "ts-section-async",
      "programmingLanguage": "typescript",
      "title": "Unknown errors",
      "kind": "subskill",
      "prerequisites": [
        "async-api",
        "ts-functions-returns",
        "ts-special-unknown",
        "ts-async-error-handling"
      ],
      "dimensions": [
        "api-typing",
        "js-ts-combination",
        "type-modelling"
      ],
      "parentSkillId": "ts-async-error-handling"
    },
    {
      "id": "ts-async-promise-all",
      "sectionId": "ts-section-async",
      "programmingLanguage": "typescript",
      "title": "Promise.all",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-functions-returns",
        "ts-async-promise",
        "ts-arrays-tuples"
      ],
      "dimensions": [
        "api-typing",
        "js-ts-combination",
        "type-modelling"
      ]
    },
    {
      "id": "ts-async-generics",
      "sectionId": "ts-section-async",
      "programmingLanguage": "typescript",
      "title": "Async generics",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-functions-returns",
        "ts-async-return-types",
        "ts-generics-basic",
        "ts-special-unknown"
      ],
      "dimensions": [
        "api-typing",
        "js-ts-combination",
        "type-modelling"
      ]
    },
    {
      "id": "ts-api-requests",
      "sectionId": "ts-section-api",
      "programmingLanguage": "typescript",
      "title": "Request types",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-interfaces-basic",
        "ts-objects-nested",
        "ts-objects-optional"
      ],
      "dimensions": [
        "api-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-api-responses",
      "sectionId": "ts-section-api",
      "programmingLanguage": "typescript",
      "title": "Response types",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-interfaces-basic",
        "ts-objects-nested",
        "ts-async-responses"
      ],
      "dimensions": [
        "api-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-api-dto",
      "sectionId": "ts-section-api",
      "programmingLanguage": "typescript",
      "title": "DTO concept",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-interfaces-basic",
        "ts-objects-nested",
        "ts-api-requests",
        "ts-api-responses"
      ],
      "dimensions": [
        "api-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-api-nullable",
      "sectionId": "ts-section-api",
      "programmingLanguage": "typescript",
      "title": "Nullable API fields",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-interfaces-basic",
        "ts-objects-nested",
        "ts-primitives-null",
        "ts-primitives-undefined",
        "ts-unions-basic"
      ],
      "dimensions": [
        "api-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-api-nested",
      "sectionId": "ts-section-api",
      "programmingLanguage": "typescript",
      "title": "Nested API models",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-interfaces-basic",
        "ts-objects-nested",
        "ts-api-responses",
        "ts-arrays-objects"
      ],
      "dimensions": [
        "api-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-api-success-error",
      "sectionId": "ts-section-api",
      "programmingLanguage": "typescript",
      "title": "Success/error responses",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-interfaces-basic",
        "ts-objects-nested",
        "ts-api-responses",
        "ts-unions-objects"
      ],
      "dimensions": [
        "api-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-api-discriminated",
      "sectionId": "ts-section-api",
      "programmingLanguage": "typescript",
      "title": "Discriminated API responses",
      "kind": "subskill",
      "prerequisites": [
        "async-api",
        "ts-interfaces-basic",
        "ts-objects-nested",
        "ts-unions-discriminated",
        "ts-api-success-error"
      ],
      "dimensions": [
        "api-typing",
        "type-modelling"
      ],
      "parentSkillId": "ts-api-success-error"
    },
    {
      "id": "ts-api-runtime-boundaries",
      "sectionId": "ts-section-api",
      "programmingLanguage": "typescript",
      "title": "Runtime data vs compile-time types",
      "kind": "skill",
      "prerequisites": [
        "async-api",
        "ts-interfaces-basic",
        "ts-objects-nested",
        "ts-foundations-compilation",
        "ts-special-unknown",
        "ts-narrowing-custom-guards",
        "ts-async-fetch"
      ],
      "dimensions": [
        "api-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-modules-import-export",
      "sectionId": "ts-section-modules",
      "programmingLanguage": "typescript",
      "title": "import/export",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-foundations-compilation"
      ],
      "dimensions": [
        "syntax-knowledge",
        "architecture"
      ]
    },
    {
      "id": "ts-modules-named",
      "sectionId": "ts-section-modules",
      "programmingLanguage": "typescript",
      "title": "Named exports",
      "kind": "subskill",
      "prerequisites": [
        "modules-oop",
        "ts-foundations-compilation",
        "ts-modules-import-export"
      ],
      "dimensions": [
        "syntax-knowledge",
        "architecture"
      ],
      "parentSkillId": "ts-modules-import-export"
    },
    {
      "id": "ts-modules-default",
      "sectionId": "ts-section-modules",
      "programmingLanguage": "typescript",
      "title": "Default exports",
      "kind": "subskill",
      "prerequisites": [
        "modules-oop",
        "ts-foundations-compilation",
        "ts-modules-import-export"
      ],
      "dimensions": [
        "syntax-knowledge",
        "architecture"
      ],
      "parentSkillId": "ts-modules-import-export"
    },
    {
      "id": "ts-modules-type-imports",
      "sectionId": "ts-section-modules",
      "programmingLanguage": "typescript",
      "title": "Type-only dependency concepts",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-foundations-compilation",
        "ts-aliases-basic",
        "ts-modules-import-export"
      ],
      "dimensions": [
        "syntax-knowledge",
        "architecture"
      ]
    },
    {
      "id": "ts-modules-import-type",
      "sectionId": "ts-section-modules",
      "programmingLanguage": "typescript",
      "title": "import type syntax",
      "kind": "subskill",
      "prerequisites": [
        "modules-oop",
        "ts-foundations-compilation",
        "ts-modules-type-imports"
      ],
      "dimensions": [
        "syntax-knowledge",
        "architecture"
      ],
      "parentSkillId": "ts-modules-type-imports"
    },
    {
      "id": "ts-modules-resolution",
      "sectionId": "ts-section-modules",
      "programmingLanguage": "typescript",
      "title": "Module resolution",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-foundations-compilation",
        "ts-modules-import-export",
        "ts-foundations-tsconfig"
      ],
      "dimensions": [
        "syntax-knowledge",
        "architecture"
      ]
    },
    {
      "id": "ts-modules-declarations",
      "sectionId": "ts-section-modules",
      "programmingLanguage": "typescript",
      "title": "Declaration files",
      "kind": "skill",
      "prerequisites": [
        "modules-oop",
        "ts-foundations-compilation",
        "ts-modules-type-imports",
        "ts-modules-resolution",
        "ts-interfaces-basic"
      ],
      "dimensions": [
        "syntax-knowledge",
        "architecture"
      ]
    },
    {
      "id": "ts-errors-try-catch",
      "sectionId": "ts-section-errors",
      "programmingLanguage": "typescript",
      "title": "try/catch",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-functions-types",
        "ts-special-unknown"
      ],
      "dimensions": [
        "error-reading",
        "type-narrowing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-errors-unknown-catch",
      "sectionId": "ts-section-errors",
      "programmingLanguage": "typescript",
      "title": "unknown in catch",
      "kind": "subskill",
      "prerequisites": [
        "logic-loops",
        "ts-functions-types",
        "ts-narrowing-instanceof",
        "ts-errors-try-catch"
      ],
      "dimensions": [
        "error-reading",
        "type-narrowing",
        "type-modelling"
      ],
      "parentSkillId": "ts-errors-try-catch"
    },
    {
      "id": "ts-errors-custom",
      "sectionId": "ts-section-errors",
      "programmingLanguage": "typescript",
      "title": "Custom Error classes",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-functions-types",
        "ts-classes-inheritance",
        "ts-errors-unknown-catch"
      ],
      "dimensions": [
        "error-reading",
        "type-narrowing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-errors-result",
      "sectionId": "ts-section-errors",
      "programmingLanguage": "typescript",
      "title": "Result-style modelling",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-functions-types",
        "ts-unions-discriminated",
        "ts-generics-aliases"
      ],
      "dimensions": [
        "error-reading",
        "type-narrowing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-errors-exhaustive",
      "sectionId": "ts-section-errors",
      "programmingLanguage": "typescript",
      "title": "Exhaustive error handling",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-functions-types",
        "ts-errors-result",
        "ts-narrowing-exhaustive"
      ],
      "dimensions": [
        "error-reading",
        "type-narrowing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-errors-null-safety",
      "sectionId": "ts-section-errors",
      "programmingLanguage": "typescript",
      "title": "Null/undefined safety",
      "kind": "skill",
      "prerequisites": [
        "logic-loops",
        "ts-functions-types",
        "ts-primitives-null",
        "ts-primitives-undefined",
        "ts-narrowing-control-flow",
        "ts-objects-optional"
      ],
      "dimensions": [
        "error-reading",
        "type-narrowing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-react-props",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "Component props",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-objects-optional"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "JavaScript React components and JSX"
      ]
    },
    {
      "id": "ts-react-children",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "children",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-props"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React children composition"
      ]
    },
    {
      "id": "ts-react-use-state",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "useState",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-props",
        "ts-unions-basic"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React useState and immutable state updates"
      ]
    },
    {
      "id": "ts-react-use-ref",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "useRef",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-props",
        "ts-dom-elements",
        "ts-primitives-null"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React useRef lifecycle"
      ]
    },
    {
      "id": "ts-react-use-effect",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "useEffect",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-props",
        "ts-functions-void"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React useEffect dependencies and cleanup"
      ]
    },
    {
      "id": "ts-react-events",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "Typed React events",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-props",
        "ts-dom-handlers"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React SyntheticEvent"
      ]
    },
    {
      "id": "ts-react-forms",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "Forms",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-events",
        "ts-react-use-state",
        "ts-dom-input"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React controlled forms"
      ]
    },
    {
      "id": "ts-react-context",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "Context",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-props",
        "ts-unions-basic",
        "ts-errors-null-safety"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React Context and providers"
      ]
    },
    {
      "id": "ts-react-reducer-actions",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "Reducer actions",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-aliases-objects",
        "ts-unions-objects",
        "ts-functions-returns"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React useReducer and pure reducers"
      ]
    },
    {
      "id": "ts-react-discriminated-actions",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "Discriminated actions",
      "kind": "subskill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-unions-discriminated",
        "ts-react-reducer-actions"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "parentSkillId": "ts-react-reducer-actions"
    },
    {
      "id": "ts-react-use-reducer",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "useReducer",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-discriminated-actions",
        "ts-narrowing-exhaustive",
        "ts-react-use-state"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React useReducer and dispatch"
      ]
    },
    {
      "id": "ts-react-custom-hooks",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "Custom hooks",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-use-state",
        "ts-react-use-effect",
        "ts-functions-returns"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ],
      "assumedKnowledge": [
        "React Rules of Hooks"
      ]
    },
    {
      "id": "ts-react-generic-components",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "Generic components",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-props",
        "ts-generics-constraints",
        "ts-generics-interfaces"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-react-api-data",
      "sectionId": "ts-section-react",
      "programmingLanguage": "typescript",
      "title": "API data in React",
      "kind": "skill",
      "prerequisites": [
        "functions",
        "objects",
        "ts-interfaces-basic",
        "ts-functions-types",
        "ts-modules-import-type",
        "ts-react-use-state",
        "ts-react-use-effect",
        "ts-api-runtime-boundaries",
        "ts-api-discriminated"
      ],
      "dimensions": [
        "react-typing",
        "type-modelling"
      ]
    },
    {
      "id": "ts-architecture-domain",
      "sectionId": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "title": "Domain models",
      "kind": "skill",
      "prerequisites": [
        "ts-interfaces-basic",
        "ts-aliases-objects",
        "ts-modules-import-type",
        "ts-unions-data-modelling"
      ],
      "dimensions": [
        "architecture",
        "type-modelling"
      ]
    },
    {
      "id": "ts-architecture-ui",
      "sectionId": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "title": "UI models",
      "kind": "skill",
      "prerequisites": [
        "ts-interfaces-basic",
        "ts-aliases-objects",
        "ts-modules-import-type",
        "ts-architecture-domain",
        "ts-unions-discriminated"
      ],
      "dimensions": [
        "architecture",
        "type-modelling"
      ]
    },
    {
      "id": "ts-architecture-services",
      "sectionId": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "title": "Service interfaces",
      "kind": "skill",
      "prerequisites": [
        "ts-interfaces-basic",
        "ts-aliases-objects",
        "ts-modules-import-type",
        "ts-interfaces-methods",
        "ts-async-return-types"
      ],
      "dimensions": [
        "architecture",
        "type-modelling"
      ]
    },
    {
      "id": "ts-architecture-repositories",
      "sectionId": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "title": "Repositories",
      "kind": "skill",
      "prerequisites": [
        "ts-interfaces-basic",
        "ts-aliases-objects",
        "ts-modules-import-type",
        "ts-architecture-services",
        "ts-generics-interfaces",
        "ts-api-dto"
      ],
      "dimensions": [
        "architecture",
        "type-modelling"
      ]
    },
    {
      "id": "ts-architecture-event-bus",
      "sectionId": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "title": "Typed Event Bus",
      "kind": "skill",
      "prerequisites": [
        "ts-interfaces-basic",
        "ts-aliases-objects",
        "ts-modules-import-type",
        "events-forms",
        "ts-generics-keyof-constraints",
        "ts-operators-indexed-access",
        "ts-functions-callbacks"
      ],
      "dimensions": [
        "architecture",
        "type-modelling"
      ]
    },
    {
      "id": "ts-architecture-state",
      "sectionId": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "title": "State modelling",
      "kind": "skill",
      "prerequisites": [
        "ts-interfaces-basic",
        "ts-aliases-objects",
        "ts-modules-import-type",
        "ts-unions-discriminated",
        "ts-narrowing-exhaustive"
      ],
      "dimensions": [
        "architecture",
        "type-modelling"
      ]
    },
    {
      "id": "ts-architecture-contracts",
      "sectionId": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "title": "Dependency contracts",
      "kind": "skill",
      "prerequisites": [
        "ts-interfaces-basic",
        "ts-aliases-objects",
        "ts-modules-import-type",
        "ts-architecture-services",
        "ts-interfaces-extends"
      ],
      "dimensions": [
        "architecture",
        "type-modelling"
      ]
    },
    {
      "id": "ts-architecture-separation",
      "sectionId": "ts-section-architecture",
      "programmingLanguage": "typescript",
      "title": "Separation of concerns",
      "kind": "skill",
      "prerequisites": [
        "ts-interfaces-basic",
        "ts-aliases-objects",
        "ts-modules-import-type",
        "ts-architecture-domain",
        "ts-architecture-ui",
        "ts-architecture-repositories",
        "ts-architecture-contracts"
      ],
      "dimensions": [
        "architecture",
        "type-modelling"
      ]
    },
    {
      "id": "ts-debugging-errors",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Reading TypeScript compiler errors",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-debugging-assignability",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Assignability errors",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode",
        "ts-foundations-explicit-typing",
        "ts-objects-typing",
        "ts-debugging-errors"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-debugging-errors"
    },
    {
      "id": "ts-debugging-undefined",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Possibly undefined",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode",
        "ts-primitives-undefined",
        "ts-objects-optional",
        "ts-narrowing-control-flow",
        "ts-debugging-errors"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-debugging-errors"
    },
    {
      "id": "ts-debugging-properties",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Property does not exist",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode",
        "ts-objects-property-types",
        "ts-unions-objects",
        "ts-debugging-errors"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-debugging-errors"
    },
    {
      "id": "ts-debugging-implicit-any",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Implicit any",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode",
        "ts-functions-parameters",
        "ts-special-any",
        "ts-debugging-errors"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-debugging-errors"
    },
    {
      "id": "ts-debugging-generics",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Generic errors",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode",
        "ts-generics-constraints",
        "ts-debugging-errors"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-debugging-errors"
    },
    {
      "id": "ts-debugging-unions",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Union errors",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode",
        "ts-unions-discriminated",
        "ts-narrowing-control-flow",
        "ts-debugging-errors"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-debugging-errors"
    },
    {
      "id": "ts-debugging-imports",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Import/type errors",
      "kind": "subskill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode",
        "ts-modules-import-type",
        "ts-modules-resolution",
        "ts-debugging-errors"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ],
      "parentSkillId": "ts-debugging-errors"
    },
    {
      "id": "ts-debugging-repair",
      "sectionId": "ts-section-debugging",
      "programmingLanguage": "typescript",
      "title": "Repairing incorrect typings",
      "kind": "skill",
      "prerequisites": [
        "ts-foundations-compilation",
        "ts-foundations-strict-mode",
        "ts-debugging-assignability",
        "ts-debugging-properties",
        "ts-special-avoid-any",
        "ts-assertions-unsafe"
      ],
      "dimensions": [
        "error-reading",
        "type-inference-understanding"
      ]
    },
    {
      "id": "ts-application-model-js",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Model existing JavaScript code",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "objects",
        "functions",
        "ts-interfaces-basic",
        "ts-arrays-objects"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-migration",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Migrate JavaScript to TypeScript",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "ts-application-model-js",
        "ts-foundations-tsconfig",
        "ts-foundations-strict-mode",
        "ts-debugging-implicit-any",
        "ts-modules-declarations"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-requirements",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Design types from requirements",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "ts-unions-data-modelling",
        "ts-objects-optional",
        "ts-interfaces-extends"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-entities",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Model business entities",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "ts-application-requirements",
        "ts-architecture-domain"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-api-transform",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Transform API data",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "js-arrays-filtering",
        "ts-api-dto",
        "ts-api-nested",
        "ts-api-nullable",
        "ts-architecture-domain"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-validate-external",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Validate unknown external data",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "ts-api-runtime-boundaries",
        "ts-narrowing-predicates",
        "ts-errors-result"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-generic-utilities",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Reusable generic utilities in applications",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "ts-generics-utilities",
        "ts-utilities-pick",
        "ts-advanced-mapped"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-refactor",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Refactor weak types",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "ts-debugging-repair",
        "ts-unions-data-modelling",
        "ts-application-model-js"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-eliminate-any",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Eliminate unnecessary any",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "ts-special-avoid-any",
        "ts-application-validate-external",
        "ts-generics-utilities"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    },
    {
      "id": "ts-application-architecture",
      "sectionId": "ts-section-application",
      "programmingLanguage": "typescript",
      "title": "Architecture challenges",
      "kind": "skill",
      "prerequisites": [
        "ts-aliases-objects",
        "ts-functions-types",
        "ts-architecture-separation",
        "ts-architecture-state",
        "ts-architecture-event-bus",
        "ts-application-api-transform",
        "ts-application-validate-external"
      ],
      "dimensions": [
        "type-modelling",
        "js-ts-combination",
        "architecture"
      ]
    }
  ]
};
