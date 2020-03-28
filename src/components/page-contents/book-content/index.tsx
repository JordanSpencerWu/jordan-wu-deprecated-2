import React, { ReactElement, memo, useState } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { Search } from "js-search"

import { SPACE, EMPTY_STRING } from "../../../utils/constants"
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
  const [searchTerm, setSeachTerm] = useState(EMPTY_STRING)

  const { books } = props
  const search = new Search("slug")
  search.addIndex("title")
  search.addIndex(["authorName"])

  books.forEach(book => {
    const document = {
      ...book,
      authorName: book.author.join(SPACE),
    }

    search.addDocument(document)
  })

  const filteredBooks = search.search(searchTerm)

  const bookList = searchTerm === EMPTY_STRING ? books : filteredBooks

  const renderBooks = bookList.map((book: Book) => {
    const { author, description, fluid, slug, title } = book
    const authorText = author.join(`, `)

    return (
      <div key={slug} className="book-content-book-container fadeIn">
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

  return (
    <section className="book-content-container">
      <div className="book-content-search-container">
        <label>Search Books by Title or Author</label>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSeachTerm(e.target.value)}
        />
      </div>
      {renderBooks}
    </section>
  )
}

export default memo(BookContent)
