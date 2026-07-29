import type { Metadata } from "next"
import Image from "next/image"
import { Footer } from "@/components/Footer"
import { CaseStudyMeta } from "@/components/CaseStudyMeta"
import { CaseStudyNext } from "@/components/CaseStudyNext"
import hero from "/public/assets/breinoptimaal/breinoptimaal_header.jpg"
import base from "/public/assets/breinoptimaal/breinoptimaal_base.jpg"
import health1 from "/public/assets/breinoptimaal/health_1.jpg"
import health4 from "/public/assets/breinoptimaal/health_4.jpg"
import health5 from "/public/assets/breinoptimaal/health_5.jpg"
import health9 from "/public/assets/breinoptimaal/health_9.jpg"
import oats from "/public/assets/breinoptimaal/oats.jpg"
import bottle from "/public/assets/breinoptimaal/breinoptimaal_bottle.png"

export const metadata: Metadata = {
  title: "Breinoptimaal — Case study",
  description: "Merkbeleving en schaalbare e-commerce voor Breinoptimaal.",
}
const meta = [
  { label: "Klant", value: "Breinoptimaal" },
  { label: "Sector", value: "Health & commerce" },
  { label: "Werk", value: "UX, design, development" },
  { label: "Stack", value: "Next.js, Sanity, Stripe" },
]

export default function Breinoptimaal() {
  return (
    <main id="main-content" className="bg-[#e9eee7] text-[#14261d]">
      <header className="px-5 pb-10 pt-16 md:px-8 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow text-[#14261d]/50">Case 01 / Breinoptimaal</p>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[2fr_1fr]">
            <h1 className="display">Rust in het merk. Snelheid in de shop.</h1>
            <p className="max-w-md text-lg leading-8 text-[#14261d]/65">
              Een digitaal fundament voor een gezondheidsmerk met internationale
              ambitie—helder in gebruik, flexibel in beheer en gebouwd om te
              verkopen.
            </p>
          </div>
          <div className="mt-16">
            <CaseStudyMeta items={meta} />
          </div>
        </div>
      </header>
      <div className="relative min-h-[72svh]">
        <Image
          src={hero}
          alt="Breinoptimaal-producten in een lichte wellnessomgeving"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow">01 / De vraag</p>
          <div>
            <h2 className="max-w-5xl text-[clamp(2.7rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Van product naar geloofwaardig gezondheidsmerk.
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#14261d]/65">
              Breinoptimaal had meer nodig dan een standaard webshop. Het
              platform moest vertrouwen wekken, complexe productinformatie
              begrijpelijk maken en tegelijk eenvoudig blijven voor het team dat
              de content beheert.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-3 px-3 md:grid-cols-[1.35fr_0.65fr]">
        <div className="relative min-h-[70svh]">
          <Image
            src={base}
            alt="Breinoptimaal-verpakking in natuurlijke setting"
            fill
            sizes="(min-width: 768px) 68vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative min-h-[55svh] bg-[#cfd9cc]">
          <Image
            src={bottle}
            alt="Fles Breinoptimaal supplement"
            fill
            sizes="(min-width: 768px) 32vw, 100vw"
            className="object-contain p-12"
          />
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow">02 / Het systeem</p>
          <div className="mt-8 grid gap-14 lg:grid-cols-2">
            <h2 className="text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Content die het team zelf in beweging houdt.
            </h2>
            <div className="grid content-start gap-8 text-lg leading-8 text-[#14261d]/65">
              <p>
                We brachten merkverhaal, productbewijs en checkout samen in één
                rustige klantreis. Sanity geeft het team controle over producten
                en verhalen; Stripe maakt afrekenen direct en betrouwbaar.
              </p>
              <ul className="grid gap-3 border-t border-[#14261d]/20 pt-6 text-sm">
                <li>— Modulair contentmodel in Sanity</li>
                <li>— Veilige, korte checkout met Stripe</li>
                <li>— Responsive product- en verhaalpagina’s</li>
                <li>— Technische basis voor verdere groei</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-3 min-h-[78svh]">
        <Image
          src={health1}
          alt="Lifestylefotografie voor Breinoptimaal"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <section className="bg-[#14261d] px-5 py-24 text-[#e9eee7] md:px-8 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow text-white/45">03 / Resultaat</p>
          <h2 className="mt-8 max-w-6xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.93] tracking-[-0.06em]">
            Een gezonde basis die niet opnieuw gebouwd hoeft te worden zodra het
            merk groeit.
          </h2>
          <div className="mt-16 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-3">
            <div>
              <strong className="text-5xl font-medium">100%</strong>
              <p className="mt-3 text-white/55">Veilige Stripe-checkout</p>
            </div>
            <div>
              <strong className="text-5xl font-medium">±1s</strong>
              <p className="mt-3 text-white/55">Gemeten gemiddelde laadtijd</p>
            </div>
            <div>
              <strong className="text-5xl font-medium">20+</strong>
              <p className="mt-3 text-white/55">
                Eerste bestellingen na lancering
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-3 bg-[#14261d] p-3 md:grid-cols-4">
        {[
          [health5, "Gezonde ingrediënten"],
          [health9, "Lifestylebeeld"],
          [oats, "Haver en natuurlijke voeding"],
          [health4, "Breinoptimaal campagnebeeld"],
        ].map(([src, alt]) => (
          <div key={alt as string} className="relative aspect-[3/4]">
            <Image
              src={src}
              alt={alt as string}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>
      <CaseStudyNext
        href="/kapsalon_four_seasons"
        label="Kapsalon Four Seasons"
      />
      <Footer />
    </main>
  )
}
