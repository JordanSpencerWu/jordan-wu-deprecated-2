import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="Blog" description="This is my blogs." />
      <div>Blogs</div>
    </Layout>
  )
}
