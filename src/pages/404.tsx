import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="Page not found" description="404 page" />
      <div>404</div>
    </Layout>
  )
}
