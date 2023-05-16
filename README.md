# Udviklingsmiljøer Eksamen
## Git
***Går ud fra du kan uploade til github? :)***

## Refactoring:
### Linting:
Arbejder man i et Vue projekt med linting er det så nemt som at kører linting scriptet (projektets CLI Kommando) i ens GitHub Action workflow

Kræves der der skal installeres Linting i projektet?
Kør kommandoerne:
```
npm init @eslint/config
```
### Qodana:
Komplet guide kan findes på: <br>
https://www.jetbrains.com/help/qodana/github.html

## Unit-test:
Installer Vue Test utils og Jest
Med kommandoerne:
```
npm install --save-dev jest @vue/test-utils
```
Lav en ny mappe i root directory som hedder tests <br>
Lav nu en mappe i tests kaldet unit <br>
Lav nu en fil i unit kaldet unit.spec.js

<sub>Alternativt kan du uploade filerne i projektet</sub>

Ekstra info findes på: <br>
https://test-utils.vuejs.org/installation/ <br>
https://test-utils.vuejs.org/guide/advanced/v-model.html 

## E2E Test:
Installer Cypress:
```
npm i cypress --save-dev
```
Launch Cypress:
```
./node_modules/.bin/cypress open
```
Start ny spec for korrekt mappe struktur

Tilføj Workflow.txt som GitHub Action

Hent mappen i projektet kaldet `scripts` og tilføj den til /rootDir
```
npm i serve
```
Hent filen i projektet ved navn `serve.js` og tilføj filen til /rootDir

Angiv sti i serve.json under "public:"
