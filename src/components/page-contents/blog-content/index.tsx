import React, { ReactElement, memo } from "react"

import "./style/index.less"
import BlogPost from "./blog-post"

type BlogPost = {
  date: string
  excerpt: string
  fluid: any
  slug: string
  title: string
  words: number
}

type BlogContentProps = {
  blogPosts: Array<BlogPost>
}

function BlogContent(props: BlogContentProps): ReactElement {
  const { blogPosts } = props

  const renderBlogs = blogPosts.map(blogPost => (
    <BlogPost key={blogPost.slug} {...blogPost} />
  ))

  return <section className="blog-content-container">{renderBlogs}</section>
}

export default memo(BlogContent)
