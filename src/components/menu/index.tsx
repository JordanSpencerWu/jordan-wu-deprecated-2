import React, { memo } from "react"
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
    
    return <MenuLink key={name} name={name} linkTo={linkTo} />
  })

  const githubMenuLink = (
    <>
      <a
        className="menu-item-link"
        href={githubUrl}
        target="_blank"
      >
        Github
      </a>
      <a
        className="menu-item-logo-link"
        href={githubUrl}
        target="_blank"
      >
        <GithubIcon className="menu-github-icon" />
      </a>
    </>
  )

  const mobileGithubIcon = (
    <a
      className="menu-github-icon-link show-on-screen-sm"
      href={githubUrl}
      target="_blank"
    >
      <GithubIcon className="menu-github-icon" />
    </a>
  )

  return (
    <nav className="menu-container">
      <Link className="menu-item-logo-link" to="/">
        <span className="menu-logo">Jordan Wu</span>
      </Link>
      <div className="menu-item-container hide-on-screen-sm">
        { menuLinks.reverse() }
        { githubUrl && githubMenuLink }
      </div>
      { mobileGithubIcon }
    </nav>
  )
}

type MenuLink = {
  name?: string,
  linkTo?: string
}

function getMenuLink(pageName: string) : MenuLink {
  if (pageName == '404') return {}
  if (pageName == "index") return {name: "home", linkTo: "/"}

  return {
    name: pageName.replace(/-/g, " "),
    linkTo: `/${pageName}`
  }
}

export default memo(Menu)