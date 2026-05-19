import Image from "next/image"
import { ChevronRight, MessageCircle } from "lucide-react"

import { stats } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 78% 42%, rgba(201, 124, 109, 0.2) 0%, rgba(239, 231, 221, 0.86) 36%, var(--background) 72%)",
        }}
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
              "linear-gradient(to bottom, rgba(247,243,238,0.82) 0%, rgba(247,243,238,0.9) 58%, var(--background) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: "linear-gradient(to right, var(--background) 0%, rgba(247,243,238,0.88) 36%, transparent 72%)" }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 34%)" }}
        />
      </div>

      <div className="relative z-10 ml-0 max-w-7xl px-4 pt-32 pb-24 text-left sm:px-6 sm:pt-36 sm:pb-28 lg:mx-auto lg:w-1/2 lg:px-8 lg:py-0">
        <h1 className="animate-fade-in-up mb-6 text-left font-serif text-5xl leading-[0.96] font-bold text-balance text-foreground italic sm:text-6xl md:text-7xl lg:text-8xl">
          La danza,
          <br />
          <span className="text-primary">la bellezza,</span>
          <br />
          il tuo momento
        </h1>
        <p className="animate-fade-in-up animate-delay-200 mb-10 max-w-none text-lg leading-relaxed font-light text-pretty text-muted-foreground sm:text-xl lg:max-w-xl lg:text-2xl">
          Corsi di danza, fitness e benessere nel cuore del Vomero. Uno spazio accogliente dove movimento, energia e femminilità si incontrano.
        </p>
        <div className="animate-fade-in-up animate-delay-300 flex flex-col justify-start gap-4 sm:flex-row">
          <a
            href="#corsi"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-colors hover:bg-[#B86C5F]"
          >
            Scopri i corsi
            <ChevronRight size={20} />
          </a>
          <a
            href="https://wa.me/393498737169"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/30 bg-card/70 px-8 py-4 text-lg font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:bg-card"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Scrivici su WhatsApp
            </span>
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
    <section className="border-y border-primary/15 bg-secondary/60 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 text-center sm:gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-full border border-primary/15 bg-card/70 px-4 py-5 shadow-sm shadow-primary/5">
              <div className="mb-1 font-serif text-3xl font-semibold text-primary sm:text-4xl">{stat.number}</div>
              <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
