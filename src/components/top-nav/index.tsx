import React, { memo, ReactElement } from "react"
import { Link } from "gatsby"

import TopNavLink from "./top-nav-link"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { usePageNames } from "../../hooks/use-page-names"
import "./style/index.less"

const GithubIcon = require("../../images/github.svg")

type TopNavProps = {}

function TopNav(props: TopNavProps): ReactElement {
  const { githubUrl } = useSiteMetadata()
  const pageNames = usePageNames()

  const menuLinks = pageNames.map(pageName => {
    const { name, linkTo } = getMenuLink(pageName)

    if (!name) return null

    return <TopNavLink key={name} name={name} linkTo={linkTo} />
  })

  const githubMenuLink = (
    <>
      <a className="top-nav-item-link" href={githubUrl} target="_blank">
        Github
      </a>
      <a className="top-nav-item-logo-link" href={githubUrl} target="_blank">
        <GithubIcon className="top-nav-github-icon" />
      </a>
    </>
  )

  const mobileGithubIcon = (
    <a
      className="top-nav-github-icon-link show-on-screen-sm"
      href={githubUrl}
      target="_blank"
    >
      <GithubIcon className="top-nav-github-icon" />
    </a>
  )

  return (
    <nav className="top-nav-container">
      <Link className="top-nav-item-logo-link" to="/">
        <span className="top-nav-logo">Jordan Wu</span>
      </Link>
      <div className="top-nav-item-container hide-on-screen-sm">
        {menuLinks.reverse()}
        {githubUrl && githubMenuLink}
      </div>
      {mobileGithubIcon}
    </nav>
  )
}

type TopNavLink = {
  name?: string
  linkTo?: string
}

function getMenuLink(pageName: string): TopNavLink {
  if (pageName == "404") return {}
  if (pageName == "index") return { name: "home", linkTo: "/" }

  return {
    name: pageName.replace(/-/g, " "),
    linkTo: `/${pageName}`,
  }
}

export default memo(TopNav)
