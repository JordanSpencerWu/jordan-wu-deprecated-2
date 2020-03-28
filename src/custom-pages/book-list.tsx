import React, { ReactElement } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BookContent from "../components/page-contents/book-content"

export default (props): ReactElement => {
  const {
    data: {
      imageFiles: { edges: imageNodes },
      bookFiles: { edges: bookNodes },
    },
  } = props

  const imagesMap = imageNodes.reduce((accumulator, { node }) => {
    const {
      childImageSharp: { fluid },
      name,
    } = node
    accumulator[name] = fluid

    return accumulator
  }, {})

  const books = bookNodes.map(({ node }) => {
    const {
      childMarkdownRemark: {
        fields: { slug },
        frontmatter: { author, title, description },
      },
      name,
    } = node
    const fluid = imagesMap[name]

    return {
      author,
      description,
      slug,
      title,
      fluid,
    }
  })

  return (
    <Layout>
      <SEO title="My Book List" description="This is my book list." />
      <BookContent books={books} />
    </Layout>
  )
}

export const BookListQuery = graphql`
  query bookListQuery {
    imageFiles: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "books" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          name
        }
      }
    }

    bookFiles: allFile(
      filter: {
        sourceInstanceName: { eq: "books" }
        relativeDirectory: { regex: "/^[0-9]+$/" }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              author
              title
              description
            }
          }
          name
        }
      }
    }
  }
`
