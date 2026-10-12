# Validierung und offene Prüfungen

## Dokumentierter Prüfstand

Der zuletzt ausgeführte Prüfstand umfasst **78 erfolgreiche automatisierte Tests**.
Typecheck, ESLint und Production Build waren ebenfalls erfolgreich. Die Angaben
beschreiben die Entwicklungsversion; sie sind keine Bestätigung eines produktiven
Deployments oder eines vollständigen Browser-End-to-End-Tests.

```sh
npm test
npm run typecheck
npm run lint
npm run build
```

Typecheck umfasst die Anwendung, die Vite-Konfiguration und den neuen
TypeScript-API-/Compiler-Code. Die ältere JavaScript-Serverkonfiguration ist
damit nicht vollständig geprüft.

## Automatisch abgedeckt

| Bereich | Prüfumfang |
| --- | --- |
| Skill Map | 26 TS-Bereiche, 216 IDs, Hierarchie, Verweise und Zyklusfreiheit |
| Voraussetzungen | JavaScript-Verknüpfungen, transitive Abhängigkeiten und Aufgabenauswahl |
| Aufgaben | 18 Referenzlösungen, DE/EN/RU-Inhalte, getrennte Testbereiche |
| Compiler | Strenge Typprüfung, negative Typverträge und fehlerhafte Typisierungen |
| API | Öffentlicher Katalog ohne Lösungen/versteckte Tests, Eingabevalidierung |
| Laufzeitprogramme | Ergebnisse und Grenzfälle der vorbereiteten Prüfprogramme |
| Fortschritt | Dimensionen, verschiedene Kontexte, Wiederholung und mastery-Anforderungen |
| Speicherung | Erneutes Lesen, Duplikate, defekte Daten, Speicherfehler und ältere JS-Einträge |
| JavaScript | Bestehende Aufgaben, Loader-Verhalten und ausgewählte Komponenten |
| Sandbox-Lifecycle | Nachrichtenfilter, Timeout, Startfehler, HTML-Escaping und Aufräumen in einer DOM-Nachbildung |

Ein Integrationstest verbindet Katalog, Voraussetzungen, Prüfung, gespeicherten
Attempt, Progress und Next Task. Er führt die Laufzeitprogramme im Testprozess aus;
er ersetzt nicht die Ausführung im Browser-Worker.

## Noch offen

- Vollständiger Browserablauf für JavaScript und TypeScript.
- Tatsächliche Durchsetzung von iframe-Isolation, Worker-Timeout und CSP im Browser.
- Visuelle Kontrolle der Übersicht und des Aufgabenbildschirms auf kleinen Displays.
- Lokaler JavaScript-Serverstart aus einer frischen Installation.
- Vercel-Deployment einschließlich TypeScript-Standardbibliotheken.
- Compiler-Ressourcenlimits und Lastbegrenzung für einen Mehrbenutzerbetrieb.

## Manueller Browser-Prüfablauf

1. Anwendung mit `npm run client` starten und TypeScript auswählen.
   Die Oberfläche auf DE, EN und RU prüfen.
2. Eine Aufgabe ohne bestätigte Voraussetzungen öffnen: Start muss gesperrt sein.
   Passende Vorkenntnisse angeben und die Sitzung starten.
3. Im ersten Inferenz-Beispiel zuerst einen falschen, danach einen richtigen
   Typnamen als String in `result` abgeben. Ergebnis und gespeicherten Attempt prüfen.
4. Seite neu laden: Der Übungsfortschritt bleibt erhalten; ein einzelner Erfolg
   erhöht nicht den mastery-Zähler.
5. Eine Interface- oder readonly-Aufgabe mit falschem Typvertrag abgeben:
   Ein passender Laufzeitwert allein darf nicht genügen.
6. Sichtbare Tests, drei Hinweise und die anschließende Lösungsansicht prüfen.
   Eine Lösung nach Lösungsansicht darf keine selbstständige Leistung ergeben.
7. Eine Laufzeitaufgabe mit Endlosschleife prüfen: Der Vorgang muss abbrechen,
   die Seite muss bedienbar bleiben.
8. Zwischen vorherigen und nächsten Aufgaben wechseln und eine Sitzung beenden.
   Bei erschöpftem Aufgabenangebot muss die tatsächlich gelöste Anzahl erscheinen.
9. Bei verfügbarem JavaScript-Generator den bisherigen JS-Ablauf prüfen:
   Generieren, Code prüfen, Hinweise anzeigen und nächste Aufgabe laden.

Architektur und Betriebsgrenzen stehen in der
[Integrationsdokumentation](typescript-integration.md).
