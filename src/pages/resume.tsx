import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="My Resume" description="This is my resume." />
      <div>Resume</div>
    </Layout>
  )
}
