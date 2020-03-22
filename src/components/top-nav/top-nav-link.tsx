import React, { memo, ReactElement } from "react"
import { Link } from "gatsby"

type TopNavLinkProps = {
  name: string
  linkTo: string
}

function MenuLink(props: TopNavLinkProps): ReactElement {
  const { name, linkTo } = props

  return (
    <div className="top-nav-link-container">
      <Link className="top-nav-item-link" to={linkTo}>
        {name}
      </Link>
    </div>
  )
}

export default memo(MenuLink)
