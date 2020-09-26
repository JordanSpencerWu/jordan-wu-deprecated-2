import React, { ReactElement } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { SPACE } from "../../utils/constants"
import "./style/index.less"

export default (): ReactElement => {
  const {
    markdownRemark: {
      html,
      frontmatter: { author, seo_description, title },
    },
    allMarkdownRemark: { edges: synthSecretsNodes },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/books/synth-secrets/" } }) {
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
          fileAbsolutePath: { regex: "/synth-secrets/.*/" }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const authorNames = author.join(SPACE)
  const synthSecretsLinks = synthSecretsNodes.map(({ node }) => {
    const {
      fields: { slug },
      frontmatter: { title },
    } = node

    return {
      slug,
      title,
    }
  })

  const renderParts = synthSecretsLinks.map(({ slug, title }) => (
    <Link key={slug} to={slug}>
      {title}
    </Link>
  ))

  return (
    <Layout>
      <SEO title={title} description={seo_description} />
      <div className="book-note-container">
        <div className="book-note-content-container">
          <h1>{title}</h1>
          <small>by {authorNames}</small>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <h3>Parts</h3>
          {renderParts}
        </div>
      </div>
    </Layout>
  )
}
