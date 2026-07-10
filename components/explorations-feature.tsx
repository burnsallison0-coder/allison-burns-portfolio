import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"
import {
  AgentOrgChart,
  SecondBrainMap,
  EmotionalAwarenessDiagram,
  CreativePartnerTimeline,
} from "@/components/exploration-artifacts"

type Exploration = {
  index: string
  title: string
  category: string
  question: string
  exploration: string[]
  insight: string
  artifact: ReactNode
}

const explorations: Exploration[] = [
  {
    index: "01",
    title: "Becoming the CEO of AI Agents",
    category: "Multi-agent workflows • Agent collaboration",
    question: "What if product work could be delegated across a team of specialized AI agents?",
    exploration: [
      "I built Boba, an AI teammate that lived in Google Chat alongside my human coworkers. Connected to my calendar, Gmail, Google Chat, Claude Code, and internal resources, it became my primary interface for collaborating with AI throughout the workday. Whether I was at my desk, commuting on the subway, or away from my laptop, I could brainstorm ideas, refine writing, or ask questions as naturally as messaging a teammate.",
      "As Boba took on more responsibilities, I explored distributing work across specialized agents. Boba became the manager, delegating research, operations, and engineering tasks to focused teammates while coordinating their work behind the scenes.",
    ],
    insight:
      "Building multi-agent systems isn't just about adding more agents. It's about organizational design. Defining clear responsibilities, context boundaries, and communication patterns allows AI systems to scale much like high-performing product teams.",
    artifact: <AgentOrgChart />,
  },
  {
    index: "02",
    title: "Teaching AI My Job",
    category: "Context engineering • Knowledge management",
    question: "How much context does AI need before it starts thinking like a teammate?",
    exploration: [
      "I created a Second Brain that served as the shared knowledge base for Boba and Claude Code. Rather than treating AI as a blank slate for every conversation, I wanted it to understand the same foundational context I would give a new teammate: my role, the people I worked with, my projects, and how my organization operated.",
      "Using Obsidian, I organized this knowledge into structured documentation about people, projects, and myself, while also giving my agents access to my Google Drive. As new information became important, I could simply message Boba to add documents into our shared knowledge base, continuously expanding its understanding of my work.",
      "The Second Brain also became home to reusable skills. Rather than rewriting the same prompts repeatedly, I designed workflows that automated recurring tasks like drafting weekly leadership updates using awareness of engineering work, project documentation, meeting notes, and my preferred communication style.",
    ],
    insight:
      "Context isn't static. Like onboarding a new teammate, AI systems require continuous knowledge transfer to stay effective. I found that maintaining a Second Brain and regularly \u201Cchecking in\u201D with my agents created a far more capable collaborator than relying on prompts alone.",
    artifact: <SecondBrainMap />,
  },
  {
    index: "03",
    title: "Building Emotional Awareness",
    category: "AI prototyping • Human-computer interaction",
    question: "Could AI recognize when someone needs support without being explicitly told?",
    exploration: [
      "I wanted to explore two ideas at once: AI prototyping and emotionally aware AI. Using my Product Sense interview framework as a prompt structure, I generated a product requirements document with ChatPRD, refined it through iteration, and then handed it to a coding assistant to build the MVP. Rather than telling AI how to implement the solution, I approached it the same way I would collaborate with a senior engineer by defining the product requirements and allowing the implementation details to emerge through iteration.",
      "Inspired by a long-standing fascination with how the human senses collect information that shapes intelligence, I explored whether biometric signals collected by my Oura Ring could become another source of context for AI. The concept asked whether physiological signals like heart rate could help an LLM proactively recognize moments when someone might need encouragement or support, much like a close friend intuitively notices when something feels off.",
    ],
    insight:
      "Language is only one signal humans use to understand one another. Exploring biometric context reinforced my belief that the future of AI experiences will be shaped by multimodal perception, where systems combine language with other signals to better understand human needs.",
    artifact: <EmotionalAwarenessDiagram />,
  },
  {
    index: "04",
    title: "Building a Creative Partner",
    category: "Human-AI collaboration • Creative workflows",
    question: "What becomes possible when AI deeply understands the person it's creating with?",
    exploration: [
      "Over several years, I gradually built enough shared context with ChatGPT that it became more than a writing assistant. It understood my career history, product philosophy, design preferences, and the personal experiences that shaped them.",
      "What began as resume writing evolved into something much larger. Together we developed the information architecture for this portfolio, refined the narrative across every page, created prompts for V0 to implement the designs, reviewed iterations, and continuously improved both the content and experience. Rather than replacing the creative process, AI became a collaborative design partner capable of connecting ideas across years of conversations in ways that would have been difficult to recreate with a traditional agency or freelancer.",
    ],
    insight:
      "The quality of AI collaboration grows with shared context. Long-term memory transformed AI from a reactive assistant into a creative partner capable of connecting ideas across projects, preserving design intent, and contributing to an evolving body of work.",
    artifact: <CreativePartnerTimeline />,
  },
]

function TextColumn({ item }: { item: Exploration }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-sm text-muted-foreground">{item.index}</span>
      <h2 className="mt-3 text-balance font-serif text-3xl leading-[1.1] tracking-tight text-foreground md:text-4xl">
        {item.title}
      </h2>
      <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-foreground">
        {item.category}
      </p>

      {/* Question — emphasized */}
      <div className="mt-8 border-l-2 border-ring pl-5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">Question</p>
        <p className="mt-2 text-balance font-serif text-xl leading-snug text-foreground md:text-2xl">
          {item.question}
        </p>
      </div>

      {/* Exploration */}
      <div className="mt-8">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">Exploration</p>
        <div className="mt-3 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
          {item.exploration.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Insight — emphasized on a tinted panel */}
      <div className="mt-8 rounded-lg bg-secondary/60 p-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent-foreground">Insight</p>
        <p className="mt-3 text-pretty font-serif text-lg leading-relaxed text-foreground">{item.insight}</p>
      </div>
    </div>
  )
}

export function ExplorationsFeature() {
  return (
    <div className="flex flex-col gap-16 md:gap-36">
      {explorations.map((item, i) => {
        const visualLeft = i % 2 === 1 // Card 2 & 4 → visual left
        return (
          <Reveal as="section" key={item.index}>
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={`min-w-0 ${visualLeft ? "md:order-2" : "md:order-1"}`}>
                <TextColumn item={item} />
              </div>
              <div className={`min-w-0 ${visualLeft ? "md:order-1" : "md:order-2"}`}>{item.artifact}</div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
