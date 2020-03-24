import React, { ReactElement, memo } from "react"

import "./style/index.less"

type Blog = {
  date: string
  excerpt: string
  slug: string
  title: string
}

type BlogContentProps = {
  blogs: Array<Blog>
}

function BlogContent(props: BlogContentProps): ReactElement {
  const { blogs } = props

  const renderBlogs = blogs.map(blog => {
    const { date, excerpt, slug, title } = blog

    return (
      <div key={date}>
        <h1>{title}</h1>
        <p>{date} by Jordan Wu</p>
        <p>{excerpt}</p>
      </div>
    )
  })

  return <section className="blog-content-container">{renderBlogs}</section>
}

export default memo(BlogContent)
