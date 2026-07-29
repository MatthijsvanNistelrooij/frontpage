import Link from "next/link"

type CaseStudyNextProps = {
  href: string
  label: string
  eyebrow?: string
}

export function CaseStudyNext({
  href,
  label,
  eyebrow = "Volgend project",
}: CaseStudyNextProps) {
  return (
    <section className="border-t border-black/20 bg-[#f4f2ea] px-5 py-16 text-[#171714] md:px-8 md:py-24">
      <Link
        href={href}
        className="group mx-auto flex max-w-[1600px] items-end justify-between gap-8"
      >
        <div>
          <p className="eyebrow text-black/50">{eyebrow}</p>
          <h2 className="mt-5 text-[clamp(3rem,7vw,7rem)] font-medium leading-none tracking-[-0.06em]">
            {label}
          </h2>
        </div>
        <span
          className="text-4xl transition group-hover:-translate-y-2 group-hover:translate-x-2"
          aria-hidden="true"
        >
          ↗
        </span>
      </Link>
    </section>
  )
}
