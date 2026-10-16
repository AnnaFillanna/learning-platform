import { useEffect, useState } from "react";
import type { Language } from "../types/task";
import { TechnicalText } from "./TechnicalText";

const filliWords = {
  de: { welcome: "Kommst du nicht weiter? Klick mich an, ich helfe dir!", hint: "Ein kleiner Hinweis für dich …", next: "Klick mich für den nächsten Tipp", last: "Probier es aus. Ich bin bei dir!", offer: "Noch knifflig? Wir können uns die Lösung gemeinsam anschauen.", solution: "Lösung anschauen", bored: "Hmm … ich warte hier auf dich.", reading: "Ich lese ein bisschen. Klick mich, wenn du mich brauchst!", label: "Filli um einen Hinweis bitten", count: "Hinweis", done: "Jetzt kannst du die Lösung in Ruhe ausprobieren." },
  ru: { welcome: "Не получается? Нажми на меня, я помогу!", hint: "Вот маленькая подсказка…", next: "Нажми на меня ещё раз — подскажу дальше", last: "Попробуй. Я рядом!", offer: "Всё ещё сложно? Давай посмотрим решение вместе.", solution: "Посмотреть решение", bored: "М-м… я тут, жду тебя.", reading: "Пока почитаю. Нажми на меня, если понадоблюсь!", label: "Попросить подсказку у Filli", count: "Подсказка", done: "Теперь можно спокойно попробовать решение." },
  en: { welcome: "Stuck? Tap me, I'll help you!", hint: "Here's a little hint…", next: "Tap me again for the next hint", last: "Give it a try. I'm here!", offer: "Still tricky? We can look at the solution together.", solution: "Look at the solution", bored: "Hmm … I'll wait here for you.", reading: "I'll read a little. Tap me when you need me!", label: "Ask Filli for a hint", count: "Hint", done: "Now you can take your time trying the solution." },
};
export default function FilliCompanion({ language, hints, visibleHints, onHint, onSolution, solutionShown, busy }: {
  language: Language; hints: string[]; visibleHints: number; onHint: () => void;
  onSolution: () => void; solutionShown: boolean; busy: boolean;
}) {
  const t = filliWords[language];
  const [mood, setMood] = useState("awake");
  const [interaction, setInteraction] = useState(0);
  const [offer, setOffer] = useState(false);
  useEffect(() => {
    const bored = window.setTimeout(() => setMood("bored"), 25000);
    const reading = window.setTimeout(() => setMood("reading"), 50000);
    return () => { window.clearTimeout(bored); window.clearTimeout(reading); };
  }, [interaction]);
  function greet() {
    setMood("awake"); setInteraction((value) => value + 1);
    if (visibleHints < hints.length) onHint();
    else setOffer(true);
  }
  const greeting = mood === "reading" ? t.reading : mood === "bored" ? t.bored : t.welcome;
  return <div className={`filliCompanion filli-${mood}`}>
    <div className="filliBubble" id="filli-speech" role="status" aria-live="polite" aria-atomic="true">
      {solutionShown ? <p>{t.done}</p> : offer ? <><p>{t.offer}</p><button disabled={busy} onClick={onSolution}>{t.solution} ↗</button></> : visibleHints > 0 ? <>
        <small>{t.count} {visibleHints} / {hints.length}</small>
        <p><TechnicalText language={language}>{hints[visibleHints - 1]}</TechnicalText></p>
        <span className="filliBubblePrompt">{visibleHints < hints.length ? t.next : t.last}</span>
      </> : <p>{greeting}</p>}
    </div>
    <button className="filliCatButton" aria-label={t.label} aria-describedby="filli-speech" disabled={busy} onClick={greet}>
      <svg className="filliCat" viewBox="0 0 110 120" aria-hidden="true">
        <path className="filliTail" d="M75 98 Q105 103 98 73" fill="none" stroke="#dca246" strokeWidth="11" strokeLinecap="round" />
        <ellipse cx="54" cy="88" rx="27" ry="27" fill="#e8b253" />
        <path d="M25 43 L23 12 Q24 8 29 12 L44 26 Q55 22 66 26 L82 11 Q87 8 86 15 L84 44Z" fill="#f3c76e" />
        <path d="M29 30 L29 19 L39 29 M72 29 L81 18 L80 33" fill="#d58f73" />
        <ellipse cx="55" cy="49" rx="33" ry="28" fill="#f3c76e" />
        <g className="filliEyes" stroke="#433b35" strokeWidth="3.5" strokeLinecap="round"><path d="M40 46v5 M69 46v5" /></g>
        <path d="M51 55 Q55 52 59 55 L55 59Z" fill="#996750" />
        <path d="M55 59q-5 7-10 2 M55 59q5 7 10 2" fill="none" stroke="#996750" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 53l14 2 M20 61l14-2 M76 55l14-2 M76 59l14 2" stroke="#b9803e" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="40" cy="109" rx="13" ry="6" fill="#f3c76e" /><ellipse cx="68" cy="109" rx="13" ry="6" fill="#f3c76e" />
        <g className="filliBook"><path d="M28 80q14-5 27 3 13-8 27-3v25q-14-4-27 3-13-7-27-3Z" fill="#8fb0d8" stroke="#4e6b90" strokeWidth="2" /><path d="M55 83v25 M34 88l14 2 M34 94l14 2 M62 90l14-2 M62 96l14-2" stroke="#d7e5f7" strokeWidth="2" /></g>
      </svg>
      <span>Filli <span className="filliMoodMark" aria-hidden="true">{mood === "reading" ? "📖" : mood === "bored" ? "…" : "✦"}</span></span>
    </button>
  </div>;
}
