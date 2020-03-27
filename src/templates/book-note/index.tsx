import React, { ReactElement, useEffect } from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import "./style/index.less"

export default (props): ReactElement => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { author, date, description, title, seo_description },
        html,
      },
    },
  } = props

  const authorNames = author.join(" ")

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Layout>
      <SEO title={title} description={seo_description} />
      <div>
        <h1>{title}</h1>
        <small>{authorNames}</small>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

function waitForGlobal(name, timeout = 300) {
  return new Promise((resolve, reject) => {
    let waited = 0

    function wait(interval) {
      setTimeout(() => {
        waited += interval
        // some logic to check if script is loaded
        // usually it something global in window object
        if (window[name] !== undefined) {
          return resolve()
        }
        if (waited >= timeout * 1000) {
          return reject({ message: "Timeout" })
        }
        wait(interval * 2)
      }, interval)
    }

    wait(30)
  })
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date
        description
        seo_description
        title
      }
    }
  }
`
