const cognitive = [
  { step: "01", label: "Memory", note: "What the system knows and retains" },
  { step: "02", label: "Perception", note: "How it interprets input and context" },
  { step: "03", label: "Reasoning / Decision", note: "How it weighs options and chooses" },
  { step: "04", label: "Action", note: "How it acts on the world" },
]

const user = [
  { step: "01", label: "Pre-task", note: "Intent, expectation, and framing" },
  { step: "02", label: "Task execution", note: "The moment of doing the work" },
  { step: "03", label: "Post-task", note: "Reflection, trust, and return" },
]

export function DualFramework() {
  return (
    <section id="frameworks" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">
            Two layers, designed in parallel
          </p>
          <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            A dual framework for building intelligent products
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FrameworkPanel
            eyebrow="AI System Thinking"
            title="Cognitive Journey"
            items={cognitive}
          />
          <FrameworkPanel eyebrow="Product Thinking" title="User Journey" items={user} />
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-pretty text-center font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
          &ldquo;AI products require designing system cognition and user experience as separate but interdependent
          layers.&rdquo;
        </p>
      </div>
    </section>
  )
}

function FrameworkPanel({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: { step: string; label: string; note: string }[]
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-8 md:p-10">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      <h3 className="mt-2 font-serif text-2xl tracking-tight text-foreground">{title}</h3>

      <ol className="mt-8 flex flex-col">
        {items.map((item, i) => (
          <li
            key={item.step}
            className={`flex items-start gap-5 py-5 ${i !== items.length - 1 ? "border-b border-border/70" : ""}`}
          >
            <span className="mt-0.5 font-mono text-sm text-ring">{item.step}</span>
            <div>
              <p className="text-base font-medium text-foreground">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
