export type ChatMessage = { role: "user" | "assistant"; content: string };
export type FilliRequest = {
  language: "de" | "en" | "ru";
  context: {
    taskId: string; programmingLanguage: string; description: string;
    displayCode: string; code: string; feedback: string;
  };
  messages: ChatMessage[];
};
