import createMDX from "@next/mdx"
import remarkFrontmatter from "remark-frontmatter"
import remarkRehype from "remark-rehype"

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkFrontmatter, remarkRehype],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react"
    }
})

export default withMDX(nextConfig, {
    pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"]
})
