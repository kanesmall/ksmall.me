import type { NextPage } from "next"
import Head from "next/head"
import { ProjectCard } from "../../components/ProjectCard"
import { ProjectCards } from "@/src/components/ProjectCard/ProjectCardTypes"
import { compareDesc, format, parseISO } from "date-fns"
import { allProjects } from "contentlayer/generated"

interface IProjectsProps {
    projects: ProjectCards[]
}

const Projects: NextPage<IProjectsProps> = ({ projects }) => {
    return (
        <>
            <Head>
                <title>Projects - ksmallme</title>
                <meta name="description" content="Take a look at some of the projects I've built." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="mx-auto max-w-[1070px]">
                <div className="pt-20 pb-20 text-center sm:pt-24 sm:pb-24 lg:pt-48 lg:pb-36 ">
                    <h1 className="mb-9 font-sans text-5xl font-semibold text-white sm:text-6xl lg:text-8xl">
                        My projects
                    </h1>
                    <p className="mb-10 font-sans text-base text-white sm:text-lg">
                        A collection of some of my web projects.
                    </p>
                </div>

                <div className="mx-auto flex flex-col gap-24 md:max-w-[630px] lg:max-w-none">
                    {projects && projects.map((project) => <ProjectCard card={project} />)}
                </div>
            </section>
        </>
    )
}

export const getStaticProps = () => {
    const projects = allProjects.sort((a: { date: string | number | Date }, b: { date: string | number | Date }) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })
    return { props: { projects } }
}

export default Projects
