import type { Task } from "../types/task";

const products = [
  { name: "Keyboard", price: 45 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 180 },
  { name: "Headphones", price: 60 },
];

export const javascriptTasks: Task[] = [
  {
    id: "js-arrays-filter-001",
    programmingLanguage: "javascript",
    type: "write-code",
    topics: ["js-arrays-filtering"],
    difficulty: "easy",
    category: "Arrays",

    starterCode: "const result = ",
    solution: "const result = products.filter((product) => product.price < 50)",

    expectedResult: [
      { name: "Keyboard", price: 45 },
      { name: "Mouse", price: 25 },
    ],

    input: {
      products,
    },
    displayCode: `const products = [
  { name: "Keyboard", price: 45 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 180 },
  { name: "Headphones", price: 60 },
];`,

    content: {
      de: {
        title: "Produkte nach Preis filtern",
        description:
          "Erstelle eine Variable result, die nur Produkte enthält, die weniger als 50 € kosten.",
        hints: [
          "Erstelle aus products ein neues Array mit den passenden Produkten.",
          "Mit filter() kannst du Elemente nach einer Bedingung auswählen.",
          "Prüfe in filter(), ob product.price kleiner als 50 ist.",
        ],
      },

      en: {
        title: "Filter products by price",
        description:
          "Create a variable called result containing only products that cost less than €50.",
        hints: [
          "Create a new array from products containing only matching items.",
          "Use filter() to select elements based on a condition.",
          "Check whether product.price is less than 50.",
        ],
      },

      ru: {
        title: "Фильтрация товаров по цене",
        description:
          "Создай переменную result, содержащую только товары дешевле €50.",
        hints: [
          "Создай из products новый массив только с подходящими товарами.",
          "Используй filter(), чтобы отобрать элементы по условию.",
          "Проверь, что product.price меньше 50.",
        ],
      },
    },
  },

  {
    id: "js-arrays-filter-002",
    programmingLanguage: "javascript",
    type: "write-code",
    topics: ["js-arrays-filtering"],
    difficulty: "easy",
    category: "Arrays",

    starterCode: "const result = ",
    solution: "const result = products.filter((product) => product.price > 50)",

    expectedResult: [
      { name: "Monitor", price: 180 },
      { name: "Headphones", price: 60 },
    ],

    input: {
      products,
    },
    displayCode: `const products = [
  { name: "Keyboard", price: 45 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 180 },
  { name: "Headphones", price: 60 },
];`,

    content: {
      de: {
        title: "Teurere Produkte auswählen",
        description:
          "Erstelle eine Variable result, die nur Produkte enthält, die mehr als 50 € kosten.",
        hints: [
          "Erstelle aus products ein neues Array mit den passenden Produkten.",
          "Mit filter() kannst du Elemente nach einer Bedingung auswählen.",
          "Prüfe in filter(), ob product.price größer als 50 ist.",
        ],
      },

      en: {
        title: "Select products over €50",
        description:
          "Create a variable called result containing only products that cost more than €50.",
        hints: [
          "Create a new array from products containing only matching items.",
          "Use filter() to select elements based on a condition.",
          "Check whether product.price is greater than 50.",
        ],
      },

      ru: {
        title: "Выбери товары дороже 50 €",
        description:
          "Создай переменную result, содержащую только товары дороже €50.",
        hints: [
          "Создай из products новый массив только с подходящими товарами.",
          "Используй filter(), чтобы отобрать элементы по условию.",
          "Проверь, что product.price больше 50.",
        ],
      },
    },
  },
  {
    id: "js-arrays-filter-003",
    programmingLanguage: "javascript",
    type: "write-code",
    topics: ["js-arrays-filtering"],
    difficulty: "easy",
    category: "Arrays",

    starterCode: "const result = ",
    solution: "const result = numbers.filter((number) => number < 0)",

    expectedResult: [-3, -7],

    input: {
      numbers: [4, 12, -3, 8, -7, 15],
    },
    displayCode: "const numbers = [4, 12, -3, 8, -7, 15];",

    content: {
      de: {
        title: "Negative Zahlen filtern",
        description:
          "Erstelle eine Variable result, die nur die negativen Zahlen enthält.",
        hints: [
          "Erstelle aus numbers ein neues Array mit den passenden Zahlen.",
          "Mit filter() kannst du Zahlen nach einer Bedingung auswählen.",
          "Prüfe, ob number kleiner als 0 ist.",
        ],
      },

      en: {
        title: "Filter negative numbers",
        description:
          "Create a variable called result containing only the negative numbers.",
        hints: [
          "Create a new array from numbers containing only matching values.",
          "Use filter() to select numbers based on a condition.",
          "Check whether number is less than 0.",
        ],
      },

      ru: {
        title: "Отфильтруй отрицательные числа",
        description:
          "Создай переменную result, содержащую только отрицательные числа.",
        hints: [
          "Создай из numbers новый массив с подходящими числами.",
          "Используй filter(), чтобы выбрать числа по условию.",
          "Проверь, что number меньше 0.",
        ],
      },
    },
  },
];
