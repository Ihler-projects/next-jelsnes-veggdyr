import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Tjenester | Veggdyrsøk med Hund",
  description: "Vi tilbyr profesjonell deteksjon av veggdyr, forebyggende kontroller, og rådgivning. Les mer om våre tjenester.",
};

export default function Tjenester() {
  return (
    <div className="bg-page transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 transition-colors">
              Våre tjenester
            </h1>
            <p className="text-lg text-muted transition-colors">
              Vi tilbyr profesjonelle tjenester for deteksjon og forebygging av veggdyr. 
              Våre sertifiserte søkehunder er trent til å finne veggdyr i alle stadier.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden card-secondary">
              <Image
                src="/bedbug.jpg"
                alt="Veggdyr"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-foreground mb-6 transition-colors">
                Hvordan fungerer det?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold mr-4 transition-colors" style={{ backgroundColor: 'var(--primary)' }}>
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 transition-colors">Bestilling</h3>
                    <p className="text-muted transition-colors">
                      Ta kontakt med oss for å avtale tid for søk.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold mr-4 transition-colors" style={{ backgroundColor: 'var(--primary)' }}>
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 transition-colors">Gjennomføring</h3>
                    <p className="text-muted transition-colors">
                      Vår søkehund går systematisk gjennom lokalene.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold mr-4 transition-colors" style={{ backgroundColor: 'var(--primary)' }}>
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 transition-colors">Rapport</h3>
                    <p className="text-muted transition-colors">
                      Du får en detaljert rapport med funn og anbefalinger.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 transition-colors">
                Akutt deteksjon
              </h3>
              <p className="text-muted mb-4 transition-colors">
                Rask utrykning ved mistanke om veggdyr. Vi kommer raskt på plass 
                og gjennomfører grundig søk.
              </p>
              <ul className="space-y-2 text-sm text-muted transition-colors">
                <li>• Rask respons</li>
                <li>• Grundig gjennomgang</li>
                <li>• Detaljert rapport</li>
              </ul>
            </div>

            <div className="card-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 transition-colors">
                Forebyggende kontroll
              </h3>
              <p className="text-muted mb-4 transition-colors">
                Regelmessige kontroller for å oppdage veggdyr tidlig og 
                forhindre spredning.
              </p>
              <ul className="space-y-2 text-sm text-muted transition-colors">
                <li>• Avtaler for regelmessig kontroll</li>
                <li>• Forebyggende tiltak</li>
                <li>• Dokumentasjon</li>
              </ul>
            </div>

            <div className="card-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 transition-colors">
                Rådgivning
              </h3>
              <p className="text-muted mb-4 transition-colors">
                Vi gir råd om forebygging, sanering og oppfølging etter funn 
                av veggdyr.
              </p>
              <ul className="space-y-2 text-sm text-muted transition-colors">
                <li>• Forebyggende tiltak</li>
                <li>• Saneringsråd</li>
                <li>• Oppfølging</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl p-12 text-center transition-colors duration-300" style={{ backgroundColor: 'var(--primary)' }}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Klar for å bestille?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Kontakt oss i dag for en uforpliktende samtale om dine behov.
            </p>
            <Button 
              href="/kontakt"
              className="bg-white hover:bg-white/90"
              style={{ backgroundColor: 'white', color: 'var(--foreground)' }}
            >
              Kontakt oss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
