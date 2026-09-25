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
- starterCode must contain only the beginning of the answer.
- solution must contain a correct reference solution.
- expectedResult must exactly match the result of solution.
- input must contain every variable needed to execute the learner's code.
- Give exactly 3 short progressive hints.
- Do not reveal the complete solution in the hints.
- Provide content in German, English and Russian.

Return ONLY valid JSON with this structure:

{
  "programmingLanguage": "javascript",
  "type": "write-code",
  "topics": ["topic"],
  "difficulty": "easy",
  "category": "Arrays",
  "displayCode": "const numbers = [...]",
  "starterCode": "const result = ",
  "expectedResult": [],
  "solution": "const result = ...",
  "input": {},
  "content": {
    "de": {
      "title": "",
      "description": "",
      "hints": ["", "", ""]
    },
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