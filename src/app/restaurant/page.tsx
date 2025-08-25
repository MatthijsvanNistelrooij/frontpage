"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import heroImage from "/public/assets/four_seasons_restaurant/four_seasons_Hero.jpg"
import image1 from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_img_1.png"
import image2 from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_img_2.png"
import image3 from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_img_3.png"
import Link from "next/link"
import tech_logo1 from "/public/next.svg"
import tech_logo2 from "/public/assets/tech_logo/vercel.png"
import tech_logo3 from "/public/assets/tech_logo/appwrite.png"
import tech_logo4 from "/public/assets/tech_logo/emailjs.png"
import site_design from "/public/assets/four_seasons_restaurant/site_design.png"
import concept_1 from "/public/assets/four_seasons_restaurant/concept_1.png"
import concept_2 from "/public/assets/four_seasons_restaurant/concept_2.png"
import concept_3 from "/public/assets/four_seasons_restaurant/concept_3.png"
import concept_4 from "/public/assets/four_seasons_restaurant/concept_4.png"
import food_2 from "/public/assets/four_seasons_restaurant/food_2.jpg"
import food from "/public/assets/four_seasons_restaurant/food.jpg"
import welcome from "/public/assets/four_seasons_restaurant/four_seasons_welcome.png"
import overlayImage from "/public/assets/four_seasons_restaurant/restaurant_four_seasons_logo.png"

import { Footer } from "@/components/Footer"

const techLogos = [tech_logo1, tech_logo2, tech_logo3, tech_logo4]

const FourSeasonsRestaurant = () => {
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
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={overlayImage}
              alt="Overlay"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <div className="container mx-auto px-8 py-12">
          <div
            className="text-[#1a1a1a] text-center tracking-widest m-10 text-sm mx-auto lg:max-w-6xl"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            creatief met gerechten
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-[#1a1a1a] mb-30 mx-auto lg:max-w-6xl">
            Bij de opening van hun restaurant wist Four Seasons dat een sterke
            online presentatie essentieel was. Ze benaderden ons om een
            krachtige website te bouwen die hun unieke Midden-Oosterse keuken
            stijlvol en gastvrij online brengt.
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
          <div className="text-start mt-20 mb-10 text-5xl md:text-6xl text-[#1a1a1a] mx-auto lg:max-w-6xl">
            Een Digitale Eerste Indruk
          </div>
          <div className="text-[#1a1a1a] text-xl text-start mt-6 mb-30 lg:max-w-6xl mx-auto">
            Het restaurant had nog geen digitale identiteit en kwam bij ons met
            de vraag om dit vanaf de grond op te bouwen. Met een focus op
            storytelling, visuele beleving en gebruiksvriendelijkheid hebben we
            een website ontworpen die gasten meteen onderdompelt in de sfeer van
            de Syrische en Midden-Oosterse keuken.
          </div>

          <div className="my-10 relative bg-[#1a1a1a]">
            <Image
              src={food}
              alt="Image 4"
              className="w-auto h-auto max-w-full mx-auto"
            />
          </div>

          <div className="flex flex-col lg:flex-row mt-20 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="max-w-xl text-[1.2rem]">
              <div className="text-start mb-10 text-5xl md:text-6xl text-[#1a1a1a] lg:max-w-6xl mx-auto">
                Een Kijkje in de Keuken
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
                    <span className="">EmailJS:</span> Flexibel systeem voor het
                    versturen van op maat gemaakte e-mails
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

          <div className="mb-8 mt-20">
            <div className="w-full h-140 relative">
              <Image
                src={welcome}
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-20 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="max-w-xl text-[1.2rem]">
              <div className="text-start mb-10 text-5xl md:text-6xl text-[#1a1a1a] lg:max-w-6xl mx-auto">
                Onze Diensten
              </div>

              <ul className="space-y-4 text-[#1a1a1a] p-5">
                <li className="flex items-start gap-2">
                  <span className="">•</span>
                  <span>
                    Hoogwaardig design en prototypes uitgewerkt voor
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
            <Image
              src={site_design}
              alt="tech_logo"
              width={200}
              height={200}
              className="transition-opacity duration-700"
            />
          </div>
          <div className="mb-8 mt-20">
            <div className="w-full h-180 relative">
              <Image src={image2} alt="Image 2" fill className="object-cover" />
            </div>
          </div>

          <div className="text-[#1a1a1a] text-center text-6xl lg:text-8xl my-40">
            <div>Een Site Die Smaakt Naar Meer</div>
            <div className="flex flex-col md:flex-row justify-between mt-40 gap-10">
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

          <div className="mb-8 mt-20">
            <div className="w-full h-180 relative">
              <Image src={food_2} alt="Image 2" fill className="object-cover" />
            </div>
          </div>
          <div
            className="text-[#1a1a1a] text-center tracking-widest mt-30 mb-10 text-sm mx-auto lg:max-w-6xl"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            de smaak van succes
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-[#1a1a1a] mb-20 lg:max-w-5xl mx-auto">
            Met dit project heeft Restaurant Four Seasons een krachtige digitale
            start. Een moderne website die snelheid en gebruiksvriendelijkheid
            combineert. Het online visitekaartje dat nieuwsgierigheid wekt en
            gasten uitnodigt om te reserveren. Dankzij onze oplossingen beschikt
            het restaurant over een professionele en schaalbare basis die
            meegroeit met hun ambities, en die de unieke sfeer van hun
            Midden-Oosterse keuken perfect vertaalt naar de digitale wereld.
          </p>
          <div className="text-center mt-30 mb-10 text-5xl text-[#1a1a1a] leading-16 mx-auto lg:max-w-6xl">
            Ook Een Restaurant Beginnen?
          </div>

          <div className="flex w-full justify-center text-center my-20">
            <Link
              href={"/contact"}
              style={{ fontFamily: "var(--font-mono)" }}
              className={
                " text-[#1a1a1a] p-4 px-8 mb-12 border border-[#1a1a1a] hover:text-white hover:bg-[#1a1a1a] cursor-pointer"
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

export default FourSeasonsRestaurant
