import React, { memo, ReactElement } from "react"
import { Link } from "gatsby"

import { NavLinkProps, useNavLinks } from "../../hooks/use-nav-links"
import "./style/index.less"

const BlogIcon = require("../../images/blog.svg")
const BookListIcon = require("../../images/book-list.svg")
const HomeIcon = require("../../images/home.svg")
const ResumeIcon = require("../../images/resume.svg")
const MusicPlaylistIcon = require("../../images/music-playlist.svg")

type BottomNavProps = {
  currentPath: string
}

function BottomNav(props: BottomNavProps): ReactElement {
  const navLinks = useNavLinks()

  const bottomNavLinks = navLinks.map(getBottomNavLink).map(bottomNavLink => {
    console.log(bottomNavLink)
    const { name, linkTo, icon } = bottomNavLink

    return (
      <Link key={name} className="bottom-nav-link" to={linkTo}>
        {icon}
        <small>{name}</small>
      </Link>
    )
  })

  return (
    <div className="bottom-nav-container show-on-screen-sm">
      {bottomNavLinks}
    </div>
  )
}

type BottomNavLinkProps = {
  name: string
  linkTo: string
  icon: ReactElement
}

function getBottomNavLink(navLink: NavLinkProps): BottomNavLinkProps {
  const { linkTo, name } = navLink

  let navName: string, icon: ReactElement
  switch (name) {
    case "blog":
      navName = "blogs"
      icon = <BlogIcon className="bottom-nav-icon" />
      break
    case "book list":
      navName = "books"
      icon = <BookListIcon className="bottom-nav-icon" />
      break
    case "home":
      navName = "home"
      icon = <HomeIcon className="bottom-nav-icon" />
      break
    case "music playlist":
      navName = "playlist"
      icon = <MusicPlaylistIcon className="bottom-nav-icon" />
      break
    case "resume":
      navName = "resume"
      icon = <ResumeIcon className="bottom-nav-icon" />
      break
    default:
      navName = ""
      icon = null
      break
  }

  return {
    name: navName,
    linkTo,
    icon,
  }
}

export default memo(BottomNav)
