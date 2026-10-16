import test from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createLoader } from "./helpers/load-typescript.mjs";
const { default: Companion } = createLoader()("src/components/FilliCompanion.tsx");
const hints = ["First clue", "Second clue", "Third clue"];
const render = (visibleHints, language = "de") => renderToStaticMarkup(createElement(Companion, {
  language, hints, visibleHints, onHint() {}, onSolution() {}, busy: false, solutionShown: false,
}));
test("Filli welcomes the learner without a chat form or revealing hints", () => {
  const html = render(0);
  assert.match(html, /Klick mich an/);
  assert.doesNotMatch(html, /textarea|First clue|Second clue|Third clue/);
  assert.match(html, /role="status"/);
});
test("only the current progressive hint appears and the solution is not revealed automatically", () => {
  for (let index = 1; index <= 3; index++) {
    const html = render(index);
    assert.ok(html.includes(hints[index - 1]));
    for (const hint of hints.filter((_, i) => i !== index - 1)) assert.ok(!html.includes(hint));
    assert.doesNotMatch(html, /Lösung anschauen/);
  }
});
test("the invitation follows the interface language", () => {
  assert.match(render(0, "ru"), /Нажми на меня/);
  assert.match(render(0, "en"), /Tap me/);
});
test("home companion greets in each selected language without task controls", () => {
  for (const [language, greeting, label] of [
    ["de", "Hallo, ich bin Filli!", "Filli begrüßen"],
    ["en", "Hi, I&#x27;m Filli!", "Say hello to Filli"],
    ["ru", "Привет, я Filli!", "Поздороваться с Filli"],
  ]) {
    const html = renderToStaticMarkup(createElement(Companion, { language, mode: "home" }));
    assert.ok(html.includes(greeting));
    assert.ok(html.includes(label));
    assert.match(html, /filliHome/);
    assert.doesNotMatch(html, /Lösung anschauen|First clue|textarea/);
  }
});
