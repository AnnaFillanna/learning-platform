import "./App.css";
import { useState } from "react";

import TypeScriptOverview from "./components/TypeScriptOverview";
import type { LearnerTask } from "./types/learnerTask";
import type { ProgrammingLanguage } from "./types/task";

import LearningPath from "./components/LearningPath";
import TrainingCard from "./components/TrainingCard";
import TaskScreen from "./components/TaskScreen";

import type { Language } from "./types/task";
import type { SessionSize, TrainingSession } from "./types/training";

import { currentBlock, learningBlocks } from "./progress/currentBlock";
import { translations } from "./i18n/translations";

function App() {
  const [programmingLanguage, setProgrammingLanguage] = useState<ProgrammingLanguage>("javascript");
  const [learningTasks, setLearningTasks] = useState<LearnerTask[]>([]);
  const [language, setLanguage] = useState<Language>("de");
  const [selectedBlockId, setSelectedBlockId] = useState(currentBlock.id);
  const [blocks, setBlocks] = useState(learningBlocks);
  const [taskCount, setTaskCount] = useState<SessionSize>(10);
  const [session, setSession] = useState<TrainingSession | null>(null);

  const t = translations[language];

const selectedBlock =
  blocks.find((block) => block.id === selectedBlockId) ?? currentBlock;
  const handleContinue = () => {
    setSession({
      blockId: selectedBlock.id,
      taskCount,
    });
  };
const handleResetBlock = () => {
  setBlocks((currentBlocks) =>
    currentBlocks.map((block) =>
      block.id === selectedBlockId
        ? {
            ...block,
            progressPercent: 0,
            completedTasks: 0,
          }
        : block,
    ),
  );
};
  if (session) {
    return (
      <TaskScreen
        onBack={() => setSession(null)}
        language={language}
        session={session}
        learningTasks={learningTasks}
      />
    );
  }

  return (
    <main className="app">
      <header className="header">
        <div className="logo">
           Lernen mit Fillicat🐱
          <span>Your coding companion</span>
        </div>

        <div className="languageSwitcher">
          <button
            className={language === "de" ? "active" : ""}
            onClick={() => setLanguage("de")}
          >
            DE
          </button>

          <button
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <button
            className={language === "ru" ? "active" : ""}
            onClick={() => setLanguage("ru")}
          >
            RU
          </button>
        </div>
      </header>

      <nav className="languageSwitcher programmingSwitcher" aria-label="Programming language">
        {(["javascript", "typescript"] as const).map((value) => <button key={value}
          className={programmingLanguage === value ? "active" : ""} aria-pressed={programmingLanguage === value}
          onClick={() => setProgrammingLanguage(value)}>{value === "javascript" ? "JavaScript" : "TypeScript"}</button>)}
      </nav>
      <div className="home">
        <section className="heroTop">
          <div>
            <p className="welcome">{t.welcome}</p>
            <h2>{t.readyToPractice}</h2>
          </div>

          <div className="catArea">
            <div className="catPlaceholder">🐱</div>

            <div className="catMessage">
              Hey ich bin Filli🐾
              <span>Klick mich bei einer Aufgabe an</span>
            </div>
          </div>
        </section>

        <section className="dashboard">
          {programmingLanguage === "typescript" ? <TypeScriptOverview language={language} onStart={(tasks, initialTaskId, count) => {
            setLearningTasks(tasks);
            setSession({ programmingLanguage: "typescript", blockId: "typescript", initialTaskId, taskCount: count });
          }} /> : <>
          <TrainingCard
            language={language}
            block={selectedBlock}
            taskCount={taskCount}
            onTaskCountChange={setTaskCount}
            onContinue={handleContinue}
            onReset={handleResetBlock}
          />

          <LearningPath
            blocks={blocks}
            selectedBlockId={selectedBlockId}
            onSelectBlock={setSelectedBlockId}
            language={language}
          />
          </>}
        </section>
      </div>
    </main>
  );
}

export default App;
