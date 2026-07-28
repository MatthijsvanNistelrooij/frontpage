import Link from "next/link"

export const Footer = () => <footer className="bg-[#171714] px-5 pb-8 pt-20 text-white md:px-8 md:pt-32"><div className="mx-auto max-w-[1600px]">
  <p className="eyebrow mb-8 text-white/50">Nieuwe opdracht · 2026</p>
  <Link href="/contact" className="group block border-b border-white/20 pb-10"><span className="display block max-w-6xl">Iets goeds in beweging zetten?</span><span className="mt-8 inline-block text-lg text-[#ff4d00] group-hover:underline">Vertel me wat er speelt ↗</span></Link>
  <div className="grid gap-8 pt-8 text-sm text-white/65 md:grid-cols-3"><p>Digital design & development<br />Groningen, Nederland</p><div className="flex gap-5 md:justify-center"><a href="https://www.linkedin.com/in/matthijsvannistelrooij/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/MatthijsvanNistelrooij" target="_blank" rel="noreferrer">GitHub</a></div><p className="md:text-right">© {new Date().getFullYear()} Matthijs<br />Alle rechten voorbehouden</p></div>
</div></footer>
