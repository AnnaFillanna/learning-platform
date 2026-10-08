import { useEffect, useRef, useState } from "react";
import { createTaskLoader } from "../generator/taskLoader";
import { createLearningLoader } from "../generator/learningLoader";
import { fetchSolution } from "../generator/learningClient";
import { translations } from "../i18n/translations";
import { learningTranslations } from "../i18n/learningTranslations";
import { runJavaScript } from "../runner/javascriptRunner";
import { runTypeScript } from "../runner/typescriptRunner";
import { saveAttempt } from "../progress/attemptStorage";
import { loadLearningProgress } from "../progress/learningProgress";
import type { LearnerTask } from "../types/learnerTask";
import type { Language } from "../types/task";
import type { TrainingSession } from "../types/training";

type TaskScreenProps = { session: TrainingSession; onBack: () => void; language: Language; learningTasks?: LearnerTask[] };
type TaskSessionState = {
  code: string; result: string; isSolved: boolean; visibleHints: number;
  showSolution: boolean; solution: string; output: unknown; attempts: number;
  error: { name: string; message: string } | null;
};
function initialState(task: LearnerTask): TaskSessionState {
  return { code: task.starterCode, result: "", isSolved: false, visibleHints: 0, showSolution: false, solution: "", output: null, error: null, attempts: 0 };
}
function formatOutput(value: unknown): string {
  if (value === undefined) return "undefined";
  return JSON.stringify(value);
}

