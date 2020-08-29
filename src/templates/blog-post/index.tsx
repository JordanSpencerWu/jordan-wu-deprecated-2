import React, { ReactElement, useEffect } from "react"
import { graphql } from "gatsby"
import { useSpring, animated } from "react-spring"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./style/index.less"

export default (props): ReactElement => {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })

  useEffect(() => {
    // @ts-ignore
    window.MathJax && window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub])
  })

  const {
    data: {
      markdownRemark: {
        frontmatter: { title, seo_description },
        html,
      },
    },
  } = props

  return (
    <Layout>
      <SEO title="Blog Post" description={seo_description} />
      <div className="blog-post-container">
        <animated.div style={spring} className="blog-post-content-container">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </animated.div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        seo_description
        title
      }
    }
  }
`
