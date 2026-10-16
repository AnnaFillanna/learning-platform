import { useEffect, useRef, useState } from "react";
import type { ChatMessage, FilliRequest } from "../chat/types";
import { chatTranslations } from "../chat/translations";

function MessageText({ text }: { text: string }) {
  return text.split(/(```[\s\S]*?```)/g).map((part, i) => part.startsWith("```")
    ? <pre key={i}><code>{part.slice(3, -3).replace(/^[\w+-]*\n/, "")}</code></pre>
    : <span key={i}>{part}</span>);
}
export default function FilliChat({ language, context, onHelp }: {
  language: FilliRequest["language"]; context: FilliRequest["context"]; onHelp: () => void;
}) {
  const t = chatTranslations[language];
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const request = useRef<AbortController | null>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => () => { const current = request.current; request.current = null; current?.abort(); }, []);
  useEffect(() => { if (open) input.current?.focus(); }, [open]);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, pending, open]);
  async function send(value?: string) {
    if (request.current) return;
    const content = (value ?? draft).trim();
    if (!failed && !content) return;
    const next: ChatMessage[] = failed ? messages : [...messages, { role: "user", content }];
    if (!failed) { setMessages(next); setDraft(""); }
    setFailed(false); setPending(true);
    const controller = new AbortController();
    request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch("/api/filli", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, context, messages: next.slice(-19) }), signal: controller.signal,
      });
      if (!response.ok) throw new Error("Unavailable");
      const data = await response.json();
      if (typeof data.reply !== "string" || !data.reply.trim()) throw new Error("Empty reply");
      if (controller.signal.aborted) return;
      setMessages([...next, { role: "assistant", content: data.reply }]);
      onHelp();
    } catch { if (request.current === controller) setFailed(true); }
    finally {
      window.clearTimeout(timeout);
      if (request.current === controller) { request.current = null; setPending(false); }
    }
  }
  function close() { setOpen(false); trigger.current?.focus(); }
  return <>
    <button ref={trigger} className="taskBrand" title={t.open} aria-label={t.open} aria-expanded={open} aria-controls="filli-chat" onClick={() => setOpen(!open)}>
      <span aria-hidden="true">🐱</span><strong>Filli</strong><span className="filliChatBadge" aria-hidden="true">✦</span>
    </button>
    <section id="filli-chat" className="filliChat" hidden={!open} aria-label="Filli" onKeyDown={(e) => { if (e.key === "Escape") close(); }}>
      <header className="filliChatHeader"><div><strong>🐱 Filli</strong><small>{t.subtitle}</small></div><button type="button" onClick={close} aria-label={t.close}>×</button></header>
      <div ref={log} className="filliMessages" role="log" aria-live="polite" aria-relevant="additions text">
        <div className="filliMessage">{t.intro}</div>
        {messages.map((message, i) => <div key={i} className={`filliMessage filliMessage-${message.role}`}><small>{message.role === "user" ? t.you : "Filli"}</small><MessageText text={message.content} /></div>)}
        {pending && <p role="status" className="filliThinking">{t.thinking}</p>}
      </div>
      {failed && <div className="filliChatError" role="alert">{t.error}<button type="button" onClick={() => void send()}>{t.retry}</button></div>}
      {!messages.length && <div className="filliSuggestions">{[t.hint, t.explain].map((suggestion) => <button key={suggestion} onClick={() => void send(suggestion)}>{suggestion}</button>)}</div>}
      <form onSubmit={(e) => { e.preventDefault(); void send(); }}>
        <textarea ref={input} value={draft} maxLength={4000} disabled={pending || failed} onChange={(e) => setDraft(e.target.value)} placeholder={t.placeholder} aria-label={t.placeholder} rows={3}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); void send(); } }} />
        <button className="checkButton" disabled={pending || failed || !draft.trim()} type="submit">{t.send} ↑</button>
      </form>
      <p className="filliChatNote">{t.note}</p>
    </section>
  </>;
}
