"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowDown, Pause, Play } from "lucide-react"

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
      void video.current.play().then(() => setPaused(false)).catch(() => setPaused(true))
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
        aria-hidden="true"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/65" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1600px] flex-col justify-between px-5 py-8 md:px-8 md:py-12">
        <p className="eyebrow text-white/70">Design & development / Groningen</p>
        <div>
          <h1 className="display max-w-7xl">
            Websites en<br />digitale projecten.
          </h1>
          <div className="mt-8 flex items-end justify-between gap-5">
            <div>
              <p className="max-w-md text-base leading-7 text-white/85">
                Wij ontwerpen en bouwen websites vanuit Groningen.
              </p>
              <div className="mt-5">
                <Link href="#work" className="inline-flex min-h-12 items-center gap-3 text-sm text-white/80 underline decoration-white/30 underline-offset-8 hover:text-white hover:decoration-white">
                  Ons werk <ArrowDown size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <button
              type="button"
              onClick={toggle}
              aria-label={
                paused
                  ? "Achtergrondvideo afspelen"
                  : "Achtergrondvideo pauzeren"
              }
              className="flex h-12 w-12 shrink-0 items-center justify-center text-white/70 transition hover:text-white"
            >
              {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
