import { explainTerm } from '../glossary/technicalTerms';

export function TechnicalText({ children }: { children: string }) {
  return <>{children.split(/([A-Za-z_$][\w$]*)/g).map((part, index) => {
    const explanation = explainTerm(part);
    return explanation ? <span key={index} className="technicalTerm" tabIndex={0} title={`${part} — ${explanation}`} aria-label={`${part}: ${explanation}`}>{part}</span> : part;
  })}</>;
}

