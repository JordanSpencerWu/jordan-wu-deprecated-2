import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default (props: PageProps) => {
  const {
    location: { pathname: currentPath },
  } = props

  return (
    <Layout currentPath={currentPath}>
      <SEO title="Resume" description="This is my resume." />
      <div>Resume</div>
    </Layout>
  )
}
