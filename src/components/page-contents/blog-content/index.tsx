import React, { ReactElement, memo } from "react"
import { Link } from "gatsby"

import "./style/index.less"

type Blog = {
  date: string
  excerpt: string
  slug: string
  title: string
  words: number
}

type BlogContentProps = {
  blogs: Array<Blog>
}

function BlogContent(props: BlogContentProps): ReactElement {
  const { blogs } = props

  const renderBlogs = blogs.map(blog => {
    const { date, excerpt, slug, title, words } = blog
    const readTime = Math.ceil(words / 200)

    return (
      <div className="blog-content-post-container" key={date}>
        <Link to={slug} className="blog-content-heading">
          {title}
        </Link>
        <p className="blog-content-excerpt-sub-heading">{excerpt}</p>
        <div className="blog-content-action-section">
          <div className="blog-content-author-and-date">
            <p className="blog-content-author-sub-heading">Jordan Wu</p>
            <div className="blog-content-date-heading">
              <time>{date}</time>
              <span className="blog-content-dot"></span>
              <span>{readTime} min read</span>
            </div>
          </div>
          <Link to={slug} className="blog-content-more-link">
            ...
          </Link>
        </div>
      </div>
    )
  })

  return <section className="blog-content-container">{renderBlogs}</section>
}

export default memo(BlogContent)
