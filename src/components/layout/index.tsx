import React from "react"

import TopNav from "../top-nav"

type LayoutProps = {
  children: Array<React.ReactNode>
}

function Layout(props: LayoutProps) {
  return (
    <>
      <TopNav />
      {props.children}
    </>
  )
}

export default Layout
