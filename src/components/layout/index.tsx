import React from "react"

import Menu from "../menu"

type LayoutProps = {
  children: Array<React.ReactNode>
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Menu/>
      {props.children}
    </>
  )
}

export default Layout