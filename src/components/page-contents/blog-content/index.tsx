import React, { ReactElement, memo } from "react"

import "./style/index.less"

type BlogContentProps = {}

function BlogContent(props: BlogContentProps): ReactElement {
  return (
    <section className="blog-content-container">
      <div className="blog-container"></div>
    </section>
  )
}

export default memo(BlogContent)
