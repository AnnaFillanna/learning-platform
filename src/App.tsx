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
    <main className="app">
      <header className="header">
        <div className="logo">
          <div className="logoIcon">🐱</div>

          <div>
            <h1>Pet</h1>
            <span>Practice. Learn. Grow.</span>
          </div>
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

      <div className="home">
        <section className="hero">
          <div className="heroContent">
            <p className="welcome">{t.welcome}</p>

            <h2>{t.readyToPractice}</h2>

            <TrainingCard
              language="JavaScript"
              topic="Arrays"
              tasksCount={5}
              onContinue={handleContinue}
              trainingTitle={t.todaysTraining}
              tasksLabel={t.tasks}
              continueLabel={t.continue}
            />
          </div>

          <div className="petArea">
            <div className="petPlaceholder">🐱</div>

            <p>Small steps. Big progress.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
