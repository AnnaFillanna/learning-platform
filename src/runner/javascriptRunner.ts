import type { Task } from "../types/task";

type RunResult = {
  success: boolean;
  status: "success" | "test-failed" | "execution-error";
  output?: unknown;
  expected?: unknown;
  error?: {
    name: string;
    message: string;
  };
};

export function runJavaScript(code: string, task: Task): RunResult {
  const inputNames = Object.keys(task.input);
  const inputValues = Object.values(task.input);

  try {
    const variableMatches = [
      ...code.matchAll(
        /\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/g,
      ),
    ];

    const lastVariable = variableMatches.at(-1)?.[1];

    if (!lastVariable) {
      return {
        success: false,
        status: "execution-error",
        expected: task.expectedResult,
        error: {
          name: "ResultError",
          message: "No result variable found.",
        },
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
      JSON.stringify(userResult) ===
      JSON.stringify(task.expectedResult);

    if (isCorrect) {
      return {
        success: true,
        status: "success",
        output: userResult,
        expected: task.expectedResult,
      };
    }

    return {
      success: false,
      status: "test-failed",
      output: userResult,
      expected: task.expectedResult,
    };
  } catch (error) {
    return {
      success: false,
      status: "execution-error",
      expected: task.expectedResult,
      error: {
        name: error instanceof Error ? error.name : "Error",
        message:
          error instanceof Error ? error.message : String(error),
      },
    };
  }
}