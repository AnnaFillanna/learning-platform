import type { Task } from "../types/task.js";
import type { LearningMetadata } from "../types/learning.js";

export const typescriptExtraTasks: (Task & LearningMetadata)[] = [
  {
    "id": "ts-practice-aliases",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-aliases-basic",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "aliases",
    "expectedResult": "A:12",
    "content": {
      "de": {
        "title": "Produktalias definieren",
        "description": "Definiere Product mit id: string und price: number. Implementiere formatPrice(product: Product): string als ID:Preis, etwa A:12.",
        "hints": [
          "Ein type-Alias beschreibt beide Felder.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Define a product alias",
        "description": "Define Product with id: string and price: number. Implement formatPrice(product: Product): string as ID:price, e.g. A:12.",
        "hints": [
          "A type alias describes both fields.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Определи псевдоним товара",
        "description": "Определи Product с id: string и price: number. Реализуй formatPrice(product: Product): string в виде ID:цена, например A:12.",
        "hints": [
          "Псевдоним type описывает оба поля.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define Product and formatPrice",
    "solution": "type Product = { id: string; price: number };\nfunction formatPrice(product: Product): string { return `${product.id}:${product.price}`; }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-aliases",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "formatPrice({id:\"A\",price:12})",
        "expected": "A:12"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type Check = Expect<Equal<Product, {id:string;price:number}>>; type Return = Expect<Equal<ReturnType<typeof formatPrice>,string>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "formatPrice({id:\"\",price:0})",
        "expected": ":0"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-unions",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-unions-data-modelling",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "unions",
    "expectedResult": "AB",
    "content": {
      "de": {
        "title": "Lieferstatus unterscheiden",
        "description": "Definiere Delivery als {status:\"pending\"} | {status:\"sent\"; tracking:string}. Implementiere trackingLabel(delivery: Delivery): string: tracking bei sent, sonst \"pending\".",
        "hints": [
          "Prüfe zuerst das diskriminierende Feld status.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Distinguish delivery states",
        "description": "Define Delivery as {status:\"pending\"} | {status:\"sent\"; tracking:string}. Implement trackingLabel(delivery: Delivery): string: tracking for sent, otherwise \"pending\".",
        "hints": [
          "Check the discriminating status field first.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Различи статусы доставки",
        "description": "Определи Delivery как {status:\"pending\"} | {status:\"sent\"; tracking:string}. Реализуй trackingLabel(delivery: Delivery): string: tracking для sent, иначе \"pending\".",
        "hints": [
          "Сначала проверь различающее поле status.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define Delivery and trackingLabel",
    "solution": "type Delivery = {status:\"pending\"} | {status:\"sent\";tracking:string};\nfunction trackingLabel(delivery: Delivery): string { return delivery.status === \"sent\" ? delivery.tracking : \"pending\"; }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-unions",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "trackingLabel({status:\"sent\",tracking:\"AB\"})",
        "expected": "AB"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type Check = Expect<Equal<Delivery, {status:\"pending\"}|{status:\"sent\";tracking:string}>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "trackingLabel({status:\"pending\"})",
        "expected": "pending"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-narrowing",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-narrowing-typeof",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "narrowing",
    "expectedResult": 3,
    "content": {
      "de": {
        "title": "Eingaben eingrenzen",
        "description": "Implementiere measure(value: string | number): number: die Länge eines Strings oder den Betrag einer Zahl.",
        "hints": [
          "typeof unterscheidet string von number.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Narrow an input",
        "description": "Implement measure(value: string | number): number: string length or absolute numeric value.",
        "hints": [
          "typeof distinguishes string from number.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Сузь тип ввода",
        "description": "Реализуй measure(value: string | number): number: длина строки или модуль числа.",
        "hints": [
          "typeof отличает string от number.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "function measure(value: string | number): number { return 0; }",
    "solution": "function measure(value: string | number): number { return typeof value === \"string\" ? value.length : Math.abs(value); }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-narrowing",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "measure(\"abc\")",
        "expected": 3
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type Check = Expect<Equal<Parameters<typeof measure>,[string|number]>>; type Return = Expect<Equal<ReturnType<typeof measure>,number>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[measure(-4),measure(\"\"),measure(0)]",
        "expected": [
          4,
          0,
          0
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-assertions",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-assertions-const",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "assertions",
    "expectedResult": true,
    "content": {
      "de": {
        "title": "Routen als Literale erhalten",
        "description": "Definiere routes als readonly Tupel [\"home\", \"cart\"] mit as const und Route als Union seiner Elemente. Implementiere isRoute(value: string): boolean.",
        "hints": [
          "typeof routes[number] liefert den Elementtyp.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Preserve route literals",
        "description": "Define routes as the readonly tuple [\"home\", \"cart\"] with as const and Route as the union of its elements. Implement isRoute(value: string): boolean.",
        "hints": [
          "typeof routes[number] yields the element type.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Сохрани литеральные типы маршрутов",
        "description": "Определи routes как readonly-кортеж [\"home\", \"cart\"] через as const и Route как объединение его элементов. Реализуй isRoute(value: string): boolean.",
        "hints": [
          "typeof routes[number] даёт тип элемента.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define routes, Route and isRoute",
    "solution": "const routes = [\"home\", \"cart\"] as const;\ntype Route = typeof routes[number];\nfunction isRoute(value: string): boolean { return routes.some(route => route === value); }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-assertions",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "isRoute(\"home\")",
        "expected": true
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type Check = Expect<Equal<typeof routes,readonly [\"home\",\"cart\"]>>; type R = Expect<Equal<Route,\"home\"|\"cart\">>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[isRoute(\"cart\"),isRoute(\"admin\"),isRoute(\"\")]",
        "expected": [
          true,
          false,
          false
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-enums",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-enums-basic",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "enums",
    "expectedResult": true,
    "content": {
      "de": {
        "title": "Bestellstatus als Enum",
        "description": "Definiere das String-Enum OrderStatus mit Pending=\"pending\" und Paid=\"paid\". Implementiere canShip(status: OrderStatus): boolean, nur für Paid wahr.",
        "hints": [
          "Vergleiche mit OrderStatus.Paid.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Order status enum",
        "description": "Define string enum OrderStatus with Pending=\"pending\" and Paid=\"paid\". Implement canShip(status: OrderStatus): boolean, true only for Paid.",
        "hints": [
          "Compare with OrderStatus.Paid.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Перечисление статусов заказа",
        "description": "Определи строковый enum OrderStatus с Pending=\"pending\" и Paid=\"paid\". Реализуй canShip(status: OrderStatus): boolean, true только для Paid.",
        "hints": [
          "Сравни с OrderStatus.Paid.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define OrderStatus and canShip",
    "solution": "enum OrderStatus { Pending = \"pending\", Paid = \"paid\" }\nfunction canShip(status: OrderStatus): boolean { return status === OrderStatus.Paid; }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-enums",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "canShip(OrderStatus.Paid)",
        "expected": true
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type Check = Expect<Equal<Parameters<typeof canShip>,[OrderStatus]>>; type Return = Expect<Equal<ReturnType<typeof canShip>,boolean>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[canShip(OrderStatus.Pending),OrderStatus.Pending,OrderStatus.Paid]",
        "expected": [
          false,
          "pending",
          "paid"
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-generics",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-generics-basic",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "generics",
    "expectedResult": 4,
    "content": {
      "de": {
        "title": "Erstes Element typisiert lesen",
        "description": "Implementiere first<T>(items: readonly T[]): T | undefined. Gib das erste Element zurück, bei einem leeren Array undefined.",
        "hints": [
          "Der Typ T verbindet Eingabe und Rückgabe.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Read the first element generically",
        "description": "Implement first<T>(items: readonly T[]): T | undefined. Return the first element, or undefined for an empty array.",
        "hints": [
          "T connects the input and return types.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Получи первый элемент с generic",
        "description": "Реализуй first<T>(items: readonly T[]): T | undefined. Верни первый элемент или undefined для пустого массива.",
        "hints": [
          "T связывает типы входа и результата.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Implement first<T>",
    "solution": "function first<T>(items: readonly T[]): T | undefined { return items[0]; }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-generics",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "first([4,9])",
        "expected": 4
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "const n = first([1]); const s = first([\"x\"] as const); type N = Expect<Equal<typeof n,number|undefined>>; type S = Expect<Equal<typeof s,\"x\"|undefined>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[first([]) === undefined,first([false]),first([\"\"])]",
        "expected": [
          true,
          false,
          ""
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-operators",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-operators-keyof",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "operators",
    "expectedResult": "Ada",
    "content": {
      "de": {
        "title": "Eigenschaften sicher lesen",
        "description": "Implementiere getProperty<T, K extends keyof T>(object: T, key: K): T[K].",
        "hints": [
          "Der Schlüssel muss zu keyof T gehören.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Read properties safely",
        "description": "Implement getProperty<T, K extends keyof T>(object: T, key: K): T[K].",
        "hints": [
          "The key must belong to keyof T.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Безопасно прочитай свойство",
        "description": "Реализуй getProperty<T, K extends keyof T>(object: T, key: K): T[K].",
        "hints": [
          "Ключ должен принадлежать keyof T.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Implement getProperty",
    "solution": "function getProperty<T, K extends keyof T>(object: T, key: K): T[K] { return object[key]; }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-operators",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "getProperty({name:\"Ada\",age:30},\"name\")",
        "expected": "Ada"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "const n = getProperty({count:1},\"count\"); type N = Expect<Equal<typeof n,number>>;\n// @ts-expect-error Invalid key\ngetProperty({count:1},\"missing\");"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "getProperty({count:0},\"count\")",
        "expected": 0
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-utilities",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-utilities-pick",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "utilities",
    "expectedResult": {
      "id": "1",
      "name": "Ada"
    },
    "content": {
      "de": {
        "title": "Öffentliches Profil ableiten",
        "description": "Definiere User mit id:string, name:string, password:string und PublicUser = Pick<User,\"id\"|\"name\">. Implementiere toPublic(user: User): PublicUser ohne password im Ergebnis.",
        "hints": [
          "Erzeuge ein neues Objekt mit genau zwei Feldern.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Derive a public profile",
        "description": "Define User with id:string, name:string, password:string and PublicUser = Pick<User,\"id\"|\"name\">. Implement toPublic(user: User): PublicUser without password in the result.",
        "hints": [
          "Create a new object with exactly two fields.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Выдели публичный профиль",
        "description": "Определи User с id:string, name:string, password:string и PublicUser = Pick<User,\"id\"|\"name\">. Реализуй toPublic(user: User): PublicUser без password в результате.",
        "hints": [
          "Создай новый объект ровно с двумя полями.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define User, PublicUser and toPublic",
    "solution": "type User = {id:string;name:string;password:string};\ntype PublicUser = Pick<User,\"id\"|\"name\">;\nfunction toPublic(user:User):PublicUser { return {id:user.id,name:user.name}; }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-utilities",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "toPublic({id:\"1\",name:\"Ada\",password:\"secret\"})",
        "expected": {
          "id": "1",
          "name": "Ada"
        }
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type Check = Expect<Equal<PublicUser,{id:string;name:string}>>; type Return = Expect<Equal<ReturnType<typeof toPublic>,PublicUser>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "toPublic({id:\"\",name:\"\",password:\"x\"})",
        "expected": {
          "id": "",
          "name": ""
        }
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-advanced",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-advanced-mapped",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "advanced",
    "expectedResult": {
      "theme": "light",
      "compact": false
    },
    "content": {
      "de": {
        "title": "Optionale Felder abbilden",
        "description": "Definiere OptionalFields<T> als Mapped Type mit optionalen Feldern. Definiere Settings mit theme:string und compact:boolean. mergeSettings(base: Settings, patch: OptionalFields<Settings>): Settings überschreibt nur übergebene Werte.",
        "hints": [
          "Verwende [K in keyof T]? und den Spread-Operator.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Map optional fields",
        "description": "Define OptionalFields<T> as a mapped type with optional fields. Define Settings with theme:string and compact:boolean. mergeSettings(base: Settings, patch: OptionalFields<Settings>): Settings overrides only supplied values.",
        "hints": [
          "Use [K in keyof T]? and the spread operator.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Преобразуй поля в необязательные",
        "description": "Определи OptionalFields<T> как mapped type с необязательными полями. Settings содержит theme:string и compact:boolean. mergeSettings(base: Settings, patch: OptionalFields<Settings>): Settings заменяет только переданные значения.",
        "hints": [
          "Используй [K in keyof T]? и spread-оператор.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define OptionalFields, Settings and mergeSettings",
    "solution": "type OptionalFields<T> = {[K in keyof T]?:T[K]};\ntype Settings = {theme:string;compact:boolean};\nfunction mergeSettings(base:Settings,patch:OptionalFields<Settings>):Settings { return {...base,...patch}; }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-advanced",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "mergeSettings({theme:\"dark\",compact:false},{theme:\"light\"})",
        "expected": {
          "theme": "light",
          "compact": false
        }
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type Check = Expect<Equal<OptionalFields<{x:number;y:string}>,{x?:number;y?:string}>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "mergeSettings({theme:\"dark\",compact:true},{compact:false})",
        "expected": {
          "theme": "dark",
          "compact": false
        }
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-classes",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-classes-constructors",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "classes",
    "expectedResult": 5,
    "content": {
      "de": {
        "title": "Zählerklasse bauen",
        "description": "Implementiere Counter mit öffentlichem value:number, Konstruktor start:number=0 und increment():number. increment erhöht value um 1 und gibt den neuen Wert zurück.",
        "hints": [
          "Initialisiere value im Konstruktor.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Build a counter class",
        "description": "Implement Counter with public value:number, constructor start:number=0 and increment():number. increment adds 1 to value and returns the new value.",
        "hints": [
          "Initialize value in the constructor.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Создай класс счётчика",
        "description": "Реализуй Counter с публичным value:number, конструктором start:number=0 и increment():number. increment увеличивает value на 1 и возвращает новое значение.",
        "hints": [
          "Инициализируй value в конструкторе.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Implement Counter",
    "solution": "class Counter { value:number; constructor(start:number=0){this.value=start;} increment():number {return ++this.value;} }",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-classes",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "new Counter(4).increment()",
        "expected": 5
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type V = Expect<Equal<Counter[\"value\"],number>>; type R = Expect<Equal<ReturnType<Counter[\"increment\"]>,number>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "(()=>{const c=new Counter();c.increment();return c.increment();})()",
        "expected": 2
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-dom",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-dom-null-handling",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "dom",
    "expectedResult": "Ada",
    "content": {
      "de": {
        "title": "Fehlendes Eingabefeld behandeln",
        "description": "In dieser isolierten Übung steht InputElement={value:string} für ein DOM-Eingabefeld. Implementiere readInput(element: InputElement | null): string: getrimmter Wert oder \"\" bei null.",
        "hints": [
          "Prüfe null, bevor du value liest.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Handle a missing input",
        "description": "In this isolated exercise InputElement={value:string} represents a DOM input. Implement readInput(element: InputElement | null): string: trimmed value or \"\" for null.",
        "hints": [
          "Check null before reading value.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Обработай отсутствующее поле",
        "description": "В этом изолированном задании InputElement={value:string} представляет DOM-поле. Реализуй readInput(element: InputElement | null): string: значение без пробелов по краям или \"\" для null.",
        "hints": [
          "Проверь null перед чтением value.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "type InputElement = {value:string};\n// Implement readInput",
    "solution": "type InputElement = {value:string};\nfunction readInput(element:InputElement|null):string {return element?.value.trim() ?? \"\";}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-dom",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "readInput({value:\" Ada \"})",
        "expected": "Ada"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type P = Expect<Equal<Parameters<typeof readInput>,[InputElement|null]>>; type R = Expect<Equal<ReturnType<typeof readInput>,string>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[readInput(null),readInput({value:\"   \"})]",
        "expected": [
          "",
          ""
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-async",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-async-return-types",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "async",
    "expectedResult": 7,
    "content": {
      "de": {
        "title": "Asynchrone Ergebnisse typisieren",
        "description": "Definiere Loader = () => Promise<{id:number}> und Loaded = Awaited<ReturnType<Loader>>. Implementiere getLoadedId(value: Loaded): number für einen bereits aufgelösten Wert.",
        "hints": [
          "Awaited entpackt den Promise-Typ.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Type asynchronous results",
        "description": "Define Loader = () => Promise<{id:number}> and Loaded = Awaited<ReturnType<Loader>>. Implement getLoadedId(value: Loaded): number for an already resolved value.",
        "hints": [
          "Awaited unwraps the Promise type.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Типизируй асинхронный результат",
        "description": "Определи Loader = () => Promise<{id:number}> и Loaded = Awaited<ReturnType<Loader>>. Реализуй getLoadedId(value: Loaded): number для уже полученного результата.",
        "hints": [
          "Awaited извлекает тип результата Promise.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define Loader, Loaded and getLoadedId",
    "solution": "type Loader = () => Promise<{id:number}>;\ntype Loaded = Awaited<ReturnType<Loader>>;\nfunction getLoadedId(value:Loaded):number {return value.id;}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-async",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "getLoadedId({id:7})",
        "expected": 7
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type L = Expect<Equal<ReturnType<Loader>,Promise<{id:number}>>>; type V = Expect<Equal<Loaded,{id:number}>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "getLoadedId({id:0})",
        "expected": 0
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-api",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-api-dto",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "api",
    "expectedResult": {
      "id": 1,
      "name": "Ada"
    },
    "content": {
      "de": {
        "title": "API-Daten umformen",
        "description": "Definiere UserDto={user_id:number;display_name:string|null} und User={id:number;name:string}. mapUser(dto: UserDto): User benennt Felder um und ersetzt nur null durch \"Anonymous\".",
        "hints": [
          "?? erhält einen leeren Namen.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Transform API data",
        "description": "Define UserDto={user_id:number;display_name:string|null} and User={id:number;name:string}. mapUser(dto: UserDto): User renames fields and replaces only null with \"Anonymous\".",
        "hints": [
          "?? preserves an empty name.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Преобразуй данные API",
        "description": "Определи UserDto={user_id:number;display_name:string|null} и User={id:number;name:string}. mapUser(dto: UserDto): User переименовывает поля и заменяет только null на \"Anonymous\".",
        "hints": [
          "?? сохраняет пустое имя.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define UserDto, User and mapUser",
    "solution": "type UserDto={user_id:number;display_name:string|null};\ntype User={id:number;name:string};\nfunction mapUser(dto:UserDto):User {return {id:dto.user_id,name:dto.display_name ?? \"Anonymous\"};}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-api",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "mapUser({user_id:1,display_name:\"Ada\"})",
        "expected": {
          "id": 1,
          "name": "Ada"
        }
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type D = Expect<Equal<UserDto,{user_id:number;display_name:string|null}>>; type U = Expect<Equal<ReturnType<typeof mapUser>,{id:number;name:string}>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[mapUser({user_id:0,display_name:null}),mapUser({user_id:2,display_name:\"\"})]",
        "expected": [
          {
            "id": 0,
            "name": "Anonymous"
          },
          {
            "id": 2,
            "name": ""
          }
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-modules",
    "programmingLanguage": "typescript",
    "type": "predict",
    "topics": [
      "ts-modules-type-imports",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "modules",
    "expectedResult": "none",
    "content": {
      "de": {
        "title": "Typimporte erkennen",
        "description": "Betrachte den Code mit zwei Dateien. Weise result den String \"none\" zu, wenn import type vollständig aus dem JavaScript verschwindet, sonst \"runtime\". Bearbeite nur result; externe Importe sind hier nicht nötig.",
        "hints": [
          "Typen existieren nur bei der Typprüfung.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Recognize type imports",
        "description": "Read the two-file example. Assign result the string \"none\" if import type disappears entirely from JavaScript, otherwise \"runtime\". Edit only result; no external import is needed here.",
        "hints": [
          "Types exist only during type checking.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Распознай импорт типа",
        "description": "Изучи пример из двух файлов. Присвой result строку \"none\", если import type полностью исчезает из JavaScript, иначе \"runtime\". Изменяй только result; внешний импорт здесь не нужен.",
        "hints": [
          "Типы существуют только во время проверки типов.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "const result: string = \"\";",
    "solution": "const result: string = \"none\";",
    "input": {},
    "displayCode": "// model.ts\nexport type Product = {id:string};\n// app.ts\nimport type { Product } from \"./model\";\nconst product: Product = {id:\"A\"};",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-modules",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "result",
        "expected": "none"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type R = Expect<Equal<typeof result,string>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "result === \"runtime\"",
        "expected": false
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-errors",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-errors-try-catch",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "errors",
    "expectedResult": "Offline",
    "content": {
      "de": {
        "title": "Unbekannte Fehler behandeln",
        "description": "Implementiere errorMessage(error: unknown): string: message für Error, den String selbst für Strings, sonst \"Unknown error\".",
        "hints": [
          "Kombiniere instanceof Error mit typeof.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Handle unknown errors",
        "description": "Implement errorMessage(error: unknown): string: message for Error, the string itself for strings, otherwise \"Unknown error\".",
        "hints": [
          "Combine instanceof Error with typeof.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Обработай неизвестную ошибку",
        "description": "Реализуй errorMessage(error: unknown): string: message для Error, саму строку для string, иначе \"Unknown error\".",
        "hints": [
          "Совмести instanceof Error с typeof.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "function errorMessage(error: unknown): string {return \"\";}",
    "solution": "function errorMessage(error:unknown):string {if(error instanceof Error)return error.message;return typeof error === \"string\" ? error : \"Unknown error\";}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-errors",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "errorMessage(new Error(\"Offline\"))",
        "expected": "Offline"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type P = Expect<Equal<Parameters<typeof errorMessage>,[unknown]>>; type R = Expect<Equal<ReturnType<typeof errorMessage>,string>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[errorMessage(null),errorMessage(\"\"),errorMessage(0)]",
        "expected": [
          "Unknown error",
          "",
          "Unknown error"
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-react",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-react-props",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "react",
    "expectedResult": "Save (disabled)",
    "content": {
      "de": {
        "title": "Optionale Props typisieren",
        "description": "Definiere ButtonProps={label:string;disabled?:boolean}. Implementiere buttonText(props: ButtonProps): string: label + \" (disabled)\" bei disabled=true, sonst label. Diese Props-Übung benötigt kein JSX.",
        "hints": [
          "Ein Fragezeichen macht disabled optional.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Type optional props",
        "description": "Define ButtonProps={label:string;disabled?:boolean}. Implement buttonText(props: ButtonProps): string: label + \" (disabled)\" when disabled=true, otherwise label. This props exercise needs no JSX.",
        "hints": [
          "A question mark makes disabled optional.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Типизируй необязательные props",
        "description": "Определи ButtonProps={label:string;disabled?:boolean}. Реализуй buttonText(props: ButtonProps): string: label + \" (disabled)\" при disabled=true, иначе label. Это задание на props не требует JSX.",
        "hints": [
          "Знак вопроса делает disabled необязательным.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define ButtonProps and buttonText",
    "solution": "type ButtonProps={label:string;disabled?:boolean};\nfunction buttonText(props:ButtonProps):string {return props.label+(props.disabled ? \" (disabled)\" : \"\");}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-react",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "buttonText({label:\"Save\",disabled:true})",
        "expected": "Save (disabled)"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type P = Expect<Equal<ButtonProps,{label:string;disabled?:boolean}>>; type R = Expect<Equal<ReturnType<typeof buttonText>,string>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[buttonText({label:\"Save\"}),buttonText({label:\"\",disabled:false})]",
        "expected": [
          "Save",
          ""
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-architecture",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-architecture-repositories",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "architecture",
    "expectedResult": "Ada",
    "content": {
      "de": {
        "title": "Repository-Vertrag nutzen",
        "description": "Definiere User={id:string;name:string} und UserRepository mit find(id:string): User | undefined. Implementiere findName(repository: UserRepository, id:string): string, mit \"Not found\" bei fehlendem Nutzer.",
        "hints": [
          "Nutze den übergebenen Vertrag statt einer globalen Datenquelle.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Use a repository contract",
        "description": "Define User={id:string;name:string} and UserRepository with find(id:string): User | undefined. Implement findName(repository: UserRepository, id:string): string, with \"Not found\" for a missing user.",
        "hints": [
          "Use the supplied contract instead of a global data source.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Используй контракт репозитория",
        "description": "Определи User={id:string;name:string} и UserRepository с find(id:string): User | undefined. Реализуй findName(repository: UserRepository, id:string): string, с \"Not found\" для отсутствующего пользователя.",
        "hints": [
          "Используй переданный контракт вместо глобального источника данных.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "// Define User, UserRepository and findName",
    "solution": "type User={id:string;name:string};\ninterface UserRepository {find(id:string):User|undefined;}\nfunction findName(repository:UserRepository,id:string):string {return repository.find(id)?.name ?? \"Not found\";}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-architecture",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "findName({find:(id)=>({id,name:\"Ada\"})},\"1\")",
        "expected": "Ada"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type R = Expect<Equal<ReturnType<UserRepository[\"find\"]>,User|undefined>>; type P = Expect<Equal<Parameters<UserRepository[\"find\"]>,[string]>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[findName({find:()=>undefined},\"x\"),findName({find:(id)=>({id,name:id})},\"other\")]",
        "expected": [
          "Not found",
          "other"
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-practice-debugging",
    "programmingLanguage": "typescript",
    "type": "debug",
    "topics": [
      "ts-debugging-repair",
      "ts-foundations-explicit-typing"
    ],
    "difficulty": "medium",
    "category": "debugging",
    "expectedResult": "Ada",
    "content": {
      "de": {
        "title": "Null-Fehler reparieren",
        "description": "Repariere nickname(value: string | null): string. Gib einen getrimmten String zurück, nur bei null \"Guest\". Behalte die Signatur bei.",
        "hints": [
          "value kann null sein; || würde auch leere Strings ersetzen.",
          "Behalte die vorgegebenen Namen bei und vermeide any.",
          "Prüfe auch den Grenzfall; die Typprüfung und der Wert müssen stimmen."
        ]
      },
      "en": {
        "title": "Repair a null error",
        "description": "Repair nickname(value: string | null): string. Return a trimmed string, or \"Guest\" only for null. Keep the signature.",
        "hints": [
          "value may be null; || would also replace empty strings.",
          "Keep the given names and avoid any.",
          "Check the edge case too; both the type contract and the value must pass."
        ]
      },
      "ru": {
        "title": "Исправь ошибку с null",
        "description": "Исправь nickname(value: string | null): string. Верни строку без пробелов по краям, только для null — \"Guest\". Сохрани сигнатуру.",
        "hints": [
          "value может быть null; || также заменил бы пустые строки.",
          "Сохрани заданные имена и не используй any.",
          "Проверь граничный случай: должны совпасть и типы, и результат."
        ]
      }
    },
    "starterCode": "function nickname(value: string | null): string { return value.trim() || \"Guest\"; }",
    "solution": "function nickname(value:string|null):string {return value?.trim() ?? \"Guest\";}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "practice-debugging",
    "visibleTests": [
      {
        "id": "example",
        "kind": "runtime",
        "expression": "nickname(\" Ada \")",
        "expected": "Ada"
      }
    ],
    "hiddenTests": [
      {
        "id": "contract",
        "kind": "type",
        "code": "type P = Expect<Equal<Parameters<typeof nickname>,[string|null]>>; type R = Expect<Equal<ReturnType<typeof nickname>,string>>;"
      },
      {
        "id": "edge",
        "kind": "runtime",
        "expression": "[nickname(null),nickname(\"\"),nickname(\"   \")]",
        "expected": [
          "Guest",
          "",
          ""
        ]
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  }
];
