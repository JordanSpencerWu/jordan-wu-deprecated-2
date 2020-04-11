import React, { ReactElement, useEffect } from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import { useSpring, animated } from "react-spring"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./style/index.less"

export default (props): ReactElement => {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })

  const {
    data: {
      mdx: {
        body,
        frontmatter: { title, seo_description },
      },
    },
  } = props

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Layout>
      <SEO title="Blog Post" description={seo_description} />
      <div className="blog-post-container">
        <animated.div style={spring} className="blog-post-content-container">
          <a onClick={goBack} className="blog-post-back-link">
            Go back
          </a>
          <h1>{title}</h1>
          <MDXRenderer>{body}</MDXRenderer>
        </animated.div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        seo_description
        title
      }
    }
  }
`
