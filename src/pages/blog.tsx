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
      <SEO title="Blog" description="This is my blogs." />
      <div>Blogs</div>
    </Layout>
  )
}
