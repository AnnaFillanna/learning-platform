import { useState } from "react";
import { runJavaScript } from "../runner/javascriptRunner";
import { javascriptTasks } from "../tasks/javascriptTasks";
import type { Language } from "../types/task";
type TaskScreenProps = {
  onBack: () => void;
  language: Language;
  setLanguage: (language: Language) => void;
};

function TaskScreen({ onBack, language, setLanguage }: TaskScreenProps) {
  const task = javascriptTasks[0];

  const currentTaskIndex = 0;
  const totalTasks = 5;

  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    const checkResult = runJavaScript(code);

    setResult(checkResult.message);
  };
  return (
    <main>
      
      <p>
        {task.programmingLanguage} · {task.category}
      </p>
      <h1>
        Task {currentTaskIndex + 1} of {totalTasks}
      </h1>

      <p>{task.content[language].description}</p>
      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        placeholder="Write your code here..."
        rows={10}
      />
      <button onClick={handleCheck}>Check</button>
      {result && <p>{result}</p>}
      <button onClick={onBack}>Back</button>
    </main>
  );
}

export default TaskScreen;
