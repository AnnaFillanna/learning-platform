# Aufgabenprüfung und Lernfortschritt

## Ablauf

1. Die Oberfläche lädt den TypeScript-Katalog über `/api/learning`.
2. Die Auswahl prüft die Voraussetzungen gegen den aktuellen Lernstand.
3. Der gemeinsame `TaskScreen` zeigt Editor, Aufgabeninhalt und sichtbare Tests.
4. Der Server prüft eingereichten Code und Typverträge mit dem TypeScript-Compiler.
5. Nach erfolgreicher Kompilierung führt der Browser die Laufzeitprüfungen aus.
6. Das Ergebnis wird als Attempt gespeichert. Daraus entstehen Progress und
   die Auswahl der nächsten geeigneten Aufgabe.

Sitzungen umfassen bis zu 5, 10 oder 15 Aufgaben. Sind vorher keine geeigneten
Aufgaben mehr verfügbar, endet die Sitzung mit der tatsächlichen Anzahl gelöster
Aufgaben. Der bestehende JavaScript-Loader behält seinen Prefetch-Ablauf;
TypeScript wählt erst nach dem aktuellen Ergebnis die nächste Aufgabe.

## API und Aufgabenansicht

`api/learning.ts` verwendet denselben Handler wie die lokale Vite-Anbindung.
Die POST-Aktionen sind:

| Aktion | Eingabe | Antwort |
| --- | --- | --- |
| `catalog` | Keine weiteren Felder | Aufgaben ohne `solution` und `hiddenTests` |
| `check` | `taskId`, `code` | Diagnosen oder ein vorbereitetes Laufzeitprüfprogramm |
| `solution` | `taskId` | Die Referenzlösung der Aufgabe |

Die Oberfläche zeigt Hinweise schrittweise und bietet die Lösung nach dem
Öffnen aller Hinweise an. Diese Reihenfolge ist ein Lernablauf im UI, keine
serverseitige Zugriffssperre für die Lösungs-API.

Die drei Sprachen DE/EN/RU teilen sich Geschäfts- und Codedaten. Übersetzt werden
Aufgabenbeschreibung, Hinweise und Oberflächentexte. Compilermeldungen behalten
die Ausgabe des TypeScript-Compilers.

## TypeScript-Prüfung

`server/typescriptCheck.ts` prüft mit `strict=true` und Ziel ES2022. Neben
positiven Typverträgen gibt es negative Tests mit `@ts-expect-error` in den
vertrauenswürdigen Prüfdaten. Solche Compiler-Unterdrückungsdirektiven sind in
Benutzereingaben nicht zulässig.

Die aktuellen Starteraufgaben erlauben maximal 20.000 Zeichen und keine externen
Imports oder Dateireferenzen. Künftige Aufgaben auf Module oder React benötigen
eine dafür erweiterte Compilerumgebung. Diagnosen aus versteckten Typverträgen
werden allgemein formuliert; Diagnosen im eingereichten Code enthalten Positionen.

Benutzercode wird auf dem Server kompiliert, aber dort nicht ausgeführt.
Laufzeitprüfungen verwenden einen iframe mit `sandbox="allow-scripts"` und einem
Worker. Eine Content Security Policy untersagt Netzwerkverbindungen. Nachrichten
werden anhand des iframe-Absenders und eines zufälligen nonce geprüft. Die
vorgesehene Laufzeitgrenze beträgt zwei Sekunden.

Startet die Ausführungsumgebung nicht oder ist die API nicht erreichbar, wird
keine falsche Fehlversuchsaufzeichnung erzeugt. Ein Timeout nach Worker-Start
wird als Laufzeitfehler gewertet. Bei Abschluss werden iframe und Listener entfernt.

**Prüfgrenze:** Der Worker-/CSP-Ablauf wurde noch nicht in einem realen Browser
end-to-end bestätigt. Die vorhandenen Lifecycle-Tests verwenden eine DOM-Nachbildung.

## Speicherung und mastery

Attempts verwenden den bestehenden Local-Storage-Schlüssel `pet-attempts`.
Ältere JavaScript-Einträge bleiben lesbar. Neue Attempt-IDs vermeiden doppelte
Aufzeichnungen derselben Übermittlung. Selbsteinschätzungen liegen separat in
`pet-placement-v1`. Fehlerhafte oder nicht verfügbare Speicherung wird behandelt
und im UI gemeldet.

Der Fortschritt wird aus den gespeicherten Attempts abgeleitet. Drei Zustände
bleiben getrennt:

- `placementSkillIds`: selbst angegebene Vorkenntnisse;
- `practicedSkillIds`: erfolgreich geübt, ohne eine Lösung anzusehen;
- `masteredSkillIds`: Anforderungen an Beherrschung pro Dimension erfüllt.

Vorkenntnisse und Übungserfahrung können weitere Praxis ermöglichen, erhöhen
aber nicht den mastery-Zähler. Für mastery verlangt jede relevante Dimension
Erfolge ohne Hinweise und ohne Lösungsansicht in independent, mixed, transfer
und delayed practice. Erforderlich sind mindestens vier verschiedene Aufgaben,
drei Kontexte und eine Wiederholung mit mindestens sieben Tagen Abstand.
Die jüngste Bewertung der Dimension muss erfolgreich sein.

Wiederholung wird sieben Tage nach dem letzten Erfolg fällig. Ein weiterer
Erfolg verschiebt diesen Termin. Diese anfängliche Politik verhindert, dass
viele identische Übungen Beherrschung vortäuschen. Der kleine Aufgabenbestand
deckt noch nicht alle notwendigen Stadien und Dimensionen jedes Skills ab.

## Betrieb und Grenzen

Lokal stellt `npm run client` neben der Oberfläche auch die TypeScript-API bereit.
Die geplante Vercel-Funktion benötigt TypeScript zur Laufzeit; ihre Standardbibliotheken
sind über `vercel.json` eingeschlossen. Das Deployment ist noch nicht verifiziert.

Laufzeittests gelangen erst bei einer Prüfung zum Browser. Sie erscheinen nicht
im Aufgaben-UI, sind aber über Entwicklertools einsehbar. Die Anwendung ist für
persönliches Üben ausgelegt, nicht für Prüfungen mit geheimen Testfällen oder
manipulationssicherer Bewertung.

Der Compiler arbeitet synchron. Für einen öffentlichen Mehrbenutzerbetrieb fehlen
separate Compiler-Isolation, Ressourcenlimits und Lastbegrenzung. Die Laufzeitgrenze
des Workers begrenzt nicht die Dauer der Kompilierung. Auch lokale Fortschrittsdaten
sind keine serverseitig bestätigten Leistungsnachweise.

Die [Validierungsübersicht](implementation-report.md) beschreibt die bereits
geprüften Teile und den noch offenen Browser-Prüfablauf.
