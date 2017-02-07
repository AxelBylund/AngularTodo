# Karma example repo

I detta repository finns en färdig `config` för att köra tester via Karma. **De steg nedan har alltså redan körts och filerna nödvändiga för att köra karma finns redan tillgängliga men man måste ändå installera alla dependencies med `npm install`.** Sen borde man kunna köra med tester med `npm test`.

Testerna körs i detta repo med _Jasmine_ men de flesta andra test-ramverk, _assertion libraries_ samt andra eventuella testverktyg kan integreras med Karma. Det finns ett npm-paket till de flesta integrationerna.

*[https://karma-runner.github.io/1.0/index.html](https://karma-runner.github.io/1.0/index.html)

## Steg för installation

För att kunna köra själva Karma kommandot via terminalen måste man installera Karma globalt först för att det ska kunna köras via kortkommandot `karma`:

```bash
npm install -g karma-cli
```

För att sedan installera Karma till ditt projekt/mapp där du ska köra tester behöver du installera vissa dependencies. Du måste först köra `npm init` för att skapa en `package.json`. Sedan måste du installera karma-dependencies:

```bash
npm install --save-dev karma
npm install --save-dev karma-jasmine
npm install --save-dev jasmine
npm-install --save-dev karma-chrome-launcher

```

Eller mer komprimerat:

```bash
npm i --save-dev karma karma-jasmine jasmine karma-chrome-launcher
```

Eller [Yarn](https://yarnpkg.com/en/docs/cli/)? :O

```bash
npm install -g yarn
yarn add --dev karma karma-jasmine jasmine karma-chrome-launcher
```

## Karma init

För att köra karma behöver man ha en config-fil. Den kan skapas automatiskt av karma själv om man kör kommandot:

```
karma init
```

Här blir man frågad en rad frågor om vilka inställningar som man vill ha för testningen. Ungefär som när man kör en `npm init`. Om det är något som blir fel här kan man lätt åtgärda det genom att ändra i filen `karma.conf.js` som har skapats i root-mappen.

Alternativt behöver du lägga till dina dependencies som plugins någonstans i config-filen eftersom den inte gör det automatiskt och detta kan ställa till problem. I din `karma.conf.js` behöver du lägga till följande inlägg:

```js
plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'  
      ]
```

I plugins är det bra att lägga till varje plugin man installerar. Om man t.ex. vill ha en annan webbläsare att kolla koden i kan man installera firefox-launcher som startar just Firefox instället för Chrome:

```bash
npm install --save-dev karma-firefox-launcher
```

Och då måste även den inkluderas i `plugins`:

```js
plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
      ]
```


### Inkludera filer

Alla filer som ska testas läggs i `src`-mappen, våra källfiler. Alla tester som ska köras läggs i `specs`-mappen. Hur Karma vet vilka filer som ska köras definierar vi i `karma.conf.js`:

```js
files: [
        './src/*.js',
        './spec/*.js'
    ]
```

Här kan vi lägga till specifika filer som `main.js` eller lägga till wildcards för att kolla efter flera olika filer: `src/*.js` eller `spec/**/*.js`.

### Ha det så kult med testningen!

