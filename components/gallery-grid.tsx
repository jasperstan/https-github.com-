"use client"

import { useCallback, useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { ArtworkFrame } from "@/components/artwork-frame"
import { artworks as allArtworks, type Artwork } from "@/lib/site"

export function GalleryGrid({ items = allArtworks }: { items?: Artwork[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, close, next, prev])

  const active = activeIndex === null ? null : items[activeIndex]

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((art, i) => (
          <button
            key={art.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="block w-full break-inside-avoid text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`View ${art.title}`}
          >
            <ArtworkFrame artwork={art} />
          </button>
        ))}
      </div>

      {isOpen && active && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title}, ${active.year}`}
        >
          <div className="flex items-center justify-end p-5">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-between gap-2 px-3 pb-4 sm:px-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous work"
              className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="size-7" />
            </button>

            <figure className="flex min-w-0 flex-1 flex-col items-center gap-4">
              <div className="max-h-[70vh] w-auto max-w-full overflow-hidden">
                <div className="mx-auto w-[min(70vw,42rem)]">
                  <ArtworkFrame artwork={active} />
                </div>
              </div>
              <figcaption className="text-center">
                <p className="font-serif text-2xl">{active.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {active.medium} &middot; {active.year}
                </p>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={next}
              aria-label="Next work"
              className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronRight className="size-7" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
