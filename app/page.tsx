import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ArtworkFrame } from "@/components/artwork-frame"
import { artworks, site } from "@/lib/site"

export default function HomePage() {
  const featured = artworks.slice(0, 3)

  return (
    <>
      {/* Splash */}
      <section className="mx-auto flex max-w-6xl flex-col justify-center px-6 py-20 md:min-h-[78vh] md:px-10 md:py-28">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          {site.role}
        </p>
        <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
          {site.artist}
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            View the gallery
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/about"
            className="text-sm tracking-wide text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            About the artist
          </Link>
        </div>
      </section>

      {/* Featured works */}
      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Selected works
            </h2>
            <Link
              href="/gallery"
              className="hidden shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              All works
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((art) => (
              <ArtworkFrame key={art.id} artwork={art} />
            ))}
          </div>

          <Link
            href="/gallery"
            className="mt-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:hidden"
          >
            All works
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
