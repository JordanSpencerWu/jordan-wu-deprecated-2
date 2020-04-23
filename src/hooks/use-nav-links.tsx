import { useStaticQuery, graphql } from "gatsby"
import { FileSystemNode } from "gatsby-source-filesystem"

import { SPACE } from "../utils/constants"

const MENU_LINKS_ORDER = [
  "home",
  "blog",
  "book-list",
  "music-playlist",
  "about",
]

export type NavLinkProps = {
  name?: string
  linkTo?: string
}

export const useNavLinks = (): Array<NavLinkProps> => {
  const {
    allFile: { edges: allPagesNodes },
  } = useStaticQuery(
    graphql`
      query allPages {
        allFile(
          filter: { sourceInstanceName: { regex: "/pages|custom-pages/" } }
        ) {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  )

  const navLinks = allPagesNodes
    .map(getPageName)
    .sort(comparePageNames)
    .map(getNavLink)
    .filter(Boolean)

  return navLinks
}

function getPageName(edge: Record<string, FileSystemNode>): string {
  return edge.node.name
}

function comparePageNames(a: string, b: string): number {
  const compareA = MENU_LINKS_ORDER.indexOf(a) || 100
  const compareB = MENU_LINKS_ORDER.indexOf(b) || 100

  return compareA - compareB
}

function getNavLink(pageName: string): NavLinkProps | null {
  if (pageName == "404") return null
  if (pageName == "index") return { name: "home", linkTo: "/" }

  return {
    name: pageName.replace(/-/g, SPACE),
    linkTo: `/${pageName}`,
  }
}
