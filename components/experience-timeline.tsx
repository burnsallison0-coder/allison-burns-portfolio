"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

type Company = {
  company: string
  years: string
  role: string
  domain: string
  points: string[]
  tags: string[]
}

const companies: Company[] = [
  {
    company: "Meta",
    years: "2023 — 2025",
    role: "AI Product Manager",
    domain: "Global Compliance Infrastructure",
    points: [
      "Architected privacy and regulatory compliance infrastructure operating across billions of users and thousands of internal workflows.",
      "Designed agentic workflows that automate policy interpretation, evidence gathering, and enforcement decisions end to end.",
      "Drove measurable risk-mitigation impact by turning manual review bottlenecks into self-governing, auditable systems.",
    ],
    tags: ["AI Infrastructure", "Agentic Workflows", "Risk Mitigation", "Scale"],
  },
  {
    company: "The Home Depot",
    years: "2021 — 2023",
    role: "AI Product Manager",
    domain: "Generative AI Shopping Companion",
    points: [
      "Built a generative AI shopping companion modeled after the cognition of an expert human sales associate.",
      "Encoded how associates diagnose intent, ask clarifying questions, and sequence recommendations into the product's reasoning layer.",
      "Reframed discovery from keyword search to guided, project-based problem solving.",
    ],
    tags: ["Consumer AI", "Generative AI", "Cognition Modeling"],
  },
  {
    company: "Walmart",
    years: "2019 — 2021",
    role: "AI Product Manager",
    domain: "AI Developer Platform + Retail Automation",
    points: [
      "Delivered an AI developer platform giving computer-vision engineers shared tooling, pipelines, and deployment paths.",
      "Shipped retail automation systems that bring computer vision into physical stores at fleet scale.",
      "Standardized the path from model experiment to production so teams could ship vision features independently.",
    ],
    tags: ["Developer Platform", "Computer Vision", "Retail Automation"],
  },
  {
    company: "Aedit",
    years: "2018 — 2019",
    role: "AI Product Manager",
    domain: "AI Beauty & Aesthetic Simulation",
    points: [
      "Built an AI beauty platform simulating a plastic surgeon consultation using computer vision.",
      "Translated clinical assessment logic into a visual, patient-facing simulation of possible outcomes.",
      "Bridged medical rigor and consumer trust in a highly sensitive decision space.",
    ],
    tags: ["Computer Vision", "Simulation", "Consumer Health"],
  },
  {
    company: "Macy's",
    years: "2016 — 2018",
    role: "AI Product Manager",
    domain: "0 → 1 AI Imaging & Virtual Try-On",
    points: [
      "Launched 0 → 1 AI-generated 3D product imagery, replacing costly manual photography workflows.",
      "Shipped virtual try-on experiences that let shoppers visualize products in context before buying.",
      "Established an experimentation practice to validate imaging and try-on impact against conversion.",
    ],
    tags: ["0 → 1", "3D Imaging", "Virtual Try-On", "Experimentation"],
  },
]

export function ExperienceTimeline() {
  const [open, setOpen] = useState<string | null>(companies[0].company)

  return (
    <div className="flex flex-col">
      {companies.map((c, i) => {
        const isOpen = open === c.company
        const panelId = `panel-${c.company.replace(/[^a-z0-9]/gi, "").toLowerCase()}`
        return (
          <div
            key={c.company}
            className={i !== 0 ? "border-t border-border" : ""}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : c.company)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group flex w-full items-center gap-6 py-8 text-left md:py-10"
            >
              <span className="hidden font-mono text-xs text-muted-foreground md:block md:w-28">{c.years}</span>
              <div className="flex-1">
                <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">{c.company}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.role} &middot; {c.domain}
                </p>
                <span className="mt-2 block font-mono text-xs text-muted-foreground md:hidden">{c.years}</span>
              </div>
              <Plus
                className={`h-5 w-5 shrink-0 text-accent-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-10 md:pl-[8.5rem]">
                  <ul className="flex flex-col gap-4 border-l border-border pl-6">
                    {c.points.map((point) => (
                      <li key={point} className="text-pretty text-base leading-relaxed text-foreground/90">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2 md:pl-6">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
