import type { ReactNode } from "react"

/* Shared framing so every artifact reads like a notebook plate */
function Plate({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure className="relative overflow-hidden rounded-xl border border-border bg-card">
      {/* faint grid paper texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 100%)",
        }}
      />
      <div className="relative flex min-h-[22rem] items-center justify-center p-8 md:p-10">{children}</div>
      <figcaption className="relative border-t border-border px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
        Fig. — {label}
      </figcaption>
    </figure>
  )
}

function Connector({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`block w-px bg-border ${className}`} />
}

/* 01 — Agent org chart */
export function AgentOrgChart() {
  const reports = [
    { name: "Taro", emoji: "\u{1F49C}", role: "Operations" },
    { name: "Thai", emoji: "\u{1F9E1}", role: "Research" },
    { name: "Matcha", emoji: "\u{1F49A}", role: "Engineering" },
  ]
  return (
    <Plate label="Agent operating model">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* CEO */}
        <div className="flex flex-col items-center rounded-lg border border-border bg-background px-6 py-3 text-center">
          <span className="font-serif text-lg leading-tight text-foreground">Allison</span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">CEO</span>
        </div>

        <Connector className="h-6" />

        {/* Manager */}
        <div className="flex flex-col items-center rounded-lg border border-ring bg-accent/40 px-6 py-3 text-center">
          <span className="font-serif text-lg leading-tight text-accent-foreground">Boba {"\u{1F9CB}"}</span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent-foreground/80">
            Agent Manager
          </span>
        </div>

        <Connector className="h-6" />

        {/* Branch bar */}
        <div className="relative flex w-full justify-between px-6">
          <span aria-hidden="true" className="absolute left-1/2 top-0 h-px w-[calc(100%-6rem)] -translate-x-1/2 bg-border" />
          {reports.map((r) => (
            <span key={r.name} aria-hidden="true" className="block h-6 w-px bg-border" />
          ))}
        </div>

        {/* Reports */}
        <div className="grid w-full grid-cols-3 gap-3">
          {reports.map((r) => (
            <div
              key={r.name}
              className="flex flex-col items-center rounded-lg border border-border bg-background px-2 py-3 text-center"
            >
              <span className="text-xl leading-none" aria-hidden="true">
                {r.emoji}
              </span>
              <span className="mt-1.5 font-serif text-sm text-foreground">{r.name}</span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
                {r.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Plate>
  )
}

/* 02 — Obsidian-style vault / folder structure */
export function SecondBrainMap() {
  const folders = [
    { name: "Me", note: "role · philosophy · voice" },
    { name: "Projects", note: "specs · docs · status" },
    { name: "People", note: "team · stakeholders" },
    { name: "Skills", note: "reusable workflows" },
    { name: "Google Drive", note: "connected source" },
    { name: "Notes", note: "meetings · ideas" },
  ]
  return (
    <Plate label="Second Brain — vault structure">
      <div className="w-full max-w-sm overflow-hidden rounded-lg border border-border bg-background">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-accent-foreground/70" aria-hidden="true" />
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
            second-brain
          </span>
        </div>
        <ul className="flex flex-col py-1.5">
          {folders.map((f) => (
            <li
              key={f.name}
              className="flex items-center justify-between px-4 py-2 transition-colors hover:bg-secondary/60"
            >
              <span className="flex items-center gap-2.5">
                <span aria-hidden="true" className="text-sm text-accent-foreground">
                  {"\u25B8"}
                </span>
                <span className="font-medium text-foreground">{f.name}</span>
              </span>
              <span className="font-mono text-[0.65rem] text-muted-foreground">{f.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </Plate>
  )
}

/* 03 — Conceptual systems diagram (vertical flow) */
export function EmotionalAwarenessDiagram() {
  const layers = [
    { label: "Biometrics", note: "heart rate · temperature", tone: "muted" },
    { label: "Context Layer", note: "interprets state", tone: "muted" },
    { label: "LLM", note: "reasoning", tone: "accent" },
    { label: "Adaptive Conversation", note: "responds with care", tone: "muted" },
  ]
  return (
    <Plate label="Emotionally aware system — concept">
      <div className="flex w-full max-w-xs flex-col items-center">
        {layers.map((l, i) => (
          <div key={l.label} className="flex w-full flex-col items-center">
            <div
              className={`w-full rounded-lg border px-5 py-4 text-center ${
                l.tone === "accent" ? "border-ring bg-accent/40" : "border-border bg-background"
              }`}
            >
              <span
                className={`block font-serif text-base ${
                  l.tone === "accent" ? "text-accent-foreground" : "text-foreground"
                }`}
              >
                {l.label}
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                {l.note}
              </span>
            </div>
            {i < layers.length - 1 && (
              <span aria-hidden="true" className="my-2 text-lg leading-none text-muted-foreground">
                {"\u2193"}
              </span>
            )}
          </div>
        ))}
      </div>
    </Plate>
  )
}

/* 04 — Creative partnership timeline (horizontal, wraps on small screens) */
export function CreativePartnerTimeline() {
  const stages = [
    "Resume",
    "Career Story",
    "Website Architecture",
    "V0 Prompts",
    "Design Reviews",
    "V0 Prompts",
    "Portfolio",
  ]
  return (
    <Plate label="Creative partnership — evolving loop">
      <div className="flex w-full flex-col items-center gap-8">
        {/* the collaborators */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
          <span className="rounded-full border border-border bg-background px-3 py-1 text-foreground">Allison</span>
          <span aria-hidden="true" className="text-accent-foreground">
            {"\u2194"}
          </span>
          <span className="rounded-full border border-ring bg-accent/40 px-3 py-1 text-accent-foreground">
            ChatGPT
          </span>
          <span aria-hidden="true" className="text-accent-foreground">
            {"\u2194"}
          </span>
          <span className="rounded-full border border-border bg-background px-3 py-1 text-foreground">V0</span>
        </div>

        {/* the evolving output chain */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {stages.map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-2">
              <span className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground">
                {s}
              </span>
              {i < stages.length - 1 && (
                <span aria-hidden="true" className="text-muted-foreground">
                  {"\u2192"}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </Plate>
  )
}
