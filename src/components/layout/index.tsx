import React, { memo, ReactElement } from "react"

import TopNav from "../top-nav"
import Footer from "../footer"
import "./style/index.less"

type LayoutProps = {
  children: Array<React.ReactElement>
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
        <Footer />
      </footer>
    </div>
  )
}

export default memo(Layout)
