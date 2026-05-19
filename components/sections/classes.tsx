"use client"

import Image from "next/image"
import { ChevronRight, Heart, Star } from "lucide-react"

import { courseCategories } from "@/lib/site-config"

type AnimatedSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
}

type ClassesSectionProps = AnimatedSectionProps & {
  coursesExpanded: boolean
  setCoursesExpanded: (expanded: boolean) => void
}

export function ClassesSection({ isVisible, setSectionRef, coursesExpanded, setCoursesExpanded }: ClassesSectionProps) {
  return (
    <section
      id="corsi"
      ref={(element) => setSectionRef("corsi", element)}
      className={`py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">I Nostri Corsi</h2>
          <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">
            Dalla danza classica al fitness, offriamo un percorso completo per ogni età e livello
          </p>
        </div>

        {courseCategories.map((category, categoryIndex) => {
          const previousCoursesCount = courseCategories
            .slice(0, categoryIndex)
            .reduce((count, item) => count + item.courses.length, 0)
          const isCategoryHiddenOnMobile = !coursesExpanded && previousCoursesCount >= 6

          return (
            <div
              key={category.label}
              className={`${categoryIndex > 0 ? "mt-12" : ""} ${isCategoryHiddenOnMobile ? "hidden md:block" : "block"}`}
            >
              <div className="mb-3 text-xs tracking-widest text-primary uppercase">{category.label}</div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.courses.map((course, index) => {
                  const globalIndex = previousCoursesCount + index
                  const isHiddenOnMobile = !coursesExpanded && globalIndex >= 6
                  const Icon = course.Icon

                  return (
                    <div
                      key={course.title}
                      className={`group rounded-sm border border-l-[3px] border-border border-l-transparent bg-card p-6 transition-all duration-300 hover:border-l-primary hover:bg-[var(--template-card-hover)] ${
                        isHiddenOnMobile ? "hidden md:block" : "block"
                      }`}
                    >
                      <div className="relative mb-6 h-48 w-full overflow-hidden rounded-sm bg-secondary">
                        {course.image ? (
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-transparent">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        )}
                      </div>
                      <div className="mb-3 inline-block rounded-sm border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {course.age}
                      </div>
                      <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">{course.title}</h3>
                      <p className="mb-4 text-pretty text-foreground">{course.description}</p>
                      <a href="#contatti" className="inline-flex items-center font-medium text-primary transition-colors hover:text-primary/80">
                        Richiedi Info
                        <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        {!coursesExpanded && (
          <div className="mt-12 text-center md:hidden">
            <button
              onClick={() => setCoursesExpanded(true)}
              className="mx-auto flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
            >
              Vedi tutti i corsi
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export function ParentChildSection({ isVisible, setSectionRef }: AnimatedSectionProps) {
  return (
    <section
      id="mamma-e-figlia"
      ref={(element) => setSectionRef("mamma-e-figlia", element)}
      className={`border-t border-b border-border bg-card pt-24 pb-12 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground italic lg:text-4xl">
            Mentre Lei Danza, Tu Ti Prendi Cura di Te
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg font-light text-muted-foreground">
            Due percorsi paralleli, un&apos;unica esperienza da condividere. Porta tua figlia all&apos;Ateneo e
            approfitta del tempo per te stessa.
          </p>
        </div>

        <div className="relative grid items-start gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <Star className="mb-3 h-8 w-8 text-primary" />
            <span className="mb-3 font-sans text-xs tracking-widest text-primary uppercase">PER LE BAMBINE</span>
            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Danza, Musical e Creatività</h3>
            <p className="mb-6 font-sans text-sm leading-relaxed text-muted-foreground">
              Mentre tu ti alleni, le tue bambine vivono la magia della danza. Predanza e Baby Dance per le più
              piccole, Danza Classica, Moderna e Hip Hop, Laboratori Musicali e Teatrali - tutto in un ambiente
              sicuro, professionale e pieno di gioia.
            </p>
            <a href="#contatti" className="mt-2 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              Iscriviti →
            </a>
          </div>

          <div className="absolute top-0 bottom-0 left-1/2 hidden -translate-x-1/2 border-l border-border lg:block" />

          <div className="flex flex-col lg:pl-12">
            <Heart className="mb-3 h-8 w-8 text-primary" />
            <span className="mb-3 font-sans text-xs tracking-widest text-primary uppercase">PER LE MAMME</span>
            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Benessere e Fitness</h3>
            <p className="mb-6 font-sans text-sm leading-relaxed text-muted-foreground">
              Gli orari dei corsi sono pensati in parallelo - così mentre tua figlia balla, tu puoi dedicare del tempo
              al tuo benessere. Pilates, Aerobica, Step e Movimento Dolce: scegli il percorso più adatto a te e torna
              a casa rigenerata.
            </p>
            <a href="#contatti" className="mt-2 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              Iscriviti →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
