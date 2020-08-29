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
    allMarkdownRemark: { edges: electronicMusicAndSoundDesignNodes },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/books/electronic-music-and-sound-design/" } }) {
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
          fileAbsolutePath: { regex: "/electronic-music-and-sound-design/.*/" }
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

  const authorNames = author.join(SPACE)
  const electronicMusicAndSoundDesignLinks = electronicMusicAndSoundDesignNodes.map(({ node }) => {
    const {
      fields: { slug },
    } = node

    const name = slug.split("/")[3]

    return {
      slug,
      name,
    }
  })

  const renderChapters = electronicMusicAndSoundDesignLinks.map(({ slug, name }) => (
    <Link key={name} to={slug}>
      {name.replace("-", SPACE)}
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
          <h3>Chapters</h3>
          {renderChapters}
        </div>
      </div>
    </Layout>
  )
}
