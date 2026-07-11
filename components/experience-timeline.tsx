"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Plus } from "lucide-react"

type Company = {
  company: string
  years: string
  category: string
  headline: string
  overview: string
  carriedLede: string
  carriedForward: string[]
}

const companies: Company[] = [
  {
    company: "Meta",
    years: "2025 — 2026",
    category: "Global Compliance Infrastructure",
    headline: "Where AI stopped being the product and became the way I work.",
    overview:
      "I led product strategy for privacy and regulatory compliance infrastructure across Meta's family of apps. My work focused on enabling products to operate responsibly across evolving global regulations while reducing risk at planetary scale.",
    carriedLede: "The biggest transformation wasn't what I was building. It was how I learned to build products.",
    carriedForward: [
      "Before Meta, AI was the technology I was building. At Meta, it became the way I worked.",
      "I began integrating AI into nearly every stage of product management, including strategy, planning, prototyping, coding, automation, and decision making. Rather than treating AI as the product, I began treating it as a collaborative partner.",
      "That shift fundamentally changed how I practice product management. It expanded my capacity, accelerated execution, and showed me that the greatest opportunity AI creates is not only in the products we build, but also in how we build them.",
    ],
  },
  {
    company: "The Home Depot",
    years: "2024 — 2025",
    category: "Generative AI Shopping Assistant",
    headline: "Where I first designed the AI and the product in parallel.",
    overview:
      "I led product strategy for a GenAI shopping assistant designed to help customers navigate complex home improvement projects with greater confidence. It was the first opportunity I had to intentionally apply a product philosophy that considered both the AI's cognition and the customer's experience as equally important parts of the design process.",
    carriedLede: "This was the first time I intentionally designed both the AI and the product in parallel.",
    carriedForward: [
      "The realization that shaped this approach came during my time at Walmart. At The Home Depot, I finally had the opportunity to put it into practice.",
      "Instead of designing only the customer experience, I designed two journeys in parallel: the cognitive journey of the AI system and the user journey of the customer.",
      "That thinking became the foundation of the framework that now guides every AI product I build.",
    ],
  },
  {
    company: "Walmart",
    years: "2022 — 2024",
    category: "AI Developer Platform",
    headline: "Where I questioned how AI products should be defined.",
    overview:
      "I designed the developer experience layer within Walmart's AI Developer Platform, helping AI engineers build, evaluate, and deploy computer vision applications across retail and supply chain operations. Working alongside AI engineers gave me a deep understanding of how intelligent systems are developed. It also revealed an important gap in how many AI products are defined.",
    carriedLede: "This was when I questioned how AI products should be defined.",
    carriedForward: [
      "Designing products for AI engineers gave me a front row seat to how computer vision applications were conceived, trained, and evaluated. The conversation almost always began with models, data, sensors, and technical constraints.",
      "Over time, I realized many AI applications were being defined around technical capabilities rather than the intelligence required to perform the task.",
      'Instead of asking, "What model should we build?" and "What data do we need?", I began asking a different first question.',
      "What intelligence is required to achieve this goal?",
      "That question fundamentally changed how I think about AI systems. It became the foundation of how I think about AI product strategy today. It would later evolve into the framework I first put into practice at The Home Depot.",
    ],
  },
  {
    company: "Aedit",
    years: "2021 — 2022",
    category: "Plastic Surgery Simulation",
    headline: "Where I realized intelligence alone isn't enough. People have to trust it.",
    overview:
      "I scaled AI-powered consumer experiences that simulated personalized plastic surgery consultations through facial analysis and surgical outcome prediction. The goal was not simply to generate predictions. It was to help people feel informed and confident while considering deeply personal, life-changing decisions.",
    carriedLede: "This was when I realized intelligence alone isn't enough. People have to trust it.",
    carriedForward: [
      "Plastic surgery is one of the most emotionally significant decisions a person can make. Even an AI system capable of analyzing a face and visualizing potential surgical outcomes has little value if people do not trust its predictions enough to inform such a deeply personal decision.",
      "Working at Aedit shifted my perspective from building intelligent systems to designing trustworthy experiences. I began thinking more intentionally about confidence, transparency, and the emotional context surrounding AI-assisted decision making.",
      "From that point forward, I stopped evaluating AI products only by what they could do. I also began asking whether people would trust them enough to act.",
    ],
  },
  {
    company: "Macy's",
    years: "2018 — 2021",
    category: "Immersive Shopping Experiences",
    headline: "Where I understood technology doesn't drive adoption. Pain does.",
    overview:
      "I led product strategy for emerging AI and immersive shopping experiences within Macy's Innovation Lab, exploring how new technologies could improve online shopping. Through rapid prototyping and experimentation, I learned that successful product innovation depends as much on understanding human behavior as it does on advancing technology.",
    carriedLede: "This was when I understood technology doesn't drive adoption. Pain does.",
    carriedForward: [
      "Building experimental AI experiences meant constantly testing new ideas with real customers. Some innovations generated excitement immediately, while others failed to gain traction, even when the technology itself was impressive.",
      "Over time, I realized a person's willingness to adopt a new product has a direct relationship to two things: the severity of the pain it solves and the maturity of the technology enabling it.",
      'That experience fundamentally changed how I think about innovation. I stopped asking, "What new technology can we build?" and started asking, "What problem is painful enough for people to change their behavior?"',
      "That realization reshaped the kinds of problems I wanted to solve. I became increasingly drawn to domains where the pain was significant enough that people were willing to adopt entirely new technologies. That curiosity ultimately led me from retail shopping experiences to AI-assisted plastic surgery consultations.",
    ],
  },
]

