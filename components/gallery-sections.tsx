"use client"

import { useState } from "react"
import { GalleryGrid } from "@/components/gallery-grid"
import { artworks, categories, type Category } from "@/lib/site"

export function GallerySections() {
  const [active, setActive] = useState<Category>(categories[0])
  const items = artworks.filter((a) => a.category === active)

  return (
    <div>
      <div
        role="tablist"
        aria-label="Gallery categories"
        className="flex flex-wrap items-center gap-x-8 gap-y-2 border-b border-border pb-4"
      >
        {categories.map((category) => {
          const isActive = category === active
          return (
            <button
              key={category}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(category)}
              className={`font-serif text-xl tracking-tight outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background md:text-2xl ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      <div className="mt-10">
        <GalleryGrid key={active} items={items} />
      </div>
    </div>
  )
}
