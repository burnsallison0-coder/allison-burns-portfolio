import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ExperienceTimeline } from "@/components/experience-timeline"

export const metadata: Metadata = {
  title: "Case Studies — How my product philosophy evolved",
  description:
    "Case studies told as chapters — how each company reshaped the way I think about building AI products, from Macy's to Meta.",
}

export default function ExperiencePage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Case Studies</p>
          <h1 className="text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
            How my product philosophy evolved.
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col gap-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              Every company introduced a new product problem. Every problem expanded how I think about building AI
              products.
            </p>
            <p>
              These case studies are not simply projects I have worked on. They are the moments that shaped the
              framework I use today.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <ExperienceTimeline />
      </section>

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
