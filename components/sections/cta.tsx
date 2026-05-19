type CtaBannerProps = {
  eyebrow?: string
  text: string
  buttonLabel: string
}

export function CtaBanner({ eyebrow, text, buttonLabel }: CtaBannerProps) {
  return (
    <section className="border-t border-b border-primary/20 bg-primary/10 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-1 text-lg text-foreground sm:text-xl" dangerouslySetInnerHTML={{ __html: text }} />
        {eyebrow && <p className="mb-4 text-sm text-muted-foreground">{eyebrow}</p>}
        {!eyebrow && <div className="mb-4" />}
        <a
          href="#contatti"
          className="inline-block rounded-sm bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}
