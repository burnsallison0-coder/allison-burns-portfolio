import { ArrowUpRight } from "lucide-react"

const work = [
  {
    company: "Meta",
    year: "2023 — 2025",
    title: "Global-scale compliance infrastructure + agents",
    description:
      "Designed agentic systems and platform tooling to operationalize compliance across billions of users and thousands of workflows.",
    tags: ["AI Infrastructure", "Agents", "Scale"],
  },
  {
    company: "Walmart",
    year: "2021 — 2023",
    title: "AI Developer platform + computer vision",
    description:
      "Built the internal AI developer platform and shipped computer-vision capabilities powering retail and supply-chain products.",
    tags: ["Platform", "Computer Vision", "Tooling"],
  },
  {
    company: "The Home Depot, Macy's",
    year: "2018 — 2021",
    title: "0 → 1 AI shopping experiences",
    description:
      "Led consumer AI from concept to launch — reimagining discovery and guidance around how shoppers actually decide.",
    tags: ["Consumer AI", "0 → 1", "Discovery"],
  },
]

export function FeaturedWork() {
  return (
    <section id="work" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">Featured work</p>
          <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Products shaped by how people think
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {work.map((item) => (
            <a
              key={item.company}
              href="#work"
              className="group grid gap-6 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-ring/50 md:grid-cols-[1fr_1.6fr] md:p-10"
            >
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <p className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">{item.company}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{item.year}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground">
                  View case study
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </span>
              </div>

              <div className="flex flex-col">
                <h3 className="text-balance text-xl font-medium leading-snug text-foreground">{item.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
