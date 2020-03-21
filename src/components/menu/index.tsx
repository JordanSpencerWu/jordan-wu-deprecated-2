import React from "react"
import { Link } from "gatsby"

import "./style/index.less"

const GithubIcon = require("../../images/github.svg") 

type MenuProps = {}

function Menu(props: MenuProps) {
  return (
    <div className="menu-container">
      <Link className="menu-link" to="/">
        <span className="menu-logo">Jordan Wu</span>
      </Link>
      <div className="menu-navigation-container">
        <Link className="menu-item-link" to="/">
          Home
        </Link>
        <Link className="menu-item-link" to="/blog">
          Blog
        </Link>
        <Link className="menu-item-link" to="/book-list">
          Book List
        </Link>
        <a
          className="menu-item-link"
          href="https://github.com/JordanSpencerWu"
          target="_blank"
        >
          Github
        </a>
        <a
          className="menu-link"
          href="https://github.com/JordanSpencerWu"
          target="_blank"
        >
          <GithubIcon className="github-icon" />
        </a>
      </div>
    </div>
  )
}

export default Menu