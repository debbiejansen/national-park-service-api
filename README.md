# National Park Service

## Inhoudsopgave
1. Inleiding
2. Benodigdheden
3. Applicatie starten
4. Inloggegevens
5. Gebruikte technieken

## Inleiding

Je bent op zoek naar leuke Nationale Parken in Amerika om in de toekomst te bezoeken. Er zijn er zoveel dat het soms lastig 
is het overzicht te bewaren. Sommige parken heb je al eens bezocht, of toch juist niet? En was dat juist een park waar je nog 
heen wilde? Collega's hebben je ook nog parken aangeraden om te bezoeken. 

Op deze manier zie je door de bomen het Nationale Park niet meer. Tijd voor een eigen account met overzicht van welke parken 
je nu wel al eens geweest bent, en welke je in je favorieten wilt zetten om later te bezoeken. 
Er zijn bijna 500 Nationale Parken om te bezoeken, meer dan genoeg keuze! Elke keer dat je de API bezoekt staan er andere parken 
op de homepage. Uiteraard kun je ook zelf filteren per Amerikaanse staat wat je leuk lijkt.

### Belangrijkste functionaliteiten
1. Inloggen
2. Favorieten toevoegen
3. Bezocht overzicht beheren
4. Filteren

![screenshot](src/assets/Homepage_screenshot.png)

## Benodigdheden
Om deze applicatie te kunnen starten is het volgende nodig:
- De broncode gecloned van deze github naar je eigen omgeving
- Een `.env` bestand met daarin de `VITE_NOVI_API_KEY` en de `VITE_NPS_API_KEY`
  - Plaats dit bestand in je root folder, dus in `national-park-service-api/.env`
- Een `users-NPS.json` bestand met daarin de pre-configured gebruikers 
  - Voor het opslaan van de users is er gebruik gemaakt van de Novi Dynamic API, hiervoor is een eigen .JSON bestand gemaakt waar 2 user accounts zijn gezet.
  Upload dit bestand in de omgeving voor de NOVI Dynamic API: https://novi-backend-api-wgsgz.ondigitalocean.app/

## Applicatie starten

Als je het project hebt gecloned naar jouw lokale machine, installeer je eerst de `node_modules` door het volgende
commando in de terminal te runnen:

```shell
npm install
```

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

```shell
npm run 
```

Open http://localhost:5173 om de pagina in de browser te bekijken.


## Inloggegevens

Er is een afgeschermde profielpagina aangemaakt waar gegevens opgeslagen kunnen worden. Om daarbij te komen, moet er uiteraard wel eerst ingelogd worden. Hiervoor zijn twee users aangemaakt, hieronder staan de inloggegevens voor je eigen omgeving. Let wel op dat de hoofdletters goed staan.

```shell
Emailadres: nova@novi.nl
Wachtwoord: WachtwoordNova
```
& 
```shell
Emailadres: terri@novi.nl
Wachtwoord: WachtwoordTerri
```

# Andere commando's
Naast het starten van de applicatie zijn de volgende scripts beschikbaar in dit project:

### Build voor productie
Om een geoptimaliseerde versie van de applicatie te bouwen voor productie, run je:

```shell
npm run build
```
De bestanden worden gegenereerd in de dist/ map.

### Preview van de build
Wil je de productie-build lokaal testen voordat je deze live zet? Gebruik dan:

```shell
npm run preview
```
### Linting
Om de code te controleren op syntaxfouten en styling volgens de standaard regels:

```shell
npm run lint
```
## Functionaliteiten van de App
Dynamische Homepage: Elke keer dat je de app ververst, haalt de NPS API een willekeurige selectie van parken op.

Filteren op Staat: Gebruik de zoekfunctie om specifiek te zoeken naar parken in bijvoorbeeld Californië of Alaska.

Favorieten Systeem: Voeg parken toe aan je persoonlijke lijst (vereist inloggen).

Bezochte Parken: Houd een logboek bij van locaties waar je al bent geweest (vereist inloggen).

Authenticatie: Beveiligde routes die enkel toegankelijk zijn met een geldig Novi-account.

## Gebruikte technieken en frameworks
- React (met Vite)
- React Router (voor navigatie)
- Axios (voor API requests)
- Context API (voor globaal state management van de user-status)
- NPS API (National Park Service data)
- NOVI Dynamic API (User management & opslag)
