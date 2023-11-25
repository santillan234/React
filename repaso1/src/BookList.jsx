import { useContext } from "react"
import { BookTheme } from "./Libros"

export function BookList () {
  const books = useContext(BookTheme)

  return(
    <>
      {books.map( book =>
        <ul key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </ul>
      )}
    </>
  )
}