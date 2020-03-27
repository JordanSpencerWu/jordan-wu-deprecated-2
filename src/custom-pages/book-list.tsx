import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="My Book List" description="This is my book list." />
      <div>Book List</div>
    </Layout>
  )
}
