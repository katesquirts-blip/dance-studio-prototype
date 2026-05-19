"use client"

import Image from "next/image"

import { testimonialImages } from "@/lib/site-config"

type TestimonialsSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  setEnlargedPhoto: (photo: string | null) => void
}

export function TestimonialsSection({ isVisible, setSectionRef, setEnlargedPhoto }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      ref={(element) => setSectionRef("testimonials", element)}
      className={`py-24 transition-all duration-1000 sm:py-32 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">Voci dall&apos;Accademia</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground lg:mx-auto">
            La nostra più grande soddisfazione è il successo e il benessere dei nostri allievi.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6">
          {testimonialImages.map((src) => (
            <button
              key={src}
              onClick={() => setEnlargedPhoto(src)}
              className="group cursor-zoom-in focus:outline-none"
              aria-label="Ingrandisci testimonianza"
            >
              <Image
                src={src}
                alt="Testimonianza cliente"
                width={280}
                height={380}
                className="rounded-sm object-contain opacity-90 shadow-lg transition-opacity group-hover:opacity-100"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
