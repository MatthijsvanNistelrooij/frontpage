import type { Metadata } from "next"
import { Playfair_Display, Lato, Fira_Code } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/next"

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
})

const fira = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: "Matthijs",
  description: "Matthijs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} ${fira.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
