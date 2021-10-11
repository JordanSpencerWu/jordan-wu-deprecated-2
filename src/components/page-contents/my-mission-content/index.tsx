import React, { ReactElement, memo } from "react"
import { graphql, useStaticQuery } from "gatsby"

type MyMissionContentProps = {}

function MyMissionContent(props: MyMissionContentProps): ReactElement {
  const {
    markdownRemark: { html },
  } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/my-mission" } }) {
        html
      }
    }
  `)

  return (
    <div className="about-content-container">
      <div className="about-content-context-container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export default memo(MyMissionContent)
