import { learningBlocks } from "../progress/currentBlock";
import type { SkillMap } from "../types/skill";

export const javascriptSkillMap: SkillMap = {
  sections: learningBlocks.map((block, index) => ({
    id: `js-section-${block.id}`,
    programmingLanguage: "javascript",
    order: index + 1,
    title: block.title,
  })),
  skills: [
    ...learningBlocks.map((block) => ({
      id: block.id,
      sectionId: `js-section-${block.id}`,
      programmingLanguage: "javascript" as const,
      title: block.title,
      kind: "skill" as const,
      prerequisites: [],
      dimensions: [],
      source: "existing-learning-block" as const,
    })),
    {
      id: "js-arrays-filtering",
      sectionId: "js-section-arrays",
      programmingLanguage: "javascript",
      title: "Array filtering",
      kind: "subskill",
      parentSkillId: "arrays",
      prerequisites: ["arrays"],
      dimensions: [],
      source: "existing-task-topic",
    },
  ],
};
