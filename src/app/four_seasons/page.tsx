"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import heroImage from "/public/assets/kapsalon_four_seasons_1.png"
import image2 from "/public/logo_header.png"
import image3 from "/public/kapsalon-four-seasons-groningen.png"
import Link from "next/link"
import tech_logo1 from "/public/next.svg"
import tech_logo2 from "/public/vercel.png"
import tech_logo3 from "/public/appwrite.png"
import tech_logo4 from "/public/twilio.png"
import four_seasons_3 from "/public/assets/kapsalon_four_seasons_3.png"

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
      <div className="flex flex-col bg-white">
        <div className="relative w-full min-h-[50vh] max-h-[17vh] md:min-h-[80vh] overflow-hidden">
          <Image
            src={heroImage}
            alt="Four Seasons Hero"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-8 py-12">
          <div
            className="text-black text-center tracking-widest m-10 text-sm lg:max-w-5xl mx-auto"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            kracht en schoonheid samengebracht
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-gray-800 mb-20 lg:max-w-5xl mx-auto">
            Four Seasons, een kapsalon die al 20 jaar actief is in Groningen,
            had een high-end front-end nodig waar gasten moeiteloos een afspraak
            in kunnen plannen. Ons team heeft gewerkt aan een ervaring die zowel
            visueel indrukwekkend als gebruiksvriendelijk is. Met een robuuste
            tech stack die zorgt voor snelheid, betrouwbaarheid en optimale
            prestaties.
          </p>

          <div className="mb-8 mt-20">
            <div className="flex">
              <video
                src="/fourSeasons_demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className=""
              />
            </div>
          </div>

          <div className="text-start mt-20 mb-10 text-3xl md:text-6xl text-black lg:max-w-6xl mx-auto">
            Een Bouwen-Terwijl-We-Gaan Benadering
          </div>
          <p className="text-black text-base md:text-[1rem] tracking-wider lg:max-w-6xl mx-auto">
            De kapperszaak ontbrak het aan een moderne oplossing voor het
            inplannen van afspraken. Dit project toont onze aanpak van high-end
            design gecombineerd met functionele en creatieve oplossingen. Elk
            detail is zorgvuldig uitgewerkt om een samenhangende ervaring te
            creëren. Op een manier die luxe en functionaliteit combineren.
          </p>
          <div className="mb-8 mt-20">
            <div className="flex">
              <video
                src="/four_seasons_appointment.mp4"
                autoPlay
                muted
                loop
                playsInline
                className=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-20 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="max-w-xl">
              <h2 className="text-black text-5xl mb-6">
                Een Tech Stack Die Werkt
              </h2>
              <ul className="space-y-4 text-black">
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Next.js:</span> Cutting-edge
                    JavaScript-framework voor het bouwen van snelle en
                    betrouwbare websites
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Vercel:</span> Schaalbaar platform voor
                    het betrouwbaar hosten en deployen van Next.js-applicaties
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Appwrite:</span> Open-source Headless
                    backend server voor authenticatie, databases en opslag
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Twilio:</span> Krachtige API voor SMS,
                    e-mail en andere communicatie-integraties
                  </span>
                </li>
              </ul>
            </div>
            <Image
              src={techLogos[currentLogo]}
              alt="tech_logo"
              width={200}
              height={200}
              className="transition-opacity duration-700"
            />
          </div>

          <div className="w-full mt-30">
            <Image
              src={image3}
              alt="Image 3"
              className="w-full h-auto object-contain my-40 border border-black p-5"
            />
          </div>

          <div className="flex flex-col md:flex-row mt-20 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="w-full">
              <h2 className="text-black text-5xl mb-6">Onze Services</h2>
              <ul className="space-y-4 text-black">
                <li className="flex items-start gap-2">
                  <span className="">•</span>
                  <span>
                    Hoogwaardig design en prototypes in Figma uitgewerkt voor
                    een duidelijke visualisatie van het project
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
            <div className="w-full border p-5 md:p-10">
              <Image
                src={four_seasons_3}
                alt="Image 3"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full my-30">
            <Image
              src={image2}
              alt="Image 2"
              className="w-full h-auto object-contain my-40 "
            />
          </div>

          <div className="text-black text-center text-6xl lg:text-8xl mt-20 lg:max-w-6xl mx-auto">
            <div>Een site die echt geknipt is</div>

            <div className="flex flex-col md:flex-row justify-center mt-20 gap-10 lg:max-w-6xl mx-auto">
              <div className="text-start text-9xl md:text-8xl md:text-center lg:text-9xl">
                +90%
                <div className="text-lg font-normal mt-5">
                  Sneller volgens Google PageSpeed
                </div>
              </div>
              <div className="text-start text-9xl md:text-8xl md:text-center lg:text-9xl">
                1.2s
                <div className="text-lg font-normal mt-5">
                  Verbeterde laadtijd
                </div>
              </div>
              <div className="text-start text-9xl md:text-8xl md:text-center lg:text-9xl">
                +50
                <div className="text-lg font-normal mt-5">
                  Succesvolle afspraken sinds livegang
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8 mt-20">
            <div className="w-full relative">
              <Image src={image2} alt="Image 2" fill className="object-cover" />
            </div>
          </div>
          <div
            className="text-black text-center tracking-widest mt-20 mb-10 text-sm lg:max-w-6xl mx-auto"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            kracht en schoonheid samengebracht
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-gray-800 mb-20 lg:max-w-6xl mx-auto">
            Het resultaat van dit project plaatst de kapsalon in een sterke
            positie voor de komende jaren: met een vernieuwde online
            aanwezigheid, snelle laadtijden en een optimale gebruikerservaring.
            Dankzij onze oplossingen geniet de klant van een efficiënte en
            professionele website die precies aansluit bij hun visie, waardoor
            de kapsalon klaar is om uit te blinken in de digitale wereld.
          </p>
          <div className="text-center mt-20 mb-10 text-5xl text-black leading-16">
            Wil Je Ook Een Eigen Afspraak Planner?
          </div>

          <div className="flex w-full justify-center text-center">
            <Link
              href={"/contact"}
              style={{ fontFamily: "var(--font-mono)" }}
              className={
                " text-black p-4 mb-10 border border-black hover:text-white hover:bg-black cursor-pointer"
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
