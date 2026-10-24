import Link from "next/link"
import ProjectCard from "@/components/ProjectCard"
import { VideoHero } from "@/components/VideoHero"
import { Footer } from "@/components/Footer"
import brein from "/public/assets/breinoptimaal/health_4.jpg"
import breinHover from "/public/assets/breinoptimaal/breinoptimaal_header.jpg"
import barber from "/public/assets/four_seasons_kapsalon/four_season.jpg"
import barberHover from "/public/assets/four_seasons_kapsalon/barber.jpg"
import restaurant from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_logo_2.png"
import restaurantHover from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_3.png"

export default function Home() {
  return (
    <main id="main-content">
      <VideoHero />
      <section className="bg-[#f4f2ea] px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1600px] grid gap-12 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow">Over ons</p>
          <div>
            <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
              Wij werken graag aan ontwerp en techniek.
            </h2>
            <div className="mt-12 grid gap-8 border-t border-black/20 pt-6 text-sm leading-6 text-black/65 md:grid-cols-2">
              <p>
                Ons werk loopt uiteen van websites en webshops tot
                afspraakplanners. Wij verzorgen het ontwerp en de bouw.
              </p>
              <p>
                Wij houden van rustige ontwerpen en dingen die prettig werken.
                Hieronder vind je een aantal projecten waar wij aan hebben gewerkt.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="work"
        className="scroll-mt-20 bg-[#f4f2ea] px-5 pb-24 md:px-8 md:pb-36"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-black/20 pb-5">
            <h2 className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              Werk
            </h2>
          </div>
          <div className="grid gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              number="01"
              discipline="Webshop"
              url="breinoptimaal"
              title="Breinoptimaal"
              info="Ontwerp en bouw van een webshop voor voedingssupplementen."
              image={brein}
              hoverImage={breinHover}
            />
            <ProjectCard
              number="02"
              discipline="Website & afspraken"
              url="kapsalon_four_seasons"
              title="Kapsalon Four Seasons"
              info="Een website met online afspraakplanner voor de kapsalon."
              image={barber}
              hoverImage={barberHover}
            />
            <ProjectCard
              number="03"
              discipline="Restaurantwebsite"
              url="restaurant_four_seasons"
              title="Restaurant Four Seasons"
              info="Een website met informatie over het restaurant en online reserveren."
              image={restaurant}
              hoverImage={restaurantHover}
            />
          </div>
        </div>
      </section>
      <section className="border-t border-black/15 bg-[#f4f2ea] px-5 py-20 text-[#171714] md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-3xl tracking-tight">Ontwerp</h3>
            <p className="mt-4 max-w-sm leading-7 text-black/65">
              Structuur, indeling en de visuele uitwerking van een website.
            </p>
          </div>
          <div>
            <h3 className="text-3xl tracking-tight">Development</h3>
            <p className="mt-4 max-w-sm leading-7 text-black/65">
              Websites en webshops, met aandacht voor beheer,
              toegankelijkheid en snelheid.
            </p>
          </div>
          <div>
            <h3 className="text-3xl tracking-tight">Onderhoud</h3>
            <p className="mt-4 max-w-sm leading-7 text-black/65">
              Aanpassingen, updates en verdere ontwikkeling van bestaande websites.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-[1600px]">
          <Link
            href="/services"
            className="inline-block border-b border-current pb-1 transition hover:opacity-70"
          >
            Meer over ons werk ↗
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
