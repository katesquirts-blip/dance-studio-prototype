"use client"

import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef, bioOpen, setBioOpen }: AboutSectionProps) {
  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/founder.jpg"
              alt="Founder"
              fill
              className="rounded-sm border border-border bg-secondary object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left, var(--background) 0%, transparent 40%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 35%)" }}
            />
          </div>

          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">Conosci la Tua Insegnante</h2>
            <p className="mb-6 text-lg leading-relaxed text-pretty text-foreground">
              Rita Polidoro è la fondatrice e direttrice artistica de L&apos;Ateneo Danza Musical e Fitness. Dal 1999
              guida la scuola con una visione chiara: unire tecnica, creatività e passione per formare non solo
              danzatori, ma persone complete. Con oltre 30 anni di esperienza, ha formato centinaia di giovani talenti
              ad Agropoli e nel Cilento.
            </p>
            <ul className="mb-6 space-y-1.5 font-sans text-sm text-muted-foreground">
              <li><span className="mr-2 text-primary">·</span>Laureata in Lettere Moderne - Università di Salerno</li>
              <li><span className="mr-2 text-primary">·</span>Formazione internazionale - New York, Miami, Chicago</li>
              <li><span className="mr-2 text-primary">·</span>Regia e coreografie - The Greatest Showman, Mamma Mia, Hairspray, Notre Dame de Paris</li>
              <li><span className="mr-2 text-primary">·</span>Ospite Rai - Raccomandati con Carlo Conti</li>
              <li><span className="mr-2 text-primary">·</span>Maratoneta - New York City Marathon 2024</li>
            </ul>
            <blockquote className="mb-6 border-l-4 border-accent py-2 pl-6">
              <p className="font-serif text-xl text-balance text-foreground italic sm:text-2xl">
                &ldquo;La mia filosofia mira a creare un ambiente inclusivo dove la trasmissione dei saperi si unisce
                alla gioia del movimento - preparando ogni allievo non solo al palcoscenico, ma alle sfide della
                vita.&rdquo;
              </p>
              <footer className="mt-3 font-sans text-sm text-muted-foreground">- Rita Polidoro</footer>
            </blockquote>
            <button
              onClick={() => setBioOpen(!bioOpen)}
              className="mb-4 inline-flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 font-sans text-sm text-primary transition-opacity hover:opacity-80"
            >
              {bioOpen ? <>Chiudi <ChevronUp size={14} /></> : <>Leggi la sua storia completa <ChevronDown size={14} /></>}
            </button>
            <div
              style={{
                maxHeight: bioOpen ? "2000px" : "0",
                opacity: bioOpen ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.5s ease, opacity 0.5s ease",
              }}
            >
              {[
                "Rita Polidoro è una professionista con una formazione accademica e artistica d'eccellenza. Laureata in Lettere Moderne con indirizzo Arte e Spettacolo presso l'Università degli Studi di Salerno, è diplomata in dizione e recitazione e ha perfezionato il suo linguaggio artistico partecipando a masterclass di alto livello - tra cui quella di recitazione cinematografica con il regista Ferzan Ozpetek.",
                "La sua tecnica è stata plasmata da esperienze internazionali di primo piano. Ha studiato presso i centri CRUNCH di New York, Miami e Chicago con maestri di fama mondiale come Madonna Grimes e Leslie Feliciano. È diplomata C.S.E.N - C.O.N.I. in danza classica, moderna, contemporary fusion, musical, funk, hip hop, discipline aeree e fitness.",
                "Specialista nel genere Musical, Rita ha curato la regia e le coreografie di produzioni iconiche come The Greatest Showman, Mamma Mia, Hairspray e Notre Dame de Paris. Il suo talento l'ha portata anche in televisione, con partecipazioni a programmi Rai come Raccomandati condotto da Carlo Conti e alla serie TV L'Avvocato Malinconico.",
                "Nel novembre 2024 ha portato a termine la Maratona di New York - un'impresa che racconta meglio di qualsiasi parola la sua filosofia di vita e di insegnamento.",
              ].map((paragraph) => (
                <p key={paragraph} className="mb-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              <div className="my-6 border-t border-border" />
              <h3 className="mb-4 font-serif text-xl text-primary">La Nostra Storia</h3>
              {[
                "L'Ateneo nasce nel settembre 1999 da un sogno semplice e potente: creare ad Agropoli un luogo dove chiunque - bambino o adulto, principiante o esperto - potesse scoprire la propria creatività e trovare la propria espressione artistica.",
                "In oltre venticinque anni, la scuola è cresciuta fino a diventare un punto di riferimento per la danza e la formazione nel Cilento. Oggi L'Ateneo conta due sedi in Via Moio, un team di insegnanti esperti e centinaia di allievi che ogni anno salgono sul palcoscenico per gli spettacoli annuali.",
                "La nostra missione non è cambiata dal primo giorno: offrire una formazione di alta qualità in un ambiente accogliente e professionale, dove ogni allievo si senta a casa e possa dare il meglio di sé.",
              ].map((paragraph) => (
                <p key={paragraph} className="mb-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
