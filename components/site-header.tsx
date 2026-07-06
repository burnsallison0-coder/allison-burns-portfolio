export function SiteHeader() {
  const links = [
    { label: "Frameworks", href: "/#frameworks" },
    { label: "What I build", href: "/#build" },
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/experience" },
    { label: "Experiments", href: "/experiments" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 font-serif text-lg tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-ring" aria-hidden="true" />
          <span>Cognition&nbsp;/&nbsp;Craft</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/#work"
          className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          View work
        </a>
      </div>
    </header>
  )
}
