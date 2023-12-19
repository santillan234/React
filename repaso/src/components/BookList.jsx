import { useContext } from "react"
import { BookTheme } from "./Libros"

export function BookList () {
  const books = useContext(BookTheme)

  return(
    <>
      {books.map( book =>
        <ul key={book.id} style={{margin: '0 auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0px'}}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </ul>
      )}
    </>
  )
}