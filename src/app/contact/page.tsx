"use client"
import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Footer } from "@/components/Footer"

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!form.current) return

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false)
        setSuccess(true)
        form.current?.reset()
        setTimeout(() => setSuccess(false), 4000)
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
      })
  }
  return (
    <div className="bg-white min-h-screen">
      <div className="container flex flex-col lg:flex-row justify-center mx-auto gap-10 md:py-18 px-8">
        <div className="container flex flex-col items-center justify-center mx-auto mt-5 md:mt-20">
          <div className="text-black text-5xl sm:text-6xl md:text-8xl text-start">
            Elke samenwerking als katalysator voor groei
          </div>

          <div className="text-black text-xl text-start mt-6 mb-10">
            Ben je geïnteresseerd in samenwerken? Of wil je gewoon eens een idee
            bespreken? Neem contact op en laten we kijken hoe we samen iets
            moois kunnen realiseren.
          </div>
        </div>
        <section className="w-full lg:mt-20 mb-20">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
            style={{ fontFamily: "var(--font-roboto-slab)" }}
          >
            <div>
              <input
                type="text"
                name="from_name"
                required
                placeholder="NAAM"
                className="w-full border border-black text-black px-2 py-2"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                required
                placeholder="EMAIL"
                className="w-full border border-black text-black px-2 py-2"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="JE BERICHT"
                className="w-full border border-black text-black px-2 py-2"
              />
            </div>
            <div className="flex w-full justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#1a1a1a] flex gap-2 w-full justify-center text-center px-8 py-4 hover:text-white text-white transition cursor-pointer font-light"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                NEEM CONTACT OP
              </button>
            </div>
            {success && (
              <p className="text-green-600 text-sm mt-2">
                Bericht succesvol verzonden!
              </p>
            )}
          </form>
        </section>
      </div>
      <Footer />
      <div className="bg-[#1a1a1a] h-80"></div>
      <div className="bg-[#1a1a1a] h-80"></div>
      <div className="bg-[#1a1a1a] h-80"></div>
      <div className="bg-[#1a1a1a] h-80"></div>
      <div className="bg-[#1a1a1a] h-80"></div>
      <div className="bg-[#1a1a1a] h-80"></div>
      <div className="bg-[#1a1a1a] h-80"></div>
    </div>
  )
}

export default Contact
