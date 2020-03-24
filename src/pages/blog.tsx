import React, { ReactElement } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { BlogContent } from "../components/page-contents"

export default (props): ReactElement => {
  const { data } = props
  const {
    allMarkdownRemark: { edges },
  } = data

  const blogs = edges.map(getBlog)

  return (
    <Layout>
      <SEO title="My Blogs" description="This is my blogs." />
      <BlogContent blogs={blogs} />
    </Layout>
  )
}

function getBlog(edge) {
  const {
    node: {
      frontmatter: { date, title },
      fields: { slug },
      excerpt,
    },
  } = edge

  return {
    date,
    excerpt,
    slug,
    title,
  }
}

export const blogs = graphql`
  query blogs {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
