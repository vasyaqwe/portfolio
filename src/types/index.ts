import { type nav } from "@/config"
import { type StaticImageData } from "next/image"

export type HomepageListItem = {
    title: string
    description: string
    image: StaticImageData
}

export type Project = {
    name: string
    description: string
    image: StaticImageData
    imageMobile: StaticImageData
    tags: string[]
    demoLink: string
    githubLink?: string
}

export type Section = (typeof nav)[number]["label"]
