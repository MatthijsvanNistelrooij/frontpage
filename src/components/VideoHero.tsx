"use client"

import { useEffect, useRef, useState } from "react"

export function VideoHero() {
  const video = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.current?.pause()
      setPaused(true)
    }
  }, [])
  const toggle = () => {
    if (!video.current) return
    if (video.current.paused) {
      void video.current.play()
      setPaused(false)
    } else {
      video.current.pause()
      setPaused(true)
    }
  }
  return (
    <div className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-black text-white">
      <video
        ref={video}
        src="/car_track.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/65" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1600px] flex-col justify-between px-5 py-8 md:px-8 md:py-12">
        <div className="flex justify-between">
          <span className="eyebrow">Independent digital studio</span>
          <span className="eyebrow hidden md:block">
            Strategy / Design / Code
          </span>
        </div>
        <div>
          <h1 className="display max-w-7xl">
            Digitale producten met grip op groei.
          </h1>
          <div className="mt-8 flex items-end justify-between gap-8">
            <p className="max-w-md text-base leading-7 text-white/75">
              Van eerste richting tot werkend product. Eén compacte studio voor
              merken die sneller en scherper vooruit willen.
            </p>
            <button
              type="button"
              onClick={toggle}
              aria-label={
                paused
                  ? "Achtergrondvideo afspelen"
                  : "Achtergrondvideo pauzeren"
              }
              className="eyebrow border border-white/35 px-4 py-3 hover:bg-white hover:text-black"
            >
              {paused ? "Play" : "Pause"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
