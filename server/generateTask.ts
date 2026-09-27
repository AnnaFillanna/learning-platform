import { openai } from "./openai";

type TaskType =
  | "practice"
  | "business"
  | "debug"
  | "predict"
  | "mixed"
  | "edge-case";

type GenerateTaskRequest = {
  programmingLanguage: "javascript";
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  taskType?: TaskType;
};

export async function generateTask(request: GenerateTaskRequest) {
  const response = await openai.responses.create({
    model: "gpt-5.6-luna",

    input: `
You are the Task Generator for the Pet programming learning platform.

Generate ONE programming exercise.

Language: ${request.programmingLanguage}
Topic: ${request.topic}
Difficulty: ${request.difficulty}
Task type: ${request.taskType ?? "practice"}

Rules:
- The learner must write the solution themselves.
- Generate different input data for the exercise.
- displayCode must show the input data to the learner.
- starterCode must be an empty string.
- The learner must write the complete solution themselves.
- Do not force the learner to use a variable named "result".
- The learner may choose meaningful variable names such as evenNumbers, filteredNumbers, cheapProducts, etc.
- solution must contain a correct reference solution.
- expectedResult must exactly match the result of solution.
- input must contain every variable needed to execute the learner's code.
- Give exactly 3 short progressive hints.
- Do not reveal the complete solution in the hints.
- Provide content in German, English and Russian.
- Use meaningful variable names in the reference solution.
- Variable names should describe the value they contain.
- Avoid generic names such as "result" unless there is a strong reason to use them.
- Use common real-world JavaScript naming conventions so the learner also learns good variable naming.
- The learner may use different variable names. Variable names must not affect whether the solution is accepted.
TASK TYPE RULES:

The requested task type defines what kind of thinking the learner should practice.

If Task type is "practice":
- Create a focused exercise for the requested topic.
- The goal is to learn or reinforce one programming concept.
- Keep unrelated complexity low.
- The description may make the required operation relatively clear.
- Do not unnecessarily combine several concepts.

If Task type is "business":
- Create a realistic software or business scenario.
- Use contexts such as products, orders, users, bookings, subscriptions, inventory, invoices, messages, permissions, delivery, or application data.
- Describe WHAT the software needs to achieve, not HOW to implement it.
- Do NOT tell the learner which JavaScript method, loop, or programming technique to use.
- Do NOT mention filter(), map(), reduce(), find(), some(), every(), or similar methods in the title or description.
- The requested topic is an internal learning objective and must not be exposed as an implementation instruction.
- The learner must recognize the appropriate programming concept themselves.
- Easy: usually one clear business rule.
- Medium: combine 2–3 business rules.
- Hard: allow multiple conditions, transformations, or relevant edge cases.
- A different implementation is valid if it satisfies the business requirements.

If Task type is "debug":
- Provide code that is close to correct but contains a meaningful bug.
- Clearly describe what the program is supposed to do.
- The learner's job is to identify and fix the bug.
- Do not reveal the location or exact cause of the bug in the description.
- The bug must relate to the requested topic.
- Avoid artificial syntax mistakes unless syntax debugging is specifically the learning objective.
- Prefer realistic bugs: wrong condition, missing return, incorrect property, wrong comparison, mutation, incorrect index, or similar logical mistakes.
- solution must contain the corrected code.
- expectedResult must represent the result after the bug is fixed.

If Task type is "predict":
- Provide a short piece of valid JavaScript code.
- Ask the learner to determine what the code produces before running it.
- The task should test mental execution and understanding of the requested topic.
- Keep the code short enough to reason about mentally.
- Do not reveal the output in the description or hints.
- expectedResult must contain the actual output of the provided code.

If Task type is "mixed":
- Create a task that requires the learner to combine the requested topic with previously learned JavaScript concepts.
- The learner must decide which operations are needed and in which order.
- Do not provide a step-by-step implementation recipe.
- Do not explicitly name the methods that should be used.
- The task should require at least two reasoning steps.
- Keep the combination appropriate for the requested difficulty.

If Task type is "edge-case":
- Start from a normal realistic requirement but include an important edge case.
- Examples include empty arrays, missing optional values, zero values, duplicate data, boundary values, inactive records, or unexpected but valid input.
- The learner should notice that a naive solution may not be sufficient.
- Do not immediately reveal the edge case as the solution.
- The task must remain solvable using concepts appropriate for the learner's level.

HINT RULES:

- Give exactly 3 progressive hints.
- Hint 1 should help the learner understand the problem or business rule.
- Hint 2 may point toward the relevant programming concept.
- Hint 3 may become more concrete, but must still not provide the complete solution.
- For business and mixed tasks, never reveal the required JavaScript method in Hint 1.
- Hints should teach reasoning, not merely reveal syntax.

Return ONLY valid JSON with this structure:

{
  "programmingLanguage": "javascript",
  "type": "write-code",
  "topics": ["topic"],
  "difficulty": "easy",
  "category": "Arrays",
  "displayCode": "const numbers = [...]",
  "starterCode": "",
  "expectedResult": [],
  "solution": "const result = ...",
  "input": {},
  "content": {
    "de": {
      "title": "",
      "description": "",
      "hints": ["", "", ""]
    }
    "en": {
      "title": "",
      "description": "",
      "hints": ["", "", ""]
    },
    "ru": {
      "title": "",
      "description": "",
      "hints": ["", "", ""]
    }
  }
}
`,
  });

  if (!response.output_text) {
    throw new Error("AI returned an empty task");
  }

  return JSON.parse(response.output_text);
}
