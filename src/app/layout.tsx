import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: "Matthijs — Digital design & development",
    template: "%s — Matthijs",
  },
  description:
    "Onafhankelijke digitale studio voor onderscheidende websites, slimme systemen en meetbare online groei.",
  openGraph: {
    title: "Matthijs — Digital design & development",
    description: "Strategie, design en development in één compacte studio.",
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
