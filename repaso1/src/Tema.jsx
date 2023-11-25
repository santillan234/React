import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export default function Tema ({children}) {
  const [theme, setTheme] = useState(() => ("light"))

  let elemento = document.body;
  elemento.className = theme;

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  const data = {theme, handleTheme}
  
  return(
    <>
      <ThemeContext.Provider value={data}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}