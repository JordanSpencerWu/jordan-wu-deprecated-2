import React, { ReactElement } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { navigate } from "@reach/router"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import "./style/index.less"

export default (): ReactElement => {
  const {
    markdownRemark: {
      frontmatter: { author, seo_description, title },
    },
    allMarkdownRemark: { edges: codeCompleteNodes },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/books/code-complete/" } }) {
        html
        frontmatter {
          author
          seo_description
          title
        }
      }

      allMarkdownRemark(
        filter: {
          fields: { sourceInstanceName: { eq: "books" } }
          fileAbsolutePath: { regex: "/code-complete/.*/" }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const authorNames = author.join(" ")
  const codeCompleteLinks = codeCompleteNodes.map(({ node }) => {
    const {
      fields: { slug },
    } = node

    const name = slug.split("/")[3]

    return {
      slug,
      name,
    }
  })

  const goBack = () => {
    navigate(-1)
  }

  const renderChapters = codeCompleteLinks.map(({ slug, name }) => (
    <Link key={name} to={slug}>
      {name.replace("-", " ")}
    </Link>
  ))

  return (
    <Layout>
      <SEO title={title} description={seo_description} />
      <div className="book-note-container">
        <div className="book-note-content-container">
          <a onClick={goBack} className="blog-post-back-link">
            Go back
          </a>
          <h1>{title}</h1>
          <small>{authorNames}</small>
          <h3>Chapters</h3>
          {renderChapters}
        </div>
      </div>
    </Layout>
  )
}
