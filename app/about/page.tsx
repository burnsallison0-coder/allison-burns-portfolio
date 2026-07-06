import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About — From Fashion Design to AI Product Management",
  description:
    "An origin story: fashion design, retail merchandising, and AI product management, united by a study of how humans make decisions.",
}

const chapters = [
  {
    step: "01",
    field: "Fashion Design",
    note: "Learning how form, material, and emotion shape what people desire.",
  },
  {
    step: "02",
    field: "Retail Merchandising",
    note: "Studying how humans make decisions in commerce, at the intersection of data and taste.",
  },
  {
    step: "03",
    field: "AI Product Management",
    note: "Designing intelligent systems that model cognition and behavior, not just features.",
  },
]

const socials = [
  { label: "LinkedIn", handle: "Professional & career", href: "https://www.linkedin.com" },
  { label: "TikTok", handle: "Short-form reflections", href: "https://www.tiktok.com" },
  { label: "Instagram", handle: "Behind the process", href: "https://www.instagram.com" },
]

export default function AboutPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Origin Story */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">About</p>
          <h1 className="max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            An origin story in decisions, aesthetics, and intelligence
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
            {
              "I learned to design product experiences by first studying how humans make decisions in commerce and aesthetics."
            }
          </p>

          {/* Path */}
          <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {chapters.map((c) => (
              <li key={c.step} className="flex flex-col bg-card p-6">
                <span className="font-mono text-xs text-muted-foreground">{c.step}</span>
                <h2 className="mt-3 font-serif text-xl leading-tight text-foreground">{c.field}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Current Thesis */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Current thesis</p>
          <blockquote className="border-l-2 border-ring pl-6 md:pl-10">
            <p className="text-balance font-serif text-3xl leading-[1.15] tracking-tight text-foreground md:text-5xl">
              {
                "AI systems and products must be designed by modeling cognition and behavior as separate but interconnected layers."
              }
            </p>
          </blockquote>
        </div>
      </section>

      {/* Connect */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Connect</p>
        <h2 className="max-w-xl text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          Let&apos;s trade notes on cognition, craft, and building AI.
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex items-center justify-between gap-4 bg-card px-6 py-5 transition-colors hover:bg-secondary ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">{`0${i + 1}`}</span>
                <span className="flex flex-col">
                  <span className="font-serif text-lg text-foreground transition-colors group-hover:text-accent-foreground">
                    {s.label}
                  </span>
                  <span className="text-sm text-muted-foreground">{s.handle}</span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
          <p className="font-serif text-lg tracking-tight text-foreground">Cognition&nbsp;/&nbsp;Craft</p>
          <a href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            &larr; Back to home
          </a>
        </div>
      </footer>
    </main>
  )
}
