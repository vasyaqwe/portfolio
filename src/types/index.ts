import { nav } from "@/config"
import { StaticImageData } from "next/image"

export type HomepageListItem = {
    title: string
    description: string
    image: StaticImageData
}

export type Project = {
    name: string
    description: string
    image: StaticImageData
    tags: string[]
    demoLink: string
    githubLink?: string
}

export type Section = (typeof nav)[number]["label"]
