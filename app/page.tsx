'use client';

import Image from "next/image";
import { Button } from "./components/Button";
import { motion } from "framer-motion";
import { AnimatedSection } from "./components/AnimatedSection";
import { fadeInUp, fadeInDown, staggerContainer, scaleUp } from "./lib/animations";

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }} className="transition-colors duration-300">
      {/* Hero Section - Personal and warm */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Personal intro badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 transition-colors"
                     style={{ borderColor: 'var(--primary)' }}>
                  <Image
                    src="/hund_aksjon2.png"
                    alt="Meg og hunden"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium transition-colors" style={{ color: 'var(--foreground)' }}>
                    Hege & Nila
                  </p>
                  <p className="text-xs transition-colors" style={{ color: 'var(--muted)' }}>
                    Sertifisert veggdyrsøk-team
                  </p>
                </div>
              </motion.div>

              {/* Main headline - More conversational */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="transition-colors block" style={{ color: 'var(--foreground)' }}>
                  Sliter du med
                </span>
                <span className="transition-colors block" style={{ color: 'var(--primary)' }}>
                  veggdyr?
                </span>
                <span className="transition-colors block text-3xl sm:text-4xl lg:text-5xl mt-2" style={{ color: 'var(--foreground)' }}>
                  Jeg hjelper deg!
                </span>
              </motion.h1>

              {/* Personal description */}
              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-lg sm:text-xl transition-colors leading-relaxed" style={{ color: 'var(--muted)' }}>
                  Hei! Jeg er Hege, og sammen med min trent søkehund Nila hjelper jeg folk med å finne veggdyr tidlig.
                </p>
                <p className="text-base transition-colors" style={{ color: 'var(--muted)' }}>
                  Vi jobber raskt, diskret og til en ærlig pris. Ingen store selskaper eller mellommenn – bare meg, Nila og mange års erfaring.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
               
                <Button href="/tjenester" variant="secondary">
                  Les mer om oss
                </Button>
              </motion.div>

              {/* Trust indicators - more personal */}
              <motion.div
                className="flex items-start gap-6 p-4 rounded-xl transition-colors"
                style={{ backgroundColor: 'var(--secondary)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4" style={{ color: 'var(--primary)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs transition-colors" style={{ color: 'var(--muted)' }}>
                    Basert på 50+ anmeldelser
                  </p>
                </div>
                <div className="border-l pl-6" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-sm font-medium transition-colors mb-1" style={{ color: 'var(--foreground)' }}>
                    "Rask, profesjonell og hyggelig!"
                  </p>
                  <p className="text-xs transition-colors" style={{ color: 'var(--muted)' }}>
                    - Maria, Oslo
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/hund_aksjon2.png"
                    alt="Nila søkehunden i aksjon"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Simple info badge - bottom */}
                <motion.div 
                  className="absolute -bottom-6 left-6 right-6 card rounded-2xl p-5 shadow-xl border transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                           style={{ backgroundColor: 'var(--primary)' }}>
                        <span className="text-2xl">🐕</span>
                      </div>
                      <div>
                        <p className="font-bold transition-colors" style={{ color: 'var(--foreground)' }}>
                          Nila
                        </p>
                        <p className="text-sm transition-colors" style={{ color: 'var(--muted)' }}>
                          Sertifisert søkehund
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold transition-colors" style={{ color: 'var(--primary)' }}>
                        98%
                      </p>
                      <p className="text-xs transition-colors" style={{ color: 'var(--muted)' }}>
                        Nøyaktighet
                      </p>
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
