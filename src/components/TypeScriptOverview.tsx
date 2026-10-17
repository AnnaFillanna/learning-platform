import { useEffect, useState } from 'react';
import { fetchLearningCatalog } from '../generator/learningClient';
import { loadLearningProgress } from '../progress/learningProgress';
import { getTypeScriptBlocks, getBlockPractice, getBlockRepeatTasks, primaryTypeScriptSectionIds } from '../learning/typescriptBlocks';
import { learningTranslations } from '../i18n/learningTranslations';
import type { SessionSize } from '../types/training';
import type { Language } from '../types/task';
import type { LearnerTask } from '../types/learnerTask';
import TrainingCard from './TrainingCard';
import LearningPath from './LearningPath';

type Props = { language: Language; onStart: (tasks: LearnerTask[], initialTaskId: string, count: SessionSize, blockId: string, repeat: boolean) => void };
const labels = {
  ru: { path: 'Твой путь TypeScript', later: 'Следующие разделы', repeat: 'Повторить блок', available: 'Доступно заданий в блоке', scope: 'Тренировка остаётся в выбранном блоке. Если заданий меньше выбранного числа, она завершится раньше.' },
  de: { path: 'Dein TypeScript-Lernweg', later: 'Weitere Abschnitte', repeat: 'Block wiederholen', available: 'Verfügbare Aufgaben im Block', scope: 'Die Einheit bleibt im gewählten Block. Sind weniger Aufgaben verfügbar, endet sie früher.' },
  en: { path: 'Your TypeScript learning path', later: 'Upcoming sections', repeat: 'Practise block again', available: 'Available tasks in this block', scope: 'Practice stays in the selected block. If fewer tasks are available, the session ends earlier.' },
};

export default function TypeScriptOverview({ language, onStart }: Props) {
  const t = learningTranslations[language];
  const ui = labels[language];
  const [tasks, setTasks] = useState<LearnerTask[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const [count, setCount] = useState<SessionSize>(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    let active = true;
    fetchLearningCatalog().then(({ tasks: catalog }) => {
      if (!active) return;
      setTasks(catalog);
      const snapshot = loadLearningProgress(catalog).snapshot;
      const blocks = getTypeScriptBlocks(catalog, snapshot);
      setSelectedId((blocks.find((block) => getBlockPractice(block.tasks, snapshot).tasks.length > 0 && block.completedTasks < block.tasks.length) ?? blocks.find((block) => block.tasks.length > 0))?.id ?? '');
      setLoading(false);
    }).catch(() => { if (active) { setError(true); setLoading(false); } });
    return () => { active = false; };
  }, [retry]);
  const { snapshot } = loadLearningProgress(tasks);
  const blocks = getTypeScriptBlocks(tasks, snapshot);
  const available = blocks.filter((block) => block.tasks.length > 0);
  const primary = available.filter((block) => primaryTypeScriptSectionIds.has(block.id));
  const upcoming = available.filter((block) => !primaryTypeScriptSectionIds.has(block.id));
  const selected = available.find((block) => block.id === selectedId) ?? available[0];
  const repeatTasks = getBlockRepeatTasks(selected?.tasks ?? []);
  const practice = getBlockPractice(selected?.tasks ?? [], snapshot);
  if (loading || error) return <section className="trainingCard" aria-live="polite">
    <h3>{t.title}</h3>{loading ? <p role="status">{t.loading}</p> : <><p role="alert">{t.unavailable}</p>
      <button className="continueButton" onClick={() => { setError(false); setLoading(true); setRetry((value) => value + 1); }}>{t.retry}</button></>}
  </section>;
  return <>
    {selected ? <TrainingCard language={language} programmingLanguage="TypeScript" block={selected} taskCount={count}
      onRepeat={() => { if (repeatTasks[0]) onStart(repeatTasks, repeatTasks[0].id, count, selected.id, true); }}
      repeatDisabled={!repeatTasks.length}
      onTaskCountChange={setCount} disabled={!practice.tasks.length}
      note={`${ui.available}: ${practice.tasks.length}. ${ui.scope}`}
      actionLabel={practice.repeat ? ui.repeat : undefined}
      onContinue={() => { if (practice.tasks[0]) onStart(practice.tasks, practice.tasks[0].id, count, selected.id, practice.repeat); }} />
      : <section className="trainingCard"><h3>{t.title}</h3><p>{t.noExercises}</p></section>}
    <div className="tsLearningOverview">
      <LearningPath blocks={primary} selectedBlockId={selected?.id ?? ''} onSelectBlock={setSelectedId} language={language} title={ui.path} />
      {upcoming.length > 0 && <details className="tsUpcoming"><summary aria-label={`${ui.later} · ${upcoming.length}`} title={`${ui.later} · ${upcoming.length}`}>
        <svg className="tsUpcomingArrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </summary>
        <div className="tsUpcomingContent" tabIndex={0} role="region" aria-label={ui.later}>
          <LearningPath blocks={upcoming} selectedBlockId={selected?.id ?? ''} onSelectBlock={setSelectedId} language={language} title={ui.later} startIndex={primary.length} headingId="additional-learning-path-title" />
        </div>
      </details>}
    </div>
  </>;
}
