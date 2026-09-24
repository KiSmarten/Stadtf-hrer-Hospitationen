# Auf GitHub Pages veröffentlichen

Kein Git, kein Terminal, keine Installation. Alles im Browser, am besten am Rechner.

## Einmalig einrichten (ca. 10 Minuten)

1. **Konto anlegen** auf github.com, falls noch keines vorhanden. Kostenlos.

2. **Repository erstellen**
   - Oben rechts auf **+** → **New repository**
   - Name: z. B. `hospitationen`
   - Sichtbarkeit: **Public** (bei Free-Konten ist das für Pages nötig)
   - **Create repository**

3. **Dateien hochladen**
   - Auf der neuen Seite: **uploading an existing file**
   - Die vier Dateien aus dem ZIP hineinziehen:
     `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`
   - Wichtig: die Dateien einzeln hochladen, nicht das ZIP
   - Unten **Commit changes**

4. **Pages einschalten**
   - Reiter **Settings** → linke Spalte **Pages**
   - Unter *Source*: **Deploy from a branch**
   - Branch: **main**, Ordner: **/ (root)** → **Save**

5. **Warten und öffnen**
   - Nach ein bis zwei Minuten erscheint oben die Adresse:
     `https://DEINNAME.github.io/hospitationen/`
   - Die Adresse ist öffentlich erreichbar. Sie enthält keine Daten,
     nur das Programm. Deine Einträge bleiben auf deinem Gerät.

## Aufs Handy holen

- Adresse im Handy-Browser öffnen
- **iPhone (Safari):** Teilen-Symbol → *Zum Home-Bildschirm*
- **Android (Chrome):** Menü ⋮ → *App installieren* bzw. *Zum Startbildschirm hinzufügen*

Danach startet die App im Vollbild, läuft ohne Internet und speichert zuverlässig.

## Eine neue Fassung einspielen

Im Repository auf `index.html` klicken, Stift-Symbol, gesamten Inhalt
ersetzen, *Commit changes*. Oder **Add file → Upload files** und die neue
Datei hineinziehen.

Danach ein bis zwei Minuten warten und die Seite **hart neu laden**. Auf dem
Handy: Tab schließen und neu öffnen, bei installierter App diese beenden und
neu starten. Der Offline-Cache hält sonst die alte Fassung fest.

## Wenn sich etwas ändern soll

Im Repository auf `index.html` klicken → Stift-Symbol → bearbeiten → *Commit changes*.
Oder die Datei erneut hochladen und *Replace* bestätigen.
Nach dem Ändern in der App einmal neu laden; der Offline-Cache erneuert sich
beim nächsten Start.

## Was das nicht löst

Zwei Geräte gleichen sich nicht ab. Wer auf Handy und Rechner erfasst, muss
per JSON-Export und -Import abgleichen, und der Import ersetzt den Bestand,
er führt nicht zusammen. Entscheide dich für ein Gerät als führend.
