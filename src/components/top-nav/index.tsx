import React, { memo, ReactElement } from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { useNavLinks } from "../../hooks/use-nav-links"
import "./style/index.less"

const GithubIcon = require("../../images/github.svg")

type TopNavProps = {
  currentPath: string
}

function TopNav(props: TopNavProps): ReactElement {
  const { currentPath } = props
  const { githubUrl } = useSiteMetadata()
  const navLinks = useNavLinks()

  const menuLinks = navLinks.map(navLink => {
    const { name, linkTo } = navLink

    return (
      <div className="top-nav-link-container">
        <Link className="top-nav-item-link" to={linkTo}>
          {name}
        </Link>
      </div>
    )
  })

  const githubMenuLink = (
    <>
      <a className="top-nav-item-link" href={githubUrl} target="_blank">
        Github
      </a>
      <a className="top-nav-item-logo-link" href={githubUrl} target="_blank">
        <GithubIcon className="top-nav-icon" />
      </a>
    </>
  )

  const mobileGithubIcon = (
    <a
      className="top-nav-icon-link show-on-screen-sm"
      href={githubUrl}
      target="_blank"
    >
      <GithubIcon className="top-nav-icon" />
    </a>
  )

  return (
    <nav className="top-nav-container">
      <Link className="top-nav-item-logo-link" to="/">
        <span className="top-nav-logo">Jordan Wu</span>
      </Link>
      <div className="top-nav-item-container hide-on-screen-sm">
        {menuLinks}
        {githubUrl && githubMenuLink}
      </div>
      {mobileGithubIcon}
    </nav>
  )
}

export default memo(TopNav)
