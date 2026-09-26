import { openai } from "./openai";

type GenerateTaskRequest = {
  programmingLanguage: "javascript";
  topic: string;
  difficulty: "easy" | "medium" | "hard";
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