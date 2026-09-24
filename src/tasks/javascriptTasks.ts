import type { Task } from "../types/task";

export const javascriptTasks: Task[] = [
  {
    id: "js-arrays-filter-001",
    programmingLanguage: "javascript",
    type: "write-code",
    topics: ["js-arrays-filtering"],
    difficulty: "easy",
    category: "Arrays",
    starterCode: "const result = ",

    expectedResult: [
      { name: "Keyboard", price: 45 },
      { name: "Mouse", price: 25 },
    ],

    content: {
      de: {
        title: "Produkte nach Preis filtern",
        description:
          "Erstelle eine Variable result, die nur Produkte enthält, die weniger als 50 € kosten.",
        hints: [
          "Du brauchst eine neue Liste mit nur passenden Produkten.",
          "Überlege, welche Array-Methode Elemente nach einer Bedingung auswählt.",
          "Prüfe bei jedem Produkt, ob product.price kleiner als 50 ist.",
        ],
      },

      en: {
        title: "Filter products by price",
        description:
          "Create a variable called result containing only products that cost less than €50.",
        hints: [
          "You need a new list containing only matching products.",
          "Think about which array method selects elements based on a condition.",
          "Check whether product.price is less than 50 for each product.",
        ],
      },

      ru: {
        title: "Фильтрация товаров по цене",
        description:
          "Создай переменную result, содержащую только товары дешевле €50.",
        hints: [
          "Тебе нужен новый массив только с подходящими товарами.",
          "Вспомни метод массива, который отбирает элементы по условию.",
          "Для каждого товара проверь, что product.price меньше 50.",
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
    starterCode: "const result =",

    expectedResult: [
      { name: "Monitor", price: 180 },
      { name: "Headphones", price: 60 },
    ],

    content: {
      de: {
        title: 'Teurere Produkte auswählen',
        description:
          "Erstelle eine Variable result, die nur Produkte enthält, die mehr als 50 € kosten.",
        hints: [
          "Du brauchst eine neue Liste mit den passenden Produkten.",
          "Überlege, welche Array-Methode Elemente nach einer Bedingung auswählt.",
          "Prüfe bei jedem Produkt, ob product.price größer als 50 ist.",
        ],
      },

      en: {
        title: 'Select products over €50',
        description:
          "Create a variable called result containing only products that cost more than €50.",
        hints: [
          "You need a new list containing the matching products.",
          "Think about which array method selects elements based on a condition.",
          "Check whether product.price is greater than 50 for each product.",
        ],
      },

      ru: {
       title: 'Выбери товары дороже 50 €',
        description:
          "Создай переменную result, содержащую только товары дороже €50.",
        hints: [
          "Тебе нужен новый массив с подходящими товарами.",
          "Вспомни метод массива, который отбирает элементы по условию.",
          "Для каждого товара проверь, что product.price больше 50.",
        ],
      },
    },
  },
];
