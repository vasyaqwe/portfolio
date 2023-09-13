import connectr from "@public/images/connectr.png"
import byronConsulting from "@public/images/byron-consulting.png"
import careerQuest from "@public/images/careerquest.png"
import multistepForm from "@public/images/multistep-form.png"
import hoobank from "@public/images/hoobank.png"
import droneSeries from "@public/images/drone-series.png"
import quizzical from "@public/images/quizzical.png"
import indiebrew from "@public/images/indiebrew.png"
import timenow from "@public/images/timenow.png"
import faq from "@public/images/faq.png"
import { Project } from "@/types"

export const nav = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "Contact",
        href: "#contact",
    },
] as const

export const projects: Project[] = [
    {
        name: "Connectr",
        description:
            "A social media app. Create an account, connect with people, create posts & comments, and like them.",
        image: connectr,
        tags: [
            "Typescript",
            "React",
            "Vite",
            "TailwindCSS",
            "Express.js",
            "MongoDB",
            "Node.js",
            "Zod",
        ],
        demoLink: "https://connectr.netlify.app",
        githubLink: "https://github.com/vasyaqwe/connectr",
    },
    {
        name: "Byron Consulting",
        description:
            "A landing page for a consulting company. With some animated parts.",
        tags: ["HTML", "CSS", "Javascript"],
        image: byronConsulting,
        demoLink: "https://byron-consulting-demo.netlify.app",
    },
    {
        name: "CareerQuest.ai",
        description: "A landing page for a career guidance company.",
        tags: ["HTML", "TailwindCSS", "Javascript"],
        image: careerQuest,
        demoLink: "https://careerquest.ai/",
    },
    {
        name: "Animated multistep form",
        description:
            "An animated multistep form, with different animations for mobile and desktop.",
        tags: ["Typescript", "React", "Vite", "TailwindCSS", "Framer-motion"],
        image: multistepForm,
        demoLink: "https://multistep-form-vasyaqwe.netlify.app",
        githubLink: "https://github.com/vasyaqwe/multistep-form",
    },
    {
        name: "Hoobank",
        description:
            "A landing page for a banking company. One page, with some gradient animations.",
        tags: ["Typescript", "React", "Vite", "TailwindCSS", "Framer-motion"],
        image: hoobank,
        githubLink: "https://github.com/vasyaqwe/hoobank",
        demoLink: "https://hoobank-vasyaqwe.netlify.app/",
    },
    {
        name: "Drone.Series",
        description:
            "A landing page for a drone showcase event. Fully responsive with some clever asymmetric layout",
        tags: ["HTML", "CSS", "Javascript"],
        image: droneSeries,
        demoLink: "https://drone-event2222.netlify.app",
    },
    {
        name: "Quizzical",
        description:
            "A quiz app where you can take a quiz after choosing a category, number of questions & difficulty.",
        tags: ["React", "Vite", "CSS"],
        image: quizzical,
        demoLink: "https://quizzical2222.netlify.app",
        githubLink: "https://github.com/vasyaqwe/quizzical",
    },
    {
        name: "IndieBrew",
        description:
            "An animated landing page with a gradient that follows your mouse & a create account page",
        tags: ["React", "Vite", "CSS", "Framer-motion"],
        image: indiebrew,
        demoLink: "https://indiebrew2222.netlify.app",
        githubLink: "https://github.com/vasyaqwe/indiebrew",
    },
    {
        name: "TimeNow",
        description:
            "A simple landing page with two pages. A homepage and a pricing page.",
        tags: ["React", "Vite", "TailwindCSS"],
        image: timenow,
        demoLink: "https://timenow2222.netlify.app",
        githubLink: "https://github.com/vasyaqwe/timenow-landing-page",
    },
    {
        name: "FAQ Accordion",
        description: "A simple accordion for a FAQ, with some animations.",
        tags: ["HTML", "CSS"],
        image: faq,
        demoLink: "https://faq2222.netlify.app/",
    },
]
