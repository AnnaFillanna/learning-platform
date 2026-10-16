import type { Task } from "../types/task";

// Self-contained filtering exercises: usable offline, with verified solutions.
export function createInstantJavascriptTask(index: number): Task {
  const threshold = 10 + Math.floor(Math.random() * 40);
  const values = [threshold - 8, threshold + 12, threshold, threshold - 1, threshold + 5, threshold - 4];
  const business = index >= 2;
  const name = business ? "orders" : "numbers";
  const data = business ? values.map((total, i) => ({ id: i + 1, total })) : values;
  const expression = business ? "order.total" : "number";
  const parameter = business ? "order" : "number";
  const expectedResult = business
    ? (data as { id: number; total: number }[]).filter((order) => order.total >= threshold)
    : values.filter((number) => number >= threshold);
  return {
    id: `js-instant-${crypto.randomUUID()}`,
    programmingLanguage: "javascript", type: "write-code", topics: ["js-arrays-filtering"],
    difficulty: "easy", category: "Arrays", starterCode: "",
    input: { [name]: data }, displayCode: `const ${name} = ${JSON.stringify(data, null, business ? 2 : undefined)};`,
    solution: `const selectedItems = ${name}.filter((${parameter}) => ${expression} >= ${threshold});`,
    expectedResult,
    content: {
      de: {
        title: business ? "Bestellungen für den Gratisversand" : "Zahlen auswählen",
        description: business
          ? `Ab ${threshold} € Bestellwert ist der Versand kostenlos. Erstelle aus orders ein neues Array mit den berechtigten Bestellungen.`
          : `Erstelle aus numbers ein neues Array mit allen Zahlen, die mindestens ${threshold} sind.`,
        hints: [`Der Grenzwert ${threshold} zählt ebenfalls dazu.`, "Mit filter() erhältst du ein neues Array mit passenden Einträgen.", `Prüfe für jeden Eintrag, ob ${expression} >= ${threshold} gilt.`],
      },
      en: {
        title: business ? "Orders eligible for free shipping" : "Select numbers",
        description: business
          ? `Shipping is free for orders worth at least €${threshold}. Create a new array from orders containing the eligible orders.`
          : `Create a new array from numbers containing all numbers that are at least ${threshold}.`,
        hints: [`Include the boundary value ${threshold}.`, "filter() creates a new array of matching entries.", `Check whether ${expression} >= ${threshold} for each entry.`],
      },
      ru: {
        title: business ? "Заказы с бесплатной доставкой" : "Выбор чисел",
        description: business
          ? `Доставка бесплатна при сумме заказа от ${threshold} €. Создай из orders новый массив подходящих заказов.`
          : `Создай из numbers новый массив чисел не меньше ${threshold}.`,
        hints: [`Значение ${threshold} тоже подходит.`, "filter() создаёт новый массив подходящих элементов.", `Для каждого элемента проверь условие ${expression} >= ${threshold}.`],
      },
    },
  };
}
