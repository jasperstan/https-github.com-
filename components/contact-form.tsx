"use client"

import { useState, type FormEvent } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type Status = "idle" | "submitting" | "sent"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return
    setStatus("submitting")
    // No backend is wired up yet — this simulates a successful send.
    // Connect an email service (e.g. Resend) to deliver these messages.
    setTimeout(() => setStatus("sent"), 700)
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-64 flex-col items-start justify-center gap-4 border border-border/70 p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-accent">
          <Check className="size-6" />
        </span>
        <div>
          <p className="font-serif text-2xl">Message sent</p>
          <p className="mt-2 text-pretty text-muted-foreground">
            Thank you for reaching out. The studio will be in touch soon.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Field label="Name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </Field>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </Field>

      <Field label="Subject" htmlFor="subject">
        <input id="subject" name="subject" type="text" className={inputClass} />
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClass, "resize-y")}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  )
}

const inputClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
