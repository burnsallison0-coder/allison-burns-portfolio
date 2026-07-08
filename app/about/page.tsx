import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
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

export default function AboutPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Section 1 — Origin Story */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">About</p>
          <h1 className="text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
            An origin story in fashion
          </h1>
          <div className="mt-10 flex max-w-2xl flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              I didn&apos;t begin my career in technology. I began by studying design. Fashion design taught me how
              form, function, and emotion shape desire, while retail merchandising taught me how people make decisions
              in digital environments.
            </p>
            <p>
              Looking back, I wasn&apos;t changing disciplines so much as following the same question into increasingly
              complex systems. AI product management became the place where those lessons finally met intelligence.
            </p>
            <p>
              Today I design AI products around human cognition, because the best AI systems aren&apos;t built around
              models alone. They&apos;re built around people.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — The Journey */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">The journey</p>
          <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {chapters.map((c) => (
              <li key={c.step} className="flex flex-col bg-card p-8">
                <span className="font-mono text-xs text-muted-foreground">{c.step}</span>
                <h2 className="mt-4 font-serif text-xl leading-tight text-foreground">{c.field}</h2>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 3 — Current Thesis */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-28 md:py-40">
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Current thesis</p>
          <p className="text-balance font-serif text-3xl leading-[1.18] tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
            Great AI products emerge when we design two systems simultaneously: the intelligence that powers the
            experience, and the human experience surrounding it.
          </p>
        </div>
      </section>

      {/* Section 4 — Beyond Work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Beyond work</p>
          <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            The same curiosity, outside of product.
          </h2>
          <div className="mt-8 flex max-w-2xl flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              I live in New York City and spend my free time exploring SoHo and the West Village, drinking iced lattes,
              and making time for Pilates.
            </p>
            <p>
              Outside of product, I enjoy studying neuroscience, cognitive science, and philosophy through the lens of
              mental health and well-being. Together they&apos;ve shaped how I think about intelligence, the brain, and
              the mental processes that guide perception, memory, reasoning, and behavior.
            </p>
            <p>Those ideas continue to influence how I design AI products.</p>
          </div>
        </div>
      </section>

      {/* Section 5 — Let's Connect */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Connect</p>
        <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
          Let&apos;s connect.
        </h2>

        <div className="mt-12 border-t border-border">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 border-b border-border py-6 transition-colors hover:bg-card"
            >
              <span className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent-foreground md:text-3xl">
                {s.label}
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
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