export function ExperienceTimeline() {
  const searchParams = useSearchParams()
  const requested = searchParams.get("company")
  const matched = companies.find((c) => c.company.toLowerCase() === requested?.toLowerCase())?.company
  const [open, setOpen] = useState<string | null>(matched ?? companies[0].company)
  const articleRefs = useRef<Record<string, HTMLElement | null>>({})
  const rafId = useRef<number | undefined>(undefined)

  // Matches the `scroll-mt-24` offset below and keeps the chapter clear of the sticky header.
  const HEADER_OFFSET = 96
  // Matches the 500ms grid-rows height transition below, plus a small buffer.
  const EXPAND_DURATION = 520

  const stopPinning = () => {
    if (rafId.current !== undefined) {
      cancelAnimationFrame(rafId.current)
      rafId.current = undefined
    }
  }

  // Hold the clicked chapter header at a fixed viewport position for the duration of the
  // expand/collapse animation. This compensates for the layout shift caused by a sibling
  // chapter collapsing above it and overrides the browser's native scroll anchoring, so the
  // view stays stable instead of drifting to the bottom of the new content and then snapping
  // back up. No arbitrary post-animation scroll is used.
  const pinChapter = (company: string, targetTop: number) => {
    stopPinning()
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const start = performance.now()
    const step = () => {
      const el = articleRefs.current[company]
      if (!el) {
        rafId.current = undefined
        return
      }
      const delta = el.getBoundingClientRect().top - targetTop
      if (Math.abs(delta) > 0.5) window.scrollBy(0, delta)
      if (!prefersReducedMotion && performance.now() - start < EXPAND_DURATION) {
        rafId.current = requestAnimationFrame(step)
      } else {
        rafId.current = undefined
      }
    }
    rafId.current = requestAnimationFrame(step)
  }

  const handleToggle = (company: string, isOpen: boolean) => {
    stopPinning()
    if (isOpen) {
      // Collapsing the open chapter needs no scrolling.
      setOpen(null)
      return
    }
    // Measure the header position *before* the state change so we can keep it steady.
    const el = articleRefs.current[company]
    const currentTop = el ? el.getBoundingClientRect().top : HEADER_OFFSET
    // If the header is tucked under the sticky header (or above the viewport), align it just
    // below the header. Otherwise keep it exactly where it is so the viewport does not move.
    const targetTop = currentTop < HEADER_OFFSET ? HEADER_OFFSET : currentTop
    setOpen(company)
    pinChapter(company, targetTop)
  }

  useEffect(() => {
    if (!matched) return
    const el = articleRefs.current[matched]
    if (!el) return
    // The deep-linked chapter renders already expanded on mount, so align it once after layout
    // is committed (a single rAF, no arbitrary timer) and only when it is not already visible.
    const raf = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      const fullyVisible = rect.top >= HEADER_OFFSET - 2 && rect.bottom <= window.innerHeight + 2
      const alreadyAligned = rect.top >= HEADER_OFFSET - 2 && rect.top <= HEADER_OFFSET + 2
      if (fullyVisible || alreadyAligned) return
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      window.scrollTo({
        top: window.scrollY + rect.top - HEADER_OFFSET,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      })
    })
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matched])

  useEffect(() => stopPinning, [])

  return (
    <div className="flex flex-col">
      {companies.map((c, i) => {
        const isOpen = open === c.company
        const panelId = `chapter-${c.company.replace(/[^a-z0-9]/gi, "").toLowerCase()}`
        const chapterNumber = String(i + 1).padStart(2, "0")
        return (
          <article
            key={c.company}
            ref={(el) => {
              articleRefs.current[c.company] = el
            }}
            className={`scroll-mt-24 ${i !== 0 ? "border-t border-border" : ""}`}
          >
            <button
              type="button"
              onClick={() => handleToggle(c.company, isOpen)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group flex w-full items-start gap-6 py-12 text-left md:gap-10 md:py-16"
            >
              <span className="mt-2 font-mono text-xs tracking-widest text-muted-foreground/70">{chapterNumber}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">{c.company}</h2>
                  <span className="text-xs uppercase tracking-[0.16em] text-accent-foreground">{c.category}</span>
                </div>
                <p className="mt-4 max-w-2xl text-pretty font-serif text-lg italic leading-relaxed text-muted-foreground md:text-xl">
                  {c.headline}
                </p>
                <span className="mt-4 block font-mono text-xs tracking-widest text-muted-foreground/60">{c.years}</span>
              </div>
              <Plus
                className={`mt-2 h-5 w-5 shrink-0 text-accent-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-16 md:pb-24 md:pl-[3.25rem]">
                  {/* Overview */}
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">Overview</p>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/85">{c.overview}</p>

                  {/* What I Carried Forward — emotional centerpiece */}
                  <div className="mt-14 border-l-2 border-accent pl-6 md:pl-8">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">
                      What I Carried Forward
                    </p>
                    <p className="mt-5 text-balance font-serif text-2xl leading-[1.3] tracking-tight text-foreground md:text-3xl">
                      {c.carriedLede}
                    </p>
                    <div className="mt-6 flex flex-col gap-5">
                      {c.carriedForward.map((para) => (
                        <p key={para} className="text-pretty text-base leading-relaxed text-foreground/80">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
