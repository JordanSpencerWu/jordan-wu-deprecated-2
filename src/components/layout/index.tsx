import React, { memo, ReactElement } from "react"

import BottomNav from "../bottom-nav"
import Footer from "../footer"
import TopNav from "../top-nav"
import "./style/index.less"

type LayoutProps = {
  children: Array<React.ReactElement>
  currentPath: string
}

function Layout(props: LayoutProps): ReactElement {
  const { children, currentPath } = props

  return (
    <div className="layout-container">
      <header>
        <TopNav currentPath={currentPath} />
      </header>
      <main>{children}</main>
      <footer>
        <BottomNav currentPath={currentPath} />
        <Footer />
      </footer>
    </div>
  )
}

export default memo(Layout)
