import React from "react"
import { Link } from "gatsby"

type MenuLinkProps = {
  name: string,
  linkTo: string,
}

function MenuLink(props: MenuLinkProps) {
  const { name, linkTo } = props;

  return (
    <div className="menu-link-container">
      <Link className="menu-item-link" to={linkTo}>
        {name}
      </Link>
    </div>
  )
}

export default MenuLink