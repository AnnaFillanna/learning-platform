# Skill Map und Datenmodell

Pet verbindet JavaScript- und TypeScript-Fähigkeiten in einem gemeinsamen
Abhängigkeitsgraphen. Aufgaben, Versuche und Fortschritt verwenden gemeinsame
Modelle; TypeScript besitzt keinen separaten Learning Engine.

## Struktur

```text
Programming Language → Section → Skill → Subskill
```

Die TypeScript-Karte umfasst 26 Bereiche mit 162 Skills und 54 Subskills.
Konkrete Fähigkeiten besitzen stabile `ts-...`-IDs. `parentSkillId` beschreibt
die Hierarchie, `prerequisites` beschreibt die Lernvoraussetzungen. Der
übergeordnete Skill eines Subskills gehört ebenfalls zu dessen Voraussetzungen.

Der Registry-Validator prüft eindeutige IDs, existierende Verweise, gültige
Elternbeziehungen und Zyklen. JavaScript-Fähigkeiten dürfen nicht von TypeScript
abhängen. Für TypeScript sind Verweise auf vorhandene JavaScript-Fähigkeiten zulässig.

## JavaScript-Anbindung

Die JavaScript-Karte adaptiert zehn vorhandene Lernblöcke und das bestehende
Aufgabenthema `js-arrays-filtering`. Die bisherigen IDs bleiben erhalten.
Die Prozentwerte der älteren JavaScript-Übersicht sind Demonstrationsdaten und
werden nicht als Beleg für Beherrschung übernommen.

| JavaScript-ID | TypeScript-Anwendung |
| --- | --- |
| `basics` | Grundlagen und weitere Fähigkeiten über transitive Abhängigkeiten |
| `arrays` | Typisierte Arrays, Tupel und Sammlungen |
| `objects` | Objektmodelle und verschachtelte Daten |
| `functions` | Funktionstypen, Callbacks und React |
| `logic-loops` | Narrowing und Fehlerbehandlung |
| `dom` | DOM-Typisierung |
| `events-forms` | Events, FormData und Event Bus |
| `async-api` | Promises, API-Typen und asynchrone Funktionen |
| `modules-oop` | Module, Klassen und instanceof |
| `js-arrays-filtering` | Gemischte Aufgaben und Transformation von API-Daten |

`strings-data` bleibt Bestandteil der JavaScript-Karte. Für React gibt es noch
keine eigene JavaScript-Skill-Map. Entsprechende Vorkenntnisse stehen daher in
`assumedKnowledge` und werden als `missingKnowledge` ausgewiesen, solange sie
nicht bestätigt sind. Sie sollen später durch echte Skill-Verweise ersetzt werden.

## Aufgaben

Die gemeinsame `Task` enthält Sprache, Aufgabentyp, mehrere `topics`, Schwierigkeit,
Inhalt, Startercode und Prüfdaten. Zusätzliche Lernmetadaten bleiben für ältere
JavaScript-Aufgaben optional; der TypeScript-Katalog verlangt vollständige Angaben.

Die 18 TypeScript-Aufgaben besitzen jeweils:

- Inhalte auf Deutsch, Englisch und Russisch;
- drei schrittweise Hinweise;
- gemeinsame Geschäfts- und Codedaten ohne sprachliche Duplikation;
- getrennte sichtbare und versteckte Tests;
- Voraussetzungen, Lernstadium, Kontext und Bewertungsdimensionen.

Die Schwierigkeit gehört zur Aufgabe, nicht zum Skill. Beispielsweise kann ein
Interface in einer einfachen Deklarationsaufgabe und in einer anspruchsvolleren
Datenverarbeitung vorkommen.

## Lernstadien und Dimensionen

Die Stadien reichen von `recognition` und `guided-practice` über
`independent-usage`, `mixed-practice` und `transfer-to-real-application` bis zu
`delayed-repetition`.

Fortschritt lässt sich getrennt nach Syntax, Modellierung, Inferenz, Narrowing,
Generics, Fehlerverständnis, JS/TS-Kombination, API-Typisierung, React-Typisierung
und Architektur erfassen. Die konkrete Fortschrittspolitik ist in der
[Integrationsdokumentation](typescript-integration.md) beschrieben.

## Wichtige Module

| Modul | Aufgabe |
| --- | --- |
| `src/skills/registry.ts` | Gemeinsamer Graph, Validierung und transitive Voraussetzungen |
| `src/skills/javascriptSkillMap.ts` | Adapter der vorhandenen JavaScript-IDs |
| `src/skills/typescriptSkillMap.ts` | TypeScript-Fähigkeiten und Hierarchie |
| `src/learning/catalog.ts` | Gemeinsamer Autorenkatalog |
| `src/learning/validateTasks.ts` | Prüfung der Aufgabenmetadaten |
| `src/learning/nextTask.ts` | Voraussetzungen und Auswahl geeigneter Aufgaben |
| `src/types/learning.ts` | Tests, Evidence, Progress und Snapshot |

Der Autorenkatalog enthält auch Lösungen und versteckte Prüfungen. Er wird nicht
direkt in die TypeScript-Oberfläche importiert. Der öffentliche Katalog wird
serverseitig daraus abgeleitet.
