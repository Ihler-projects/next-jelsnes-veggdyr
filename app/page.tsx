'use client';

import { Button } from "./components/Button";
import { motion } from "framer-motion";
import { AnimatedSection } from "./components/AnimatedSection";
import { ImageCarousel } from "./components/ImageCarousel";
import { fadeInUp, staggerContainer, scaleUp } from "./lib/animations";

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }} className="transition-colors duration-300">
      {/* Hero Section - Minimalist and centered */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="transition-colors" style={{ color: 'var(--foreground)' }}>
              Veggdyrsøk med hund
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl mb-10 transition-colors max-w-2xl mx-auto"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Profesjonell deteksjon med trente søkehunder. Raskt, diskret og effektivt.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="/kontakt">
              Kontakt oss
            </Button>
            <Button href="/tjenester" variant="secondary">
              Les mer
            </Button>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-sm transition-colors"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Sertifiserte søkehunder</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Rask respons</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Diskret service</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ImageCarousel />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 transition-colors" style={{ color: 'var(--foreground)' }}>
                Hvorfor velge meg?
              </h2>
              <p className="text-lg transition-colors max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
                Enkel, effektiv og personlig service når du trenger det mest
              </p>
            </div>
          </AnimatedSection>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"
                   style={{ backgroundColor: 'var(--secondary)' }}>
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: 'var(--foreground)' }}>
                Grundig søk
              </h3>
              <p className="transition-colors" style={{ color: 'var(--muted)' }}>
                Søkehunden finner veggdyr der du ikke ser dem – tidlig deteksjon redder deg for mye bry
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"
                   style={{ backgroundColor: 'var(--secondary)' }}>
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: 'var(--foreground)' }}>
                Raskt på plass
              </h3>
              <p className="transition-colors" style={{ color: 'var(--muted)' }}>
                Jeg kommer ofte samme dag. Jo raskere vi finner dem, jo lettere er det å løse problemet
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"
                   style={{ backgroundColor: 'var(--secondary)' }}>
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: 'var(--foreground)' }}>
                Direkte kontakt
              </h3>
              <p className="transition-colors" style={{ color: 'var(--muted)' }}>
                Du snakker direkte med meg – ingen mellommenn. Jeg svarer på alle spørsmål du har
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection animation={scaleUp}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="rounded-3xl p-12 sm:p-16 text-center transition-colors duration-300"
              style={{ backgroundColor: 'var(--btn-primary-bg)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--btn-primary-text)' }}>
                Mistanke om veggdyr?
              </h2>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--btn-primary-text)', opacity: 0.9 }}>
                Ta kontakt i dag for en uforpliktende prat. Jeg hjelper deg gjerne!
              </p>
              <Button 
                href="/kontakt"
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)' }}
                className="hover:opacity-90"
              >
                Ring meg nå
              </Button>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
