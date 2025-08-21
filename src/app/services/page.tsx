import React from "react"
import Image from "next/image"
import heroImage from "/public/assets/kapsalon_four_seaons_1.png"
import { Footer } from "@/components/Footer"
import Link from "next/link"

const Services = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="relative w-full max-h-[15vh] md:min-h-[50vh] overflow-hidden">
        <Image
          src={heroImage}
          alt="Four Seasons Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-white text-4xl md:text-8xl text-center">
            Duurzame Groei Voeden
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div
          className="text-black text-center tracking-widest m-10 text-sm"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Het is hoe we doen
        </div>
        <p className="text-xl text-center md:text-3xl font-extralight tracking-wider leading-12 text-black mb-20">
          Wij vinden niks mooier dan oplossingen bieden waar een uitdaging ligt,
          met name wanneer ze als moeilijk worden beschouwd, nog nooit zijn
          geprobeerd, of door de iedereen als onmogelijk worden bestempeld. Dat
          is de reden dat we kiezen voor data gestuurde inzichten met
          aantoonbare prestaties in combinatie met een aantal geheime hacking
          skills die we in zetten voor onze speciale mix aan recepten voor
          structurele groei. Noem het onze speciale kookkunst.
        </p>

        <hr />
        <div className="md:max-w-3xl flex flex-col mx-auto justify-center">
          <div className="text-start mt-20 mb-10 text-5xl text-black">
            Digitale Beleving
          </div>
          <div className="text-start mb-10 text-lg text-gray-700">
            Wij zijn gedreven Digital Natives die pixels perfectioneren en alles
            integreren, zelfs als het betekent dat we harten veroveren en
            geesten verbazen. Wij zetten zakelijke uitdagingen om in creatieve
            kansen.
          </div>
          <div>
            Full Stack Development • Front End Development • QA Testing •
            Content Planning • UX Wireframing • UI Design • Prototyping
          </div>
          <hr className="border-t border-gray-300 my-10" />

          <div className="text-start mt-20 mb-10 text-5xl text-black">
            Merkontwikkeling
          </div>
          <div className="text-start mb-10 text-lg text-gray-700">
            Wij bouwen merken verder uit of creëren nieuwe merken vanaf nul, met
            diensten die zorgen voor een samenhangende en overtuigende
            merkbeleving die het publiek raakt en bijblijft.
          </div>
          <div>
            Brand Identity • Visual Systems • Voice & Tone • Messaging
            Frameworks • Brand Strategy • Brand Extension • Art Direction •
            Design
          </div>
          <hr className="border-t border-gray-300 my-10" />

          <div className="text-start mt-20 mb-10 text-5xl text-black">
            Groei Versnellen
          </div>
          <div className="text-start mb-10 text-lg text-gray-700">
            Zoals jonge racers die hun wagen tunen, willen wij je business
            sneller, efficiënter en sterker maken. Als er een kans is om te
            optimaliseren, zorgen wij dat je op het juiste spoor zit.
          </div>
          <div>
            Conversion Optimization • Ecosystem Audit • Shopify E-commerce •
            Data Analytics • A/B Testing • Performance Tracking • Solutions
            Architecture • CI/CD Pipelines • Data Migrations • Shopify
            Fulfillment • SEO Strategy & Optimization
          </div>
          <hr className="border-t border-gray-300 my-10" />

          <hr className="border-t border-gray-300 my-10" />

          <div className="text-start mt-20 mb-10 text-5xl text-black">
            Digitale Marketing
          </div>
          <div className="text-start mb-10 text-lg text-gray-700">
            Succesvolle digitale marketing houdt merken relevant en authentiek.
            Wij creëren strategieën die je doelgroep bereiken op de kanalen die
            bij hen passen.
          </div>
          <div>
            Social Media Strategy • Social Media Management • Email Marketing •
            Paid Media Management • Digital Strategy • Ad Strategy • Content
            Creation • Community Management
          </div>
          <hr className="border-t border-gray-300 my-10" />
        </div>

        <div className="text-center mt-20 mb-10 text-5xl text-black">
          Het Bewijs is Hier.
        </div>

        <div className="flex w-full justify-center text-center">
          <Link
            href={"/#werk"}
            style={{ fontFamily: "var(--font-mono)" }}
            className={
              " text-[#1a1a1a] p-4 mb-10 border border-black hover:text-white hover:bg-black cursor-pointer"
            }
          >
            BEKIJK ONS WERK
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services
