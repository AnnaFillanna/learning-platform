import "./App.css";
import TrainingCard from "./components/TrainingCard";
import { useState } from "react";
import TaskScreen from "./components/TaskScreen";
import type { Language } from "./types/task";
import { translations } from "./i18n/translations";

function App() {
  const [language, setLanguage] = useState<Language>("de");
  const t = translations[language];
  const [screen, setScreen] = useState<"home" | "task">("home");
  const handleContinue = () => {
    setScreen("task");
    console.log("Training started");
  };
  if (screen === "task") {
    return <TaskScreen onBack={() => setScreen("home")} language={language} />;
  }
  return (
    <main>
      <div>
        <button onClick={() => setLanguage("de")}>DE</button>
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("ru")}>RU</button>
      </div>
      <header>
        <h1>Pet</h1>
      </header>

      <section>
        <p>{t.welcome}</p>
        <h2>{t.readyToPractice}</h2>
      </section>
      <TrainingCard
        language="JavaScript"
        topic="Arrays"
        tasksCount={5}
        onContinue={handleContinue}
        trainingTitle={t.todaysTraining}
        tasksLabel={t.tasks}
        continueLabel={t.continue}
      />
    </main>
  );
}

export default App;
