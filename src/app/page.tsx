import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import avatar from "@public/images/avatar.jpg"
import Image from "next/image"
import Link from "next/link"
import { bounceIn } from "@/lib/motion"
import { ContactForm } from "@/components/forms/contact-form"
import { projects, skills } from "@/config"
import { Project } from "@/components/project"
import { Section } from "@/components/section"
import { Carousel } from "@/components/carousel"
import { Pill } from "@/components/ui/pill"
import { DividerArrow } from "@/components/ui/divider-arrow"

export default function Home() {
    return (
        <div className="flex flex-col gap-16 md:gap-24 xl:gap-32">
            <Section
                section="Home"
                id="home"
                variants={bounceIn({ direction: "down", delay: 0.1 })}
                initial={"hidden"}
                animate={"visible"}
                className="container pt-40"
            >
                <Image
                    className="mx-auto h-32 w-32 rounded-full border-2 border-white object-cover object-top shadow-lg"
                    src={avatar}
                    alt={"Vasyl Polishchuk"}
                />
                <p className="mt-6 text-center text-size-500 leading-relaxed ">
                    <strong>Hi! I'm Vasya</strong>, a{" "}
                    <strong>front-end developer.</strong>
                    <br /> Currently working on becoming a full-stack one,{" "}
                    <br />
                    focusing on <strong>React & Next.js.</strong>
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-2 ">
                    <Button
                        asChild
                        className="group"
                    >
                        <Link href={"#contact"}>
                            Contact me{" "}
                            <Icons.arrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant={"secondary"}
                        size={"icon"}
                    >
                        <Link
                            target="_blank"
                            href={"https://github.com/vasyaqwe"}
                            aria-label="Github"
                        >
                            <Icons.github />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant={"secondary"}
                        size={"icon"}
                    >
                        <Link
                            target="_blank"
                            href={
                                "https://www.upwork.com/freelancers/~015c1b113a62e11b13"
                            }
                            aria-label="Upwork"
                        >
                            <Icons.upwork />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant={"secondary"}
                        size={"icon"}
                    >
                        <Link
                            target="_blank"
                            href={
                                "https://www.linkedin.com/in/vasyl-polishchuk-37329624b/"
                            }
                            aria-label="LinkedIn"
                        >
                            <Icons.linkedIn />
                        </Link>
                    </Button>
                </div>
            </Section>
            <DividerArrow />
            <Section
                section="About"
                id="about"
                variants={bounceIn({ delay: 0.25 })}
                initial={"hidden"}
                animate={"visible"}
                className="mx-auto max-w-[55rem] px-6 text-center"
            >
                <h2 className="mb-8 text-size-800">About me</h2>
                <p>
                    I'm from Ukraine, and I've been{" "}
                    <strong>
                        developing websites for almost two years now
                    </strong>
                    , <br /> and{" "}
                    <strong>
                        have been working on real-world projects for a year
                    </strong>
                    .
                </p>
                <p>
                    I started my journey purely with <strong>front-end</strong>,
                    and have started going into{" "}
                    <strong>full-stack development</strong> just recently.{" "}
                </p>
                <p>
                    I love web dev and I love to learn something new about it
                    everyday, any stay up-to-date with the latest tech.
                </p>
            </Section>
            <Section
                section="Projects"
                id="projects"
                className="px-3 md:px-6"
            >
                <h2 className="mb-6 text-center text-size-800 md:mb-10 xl:mb-12">
                    My projects
                </h2>
                <Carousel>
                    {projects.map((project) => (
                        <Project
                            key={project.name}
                            item={project}
                        />
                    ))}
                </Carousel>
                {/* <MobileSlider
                    slidesList={projects}
                    slide={Project}
                    sliderClassName="h-[515px]"
                    className="md:hidden"
                /> */}
            </Section>
            <Section
                section="Skills"
                id="skills"
                className="container px-3 md:px-6"
            >
                <h2 className="mb-5 text-center text-size-800 md:mb-10">
                    My skills
                </h2>
                <p className="mb-5 text-center md:mb-12">
                    I tend to lean towards <strong>modern</strong> stuff, for
                    example, I never learned <strong>Redux</strong>, but chose
                    to use <strong>Zustand</strong> in combination with{" "}
                    <strong>React Query</strong> as my go-to state management
                    and data fetching solutions. For animations -{" "}
                    <strong>Framer-motion</strong> is my pick.
                </p>
                <ul className="m flex flex-wrap justify-center gap-3">
                    {skills.map((skill) => (
                        <Pill
                            className="rounded-xl pb-[2px] text-size-400 md:px-4 md:py-1 lg:text-size-400"
                            key={skill}
                        >
                            {skill}
                        </Pill>
                    ))}
                </ul>
            </Section>
            <Section
                section="Contact"
                id="contact"
                className="container  text-center"
            >
                <h2 className="mb-5 text-size-800">Contact me</h2>
                <ContactForm />
            </Section>
        </div>
    )
}
