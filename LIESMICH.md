# Pflichthospitationen — eigenständige App

Nachverfolgung der 24 Pflicht-Durchführungen bis zum **17.01.2027**.

## Dateien

- `index.html` — die komplette Anwendung
- `manifest.webmanifest` — Name, Farben, Startverhalten
- `sw.js` — Offline-Cache
- `icon.svg` — App-Symbol (Holstentor)

Alle vier gehören zusammen ins selbe Verzeichnis.

## Schriften

Die App verwendet Grenze und Grenze Gotisch von Google Fonts. Beim **ersten**
Öffnen braucht sie dafür kurz Internet; danach liegen die Schriften im
Offline-Cache. Ohne Internet beim allerersten Start erscheint eine
Ersatzschrift — die App funktioniert trotzdem vollständig.

## Daten

Die Einträge liegen ausschließlich im Speicher des Browsers auf dem jeweiligen
Gerät. Sie gehen nie an GitHub oder an Dritte. Zwei Geräte gleichen sich nicht
ab — leg dich auf ein Gerät als führend fest.

**Sichere regelmäßig per „JSON sichern".** Nach zehn Änderungen ohne Sicherung
erinnert die App daran. Ein geleerter Browser-Cache löscht den Bestand ohne
Vorwarnung.

Auf iOS: Die App über „Zum Home-Bildschirm" installieren und über das Symbol
öffnen, nicht über ein Lesezeichen. Safari löscht Website-Daten sonst nach
sieben Tagen ohne Besuch; installierte Web-Apps sind davon ausgenommen.

## Wie gezählt wird

- Nur Einträge mit Status „absolviert" zählen in den Fortschritt.
- Die Anrechnung ist pro Kategorie und Unterthema auf das Soll gedeckelt.
  Überschüsse werden ausgewiesen, aber nicht mitgezählt.
- Bei den Kategorien C und D zählen nur **unterschiedliche** Themen.
- Geplante Termine erscheinen als blasse Ziegel und in der Planungslage,
  nicht im Prozentwert der absolvierten Durchführungen.
- Der bisherige Schnitt wird erst ab drei datierten Einträgen berechnet.
  Darunter wäre er eine Zufallszahl.
