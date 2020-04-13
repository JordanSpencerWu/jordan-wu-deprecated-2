import React, { ReactElement } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogContent from "../components/page-contents/blog-content"

export default (props): ReactElement => {
  const { data } = props
  const {
    blogs: { edges: blogPostsNodes },
    images: { edges: blogImagesNodes },
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
    node: { childMarkdownRemark, childMdx },
  } = edge

  let node
  if (childMarkdownRemark) {
    node = childMarkdownRemark
  } else {
    node = childMdx
  }

  const {
    frontmatter: { date, title },
    fields: { slug },
    excerpt,
    wordCount: { words },
  } = node

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
    blogs: allFile(
      filter: {
        sourceInstanceName: { eq: "blogs" }
        extension: { regex: "/(md|mdx)/" }
      }
      sort: { order: DESC, fields: name }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
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
          childMdx {
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
    }

    images: allFile(
      filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {regex: "/blogs/*/"}}
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
