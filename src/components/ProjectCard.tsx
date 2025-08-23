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
    <Link href={url} className="group text-black w-full cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={hoverImage}
          alt={`${title} hover`}
          fill
          className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>

      <p className="block mt-4 text-4xl group-hover:underline cursor-pointer">
        {title}
      </p>
      <h2
        className="mt-2 text-xl font-light text-black"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {info}
      </h2>
    </Link>
  )
}

export default ProjectCard
