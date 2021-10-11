import React, { ReactElement } from "react"

import Layout from "../components/layout"
import MyMissionContent from "../components/page-contents/my-mission-content"
import SEO from "../components/seo"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="My Mission" description="My mission statement" />
      <MyMissionContent />
    </Layout>
  )
}
