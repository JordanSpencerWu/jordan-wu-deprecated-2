import React, { ReactElement, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { navigate } from "@reach/router"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import "./style/index.less"

export default (): ReactElement => {
  const {
    markdownRemark: {
      html,
      frontmatter: { author, seo_description, title },
    },
    allMarkdownRemark: { edges: introToAlgorithmNodes },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(
        fields: { slug: { eq: "/books/introduction-to-algorithms/" } }
      ) {
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
          fileAbsolutePath: { regex: "/introduction-to-algorithms/.*/" }
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

  useEffect(() => {
    // @ts-ignore
    window.MathJax && window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub])
  })

  const authorNames = author.join(" ")
  const introToAlgorithmLinks = introToAlgorithmNodes.map(({ node }) => {
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

  const renderChapters = introToAlgorithmLinks.map(({ slug, name }) => (
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
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <h3>Chapters</h3>
          {renderChapters}
        </div>
      </div>
    </Layout>
  )
}
