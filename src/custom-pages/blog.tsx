import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { BlogContent } from "../components/page-contents"
import blogPost from "../components/page-contents/blog-content/blog-post"

export default (props): ReactElement => {
  const { data } = props
  const {
    allMarkdownRemark: { edges: blogPostsNodes },
    allFile: { edges: blogImagesNodes },
  } = data

  const imageFluids = blogImagesNodes.map(getImageFluid)
  const blogPosts = blogPostsNodes
    .map(getBlogPost)
    .map((blogPost, index) => ({ ...blogPost, ...imageFluids[index] }))

  return (
    <Layout>
      <SEO title="My Blogs" description="This is my blogs." />
      <BlogContent blogPosts={blogPosts} />
    </Layout>
  )
}

function getImageFluid(edge) {
  const {
    node: {
      childImageSharp: { fluid },
    },
  } = edge

  return {
    fluid,
  }
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
  query blogPosts($limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { sourceInstanceName: { eq: "blogs" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
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
          excerpt(pruneLength: 110)
          wordCount {
            words
          }
        }
      }
    }

    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "blogs" }
      }
      sort: { fields: name, order: DESC }
      limit: $limit
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
