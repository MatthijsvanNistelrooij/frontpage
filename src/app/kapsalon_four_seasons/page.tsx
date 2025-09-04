"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import tech_logo1 from "/public/next.svg"
import tech_logo2 from "/public/assets/tech_logo/vercel.png"
import tech_logo3 from "/public/assets/tech_logo/appwrite.png"
import tech_logo4 from "/public/assets/tech_logo/twilio.png"

import heroImage from "/public/assets/four_seasons_kapsalon/barber.jpg"
import image2 from "/public/assets/four_seasons_kapsalon/logo_header.png"
import barber_5 from "/public/assets/four_seasons_kapsalon/barber_5.jpg"
import barber_6 from "/public/assets/four_seasons_kapsalon/barber_6.jpg"
import barber_7 from "/public/assets/four_seasons_kapsalon/barber_7.jpg"

import four_seasons_3 from "/public/assets/four_seasons_kapsalon/barber_3.jpg"
import four_seasons_4 from "/public/assets/four_seasons_kapsalon/barber_4.jpg"

import overlayImage from "/public/assets/four_seasons_kapsalon/four_seasons_logo.png"

import { Footer } from "@/components/Footer"

const techLogos = [tech_logo1, tech_logo2, tech_logo3, tech_logo4]

const FourSeasons = () => {
  const [currentLogo, setCurrentLogo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % techLogos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className="flex flex-col bg-[#fffffb]">
        <div className="relative w-full min-h-[50vh] md:min-h-[100vh] overflow-hidden flex items-center justify-center">
          <Image
            src={heroImage}
            alt="Four Seasons Hero"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative flex items-center justify-center w-2/4 md:w-2/6">
            <button
              onClick={() => {
                const el = document.getElementById("section")
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <Image
                src={overlayImage}
                alt="Overlay"
                className="object-contain w-full h-auto cursor-pointer mb-20"
              />
            </button>
          </div>
        </div>

        <div id="section" className="container mx-auto px-8 py-12 ">
          <div
            className="text-[#1a1a1a] text-center tracking-widest m-10 text-sm lg:max-w-5xl mx-auto"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            kracht en schoonheid gecombineerd
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-[#1a1a1a] mb-30 lg:max-w-5xl mx-auto">
            Four Seasons, een kapsalon die al 20 jaar actief is in Groningen,
            had een website nodig waar gasten moeiteloos een afspraak in kunnen
            plannen. Ons team heeft gewerkt aan een visuele ervaring die zowel
            eenvoudig als indrukwekkend is. Met een bewezen Tech-Stack zorgen we
            voor snelheid, betrouwbaarheid en optimale prestaties.
          </p>

          <div className="mb-8 mt-20 shadow rounded-xl">
            <div className="flex">
              <video
                src="/fourSeasons_demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl shadow"
              />
            </div>
          </div>

          <div className="text-start mt-30 mb-10 text-5xl md:text-6xl text-[#1a1a1a] lg:max-w-6xl mx-auto">
            Een Trim & Shave Benadering
          </div>
          <div className="text-[#1a1a1a] text-xl text-start mt-6 mb-30 lg:max-w-6xl mx-auto">
            De kapperszaak zocht een moderne manier om afspraken in te plannen.
            Voor dit project combineerden we een high-end design met functionele
            oplossingen, waarbij elk detail bijdraagt aan een vloeiende en
            samenhangende gebruikerservaring.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-30">
            <div className="w-full h-140 relative">
              <Image
                src={barber_5}
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-140 relative">
              <Image
                src={barber_6}
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-20 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="max-w-xl text-[1.2rem]">
              <div className="text-start mb-10 text-5xl md:text-6xl text-[#1a1a1a] lg:max-w-6xl mx-auto">
                Een Tech Stack in Stijl
              </div>
              <ul className="space-y-4 text-[#1a1a1a] p-5">
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Next.js:</span> Modern
                    JavaScript-framework voor het bouwen van snelle en
                    gebruiksvriendelijke websites
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Vercel:</span> Betrouwbaar en schaalbaar
                    platform voor hosting en deployen van Next.js-applicaties
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Appwrite:</span> Open-source Headless
                    backend voor authenticatie, database en opslag
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Twilio:</span> Veelzijdige API voor het
                    automatiseren van WhatsApp, SMS en andere berichtenstromen.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={techLogos[currentLogo]}
                alt="tech_logo"
                className="transition-opacity duration-700 w-48 md:w-64 lg:w-96 xl:w-[400px] h-auto"
              />
            </div>
          </div>

          <div className="w-full my-30">
            <Image
              src={four_seasons_4}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col md:flex-row mt-30 mb-30 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="w-full text-[1.2rem]">
              <div className="text-start mb-10 text-5xl md:text-6xl text-[#1a1a1a] lg:max-w-6xl mx-auto">
                Onze Diensten
              </div>
              <ul className="space-y-4 text-[#1a1a1a] p-5">
                <li className="flex items-start gap-2">
                  <span className="">•</span>
                  <span>
                    Hoogwaardig design en prototypes uitgewerkt voor een
                    duidelijke visualisatie van het project
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="">•</span>
                  <span>
                    Uitgebreide QA-tests uitgevoerd om een vlekkeloze
                    gebruikerservaring te garanderen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="">•</span>
                  <span>
                    Efficiënt projectmanagement toegepast om deadlines te halen
                    en verwachtingen te overtreffen
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <Image
                src={image2}
                alt="Image 3"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="w-full my-30">
            <Image
              src={four_seasons_3}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="text-[#1a1a1a] text-center text-6xl lg:text-8xl mt-20">
            <div>Een Site Die Geknipt Is</div>
            <div className="flex flex-col md:flex-row justify-between mt-20 gap-10">
              <div className="text-start text-9xl md:text-center">
                90%
                <div className="text-lg md:text-xl lg:text-2xl font-normal mt-5">
                  Sneller volgens Google PageSpeed
                </div>
              </div>
              <div className="text-start text-9xl md:text-center">
                1.2s
                <div className="text-lg md:text-xl lg:text-2xl font-normal mt-5">
                  Verbeterde laadtijd
                </div>
              </div>
              <div className="text-start text-9xl md:text-center">
                +50
                <div className="text-lg md:text-xl lg:text-2xl font-normal mt-5">
                  Afspraken sinds livegang
                </div>
              </div>
            </div>
          </div>

          <div className="w-full my-30">
            <Image
              src={barber_7}
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>

          <div
            className="text-[#1a1a1a] text-center tracking-widest mt-20 mb-10 text-sm lg:max-w-6xl mx-auto"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            een moderne uitstraling, klaar voor de toekomst
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-[#1a1a1a] mb-20 lg:max-w-6xl mx-auto">
            Het resultaat van dit project plaatst de kapsalon in een sterke
            positie: een vernieuwde online aanwezigheid, snelle laadtijden en
            een optimale gebruikerservaring. Dankzij onze oplossingen geniet de
            klant van een efficiënte en professionele website die perfect
            aansluit bij de visie en klaar is om uit te blinken in de digitale
            wereld.
          </p>
          <div className="text-center mt-30 mb-10 text-5xl text-[#1a1a1a] leading-16">
            Ook Een Eigen Afspraak Planner?
          </div>

          <div className="flex w-full justify-center text-center mb-20">
            <Link
              href={"/contact"}
              style={{ fontFamily: "var(--font-mono)" }}
              className={
                " text-[#1a1a1a] p-4 px-8 mb-10 border border-[#1a1a1a] hover:text-white hover:bg-[#1a1a1a] cursor-pointer"
              }
            >
              NEEM CONTACT OP
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default FourSeasons
