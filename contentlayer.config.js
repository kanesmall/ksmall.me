import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Project = defineDocumentType(() => ({
    name: "Project",
    contentType: "mdx",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: {
            type: "string",
            description: "The title of the project",
            required: true
        },
        date: {
            type: "date",
            description: "The date of the project",
            required: true
        },
        summary: {
            type: "string",
            description: "The summary for the project",
            required: true
        },
        link: {
            type: "string",
            description: "The project website link",
            required: true
        },
        image: {
            type: "string",
            description: "The image path of the project thumbnail",
            required: true
        },
        imagePos: {
            type: "enum",
            options: ["left", "right"],
            default: "right",
            description: "The optional image position for the project thumbnail"
        }
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (project) => `/projects/${project._raw.flattenedPath}`
        }
    }
}))

export default makeSource({
    contentDirPath: "projects",
    documentTypes: [Project]
})
