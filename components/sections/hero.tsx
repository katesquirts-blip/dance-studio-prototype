import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { stats } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 70% 50%, var(--template-hero-glow) 0%, var(--background) 65%)" }}
      />

      <div className="absolute inset-0 z-0 block h-full w-full lg:right-0 lg:left-auto lg:w-1/2">
        <Image
          src="/collective_school_w_founder.jpg"
          alt="Dance studio students with founder"
          fill
          className="object-cover object-top"
          priority
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,14,10,0.75) 0%, rgba(15,14,10,0.85) 60%, var(--background) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: "linear-gradient(to right, var(--background) 0%, transparent 35%)" }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 30%)" }}
        />
      </div>

      <div className="relative z-10 ml-0 max-w-7xl px-4 py-32 text-left sm:px-6 lg:mx-auto lg:w-1/2 lg:px-8 lg:py-0">
        <h1 className="animate-fade-in-up mb-6 text-left font-serif text-5xl font-bold text-balance text-foreground italic sm:text-6xl md:text-7xl lg:text-8xl">
          Nasce Tutto
          <br />
          <span className="text-primary">da un Passo</span>
        </h1>
        <p className="animate-fade-in-up animate-delay-200 mb-10 max-w-none text-lg leading-relaxed font-light text-pretty text-foreground sm:text-xl lg:max-w-xl lg:text-2xl">
          La passione per la danza si coltiva. La tua storia sul palcoscenico inizia qui.
        </p>
        <div className="animate-fade-in-up animate-delay-300 flex flex-col justify-start gap-4 sm:flex-row">
          <a
            href="#corsi"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Scopri i Corsi
            <ChevronRight size={20} />
          </a>
          <a
            href="#contatti"
            className="rounded-sm border border-foreground/30 px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:border-foreground"
          >
            Contattaci
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-foreground/50 pt-2">
          <div className="h-2 w-1 rounded-full bg-foreground/70" />
        </div>
      </div>
    </section>
  )
}

export function StatsStrip() {
  return (
    <section className="border-t border-b border-border bg-card py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-1 font-serif text-4xl font-bold text-primary sm:text-5xl">{stat.number}</div>
              <div className="text-sm tracking-wider text-muted-foreground uppercase sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
