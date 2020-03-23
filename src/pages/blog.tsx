import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { BlogContent } from "../components/page-contents"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="Blog" description="This is my blogs." />
      <BlogContent />
    </Layout>
  )
}
