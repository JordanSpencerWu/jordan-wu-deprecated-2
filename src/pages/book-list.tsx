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
      <SEO title="Book List" description="This is my book list." />
      <div>Book List</div>
    </Layout>
  )
}
