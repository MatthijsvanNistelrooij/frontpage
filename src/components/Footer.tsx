import Image from "next/image"
import logo from "../../public/logo.png"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiX } from "react-icons/si"
import Link from "next/link"

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#1a1a1a] w-full text-[#f0f0f0] z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-8 py-10 gap-12">
          <div className="flex flex-col space-y-3 max-w-56">
            <p className="text-gray-100">
              Wij bouwen digitale ervaringen die impact maken. Samenwerken of
              meer weten? Neem gerust <Link href={"/contact"}>contact </Link>
              op.
            </p>
          </div>

          <div className="w-full flex space-x-4">
            <a
              href="https://x.com/Mvnistelrooij"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition text-xl"
            >
              <SiX />
            </a>
            <a
              href="https://www.linkedin.com/in/matthijsvannistelrooij/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MatthijsvanNistelrooij"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition text-xl"
            >
              <FaGithub />
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Link href="/#work" className="hover:text-gray-400 transition">
                Werk
              </Link>
              <Link href="/services" className="hover:text-gray-400 transition">
                Diensten
              </Link>

              <Link href="/contact" className="hover:text-gray-400 transition">
                Contact
              </Link>
            </div>
          </div>

          <Link
            href="/"
            className="cursor-pointer md:ml-auto w-full flex md:justify-end"
          >
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Matthijs. Alle rechten voorbehouden.
        </div>
      </footer>
      <div className="bg-[#1a1a1a] p-5 flex justify-center">
        <Image src={logo} alt="logo" width={800} height={800} />
      </div>
      <div className="bg-[#1a1a1a] h-80"></div>
    </>
  )
}
