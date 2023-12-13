import { createContext } from "react";

export const BookTheme = createContext();

export default function Libros ({children}) {
  const libros = [
    {id: 1, title: "Rodrigo", author: "Santillan"},
    {id: 2, title: "Azucena", author: "Avila"}
  ];
  
  return(
    <>
      <BookTheme.Provider value={libros}>
        {children}
      </BookTheme.Provider>
    </>
  )
}