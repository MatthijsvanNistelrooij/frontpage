"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/Footer"

import tech_logo1 from "/public/next.svg"
import tech_logo2 from "/public/assets/tech_logo/vercel.png"
import tech_logo3 from "/public/assets/tech_logo/sanity.png"
import tech_logo4 from "/public/assets/tech_logo/stripe.png"
import concept_1 from "/public/assets/breinoptimaal/concept_1.jpg"
import health_9 from "/public/assets/breinoptimaal/health_9.jpg"
import health_5 from "/public/assets/breinoptimaal/health_5.jpg"
import oats from "/public/assets/breinoptimaal/oats.jpg"
import health_1 from "/public/assets/breinoptimaal/health_1.jpg"
import health_2 from "/public/assets/breinoptimaal/health_2.jpg"
import heroImage from "/public/assets/breinoptimaal/health_3.jpg"
import health_4 from "/public/assets/breinoptimaal/health_4.jpg"
import overlayImage from "/public/assets/breinoptimaal/logo.webp"

const techLogos = [tech_logo1, tech_logo2, tech_logo3, tech_logo4]

const BreinoptimaalProject = () => {
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
        <div className="relative w-full min-h-[50vh] max-h-[17vh] md:min-h-[100vh] overflow-hidden">
          <Image
            src={heroImage}
            alt="Four Seasons Hero"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
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
                width={150}
                height={150}
                className="object-contain cursor-pointer"
              />
            </button>
          </div>
        </div>

        <div id="section" className="container mx-auto px-8 py-12">
          <div
            className="text-[#1a1a1a] text-center tracking-widest m-10 text-sm mx-auto lg:max-w-6xl"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            de focus op succes
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-[#1a1a1a] mb-30 mx-auto lg:max-w-6xl">
            Breinoptimaal raadpleegde onze expertise voor een moderne oplossing
            in online betalingsverkeer. We bouwden een systeem dat flexibel is
            en mee kan groeien in elke gewenste richting. Met een intuïtieve
            Stripe-checkout, een schaalbare Sanity-infrastructuur en fris design
            bieden we een robuuste en betrouwbare beleving die met de klant
            meegroeit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="w-full h-140 relative">
              <Image
                src={concept_1}
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-140 relative">
              <Image
                src={concept_1}
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-140 relative">
              <Image
                src={concept_1}
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-start mt-20 mb-10 text-5xl md:text-6xl text-[#1a1a1a] mx-auto lg:max-w-6xl">
            Een Sterke Basis
          </div>
          <div className="text-[#1a1a1a] text-xl text-start mt-6 mb-10 lg:max-w-6xl mx-auto">
            Breinoptimaal vroeg meer dan een standaard webshop: een digitale
            omgeving die professionaliteit en vertrouwen uitstraalt. Door onze
            aanpak is er een platform ontstaan dat schaalbaar is, eenvoudig in
            beheer en helemaal gericht op conversie. Met een checkout via Stripe
            en naadloze integratie met betaalproviders kunnen klanten moeiteloos
            hun bestelling plaatsen.
          </div>

          <div className="my-20 relative bg-[#1a1a1a]">
            <Image
              src={health_1}
              alt="Image 4"
              className="w-auto h-auto max-w-full mx-auto"
            />
          </div>

          <div className="flex flex-col lg:flex-row mt-20 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="max-w-xl text-[1.2rem]">
              <div className="text-start mb-10 text-5xl md:text-6xl text-[#1a1a1a]">
                In De Formule
              </div>

              <ul className="space-y-4 text-[#1a1a1a] p-5">
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Next.js:</span> Modern
                    JavaScript-framework dat zorgt voor hoge performance,
                    SEO-optimalisatie en een snelle, interactieve
                    webshopervaring.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Vercel:</span> Robuust platform voor het
                    hosten en deployen van de website, met automatische
                    optimalisaties voor snelheid en schaalbaarheid.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Sanity:</span> Headless CMS dat het team
                    in staat stelt om producten, teksten en afbeeldingen
                    eenvoudig uit te rollen, waar ook ter wereld.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="list-disc">•</span>
                  <span>
                    <span className="">Stripe:</span> Betrouwbare en veilige
                    betaaloplossing waarmee klanten eenvoudig online kunnen
                    afrekenen.
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

          <div className="my-20 relative bg-[#1a1a1a]">
            <Image src={health_4} alt="Image 4" className="mx-auto" />
          </div>

          <div className="text-[#1a1a1a] text-center text-6xl lg:text-8xl mt-30">
            <div>Klaar Voor de Start</div>
            <div className="flex flex-col md:flex-row justify-between mt-20 gap-10">
              <div className="text-start text-9xl md:text-center">
                100%
                <div className="text-lg md:text-xl lg:text-2xl font-normal mt-5">
                  Veilige checkout met Stripe
                </div>
              </div>
              <div className="text-start text-9xl md:text-center">
                1s
                <div className="text-lg md:text-xl lg:text-2xl font-normal mt-5">
                  Gemiddelde laadtijd
                </div>
              </div>
              <div className="text-start text-9xl md:text-center">
                +200
                <div className="text-lg md:text-xl lg:text-2xl font-normal mt-5">
                  Bestellingen sinds lancering
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 mt-30">
            <div className="w-full h-140 relative">
              <Image
                src={health_5}
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-140 relative">
              <Image
                src={health_9}
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-140 relative">
              <Image src={oats} alt="Image 3" fill className="object-cover" />
            </div>
            <div className="w-full h-140 relative">
              <Image
                src={health_2}
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="text-[#1a1a1a] text-center tracking-widest mt-20 mb-10 text-sm lg:max-w-6xl mx-auto"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            recept voor een gezond resultaat
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-[#1a1a1a] mb-20 lg:max-w-6xl mx-auto">
            Met dit project heeft Breinoptimaal een moderne en
            gebruiksvriendelijke webshop die klaar is voor de toekomst. Dankzij
            onze innovatieve oplossingen kan het merk blijven groeien en klanten
            de beste ervaring bieden – of ze nu shoppen in Amsterdam of Dubai.
          </p>

          <div className="text-center mt-30 mb-10 text-5xl text-[#1a1a1a] leading-16">
            Ook Een Webshop Bouwen?
          </div>
          <div className="flex w-full justify-center text-center mb-20">
            <Link
              href={"/contact"}
              style={{ fontFamily: "var(--font-mono)" }}
              className=" text-[#1a1a1a] p-4 px-8 mb-12 border border-[#1a1a1a] hover:text-white hover:bg-[#1a1a1a] cursor-pointer"
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

export default BreinoptimaalProject
