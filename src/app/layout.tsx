import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: "Design & development",
    template: "%s — Design & development",
  },
  description:
    "Wij ontwerpen en bouwen websites en webshops. Bekijk ons werk en onze diensten.",
  openGraph: {
    title: "Design & development",
    description: "Ontwerp en development van websites en webshops.",
    locale: "nl_NL",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-50 bg-white px-4 py-3 text-black"
        >
          Naar inhoud
        </a>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
