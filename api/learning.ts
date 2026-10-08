import { handleLearning } from "../server/learningHandler.js";

type Request = { method?: string; body?: unknown };
type Response = { status: (status: number) => Response; json: (body: unknown) => unknown };

export default function handler(req: Request, res: Response) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const result = handleLearning(req.body);
    return res.status(result.status).json(result.body);
  } catch {
    return res.status(500).json({ error: "The TypeScript checker could not complete this request." });
  }
}
