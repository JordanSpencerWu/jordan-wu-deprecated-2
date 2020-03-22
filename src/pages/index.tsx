import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default (props: PageProps) => {
  const {
    location: { pathname: currentPath },
  } = props

  return (
    <Layout currentPath={currentPath}>
      <SEO title="Home" description="Welcome to my website!" />
      <div>Hello world!</div>
    </Layout>
  )
}
