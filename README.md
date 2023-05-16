# udviklings-miljøer-eksamen
Går ud fra du kan uploade til github? :)

##Refactoring:
###Linting:
Arbejder man i et Vue projekt med linting er det så nemt som at kører linting scriptet (projektets CLI Kommando) i ens GitHub Action workflow
Kræves der der skal installeres Linting i projektet?
```
cmd: npm init @eslint/config
open ./node_modules/.bin/eslint yourfile.js
```
###Qodana:
Komplet guide kan findes på:
https://www.jetbrains.com/help/qodana/github.html

##Unit-test:
Installer Vue Test utils og Jest

cmd: npm install --save-dev jest @vue/test-utils
Lav en ny mappe i root directory som hedder tests
Lav en mappe i tests kaldet unit
Lav en fil i unit kaldet unit.spec.js

Info:
https://test-utils.vuejs.org/installation/
https://test-utils.vuejs.org/guide/advanced/v-model.html

##E2E Test:
Installer Cypress:
```npm i cypress --save-dev"```
launch cypress:
```./node_modules/.bin/cypress open```
Start ny spec for korrekt mappe struktur

Tilføj Workflow som GitHubActions

Tilføj Scripts til root Folder
```
npm i serve
```
Tilføj Serve.json til root Folder
Angiv sti i serve.json under "public:"
