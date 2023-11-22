import { useContext } from "react";
import { BookContext } from "./Libros";

export const BooksLista = () => {
  const books = useContext(BookContext);
  
  return(
    <ul>
      {books.map(book => 
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </li> )}
    </ul>
  )
}