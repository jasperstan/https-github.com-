import type { Metadata } from "next"
import { ArtworkFrame } from "@/components/artwork-frame"
import { artworks, site } from "@/lib/site"

export const metadata: Metadata = {
  title: `About — ${site.artist}`,
  description: `About ${site.artist}, ${site.role.toLowerCase()}.`,
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            About
          </p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            {site.artist}
          </h1>
          <p className="mt-3 text-muted-foreground">
            {site.role} &middot; {site.location}
          </p>

          <div className="mt-8 space-y-5 text-pretty leading-relaxed text-foreground/90">
            <p>
              Vadim Gregor (Vadim Grigorievich Shtanko) is a professionally
              trained artist, illustrator, and graphic designer whose creative
              career spans more than five decades.
            </p>
            <p>
              Born in Poltava, Ukraine, Gregor spent his formative and
              professional years in Moscow, where he graduated from the V. I.
              Surikov Moscow Art Institute in 1971. His career encompassed
              painting, illustration, graphic design, publishing, and commercial
              art.
            </p>
            <p>
              During the Soviet period, Gregor worked with major publishing and
              state organizations, including Vneshtorgizdat, Planeta, Progress,
              and Khudozhestvennaya Literatura, creating book designs,
              illustrations, postcards, magazine and journal graphics,
              advertising materials, and commercial artwork. He subsequently
              held senior artistic positions with several prominent publications,
              including Sovetskaya Zhenshchina, Znamenosets, Yuridicheskaya
              Literatura, and Molodaya Gvardiya.
            </p>
            <p>
              Gregor was a member of the Painting Section of the Moscow United
              Committee of Graphic Artists and participated in multiple
              exhibitions in Moscow, including a collective exhibition at the
              organization&apos;s exhibition space at 28 Malaya Gruzinskaya
              Street in 1976.
            </p>
            <p>
              Alongside his professional work in publishing and graphic design,
              Gregor maintained a lifelong commitment to painting. His personal
              body of work includes landscapes, portraits, and other original
              paintings, characterized by an expressive use of color,
              composition, and painterly technique.
            </p>
            <p>
              After moving to the United States, Gregor continued his creative
              career through design and color work, including projects with Les
              M&eacute;talliers Champenois and Carvart Glass.
            </p>
            <p>
              Today, his paintings represent a personal body of work developed
              alongside a long professional career in art, publishing, and
              design.
            </p>
            <p>All paintings are signed by the artist &quot;V. Shtanko.&quot;</p>
          </div>
        </div>

        <div className="md:pt-10">
          <div className="md:sticky md:top-28">
            <ArtworkFrame artwork={artworks[5]} />
            <p className="mt-3 text-sm text-muted-foreground">
              {artworks[5].title}, {artworks[5].year} &middot; {artworks[5].medium}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
