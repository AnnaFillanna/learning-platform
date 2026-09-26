import type { Task } from "../types/task";

type RunResult = {
  success: boolean;
  status: "success" | "test-failed" | "execution-console.error";
  output?: unknown;
};

export function runJavaScript(code: string, task: Task): RunResult {
  const inputNames = Object.keys(task.input);
  const inputValues = Object.values(task.input);

  try {
    const variableMatches = [
      ...code.matchAll(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/g),
    ];

    const lastVariable = variableMatches.at(-1)?.[1];

    if (!lastVariable) {
      return {
        success: false,
        status: "execution-console.error",
        output: "Erstelle zuerst eine Variable mit deinem Ergebnis.",
      };
    }

    const executeCode = new Function(
      ...inputNames,
      `
        ${code}
        return ${lastVariable};
      `,
    );

    const userResult = executeCode(...inputValues);

    const isCorrect =
      JSON.stringify(userResult) === JSON.stringify(task.expectedResult);

    if (isCorrect) {
      return {
        success: true,
        status: "success",
        output: userResult,
      };
    }

    return {
      success: false,
      status: "test-failed",
      output: userResult,
    };
  } catch (error) {
    return {
      success: false,
      status: "execution-console.error",
      output: error instanceof Error ? error.message : String(error),
    };
  }
}