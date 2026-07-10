export function Closing() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-36">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">The thesis</p>
        <p className="text-balance font-serif text-3xl leading-[1.2] tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
          I design AI systems and products by modeling cognition and behavior as complementary layers.
        </p>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:burns.allison0@gmail.com"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="/experience"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Explore case studies
          </a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
        <p className="font-serif text-base text-foreground">Allison Burns</p>
        <p>{`© ${new Date().getFullYear()} — AI Product Portfolio`}</p>
      </div>
    </footer>
  )
}
