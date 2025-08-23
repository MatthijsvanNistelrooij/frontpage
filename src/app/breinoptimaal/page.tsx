"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import heroImage from "/public/assets/breinoptimaal.png"
import image1 from "/public/assets/breinoptimaal_bottle.png"
import image2 from "/public/assets/breinoptimaal_bottle.png"
import image3 from "/public/assets/breinoptimaal_bottle.png"
import Link from "next/link"
import tech_logo1 from "/public/next.svg"
import tech_logo2 from "/public/vercel.png"
import tech_logo3 from "/public/sanity.png"
import tech_logo4 from "/public/stripe.png"
import concept_1 from "/public/assets/breinoptimaal_bottle.png"
import concept_2 from "/public/assets/breinoptimaal_bottle.png"
import concept_3 from "/public/assets/breinoptimaal_bottle.png"
import concept_4 from "/public/assets/breinoptimaal_bottle.png"
import concept_5 from "/public/assets/breinoptimaal_bottle.png"
import concept_6 from "/public/assets/breinoptimaal2.png"
import { Footer } from "@/components/Footer"

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
      <div className="flex flex-col bg-white">
        <div className="w-full h-[30vh] md:h-screen overflow-hidden relative">
          <Image
            src={heroImage}
            alt="Breinoptimaal Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container mx-auto px-8 py-12">
          <div
            className="text-black text-center tracking-widest m-10 text-sm mx-auto lg:max-w-6xl"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            focus op resultaat
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-black mb-20 mx-auto lg:max-w-6xl">
            Breinoptimaal zocht een moderne manier om online af te rekenen. Met
            een intuïtieve checkout via Stripe en een schaalbare backend
            infrastructuur van Sanity biedt de webshop klanten een veilige en
            snelle online ervaring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="w-full h-140 relative">
              <Image src={image1} alt="Image 1" fill className="object-cover" />
            </div>
            <div className="w-full h-140 relative">
              <Image src={image2} alt="Image 2" fill className="object-cover" />
            </div>
            <div className="w-full h-140 relative">
              <Image src={image3} alt="Image 3" fill className="object-cover" />
            </div>
          </div>

          <div className="text-start mt-20 mb-10 text-5xl md:text-6xl text-black mx-auto lg:max-w-6xl">
            Een Digitale Basis voor Groei
          </div>
          <div className="text-black text-xl text-start mt-6 mb-10 lg:max-w-6xl mx-auto">
            Breinoptimaal wilde meer dan een standaard webshop: een digitale
            omgeving die professionaliteit en vertrouwen uitstraalt. Door onze
            aanpak is er een platform ontstaan dat schaalbaar is, eenvoudig in
            beheer en optimaal gericht op conversie. Met een checkout via Stripe
            en naadloze integratie met betaalproviders, kunnen klanten zonder
            drempels hun bestelling plaatsen.
          </div>

          <div className="my-20 relative border bg-[#1a1a1a]">
            <Image
              src={concept_5}
              alt="Image 4"
              className="w-auto h-auto max-w-full mx-auto"
            />
          </div>

          <div className="mt-20 flex flex-col md:flex-row gap-12 mx-auto">
            <div className="relative border">
              <Image src={concept_1} alt="Image 1" className="mx-auto" />
            </div>
            <div className="relative border bg-[#1a1a1a]">
              <Image src={concept_2} alt="Image 2" className="mx-auto" />
            </div>
            <div className="relative border">
              <Image src={concept_3} alt="Image 3" className="mx-auto" />
            </div>
            <div className="relative border bg-[#1a1a1a]">
              <Image src={concept_4} alt="Image 4" className="mx-auto" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-20 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="max-w-xl text-[1.2rem]">
              <div className="text-start mb-10 text-5xl md:text-6xl text-black">
                De Tech-Stack
              </div>

              <ul className="space-y-4 text-black p-5">
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
                    eenvoudig te beheren en flexibel uit te rollen, waar ook ter
                    wereld.
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

            <Image
              src={techLogos[currentLogo]}
              alt="tech_logo"
              width={300}
              height={300}
              className="transition-opacity duration-700"
            />
          </div>

          <div className="my-20 relative border bg-[#1a1a1a]">
            <Image src={concept_6} alt="Image 4" className="mx-auto" />
          </div>

          <div className="text-black text-center text-6xl lg:text-8xl mt-20">
            <div>Klaar Voor Groei</div>
            <div className="flex flex-col md:flex-row justify-center mt-20 gap-10">
              <div className="text-start text-9xl md:text-center">
                100%
                <div className="text-lg font-normal mt-5">
                  Veilige checkout met Stripe
                </div>
              </div>
              <div className="text-start text-9xl md:text-center">
                1s
                <div className="text-lg font-normal mt-5">
                  Gemiddelde laadtijd
                </div>
              </div>
              <div className="text-start text-9xl md:text-center">
                +200
                <div className="text-lg font-normal mt-5">
                  Bestellingen sinds lancering
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl text-center md:text-3xl font-light tracking-wider text-black my-20 lg:max-w-5xl mx-auto">
            Met dit project heeft Breinoptimaal een moderne webshop die niet
            alleen professioneel oogt, maar ook klaar is voor de toekomst. Wel
            zo slim.
          </p>

          <div className="text-center mt-30 mb-10 text-5xl text-black leading-16">
            Ook Een Webshop Bouwen?
          </div>
          <div className="flex w-full justify-center text-center">
            <Link
              href={"/contact"}
              style={{ fontFamily: "var(--font-mono)" }}
              className=" text-black p-4 px-8 mb-12 border border-black hover:text-white hover:bg-black cursor-pointer"
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
