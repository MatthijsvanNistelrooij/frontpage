import React from "react"
import Image from "next/image"
import heroImage from "/public/service.jpg"
import { Footer } from "@/components/Footer"
import Link from "next/link"

const Services = () => {
  return (
    <div className="flex flex-col bg-[#fffffb]">
      <div className="relative w-full min-h-[60vh] overflow-hidden">
        <Image
          src={heroImage}
          alt="Four Seasons Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-white text-5xl md:text-8xl text-center max-w-xl md:max-w-5xl px-8">
            Design dat spreekt, techniek die werkt.
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div
          className="text-black text-center tracking-widest m-10 text-sm"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Het Is Wat We Doen
        </div>
        <p className="text-xl text-center md:text-3xl font-extralight tracking-wider leading-12 text-black mb-20">
          Onze focus ligt op duurzame groei: slimme oplossingen die resultaten
          opleveren en meegroeien met je bedrijf. We combineren strategie,
          design en technologie om producten te creëren die niet
          alleen vandaag werken, maar ook klaar zijn voor de uitdagingen van
          morgen.
        </p>

        <hr />
        <div className="md:max-w-3xl flex flex-col mx-auto justify-center">
          <div className="text-start mt-20 mb-10 text-5xl text-black">
            Digitale Beleving
          </div>
          <div className="text-start mb-10 text-lg text-gray-900">
            Wij zijn gedreven Digital Natives die elke pixel tot in detail
            verfijnen om een naadloze oplossingen te creëren. Met creativiteit
            en visie zetten we zakelijke uitdagingen om in kansen die impact
            maken.
          </div>
          <div className="text-gray-900">
            Full Stack Development • Front End Development • Content Planning •
            UX Wireframing • UI Design • Prototyping • QA Testing
          </div>
          <hr className="border-t border-gray-300 my-10" />

          <div className="text-start mt-20 mb-10 text-5xl text-black break-words">
            Merkontwikkeling
          </div>
          <div className="text-start mb-10 text-lg text-gray-900">
            Wij bouwen merken verder uit of creëren nieuwe merken vanaf nul. Met
            diensten die zorgen voor een samenhangende merkbeleving die het
            publiek raakt en bijblijft.
          </div>
          <div className="text-gray-900">
            Brand Identity • Visual Systems • Voice & Tone • Messaging
            Frameworks • Brand Strategy • Brand Extension • Art Direction •
            Design
          </div>
          <hr className="border-t border-gray-300 my-10" />

          <div className="text-start mt-20 mb-10 text-5xl text-black">
            Duurzaam Versnellen
          </div>
          <div className="text-start mb-10 text-lg text-gray-900">
            Zoals jonge racers hun wagen tunen, willen wij je business sneller
            en efficiënter maken. Als er een kans is om te optimaliseren, zorgen
            wij dat je op het juiste spoor zit.
          </div>
          <div className="text-gray-900">
            Conversion Optimization • Ecosystem Audit • Shopify E-commerce •
            Data Analytics • A/B Testing • Performance Tracking • Solutions
            Architecture • CI/CD Pipelines • Data Migrations • Shopify
            Fulfillment • SEO Strategy & Optimization
          </div>
          <hr className="border-t border-gray-300 my-10" />

          <div className="text-start mt-20 mb-10 text-5xl text-black">
            Marketing
          </div>
          <div className="text-start mb-10 text-lg text-gray-900">
            Succesvolle marketing houdt merken relevant en authentiek. Wij
            creëren strategieën die jouw doelgroep bereiken op de kanalen die
            bij hen passen.
          </div>
          <div className="text-gray-900">
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
            href={"/#work"}
            style={{ fontFamily: "var(--font-mono)" }}
            className={
              " text-[#1a1a1a] p-4 px-8 mb-10 border border-[#1a1a1a] hover:text-white hover:bg-[#1a1a1a] cursor-pointer"
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
