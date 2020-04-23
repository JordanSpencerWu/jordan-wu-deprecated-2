import React, { ReactElement } from "react"

import Layout from "../components/layout"
import AboutContent from "../components/page-contents/about-content"
import SEO from "../components/seo"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="About" description="This is my about page." />
      <AboutContent />
    </Layout>
  )
}
