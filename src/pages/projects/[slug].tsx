import fs from "fs"
import path from "path"
import { NextPage } from "next"
import matter from "gray-matter"
import { ProjectCards } from "@/src/components/ProjectCard/ProjectCardTypes"
import { MDXProvider } from "@mdx-js/react"
import Head from "next/head"

interface IProjectPageProps {
    frontmatter: ProjectCards
    content: string
}

const ProjectPage: NextPage<IProjectPageProps> = ({ frontmatter, content }) => {
    return (
        <MDXProvider>
            <Head>
                <title>{frontmatter.title}</title>
                <meta name="description" content={frontmatter.summary} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="mx-auto max-w-[1070px]">
                <div className="pt-20 pb-20 text-center sm:pt-24 sm:pb-24 lg:pt-48 lg:pb-36 ">
                    <h1 className="mb-9 font-sans text-5xl font-semibold text-white sm:text-6xl lg:text-8xl">
                        {frontmatter.title}
                    </h1>
                    <div className="prose">{content}</div>
                </div>
            </section>
        </MDXProvider>
    )
}

export const getStaticPaths = () => {
    const files = fs.readdirSync(path.join("src/projects"))
    const paths = files
        .filter((x) => x.includes(".mdx"))
        .map((filename) => ({
            params: { slug: filename.replace(".mdx", "") }
        }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join("src/projects", slug + ".mdx"), "utf-8")
    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}

export default ProjectPage
