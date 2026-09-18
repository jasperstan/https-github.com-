import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `Contact — ${site.artist}`,
  description: `Get in touch with ${site.artist} for enquiries, commissions, and exhibitions.`,
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1fr] md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Enquiries &amp; commissions
          </h1>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            For available works, commissions, press, or exhibition proposals,
            send a note and the studio will reply within a few days.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="font-serif text-lg underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Instagram</dt>
              <dd className="mt-1 font-serif text-lg">{site.instagram}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Studio</dt>
              <dd className="mt-1 font-serif text-lg">{site.location}</dd>
            </div>
          </dl>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
