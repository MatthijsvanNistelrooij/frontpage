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
  return <main id="main-content"><VideoHero />
    <section className="bg-[#f4f2ea] px-5 py-20 md:px-8 md:py-32"><div className="mx-auto max-w-[1600px] grid gap-12 lg:grid-cols-[1fr_2fr]"><p className="eyebrow">01 / Richting</p><div><h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.055em]">Wij ontwerpen systemen die merken herkenbaar maken en bedrijven vooruit helpen.</h2><div className="mt-12 grid gap-8 border-t border-black/20 pt-6 text-sm leading-6 text-black/65 md:grid-cols-2"><p>Wij zijn een onafhankelijke digitale studio in Groningen. Strategie, ontwerp en techniek zitten aan dezelfde tafel—zodat goede ideeën niet verloren gaan tussen disciplines.</p><p>We werken direct, bouwen zorgvuldig en meten wat beter kan. Klein in bezetting, groot in verantwoordelijkheid.</p></div></div></div></section>
    <section id="work" className="scroll-mt-20 bg-[#f4f2ea] px-5 pb-24 md:px-8 md:pb-36"><div className="mx-auto max-w-[1600px]"><div className="mb-10 flex items-end justify-between border-b border-black/20 pb-5"><h2 className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">Geselecteerd werk</h2><span className="eyebrow">2024—2026</span></div><div className="grid gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3"><ProjectCard number="01" discipline="Commerce" url="breinoptimaal" title="Breinoptimaal" info="Een schaalbare webshop waarin merk, content en checkout als één geheel werken." image={brein} hoverImage={breinHover} /><ProjectCard number="02" discipline="Booking" url="kapsalon_four_seasons" title="Kapsalon Four Seasons" info="Een karaktervolle website en afspraakplanner voor een Gronings begrip." image={barber} hoverImage={barberHover} /><ProjectCard number="03" discipline="Hospitality" url="restaurant_four_seasons" title="Restaurant Four Seasons" info="Een warme digitale identiteit die van eerste bezoek naar reservering leidt." image={restaurant} hoverImage={restaurantHover} /></div></div></section>
    <section className="bg-[#ff4d00] px-5 py-20 text-white md:px-8 md:py-28"><div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-3"><div><p className="eyebrow">01 / Ontwerpen</p><h3 className="mt-5 text-3xl tracking-tight">Een eigen gezicht</h3><p className="mt-4 max-w-sm text-white/75">Positionering, UX en visueel ontwerp dat niet uit een template lijkt te komen.</p></div><div><p className="eyebrow">02 / Bouwen</p><h3 className="mt-5 text-3xl tracking-tight">Snel en solide</h3><p className="mt-4 max-w-sm text-white/75">Moderne websites en systemen met aandacht voor beheer, toegankelijkheid en snelheid.</p></div><div><p className="eyebrow">03 / Verbeteren</p><h3 className="mt-5 text-3xl tracking-tight">Meten wat werkt</h3><p className="mt-4 max-w-sm text-white/75">Doorontwikkelen op basis van gedrag, performance en echte bedrijfsdoelen.</p></div></div><div className="mx-auto mt-16 max-w-[1600px]"><Link href="/services" className="inline-block border-b border-white pb-1">Bekijk de aanpak ↗</Link></div></section>
    <Footer />
  </main>
}
