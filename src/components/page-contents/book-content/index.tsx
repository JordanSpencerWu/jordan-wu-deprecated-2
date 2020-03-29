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

const ENTER_KEYCODE = 13

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
        <Link to={slug} className="book-content-book-image-link">
          <Image className="book-content-image" fluid={fluid} />
        </Link>
        <div className="book-content-info-container">
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

  const handleSearchPress = event => {
    const { key } = event

    if (key === "Enter") {
      event.target.blur()
    }
  }

  const handleChange = event => {
    const value = event.target.value

    setSeachTerm(value)
  }

  return (
    <section className="book-content-container">
      <h1 className="book-content-title">My Book List</h1>
      <div className="book-content-search-container">
        <label>Search Books by Title or Author</label>
        <input
          type="text"
          value={searchTerm}
          onChange={e => handleChange(e)}
          onKeyPress={e => handleSearchPress(e)}
        />
      </div>
      {renderBooks}
    </section>
  )
}

export default memo(BookContent)
