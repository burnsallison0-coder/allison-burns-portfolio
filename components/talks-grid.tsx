"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

type Talk = {
  category: string
  description: string
  poster: string
  video: string
  tiktok: string
}

const talks: Talk[] = [
  {
    category: "The Grind",
    description: "What Big Tech interview prep really takes.",
    poster: "/talks/grind.jpg",
    video: "/talks/grind.mp4",
    tiktok:
      "https://www.tiktok.com/@allisonburns52/video/7512496018467114286?is_from_webapp=1&sender_device=pc&web_id=7657360898152465950",
  },
  {
    category: "The System",
    description: "How I created a repeatable preparation system to pass Big Tech interviews.",
    poster: "/talks/system.jpg",
    video: "/talks/system.mp4",
    tiktok:
      "https://www.tiktok.com/@allisonburns52/video/7519168585516780814?is_from_webapp=1&sender_device=pc&web_id=7657360898152465950",
  },
  {
    category: "AI Product Thinking",
    description: "How I evaluate Fortune 500 business cases for workforce automation.",
    poster: "/talks/aiproductthinking.jpg",
    video: "/talks/aiproductthinking.mp4",
    tiktok:
      "https://www.tiktok.com/@allisonburns52/video/7508933074395122987?is_from_webapp=1&sender_device=pc&web_id=7657360898152465950",
  },
  {
    category: "Coaching",
    description: "Helping others become AI Product Managers.",
    poster: "/talks/coaching.jpg",
    video: "/talks/coaching.mp4",
    tiktok:
      "https://www.tiktok.com/@allisonburns52/video/7545296578542636302?is_from_webapp=1&sender_device=pc&web_id=7657360898152465950",
  },
]

export function TalksGrid() {
  const [active, setActive] = useState<Talk | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {talks.map((talk) => (
          <button
            key={talk.category}
            type="button"
            onClick={() => setActive(talk)}
            className="group flex flex-col text-left"
            aria-label={`Play talk: ${talk.description}`}
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-secondary">
              <Image
                src={talk.poster || "/placeholder.svg"}
                alt=""
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/80 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-background">
                  <Play className="h-6 w-6 translate-x-0.5 fill-foreground text-foreground" />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground">{talk.category}</p>
              <p className="mt-2 text-pretty font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-accent-foreground">
                {talk.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active ? <VideoModal key={active.category} talk={active} onClose={() => setActive(null)} /> : null}
    </>
  )
}

function VideoModal({ talk, onClose }: { talk: Talk; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [viewportHeight, setViewportHeight] = useState<number | null>(null)

  // Track the *visible* viewport height (via visualViewport when available) so the modal stays
  // correctly sized as mobile browser chrome shows/hides — e.g. after returning from the TikTok
  // app, switching tabs, rotating, or restoring focus. This avoids relying on a stale 100vh.
  useEffect(() => {
    const update = () => {
      const vv = window.visualViewport
      setViewportHeight(vv ? vv.height : window.innerHeight)
    }
    update()
    const vv = window.visualViewport
    vv?.addEventListener("resize", update)
    vv?.addEventListener("scroll", update)
    window.addEventListener("resize", update)
    window.addEventListener("orientationchange", update)
    window.addEventListener("pageshow", update)
    window.addEventListener("focus", update)
    document.addEventListener("visibilitychange", update)
    return () => {
      vv?.removeEventListener("resize", update)
      vv?.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
      window.removeEventListener("orientationchange", update)
      window.removeEventListener("pageshow", update)
      window.removeEventListener("focus", update)
      document.removeEventListener("visibilitychange", update)
    }
  }, [])

  // Lock background scroll while open and fully restore it (including scroll position) on close,
  // so the page behind never scrolls and behaves normally afterward.
  useEffect(() => {
    const { body } = document
    const scrollY = window.scrollY
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    }
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.left = "0"
    body.style.right = "0"
    body.style.width = "100%"
    body.style.overflow = "hidden"
    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.left = prev.left
      body.style.right = prev.right
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      window.scrollTo(0, scrollY)
    }
  }, [])

  // Escape to close, autoplay, and always start scrolled to the top of a freshly opened modal.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    if (scrollRef.current) scrollRef.current.scrollTop = 0
    videoRef.current?.play().catch(() => {})
    return () => document.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div
      ref={scrollRef}
      className="fixed inset-x-0 top-0 z-[100] h-[100dvh] overflow-y-auto overscroll-contain bg-primary/50 backdrop-blur-sm"
      style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
      role="dialog"
      aria-modal="true"
      aria-label={talk.description}
      onClick={onClose}
    >
      <div
        className="flex min-h-full items-center justify-center px-4"
        style={{
          paddingTop: "max(1.5rem, env(safe-area-inset-top))",
          paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="flex w-full max-w-sm flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-black shadow-2xl">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
            >
              <X className="h-4 w-4" />
            </button>
            <video
              ref={videoRef}
              src={talk.video}
              poster={talk.poster}
              controls
              playsInline
              className="aspect-[9/16] w-full bg-black object-contain"
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary">{talk.category}</p>
            <p className="mt-1 text-pretty font-serif text-base leading-snug text-background/90">{talk.description}</p>
            <a
              href={talk.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs text-background/60 underline underline-offset-4 transition-colors hover:text-background"
            >
              View on TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
