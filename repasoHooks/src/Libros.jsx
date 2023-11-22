import { createContext } from "react";

export const BookContext = createContext();

export const Libros = (props) => {
  const books = [
    {id: 1, title: "Dulce", author: "Santillan"},
    {id: 2, title: "Azucena", author: "Avila"}
  ]
  
  return(
    <BookContext.Provider value={books}>
      {props.children}
    </BookContext.Provider>
  )
}