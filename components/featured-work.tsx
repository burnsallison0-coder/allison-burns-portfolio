import { ArrowRight } from "lucide-react"

const chapters = [
  {
    chapter: "Chapter 01",
    company: "Walmart",
    title: "Questioning how AI products are defined",
    description: "The insight that fundamentally changed how I think about AI product strategy.",
  },
  {
    chapter: "Chapter 02",
    company: "The Home Depot",
    title: "Designing AI and the product in parallel",
    description: "The first application of the framework that now guides every AI product I build.",
  },
  {
    chapter: "Chapter 03",
    company: "Meta",
    title: "Becoming an AI-native Product Manager",
    description: "How AI transformed not only the products I build, but the way I build them.",
  },
]

export function FeaturedWork() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-28">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">
            The Framework in Practice
          </p>
          <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Applying one product philosophy across very different AI problems.
          </h2>
        </div>

        <div className="flex flex-col">
          {chapters.map((item, i) => (
            <a
              key={item.company}
              href={`/experience?company=${encodeURIComponent(item.company)}`}
              className={`group grid gap-4 py-10 transition-colors md:grid-cols-[0.9fr_1.6fr] md:gap-12 md:py-14 ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.chapter}
                </span>
                <span className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">{item.company}</span>
              </div>

              <div className="flex flex-col">
                <h3 className="text-balance font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground">
                  Explore Case Study
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.75}
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
