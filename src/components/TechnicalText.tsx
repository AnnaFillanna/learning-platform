import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Language } from '../types/task';
import { explainTerm } from '../glossary/technicalTerms';

function TechnicalTerm({ word, explanation }: { word: string; explanation: string }) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const popup = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  function show() {
    const rect = trigger.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ left: Math.max(12, Math.min(rect.left, window.innerWidth - 352)), top: rect.bottom + 8 });
    setOpen(true);
  }
  useEffect(() => {
    if (!open) return;
    function dismiss() { setOpen(false); setPinned(false); }
    function outside(event: PointerEvent) {
      if (!trigger.current?.contains(event.target as Node) && !popup.current?.contains(event.target as Node)) dismiss();
    }
    function key(event: KeyboardEvent) { if (event.key === 'Escape') dismiss(); }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', key);
    window.addEventListener('resize', dismiss);
    window.addEventListener('scroll', dismiss, true);
    const height = popup.current?.getBoundingClientRect().height ?? 0;
    const rect = trigger.current?.getBoundingClientRect();
    if (rect && rect.bottom + 8 + height > window.innerHeight - 12) {
      setPosition((current) => ({ ...current, top: Math.max(12, rect.top - height - 8) }));
    }
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', key);
      window.removeEventListener('resize', dismiss);
      window.removeEventListener('scroll', dismiss, true);
    };
  }, [open]);
  return <>
    <button type="button" ref={trigger} className="technicalTerm" aria-label={`${word}: ${explanation}`}
      aria-expanded={open} aria-describedby={open ? id : undefined}
      onMouseEnter={show} onMouseLeave={() => { if (!pinned) setOpen(false); }}
      onBlur={() => { setOpen(false); setPinned(false); }}
      onClick={() => { if (pinned) { setPinned(false); setOpen(false); } else { setPinned(true); show(); } }}>
      {word}
    </button>
    {open && createPortal(<span id={id} ref={popup} role="tooltip" className="technicalTermPopup" style={position}>
      <strong>{word}</strong><span>{explanation}</span>
    </span>, document.body)}
  </>;
}

export function TechnicalText({ children, language }: { children: string; language: Language }) {
  return <>{children.split(/([A-Za-z_$][\w$]*)/g).map((part, index) => {
    const explanation = explainTerm(part, language);
    return explanation ? <TechnicalTerm key={`${language}-${index}`} word={part} explanation={explanation} /> : part;
  })}</>;
}
