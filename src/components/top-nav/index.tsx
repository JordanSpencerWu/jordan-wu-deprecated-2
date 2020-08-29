import React, { memo, ReactElement } from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { LinkGetProps } from "@reach/router"

import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { useNavLinks } from "../../hooks/use-nav-links"
import "./style/index.less"

const GithubIcon = require("../../images/github.svg")
const BackArrowIcon = require("../../images/back-arrow.svg")

type TopNavProps = {}

function TopNav(props: TopNavProps): ReactElement {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const { githubUrl } = useSiteMetadata()
  const navLinks = useNavLinks()

  const goBack = () => {
    navigate(-1)
  }

  const showBackArrowIcon = path.includes('/blogs/') || path.includes('/books/')

  const menuLinks = navLinks.map(navLink => {
    const { name, linkTo } = navLink

    return (
      <div key={name} className="top-nav-link-container">
        <Link getProps={addClassName} to={linkTo}>
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
      className="top-nav-icon-link right show-on-screen-sm"
      href={githubUrl}
      target="_blank"
    >
      <GithubIcon className="top-nav-icon" />
    </a>
  )

  const mobileBackArrowIcon = (
    <a
    className="top-nav-icon-link left show-on-screen-sm"
    onClick={goBack}
  >
    <BackArrowIcon style={{width: 34, height: 34}} className="top-nav-icon" />
  </a>
  )

  return (
    <nav className="top-nav-container">
      {showBackArrowIcon && mobileBackArrowIcon}
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

function addClassName(props: LinkGetProps): object {
  const {
    isCurrent,
    href,
    location: { pathname, href: locationHref },
  } = props

  const isCurrentBook = href === `/book-list` && pathname.includes(`/books`)
  const isCurrentBlog = href === `/blog` && pathname.includes(`/blogs`)
  const isCurrentPage =
    href !== `/` && locationHref && locationHref.includes(href)

  return isCurrent || isCurrentBook || isCurrentBlog || isCurrentPage
    ? { className: "top-nav-item-link active" }
    : { className: "top-nav-item-link" }
}

export default memo(TopNav)
