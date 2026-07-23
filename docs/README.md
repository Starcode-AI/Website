# Starcode BOM Link Hub

Fertige statische Website für GitHub Pages im Repository-Ordner `/docs`.
Kein Build und keine Installation nötig.

## Veröffentlichung

1. Den kompletten Ordner `docs` in dein GitHub-Repository hochladen.
2. Unter **Settings → Pages** den Branch `main` und den Ordner `/docs` wählen.
3. Warten, bis GitHub die fertige URL anzeigt.

Alle Assets werden ausdrücklich relativ mit `./assets/...` geladen. Dadurch
funktionieren CSS, JavaScript, Logo und Favicon auch innerhalb von `/docs`.

## Links bearbeiten

Alle Links liegen in `assets/js/config.js`. `url: null` bedeutet: Die Karte wird angezeigt, öffnet aber noch keinen Link. Dort müssen nur noch der echte Discord-Einladungslink und PayPal.me-Link ergänzt werden. Die Bitcoin-Adresse ist bereits als `bitcoin:`-Link eingetragen. Bitte außerdem prüfen, ob das AI-System-Repository wirklich `https://github.com/hackerIP54/AI-system` heißt.

Texte/Übersetzungen: `assets/js/translations.js`  
Farben: `assets/css/tokens.css`  
Logo: `assets/img/logo.svg`
