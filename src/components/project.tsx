"use client"
import { projects } from "@/config"
import React from "react"
import { Pill } from "./ui/pill"
import Image from "next/image"
import { Button } from "./ui/button"
import { Icons } from "./ui/icons"
import Link from "next/link"

type ProjectProps = (typeof projects)[number]

export function Project({ project }: { project: ProjectProps }) {
    return (
        <article
            className={`mb:pb-0 group relative mt-5 w-[310px] flex-shrink-0 cursor-default overflow-hidden rounded-md border border-neutral-200 bg-neutral-100/50 px-5
             py-6 pb-0 shadow-md transition-colors hover:bg-neutral-200/75 sm:mt-8 sm:rounded-lg sm:px-7 sm:py-8
              md:grid md:min-h-[300px] md:w-[750px] md:grid-cols-2 md:gap-16 md:p-8 md:pb-0 lg:pb-0
             `}
        >
            <div className="flex flex-col gap-2 group-odd:col-start-2">
                <h3 className="text-size-700 ">{project.name}</h3>
                <p className="leading-relaxed text-neutral-700">
                    {project.description}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2 gap-y-3">
                    {project.tags.map((tag) => (
                        <Pill
                            text={tag}
                            key={tag}
                        />
                    ))}
                </ul>
                <div className="mt-auto flex gap-2 pb-5 md:gap-3 md:pb-8">
                    <Button
                        draggable={false}
                        asChild
                        size={"sm"}
                        variant={"secondary"}
                    >
                        <Link
                            target="_blank"
                            href={project.demoLink}
                        >
                            Live demo
                            <Icons.link />
                        </Link>
                    </Button>
                    {project.githubLink && (
                        <Button
                            draggable={false}
                            asChild
                            size={"sm"}
                        >
                            <Link
                                target="_blank"
                                href={project.githubLink}
                            >
                                Source code
                                <Icons.code />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
            <Image
                draggable={false}
                className={`row-span-1 self-end rounded-tl-md rounded-tr-md object-cover object-top shadow-md 
                    transition-transform duration-300 group-odd:col-start-1 group-odd:row-start-1 group-odd:justify-self-end md:col-start-2 md:max-h-[340px] md:min-w-[640px]
                     md:rounded-none md:rounded-tl-lg md:shadow-lg group-odd:md:rounded-tr-lg
                    md:group-hover:-translate-x-3 md:group-hover:-rotate-3  md:group-hover:scale-105
                   md:group-odd:group-hover:translate-x-3 md:group-odd:group-hover:rotate-3
                    `}
                src={project.image}
                alt={project.name}
            />
        </article>
    )
}
