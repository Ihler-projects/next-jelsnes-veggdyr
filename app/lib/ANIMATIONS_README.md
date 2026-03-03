# Animasjoner med Framer Motion

Dette prosjektet bruker Framer Motion for sleeke og profesjonelle animasjoner.

## Tilgjengelige animasjoner

### Fade animasjoner
- `fadeIn` - Enkel fade in
- `fadeInUp` - Fade in fra bunnen
- `fadeInDown` - Fade in fra toppen
- `fadeInLeft` - Fade in fra venstre
- `fadeInRight` - Fade in fra høyre

### Andre animasjoner
- `scaleUp` - Scale opp med fade
- `slideInUp` - Slide inn fra bunnen (for modaler/kort)
- `pageTransition` - For sideoverganger

### Container animasjoner
- `staggerContainer` - Animerer children med forsinkelse
- `staggerContainerFast` - Raskere stagger-effekt

## Bruk

### AnimatedSection komponent
Den enkleste måten å legge til animasjoner:

```tsx
import { AnimatedSection } from './components/AnimatedSection';
import { fadeInUp } from './lib/animations';

<AnimatedSection animation={fadeInUp}>
  <div>Innhold som animeres</div>
</AnimatedSection>
```

### Direkte med motion
For mer kontroll:

```tsx
import { motion } from 'framer-motion';
import { fadeInUp } from './lib/animations';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  Innhold
</motion.div>
```

### Stagger children
For å animere flere elementer etter hverandre:

```tsx
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from './lib/animations';

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div variants={fadeInUp}>Element 1</motion.div>
  <motion.div variants={fadeInUp}>Element 2</motion.div>
  <motion.div variants={fadeInUp}>Element 3</motion.div>
</motion.div>
```

### Hover og tap effekter
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover over meg
</motion.div>
```

## Tips

- Bruk `viewport={{ once: true }}` for å animere kun én gang
- Bruk `viewport={{ margin: "-100px" }}` for å starte animasjonen før elementet er synlig
- Hold animasjonene subtile og raske (0.3-0.6s) for best UX
- Bruk `whileInView` for scroll-baserte animasjoner
