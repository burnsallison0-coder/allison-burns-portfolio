import { Sparkles, Layers, Workflow } from "lucide-react"

const areas = [
  {
    icon: Sparkles,
    title: "Consumer AI",
    description:
      "Everyday AI experiences that feel intuitive because they mirror how people already think, decide, and act.",
  },
  {
    icon: Layers,
    title: "AI Infrastructure",
    description:
      "The platforms, evaluation, and tooling that let teams ship trustworthy AI safely and at global scale.",
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    description:
      "Autonomous systems that reason across steps, take action, and keep humans meaningfully in the loop.",
  },
]

export function WhatIBuild() {
  return (
    <section id="build" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">What I build</p>
        <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          Three surfaces of the same discipline
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {areas.map((area) => (
          <div
            key={area.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-ring/50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/60 text-accent-foreground">
              <area.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 font-serif text-xl tracking-tight text-foreground">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
