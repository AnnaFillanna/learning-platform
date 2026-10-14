import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { load } from './helpers/load-typescript.mjs';
const { technicalTerms, explainTerm } = load('src/glossary/technicalTerms.ts');
const { TechnicalText } = load('src/components/TechnicalText.tsx');

test('every term returns only the selected interface language without language headings', () => {
  for (const [word, translations] of Object.entries(technicalTerms)) {
    for (const language of ['de', 'ru', 'en']) {
      assert.equal(explainTerm(word, language), translations[language]);
      assert.doesNotMatch(explainTerm(word, language), /Русский:|Deutsch:|English:/);
    }
  }
  assert.equal(explainTerm('Array', 'de'), technicalTerms.array.de);
  assert.equal(explainTerm('notATerm', 'ru'), undefined);
});

test('text tooltip and accessible explanation follow the language prop', () => {
  for (const language of ['de', 'ru', 'en']) {
    const html = renderToStaticMarkup(createElement(TechnicalText, { language }, 'Array'));
    assert.ok(html.includes(`title="Array — ${technicalTerms.array[language]}"`));
    assert.ok(html.includes(`aria-label="Array: ${technicalTerms.array[language]}"`));
    for (const other of ['de', 'ru', 'en'].filter(value => value !== language)) {
      assert.ok(!html.includes(technicalTerms.array[other]));
    }
  }
});
