import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"

type ProjectCardProps = {
  title: string
  image: StaticImageData
  hoverImage: StaticImageData
  info: string
  url: string
}

const ProjectCard = ({
  title,
  image,
  hoverImage,
  info,
  url,
}: ProjectCardProps) => {
  return (
    <Link href={url} className="group text-[#1a1a1a] w-full cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4] bg-black">
        <Image src={image} alt={title} fill className="object-cover" priority />

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity" />

        <Image
          src={hoverImage}
          alt={`${title} hover`}
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity"
          priority
        />
      </div>

      <p className="block mt-4 text-4xl group-hover:underline cursor-pointer">
        {title}
      </p>
      <h2
        className="mt-2 text-lg font-light text-[#1a1a1a]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {info}
      </h2>
    </Link>
  )
}

export default ProjectCard
