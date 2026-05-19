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
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary">
            <Image
              src="/fitness.jpg"
              alt="Lezione fitness e benessere"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left, var(--background) 0%, transparent 42%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 36%)" }}
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">Chi siamo</p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Uno spazio dove sentirti libera di muoverti
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-pretty text-foreground">
              Lovely Dance Beauty & Fitness nasce per accompagnare donne, bambine e adulti in un percorso di movimento,
              energia e benessere. Nel cuore del Vomero, lo studio unisce danza, fitness e cura di se in un ambiente
              luminoso, accogliente e pensato per farti sentire subito a tuo agio.
            </p>

            <ul className="mb-6 grid gap-3 font-sans text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Danza per bambini, ragazzi e adulti",
                "Fitness, pilates e benessere",
                "Atmosfera femminile e senza giudizio",
                "Percorsi flessibili per ogni livello",
              ].map((item) => (
                <li key={item} className="rounded-full border border-primary/15 bg-secondary/60 px-4 py-3">
                  <span className="mr-2 text-primary">·</span>
                  {item}
                </li>
              ))}
            </ul>

            <blockquote className="mb-6 border-l-4 border-accent py-2 pl-6">
              <p className="font-serif text-xl text-balance text-foreground italic sm:text-2xl">
                &ldquo;Qui il movimento diventa un momento per ritrovare energia, fiducia e leggerezza.&rdquo;
              </p>
            </blockquote>

            <button
              onClick={() => setBioOpen(!bioOpen)}
              className="mb-4 inline-flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 font-sans text-sm text-primary transition-opacity hover:opacity-80"
            >
              {bioOpen ? <>Chiudi <ChevronUp size={14} /></> : <>Scopri l&apos;atmosfera dello studio <ChevronDown size={14} /></>}
            </button>

            <div
              style={{
                maxHeight: bioOpen ? "1200px" : "0",
                opacity: bioOpen ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.5s ease, opacity 0.5s ease",
              }}
            >
              {[
                "Lo studio e pensato come una pausa dalla routine: un luogo caldo, curato e accessibile dove puoi scegliere se lavorare sulla tecnica, rimetterti in forma o semplicemente dedicarti un momento di benessere.",
                "Ogni percorso viene vissuto con attenzione alla persona. Che tu stia iniziando da zero, tornando al movimento dopo una pausa o cercando una disciplina piu dinamica, l'obiettivo e farti sentire seguita, motivata e libera di esprimerti.",
                "Danza, fitness, pilates e attivita wellness convivono in una proposta versatile, ideale per chi cerca energia, femminilita e continuita in un ambiente elegante ma informale.",
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
