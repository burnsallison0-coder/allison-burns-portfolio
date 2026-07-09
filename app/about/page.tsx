import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About — Why I think about AI products the way I do",
  description:
    "An editorial profile connecting fashion design, retail merchandising, and AI product management as one continuous evolution in how people make decisions.",
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

const details = [
  { label: "Based", value: "New York City" },
  { label: "Favorite Ritual", value: "Pilates → iced latte → long walk through SoHo" },
]

export default function AboutPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1.35fr_1fr] md:gap-20 lg:gap-24">
          {/* LEFT COLUMN — the story of how the thinking evolved */}
          <div className="flex flex-col">
            {/* Origin Story */}
            <Reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">About</p>
              <h1 className="text-balance font-serif text-4xl leading-[1.06] tracking-tight text-foreground md:text-6xl">
                An origin story in fashion
              </h1>
              <div className="mt-10 flex flex-col gap-8 text-pretty text-lg leading-relaxed text-muted-foreground">
                <p>I didn&apos;t begin my career in technology. I began by studying design.</p>
                <p>
                  Fashion design taught me how form, function, and emotion shape desire. Retail merchandising taught me
                  how people make decisions in digital environments.
                </p>
                <p>
                  Along the way, my fascination with people and emerging technology led me into AI product management
                  years before the hype. I believed AI represented the beginning of a technological shift on the scale
                  of the industrial revolution, and I wanted to help build that future, even if its full impact
                  wouldn&apos;t be realized within my career.
                </p>
                <p>
                  That same curiosity extends beyond my work. I enjoy studying neuroscience, cognitive science, and
                  philosophy through the lens of mental health and well-being. Together, they&apos;ve deepened how I
                  think about the mind and the mental processes that shape human cognition.
                </p>
              </div>
            </Reveal>

            {/* Journey */}
            <div className="mt-20 md:mt-24">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">The journey</p>
                <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                  Three chapters in one evolving philosophy — each expanding the same idea rather than replacing it.
                </p>
              </Reveal>
              <ol className="relative mt-12 grid gap-8 sm:grid-cols-3 sm:gap-5">
                {/* Connecting line across the journey chapters */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px bg-border sm:block"
                />
                {chapters.map((c, i) => (
                  <Reveal as="li" key={c.step} delay={i * 160} className="relative flex flex-col">
                    <span
                      aria-hidden="true"
                      className="relative z-10 mb-5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-ring bg-background"
                    >
                      <span className="h-1 w-1 rounded-full bg-ring" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{c.step}</span>
                    <h2 className="mt-2 font-serif text-xl leading-tight text-foreground">{c.field}</h2>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT COLUMN — the person behind the work */}
          <Reveal delay={220} className="md:sticky md:top-24 md:self-start">
            <figure className="flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-secondary">
                <Image
                  src="/allison-cafe.jpg"
                  alt="Allison Burns seated at a café table, wearing a camel blazer"
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </figure>

            {/* Connect — natural metadata beside the portrait */}
            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Connect</p>
              <div className="mt-4 border-t border-border">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 border-b border-border py-4"
                  >
                    <span className="relative font-serif text-xl text-foreground">
                      {s.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Lightweight personal profile */}
            <dl className="mt-10 flex flex-col gap-6">
              {details.map((d) => (
                <div key={d.label} className="flex flex-col gap-1.5">
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{d.label}</dt>
                  <dd className="text-pretty font-serif text-lg leading-snug text-foreground">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
          <p className="font-serif text-lg tracking-tight text-foreground">Allison Burns</p>
          <a href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            &larr; Back to home
          </a>
        </div>
      </footer>
    </main>
  )
}
