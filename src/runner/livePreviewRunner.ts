export type LivePreviewResult = {
  status: "idle" | "running" | "success" | "error";
  output?: unknown;
  expected?: unknown;
  error?: {
    name: string;
    message: string;
  };
};

type PreviewWorkerResponse =
  | {
      status: "success";
      output: unknown;
    }
  | {
      status: "error";
      error: {
        name: string;
        message: string;
      };
    };

export function runLivePreview(
  code: string,
  input: Record<string, unknown>,
  timeout = 2000,
): Promise<LivePreviewResult> {
  return new Promise((resolve) => {
    const worker = new Worker(
      new URL("./livePreview.worker.ts", import.meta.url),
      { type: "module" },
    );

    let finished = false;

    const finish = (result: LivePreviewResult) => {
      if (finished) return;

      finished = true;
      clearTimeout(timer);
      worker.terminate();
      resolve(result);
    };

    const timer = setTimeout(() => {
      finish({
        status: "error",
        error: {
          name: "TimeoutError",
          message: "Die Ausführung hat zu lange gedauert.",
        },
      });
    }, timeout);

    worker.onmessage = (
      event: MessageEvent<PreviewWorkerResponse>,
    ) => {
      const response = event.data;

      if (response.status === "success") {
        finish({
          status: "success",
          output: response.output,
        });
      } else {
        finish({
          status: "error",
          error: response.error,
        });
      }
    };

    worker.onerror = () => {
      finish({
        status: "error",
        error: {
          name: "WorkerError",
          message: "Der Code konnte nicht ausgeführt werden.",
        },
      });
    };

    try {
      worker.postMessage({ code, input });
    } catch {
      finish({
        status: "error",
        error: {
          name: "InputError",
          message: "Die Eingabedaten konnten nicht übertragen werden.",
        },
      });
    }
  });
}
