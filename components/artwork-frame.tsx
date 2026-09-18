import { cn } from "@/lib/utils"
import type { Artwork } from "@/lib/site"

const spanClasses: Record<Artwork["span"], string> = {
  regular: "aspect-[4/5]",
  tall: "aspect-[3/5]",
  wide: "aspect-[7/5]",
}

export function ArtworkFrame({
  artwork,
  className,
}: {
  artwork: Artwork
  className?: string
}) {
  return (
    <div className={cn("group relative overflow-hidden bg-secondary", spanClasses[artwork.span], className)}>
      {artwork.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={"/image_01.jpg"}
          alt={`${artwork.title}, ${artwork.year}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <Placeholder id={artwork.id} />
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-foreground/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="text-background">
          <p className="font-serif text-lg leading-tight">{artwork.title}</p>
          <p className="text-xs text-background/80">
            {artwork.medium} &middot; {artwork.year}
          </p>
        </div>
      </div>
    </div>
  )
}

// Refined placeholder shown until a real image `src` is provided.
function Placeholder({ id }: { id: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, color-mix(in oklab, var(--muted-foreground) 8%, transparent) 0px, color-mix(in oklab, var(--muted-foreground) 8%, transparent) 1px, transparent 1px, transparent 11px)",
      }}
      aria-hidden="true"
    >
      <span className="font-serif text-3xl text-muted-foreground/50">{id}</span>
    </div>
  )
}
