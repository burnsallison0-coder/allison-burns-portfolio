import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ExplorationsFeature } from "@/components/explorations-feature"

export const metadata: Metadata = {
  title: "Explorations — Becoming AI Native",
  description:
    "A research notebook on becoming an AI-native product manager: multi-agent workflows, context engineering, emotionally aware prototypes, and long-term creative collaboration with AI.",
}

export default function ExplorationsPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section>
        <div className="mx-auto max-w-3xl px-6 py-[5.1rem] md:py-[7.65rem]">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Explorations</p>
          <h1 className="text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
            Becoming AI Native
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            AI-native product management isn&apos;t just about using new tools. It&apos;s about rethinking how products
            are designed, how work gets done, and how humans collaborate with intelligent systems. These explorations
            are where I develop that perspective.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 md:pb-40">
        <ExplorationsFeature />
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
