import React, { memo, ReactElement } from "react"

import BottomNav from "../bottom-nav"
import Footer from "../footer"
import TopNav from "../top-nav"
import "./style/index.less"

type LayoutProps = {
  children: Array<ReactElement>
}

function Layout(props: LayoutProps): ReactElement {
  const { children } = props

  return (
    <div className="layout-container">
      <header>
        <TopNav />
      </header>
      <main>{children}</main>
      <footer>
        <BottomNav />
        <Footer />
      </footer>
    </div>
  )
}

export default memo(Layout)
