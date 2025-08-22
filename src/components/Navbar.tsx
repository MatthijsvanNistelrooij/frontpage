"use client"

import { useState } from "react"
import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi" // hamburger icons

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-[#1a1a1a] sticky top-0 left-0 w-full text-[#f0f0f0] z-20">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <Link href={"/"} className="cursor-pointer">
          <Image src={logo} alt="logo" width={30} height={30} />
        </Link>

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

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#f0f0f0] text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-full pl-8 pb-15 left-0 text-white w-full bg-[#1a1a1a] flex flex-col items-start md:hidden py-4 space-y-8">
          <Link
            href="/#work"
            className="hover:text-gray-400 transition py-2"
            onClick={() => setMenuOpen(false)}
          >
            Werk
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-400 transition py-2"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
