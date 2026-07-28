"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Footer } from "@/components/Footer"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const send = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.current) return
    setStatus("loading")
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      form.current.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }
  const field =
    "w-full border-0 border-b border-black/30 bg-transparent px-0 py-4 text-lg outline-none placeholder:text-black/35 focus:border-[#ff4d00]"
  return (
    <main id="main-content" className="bg-[#f4f2ea]">
      <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1600px] gap-16 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact / Groningen</p>
          <h1 className="display mt-12">Vertel. Ik luister.</h1>
          <p className="mt-10 max-w-md text-lg leading-8 text-black/65">
            Een nieuw idee, een website die niet meer past, of een systeem dat
            slimmer kan? Deel de context. Je krijgt een eerlijk antwoord over
            wat de beste volgende stap is.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={send}
          className="self-center"
          aria-describedby="form-status"
        >
          <label className="eyebrow" htmlFor="name">
            Naam
          </label>
          <input
            id="name"
            name="from_name"
            required
            autoComplete="name"
            placeholder="Hoe heet je?"
            className={field}
          />
          <label className="eyebrow mt-8 block" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            name="from_email"
            type="email"
            required
            autoComplete="email"
            placeholder="Waar kan ik je bereiken?"
            className={field}
          />
          <label className="eyebrow mt-8 block" htmlFor="message">
            Waar gaat het over?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Vertel iets over de uitdaging, planning en ambitie."
            className={field}
          />
          <button
            disabled={status === "loading"}
            className="mt-10 w-full bg-[#171714] px-6 py-5 text-white transition hover:bg-[#ff4d00] disabled:opacity-50"
          >
            {status === "loading" ? "Wordt verzonden…" : "Verstuur bericht ↗"}
          </button>
          <p
            id="form-status"
            aria-live="polite"
            className="mt-4 min-h-6 text-sm"
          >
            {status === "success" && "Dank je. Je bericht is verstuurd."}
            {status === "error" &&
              "Versturen lukte niet. Mail rechtstreeks of probeer het opnieuw."}
          </p>
        </form>
      </section>
      <Footer />
    </main>
  )
}
