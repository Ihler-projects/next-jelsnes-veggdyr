import type { Metadata } from "next";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Målgrupper | Veggdyrsøk med Hund",
  description: "Vi betjener hotell, institusjoner, private og bedrifter med profesjonell veggdyrdeteksjon.",
};

export default function Malgrupper() {
  const targetGroups = [
    {
      title: "Hotell og overnatting",
      description: "Hoteller, moteller og andre overnattingssteder trenger regelmessig kontroll for å sikre gjestenes komfort og opprettholde et godt omdømme. Våre søkehunder kan raskt og diskret sjekke rom og fellesarealer.",
      benefits: [
        "Diskret og profesjonell gjennomføring",
        "Minimal forstyrrelse av gjester",
        "Rask deteksjon før problemet sprer seg",
        "Dokumentasjon for kvalitetssikring"
      ]
    },
    {
      title: "Institusjoner",
      description: "Sykehjem, skoler, barnehager og andre institusjoner har særlige krav til hygiene og trivsel. Vi tilbyr skreddersydde løsninger som ivaretar både beboere og ansatte.",
      benefits: [
        "Tilpasset institusjonens rutiner",
        "Trygg metode uten kjemikalier",
        "Forebyggende kontroller",
        "Opplæring av personale"
      ]
    },
    {
      title: "Private boliger",
      description: "Veggdyr i hjemmet kan være en stor belastning. Vi hjelper privatpersoner med rask og effektiv deteksjon, slik at du kan iverksette tiltak tidlig.",
      benefits: [
        "Rask respons og fleksible tider",
        "Grundig gjennomgang av boligen",
        "Råd om videre tiltak",
        "Diskresjon og respekt for ditt hjem"
      ]
    },
    {
      title: "Eiendomsforvaltning",
      description: "For eiendomsforvaltere og utleiere er det viktig å kunne tilby trygge og veggdyrfrie boliger. Vi bistår med både akutte situasjoner og forebyggende kontroller.",
      benefits: [
        "Avtaler for regelmessig kontroll",
        "Dokumentasjon for utleiere",
        "Rask håndtering ved mistanke",
        "Profesjonell rapportering"
      ]
    }
  ];

  return (
    <div className="bg-page transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 transition-colors">
              Målgrupper
            </h1>
            <p className="text-lg text-muted transition-colors">
              Vi tilbyr profesjonelle tjenester til et bredt spekter av kunder. 
              Uansett om du driver hotell, institusjon eller trenger hjelp i ditt private hjem, 
              har vi løsningen for deg.
            </p>
          </div>

          <div className="space-y-12">
            {targetGroups.map((group) => (
              <div 
                key={group.title}
                className="card-secondary rounded-2xl p-8 lg:p-12"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 transition-colors">
                  {group.title}
                </h2>
                <p className="text-muted mb-6 transition-colors">
                  {group.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start">
                      <svg 
                        className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 transition-colors" 
                        style={{ color: 'var(--icon-primary)' }}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center rounded-2xl p-12 transition-colors duration-300" style={{ backgroundColor: 'var(--btn-primary-bg)' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--btn-primary-text)' }}>
              Finner du ikke din målgruppe?
            </h2>
            <p className="mb-6" style={{ color: 'var(--btn-primary-text)', opacity: 0.9 }}>
              Vi tilpasser våre tjenester til dine behov. Ta kontakt for en uforpliktende samtale.
            </p>
            <Button 
              href="/kontakt" 
              style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)' }}
            >
              Kontakt oss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
