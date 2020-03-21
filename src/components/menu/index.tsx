import React from "react"
import { Link } from "gatsby"

import MenuLink from "./menu-link"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { usePageNames } from "../../hooks/use-page-names"
import "./style/index.less"

const GithubIcon = require("../../images/github.svg") 

type MenuProps = {}

function Menu(props: MenuProps) {
  const { githubUrl } = useSiteMetadata()
  const pageNames = usePageNames()

  const menuLinks = pageNames.map(pageName => {
    const { name, linkTo } = getMenuLink(pageName)
    
    if (!name) return null;
    
    return <MenuLink name={name} linkTo={linkTo} />
  })

  return (
    <div className="menu-container">
      <Link className="menu-link" to="/">
        <span className="menu-logo">Jordan Wu</span>
      </Link>
      <div className="menu-item-container">
        {menuLinks.reverse()}
        {
          githubUrl &&
          <>
            <a
              className="menu-item-link"
              href={githubUrl}
              target="_blank"
            >
              Github
            </a>
            <a
              className="menu-link"
              href={githubUrl}
              target="_blank"
            >
              <GithubIcon className="github-icon" />
            </a>
          </>
        }
      </div>
    </div>
  )
}

type MenuLink = {
  name?: string,
  linkTo?: string
}

function getMenuLink(pageName: string) : MenuLink {
  if (pageName == '404') return {}

  const name = pageName == "index" ? "home" : pageName.replace(/-/g, " ")

  return {
    name,
    linkTo: `/${pageName}`
  }
}

export default Menu