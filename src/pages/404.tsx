import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <SEO
        title="Page not found"
        description="404 page"
      />
      <div>404</div>
    </Layout>
  )
}