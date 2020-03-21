import { useStaticQuery, graphql } from "gatsby"
import { FileSystemNode } from "gatsby-source-filesystem"

export const usePageNames = () : Array<string> => {
  const { allFile: { edges } } = useStaticQuery(
    graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  )

  return edges.map(getPageName)
}

function getPageName(edge: Record<string, FileSystemNode>) : string {
  return edge.node.name
}