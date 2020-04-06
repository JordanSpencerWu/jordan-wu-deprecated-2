import React, { ReactElement, memo } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

type BlogPostProps = {
  date: string
  excerpt: string
  slug: string
  title: string
  words: number
  fluid: any
}

function BlogPost(props: BlogPostProps): ReactElement {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })
  const { date, fluid, excerpt, slug, title, words } = props
  const readTime = Math.ceil(words / 200)

  return (
    <animated.div className="blog-content-post-container" style={spring}>
      <div className="blog-content-post-article-container">
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
      <div className="blog-content-image-container">
        <Link to={slug}>
          <Image className="blog-content-image" fluid={fluid} />
        </Link>
      </div>
    </animated.div>
  )
}

export default memo(BlogPost)
