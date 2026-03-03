# Instruksjoner for bilder

## Bilder som må byttes ut

Følgende placeholder-filer må erstattes med dine egne bilder:

### 1. dog-search.jpg
- **Plassering**: Forsiden (hero section)
- **Beskrivelse**: Søkehund i aksjon under veggdyrsøk
- **Anbefalt størrelse**: 1200x800px eller større
- **Format**: JPG, PNG eller WebP
- **Tips**: Bruk et profesjonelt bilde som viser hunden i arbeid

### 2. team-dog.jpg
- **Plassering**: Om oss-siden
- **Beskrivelse**: Team/personale sammen med søkehund
- **Anbefalt størrelse**: 1200x800px eller større
- **Format**: JPG, PNG eller WebP
- **Tips**: Vis teamet ditt for å bygge tillit

### 3. bedbug.jpg
- **Plassering**: Tjenester-siden
- **Beskrivelse**: Bilde av veggdyr (kan være illustrasjon)
- **Anbefalt størrelse**: 1200x800px eller større
- **Format**: JPG, PNG eller WebP
- **Tips**: Bruk et tydelig bilde som viser hva dere søker etter

## Slik bytter du bildene

1. Finn dine egne bilder
2. Gi dem samme filnavn som placeholder-filene
3. Erstatt filene i `/public` mappen
4. Bildene vil automatisk vises på nettsiden

## Bildekvalitet

- Bruk høyoppløselige bilder (minimum 1200px bredde)
- Optimaliser bildene før opplasting (bruk verktøy som TinyPNG)
- Unngå for store filer (maks 500KB per bilde)
- Bruk JPG for fotografier, PNG for grafikk med gjennomsiktighet

## Alternativ: Bruk andre filnavn

Hvis du vil bruke andre filnavn, oppdater følgende filer:

- `app/page.tsx` - linje med `/dog-search.jpg`
- `app/om-oss/page.tsx` - linje med `/team-dog.jpg`
- `app/tjenester/page.tsx` - linje med `/bedbug.jpg`
