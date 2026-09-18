import Link from "next/link"
import { nav, site } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="max-w-sm">
          <p className="font-serif text-2xl tracking-tight">{site.artist}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <nav aria-label="Footer" className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <span>{site.instagram}</span>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-muted-foreground md:px-10">
          <span>
            &copy; {year} {site.artist}
          </span>
          <span>All works &amp; images copyright the artist.</span>
        </div>
      </div>
    </footer>
  )
}
