import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Welcome to my website!"
      />
      <div>Hello world!</div>
    </Layout>
  )
}
