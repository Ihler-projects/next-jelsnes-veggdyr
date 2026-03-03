import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss | Veggdyrsøk med Hund",
  description: "Lær mer om oss og våre sertifiserte søkehunder. Vi har lang erfaring med profesjonell deteksjon av veggdyr.",
};

export default function OmOss() {
  return (
    <div className="bg-page transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 transition-colors">
            Om oss
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="relative h-[400px] rounded-2xl overflow-hidden card-secondary mb-8">
              <Image
                src="/team-dog.jpg"
                alt="Vårt team med søkehund"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg text-muted mb-6 transition-colors">
              Vi er spesialister på søk med hund etter veggdyr. Med mange års erfaring 
              og sertifiserte søkehunder, tilbyr vi profesjonelle tjenester til både 
              private og bedrifter.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4 transition-colors">
              Vår historie
            </h2>
            <p className="text-muted mb-6 transition-colors">
              Selskapet ble grunnlagt med et mål om å tilby den mest effektive og 
              pålitelige metoden for deteksjon av veggdyr. Våre søkehunder er spesielt 
              trent for å oppdage veggdyr i alle stadier, og vi jobber kontinuerlig 
              med opplæring og sertifisering.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4 transition-colors">
              Våre verdier
            </h2>
            <ul className="space-y-3 text-muted transition-colors">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Profesjonalitet og høy kvalitet i alle oppdrag</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dyrevelferd og etisk behandling av våre søkehunder</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Åpenhet og god kommunikasjon med våre kunder</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Kontinuerlig utvikling og oppdatering av kompetanse</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
