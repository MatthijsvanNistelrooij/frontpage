import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav
      className="bg-[#1a1a1a] top-0 left-0 w-full flex items-center justify-between px-8 py-3 z-20 sticky"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <Link href={"/"} className="cursor-pointer">
        <Image src={logo} alt="logo" width={30} height={30} />
      </Link>

      <div className="flex space-x-8 text-[#f0f0f0] text-lg">
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
    </nav>
  )
}