export default function TaskScreen({ onBack, language, session, learningTasks = [] }: TaskScreenProps) {
  const t = translations[language];
  const lt = learningTranslations[language];
  const isTS = session.programmingLanguage === "typescript";
  const [sessionComplete, setSessionComplete] = useState(false);
  const [exhausted, setExhausted] = useState(false);
  const [tasks, setTasks] = useState<LearnerTask[]>([]);
  const [index, setIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(true);
  const [generationError, setGenerationError] = useState("");
  const [storageError, setStorageError] = useState(false);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const active = useRef(true);
  const [states, setStates] = useState<Record<string, TaskSessionState>>({});
  const [loadTask] = useState<(index: number) => Promise<LearnerTask | undefined>>(() => isTS
    ? createLearningLoader(learningTasks, () => loadLearningProgress(learningTasks).snapshot, session.initialTaskId)
    : createTaskLoader());
  useEffect(() => {
    active.current = true;
    return () => { active.current = false; };
  }, []);
  useEffect(() => {
    let mounted = true;
    loadTask(0).then((first) => {
      if (!mounted) return;
      if (first) setTasks([first]);
      else { setExhausted(true); setSessionComplete(true); }
      setIsGenerating(false);
      if (!isTS) void loadTask(1).catch(() => {});
    }).catch(() => {
      if (mounted) { setGenerationError(lt.unavailable); setIsGenerating(false); }
    });
    return () => { mounted = false; };
  }, [loadTask, isTS, lt.unavailable]);

  const task = tasks[index];
  const state = task ? states[task.id] ?? initialState(task) : undefined;
  function update(task: LearnerTask, updates: Partial<TaskSessionState>) {
    setStates((previous) => ({ ...previous, [task.id]: { ...(previous[task.id] ?? initialState(task)), ...updates } }));
  }
  async function generateNewTask() {
    if (isGenerating || tasks.length >= session.taskCount) return;
    setIsGenerating(true);
    setGenerationError("");
    try {
      const nextIndex = tasks.length;
      const next = await loadTask(nextIndex);
      if (!active.current) return;
      if (!next) { setExhausted(true); setSessionComplete(true); return; }
      setTasks((previous) => [...previous, next]);
      setIndex(nextIndex);
      if (!isTS && nextIndex + 1 < session.taskCount) void loadTask(nextIndex + 1).catch(() => {});
    } catch { if (active.current) setGenerationError(lt.unavailable); }
    finally { if (active.current) setIsGenerating(false); }
  }
  async function handleCheck() {
    if (!task || !state || busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setGenerationError("");
    try {
      const checked = isTS ? await runTypeScript(state.code, task.id) : runJavaScript(state.code, task);
      if (!active.current) return;
      const attempts = state.attempts + 1;
      update(task, {
        attempts, isSolved: checked.success, output: checked.output ?? null, error: checked.error ?? null,
        result: checked.success ? t.success : checked.status === "test-failed" ? (isTS ? lt.checkFailed : t.testsFailed) : t.executionError,
      });
      setStorageError(!saveAttempt({
        id: crypto.randomUUID(), taskId: task.id, programmingLanguage: task.programmingLanguage,
        topic: task.topics[0] ?? "", topics: task.topics, difficulty: task.difficulty,
        stage: task.stage, context: task.context,
        dimensions: Object.fromEntries((task.dimensions ?? []).map((dimension) => [dimension, checked.success && !state.showSolution ? 1 : 0])),
        solved: checked.success, attempts, hintsUsed: state.visibleHints, solutionViewed: state.showSolution, createdAt: new Date().toISOString(),
      }));
    } catch { if (active.current) setGenerationError(lt.checkUnavailable); }
    finally { busyRef.current = false; if (active.current) setBusy(false); }
  }
  async function showSolution() {
    if (!task || busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    try {
      const solution = isTS ? (await fetchSolution(task.id)).solution : ("solution" in task && typeof task.solution === "string" ? task.solution : "");
      if (active.current) update(task, { showSolution: true, solution });
    } catch { if (active.current) setGenerationError(lt.solutionError); }
    finally { busyRef.current = false; if (active.current) setBusy(false); }
  }
  async function handleNext() {
    if (!state?.isSolved || isGenerating || busy) return;
    if (index + 1 >= session.taskCount) { setSessionComplete(true); return; }
    if (index < tasks.length - 1) { setIndex((value) => value + 1); return; }
    await generateNewTask();
  }
  if (sessionComplete) return <main className="taskPage"><section className="trainingCard sessionComplete">
    <p className="trainingLabel">{t.sessionLabel}</p><h1>{t.sessionComplete}</h1>
    <p>{tasks.filter((item) => states[item.id]?.isSolved).length} {t.tasks} ✓</p>
    <p className="sessionNote">{exhausted ? lt.noTasks : t.blockContinues}</p>
    <button className="continueButton" onClick={onBack}>{t.backToOverview}</button>
  </section></main>;
  if (!task || !state) return <main className="taskPage">
    <button className="backButton" onClick={onBack}>← {t.back}</button>
    <div role="status">{isGenerating && <p>{lt.loading}</p>}{generationError && <p>{generationError}</p>}</div>
    {generationError && <button className="nextButton" disabled={isGenerating} onClick={() => void generateNewTask()}>{lt.retry}</button>}
  </main>;
  return <main className="taskPage">
    <header className="taskHeader">
      <button className="backButton" disabled={busy} onClick={onBack}>← {t.back}</button>
      <div className="taskBrand"><span>🐱</span><strong>Pet</strong></div>
      <div className="taskCounter">{t.sessionLabel} · {index + 1} / {session.taskCount}</div>
    </header>
    <div className="taskLayout">
      <section className="taskInfo">
        <div className="taskBreadcrumb"><span>{isTS ? "TS" : "JS"}</span>{task.programmingLanguage} · {task.category}</div>
        <h1>{t.task} {index + 1}</h1>
        <p className="taskDescription">{task.content[language].description}</p>
        {(!isTS || task.displayCode) && <div className="taskExample"><div className="taskExampleHeader">Input</div><pre><code>{task.displayCode}</code></pre></div>}
        {isTS && <details className="taskExample"><summary>{lt.visibleTests}</summary>{task.visibleTests?.map((check) => <pre key={check.id}><code>{check.kind === "type" ? check.code : `${check.expression}\n→ ${formatOutput(check.expected)}`}</code></pre>)}</details>}
        <div className="hintSection">
          <button className="hintButton" disabled={busy || state.visibleHints >= task.content[language].hints.length} onClick={() => update(task, { visibleHints: state.visibleHints + 1 })}>💡 {t.hint}</button>
          {task.content[language].hints.slice(0, state.visibleHints).map((hint, i) => <div className="hintCard" key={i}><span>{i + 1}</span><p>{hint}</p></div>)}
          {state.visibleHints === task.content[language].hints.length && !state.showSolution && <button className="solutionButton" disabled={busy} onClick={() => void showSolution()}>{lt.solution}</button>}
          {state.showSolution && <div className="solutionCard"><div className="taskExampleHeader">{lt.solutionTitle}</div><pre><code>{state.solution}</code></pre></div>}
        </div>
        {index > 0 && <button className="previousButton" disabled={busy} onClick={() => setIndex((value) => value - 1)}>{t.previousTask}</button>}
      </section>
      <section className="codeWorkspace">
        <div className="editorHeader"><div className="editorDots"><span /><span /><span /></div><span>{isTS ? "solution.ts" : "solution.js"}</span></div>
        <textarea className="codeEditor" aria-label={isTS ? "TypeScript code" : "JavaScript code"} value={state.code} readOnly={busy}
          onChange={(event) => update(task, { code: event.target.value, isSolved: false, result: "", output: null, error: null })}
          placeholder={t.codePlaceholder} rows={14} spellCheck={false} />
        <div className="editorActions"><span className="editorLanguage">{isTS ? "TypeScript" : "JavaScript"}</span>
          <button className="checkButton" disabled={busy} onClick={() => void handleCheck()}>{busy ? lt.checking : `▶ ${t.check}`}</button></div>
        <div role="status" aria-live="polite" className={`consoleOutput ${state.isSolved ? "consoleSuccess" : state.result || state.error ? "consoleError" : ""}`}>
          <div className="consoleOutputHeader"><span>{isTS ? lt.runtime : "Console"}</span>{state.isSolved && <span className="consoleStatus">✓ {t.success}</span>}</div>
          {!isTS && <div className="consoleLine"><code>console.log(result)</code><span className="consoleArrow">→</span><span className="consoleValue">{state.error ? "Error" : state.output !== null ? formatOutput(state.output) : lt.pending}</span></div>}
          {!state.result && !state.error && <p className="consoleHint">{lt.runHint}</p>}
          {state.isSolved && <p className="consoleMessage">✓ {isTS ? lt.passed : t.success}</p>}
          {!state.isSolved && state.result && !state.error && <p className="consoleMessage">{state.result}</p>}
          {state.error && <div className="consoleErrorDetails"><strong>{state.error.name}: {state.error.message}</strong><p>{lt.errorHelp}</p></div>}
        </div>
        {storageError && <p role="alert" className="generationError">{lt.saveError}</p>}
        {generationError && <p role="alert" className="generationError">{generationError}</p>}
        {state.isSolved && <button className="nextButton" disabled={busy || isGenerating || (isTS && storageError)} onClick={() => void handleNext()}>
          {isGenerating ? lt.loading : index + 1 === session.taskCount ? `${t.finishSession} ✓` : `${t.next} →`}
        </button>}
      </section>
    </div>
  </main>;
}
