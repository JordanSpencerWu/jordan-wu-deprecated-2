import { useStaticQuery, graphql } from "gatsby"
import { FileSystemNode } from "gatsby-source-filesystem"

const MENU_LINKS_ORDER = [
  "home",
  "blog",
  "book-list",
  "music-playlist",
  "resume",
]

export const usePageNames = (): Array<string> => {
  const {
    allFile: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  )

  return edges.map(getPageName).sort((a, b) => {
    const compareA = MENU_LINKS_ORDER.indexOf(a) || 100
    const compareB = MENU_LINKS_ORDER.indexOf(b) || 100

    return compareA - compareB
  })
}

function getPageName(edge: Record<string, FileSystemNode>): string {
  return edge.node.name
}
