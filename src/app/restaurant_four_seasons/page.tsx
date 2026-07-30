import type { Metadata } from "next"
import Image from "next/image"
import { Footer } from "@/components/Footer"
import { CaseStudyMeta } from "@/components/CaseStudyMeta"
import { CaseStudyNext } from "@/components/CaseStudyNext"
import hero from "/public/assets/four_seasons_restaurant/four_seasons_Hero.jpg"
import image1 from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_img_1.png"
import image2 from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_img_2.png"
import image3 from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_img_3.png"
import welcome from "/public/assets/four_seasons_restaurant/four_seasons_welcome.png"
import food from "/public/assets/four_seasons_restaurant/food.jpg"
import food2 from "/public/assets/four_seasons_restaurant/food_2.jpg"
import logo from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_logo.png"
import design from "/public/assets/four_seasons_restaurant/site_design.png"

export const metadata: Metadata = {
  title: "Restaurant Four Seasons — Case study",
  description:
    "Een warme digitale identiteit en reserveringservaring voor Restaurant Four Seasons.",
}
const meta = [
  { label: "Klant", value: "Restaurant Four Seasons" },
  { label: "Sector", value: "Hospitality" },
  { label: "Werk", value: "Identity, UX, development" },
  { label: "Stack", value: "Next.js, Supabase, EmailJS" },
]

export default function RestaurantFourSeasons() {
  return (
    <main id="main-content" className="bg-[#f1e5d1] text-[#38170f]">
      <header className="grid min-h-[88svh] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-between px-5 py-12 md:px-8 md:py-16">
          <div className="flex items-start justify-between">
            <p className="eyebrow text-[#38170f]/50">Case 03 / Hospitality</p>
            <Image
              src={logo}
              alt="Restaurant Four Seasons"
              className="h-16 w-auto"
            />
          </div>
          <div>
            <h1 className="display">Een eerste indruk die naar meer smaakt.</h1>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#38170f]/65">
              Van nog geen digitale identiteit naar een warme plek waar sfeer,
              verhaal en reserveren vanzelf samenkomen.
            </p>
          </div>
        </div>
        <div className="relative min-h-[60svh]">
          <Image
            src={hero}
            alt="Gerechten van Restaurant Four Seasons"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      </header>
      <section className="px-5 py-8 md:px-8">
        <div className="mx-auto max-w-[1600px]">
          <CaseStudyMeta items={meta} />
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-[#38170f]/50">01 / Van nul</p>
          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              De warmte van de keuken, vertaald naar een scherm.
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#38170f]/65">
              Het restaurant had nog geen digitale identiteit. We begonnen bij
              de echte ervaring: gastvrijheid, Syrische smaken en gerechten om
              samen te delen. Dat werd de basis voor beeld, ritme, taal en
              interactie.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-3 px-3 md:grid-cols-3">
        <div className="relative min-h-[65svh]">
          <Image
            src={image1}
            alt="Restaurantwebsite op mobiel"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative min-h-[65svh]">
          <Image
            src={image2}
            alt="Restaurant Four Seasons digitale uitwerking"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative min-h-[65svh]">
          <Image
            src={image3}
            alt="Restaurant Four Seasons websiteontwerp"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow text-[#38170f]/50">02 / De ervaring</p>
          <div className="mt-8 grid gap-14 lg:grid-cols-2">
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Storytelling die niet in de weg staat van reserveren.
            </h2>
            <div className="text-lg leading-8 text-[#38170f]/65">
              <p>
                De website neemt bezoekers mee in het verhaal, maar houdt
                praktische informatie altijd dichtbij. Een maatwerk backend
                ondersteunt reserveringen en communicatie zonder de visuele
                ervaring zwaar te maken.
              </p>
              <ul className="mt-8 grid gap-3 border-t border-[#38170f]/20 pt-6 text-sm">
                <li>— Visuele identiteit en art direction</li>
                <li>— Mobile-first informatiearchitectuur</li>
                <li>— Reserverings- en e-mailflow</li>
                <li>— Schaalbare technische basis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-3 min-h-[80svh]">
        <Image
          src={food}
          alt="Midden-Oosterse gerechten op tafel"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <section className="bg-[#5f2015] px-5 py-24 text-[#f1e5d1] md:px-8 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow text-white/45">03 / Resultaat</p>
          <h2 className="mt-8 max-w-6xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.93] tracking-[-0.06em]">
            Een professioneel online visitekaartje dat nieuwsgierigheid omzet in
            een reservering.
          </h2>
          <div className="mt-16 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-3">
            <div>
              <strong className="text-5xl font-medium">90</strong>
              <p className="mt-3 text-white/55">
                PageSpeed-score bij oplevering
              </p>
            </div>
            <div>
              <strong className="text-5xl font-medium">1.2s</strong>
              <p className="mt-3 text-white/55">Gemeten laadtijd</p>
            </div>
            <div>
              <strong className="text-5xl font-medium">#1</strong>
              <p className="mt-3 text-white/55">Google-positie op eigen naam</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-3 bg-[#5f2015] p-3 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[75svh]">
          <Image
            src={welcome}
            alt="Welkom bij Restaurant Four Seasons"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-3">
          <div className="relative min-h-[42svh]">
            <Image
              src={food2}
              alt="Gerecht van Restaurant Four Seasons"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex min-h-[30svh] items-center justify-center bg-[#f1e5d1] p-12">
            <Image
              src={design}
              alt="Schets van het websiteontwerp"
              className="max-h-56 w-auto object-contain"
            />
          </div>
        </div>
      </section>
      <CaseStudyNext
        href="/breinoptimaal"
        label="Breinoptimaal"
        eyebrow="Terug naar het begin"
      />
      <Footer />
    </main>
  )
}
