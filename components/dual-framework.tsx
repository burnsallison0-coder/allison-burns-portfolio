const aiSystem = ["Memory", "Perception", "Reasoning", "Action"]
const userJourney = ["Pre-task", "Task", "Post-task"]

export function DualFramework() {
  return (
    <section id="frameworks" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">The framework</p>
          <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Every AI product begins with two questions.
          </h2>
        </div>

        <div className="relative grid gap-10 md:grid-cols-2 md:gap-6">
          {/* Connecting label between the two systems */}
          <span
            className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground md:inline-block"
            aria-hidden="true"
          >
            in parallel
          </span>

          <SystemColumn
            eyebrow="AI System Thinking"
            question="What intelligence is required to achieve this goal?"
            journeyLabel="Cognitive Journey"
            steps={aiSystem}
            outcome="AI System Requirements"
          />
          <SystemColumn
            eyebrow="Product Thinking"
            question="What is the user trying to achieve?"
            journeyLabel="User Journey"
            steps={userJourney}
            outcome="Product Requirements"
          />
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-balance text-center font-serif text-xl leading-relaxed text-foreground md:mt-20 md:text-2xl">
          Great AI products require designing the AI system and the product in parallel.
        </p>
      </div>
    </section>
  )
}

function SystemColumn({
  eyebrow,
  question,
  journeyLabel,
  steps,
  outcome,
}: {
  eyebrow: string
  question: string
  journeyLabel: string
  steps: string[]
  outcome: string
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-8 md:p-10">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">{eyebrow}</p>
      <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">{question}</p>

      <Arrow />

      <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{journeyLabel}</p>

      <ol className="mt-5 flex flex-col items-stretch">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-col items-center">
            <span className="w-full rounded-lg border border-border bg-background px-4 py-3 text-center text-base font-medium text-foreground">
              {step}
            </span>
            {i !== steps.length - 1 && <Arrow />}
          </li>
        ))}
      </ol>

      <Arrow />

      <span className="rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground">
        {outcome}
      </span>
    </div>
  )
}

function Arrow() {
  return (
    <span className="flex justify-center py-2 text-ring" aria-hidden="true">
      <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
        <path d="M7 0V18M7 18L1 12M7 18L13 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    </span>
  )
}
