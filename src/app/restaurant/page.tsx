"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import heroImage from "/public/assets/restaurant_hero_1.png"
import image1 from "/public/assets/restaurant_four_seasons_img_1.png"
import image2 from "/public/assets/restaurant_four_seasons_img_2.png"
import image3 from "/public/assets/restaurant_four_seasons_img_3.png"
import Link from "next/link"
import tech_logo1 from "/public/next.svg"
import tech_logo2 from "/public/vercel.png"
import tech_logo3 from "/public/appwrite.png"
import tech_logo4 from "/public/emailjs.png"
import site_design from "/public/assets/site_design.png"
import concept_1 from "/public/assets/concept_1.png"
import concept_2 from "/public/assets/concept_2.png"
import concept_3 from "/public/assets/concept_3.png"
import concept_4 from "/public/assets/concept_4.png"
import concept_5 from "/public/assets/concept_9.png"
import concept_6 from "/public/assets/concept_8.png"
import welcome from "/public/assets/four_seasons_welcome.png"
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
      <div className="flex flex-col bg-white">
        <div className="w-full h-[30vh] md:h-screen overflow-hidden relative">
          <Image
            src={heroImage}
            alt="Four Seasons Hero"
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
            creatief met gerechten
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-gray-800 mb-20 mx-auto lg:max-w-6xl">
            Bij de opening van hun restaurant wist Four Seasons dat een sterke
            online presentatie essentieel was. Ze kozen voor ons voor een
            krachtige website die hun unieke Midden-Oosterse keuken stijlvol en
            gastvrij online brengt.
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
            Een Digitale Eerste Indruk
          </div>
          <div className="text-black text-xl text-start mt-6 mb-10 lg:max-w-6xl mx-auto">
            Voor de opening van Restaurant Four Seasons was een sterke online
            aanwezigheid onmisbaar. Het restaurant had nog geen digitale
            identiteit en kwam bij ons met de vraag om dit vanaf de grond op te
            bouwen. Met een focus op storytelling, visuele beleving en
            gebruiksvriendelijkheid hebben we een website ontworpen die gasten
            meteen onderdompelt in de sfeer van de Syrische en Midden-Oosterse
            keuken. Een platform dat zowel nieuwsgierigheid wekt als uitnodigt
            tot actie.
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
              <Image
                src={concept_1}
                alt="Image 1"
                className="w-auto h-auto max-w-full mx-auto"
              />
            </div>
            <div className="relative border bg-[#1a1a1a]">
              <Image
                src={concept_2}
                alt="Image 2"
                className="w-auto h-auto max-w-full mx-auto"
              />
            </div>
            <div className="relative border">
              <Image
                src={concept_3}
                alt="Image 3"
                className="w-auto h-auto max-w-full mx-auto"
              />
            </div>
            <div className="relative border bg-[#1a1a1a]">
              <Image
                src={concept_4}
                alt="Image 4"
                className="w-auto h-auto max-w-full mx-auto"
              />
            </div>
          </div>

          <div className="my-20 relative border bg-[#1a1a1a]">
            <Image
              src={concept_6}
              alt="Image 4"
              className="w-auto h-auto max-w-full mx-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row mt-20 items-start gap-10 lg:max-w-6xl mx-auto">
            <div className="max-w-xl text-[1.2rem]">
              <div className="text-start mb-10 text-5xl md:text-6xl text-black lg:max-w-6xl mx-auto">
                Een Kijkje in de Keuken
              </div>
              <p className="text-black mb-6">
                Voor Four Seasons hebben we gekozen voor een moderne en
                schaalbare tech-stack die snelheid, betrouwbaarheid en
                flexibiliteit garandeert. Door bewust tools slim te combineren,
                zorgen we dat de website niet alleen vandaag sterk staat, maar
                ook klaar is voor toekomstige groei.
              </p>
              <ul className="space-y-4 text-black p-5">
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
                    backend voor authenticatie, databases en opslag
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
            <Image
              src={techLogos[currentLogo]}
              alt="tech_logo"
              width={300}
              height={300}
              className="transition-opacity duration-700"
            />
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
              <div className="text-start mb-10 text-5xl md:text-6xl text-black lg:max-w-6xl mx-auto">
                Onze Diensten
              </div>

              <ul className="space-y-4 text-black p-5">
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

          <div className="text-black text-center text-6xl lg:text-8xl mt-20 mx-auto lg:max-w-6xl">
            <div>Een site die smaakt naar meer</div>

            <div className="flex flex-col md:flex-row justify-center mt-20 gap-10 lg:max-w-6xl mx-auto">
              <div className="text-start text-9xl md:text-8xl md:text-center lg:text-9xl">
                90%
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
                  Afspraken sinds livegang
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
            className="text-black text-center tracking-widest mt-20 mb-10 text-sm mx-auto lg:max-w-6xl"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            de smaak van succes
          </div>
          <p className="text-xl text-center md:text-3xl font-light tracking-wider leading-12 text-gray-800 mb-20 lg:max-w-5xl mx-auto">
            Met dit project heeft Restaurant Four Seasons een krachtige digitale
            start. Een moderne website die snelheid en gebruiksvriendelijkheid
            combineert. Het online visitekaartje dat nieuwsgierigheid wekt en
            gasten uitnodigt om te reserveren. Dankzij onze oplossingen beschikt
            het restaurant over een professionele en schaalbare basis die
            meegroeit met hun ambities, en die de unieke sfeer van hun
            Midden-Oosterse keuken perfect vertaalt naar de digitale wereld.
          </p>
          <div className="text-center mt-30 mb-10 text-5xl text-black leading-16 mx-auto lg:max-w-6xl">
            Ga Je Ook Een Restaurant Beginnen?
          </div>

          <div className="flex w-full justify-center text-center">
            <Link
              href={"/contact"}
              style={{ fontFamily: "var(--font-mono)" }}
              className={
                " text-black p-4 px-8 mb-12 border border-black hover:text-white hover:bg-black cursor-pointer"
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
