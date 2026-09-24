import { useState } from "react";
import { runJavaScript } from "../runner/javascriptRunner";
import { javascriptTasks } from "../tasks/javascriptTasks";
import type { Language } from "../types/task";
import { translations } from "../i18n/translations";
type TaskScreenProps = {
  onBack: () => void;
  language: Language;
};

function TaskScreen({ onBack, language }: TaskScreenProps) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const task = javascriptTasks[currentTaskIndex];
  const t = translations[language];

  const totalTasks = javascriptTasks.length;

  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const [visibleHints, setVisibleHints] = useState(0);

  const handleCheck = () => {
    const checkResult = runJavaScript(code, task);

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
  const handleNext = () => {
    if (currentTaskIndex < totalTasks - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
      setCode("");
      setResult("");
      setIsSolved(false);
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

      <p>{task.content[language].description}</p>
      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        placeholder={t.codePlaceholder}
        rows={10}
      />
      <button onClick={handleHint}>Hinweis</button>

      {task.content[language].hints
        .slice(0, visibleHints)
        .map((hint, index) => (
          <p key={index}>
            {index + 1}. {hint}
          </p>
        ))}
      <button onClick={handleCheck}>{t.check}</button>

      {result && <p>{result}</p>}

      {isSolved && <button onClick={handleNext}>{t.next}</button>}

      <button onClick={onBack}>{t.back}</button>
    </main>
  );
}

export default TaskScreen;
