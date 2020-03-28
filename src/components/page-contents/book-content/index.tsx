import React, { ReactElement, memo } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import "./style/index.less"

type Book = {
  author: Array<string>
  description: string
  slug: string
  title: string
  fluid: any
}

type BookContentProps = {
  books: Array<Book>
}

function BookContent(props: BookContentProps): ReactElement {
  const { books } = props

  const renderBooks = books.map(book => {
    const { author, description, fluid, slug, title } = book

    const authorText = author.join().replace(/,/g, " ")

    return (
      <div key={slug} className="book-content-book-container">
        <Link to={slug}>
          <Image className="book-content-image" fluid={fluid} />
        </Link>
        <div>
          <Link to={slug}>
            <h4 className="book-content-title">{title}</h4>
          </Link>
          <small>By {authorText}</small>
          <p className="book-content-description">{description}</p>
          <Link className="book-content-link" to={slug}>
            ...
          </Link>
        </div>
      </div>
    )
  })
  return <section className="book-content-container">{renderBooks}</section>
}

export default memo(BookContent)
