import type { Metadata } from "next"
import { GallerySections } from "@/components/gallery-sections"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `Gallery — ${site.artist}`,
  description: `Selected paintings, prints, and works on paper by ${site.artist}.`,
}

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Gallery
        </p>
        <h1 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">
          Works
        </h1>
      </header>

      <div className="mt-12">
        <GallerySections />
      </div>
    </section>
  )
}
