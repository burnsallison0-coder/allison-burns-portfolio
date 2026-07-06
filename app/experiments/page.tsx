import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ExperimentsList } from "@/components/experiments-list"

export const metadata: Metadata = {
  title: "Experiments — Lab Notebook",
  description:
    "Active exploration in AI tooling and AI-native product management: multi-agent orchestration, personal context systems, and emotionally intelligent LLM prototypes.",
}

export default function ExperimentsPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Lab notebook</p>
          <h1 className="max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Experiments in progress
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Active exploration in AI tooling and AI-native product management. These are open threads — some will become
            products, some will stay notes. All of them are how I think out loud.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <ExperimentsList />
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
