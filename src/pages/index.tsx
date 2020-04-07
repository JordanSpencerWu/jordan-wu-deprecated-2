import React, { ReactElement } from "react"

import HomeContent from "../components/page-contents/home-content"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="Home" description="Welcome to my website!" />
      <HomeContent />
    </Layout>
  )
}
