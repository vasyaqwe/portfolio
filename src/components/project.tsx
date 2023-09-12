import { projects } from "@/config"
import Link from "next/link"
import React from "react"
import { Pill } from "./ui/pill"
import Image from "next/image"

type ProjectProps = (typeof projects)[number]

export function Project({ project }: { project: ProjectProps }) {
    return (
        <article
            className={`group relative mt-5 cursor-default overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 px-5
             py-6 shadow-md transition-colors first-of-type:mt-9 hover:bg-neutral-200 sm:mt-8 sm:rounded-lg sm:px-7 sm:py-8 md:grid
              md:min-h-[300px] md:grid-cols-2 md:gap-16 md:p-10 md:pb-0
             `}
        >
            <div className="flex flex-col gap-2 group-odd:col-start-2">
                <h3 className="text-size-700 ">{project.name}</h3>
                <p className="leading-relaxed text-neutral-700">
                    {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6 md:gap-3">
                    {project.tags.map((tag) => (
                        <Pill
                            text={tag}
                            key={tag}
                        />
                    ))}
                </ul>
            </div>
            <Image
                className={`row-span-1 translate-y-12 rounded-md object-cover shadow-md transition-transform group-odd:col-start-1
                    group-odd:row-start-1 group-odd:justify-self-end md:col-start-2 md:min-w-[650px]
                     md:translate-y-0 md:rounded-none md:rounded-tl-lg md:shadow-lg group-odd:md:rounded-tr-lg
                    md:group-hover:-translate-x-3 md:group-hover:-rotate-3  md:group-hover:scale-105
                   md:group-odd:group-hover:translate-x-3 md:group-odd:group-hover:rotate-3

                    `}
                src={project.image}
                alt={project.name}
            />
        </article>
    )
}
