import Image from "next/image"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft, understated warm glow — no dominant graphics */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute right-[-10%] top-[-10%] h-[55%] w-[55%] rounded-full bg-accent/30 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-32 md:pt-32">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16 lg:gap-24">
          {/* Copy */}
          <div className="max-w-xl">
            <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              AI Product Manager
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Great AI products begin with understanding how people think.
            </h1>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Building consumer AI, AI infrastructure, and agentic systems.
            </p>
          </div>

          {/* Headshot */}
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/allison-2026.png"
                alt="Allison Burns, AI Product Manager"
                width={800}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
