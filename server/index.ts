import "dotenv/config";
import cors from "cors";
import crypto from "node:crypto";
import express from "express";

import { generateTask } from "./generateTask";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/tasks/generate", async (req, res) => {
    console.log("🐱 Generate request received:", req.body);
  try {
    const { programmingLanguage, topic, difficulty } = req.body;

    if (!programmingLanguage || !topic || !difficulty) {
      return res.status(400).json({
        error: "Missing generation parameters",
      });
    }

    const task = await generateTask({
      programmingLanguage,
      topic,
      difficulty,
    });

    return res.json({
      id: crypto.randomUUID(),
      ...task,
    });
  } catch (error) {
    console.error("Task generation error:", error);

    return res.status(500).json({
      error: "Task generation failed",
    });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🐱 Pet API running on port ${PORT}`);
});