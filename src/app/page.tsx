"use client"

import ProjectCard from "@/components/ProjectCard"
import four_seasons from "/public/assets/kapsalon_four_seasons_1.png"
import four_seasons_2 from "/public/assets/kapsalon_four_seasons_2.png"
import four_seasons_logo from "/public/assets/restaurant_four_seasons_3.png"
import four_seasons_restaurant from "/public/assets/restaurant_four_seasons_logo.png"
import { Footer } from "@/components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[60vh] lg:h-screen">
        <video
          src="/stock_small.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-5xl md:text-8xl lg:text-[6.5rem] text-center drop-shadow-lg max-w-3xl lg:max-w-5xl">
            A spark of magic in every pixel.
          </h1>
        </div>
      </div>

      <section id="work" className="bg-white flex items-center justify-center">
        <div className="container mx-auto px-6 py-12">
          <div
            className="text-black text-xl md:text-2xl font-medium text-start max-w-md md:max-w-3xl tracking-wider my-20"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Wij zijn een creatief team dat niet bang is om buiten de lijntjes te
            kleuren. Design, techniek, strategie – wij pakken het allemaal aan,
            en doen dat op een manier die wél werkt. Of het nu gaat om een merk
            dat moet knallen, een website die blijft hangen of een app die je
            écht nodig hebt – wij vinden altijd een slimme en verrassende
            oplossing. En ja, we hebben er ook nog eens plezier in. 😉🚀
          </div>
          <h2 className="text-6xl md:text-8xl font-light text-start mb-10 text-black">
            Ons Werk
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              hoverImage={four_seasons_2}
              url="four_seasons"
              info="We halen kapsalon Four Seasons naar het nieuwe tijdperk met een up-to-date landing en custom afspraakplanner."
              title="Four Seasons"
              image={four_seasons}
            />
            <ProjectCard
              url="restaurant"
              info="Een modern, vers design met een huisgemaakte style voor Restaurant Four Seasons"
              title="Four Seasons Restaurant"
              image={four_seasons_restaurant}
              hoverImage={four_seasons_logo}
            />
          </div>
          <div className="text-center mt-30 mb-10 text-5xl text-black">
            We volgen de data, maar laten ons leiden door nieuwsgierigheid.
          </div>
          <div className="flex w-full justify-center text-center">
            <Link
              href={"/services"}
              style={{ fontFamily: "var(--font-mono)" }}
              className={
                " text-black p-4 mb-10 border border-black hover:text-white hover:bg-black cursor-pointer"
              }
            >
              BEKIJK ONZE SERVICES
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
