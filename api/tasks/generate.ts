
import { generateTask, type GenerateTaskRequest } from "../../server/generateTask.js";
import { randomUUID } from "node:crypto";

type Request = {
  method?: string;
  body?: Partial<GenerateTaskRequest>;
};

type Response = {
  status: (code: number) => Response;
  json: (body: unknown) => unknown;
};

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const { programmingLanguage, topic, difficulty, taskType } = req.body ?? {};

    if (!programmingLanguage || !topic || !difficulty) {
      return res.status(400).json({
        error: 'Missing generation parameters',
      });
    }

    const task = await generateTask({
      programmingLanguage,
      topic,
      difficulty,
      taskType,
    });

    return res.status(200).json({
      id: randomUUID(),
      ...task,
    });
  } catch (error) {
    console.error('Task generation error:', error);

    return res.status(500).json({
      error: 'Task generation failed',
    });
  }
}