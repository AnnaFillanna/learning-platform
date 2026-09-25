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
   const executeCode = new Function(
  ...inputNames,
  `${code}; return result`
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
  } catch {
    return {
      success: false,
      status: "execution-console.error",
    };
  }
}
