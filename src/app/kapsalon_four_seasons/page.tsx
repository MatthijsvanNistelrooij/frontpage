import type { Metadata } from "next"
import Image from "next/image"
import { Footer } from "@/components/Footer"
import { CaseStudyMeta } from "@/components/CaseStudyMeta"
import { CaseStudyNext } from "@/components/CaseStudyNext"
import hero from "/public/assets/four_seasons_kapsalon/barber.jpg"
import barber3 from "/public/assets/four_seasons_kapsalon/barber_3.jpg"
import barber4 from "/public/assets/four_seasons_kapsalon/barber_4.jpg"
import barber5 from "/public/assets/four_seasons_kapsalon/barber_5.jpg"
import barber6 from "/public/assets/four_seasons_kapsalon/barber_6.jpg"
import barber7 from "/public/assets/four_seasons_kapsalon/barber_7.jpg"
import logo from "/public/assets/four_seasons_kapsalon/four_seasons_logo.png"

export const metadata: Metadata = {
  title: "Kapsalon Four Seasons — Case study",
  description:
    "Een karaktervolle website en maatwerk afspraakplanner voor Kapsalon Four Seasons.",
}
const meta = [
  { label: "Klant", value: "Kapsalon Four Seasons" },
  { label: "Locatie", value: "Groningen" },
  { label: "Werk", value: "UX, design, development" },
  { label: "Stack", value: "Next.js, Appwrite, Twilio" },
]

export default function KapsalonFourSeasons() {
  return (
    <main id="main-content" className="bg-[#171714] text-[#eee9df]">
      <header className="relative min-h-[88svh] overflow-hidden">
        <Image
          src={hero}
          alt="Barbier aan het werk in Kapsalon Four Seasons"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#171714]" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-[1600px] flex-col justify-between px-5 py-12 md:px-8 md:py-16">
          <div className="flex justify-between">
            <p className="eyebrow">Case 02 / Kapsalon Four Seasons</p>
            <Image
              src={logo}
              alt="Four Seasons"
              className="h-16 w-80 object-contain"
            />
          </div>
          <div>
            <h1 className="display max-w-7xl">
              Twintig jaar vakmanschap. Eén nieuwe voordeur.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              Een directe website en afspraakplanner die net zo soepel werkt als
              de zaak zelf.
            </p>
          </div>
        </div>
      </header>
      <section className="px-5 py-8 md:px-8">
        <div className="mx-auto max-w-[1600px]">
          <CaseStudyMeta items={meta} dark />
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-white/45">01 / De uitdaging</p>
          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Minder regelen aan de telefoon. Meer aandacht in de stoel.
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/60">
              Afspraken kwamen via verschillende kanalen binnen. De nieuwe
              ervaring moest klanten zelfstandig naar het juiste moment leiden,
              zonder de persoonlijke sfeer van de kapsalon kwijt te raken.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3">
        <div className="overflow-hidden rounded-[0.3rem] border border-white/15 bg-[#0d0d0c] p-2 md:p-5">
          <video
            src="/fourSeasons_demo.mp4"
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label="Demonstratie van de Four Seasons-afspraakplanner"
            className="w-full"
          />
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-white/45">02 / De benadering</p>
              <h2 className="mt-8 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
                Kort, duidelijk en gebouwd rondom de agenda.
              </h2>
            </div>
            <div className="self-end text-lg leading-8 text-white/60">
              <p>
                We beperkten het aantal stappen, maakten beschikbaarheid direct
                zichtbaar en automatiseerden bevestigingen. De robuuste
                zwart-wit art direction sluit aan bij de ruimte en het
                vakmanschap.
              </p>
              <ul className="mt-8 grid gap-3 border-t border-white/20 pt-6 text-sm">
                <li>— Beschikbaarheid en blokkades in realtime</li>
                <li>— Automatische afspraakbevestigingen</li>
                <li>— Mobile-first reserveringsflow</li>
                <li>— Beheer zonder technische tussenkomst</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3 px-3 md:grid-cols-2">
        <div className="relative min-h-[72svh]">
          <Image
            src={barber5}
            alt="Interieur van Kapsalon Four Seasons"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale"
          />
        </div>
        <div className="relative min-h-[72svh]">
          <Image
            src={barber6}
            alt="Barbier behandelt een klant"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale"
          />
        </div>
      </section>
      <section className="bg-[#eee9df] px-5 py-24 text-[#171714] md:px-8 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow text-black/45">03 / Resultaat</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[2fr_1fr]">
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.93] tracking-[-0.06em]">
              Een digitale collega die ook na sluitingstijd afspraken aanneemt.
            </h2>
            <div className="grid content-end gap-8">
              <div>
                <strong className="text-5xl font-medium">50+</strong>
                <p className="mt-2 text-black/55">Afspraken kort na livegang</p>
              </div>
              <div>
                <strong className="text-5xl font-medium">24/7</strong>
                <p className="mt-2 text-black/55">Online beschikbaarheid</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-3 bg-[#eee9df] p-3 md:grid-cols-[1.4fr_0.6fr]">
        <div className="relative min-h-[72svh]">
          <Image
            src={barber4}
            alt="Four Seasons visuele campagne"
            fill
            sizes="(min-width: 768px) 70vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-3">
          <div className="relative min-h-[34svh]">
            <Image
              src={barber3}
              alt="Four Seasons websitebeeld"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[34svh]">
            <Image
              src={barber7}
              alt="Kapsalon Four Seasons exterieur"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <CaseStudyNext
        href="/restaurant_four_seasons"
        label="Restaurant Four Seasons"
      />
      <Footer />
    </main>
  )
}
