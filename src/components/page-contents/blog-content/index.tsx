import React, { ReactElement, memo } from "react"
import { Link } from "gatsby"

import "./style/index.less"

type BlogPost = {
  date: string
  excerpt: string
  slug: string
  title: string
  words: number
}

type BlogContentProps = {
  blogPosts: Array<BlogPost>
}

function BlogContent(props: BlogContentProps): ReactElement {
  const { blogPosts } = props

  const renderBlogs = blogPosts.map(blogPost => {
    const { date, excerpt, slug, title, words } = blogPost
    const readTime = Math.ceil(words / 200)

    return (
      <div key={slug} className="blog-content-post-container">
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
