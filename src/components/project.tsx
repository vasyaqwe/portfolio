"use client"

import { type projects } from "@/config"
import React from "react"
import { Pill } from "@/components/ui/pill"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import Link from "next/link"
import { motion } from "framer-motion"

type ProjectProps = (typeof projects)[number]

export function Project({ item }: { item: ProjectProps }) {
    return (
        <motion.article
            whileTap={{ cursor: "grabbing" }}
            className={`mb:pb-0 group relative mr-4 flex min-w-0 cursor-default flex-col overflow-hidden rounded-xl border border-gray-200/75 bg-white/80
             px-5 py-5 pb-0 shadow-sm transition-colors hover:bg-neutral-50
             max-md:max-h-[65svh] max-sm:flex-shrink-0 max-sm:flex-grow-0 max-sm:basis-full sm:w-[500px] sm:flex-shrink-0 sm:rounded-2xl md:grid md:min-h-[300px]
              md:w-[760px] md:grid-cols-2 md:gap-12 md:p-8 md:px-7 md:py-8 md:pb-0 lg:pb-0
             `}
        >
            <div className="flex flex-col gap-2 group-odd:col-start-2">
                <h3 className="text-size-700 ">{item.name}</h3>
                <p className="leading-relaxed text-neutral-700">
                    {item.description}
                </p>
                <ul className="mb-4 mt-2 flex flex-wrap gap-2 gap-y-3">
                    {item.tags.map((tag) => (
                        <Pill key={tag}>{tag}</Pill>
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
                            href={item.demoLink}
                        >
                            Live demo
                            <Icons.link />
                        </Link>
                    </Button>
                    {item.githubLink && (
                        <Button
                            draggable={false}
                            asChild
                            size={"sm"}
                        >
                            <Link
                                target="_blank"
                                href={item.githubLink}
                            >
                                Source code
                                <Icons.code />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>

            {/* desktop */}
            <Image
                loading="eager"
                draggable={false}
                className={`self-end rounded-tl-xl rounded-tr-xl object-cover object-top 
                    transition-transform duration-300 group-odd:col-start-1 group-odd:row-start-1 group-odd:justify-self-end max-md:hidden sm:shadow-lg md:col-start-2
                 md:max-h-[340px] md:min-w-[640px] md:group-odd:md:rounded-tr-xl
                    md:group-hover:-translate-x-2 md:group-hover:-rotate-2 md:group-hover:scale-[103%]
                   md:group-odd:group-hover:translate-x-2 md:group-odd:group-hover:rotate-2
                    `}
                src={item.image}
                alt={item.name}
            />

            {/* mobile */}
            <Image
                loading="eager"
                draggable={false}
                className={`row-span-1 mt-auto self-end rounded-tl-xl rounded-tr-xl object-cover object-top shadow-md transition-transform 
                    duration-300 group-odd:col-start-1 group-odd:row-start-1 group-odd:justify-self-end md:hidden 
                    `}
                src={item.imageMobile}
                alt={item.name}
            />
        </motion.article>
    )
}
