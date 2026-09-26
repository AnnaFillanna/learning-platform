type TrainingCardProps = {
  language: string
  topic: string
  tasksCount: number
  onContinue: () => void
  trainingTitle: string
  tasksLabel: string
  continueLabel: string
}

function TrainingCard({
  language,
  topic,
  tasksCount,
  onContinue,
  trainingTitle,
  tasksLabel,
  continueLabel
}: TrainingCardProps) {
return (
  <section className="trainingCard">
    <div className="trainingCardTop">
      <span className="trainingBadge">JS</span>

      <div>
        <p className="trainingLabel">{trainingTitle}</p>
        <h3>
          {language} <span>·</span> {topic}
        </h3>
      </div>
    </div>

    <div className="trainingMeta">
      <span>◫ {tasksCount} {tasksLabel}</span>
      <span>◷ ~ 15–20 min</span>
    </div>

    <button
      className="continueButton"
      onClick={onContinue}
    >
      {continueLabel}
      <span>→</span>
    </button>
  </section>
);
}

export default TrainingCard