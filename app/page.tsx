import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { DualFramework } from "@/components/dual-framework"
import { FeaturedWork } from "@/components/featured-work"
import { Closing, SiteFooter } from "@/components/closing"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />
      <main>
        <Hero />
        <DualFramework />
        <FeaturedWork />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  )
}
