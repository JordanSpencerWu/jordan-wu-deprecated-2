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

  const blogPosts = edges.map(getBlogPost)

  return (
    <Layout>
      <SEO title="My Blogs" description="This is my blogs." />
      <BlogContent blogPosts={blogPosts} />
    </Layout>
  )
}

function getBlogPost(edge) {
  const {
    node: {
      frontmatter: { date, title },
      fields: { slug },
      excerpt,
      wordCount: { words },
    },
  } = edge

  return {
    date,
    excerpt,
    slug,
    title,
    words,
  }
}

export const blogPostsQuery = graphql`
  query blogPostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD")
            title
          }
          fields {
            slug
          }
          excerpt(pruneLength: 160)
          wordCount {
            words
          }
        }
      }
    }
  }
`
