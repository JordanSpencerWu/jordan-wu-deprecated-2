import React, { memo, ReactElement } from "react"
import "prismjs/themes/prism-okaidia.css"
import { MDXProvider } from "@mdx-js/react"

import BottomNav from "../bottom-nav"
import Footer from "../footer"
import TopNav from "../top-nav"
import DelayCalculator from "../delay-calculator"
import "./style/index.less"

const shortcodes = { DelayCalculator }

type LayoutProps = {
  children: Array<ReactElement>
}

function Layout(props: LayoutProps): ReactElement {
  const { children } = props

  return (
    <MDXProvider components={shortcodes}>
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
    </MDXProvider>
  )
}

export default memo(Layout)
