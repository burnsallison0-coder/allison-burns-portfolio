import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About — Why I think about AI products the way I do",
  description:
    "An origin story connecting fashion design, retail merchandising, and AI product management as one continuous evolution in how people make decisions.",
}

const chapters = [
  {
    step: "01",
    field: "Fashion Design",
    note: "Learning how form, function, and emotion create purpose.",
  },
  {
    step: "02",
    field: "Retail Merchandising",
    note: "Studying how people make decisions in commerce.",
  },
  {
    step: "03",
    field: "AI Product Management",
    note: "Designing intelligent systems that perceive, reason, and act in service of people.",
  },
]

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "TikTok", href: "https://www.tiktok.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Email", href: "mailto:hello@example.com" },
]

// A small marker that sits on the continuous thread, aligned to a section's eyebrow.
function ThreadNode() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-6 top-1.5 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-ring bg-background md:block"
    />
  )
}

export default function AboutPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Threaded narrative: Origin → Journey → Thesis → Beyond Work */}
      <div className="relative mx-auto max-w-3xl px-6">
        {/* The continuous line of thinking — a single hairline tying every section together */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-transparent via-border to-transparent md:block"
        />

        {/* Section 1 — Origin Story + Portrait (Option A: story left, portrait right) */}
        <section className="relative py-24 md:pl-16 md:py-32">
          <ThreadNode />
          <div className="grid gap-12 md:grid-cols-[1.7fr_1fr] md:items-start md:gap-14">
            <Reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">About</p>
              <h1 className="text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
                An origin story in fashion
              </h1>
              <div className="mt-10 flex flex-col gap-7 text-pretty text-lg leading-relaxed text-muted-foreground">
                <p>
                  I didn&apos;t begin my career in technology. I began by studying design. Fashion design taught me how
                  form, function, and emotion shape desire, while retail merchandising taught me how people make
                  decisions in digital environments.
                </p>
                <p>
                  Looking back, I wasn&apos;t changing disciplines so much as following the same question into
                  increasingly complex systems. AI product management became the place where those lessons finally met
                  intelligence.
                </p>
                <p>
                  Today I design AI products around human cognition, because the best AI systems aren&apos;t built
                  around models alone. They&apos;re built around people.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220} className="md:pt-2">
              <figure className="flex flex-col gap-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary">
                  <Image
                    src="/allison-cafe.jpg"
                    alt="Allison Burns seated at a café table, wearing a camel blazer"
                    fill
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="text-xs leading-relaxed text-muted-foreground">
                  Following the same question — from fashion, to commerce, to intelligence.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Section 2 — The Journey */}
        <section className="relative py-20 md:pl-16 md:py-24">
          <ThreadNode />
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">The journey</p>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              Three chapters in one evolving philosophy — each expanding the same idea rather than replacing it.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {chapters.map((c, i) => (
              <Reveal as="li" key={c.step} delay={i * 130} className="relative flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">{c.step}</span>
                  {i < chapters.length - 1 && (
                    <span aria-hidden="true" className="hidden h-px flex-1 bg-border sm:block" />
                  )}
                </div>
                <h2 className="mt-5 font-serif text-xl leading-tight text-foreground">{c.field}</h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Section 3 — Current Thesis (visual centerpiece) */}
        <section className="relative py-16 md:pl-16 md:py-24">
          <ThreadNode />
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-secondary/60 px-7 py-16 md:px-14 md:py-24">
              <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">
                Current thesis
              </p>
              <p className="text-balance font-serif text-3xl leading-[1.16] tracking-tight text-foreground md:text-[3.25rem] md:leading-[1.12]">
                Great AI products emerge when we design two systems simultaneously: the intelligence that powers the
                experience, and the human experience surrounding it.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Section 4 — Beyond Work */}
        <section className="relative py-24 md:pl-16 md:py-32">
          <ThreadNode />
          <Reveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Beyond work</p>
            <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
              The same curiosity, outside of product.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-8 text-pretty text-lg leading-relaxed text-muted-foreground">
            <Reveal>
              <p>
                I live in New York City and spend my free time exploring SoHo and the West Village, drinking iced
                lattes, and making time for Pilates.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <blockquote className="border-l-2 border-ring pl-6">
                <p className="font-serif text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
                  I study intelligence the way I once studied design — as something built for people, not apart from
                  them.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={120}>
              <p>
                Outside of product, I enjoy studying neuroscience, cognitive science, and philosophy through the lens of
                mental health and well-being. Together they&apos;ve shaped how I think about intelligence, the brain,
                and the mental processes that guide perception, memory, reasoning, and behavior.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>Those ideas continue to influence how I design AI products.</p>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Section 5 — Let's Connect (the closing page) */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36">
          <Reveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Connect</p>
            <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
              Let&apos;s connect.
            </h2>
          </Reveal>

          <div className="mt-14 border-t border-border">
            {socials.map((s, i) => (
              <Reveal as="div" key={s.label} delay={i * 70}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 border-b border-border py-6"
                >
                  <span className="relative font-serif text-2xl text-foreground md:text-3xl">
                    {s.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 ease-out group-hover:w-full" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
          <p className="font-serif text-lg tracking-tight text-foreground">Allison Burns</p>
          <a href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            &larr; Back to home
          </a>
        </div>
      </footer>
    </main>
  )
}
