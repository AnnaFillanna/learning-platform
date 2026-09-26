export type Attempt = {
  taskId: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";

  solved: boolean;
  attempts: number;
  hintsUsed: number;

  createdAt: string;
};