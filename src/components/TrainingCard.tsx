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
  onReset?: () => void;
  onRepeat?: () => void;
  repeatDisabled?: boolean;
  programmingLanguage?: "JavaScript" | "TypeScript";
  disabled?: boolean;
  note?: string;
  actionLabel?: string;
};

function TrainingCard({
  language,
  block,
  taskCount,
  onTaskCountChange,
  onContinue,
  onReset,
  onRepeat,
  repeatDisabled = false,
  programmingLanguage = "JavaScript",
  disabled = false,
  note,
  actionLabel,
}: TrainingCardProps) {
  const t = translations[language];

  return (
    <section className="trainingCard" aria-labelledby="training-title">
      <div className="trainingCardTop">
        <span className="trainingBadge">{programmingLanguage === "TypeScript" ? "TS" : "JS"}</span>

        <div>
          <p className="trainingLabel">{t.todaysTraining}</p>
          <h3 id="training-title">
            {programmingLanguage} <span>·</span> {block.title}
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

        {(onRepeat || onReset) && <div className="resetAction">
          <button
            className="resetButton"
            type="button"
            disabled={repeatDisabled}
            onClick={() => {
              if (onRepeat) { onRepeat(); return; }
              const confirmed = window.confirm(
                t.resetBlockConfirm,
              );

              if (confirmed) {
                onReset?.();
              }
            }}
          >
            ↻ {t.repeatBlock}
          </button>
        </div>}
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

      <p className="sessionNote">{note ?? t.sessionScope}</p>

      <button className="continueButton" disabled={disabled} onClick={onContinue}>
        {actionLabel ?? t.continue}
        <span aria-hidden="true">→</span>
      </button>
    </section>
  );
}

export default TrainingCard;