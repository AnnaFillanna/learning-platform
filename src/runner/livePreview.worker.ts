type PreviewRequest = {
  code: string;
  input: Record<string, unknown>;
};

type PreviewResponse =
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

self.onmessage = (event: MessageEvent<PreviewRequest>) => {
  const { code, input } = event.data;

  try {
    const inputNames = Object.keys(input);
    const inputValues = Object.values(input);

    const variableMatches = [
      ...code.matchAll(
        /\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/g,
      ),
    ];

    const lastVariable = variableMatches.at(-1)?.[1];

    if (!lastVariable) {
      throw new Error("No result variable found.");
    }

    const executeCode = new Function(
      ...inputNames,
      `${code}\nreturn ${lastVariable};`,
    );

    const output = executeCode(...inputValues);

    const response: PreviewResponse = {
      status: "success",
      output,
    };

    self.postMessage(response);
  } catch (error) {
    const response: PreviewResponse = {
      status: "error",
      error: {
        name: error instanceof Error ? error.name : "Error",
        message:
          error instanceof Error
            ? error.message
            : String(error),
      },
    };

    self.postMessage(response);
  }
};