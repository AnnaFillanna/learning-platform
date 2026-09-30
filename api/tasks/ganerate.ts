import crypto from 'node:crypto';

import { generateTask } from '../../server/generateTask';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const { programmingLanguage, topic, difficulty } = req.body;

    if (!programmingLanguage || !topic || !difficulty) {
      return res.status(400).json({
        error: 'Missing generation parameters',
      });
    }

    const task = await generateTask({
      programmingLanguage,
      topic,
      difficulty,
    });

    return res.status(200).json({
      id: crypto.randomUUID(),
      ...task,
    });
  } catch (error) {
    console.error('Task generation error:', error);

    return res.status(500).json({
      error: 'Task generation failed',
    });
  }
}