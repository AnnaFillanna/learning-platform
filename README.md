# Pet — Learning Platform

Pet ist ein persönliches Projekt für eine interaktive Lernplattform für JavaScript
und TypeScript. Im Mittelpunkt stehen praktische Aufgaben, verknüpfte Fähigkeiten
und der Übergang von geführtem Üben zur selbstständigen Anwendung.

**Status: in Entwicklung.** Die TypeScript-Integration ist implementiert und
auf Modul- und API-Ebene getestet. Die vollständige Prüfung im Browser und ein
Deployment-Test stehen noch aus.

## Funktionsumfang

- JavaScript-Training mit Aufgabengenerierung und Codeausführung.
- TypeScript-Karte mit 26 Bereichen und 216 Fähigkeiten, darunter 54 Unterfähigkeiten.
- Abhängigkeiten zwischen JavaScript- und TypeScript-Kenntnissen.
- 18 TypeScript-Aufgaben mit deutschen, englischen und russischen Inhalten.
- Gemeinsamer Aufgabenbildschirm mit Editor, schrittweisen Hinweisen und Lösung auf Abruf.
- Prüfung von TypeScript-Typen sowie Laufzeitverhalten und Grenzfällen.
- Lokale Speicherung von Versuchen und Lernfortschritt im Browser.
- Unterschiedliche Bewertung von Vorkenntnissen, Übungserfahrung und Beherrschung.

Die Skill Map beschreibt auch fortgeschrittene Themen wie Generics, React und
Architektur. Der Aufgabenbestand deckt bisher vor allem die Grundlagen ab;
nicht jeder Bereich besitzt bereits eigene Übungen.

## Technischer Aufbau

React, TypeScript und Vite bilden die Anwendung. Die Oberfläche verwendet CSS.
Die TypeScript-Prüfung nutzt die TypeScript Compiler API auf dem Server und
einen iframe mit Web Worker für die Laufzeitprüfung im Browser.

| Bereich | Verzeichnis |
| --- | --- |
| Oberfläche | `src/components` |
| Skill Maps und Abhängigkeiten | `src/skills` |
| Aufgabenkatalog und Auswahl | `src/learning`, `src/tasks` |
| Versuche und Fortschritt | `src/progress` |
| Codeausführung | `src/runner` |
| TypeScript-API und Compilerprüfung | `api/learning.ts`, `server` |
| Automatisierte Prüfungen | `tests` |

## Lokal starten

Voraussetzungen: Node.js und npm. Der dokumentierte Prüfstand verwendet Node.js 24.
Im Projektverzeichnis:

```sh
npm ci
npm run client
```

Anschließend die von Vite angezeigte lokale Adresse öffnen und **TypeScript**
auswählen. Der Vite-Entwicklungsserver stellt auch die TypeScript-API bereit.
Für dieses Training ist kein externer AI-Dienst erforderlich.

Das JavaScript-Training verwendet einen separaten Generator: lokal auf Port 3001,
im Deployment unter `/api/tasks/generate`. Dieser benötigt `OPENAI_API_KEY`.
Die lokale Serverkonfiguration ist noch unvollständig: `express`, `cors` und `tsx`
werden vom Server verwendet, sind aber derzeit nicht in `package.json` aufgeführt.
`npm run dev` ist deshalb noch kein verifizierter Startweg für eine frische
Installation. Der TypeScript-Start über `npm run client` ist davon unabhängig.

## Prüfungen

```sh
npm test
npm run typecheck
npm run lint
npm run build
```

Der letzte dokumentierte Prüfstand umfasst **78 erfolgreiche Tests** sowie
Typecheck, Lint und Build. Diese Prüfungen ersetzen keinen Browser-End-to-End-Test.
Details und die ausstehenden manuellen Prüfschritte stehen im
[Validierungsbericht](docs/implementation-report.md).

## Lernmodell

Eine Aufgabe kann mehrere Fähigkeiten kombinieren. Vorkenntnisse werden über
Abhängigkeiten geprüft; eine Selbsteinschätzung wird getrennt von nachgewiesener
Beherrschung gespeichert. Ein einzelnes erfolgreiches Beispiel oder viele
Wiederholungen derselben Aufgabe reichen nicht für mastery aus.

Siehe [Skill Map und Datenmodell](docs/typescript-foundation.md) sowie
[Aufgabenprüfung und Fortschritt](docs/typescript-integration.md).

## Nächste Schritte

- Den vollständigen JavaScript- und TypeScript-Ablauf im Browser prüfen.
- Die lokale JavaScript-Serverkonfiguration vervollständigen.
- Compiler-Isolation und Ressourcenbegrenzung für einen öffentlichen Mehrbenutzerbetrieb ergänzen.
- Die Aufgabenabdeckung entlang der vorhandenen Skill Map schrittweise erweitern.
- Den vorgesehenen Vercel-Deployment-Weg prüfen.
