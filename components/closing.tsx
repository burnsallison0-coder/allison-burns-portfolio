export function Closing() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
      <p className="text-balance font-serif text-2xl leading-snug tracking-tight text-foreground md:text-4xl md:leading-[1.2]">
        I design AI systems and products by modeling cognition and behavior as complementary layers.
      </p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:hello@example.com"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="#work"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          See the work
        </a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
        <p className="font-serif text-base text-foreground">Cognition / Craft</p>
        <p>{`© ${new Date().getFullYear()} — AI Product Portfolio`}</p>
      </div>
    </footer>
  )
}
