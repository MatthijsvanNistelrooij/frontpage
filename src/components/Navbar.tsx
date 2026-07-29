"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/#work", label: "Werk" },
  { href: "/services", label: "Diensten" },
  { href: "/contact", label: "Contact" },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [])
  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-[#171714]/95 text-white backdrop-blur">
      <nav
        aria-label="Hoofdnavigatie"
        className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-tight"
        >
          <span
            className="h-2.5 w-2.5 rounded-full bg-[#ff4d00]"
            aria-hidden="true"
          />
          MATTHIJS
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <span className="eyebrow text-white/45">Groningen · NL</span>
        </div>
        <button
          type="button"
          className="eyebrow md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Sluit" : "Menu"}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/15 bg-[#171714] px-5 py-6 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-white/15 py-4 text-3xl"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
