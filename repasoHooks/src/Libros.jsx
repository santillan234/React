import { createContext } from "react";

export const BookContext = createContext();

export const Libros = ({children}) => {
  const books = [
    {id: 1, title:"Rodrigo", author:"Santillan"},
    {id: 2, title:"Azu", author:"Avila"}
  ]

  return(
    <BookContext.Provider value={books}>
      {children}
    </BookContext.Provider>
  )
}