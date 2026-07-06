import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ExperienceTimeline } from "@/components/experience-timeline"

export const metadata: Metadata = {
  title: "Experience — System Stories",
  description:
    "An AI Product Manager's experience told as system stories: compliance infrastructure, agentic workflows, computer vision platforms, and 0 → 1 consumer AI.",
}

export default function ExperiencePage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Experience</p>
          <h1 className="max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            System stories, not a resume
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A decade of building AI products across compliance, retail, and consumer experiences — each described as a
            designed system rather than a list of duties. Expand any company to read how the system was built.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <ExperienceTimeline />
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
          <p className="font-serif text-lg tracking-tight text-foreground">Cognition&nbsp;/&nbsp;Craft</p>
          <a href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            &larr; Back to home
          </a>
        </div>
      </footer>
    </main>
  )
}
