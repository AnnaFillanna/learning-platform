import { useEffect, useState } from "react";
import { generateTask } from "../generator/taskGenerator";
import { translations } from "../i18n/translations";
import { runJavaScript } from "../runner/javascriptRunner";
import type { Task, Language } from "../types/task";

type TaskScreenProps = {
  onBack: () => void;
  language: Language;
};

type TaskSessionState = {
  code: string;
  result: string;
  isSolved: boolean;
  visibleHints: number;
  showSolution: boolean;
  output: unknown;
  expected: unknown;
  error: {
    name: string;
    message: string;
  } | null;
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

const trainingPlan = [
  "practice",
  "practice",
  "business",
  "business",
  "business",
] as const;

function TaskScreen({ onBack, language }: TaskScreenProps) {
  const t = translations[language];

  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const [isGenerating, setIsGenerating] = useState(true);
  const [generationError, setGenerationError] = useState("");

  const [taskStates, setTaskStates] = useState<
    Record<string, TaskSessionState>
  >({});

  const task = tasks[currentTaskIndex];
  const [prefetchedTask, setPrefetchedTask] = useState<Task | null>(null);
  const generateNewTask = async () => {
    try {
      setIsGenerating(true);
      setGenerationError("");

      const nextTaskIndex = tasks.length;

      const generatedTask = await generateTask({
        programmingLanguage: "javascript",
        topic: "js-arrays-filtering",
        difficulty: "easy",
        taskType: trainingPlan[nextTaskIndex] ?? "business",
      });

      setTasks((previousTasks) => {
        const newTasks = [...previousTasks, generatedTask];

        setCurrentTaskIndex(newTasks.length - 1);

        return newTasks;
      });
    } catch (error) {
      console.error(error);

      setGenerationError(
        "Die Aufgabe konnte nicht generiert werden. Bitte versuche es erneut.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const startTraining = async () => {
      await generateNewTask();
      void prefetchNextTask();
    };

    void startTraining();
  }, []);

  if (!task) {
    return (
      <main>
        <button onClick={onBack}> Zurück</button>

        {isGenerating && <p>Neue Aufgabe wird vorbereitet...</p>}

        {generationError && (
          <>
            <p>{generationError}</p>

            <button onClick={() => void generateNewTask()}>
              Erneut versuchen
            </button>
          </>
        )}
      </main>
    );
  }
  const prefetchNextTask = async () => {
    try {
      const nextTaskIndex = tasks.length;

      const nextTask = await generateTask({
        programmingLanguage: "javascript",
        topic: "js-arrays-filtering",
        difficulty: "easy",
        taskType: trainingPlan[nextTaskIndex] ?? "business",
      });

      setPrefetchedTask(nextTask);
    } catch (error) {
      console.error("Prefetch failed:", error);
    }
  };
  const currentTaskState = taskStates[task.id] ?? {
    code: task.starterCode,
    result: "",
    isSolved: false,
    visibleHints: 0,
    showSolution: false,
    output: null,
    expected: null,
    error: null,
  };

  const updateTaskState = (updates: Partial<TaskSessionState>) => {
    setTaskStates((previousStates) => {
      const previousState = previousStates[task.id] ?? {
        code: task.starterCode,
        result: "",
        isSolved: false,
        visibleHints: 0,
        showSolution: false,
        output: null,
        expected: null,
        error: null,
      };

      return {
        ...previousStates,
        [task.id]: {
          ...previousState,
          ...updates,
        },
      };
    });
  };

  const code = currentTaskState.code;
  const result = currentTaskState.result;
  const isSolved = currentTaskState.isSolved;
  const visibleHints = currentTaskState.visibleHints;
  const showSolution = currentTaskState.showSolution;
  const output = currentTaskState.output;
  const executionError = currentTaskState.error;

  const handleCheck = () => {
    const checkResult = runJavaScript(code, task);

    updateTaskState({
      isSolved: false,
      result: "",
      output: checkResult.output ?? null,
      expected: checkResult.expected ?? null,
      error: checkResult.error ?? null,
    });

    if (checkResult.status === "success") {
      updateTaskState({
        result: t.success,
        isSolved: true,
      });
      return;
    }

    if (checkResult.status === "test-failed") {
      updateTaskState({
        result: t.testsFailed,
      });
      return;
    }

    updateTaskState({
      result: t.executionError,
    });
  };

  const handleHint = () => {
    if (visibleHints < task.content[language].hints.length) {
      updateTaskState({
        visibleHints: visibleHints + 1,
      });
    }
  };

  const handlePrevious = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex((previousIndex) => previousIndex - 1);
    }
  };

  const handleNext = async () => {
    if (!isSolved) {
      return;
    }

    // Wenn di nächste alte Aufgabe bereits im Verlauf vorhanden ist
    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex((previousIndex) => previousIndex + 1);
      return;
    }

    // Wenn die KI die nächste Aufgabe bereits vorbeireitet hat
    if (prefetchedTask) {
      setTasks((previousTasks) => [...previousTasks, prefetchedTask]);
      setCurrentTaskIndex((previousIndex) => previousIndex + 1);
      setPrefetchedTask(null);

      // Während der Benutzer die neue Aufgabe löst,
      // wir neue bereits generiert
      void prefetchNextTask();

      return;
    }

    // Wenn der Benutzer schneller als die KI war
    await generateNewTask();

    // und es wird die neue Aufgabe wieder generiert
    void prefetchNextTask();
  };

  return (
    <main className="taskPage">
      <header className="taskHeader">
        <button className="backButton" onClick={onBack}>
          ← Zurück
        </button>

        <div className="taskBrand">
          <span>🐱</span>
          <strong>Pet</strong>
        </div>

        <div className="taskCounter">{currentTaskIndex + 1} / 5</div>
      </header>

      <div className="taskLayout">
        <section className="taskInfo">
          <div className="taskBreadcrumb">
            <span>JS</span>
            {task.programmingLanguage} · {task.category}
          </div>

          <h1>
            {t.task} {currentTaskIndex + 1}
          </h1>

          <p className="taskDescription">
            {task.content[language].description}
          </p>

          <div className="taskExample">
            <div className="taskExampleHeader">Input</div>

            <pre>
              <code>{task.displayCode}</code>
            </pre>
          </div>

          <div className="hintSection">
            <button
              className="hintButton"
              onClick={handleHint}
              disabled={visibleHints >= task.content[language].hints.length}
            >
              💡 {t.hint}
            </button>

            {task.content[language].hints
              .slice(0, visibleHints)
              .map((hint, index) => (
                <div className="hintCard" key={index}>
                  <span>{index + 1}</span>
                  <p>{hint}</p>
                </div>
              ))}

            {visibleHints === task.content[language].hints.length &&
              !showSolution && (
                <button
                  className="solutionButton"
                  onClick={() =>
                    updateTaskState({
                      showSolution: true,
                    })
                  }
                >
                  Lösung anzeigen
                </button>
              )}

            {showSolution && (
              <div className="solutionCard">
                <div className="taskExampleHeader">Lösung</div>
                <pre>
                  <code>{task.solution}</code>
                </pre>
              </div>
            )}
          </div>

          {currentTaskIndex > 0 && (
            <button className="previousButton" onClick={handlePrevious}>
              ← {t.previousTask}
            </button>
          )}
        </section>

        <section className="codeWorkspace">
          <div className="editorHeader">
            <div className="editorDots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>solution.js</span>
          </div>
          <textarea
            className="codeEditor"
            value={code}
            onChange={(event) => {
              updateTaskState({
                code: event.target.value,
                isSolved: false,
                result: "",
                output: null,
                expected: null,
                error: null,
              });
            }}
            placeholder={t.codePlaceholder}
            rows={14}
            spellCheck={false}
          />
          <div className="editorActions">
            <span className="editorLanguage">JavaScript</span>

            <button className="checkButton" onClick={handleCheck}>
              ▶ {t.check}
            </button>
          </div>
          <div
            className={`consoleOutput ${
              isSolved
                ? "consoleSuccess"
                : result || executionError
                  ? "consoleError"
                  : ""
            }`}
          >
            <div className="consoleOutputHeader">
              <span>Console</span>

              {isSolved && <span className="consoleStatus">✓ Richtig</span>}

              {!isSolved && (result || executionError) && (
                <span className="consoleStatus">✕ Noch nicht richtig</span>
              )}
            </div>

            <div className="consoleLine">
              <code>console.log(result)</code>

              <span className="consoleArrow">→</span>

              <span className="consoleValue">
                {executionError
                  ? "Error"
                  : output !== null
                    ? formatOutput(output)
                    : "Noch kein Ergebnis"}
              </span>
            </div>

            {!result && !executionError && (
              <p className="consoleHint">
                // Führe deinen Code aus, um das Ergebnis zu sehen.
              </p>
            )}

            {isSolved && (
              <p className="consoleMessage">
                ✓ Das Ergebnis entspricht der Aufgabe.
              </p>
            )}

            {!isSolved && result && !executionError && (
              <p className="consoleMessage">
                Das Ergebnis entspricht noch nicht der Aufgabe. Prüfe deinen
                Code noch einmal.
              </p>
            )}

            {executionError && (
              <div className="consoleErrorDetails">
                <strong>
                  {executionError.name}: {executionError.message}
                </strong>

                <p>
                  Prüfe die Stelle im Code, an der dieser Wert oder diese
                  Variable verwendet wird.
                </p>
              </div>
            )}
          </div>
          {generationError && (
            <p className="generationError">{generationError}</p>
          )}
          {isSolved && (
            <button
              className="nextButton"
              onClick={() => void handleNext()}
              disabled={isGenerating}
            >
              {isGenerating
                ? "Neue Aufgabe wird vorbereitet..."
                : `${t.next} →`}
            </button>
          )}
        </section>
      </div>
    </main>
  );
}
export default TaskScreen;
