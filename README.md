[LIESMICH.md](https://github.com/user-attachments/files/31940429/LIESMICH.md)
# Pflichthospitationen — eigenständige App

## Variante 1: einfach die Datei öffnen
`index.html` auf das Gerät legen und im Browser öffnen. Läuft ohne Internet,
ohne Konto, ohne Server. Die Daten liegen im Speicher des jeweiligen Browsers.

Einschränkung: Beim Öffnen als lokale Datei (`file://`) behandeln manche Browser
den Speicher unzuverlässig — iOS Safari löscht ihn teilweise beim Schließen des
Tabs. Auf Android/Chrome und auf dem Desktop funktioniert es stabil. Sichere in
jedem Fall regelmäßig per "JSON sichern".

## Variante 2: als Web-App aufs Handy (empfohlen)
Alle vier Dateien auf einen beliebigen Webspace mit HTTPS legen, z. B.
GitHub Pages, Netlify Drop oder eigener Server. Dann:

1. Adresse im Handy-Browser öffnen
2. Menü → "Zum Startbildschirm hinzufügen"

Danach startet die App im Vollbild ohne Browserleiste, läuft offline
(Service Worker cacht alles) und speichert zuverlässig. Kein App-Store nötig.

## Dateien
- `index.html` — die komplette Anwendung, keine externen Abhängigkeiten
- `manifest.webmanifest` — Name, Farben, Startverhalten
- `sw.js` — Offline-Cache
- `icon.svg` — Symbol

## Daten mitnehmen
"JSON sichern" erzeugt eine Datei mit allen Einträgen. "JSON laden" stellt sie
wieder her — auch auf einem anderen Gerät oder in der Claude-Version.
Beide Fassungen nutzen dasselbe Format.
