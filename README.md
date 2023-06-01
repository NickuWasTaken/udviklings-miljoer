# Udviklingsmiljøer Eksamen
## Git
***Går ud fra du kan uploade til github? :)***

## Refactoring:
### Linting:
Arbejder man i et Vue projekt med linting er det så nemt som at kører linting scriptet i ens GitHub Action workflow <br>
Actionen kan findes under `📁refactoring` i filen `📄 linting.yml`

Kræves der der skal installeres Linting i projektet?
```
npm init @eslint/config
```
### Qodana:
Installér Scoop og Qodana, følg derefter guiden til 
Komplet guide kan findes på: <br>
https://www.jetbrains.com/help/qodana/quick-start.html#quickstart-analyze-project-locally
https://www.jetbrains.com/help/qodana/github.html#Basic+configuration
[https://www.jetbrains.com/help/qodana/github.html](https://www.jetbrains.com/help/qodana/github.html#Qodana+Cloud)

## Unit-test:
Installer Vue Test utils og Jest <br>
```
npm install --save-dev jest @vue/test-utils
```
Lav en ny mappe i root directory som hedder `📁tests` <br>
Lav nu en mappe i tests kaldet `📁unit` <br>
Lav nu en fil i `📁unit` kaldet `📄 unit.spec.js` <br>
Actionen kan findes under `📁refactoring` i filen `📄 unit-test.yml`

<sub>Alternativt kan du downloade filerne i projektet</sub>

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

Tilføj `📄 E2E.yml` til GitHub Action

Hent mappen i projektet kaldet `📁scripts` og tilføj den til root directory
```
npm i serve
```
Hent filen i projektet ved navn `📄 serve.js` og tilføj filen til root directory

Angiv sti i serve.json under "public:"
