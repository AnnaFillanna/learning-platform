import type { GeneratedTask } from "../types/generatedTask";

export type TaskGenerationRequest = {
  programmingLanguage: "javascript";
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  taskType?:
    | "practice"
    | "business"
    | "debug"
    | "predict"
    | "mixed"
    | "edge-case";
};

export async function generateTask(
  request: TaskGenerationRequest,
): Promise<GeneratedTask & { id: string }> {
  console.log("🚀 Sending generation request:", request);
  const API_URL = import.meta.env.DEV
    ? "http://localhost:3001/api/tasks/generate"
    : "/api/tasks/generate";
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  console.log("📡 Server response:", response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("❌ Server error:", errorText);

    throw new Error(`Task generation failed: ${response.status} ${errorText}`);
  }

  const task = await response.json();

  console.log("🐱 Generated task:", task);

  return task;
}
