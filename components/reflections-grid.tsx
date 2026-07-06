import Image from "next/image"
import { Play } from "lucide-react"

type Reflection = {
  title: string
  description: string
  thumbnail: string
  views: string
}

const reflections: Reflection[] = [
  {
    title: "Designing AI around human cognition",
    description: "Why the best AI products mirror how people already think.",
    thumbnail: "/reflections/human-cognition.png",
    views: "128K",
  },
  {
    title: "Why AI products fail",
    description: "The gap between a working demo and a product people trust.",
    thumbnail: "/reflections/why-ai-fails.png",
    views: "94K",
  },
  {
    title: "How to pass Big Tech product interviews",
    description: "A systems approach to PM loops at Meta, Walmart, and beyond.",
    thumbnail: "/reflections/big-tech-interviews.png",
    views: "212K",
  },
  {
    title: "Automating workflows for any job",
    description: "Turning repetitive work into agentic pipelines anyone can run.",
    thumbnail: "/reflections/automating-workflows.png",
    views: "76K",
  },
]

export function ReflectionsGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
      {reflections.map((r) => (
        <a
          key={r.title}
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col"
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-secondary">
            <Image
              src={r.thumbnail || "/placeholder.svg"}
              alt={r.title}
              fill
              sizes="(min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            {/* subtle top-to-bottom scrim for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

            {/* play affordance */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/85 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Play className="h-5 w-5 translate-x-0.5 fill-foreground text-foreground" />
              </div>
            </div>

            {/* view count chip */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 backdrop-blur-sm">
              <Play className="h-3 w-3 fill-accent-foreground text-accent-foreground" />
              <span className="font-mono text-xs text-foreground">{r.views}</span>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-accent-foreground text-pretty">
              {r.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">{r.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
