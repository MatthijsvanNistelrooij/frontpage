"use client"

import { useState } from "react"
import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi" // hamburger icons

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="bg-[#1a1a1a] top-0 left-0 w-full flex items-center justify-between px-8 py-3 z-20 sticky"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <Link href={"/"} className="cursor-pointer">
        <Image src={logo} alt="logo" width={30} height={30} />
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8 text-[#f0f0f0] text-lg">
        <Link href="/#work" className="hover:text-gray-400 transition">
          Werk
        </Link>
        <Link href="/services" className="hover:text-gray-400 transition">
          Services
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
      </div>

      {/* Hamburger menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#f0f0f0] text-2xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full pl-10 left-0 text-white w-full bg-[#1a1a1a] flex flex-col items-start md:hidden py-4 space-y-4">
          <Link
            href="/#work"
            className="hover:text-gray-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Werk
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
