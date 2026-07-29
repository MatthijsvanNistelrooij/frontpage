import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import hero from "/public/assets/service.jpg"

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Van digitale richting tot ontwerp, development en doorontwikkeling.",
}
const services = [
  {
    n: "01",
    title: "Richting & ontwerp",
    text: "We brengen doelen, doelgroep en inhoud terug tot een scherpe digitale richting. Daarna maken we die tastbaar in structuur, prototypes en een onderscheidend visueel systeem.",
    tags: "Strategie · UX · UI design · Prototyping · Art direction",
  },
  {
    n: "02",
    title: "Websites & systemen",
    text: "We vertalen het ontwerp naar een snel, toegankelijk en beheersbaar product. Van merkwebsite tot webshop of maatwerk reserveringssysteem.",
    tags: "Next.js · Headless CMS · E-commerce · Integraties · QA",
  },
  {
    n: "03",
    title: "Groei & verbetering",
    text: "Na livegang begint het echte werk. We onderzoeken waar bezoekers afhaken, verbeteren performance en bouwen gericht verder op wat aantoonbaar werkt.",
    tags: "Analytics · SEO · Performance · Conversie · Doorontwikkeling",
  },
]

export default function Services() {
  return (
    <main id="main-content" className="bg-[#f4f2ea]">
      <section className="grid min-h-[72svh] lg:grid-cols-2">
        <div className="flex flex-col justify-between px-5 py-12 md:px-8 md:py-16">
          <p className="eyebrow">Diensten / Van richting naar resultaat</p>
          <h1 className="display mt-20">Scherp bedacht. Zorgvuldig gebouwd.</h1>
          <p className="mt-10 max-w-lg text-lg leading-8 text-black/65">
            Geen eindeloze lijst losse diensten, maar een helder traject waarin
            strategie, ontwerp en techniek elkaar versterken.
          </p>
        </div>
        <div className="relative min-h-[50vh] overflow-hidden">
          <Image
            src={hero}
            alt="Detail van een racewagen op snelheid"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          {services.map((service) => (
            <article
              key={service.n}
              className="grid gap-5 border-t border-black/20 py-10 md:grid-cols-[1fr_2fr_1fr]"
            >
              <p className="eyebrow">{service.n}</p>
              <div>
                <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">
                  {service.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
                  {service.text}
                </p>
              </div>
              <p className="text-sm leading-7 text-black/55">{service.tags}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#171714] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-[1600px] grid gap-10 md:grid-cols-2">
          <p className="eyebrow text-white/50">Werkwijze</p>
          <div>
            <h2 className="text-5xl leading-none tracking-[-0.05em] md:text-7xl">
              Kort op de bal, open over keuzes.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              Je werkt rechtstreeks met degene die ontwerpt en bouwt. We starten
              klein, delen werk vroeg en nemen beslissingen op basis van
              doelen—niet op smaak alleen.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block border-b border-[#ff4d00] pb-2 text-[#ff4d00]"
            >
              Bespreek een project ↗
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
