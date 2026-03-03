# Veggdyrsøk med Hund

En minimalistisk og profesjonell hjemmeside for søk med hund etter veggdyr.

## Funksjoner

- ✅ Responsive design (mobil, tablet, desktop)
- ✅ Dark/Light mode med sømløs overgang
- ✅ Sentralisert fargestyring i globals.css
- ✅ SEO-optimalisert med metadata
- ✅ Separate sider for:
  - Hjem
  - Om oss
  - Målgrupper (hotell, institusjoner, private, eiendomsforvaltning)
  - Tjenester
  - Kontakt
- ✅ Sticky navigasjon med mobilmeny
- ✅ Placeholder-bilder som kan byttes ut

## Kom i gang

1. Installer avhengigheter:
```bash
npm install
```

2. Start utviklingsserver:
```bash
npm run dev
```

3. Åpne [http://localhost:3000](http://localhost:3000) i nettleseren

## Theme Toggle

Applikasjonen har innebygd dark/light mode med:
- Automatisk deteksjon av systempreferanse
- Lagring av brukerens valg i localStorage
- Sømløs overgang uten flash
- Alle farger styres fra ett sted: `app/globals.css`

## Bytte ut bilder

Erstatt følgende placeholder-bilder i `/public` mappen:

- `dog-search.jpg` - Søkehund i aksjon (brukes på forsiden)
- `team-dog.jpg` - Team med søkehund (brukes på Om oss-siden)
- `bedbug.jpg` - Veggdyr (brukes på Tjenester-siden)

Anbefalt bildestørrelse: 1200x800px eller større for best kvalitet.

## Tilpasning

### Farger

Alle farger styres fra `app/globals.css`. Endre CSS-variablene for å tilpasse fargeskjemaet:

```css
/* Light mode - Varme, innbydende farger */
:root {
  --background: #fafaf9;     /* Hovedbakgrunn */
  --foreground: #1c1917;     /* Hovedtekst */
  --primary: #d97706;        /* Varm oransje - profesjonell og hjelpende */
  --primary-hover: #ea580c;  /* Hover-tilstand for primærknapper */
  --secondary: #f5f5f4;      /* Sekundær bakgrunn */
  --card-bg: #ffffff;        /* Kortbakgrunn */
  --muted: #78716c;          /* Dempet tekst */
  --border: #e7e5e4;         /* Kantlinjer */
}

/* Dark mode - Mykere, mer behagelige farger */
.dark {
  --background: #1c1917;
  --foreground: #fafaf9;
  --primary: #fb923c;        /* Myk oransje for dark mode */
  --primary-hover: #fdba74;  /* Hover-tilstand */
  --secondary: #292524;
  --card-bg: #292524;
  --muted: #a8a29e;
  --border: #44403c;
}
```

Alle komponenter bruker disse variablene automatisk, så endringer oppdateres overalt.

### Kontaktinformasjon

Oppdater kontaktinformasjonen i `app/kontakt/page.tsx`:
- Telefonnummer
- E-postadresse
- Adresse
- Åpningstider

### Firmanavn

Endre "Veggdyrsøk" i `app/components/Navigation.tsx` og `app/layout.tsx`

## Teknologi

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion (animasjoner)
- CSS Variables for theme system
- Inter (body text) & Outfit (headings) fonts
- Responsive design

## Bygg for produksjon

```bash
npm run build
npm start
```

## SEO

Alle sider har optimalisert metadata for søkemotorer:
- Titler og beskrivelser
- Open Graph tags
- Norske søkeord
- Semantisk HTML

## Lisens

Privat prosjekt
