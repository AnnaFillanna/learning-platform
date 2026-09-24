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
    <section>
      <p>{language} · {topic}</p>
      <h2>{trainingTitle}</h2>
      <p>{tasksCount} {tasksLabel}</p>
      <button onClick={onContinue}>{continueLabel}</button>
    </section>
  )
}

export default TrainingCard