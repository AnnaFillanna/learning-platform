import type { Language } from "../types/task";
import { explainTerm } from './technicalTerms';

/** Mirror native textarea layout to identify the actual word under the pointer. */
export function editorTermAtPoint(editor: HTMLTextAreaElement, x: number, y: number, language: Language): string {
  const bounds = editor.getBoundingClientRect();
  const style = getComputedStyle(editor);
  const mirror = document.createElement('div');
  for (const property of ['box-sizing', 'font-family', 'font-size', 'font-weight', 'font-style', 'line-height', 'letter-spacing', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'border-top-width', 'border-left-width', 'tab-size']) {
    mirror.style.setProperty(property, style.getPropertyValue(property));
  }
  Object.assign(mirror.style, { position: 'fixed', left: `${bounds.left}px`, top: `${bounds.top - editor.scrollTop}px`, width: `${editor.clientWidth}px`, whiteSpace: 'pre-wrap', overflowWrap: 'break-word', visibility: 'hidden', pointerEvents: 'none' });
  mirror.textContent = editor.value;
  document.body.appendChild(mirror);
  try {
    const text = mirror.firstChild;
    if (!text) return '';
    const range = document.createRange();
    for (const match of editor.value.matchAll(/[A-Za-z_$][\w$]*/g)) {
      const explanation = explainTerm(match[0], language);
      if (!explanation) continue;
      range.setStart(text, match.index);
      range.setEnd(text, match.index + match[0].length);
      for (const rect of range.getClientRects()) {
        if (x >= rect.left - editor.scrollLeft && x <= rect.right - editor.scrollLeft && y >= rect.top && y <= rect.bottom) return `${match[0]} — ${explanation}`;
      }
    }
    return '';
  } finally { mirror.remove(); }
}
