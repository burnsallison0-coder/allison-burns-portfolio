const experiments = [
  {
    index: "01",
    title: "Multi-Agent Product Team",
    codename: "OpenClaw Framework",
    status: "Building",
    description:
      "A personal AI agent built on an agent-orchestration framework with specialized sub-agents named after boba tea flavors — each owning a slice of the product workflow, from research to spec-writing to critique.",
    tags: ["Agent orchestration", "Sub-agents", "Workflow design"],
  },
  {
    index: "02",
    title: "My Second Brain",
    codename: "Context System",
    status: "Iterating",
    description:
      "A context-management system that mirrors my own knowledge — layering product thinking, project history, team dynamics, and role-based context so an assistant can reason the way I actually reason.",
    tags: ["Context management", "Knowledge graph", "Personalization"],
  },
  {
    index: "03",
    title: "Biometrics + Emotionally Intelligent LLM",
    codename: "Prototype",
    status: "Exploring",
    description:
      "A product concept exploring how physiological signals — heart rate, skin response, breathing — can improve the emotional intelligence of LLM interactions, adapting tone and pacing to a person's real-time state.",
    tags: ["Biometrics", "Emotional intelligence", "Human signals"],
  },
]

export function ExperimentsList() {
  return (
    <ul className="flex flex-col gap-4">
      {experiments.map((experiment) => (
        <li key={experiment.index}>
          <article className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-ring hover:bg-secondary/40 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
              <div className="flex items-center gap-3 md:w-24 md:flex-col md:items-start md:gap-2">
                <span className="font-mono text-sm text-muted-foreground">{experiment.index}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground" aria-hidden="true" />
                  {experiment.status}
                </span>
              </div>

              <div className="flex-1">
                <h2 className="font-serif text-xl tracking-tight text-foreground transition-colors group-hover:text-accent-foreground md:text-2xl">
                  {experiment.title}
                </h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {experiment.codename}
                </p>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {experiment.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experiment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
