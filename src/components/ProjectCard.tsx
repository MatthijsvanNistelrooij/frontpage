import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type Props = {
  title: string
  image: StaticImageData
  hoverImage: StaticImageData
  info: string
  url: string
  number?: string
  discipline?: string
}

export default function ProjectCard({
  title,
  image,
  hoverImage,
  info,
  url,
  number = "01",
  discipline = "Design · Development",
}: Props) {
  return (
    <Link href={`/${url}`} className="group block text-[#171714]">
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.02]"
        />
        <Image
          src={hoverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div className="mt-4 flex justify-between border-t border-black/20 pt-3">
        <span className="eyebrow">
          {number} / {discipline}
        </span>
        <span className="transition group-hover:-translate-y-1 group-hover:translate-x-1">
          ↗
        </span>
      </div>
      <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-black/60">{info}</p>
    </Link>
  )
}
