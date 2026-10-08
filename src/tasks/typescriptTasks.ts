import type { Task } from "../types/task";
import type { LearningMetadata } from "../types/learning";

export const typescriptTasks: (Task & LearningMetadata)[] = [
  {
    "id": "ts-inferred-stock-001",
    "programmingLanguage": "typescript",
    "type": "predict",
    "topics": [
      "ts-foundations-inference",
      "basics"
    ],
    "difficulty": "easy",
    "category": "inventory",
    "expectedResult": "number",
    "content": {
      "en": {
        "title": "Infer the stock type",
        "description": "Without running the displayed code, store the inferred type of stock in result as a string. Use a type name, not its current value.",
        "hints": [
          "Look at the declaration, not the last assigned value.",
          "A let variable can hold other values of the same primitive type.",
          "Choose the primitive type name for numeric inventory counts."
        ]
      },
      "ru": {
        "title": "Определи тип остатка",
        "description": "Не выполняя показанный код, запиши выведенный тип stock строкой в result. Нужен тип, а не текущее значение.",
        "hints": [
          "Смотри на объявление, а не на последнее значение.",
          "Переменная let допускает другие значения того же примитивного типа.",
          "Выбери название примитивного типа для числового остатка."
        ]
      },
      "de": {
        "title": "Bestandstyp ableiten",
        "description": "Speichere den abgeleiteten Typ von stock als String in result, ohne den gezeigten Code auszuführen. Gesucht ist der Typ, nicht der aktuelle Wert.",
        "hints": [
          "Betrachte die Deklaration, nicht den zuletzt zugewiesenen Wert.",
          "Eine let-Variable kann andere Werte desselben primitiven Typs aufnehmen.",
          "Wähle den primitiven Typnamen für numerische Bestände."
        ]
      }
    },
    "starterCode": "const result = \"\";",
    "solution": "const result = \"number\";",
    "input": {},
    "displayCode": "let stock = 12;\nstock = 0;",
    "prerequisites": [],
    "stage": "recognition",
    "dimensions": [
      "type-inference-understanding"
    ],
    "context": "inventory",
    "visibleTests": [
      {
        "id": "inferred-type",
        "kind": "runtime",
        "expression": "result",
        "expected": "number"
      }
    ],
    "hiddenTests": [
      {
        "id": "answer-type",
        "kind": "type",
        "code": "const answer: string = result;\nvoid answer;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-price-declaration-002",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-foundations-explicit-typing",
      "ts-primitives-number"
    ],
    "difficulty": "easy",
    "category": "prices",
    "expectedResult": 19.5,
    "content": {
      "en": {
        "title": "Declare a price",
        "description": "Declare a mutable price with an explicit number type and initial value 19.5. The price must accept other numbers and reject strings.",
        "hints": [
          "Separate the value from the type describing valid prices.",
          "Type annotations follow the variable name after a colon.",
          "Declare price with let, a numeric annotation, and its initial value."
        ]
      },
      "ru": {
        "title": "Объяви цену",
        "description": "Объяви изменяемую price с явным типом number и начальным значением 19.5. Другие числа допустимы, строки — нет.",
        "hints": [
          "Раздели значение и тип допустимых цен.",
          "Аннотация типа пишется после имени через двоеточие.",
          "Используй let, числовую аннотацию и начальное значение."
        ]
      },
      "de": {
        "title": "Preis deklarieren",
        "description": "Deklariere die veränderbare Variable price explizit als number mit dem Startwert 19.5. Weitere Zahlen sind erlaubt, Strings nicht.",
        "hints": [
          "Trenne den Wert vom Typ gültiger Preise.",
          "Eine Typannotation folgt nach einem Doppelpunkt auf den Namen.",
          "Verwende let, eine numerische Annotation und den Startwert."
        ]
      }
    },
    "starterCode": "let price;",
    "solution": "let price: number = 19.5;",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "guided-practice",
    "dimensions": [
      "syntax-knowledge",
      "type-modelling"
    ],
    "context": "prices",
    "visibleTests": [
      {
        "id": "initial-price",
        "kind": "runtime",
        "expression": "price",
        "expected": 19.5
      }
    ],
    "hiddenTests": [
      {
        "id": "numeric-contract",
        "kind": "type",
        "code": "type Price = Expect<Equal<typeof price, number>>;\nprice = 0;\n// @ts-expect-error Text is not a price\nprice = \"19.50\";"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-order-status-003",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-primitives-literals",
      "ts-unions-literals",
      "ts-aliases-basic"
    ],
    "difficulty": "easy",
    "category": "orders",
    "expectedResult": null,
    "content": {
      "en": {
        "title": "Model order statuses",
        "description": "Define OrderStatus to allow exactly \"pending\" and \"paid\". It must reject any other status.",
        "hints": [
          "This domain has a closed set of valid values.",
          "Literal types can be combined with a union.",
          "Create a type alias joining the two allowed string literals."
        ]
      },
      "ru": {
        "title": "Опиши статусы заказа",
        "description": "Определи OrderStatus: допустимы только \"pending\" и \"paid\". Любой другой статус должен отвергаться.",
        "hints": [
          "Набор допустимых значений здесь закрытый.",
          "Литеральные типы можно объединить в union.",
          "Создай type alias из двух разрешённых строковых литералов."
        ]
      },
      "de": {
        "title": "Bestellstatus modellieren",
        "description": "Definiere OrderStatus so, dass nur \"pending\" und \"paid\" zulässig sind. Jeder andere Status muss abgelehnt werden.",
        "hints": [
          "Die Domäne besitzt eine geschlossene Menge gültiger Werte.",
          "Literaltypen lassen sich mit einer Union verbinden.",
          "Erstelle einen Typalias aus den zwei erlaubten Stringliteralen."
        ]
      }
    },
    "starterCode": "type OrderStatus = unknown;",
    "solution": "type OrderStatus = \"pending\" | \"paid\";",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "guided-practice",
    "dimensions": [
      "syntax-knowledge",
      "type-modelling"
    ],
    "context": "orders",
    "visibleTests": [
      {
        "id": "valid-statuses",
        "kind": "type",
        "code": "const pending: OrderStatus = \"pending\";\nconst paid: OrderStatus = \"paid\";\nvoid pending; void paid;"
      }
    ],
    "hiddenTests": [
      {
        "id": "closed-statuses",
        "kind": "type",
        "code": "type Status = Expect<Equal<OrderStatus, \"pending\" | \"paid\">>;\n// @ts-expect-error Invalid status\nconst wrong: OrderStatus = \"cancelled\";\nvoid wrong;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-nullable-label-004",
    "programmingLanguage": "typescript",
    "type": "debug",
    "topics": [
      "ts-primitives-null",
      "ts-unions-basic",
      "ts-narrowing-equality",
      "ts-functions-returns"
    ],
    "difficulty": "easy",
    "category": "users",
    "expectedResult": "ADA",
    "content": {
      "en": {
        "title": "Repair the user label",
        "description": "Fix label: uppercase a string name, return \"Guest\" for null, and preserve an empty string. Keep the declared input and output types.",
        "hints": [
          "One allowed input has no string methods.",
          "An explicit null check narrows the union.",
          "Handle null before using toUpperCase on the remaining branch."
        ]
      },
      "ru": {
        "title": "Исправь подпись пользователя",
        "description": "Исправь label: строковое имя — в верхний регистр, null — в \"Guest\", пустую строку сохрани. Не меняй типы входа и результата.",
        "hints": [
          "У одного допустимого значения нет строковых методов.",
          "Явная проверка на null сужает union.",
          "Обработай null до вызова toUpperCase в оставшейся ветке."
        ]
      },
      "de": {
        "title": "Benutzerlabel reparieren",
        "description": "Korrigiere label: Namen in Großbuchstaben, bei null \"Guest\", leere Strings unverändert. Behalte Ein- und Ausgabetyp bei.",
        "hints": [
          "Ein erlaubter Eingabewert besitzt keine Stringmethoden.",
          "Eine explizite null-Prüfung verengt die Union.",
          "Behandle null vor dem Aufruf von toUpperCase im anderen Zweig."
        ]
      }
    },
    "starterCode": "function label(name: string | null): string {\n  return name.toUpperCase();\n}",
    "solution": "function label(name: string | null): string {\n  return name === null ? \"Guest\" : name.toUpperCase();\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "guided-practice",
    "dimensions": [
      "type-narrowing",
      "error-reading"
    ],
    "context": "users",
    "visibleTests": [
      {
        "id": "named-user",
        "kind": "runtime",
        "expression": "label(\"Ada\")",
        "expected": "ADA"
      }
    ],
    "hiddenTests": [
      {
        "id": "guest",
        "kind": "runtime",
        "expression": "label(null)",
        "expected": "Guest"
      },
      {
        "id": "empty-name",
        "kind": "runtime",
        "expression": "label(\"\")",
        "expected": ""
      },
      {
        "id": "label-contract",
        "kind": "type",
        "code": "type Label = Expect<Equal<typeof label, (name: string | null) => string>>;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-typed-prices-005",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-arrays-number",
      "ts-primitives-number",
      "arrays"
    ],
    "difficulty": "easy",
    "category": "catalog",
    "expectedResult": [
      12,
      0,
      49.5
    ],
    "content": {
      "en": {
        "title": "Create a typed price list",
        "description": "Create prices containing 12, 0 and 49.5 in that order. It must be a mutable array of numbers that rejects string entries.",
        "hints": [
          "The element type applies to every entry, including later additions.",
          "Use an explicit array element type.",
          "Annotate prices with number[] before assigning the array."
        ]
      },
      "ru": {
        "title": "Создай типизированный список цен",
        "description": "Создай prices со значениями 12, 0 и 49.5 по порядку. Массив должен допускать новые числа, но отвергать строки.",
        "hints": [
          "Тип элемента относится и к будущим добавлениям.",
          "Укажи явный тип элементов массива.",
          "Аннотируй prices как number[] до присваивания массива."
        ]
      },
      "de": {
        "title": "Typisierte Preisliste erstellen",
        "description": "Erstelle prices mit 12, 0 und 49.5 in dieser Reihenfolge. Das Array soll veränderbar sein und Strings ablehnen.",
        "hints": [
          "Der Elementtyp gilt auch für spätere Einträge.",
          "Verwende einen expliziten Array-Elementtyp.",
          "Annotiere prices vor der Zuweisung mit number[]."
        ]
      }
    },
    "starterCode": "const prices = [];",
    "solution": "const prices: number[] = [12, 0, 49.5];",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "guided-practice",
    "dimensions": [
      "syntax-knowledge",
      "js-ts-combination"
    ],
    "context": "catalog",
    "visibleTests": [
      {
        "id": "catalog-prices",
        "kind": "runtime",
        "expression": "prices",
        "expected": [
          12,
          0,
          49.5
        ]
      }
    ],
    "hiddenTests": [
      {
        "id": "array-contract",
        "kind": "type",
        "code": "type Prices = Expect<Equal<typeof prices, number[]>>;\nprices.push(5);\n// @ts-expect-error Strings are not prices\nprices.push(\"5\");"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-readonly-total-006",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-arrays-readonly",
      "ts-functions-parameters",
      "ts-functions-returns",
      "arrays"
    ],
    "difficulty": "medium",
    "category": "shopping-cart",
    "expectedResult": 20,
    "content": {
      "en": {
        "title": "Total a shared cart",
        "description": "Implement total. Sum the prices, return 0 for an empty cart, and leave the input unchanged. Accept readonly arrays.",
        "hints": [
          "The cart may be shared by several parts of the app.",
          "Accumulate into a separate value without changing input entries.",
          "Start the running sum at zero so the empty case also works."
        ]
      },
      "ru": {
        "title": "Посчитай общую стоимость",
        "description": "Реализуй total: сумма цен, 0 для пустой корзины, исходный массив не меняется. Принимай readonly-массивы.",
        "hints": [
          "Корзина может использоваться несколькими частями приложения.",
          "Собирай сумму отдельно от элементов входного массива.",
          "Начальное значение суммы 0 также покрывает пустую корзину."
        ]
      },
      "de": {
        "title": "Warenkorb summieren",
        "description": "Implementiere total: Summe der Preise, 0 für einen leeren Warenkorb, Eingabe unverändert. Akzeptiere readonly-Arrays.",
        "hints": [
          "Mehrere Teile der App können denselben Warenkorb verwenden.",
          "Sammle die Summe separat, ohne Einträge zu verändern.",
          "Beginne mit null als Summe, damit auch der leere Fall funktioniert."
        ]
      }
    },
    "starterCode": "function total(prices: readonly number[]): number {\n  return 0;\n}",
    "solution": "function total(prices: readonly number[]): number {\n  return prices.reduce((sum, price) => sum + price, 0);\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-modelling",
      "js-ts-combination"
    ],
    "context": "shopping-cart",
    "visibleTests": [
      {
        "id": "cart-total",
        "kind": "runtime",
        "expression": "total([12, 3, 5])",
        "expected": 20
      }
    ],
    "hiddenTests": [
      {
        "id": "empty-cart",
        "kind": "runtime",
        "expression": "total([])",
        "expected": 0
      },
      {
        "id": "no-mutation",
        "kind": "runtime",
        "expression": "(() => { const items = Object.freeze([5, 0, 2]); return [total(items), items]; })()",
        "expected": [
          7,
          [
            5,
            0,
            2
          ]
        ]
      },
      {
        "id": "readonly-contract",
        "kind": "type",
        "code": "type Total = Expect<Equal<typeof total, (prices: readonly number[]) => number>>;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-shipping-tuple-007",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-arrays-tuples",
      "ts-functions-parameters",
      "ts-functions-returns"
    ],
    "difficulty": "easy",
    "category": "shipping",
    "expectedResult": "Berlin: 2 kg",
    "content": {
      "en": {
        "title": "Describe a shipment",
        "description": "Implement shippingLabel for the tuple [city, weight]. Return \"city: weight kg\". The first entry must be a string and the second a number.",
        "hints": [
          "Each position has its own meaning and type.",
          "Use a tuple rather than an array of interchangeable elements.",
          "Read the city at index 0 and weight at index 1."
        ]
      },
      "ru": {
        "title": "Опиши отправление",
        "description": "Реализуй shippingLabel для кортежа [город, вес]. Верни \"город: вес kg\". Первый элемент — строка, второй — число.",
        "hints": [
          "Каждая позиция имеет собственный смысл и тип.",
          "Нужен кортеж, а не массив взаимозаменяемых элементов.",
          "Город находится по индексу 0, вес — по индексу 1."
        ]
      },
      "de": {
        "title": "Sendung beschreiben",
        "description": "Implementiere shippingLabel für [Stadt, Gewicht]. Gib \"Stadt: Gewicht kg\" zurück. Zuerst ein String, dann eine Zahl.",
        "hints": [
          "Jede Position besitzt eine eigene Bedeutung und einen eigenen Typ.",
          "Verwende ein Tupel statt austauschbarer Array-Elemente.",
          "Lies die Stadt an Index 0 und das Gewicht an Index 1."
        ]
      }
    },
    "starterCode": "function shippingLabel(shipment: [string, number]): string {\n  return \"\";\n}",
    "solution": "function shippingLabel(shipment: [string, number]): string {\n  return `${shipment[0]}: ${shipment[1]} kg`;\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "guided-practice",
    "dimensions": [
      "type-modelling",
      "syntax-knowledge"
    ],
    "context": "shipping",
    "visibleTests": [
      {
        "id": "label",
        "kind": "runtime",
        "expression": "shippingLabel([\"Berlin\", 2])",
        "expected": "Berlin: 2 kg"
      }
    ],
    "hiddenTests": [
      {
        "id": "zero-weight",
        "kind": "runtime",
        "expression": "shippingLabel([\"Bonn\", 0])",
        "expected": "Bonn: 0 kg"
      },
      {
        "id": "tuple-contract",
        "kind": "type",
        "code": "type Shipment = Expect<Equal<Parameters<typeof shippingLabel>[0], [string, number]>>;\n// @ts-expect-error Wrong tuple order\nshippingLabel([2, \"Berlin\"]);"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-product-interface-008",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-interfaces-basic",
      "ts-interfaces-properties",
      "ts-functions-types",
      "objects"
    ],
    "difficulty": "easy",
    "category": "products",
    "expectedResult": "Mouse: 25 EUR",
    "content": {
      "en": {
        "title": "Define Product",
        "description": "Create interface Product with required name: string and price: number. Implement productLabel returning \"name: price EUR\".",
        "hints": [
          "The model describes the same shape for every product.",
          "Interface properties declare the expected field types.",
          "Declare both required properties, then read them in the label function."
        ]
      },
      "ru": {
        "title": "Определи Product",
        "description": "Создай interface Product с обязательными name: string и price: number. Реализуй productLabel, возвращающую \"name: price EUR\".",
        "hints": [
          "Модель описывает одинаковую структуру всех товаров.",
          "Свойства интерфейса задают типы полей.",
          "Объяви оба обязательных поля и используй их в подписи."
        ]
      },
      "de": {
        "title": "Product definieren",
        "description": "Erstelle interface Product mit name: string und price: number als Pflichtfeldern. productLabel soll \"name: price EUR\" zurückgeben.",
        "hints": [
          "Das Modell beschreibt dieselbe Struktur für jedes Produkt.",
          "Interface-Eigenschaften legen die Feldtypen fest.",
          "Deklariere beide Pflichtfelder und verwende sie für das Label."
        ]
      }
    },
    "starterCode": "interface Product {}\n\nfunction productLabel(product: Product): string {\n  return \"\";\n}",
    "solution": "interface Product {\n  name: string;\n  price: number;\n}\n\nfunction productLabel(product: Product): string {\n  return `${product.name}: ${product.price} EUR`;\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "guided-practice",
    "dimensions": [
      "syntax-knowledge",
      "type-modelling"
    ],
    "context": "products",
    "visibleTests": [
      {
        "id": "product-label",
        "kind": "runtime",
        "expression": "productLabel({ name: \"Mouse\", price: 25 })",
        "expected": "Mouse: 25 EUR"
      }
    ],
    "hiddenTests": [
      {
        "id": "free-product",
        "kind": "runtime",
        "expression": "productLabel({ name: \"Sample\", price: 0 })",
        "expected": "Sample: 0 EUR"
      },
      {
        "id": "product-contract",
        "kind": "type",
        "code": "type Name = Expect<Equal<Product[\"name\"], string>>;\ntype Price = Expect<Equal<Product[\"price\"], number>>;\n// @ts-expect-error Price must be numeric\nconst invalid: Product = { name: \"Mouse\", price: \"25\" };\nvoid invalid;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-optional-nickname-009",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-objects-optional",
      "ts-functions-returns",
      "ts-primitives-undefined"
    ],
    "difficulty": "medium",
    "category": "profiles",
    "expectedResult": "An",
    "content": {
      "en": {
        "title": "Choose a profile label",
        "description": "Implement displayName: prefer nickname when it is present, otherwise use name. An empty nickname is an intentional value and must be preserved.",
        "hints": [
          "Missing and empty are different cases.",
          "Check undefined or use nullish fallback rather than truthiness.",
          "Return the optional value unless it is absent."
        ]
      },
      "ru": {
        "title": "Выбери подпись профиля",
        "description": "Реализуй displayName: используй nickname, если он присутствует, иначе name. Пустой nickname — намеренное значение, его нужно сохранить.",
        "hints": [
          "Отсутствующее и пустое значения различаются.",
          "Проверяй undefined или используй nullish-подстановку вместо truthiness.",
          "Верни необязательное значение, если оно не отсутствует."
        ]
      },
      "de": {
        "title": "Profilnamen auswählen",
        "description": "Implementiere displayName: nickname verwenden, falls vorhanden, sonst name. Ein leerer nickname ist absichtlich gesetzt und muss erhalten bleiben.",
        "hints": [
          "Fehlend und leer sind unterschiedliche Fälle.",
          "Prüfe undefined oder verwende einen nullish-Fallback statt Truthiness.",
          "Gib den optionalen Wert zurück, sofern er nicht fehlt."
        ]
      }
    },
    "starterCode": "function displayName(user: { name: string; nickname?: string }): string {\n  return user.name;\n}",
    "solution": "function displayName(user: { name: string; nickname?: string }): string {\n  return user.nickname ?? user.name;\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-narrowing",
      "type-modelling"
    ],
    "context": "profiles",
    "visibleTests": [
      {
        "id": "nickname",
        "kind": "runtime",
        "expression": "displayName({ name: \"Anna\", nickname: \"An\" })",
        "expected": "An"
      }
    ],
    "hiddenTests": [
      {
        "id": "missing-nickname",
        "kind": "runtime",
        "expression": "displayName({ name: \"Anna\" })",
        "expected": "Anna"
      },
      {
        "id": "empty-nickname",
        "kind": "runtime",
        "expression": "displayName({ name: \"Anna\", nickname: \"\" })",
        "expected": ""
      },
      {
        "id": "optional-contract",
        "kind": "type",
        "code": "type User = Expect<Equal<Parameters<typeof displayName>[0], { name: string; nickname?: string }>>;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-readonly-user-010",
    "programmingLanguage": "typescript",
    "type": "write-code",
    "topics": [
      "ts-objects-readonly",
      "ts-interfaces-readonly"
    ],
    "difficulty": "easy",
    "category": "accounts",
    "expectedResult": null,
    "content": {
      "en": {
        "title": "Protect account identity",
        "description": "Define interface User with string fields id and name. TypeScript must reject changes to id but allow name updates.",
        "hints": [
          "Identity and display data have different update rules.",
          "readonly can apply to one property without freezing the whole type.",
          "Mark only id as readonly; keep name mutable."
        ]
      },
      "ru": {
        "title": "Защити идентификатор",
        "description": "Определи interface User со строковыми id и name. TypeScript должен запрещать изменение id и разрешать изменение name.",
        "hints": [
          "Идентификатор и отображаемое имя меняются по разным правилам.",
          "readonly можно применить к одному свойству.",
          "Пометь только id как readonly, а name оставь изменяемым."
        ]
      },
      "de": {
        "title": "Kontoidentität schützen",
        "description": "Definiere interface User mit id und name als Strings. TypeScript soll Änderungen an id ablehnen, aber Namensänderungen erlauben.",
        "hints": [
          "Identität und Anzeigename haben unterschiedliche Änderungsregeln.",
          "readonly kann nur für eine einzelne Eigenschaft gelten.",
          "Markiere nur id als readonly und lasse name veränderbar."
        ]
      }
    },
    "starterCode": "interface User {}",
    "solution": "interface User {\n  readonly id: string;\n  name: string;\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "guided-practice",
    "dimensions": [
      "syntax-knowledge",
      "type-modelling"
    ],
    "context": "accounts",
    "visibleTests": [
      {
        "id": "editable-name",
        "kind": "type",
        "code": "const user: User = { id: \"u1\", name: \"Ada\" };\nuser.name = \"Grace\";"
      }
    ],
    "hiddenTests": [
      {
        "id": "stable-id",
        "kind": "type",
        "code": "const user: User = { id: \"u1\", name: \"Ada\" };\n// @ts-expect-error Identity must remain stable\nuser.id = \"u2\";\ntype ID = Expect<Equal<User[\"id\"], string>>;\ntype Name = Expect<Equal<User[\"name\"], string>>;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-nested-order-011",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-objects-nested",
      "ts-arrays-objects",
      "ts-interfaces-basic",
      "ts-functions-types",
      "arrays"
    ],
    "difficulty": "medium",
    "category": "order-lines",
    "expectedResult": 39,
    "content": {
      "en": {
        "title": "Calculate an order total",
        "description": "Define Order with a string id and items containing numeric price and quantity. Implement orderTotal. Empty orders cost 0; do not change the input.",
        "hints": [
          "Each line contributes its unit price multiplied by its quantity.",
          "Describe the outer object and its array element shape.",
          "Combine the line totals with a zero starting total."
        ]
      },
      "ru": {
        "title": "Рассчитай заказ",
        "description": "Определи Order со строковым id и items с числовыми price и quantity. Реализуй orderTotal. Пустой заказ стоит 0; входные данные не меняй.",
        "hints": [
          "Вклад каждой позиции — цена единицы, умноженная на количество.",
          "Опиши внешний объект и структуру элемента массива.",
          "Собери суммы позиций, начиная с нуля."
        ]
      },
      "de": {
        "title": "Bestellsumme berechnen",
        "description": "Definiere Order mit String-id und items mit numerischem price und quantity. Implementiere orderTotal. Leere Bestellungen kosten 0; Eingabe nicht verändern.",
        "hints": [
          "Jede Position trägt Stückpreis mal Menge bei.",
          "Beschreibe das äußere Objekt und die Struktur eines Array-Eintrags.",
          "Addiere die Positionssummen mit dem Startwert null."
        ]
      }
    },
    "starterCode": "function orderTotal(order: Order): number {\n  return 0;\n}",
    "solution": "interface Order {\n  id: string;\n  items: { price: number; quantity: number }[];\n}\n\nfunction orderTotal(order: Order): number {\n  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "mixed-practice",
    "dimensions": [
      "type-modelling",
      "js-ts-combination"
    ],
    "context": "order-lines",
    "visibleTests": [
      {
        "id": "order-total",
        "kind": "runtime",
        "expression": "orderTotal({ id: \"o1\", items: [{ price: 12, quantity: 2 }, { price: 5, quantity: 3 }] })",
        "expected": 39
      }
    ],
    "hiddenTests": [
      {
        "id": "empty-order",
        "kind": "runtime",
        "expression": "orderTotal({ id: \"o2\", items: [] })",
        "expected": 0
      },
      {
        "id": "zero-quantity",
        "kind": "runtime",
        "expression": "orderTotal({ id: \"o3\", items: [{ price: 20, quantity: 0 }] })",
        "expected": 0
      },
      {
        "id": "order-shape",
        "kind": "type",
        "code": "type ID = Expect<Equal<Order[\"id\"], string>>;\ntype Price = Expect<Equal<Order[\"items\"][number][\"price\"], number>>;\ntype Quantity = Expect<Equal<Order[\"items\"][number][\"quantity\"], number>>;"
      },
      {
        "id": "immutable-input",
        "kind": "runtime",
        "expression": "(() => { const order = { id: \"immutable\", items: [{ price: 2, quantity: 3 }] }; Object.freeze(order.items[0]); Object.freeze(order.items); Object.freeze(order); return orderTotal(order); })()",
        "expected": 6
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-default-quantity-012",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-functions-defaults",
      "ts-functions-returns",
      "ts-primitives-number"
    ],
    "difficulty": "easy",
    "category": "checkout",
    "expectedResult": 12,
    "content": {
      "en": {
        "title": "Price a checkout line",
        "description": "Implement lineTotal: multiply price by quantity, using quantity 1 when omitted. Explicit quantity 0 must remain 0.",
        "hints": [
          "The default applies only when an argument is missing or undefined.",
          "A default parameter also supplies inference for its type.",
          "Use the quantity parameter directly instead of replacing falsy values."
        ]
      },
      "ru": {
        "title": "Рассчитай позицию корзины",
        "description": "Реализуй lineTotal: цена × количество; если количество пропущено, используй 1. Явный 0 должен оставаться нулём.",
        "hints": [
          "Значение по умолчанию используется при пропуске аргумента или undefined.",
          "Параметр по умолчанию также позволяет вывести его тип.",
          "Используй quantity напрямую, не заменяя falsy-значения."
        ]
      },
      "de": {
        "title": "Warenkorbposition berechnen",
        "description": "Implementiere lineTotal: Preis mal Menge, bei fehlender Menge gilt 1. Eine explizite 0 muss erhalten bleiben.",
        "hints": [
          "Der Standardwert gilt nur bei fehlendem Argument oder undefined.",
          "Ein Standardparameter ermöglicht auch die Typableitung.",
          "Verwende quantity direkt, ohne falsy-Werte zu ersetzen."
        ]
      }
    },
    "starterCode": "function lineTotal(price: number, quantity = 1): number {\n  return 0;\n}",
    "solution": "function lineTotal(price: number, quantity = 1): number {\n  return price * quantity;\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-inference-understanding",
      "js-ts-combination"
    ],
    "context": "checkout",
    "visibleTests": [
      {
        "id": "default-quantity",
        "kind": "runtime",
        "expression": "lineTotal(12)",
        "expected": 12
      }
    ],
    "hiddenTests": [
      {
        "id": "multiple",
        "kind": "runtime",
        "expression": "lineTotal(12, 3)",
        "expected": 36
      },
      {
        "id": "zero-quantity",
        "kind": "runtime",
        "expression": "lineTotal(12, 0)",
        "expected": 0
      },
      {
        "id": "quantity-type",
        "kind": "type",
        "code": "type Args = Expect<Equal<Parameters<typeof lineTotal>, [price: number, quantity?: number]>>;\n// @ts-expect-error Quantity is numeric\nlineTotal(12, \"3\");"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-price-callback-013",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-functions-callbacks",
      "ts-functions-types",
      "ts-arrays-number",
      "functions",
      "arrays"
    ],
    "difficulty": "medium",
    "category": "price-transformation",
    "expectedResult": [
      5,
      10
    ],
    "content": {
      "en": {
        "title": "Apply a pricing rule",
        "description": "Implement transformPrices. Apply the provided numeric transform exactly once per price, keep order, and return a new array without modifying the input.",
        "hints": [
          "The caller supplies the pricing rule; your function handles traversal.",
          "A callback type describes both its input and output.",
          "Build a new array and call transform once for each original price."
        ]
      },
      "ru": {
        "title": "Примени правило цены",
        "description": "Реализуй transformPrices. Примени числовую transform ровно один раз к каждой цене, сохрани порядок и верни новый массив, не меняя входной.",
        "hints": [
          "Правило передаёт вызывающий код, твоя функция обходит цены.",
          "Тип callback описывает аргумент и результат.",
          "Собери новый массив, вызывая transform один раз для каждой исходной цены."
        ]
      },
      "de": {
        "title": "Preisregel anwenden",
        "description": "Implementiere transformPrices. Wende transform genau einmal pro Preis an, behalte die Reihenfolge und gib ein neues Array zurück, ohne die Eingabe zu ändern.",
        "hints": [
          "Der Aufrufer liefert die Preisregel; deine Funktion übernimmt den Durchlauf.",
          "Der Callback-Typ beschreibt Ein- und Ausgabe.",
          "Erzeuge ein neues Array und rufe transform einmal pro ursprünglichem Preis auf."
        ]
      }
    },
    "starterCode": "function transformPrices(prices: number[], transform: (price: number) => number): number[] {\n  return [];\n}",
    "solution": "function transformPrices(prices: number[], transform: (price: number) => number): number[] {\n  return prices.map((price) => transform(price));\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "guided-practice",
    "dimensions": [
      "type-modelling",
      "js-ts-combination"
    ],
    "context": "price-transformation",
    "visibleTests": [
      {
        "id": "discount",
        "kind": "runtime",
        "expression": "transformPrices([10, 20], (price) => price / 2)",
        "expected": [
          5,
          10
        ]
      }
    ],
    "hiddenTests": [
      {
        "id": "empty",
        "kind": "runtime",
        "expression": "transformPrices([], (price) => price + 1)",
        "expected": []
      },
      {
        "id": "call-once",
        "kind": "runtime",
        "expression": "(() => { let calls = 0; const values = transformPrices([2, 4], (price) => { calls++; return price + 1; }); return [values, calls]; })()",
        "expected": [
          [
            3,
            5
          ],
          2
        ]
      },
      {
        "id": "callback-contract",
        "kind": "type",
        "code": "type Transform = Expect<Equal<Parameters<typeof transformPrices>[1], (price: number) => number>>;\n// @ts-expect-error A label is not a transformed price\ntransformPrices([1], (price) => String(price));"
      },
      {
        "id": "immutable-input",
        "kind": "runtime",
        "expression": "(() => { const prices = [3, 1]; Object.freeze(prices); return transformPrices(prices, (price) => price * 2); })()",
        "expected": [
          6,
          2
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
    "id": "ts-literal-inference-014",
    "programmingLanguage": "typescript",
    "type": "predict",
    "topics": [
      "ts-foundations-inference",
      "ts-primitives-literals",
      "ts-arrays-tuples"
    ],
    "difficulty": "easy",
    "category": "payment-status",
    "expectedResult": [
      "string",
      "\"paid\""
    ],
    "content": {
      "en": {
        "title": "Compare inferred statuses",
        "description": "Without executing the displayed code, put the inferred types of editableStatus and fixedStatus into result in that order. Write string for the broad type and include quote characters for a string literal type.",
        "hints": [
          "Reassignment is possible for one declaration but not the other.",
          "let commonly widens a primitive literal; const can preserve it.",
          "Return two type names, not two copies of the runtime status value."
        ]
      },
      "ru": {
        "title": "Сравни выведенные типы",
        "description": "Не выполняя показанный код, запиши типы editableStatus и fixedStatus в result по порядку. Для широкого типа пиши string, для строкового литерала включи символы кавычек.",
        "hints": [
          "Одно объявление допускает переприсваивание, другое — нет.",
          "let обычно расширяет примитивный литерал, const может сохранить его.",
          "Верни два названия типов, а не две копии значения статуса."
        ]
      },
      "de": {
        "title": "Abgeleitete Statustypen vergleichen",
        "description": "Trage die abgeleiteten Typen von editableStatus und fixedStatus in dieser Reihenfolge in result ein, ohne den Code auszuführen. Für den breiten Typ string schreiben; beim Stringliteraltyp Anführungszeichen einschließen.",
        "hints": [
          "Eine Deklaration erlaubt Neuzuweisungen, die andere nicht.",
          "let verbreitert meist primitive Literale; const kann sie erhalten.",
          "Gib zwei Typnamen zurück, nicht zweimal den Laufzeitwert."
        ]
      }
    },
    "starterCode": "const result: [string, string] = [\"\", \"\"];",
    "solution": "const result: [string, string] = [\"string\", '\"paid\"'];",
    "input": {},
    "displayCode": "let editableStatus = \"paid\";\nconst fixedStatus = \"paid\";",
    "prerequisites": [],
    "stage": "recognition",
    "dimensions": [
      "type-inference-understanding"
    ],
    "context": "payment-status",
    "visibleTests": [
      {
        "id": "inferred-pair",
        "kind": "runtime",
        "expression": "result",
        "expected": [
          "string",
          "\"paid\""
        ]
      }
    ],
    "hiddenTests": [
      {
        "id": "answer-tuple",
        "kind": "type",
        "code": "type Answer = Expect<Equal<typeof result, [string, string]>>;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-affordable-products-015",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-interfaces-basic",
      "ts-arrays-objects",
      "ts-functions-callbacks",
      "js-arrays-filtering",
      "objects"
    ],
    "difficulty": "medium",
    "category": "storefront",
    "expectedResult": [
      {
        "name": "Mouse",
        "price": 25
      }
    ],
    "content": {
      "en": {
        "title": "Build the budget shelf",
        "description": "The storefront receives products with name and price. Implement affordableProducts to return only products cheaper than €50, keeping order and input unchanged. Define the missing Product model.",
        "hints": [
          "Focus on the store rule and the boundary price.",
          "Separate the product shape from the operation selecting eligible entries.",
          "Keep an entry only when its numeric price is strictly below the limit."
        ]
      },
      "ru": {
        "title": "Собери бюджетную витрину",
        "description": "Витрина получает товары с name и price. Реализуй affordableProducts: только товары дешевле €50, порядок и входные данные сохраняются. Определи недостающую модель Product.",
        "hints": [
          "Подумай о правиле магазина и граничной цене.",
          "Отдели структуру товара от операции отбора записей.",
          "Оставляй запись, только когда её числовая цена строго ниже порога."
        ]
      },
      "de": {
        "title": "Budgetregal zusammenstellen",
        "description": "Der Shop erhält Produkte mit name und price. affordableProducts soll nur Produkte unter 50 € zurückgeben, Reihenfolge und Eingabe unverändert. Definiere das fehlende Modell Product.",
        "hints": [
          "Achte auf die Geschäftsregel und den Grenzpreis.",
          "Trenne die Produktstruktur von der Auswahl geeigneter Einträge.",
          "Behalte einen Eintrag nur, wenn sein numerischer Preis strikt unter der Grenze liegt."
        ]
      }
    },
    "starterCode": "function affordableProducts(products: Product[]): Product[] {\n  return [];\n}",
    "solution": "interface Product {\n  name: string;\n  price: number;\n}\n\nfunction affordableProducts(products: Product[]): Product[] {\n  return products.filter((product) => product.price < 50);\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "mixed-practice",
    "dimensions": [
      "type-modelling",
      "js-ts-combination"
    ],
    "context": "storefront",
    "visibleTests": [
      {
        "id": "affordable",
        "kind": "runtime",
        "expression": "affordableProducts([{ name: \"Mouse\", price: 25 }, { name: \"Monitor\", price: 180 }])",
        "expected": [
          {
            "name": "Mouse",
            "price": 25
          }
        ]
      }
    ],
    "hiddenTests": [
      {
        "id": "boundary",
        "kind": "runtime",
        "expression": "affordableProducts([{ name: \"Gift\", price: 0 }, { name: \"Cable\", price: 50 }])",
        "expected": [
          {
            "name": "Gift",
            "price": 0
          }
        ]
      },
      {
        "id": "empty",
        "kind": "runtime",
        "expression": "affordableProducts([])",
        "expected": []
      },
      {
        "id": "product-fields",
        "kind": "type",
        "code": "type ProductName = Expect<Equal<Product[\"name\"], string>>;\ntype ProductPrice = Expect<Equal<Product[\"price\"], number>>;\ntype Result = Expect<Equal<ReturnType<typeof affordableProducts>, Product[]>>;"
      },
      {
        "id": "immutable-input",
        "kind": "runtime",
        "expression": "(() => { const products = [{ name: \"Z\", price: 30 }, { name: \"A\", price: 10 }]; products.forEach(Object.freeze); Object.freeze(products); return affordableProducts(products); })()",
        "expected": [
          {
            "name": "Z",
            "price": 30
          },
          {
            "name": "A",
            "price": 10
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
    "id": "ts-unknown-form-016",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-special-unknown",
      "ts-narrowing-typeof",
      "ts-functions-returns"
    ],
    "difficulty": "medium",
    "category": "form-input",
    "expectedResult": 3,
    "content": {
      "en": {
        "title": "Check an external quantity",
        "description": "Implement parseQuantity for unknown input. Accept only non-negative integer numbers; return null for everything else. Do not convert strings to numbers.",
        "hints": [
          "An external value has no trusted shape yet.",
          "Narrow to number before checking whether it is a valid quantity.",
          "Reject the wrong primitive type, non-integers and negative values, then return the narrowed value."
        ]
      },
      "ru": {
        "title": "Проверь внешнее количество",
        "description": "Реализуй parseQuantity для unknown. Принимай только неотрицательные целые числа; всё остальное — null. Строки в числа не преобразуй.",
        "hints": [
          "Форме внешнего значения пока нельзя доверять.",
          "Сначала сузь тип до number, затем проверь допустимость количества.",
          "Отвергни неподходящий примитивный тип, дробные и отрицательные числа; затем верни суженное значение."
        ]
      },
      "de": {
        "title": "Externe Mengenangabe prüfen",
        "description": "Implementiere parseQuantity für unknown. Akzeptiere nur nichtnegative ganze Zahlen, sonst null. Strings nicht in Zahlen umwandeln.",
        "hints": [
          "Die Struktur eines externen Wertes ist noch nicht vertrauenswürdig.",
          "Grenze zuerst auf number ein und prüfe dann die gültige Menge.",
          "Lehne falsche primitive Typen, Brüche und negative Werte ab; gib danach den eingegrenzten Wert zurück."
        ]
      }
    },
    "starterCode": "function parseQuantity(value: unknown): number | null {\n  return null;\n}",
    "solution": "function parseQuantity(value: unknown): number | null {\n  if (typeof value !== \"number\" || !Number.isInteger(value) || value < 0) return null;\n  return value;\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "independent-usage",
    "dimensions": [
      "type-narrowing",
      "type-modelling"
    ],
    "context": "form-input",
    "visibleTests": [
      {
        "id": "valid-quantity",
        "kind": "runtime",
        "expression": "parseQuantity(3)",
        "expected": 3
      }
    ],
    "hiddenTests": [
      {
        "id": "invalid-inputs",
        "kind": "runtime",
        "expression": "[parseQuantity(\"3\"), parseQuantity(null), parseQuantity(-1), parseQuantity(1.5), parseQuantity(NaN), parseQuantity(Infinity)]",
        "expected": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "id": "zero",
        "kind": "runtime",
        "expression": "parseQuantity(0)",
        "expected": 0
      },
      {
        "id": "unknown-contract",
        "kind": "type",
        "code": "type Parse = Expect<Equal<typeof parseQuantity, (value: unknown) => number | null>>;"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-migrate-cart-017",
    "programmingLanguage": "typescript",
    "type": "debug",
    "topics": [
      "ts-application-model-js",
      "ts-functions-types",
      "ts-arrays-objects",
      "ts-objects-readonly",
      "arrays"
    ],
    "difficulty": "hard",
    "category": "legacy-cart",
    "expectedResult": 40,
    "content": {
      "en": {
        "title": "Type an existing cart function",
        "description": "Migrate the provided JavaScript function to strict TypeScript without changing its behavior. Define CartItem with numeric price and quantity. Accept readonly input, avoid any, and preserve empty-cart behavior.",
        "hints": [
          "Find the contract from how callers provide data and how the body uses it.",
          "Give the collection and its elements precise types.",
          "Type the input as a readonly collection and keep the zero starting total."
        ]
      },
      "ru": {
        "title": "Типизируй существующую корзину",
        "description": "Перенеси JavaScript-функцию в строгий TypeScript без изменения поведения. Определи CartItem с числовыми price и quantity. Принимай readonly-вход, избегай any и сохрани поведение пустой корзины.",
        "hints": [
          "Выведи контракт из вызовов и использования данных в теле функции.",
          "Задай точные типы коллекции и её элементов.",
          "Обозначь вход как readonly-коллекцию и сохрани начальную сумму 0."
        ]
      },
      "de": {
        "title": "Bestehende Warenkorbfunktion typisieren",
        "description": "Migriere die JavaScript-Funktion zu strengem TypeScript, ohne ihr Verhalten zu ändern. Definiere CartItem mit numerischem price und quantity. Akzeptiere readonly-Eingaben, vermeide any und erhalte das Verhalten leerer Warenkörbe.",
        "hints": [
          "Leite den Vertrag aus Aufrufen und Datennutzung im Funktionskörper ab.",
          "Gib der Sammlung und ihren Elementen präzise Typen.",
          "Typisiere die Eingabe als readonly-Sammlung und behalte den Startwert null."
        ]
      }
    },
    "starterCode": "function cartTotal(items) {\n  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);\n}",
    "solution": "interface CartItem {\n  price: number;\n  quantity: number;\n}\n\nfunction cartTotal(items: readonly CartItem[]): number {\n  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);\n}",
    "input": {},
    "displayCode": "cartTotal([{ price: 20, quantity: 2 }]);",
    "prerequisites": [],
    "stage": "transfer-to-real-application",
    "dimensions": [
      "type-modelling",
      "js-ts-combination"
    ],
    "context": "legacy-cart",
    "visibleTests": [
      {
        "id": "legacy-behavior",
        "kind": "runtime",
        "expression": "cartTotal([{ price: 20, quantity: 2 }])",
        "expected": 40
      }
    ],
    "hiddenTests": [
      {
        "id": "empty",
        "kind": "runtime",
        "expression": "cartTotal([])",
        "expected": 0
      },
      {
        "id": "shared-data",
        "kind": "runtime",
        "expression": "cartTotal(Object.freeze([Object.freeze({ price: 4, quantity: 0 }), Object.freeze({ price: 3, quantity: 2 })]))",
        "expected": 6
      },
      {
        "id": "strict-contract",
        "kind": "type",
        "code": "type ItemPrice = Expect<Equal<CartItem[\"price\"], number>>;\ntype ItemQuantity = Expect<Equal<CartItem[\"quantity\"], number>>;\ntype Input = Expect<Equal<Parameters<typeof cartTotal>[0], readonly CartItem[]>>;\n// @ts-expect-error Invalid API price\ncartTotal([{ price: \"4\", quantity: 2 }]);"
      }
    ],
    "validation": {
      "mode": "typescript",
      "strict": true,
      "target": "ES2022"
    }
  },
  {
    "id": "ts-repeat-active-users-018",
    "programmingLanguage": "typescript",
    "type": "function",
    "topics": [
      "ts-interfaces-basic",
      "ts-arrays-objects",
      "ts-functions-types",
      "js-arrays-filtering"
    ],
    "difficulty": "medium",
    "category": "newsletter",
    "expectedResult": [
      "ada@example.test"
    ],
    "content": {
      "en": {
        "title": "Prepare newsletter recipients",
        "description": "Each user has an email and an active flag. Define User and implement activeEmails to return the emails of active users in their original order. Keep input unchanged.",
        "hints": [
          "You need both a selection rule and the final output shape.",
          "First consider eligible users, then the data the newsletter needs.",
          "Collect only the email field from each eligible user."
        ]
      },
      "ru": {
        "title": "Подготовь получателей рассылки",
        "description": "У пользователя есть email и флаг active. Определи User и реализуй activeEmails: адреса активных пользователей в исходном порядке. Входные данные не меняй.",
        "hints": [
          "Нужно учесть правило отбора и структуру результата.",
          "Сначала подумай о подходящих пользователях, затем о данных для рассылки.",
          "Собери только email каждого подходящего пользователя."
        ]
      },
      "de": {
        "title": "Newsletterempfänger vorbereiten",
        "description": "Jeder Nutzer hat email und active. Definiere User und implementiere activeEmails: E-Mail-Adressen aktiver Nutzer in ursprünglicher Reihenfolge. Eingabe unverändert lassen.",
        "hints": [
          "Beachte sowohl die Auswahlregel als auch die Ausgabeform.",
          "Überlege zuerst, welche Nutzer infrage kommen und welche Daten der Newsletter benötigt.",
          "Sammle nur das email-Feld jedes geeigneten Nutzers."
        ]
      }
    },
    "starterCode": "function activeEmails(users: User[]): string[] {\n  return [];\n}",
    "solution": "interface User {\n  email: string;\n  active: boolean;\n}\n\nfunction activeEmails(users: User[]): string[] {\n  return users.filter((user) => user.active).map((user) => user.email);\n}",
    "input": {},
    "displayCode": "",
    "prerequisites": [],
    "stage": "delayed-repetition",
    "dimensions": [
      "type-modelling",
      "js-ts-combination"
    ],
    "context": "newsletter",
    "visibleTests": [
      {
        "id": "active-emails",
        "kind": "runtime",
        "expression": "activeEmails([{ email: \"ada@example.test\", active: true }, { email: \"lin@example.test\", active: false }])",
        "expected": [
          "ada@example.test"
        ]
      }
    ],
    "hiddenTests": [
      {
        "id": "none",
        "kind": "runtime",
        "expression": "activeEmails([])",
        "expected": []
      },
      {
        "id": "stable-order",
        "kind": "runtime",
        "expression": "activeEmails([{ email: \"z@example.test\", active: true }, { email: \"a@example.test\", active: true }])",
        "expected": [
          "z@example.test",
          "a@example.test"
        ]
      },
      {
        "id": "user-contract",
        "kind": "type",
        "code": "type Email = Expect<Equal<User[\"email\"], string>>;\ntype Active = Expect<Equal<User[\"active\"], boolean>>;\ntype Output = Expect<Equal<ReturnType<typeof activeEmails>, string[]>>;"
      },
      {
        "id": "immutable-input",
        "kind": "runtime",
        "expression": "(() => { const users = [{ email: \"z@example.test\", active: true }, { email: \"a@example.test\", active: false }]; users.forEach(Object.freeze); Object.freeze(users); return activeEmails(users); })()",
        "expected": [
          "z@example.test"
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
