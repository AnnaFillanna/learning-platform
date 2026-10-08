import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { Plugin } from "vite";

function learningApi(): Plugin {
  return {
    name: "pet-learning-api",
    configureServer(server) {
      server.middlewares.use("/api/learning", async (req, res) => {
        res.setHeader("Content-Type", "application/json");
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }
        let body = "";
        let tooLarge = false;
        req.on("data", (chunk: Buffer) => {
          if (tooLarge) return;
          body += chunk.toString();
          if (Buffer.byteLength(body) > 100000) {
            tooLarge = true;
            res.statusCode = 413;
            res.end(JSON.stringify({ error: "Request too large" }));
          }
        });
        req.on("end", async () => {
          if (tooLarge) return;
          try {
            const { handleLearning } = await server.ssrLoadModule("/server/learningHandler.ts");
            const result = handleLearning(JSON.parse(body));
            res.statusCode = result.status;
            res.end(JSON.stringify(result.body));
          } catch {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Could not process learning request" }));
          }
        });
      });
    },
  };
}

export default defineConfig({ plugins: [react(), learningApi()] });
