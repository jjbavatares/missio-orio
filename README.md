# Missió Orió

Escape room de nombres naturals per a primer d’ESO. Aplicació estàtica en català, preparada per a GitHub Pages i per a ordinadors portàtils.

## Regles

- Treball individual amb paper i llapis, sense calculadora.
- 45 minuts, a partir de l’inici de la primera prova. El rellotge continua amb les pistes, les solucions i les celebracions.
- Primer error: pista 1. Segon error: pista 2. Tercer error: solució explicada i prova fallida.
- Un encert amb pistes també compta com a correcte.
- Les preguntes amb diversos camps compten com una sola prova i cal encertar tots els camps.
- 8 encerts de 12 permeten aterrar. Amb menys encerts, el coet es bolca i explota.
- Si s’esgota el temps, la missió falla immediatament.
- No es desa el progrés. Tancar o recarregar obliga a començar de nou.

## Fitxers

`index.html`, `styles.css`, `app.js`, `engine.mjs`, `audio.mjs`, `data.mjs` i `assets/` formen el joc. Les imatges originals es generen amb l’eina integrada de generació d’imatges; els encàrrecs es conserven a `assets/prompts.json`.

## Publicació

Publicar el contingut d’aquesta carpeta en un repositori de GitHub. A la configuració de Pages, seleccionar la branca `main` i la carpeta arrel. Els camins relatius permeten servir el joc des d’un subdirectori de GitHub Pages.

## Comprovació

Executar `node tests.mjs` per verificar intents, pistes, marcador, reinici, format de resposta i temps límit. Per provar el navegador, servir aquesta carpeta amb un servidor HTTP local.

Les respostes es validen al navegador. El joc és una activitat de pràctica, no un examen amb protecció contra la consulta del codi.
