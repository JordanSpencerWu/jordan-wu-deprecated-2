import React, { ReactElement } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import "./style/index.less"

export default (props): ReactElement => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { title, seo_description },
        html,
      },
    },
  } = props

  return (
    <Layout>
      <SEO title="Blog Post" description={seo_description} />
      <div className="blog-post-container">
        <div className="blog-post-content-container">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        seo_description
        title
      }
    }
  }
`
