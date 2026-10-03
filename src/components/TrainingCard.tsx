import { translations } from "../i18n/translations";
import type { Language } from "../types/task";
import {
  SESSION_SIZES,
  type LearningBlock,
  type SessionSize,
} from "../types/training";

type TrainingCardProps = {
  language: Language;
  block: LearningBlock;
  taskCount: SessionSize;
  onTaskCountChange: (count: SessionSize) => void;
  onContinue: () => void;
  onReset: () => void;
};

function TrainingCard({
  language,
  block,
  taskCount,
  onTaskCountChange,
  onContinue,
  onReset,
}: TrainingCardProps) {
  const t = translations[language];

  return (
    <section className="trainingCard" aria-labelledby="training-title">
      <div className="trainingCardTop">
        <span className="trainingBadge">JS</span>

        <div>
          <p className="trainingLabel">{t.todaysTraining}</p>
          <h3 id="training-title">
            JavaScript <span>·</span> {block.title}
          </h3>
        </div>
      </div>

      <div className="trainingProgress">
        <div className="trainingProgressLabel">
          <span>{t.blockProgress}</span>

          <strong>
            {block.completedTasks}
            {block.estimatedTasks !== undefined &&
              ` / ~${block.estimatedTasks}`}{" "}
            {t.tasks}
          </strong>
        </div>

        <progress
          aria-label={t.blockProgress}
          value={block.progressPercent}
          max={100}
        />

        {true && (
          <div className="resetAction">
            <button
              className="resetButton"
              onClick={() => {
                const confirmed = window.confirm(
                  "Möchtest du diesen Block wirklich neu starten?",
                );

                if (confirmed) {
                  onReset();
                }
              }}
            >
              ↻ Wiederholen
            </button>
          </div>
        )}
      </div>

      <fieldset className="sessionSelection">
        <legend>{t.sessionQuestion}</legend>

        <div className="sessionOptions">
          {SESSION_SIZES.map((count) => (
            <label className="sessionOption" key={count}>
              <input
                type="radio"
                name="session-size"
                value={count}
                checked={taskCount === count}
                onChange={() => onTaskCountChange(count)}
              />

              <span>
                {count}
                <span className="sessionOptionUnit">{t.tasks}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <p className="sessionNote">{t.sessionScope}</p>

      <button className="continueButton" onClick={onContinue}>
        {t.continue}
        <span aria-hidden="true">→</span>
      </button>
    </section>
  );
}

export default TrainingCard;