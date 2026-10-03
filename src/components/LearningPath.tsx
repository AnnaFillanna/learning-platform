import { translations } from "../i18n/translations";
import type { Language } from "../types/task";
import type { LearningBlock } from "../types/training";

type LearningPathProps = {
  blocks: readonly LearningBlock[];
  selectedBlockId: string;
  onSelectBlock: (id: string) => void;
  language: Language;
};

export default function LearningPath({ blocks, selectedBlockId, onSelectBlock, language }: LearningPathProps) {
  const t = translations[language];
  return (
    <section className="learningPath" aria-labelledby="learning-path-title">
      <header className="learningPathHeader">
        <h3 id="learning-path-title">{t.learningPathTitle}</h3>
      </header>
      <ol className="learningPathList">
        {blocks.map((block, index) => (
          <li key={block.id}>
            <button type="button" className="learningPathRow"
              aria-pressed={block.id === selectedBlockId}
              onClick={() => onSelectBlock(block.id)}>
              <span className="learningPathNumber" aria-hidden="true">{index + 1}</span>
              <span className="learningPathDetails">
                <span className="learningPathRowHeading">
                  <span className="learningPathName">{block.title}</span>
                  <span className="learningPathPercent">{block.progressPercent}%</span>
                </span>
                <span className="learningPathDescription">{block.description[language]}</span>
                <span className="learningPathTrack" aria-hidden="true">
                  <span style={{ width: `${block.progressPercent}%` }} />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
