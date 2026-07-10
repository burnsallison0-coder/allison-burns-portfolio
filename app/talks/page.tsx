import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { TalksGrid } from "@/components/talks-grid"

export const metadata: Metadata = {
  title: "Talks — Ideas worth sharing",
  description:
    "A curated video library on Big Tech interview prep, AI product thinking, and coaching the next generation of AI Product Managers.",
}

export default function TalksPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section>
        <div className="mx-auto max-w-3xl px-6 py-[4.8rem] md:py-[7.2rem]">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Talks</p>
          <h1 className="text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
            Ideas worth sharing
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I&apos;ve been fortunate to learn from incredible teammates, mentors, and hard-earned experience. These
            talks are my way of paying it forward.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 md:pb-24">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Selected talks</p>
        <TalksGrid />
        <p className="mt-16 max-w-xl text-pretty font-serif text-xl leading-snug text-foreground md:mt-24">
          Good ideas become more valuable when they help someone else move forward.
        </p>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
          <p className="font-serif text-lg tracking-tight text-foreground">Allison Burns</p>
          <a href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            &larr; Back to home
          </a>
        </div>
      </footer>
    </main>
  )
}
