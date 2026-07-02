export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Minimal neural-network background */}
      <NeuralBackdrop />

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-36">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            AI Product Manager
          </p>
          <h1 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Designing AI products around human cognition and behavior
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            AI Product Manager building consumer AI, AI infrastructure, and agentic workflows inspired by the way people
            think and behave.
          </p>
        </div>
      </div>
    </section>
  )
}

function NeuralBackdrop() {
  const nodes = [
    { x: 12, y: 30 },
    { x: 30, y: 18 },
    { x: 48, y: 40 },
    { x: 68, y: 22 },
    { x: 84, y: 48 },
    { x: 24, y: 62 },
    { x: 58, y: 70 },
    { x: 80, y: 78 },
    { x: 40, y: 88 },
  ]
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [5, 6],
    [2, 6],
    [6, 7],
    [4, 7],
    [5, 8],
    [6, 8],
  ]

  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute right-0 top-0 h-[60%] w-[60%] rounded-full bg-accent/40 blur-[120px]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="currentColor"
            strokeWidth="0.12"
            className="text-ring"
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="0.5" className="fill-ring" />
        ))}
      </svg>
    </div>
  )
}
