"use client"

import { useState } from "react"

import {
  pricingCards,
  pricingHighlights,
  salaArmoniaSchedule,
  salaRitmoSchedule,
  type ScheduleDay,
} from "@/lib/site-config"

type AnimatedSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
}

function ScheduleCard({ title, subtitle, schedule }: { title: string; subtitle: string; schedule: ScheduleDay[] }) {
  const [activeDayIndex, setActiveDayIndex] = useState(0)

  return (
    <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
      <h3 className="mb-1 text-center font-serif text-2xl font-bold text-primary">{title}</h3>
      <p className="mb-6 text-center text-sm text-muted-foreground">{subtitle}</p>

      <div className="md:hidden">
        <div className="grid grid-cols-5 gap-1 pb-4">
          {schedule.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setActiveDayIndex(index)}
              className={`border py-2.5 text-[10px] font-bold tracking-tighter uppercase transition-all duration-300 ${
                activeDayIndex === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary/40"
              }`}
            >
              {day.day.substring(0, 3)}
            </button>
          ))}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-2 mt-4 space-y-4 duration-500">
          {schedule[activeDayIndex].classes.map((classItem) => (
            <div key={`${classItem.time}-${classItem.name}`} className="grid grid-cols-[70px_1fr] items-baseline gap-4 border-b border-border/20 pb-3 last:border-0 last:pb-0">
              <span className="text-right font-sans text-xs font-bold text-primary">{classItem.time}</span>
              <span className="text-left text-sm font-medium tracking-wide text-foreground uppercase">{classItem.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden space-y-5 md:block">
        {schedule.map((day) => (
          <div key={day.day} className="mb-5">
            <div className="mb-2 border-b border-border pb-1 text-center font-sans text-sm font-semibold text-foreground uppercase">
              {day.day}
            </div>
            <div className="space-y-3">
              {day.classes.map((classItem) => (
                <div key={`${classItem.time}-${classItem.name}`} className="grid grid-cols-[80px_1fr] items-baseline gap-4 border-b border-border/20 pb-2 last:border-0 last:pb-0">
                  <span className="text-right font-sans text-sm font-bold text-primary">{classItem.time}</span>
                  <span className="text-left text-sm font-medium tracking-wide text-foreground uppercase">{classItem.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScheduleSection({ isVisible, setSectionRef }: AnimatedSectionProps) {
  return (
    <section
      id="orari"
      ref={(element) => setSectionRef("orari", element)}
      className={`py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Orari dei Corsi</h2>
          <p className="max-w-none text-lg text-pretty text-muted-foreground lg:mx-auto lg:max-w-2xl">
            Organizziamo i nostri corsi per adattarsi ai tuoi impegni
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ScheduleCard title="Sala Armonia" subtitle="Via Moio, 8" schedule={salaArmoniaSchedule} />
          <ScheduleCard title="Sala Ritmo" subtitle="Via Moio, 16" schedule={salaRitmoSchedule} />
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground italic">
          * Gli orari possono variare - contattaci per confermare. Durante l&apos;anno accademico sono previsti lo
          Spettacolo Natalizio, lo Spettacolo di Fine Anno e vari eventi socio-culturali.
        </p>
      </div>
    </section>
  )
}

export function PricingSection({ isVisible, setSectionRef }: AnimatedSectionProps) {
  return (
    <section
      id="prezzi"
      ref={(element) => setSectionRef("prezzi", element)}
      className={`bg-card py-24 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Iscrizioni & Prezzi</h2>
          <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">
            Scegli la formula più adatta a te. Per informazioni sui costi contattaci direttamente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingCards.map((card) => {
            const Icon = card.Icon
            return (
              <div key={card.title} className="rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary">
                <Icon size={32} className="mb-4 text-primary" />
                <h3 className="mb-3 font-serif text-lg font-bold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 rounded-sm border border-border bg-card p-6 md:grid-cols-2">
          {pricingHighlights.map((item) => {
            const Icon = item.Icon
            return (
              <div key={item.title} className="flex gap-4">
                <Icon size={28} className="mt-1 shrink-0 text-primary" />
                <div>
                  <h4 className="mb-2 font-serif font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-muted-foreground italic">
            Vuoi sapere di più? Contattaci per un preventivo personalizzato - la prima lezione è gratuita.
          </p>
          <a href="#contatti" className="inline-block rounded-sm bg-primary px-8 py-3 font-bold text-primary-foreground">
            Richiedi Informazioni
          </a>
        </div>
      </div>
    </section>
  )
}
