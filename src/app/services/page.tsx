import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import hero from "/public/assets/service.jpg"

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Ontwerp, development en onderhoud van websites en webshops.",
}
const services = [
  {
    n: "01",
    title: "Ontwerp",
    text: "We bespreken wat de website nodig heeft. Wij werken de structuur en het ontwerp uit, met ruimte om samen te kijken en bij te stellen.",
    tags: "Structuur · UX · UI design · Prototypes",
  },
  {
    n: "02",
    title: "Websites & systemen",
    text: "Wij bouwen websites, webshops en afspraakplanners. Daarbij besteden we aandacht aan hoe de website werkt voor bezoekers en hoe je de inhoud zelf kunt bijhouden.",
    tags: "Websites · Webshops · CMS · Koppelingen",
  },
  {
    n: "03",
    title: "Onderhoud",
    text: "Na oplevering kunnen wij helpen met updates, aanpassingen en nieuwe onderdelen. Soms gaat het om een kleine wijziging, soms om wat meer uitzoekwerk.",
    tags: "Updates · Aanpassingen · Doorontwikkeling",
  },
]

export default function Services() {
  return (
    <main id="main-content" className="bg-[#f4f2ea]">
      <section className="grid min-h-[72svh] lg:grid-cols-2">
        <div className="flex flex-col justify-between px-5 py-12 md:px-8 md:py-16">
          <p className="eyebrow">Diensten</p>
          <h1 className="display mt-20">Ontwerp en development.</h1>
          <p className="mt-10 max-w-lg text-lg leading-8 text-black/65">
            Wij werken aan nieuwe websites en aan bestaande projecten.
            Dit zijn de onderdelen waarbij wij kunnen helpen.
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
              Samen aan een project werken.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              We beginnen met een gesprek over je idee. Daarna bespreken we
              wat er nodig is en wat haalbaar is. Tijdens het werk laten wij
              tussentijds zien hoe het ervoor staat.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block border-b border-[#ff4d00] pb-2 text-[#ff4d00]"
            >
              Neem contact op ↗
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
