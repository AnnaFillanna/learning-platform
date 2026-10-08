import { useEffect, useState } from "react";
import { fetchLearningCatalog } from "../generator/learningClient";
import { getTaskReadiness, getTaskRequirements } from "../learning/nextTask";
import { loadLearningProgress, getPlacement, savePlacement, deriveProgress } from "../progress/learningProgress";
import { getAttempts } from "../progress/attemptStorage";
import { skillRegistry } from "../skills/registry";
import { learningTranslations } from "../i18n/learningTranslations";
import { SESSION_SIZES, type SessionSize } from "../types/training";
import type { Language } from "../types/task";
import type { LearnerTask } from "../types/learnerTask";

type Props = { language: Language; onStart: (tasks: LearnerTask[], initialTaskId: string, count: SessionSize) => void };

export default function TypeScriptOverview({ language, onStart }: Props) {
  const t = learningTranslations[language];
  const [tasks, setTasks] = useState<LearnerTask[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [placement, setPlacement] = useState(getPlacement);
  const [count, setCount] = useState<SessionSize>(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    let active = true;
    fetchLearningCatalog().then(({ tasks: catalog }) => {
      if (!active) return;
      setTasks(catalog);
      const snapshot = loadLearningProgress(catalog).snapshot;
      const available = catalog.find((task) => !snapshot.completedTaskIds.includes(task.id) && getTaskReadiness(task, snapshot).eligible);
      setSelectedId(available?.id ?? catalog[0]?.id ?? "");
      setLoading(false);
    }).catch(() => { if (active) { setError(true); setLoading(false); } });
    return () => { active = false; };
  }, [retry]);
  const { snapshot } = deriveProgress(tasks, getAttempts(), placement);
  const selected = tasks.find((task) => task.id === selectedId);
  const readiness = selected ? getTaskReadiness(selected, snapshot) : undefined;
  const requirements = selected ? getTaskRequirements(selected) : { skills: [], knowledge: [] };
  const confirmedByPractice = new Set([...snapshot.masteredSkillIds, ...(snapshot.practicedSkillIds ?? [])]);
  const due = selected?.topics.some((id) => snapshot.dueSkillIds.includes(id));
  const ready = readiness?.eligible && (selected?.stage !== "delayed-repetition" || due);
  const map = skillRegistry.forLanguage("typescript");
  return (
    <>
      <section className="trainingCard tsPractice" aria-labelledby="ts-practice-title">
        <div className="trainingCardTop"><span className="trainingBadge">TS</span><h3 id="ts-practice-title">{t.title}</h3></div>
        <p>{t.completed}: {snapshot.completedTaskIds.length} / {tasks.length}</p>
        <p>{t.practiced}: {snapshot.practicedSkillIds?.filter((id) => id.startsWith("ts-")).length ?? 0} · {t.mastered}: {snapshot.masteredSkillIds.length}</p>
        {loading && <p role="status">{t.loading}</p>}
        {error && <div role="alert"><p>{t.unavailable}</p><button onClick={() => { setError(false); setLoading(true); setRetry((value) => value + 1); }}>{t.retry}</button></div>}
        {selected && <>
          <h3>{selected.content[language].title}</h3>
          <p>{selected.content[language].description}</p>
          <p>{ready ? t.ready : t.missing}</p>
          {requirements.skills.some((id) => !confirmedByPractice.has(id)) && <fieldset className="tsPlacement">
            <legend>{t.placement}</legend><p>{t.placementHelp}</p>
            {requirements.skills.filter((id) => !confirmedByPractice.has(id)).map((id) => <label key={id}>
              <input type="checkbox" checked={placement.includes(id)} onChange={(event) => {
                const next = event.target.checked ? [...placement, id] : placement.filter((item) => item !== id);
                setPlacement(next);
                setStorageError(!savePlacement(next));
              }} />{skillRegistry.get(id).programmingLanguage === "javascript" ? "JS · " : "TS · "}{skillRegistry.get(id).title}
            </label>)}
          </fieldset>}
          {readiness?.missingKnowledge.length ? <p>{t.knowledge}: {readiness.missingKnowledge.join(", ")}</p> : null}
          {selected.stage === "delayed-repetition" && !due && <p>{t.reviewWaiting}</p>}
          <fieldset className="sessionSelection"><legend>{t.sessionSize}</legend><div className="sessionOptions">
            {SESSION_SIZES.map((size) => <label key={size}><input type="radio" name="ts-session-size" value={size} checked={count === size} onChange={() => setCount(size)} /><span>{size}</span></label>)}
          </div></fieldset>
          <button className="continueButton" disabled={!ready || storageError} onClick={() => onStart(tasks, selected.id, count)}>{t.start} →</button>
          {storageError && <p role="alert">{t.saveError}</p>}
          <p className="sessionNote">{t.noMastery}</p>
        </>}
      </section>
      <section className="learningPath" aria-labelledby="ts-map-title">
        <header className="learningPathHeader"><h3 id="ts-map-title">{t.catalog}</h3></header>
        <ol className="learningPathList">{tasks.map((task, index) => <li key={task.id}>
          <button className="learningPathRow" aria-pressed={selectedId === task.id} onClick={() => setSelectedId(task.id)}>
            <span className="learningPathNumber">{index + 1}</span><span className="learningPathDetails">
              <span className="learningPathName">{task.content[language].title}</span>
              <span className="learningPathDescription">{task.stage === "delayed-repetition" && !task.topics.some((id) => snapshot.dueSkillIds.includes(id)) ? t.reviewWaiting : snapshot.completedTaskIds.includes(task.id) ? t.completed : getTaskReadiness(task, snapshot).eligible ? t.ready : t.prerequisites}{task.topics.some((id) => snapshot.dueSkillIds.includes(id)) ? ` · ${t.due}` : ""}</span>
            </span>
          </button>
        </li>)}</ol>
        <div className="tsMapSections">{map.sections.map((section) => <details key={section.id}>
          <summary>{String(section.order).padStart(2, "0")} · {section.title}</summary>
          {!tasks.some((task) => task.topics.some((id) => skillRegistry.get(id).sectionId === section.id)) && <p>{t.noExercises}</p>}
          <ul>{map.skills.filter((skill) => skill.sectionId === section.id).map((skill) => <li key={skill.id}>
            {skill.kind === "subskill" ? "↳ " : ""}{skill.title}
            <small>{t.prerequisites}: {skill.prerequisites.map((id) => skillRegistry.get(id).title).join(", ")}</small>
          </li>)}</ul>
        </details>)}</div>
      </section>
    </>
  );
}
