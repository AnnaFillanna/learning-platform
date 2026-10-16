import { handleFilli } from "../server/filliHandler.js";
export default async function handler(
  req: { method?: string; body?: unknown },
  res: { status: (code: number) => typeof res; json: (body: unknown) => unknown },
) {
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });
  const result = await handleFilli(req.body);
  return res.status(result.status).json(result.body);
}
