'use client';

import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Card } from "../components/Card";
import { AnimatedSection } from "../components/AnimatedSection";
import { fadeInUp, fadeInLeft, fadeInRight } from "../lib/animations";

export default function Kontakt() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }} className="transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation={fadeInUp}>
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 transition-colors" style={{ color: 'var(--foreground)' }}>
                Kontakt oss
              </h1>
              <p className="text-lg transition-colors" style={{ color: 'var(--muted)' }}>
                Ta kontakt med oss for en uforpliktende samtale om dine behov. 
                Vi svarer så raskt som mulig.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation={fadeInLeft}>
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection animation={fadeInRight}>
              <div className="space-y-8">
                <Card variant="secondary">
                  <h3 className="text-xl font-bold mb-4 transition-colors" style={{ color: 'var(--foreground)' }}>
                    Kontaktinformasjon
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm mb-1 transition-colors" style={{ color: 'var(--muted)' }}>Telefon</p>
                      <p className="font-medium transition-colors" style={{ color: 'var(--foreground)' }}>+47 XXX XX XXX</p>
                    </div>
                    <div>
                      <p className="text-sm mb-1 transition-colors" style={{ color: 'var(--muted)' }}>E-post</p>
                      <p className="font-medium transition-colors" style={{ color: 'var(--foreground)' }}>post@veggdyrsok.no</p>
                    </div>
                    <div>
                      <p className="text-sm mb-1 transition-colors" style={{ color: 'var(--muted)' }}>Adresse</p>
                      <p className="font-medium transition-colors" style={{ color: 'var(--foreground)' }}>
                        [Din adresse]<br />
                        [Postnummer] [Sted]
                      </p>
                    </div>
                  </div>
                </Card>

                <Card variant="secondary">
                  <h3 className="text-xl font-bold mb-4 transition-colors" style={{ color: 'var(--foreground)' }}>
                    Åpningstider
                  </h3>
                  <div className="space-y-2" style={{ color: 'var(--muted)' }}>
                    <div className="flex justify-between">
                      <span>Mandag - Fredag</span>
                      <span className="font-medium transition-colors" style={{ color: 'var(--foreground)' }}>08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lørdag</span>
                      <span className="font-medium transition-colors" style={{ color: 'var(--foreground)' }}>10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Søndag</span>
                      <span className="font-medium transition-colors" style={{ color: 'var(--foreground)' }}>Stengt</span>
                    </div>
                  </div>
                  <p className="text-sm mt-4 transition-colors" style={{ color: 'var(--muted)' }}>
                    * Akutte oppdrag kan avtales utenom åpningstider
                  </p>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
