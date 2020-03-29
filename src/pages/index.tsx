import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HomeContent from "../components/page-contents/home-content"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="Home" description="Welcome to my website!" />
      <HomeContent />
    </Layout>
  )
}
