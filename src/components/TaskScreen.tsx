import { useState } from "react";
import { runJavaScript } from "../runner/javascriptRunner";
import { javascriptTasks } from "../tasks/javascriptTasks";
import type { Language } from "../types/task";
import { translations } from "../i18n/translations";
import { generateTask } from "../generator/taskGenerator";
type TaskScreenProps = {
  onBack: () => void;
  language: Language;
};
function formatOutput(value: unknown): string {
  if (value === undefined) return "undefined";

  if (typeof value === "string") {
    return `"${value}"`;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (value === null) {
    return "null";
  }

  return JSON.stringify(value);
}

type TaskSessionState = {
  code: string;
  result: string;
  isSolved: boolean;
  visibleHints: number;
  showSolution: boolean;
  output: unknown;
};

function TaskScreen({ onBack, language }: TaskScreenProps) {
  const [tasks, setTasks] = useState(javascriptTasks);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState("");

  const task = tasks[currentTaskIndex];
  const t = translations[language];
  const [taskStates, setTaskStates] = useState<
    Record<string, TaskSessionState>
  >({});
  const currentTaskState = taskStates[task.id] ?? {
    code: task.starterCode,
    result: "",
    isSolved: false,
    visibleHints: 0,
    showSolution: false,
    output: null,
  };
  const updateTaskState = (updates: Partial<TaskSessionState>) => {
    setTaskStates((prev) => {
      const previousState = prev[task.id] ?? {
        code: task.starterCode,
        result: "",
        isSolved: false,
        visibleHints: 0,
        showSolution: false,
        output: null,
      };
 
      return {
        ...prev,
        [task.id]: {
          ...previousState,
          ...updates,
        },
      };
    });
  };
  const code = currentTaskState.code;
  const output = currentTaskState.output;

  const setOutput = (newOutput: unknown) => {
    updateTaskState({ output: newOutput });
  };
  const setCode = (newCode: string) => {
    updateTaskState({ code: newCode });
  };
  const isSolved = currentTaskState.isSolved;

  const setIsSolved = (newIsSolved: boolean) => {
    updateTaskState({ isSolved: newIsSolved });
  };
  const totalTasks = tasks.length;
  const visibleHints = currentTaskState.visibleHints;

  const setVisibleHints = (newVisibleHints: number) => {
    updateTaskState({ visibleHints: newVisibleHints });
  };

  const showSolution = currentTaskState.showSolution;

  const setShowSolution = (newShowSolution: boolean) => {
    updateTaskState({ showSolution: newShowSolution });
  };

  const result = currentTaskState.result;

  const setResult = (newResult: string) => {
    updateTaskState({ result: newResult });
  };

  const handleCheck = () => {
    const checkResult = runJavaScript(code, task);
    setIsSolved(false);

    setOutput(checkResult.output ?? null);

    if (checkResult.status === "success") {
      setResult(t.success);
      setIsSolved(true);
    }

    if (checkResult.status === "test-failed") {
      setResult(t.testsFailed);
    }

    if (checkResult.status === "execution-console.error") {
      setResult(t.executionError);
    }
  };
  const handleHint = () => {
    if (visibleHints < task.content[language].hints.length) {
      setVisibleHints(visibleHints + 1);
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
  };
  const handlePrevious = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(currentTaskIndex - 1);
    }
  };
  const handleNext = () => {
    if (!isSolved) {
      return;
    }

    if (currentTaskIndex < totalTasks - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    }
  };
     const handleGenerateTask = async () => {
        try {
          setIsGenerating(true);
          setGenerationError("");

          const generatedTask = await generateTask({
            programmingLanguage: "javascript",
            topic: "js-arrays-filtering",
            difficulty: "easy",
          });

          setTasks((prev) => [...prev, generatedTask]);
          setCurrentTaskIndex(tasks.length);
        } catch (error) {
          console.error(error);
          setGenerationError("Die Aufgabe konnte nicht generiert werden.");
        } finally {
          setIsGenerating(false);
        }
      };
  return (
    <main>
      <p>
        {task.programmingLanguage} · {task.category}
      </p>
      <h1>
        {t.task} {currentTaskIndex + 1} {t.of} {totalTasks}
      </h1>
      {currentTaskIndex > 0 && (
        <button onClick={handlePrevious}>{t.previousTask}</button>
      )}
      <p>{task.content[language].description}</p>
      <pre>
        <code>{task.displayCode}</code>
      </pre>
      <textarea
        value={code}
        onChange={(event) => {
          setCode(event.target.value);
          setIsSolved(false);
        }}
        placeholder={t.codePlaceholder}
        rows={10}
      />
      <button onClick={handleHint}>{t.hint}</button>

      {task.content[language].hints
        .slice(0, visibleHints)
        .map((hint, index) => (
          <p key={index}>
            {index + 1}. {hint}
          </p>
        ))}

      {visibleHints === task.content[language].hints.length &&
        !showSolution && (
          <button onClick={handleShowSolution}>Lösung anzeigen</button>
        )}

      {showSolution && (
        <pre>
          <code>{task.solution}</code>
        </pre>
      )}

      <button onClick={handleCheck}>{t.check}</button>

      {result && <p>{result}</p>}
      {output !== null && <pre>{`// → ${formatOutput(output)}`}</pre>}
      {/* // tamporary button// */}
      <button onClick={handleGenerateTask} disabled={isGenerating}>
        {isGenerating ? "Aufgabe wird generiert..." : "✨ Neue AI-Aufgabe"}
      </button>

      {generationError && <p>{generationError}</p>}
      {isSolved && <button onClick={handleNext}>{t.next}</button>}
    </main>
  );
}

export default TaskScreen;
