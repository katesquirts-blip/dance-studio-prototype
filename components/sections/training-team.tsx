"use client"

import Image from "next/image"
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { type Dispatch, type SetStateAction } from "react"

import { professionalTracks, teamMembers } from "@/lib/site-config"

type AnimatedSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
}

export function TrainingSection({ isVisible, setSectionRef }: AnimatedSectionProps) {
  return (
    <section
      id="formazione"
      ref={(element) => setSectionRef("formazione", element)}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Formazione Professionale</h2>
          <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">
            Corsi riconosciuti dalla federazione Opes Danza per futuri danzatori e insegnanti
          </p>
        </div>

        <div className="rounded-sm border border-border bg-card p-6 md:p-10">
          <div className="grid gap-12 md:grid-cols-2">
            {professionalTracks.map((track, index) => {
              const Icon = index === 1 ? BookOpen : track.Icon
              return (
                <div key={track.title}>
                  <Icon className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-6 font-serif text-2xl font-bold text-primary">{track.title}</h3>
                  <ul className="space-y-3">
                    {track.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary">&#10003;</span>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className="mt-8 mb-6 border-t border-border" />
          <p className="mb-6 text-center text-sm text-muted-foreground italic">
            Per informazioni sui corsi e sui docenti contattaci direttamente
          </p>
          <div className="flex justify-center">
            <a
              href="#contatti"
              className="rounded-sm border border-primary bg-transparent px-8 py-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Contattaci per Info
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="font-sans text-xs tracking-wider text-muted-foreground uppercase">Scuola Certificata</p>
            <Image src="/opeslogo.png" alt="Opes Danza - Scuola Certificata" width={120} height={120} className="object-contain opacity-90" />
          </div>
        </div>
      </div>
    </section>
  )
}

type TeamSectionProps = AnimatedSectionProps & {
  expandedBios: boolean[]
  setExpandedBios: Dispatch<SetStateAction<boolean[]>>
}

export function TeamSection({ isVisible, setSectionRef, expandedBios, setExpandedBios }: TeamSectionProps) {
  return (
    <section
      id="team"
      ref={(element) => setSectionRef("team", element)}
      className={`border-t border-border py-24 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Il Nostro Team</h2>
          <p className="max-w-none text-left text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl lg:text-center">
            Professionisti appassionati al tuo servizio
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-300 hover:border-primary"
            >
              <div className="max-h-[280px] overflow-hidden">
                <img src={member.photo} alt={member.name} className="block h-full w-full object-cover object-top" style={{ aspectRatio: "1 / 1" }} />
              </div>
              <div className="flex flex-grow flex-col p-4">
                <p className="mb-1 font-serif text-lg font-bold text-foreground">{member.name}</p>
                <p className="mb-3 font-sans text-xs tracking-wider text-primary uppercase">{member.role}</p>
                <div className="mb-3 border-t border-border" />
                <p className={`flex-grow font-sans text-sm leading-relaxed text-muted-foreground ${expandedBios[index] ? "" : "line-clamp-2 md:line-clamp-none"}`}>
                  {member.bio}
                </p>
                <button
                  className="mt-2 inline-flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 font-sans text-xs text-primary md:hidden"
                  onClick={() => setExpandedBios((previous) => previous.map((value, itemIndex) => (itemIndex === index ? !value : value)))}
                >
                  {expandedBios[index] ? <>Chiudi <ChevronUp size={12} /></> : <>Leggi di più <ChevronDown size={12} /></>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
