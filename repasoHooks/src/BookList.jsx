import { useContext  } from "react";
import { BooksContext } from "./Books";

export const BookList = () => {
  const books = useContext(BooksContext)
  
  return(
    <ul>
      {books.map(book => {
        return(
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        )
      })}
    </ul>
  )
}