'use client';

import Image from "next/image";
import { Button } from "./components/Button";
import { motion } from "framer-motion";
import { AnimatedSection } from "./components/AnimatedSection";
import { fadeInUp, fadeInDown, staggerContainer, scaleUp } from "./lib/animations";

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }} className="transition-colors duration-300">
      {/* Hero Section - More engaging */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl transition-colors"
               style={{ backgroundColor: 'var(--primary)' }}></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5 blur-3xl transition-colors"
               style={{ backgroundColor: 'var(--primary)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-colors" 
                style={{ backgroundColor: 'var(--secondary)', border: '1px solid var(--border)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                        style={{ backgroundColor: 'var(--primary)' }}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2" 
                        style={{ backgroundColor: 'var(--primary)' }}></span>
                </span>
                <span className="text-sm font-medium transition-colors" style={{ color: 'var(--muted)' }}>
                  Tilgjengelig for oppdrag nå
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="transition-colors block" style={{ color: 'var(--foreground)' }}>
                  Har du
                </span>
                <span className="transition-colors block" style={{ color: 'var(--primary)' }}>
                  veggdyr?
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                className="text-xl sm:text-2xl mb-8 transition-colors leading-relaxed" 
                style={{ color: 'var(--muted)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Min trent søkehund finner dem før de blir et stort problem. 
                <span className="block mt-2 font-semibold" style={{ color: 'var(--foreground)' }}>
                  Rask, diskret og pålitelig.
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button href="/kontakt">
                  <span className="flex items-center gap-2">
                    <span>Ring meg i dag</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
                <Button href="/tjenester" variant="secondary">
                  Se hvordan det fungerer
                </Button>
              </motion.div>

              {/* Social proof */}
              <motion.div
                className="flex items-center gap-6 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors"
                           style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--background)', color: 'var(--primary)' }}>
                        ✓
                      </div>
                    ))}
                  </div>
                  <span className="text-sm transition-colors" style={{ color: 'var(--muted)' }}>
                    50+ fornøyde kunder
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: 'var(--primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm ml-2 transition-colors" style={{ color: 'var(--muted)' }}>
                    5.0
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Image with floating cards */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/dog-search.jpg"
                    alt="Søkehund i aksjon"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating card 1 - Top right */}
                <motion.div 
                  className="absolute -top-4 -right-4 card rounded-2xl p-4 shadow-xl border transition-colors max-w-[200px]"
                  style={{ borderColor: 'var(--border)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                         style={{ backgroundColor: 'var(--primary)' }}>
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-bold text-2xl transition-colors" style={{ color: 'var(--foreground)' }}>
                        98%
                      </div>
                      <div className="text-xs transition-colors" style={{ color: 'var(--muted)' }}>
                        Nøyaktighet
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating card 2 - Bottom left */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 card rounded-2xl p-4 shadow-xl border transition-colors max-w-[220px]"
                  style={{ borderColor: 'var(--border)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                         style={{ backgroundColor: 'var(--secondary)' }}>
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <div className="font-bold transition-colors" style={{ color: 'var(--foreground)' }}>
                        Samme dag
                      </div>
                      <div className="text-xs transition-colors" style={{ color: 'var(--muted)' }}>
                        Rask respons
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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
              style={{ backgroundColor: 'var(--primary)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Mistanke om veggdyr?
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Ta kontakt i dag for en uforpliktende prat. Jeg hjelper deg gjerne!
              </p>
              <Button 
                href="/kontakt"
                style={{ backgroundColor: 'white', color: 'var(--foreground)' }}
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
