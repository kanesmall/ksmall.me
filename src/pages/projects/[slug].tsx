import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { allProjects, Project } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

interface IProjectPageProps {
    project: Project
}

const ProjectPage: NextPage<IProjectPageProps> = ({ project }) => {
    const MDXContent = useMDXComponent(project.body.code)

    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.summary} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="mx-auto max-w-[1070px]">
                <div className="pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-48 lg:pb-36 ">
                    <h1 className="mb-9 text-center font-sans text-5xl font-semibold text-white sm:text-6xl lg:text-8xl">
                        {project.title}
                    </h1>
                    <div className="prose">
                        <MDXContent />
                    </div>
                </div>
            </section>
        </>
    )
}

export const getStaticPaths = () => {
    const paths = allProjects.map((project: { slug: any }) => project.slug)

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = allProjects.find((project) => project._raw.flattenedPath === params?.slug)

    return {
        props: {
            project
        }
    }
}

export default ProjectPage
