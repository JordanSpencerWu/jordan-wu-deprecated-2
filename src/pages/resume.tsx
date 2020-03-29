import React, { ReactElement } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ResumeContent from "../components/page-contents/resume-content"

export default (): ReactElement => {
  return (
    <Layout>
      <SEO title="My Resume" description="This is my resume." />
      <ResumeContent />
    </Layout>
  )
}
