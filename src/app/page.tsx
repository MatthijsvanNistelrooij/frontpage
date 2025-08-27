"use client"

import ProjectCard from "@/components/ProjectCard"

import four_seasons from "/public/assets/four_seasons_kapsalon/barber.jpg"
import four_seasons_2 from "/public/assets/four_seasons_kapsalon/four_season.jpg"
import four_seasons_restaurant from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_logo_2.png"
import four_seasons_restaurant_2 from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_3.png"
import breinoptimaal from "/public/assets/breinoptimaal/health_4.jpg"
import breinoptimaal_2 from "/public/assets/breinoptimaal/health_3.jpg"

import { Footer } from "@/components/Footer"
import Link from "next/link"
import { useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const toggleVideo = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPaused(false)
    } else {
      videoRef.current.pause()
      setIsPaused(true)
    }
  }

  return (
    <>
      <div className="relative w-full h-[60vh] lg:h-[95vh]">
        <video
          ref={videoRef}
          src="/car_track.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />

        <button
          onClick={toggleVideo}
          className="absolute bottom-5 md:bottom-10 right-5 md:right-10 z-20 text-white p-3 rounded-full hover:bg-black/20 transition cursor-pointer"
        >
          {isPaused ? <Play /> : <Pause />}
        </button>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1
            className="text-white text-6xl px-8 md:text-[6rem] lg:text-[6rem] text-center drop-shadow-lg max-w-3xl lg:max-w-5xl mb-10 tracking-wide"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            A turbo-charged digital powerhouse.
          </h1>
        </div>
      </div>
      <section
        id="work"
        className="bg-[#fffffb] flex items-center justify-center"
      >
        <div className="container mx-auto px-8 py-12">
          <div
            className="text-[#1a1a1a] text-xl md:text-2xl font-medium text-start max-w-md md:max-w-3xl tracking-wider my-20"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Wij zijn een innovatief bedrijf dat vernieuwende techniek combineert
            met design om projecten te realiseren die werken. Of het nu gaat om
            een merk dat zich wil onderscheiden, een website die intuïtief is,
            of een app die iets toevoegt – wij brengen altijd een slimme,
            doordachte aanpak. 😉
          </div>
          <h2 className="text-6xl md:text-8xl font-light text-start mb-10 text-[#1a1a1a]">
            Ons Werk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-28 md:gap-8">
            <ProjectCard
              url="breinoptimaal"
              info="Een Healthy Webshop, gebouwd op de kracht van Stripe en Sanity, voor Breinoptimaal."
              title="Breinoptimaal"
              image={breinoptimaal}
              hoverImage={breinoptimaal_2}
            />
            <ProjectCard
              image={four_seasons_2}
              hoverImage={four_seasons}
              url="kapsalon_four_seasons"
              info="We brachten Kapsalon Four Seasons naar het digitale tijdperk met een up-to-date landing & custom afspraakplanner."
              title="Kapsalon Four Seasons"
            />
            <ProjectCard
              url="restaurant_four_seasons"
              info="Met een frisse, moderne website staat Restaurant Four Seasons op de kaart."
              title="Restaurant Four Seasons"
              image={four_seasons_restaurant}
              hoverImage={four_seasons_restaurant_2}
            />
          </div>
          <div className="text-center mt-42 mb-10 text-4xl md:text-5xl text-[#1a1a1a]">
            Data stuurt onze koers, de koers volgt onze data.
          </div>
          <div className="flex w-full justify-center text-center mb-20">
            <Link
              href={"/services"}
              style={{ fontFamily: "var(--font-mono)" }}
              className={
                " text-[#1a1a1a] p-4 px-8 mb-12 border border-[#1a1a1a] hover:text-white hover:bg-[#1a1a1a] cursor-pointer"
              }
            >
              BEKIJK WAT WE DOEN
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
